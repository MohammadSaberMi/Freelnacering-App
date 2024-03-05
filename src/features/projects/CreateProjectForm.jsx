import { useState } from 'react';
import REHSelect from '../../ui/REHSelect';
import TextField from './../../ui/TextField';
import { useForm } from 'react-hook-form';
import { TagsInput } from 'react-tag-input-component';
import DatePickerField from '../../ui/DatePickerField';
import useCategories from '../../hooks/useCategorys';
import useCreateProject from './useCreateProject';
import Loading from './../../ui/Loading';
import useEditeProject from './useEditeProject';

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const {
    tags: prevTags,
    title,
    description,
    budget,
    deadline,
    category,
  } = projectToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      deadline,
      description,
      budget,
      category: category._id,
      tags: prevTags,
    };
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });
  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(deadline || '');
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { editProject, isEditing } = useEditeProject();
  //title ,discrip ,category ,tags ,budget,deadline
  // input text /numbers
  //categories => select option
  //tags => multi input
  //deadline =>date picker
  // title =>8 character password  => validation
  // frontend :not efficient => formik - react-hook-form (optimum performance  )
  // backend : ok!
  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        },
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="title"
          label="عنوان پروژه"
          register={register}
          required
          validationSchema={{
            required: 'عنوان ضروری است',
            minLength: {
              value: 10,
              message: 'طول عنوان نامعتبر است',
            },
          }}
          errors={errors}
        />
      </form>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="description"
          label="توضیحات"
          register={register}
          required
          validationSchema={{
            required: 'توضیحات ضروری است',
            minLength: {
              value: 15,
              message: 'حداقل 15 کاراکتر باید باشد',
            },
          }}
          errors={errors}
        />
      </form>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="budget"
          label="بودجه "
          type="number"
          register={register}
          required
          validationSchema={{
            required: 'بودجه ضروری است',
            minLength: {
              value: 8,
              message: 'طول عنوان نامعتبر است',
            },
          }}
          errors={errors}
        />
        <REHSelect
          label="دسته بندی"
          name="category"
          register={register}
          options={categories}
          required
        />
        <div>
          <label className="mb-2 block text-secondary-700">تگ</label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>
        <DatePickerField date={date} setDate={setDate} label="ددلاین" />
        <div className="mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProjectForm;
