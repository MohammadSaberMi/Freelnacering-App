import { useState } from 'react';
import TextField from './../../ui/TextField';
import { useForm } from 'react-hook-form';
import { data } from 'autoprefixer';

function CreateProjectForm() {
  const [title, setTitle] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //title ,discrip ,category ,tags ,budget,deadline
  // input text /numbers
  //categories => select option
  //tags => multi input
  //deadline =>date picker
  // title =>8 character password  => validation
  // frontend :not efficient => formik - react-hook-form (optimum performance  )
  // backend : ok!
  const onSubmit = (data) => {
    console.log(data);
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
        <button type="submit" className="btn btn--primary w-full">
          تایید{' '}
        </button>
      </form>
    </div>
  );
}

export default CreateProjectForm;
