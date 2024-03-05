import TextField from '../../ui/TextField';
import { useMutation } from '@tanstack/react-query';
import { completeProfile } from '../../services/authService';
import { toast } from 'react-hot-toast';
import Loading from '../../ui/Loading';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import RadioInputGroup from '../../ui/RadioInputGroup';

function CompleteProfileForm() {
  //const [name, setName] = useState('');
  //const [email, setEmail] = useState('');
  //const [role, setRole] = useState('');
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      //const { user, message } = await mutateAsync({ name, email, role });
      toast.success(message);
      if (user.status !== 2) {
        navigate('/');
        toast.error('پروفایل شما در انتظار تایید است ');
        return;
      }

      if (user.role === 'OWNER') return navigate('/owner');
      if (user.role === 'FRELANCER') return navigate('/frelancer');

      console.log(message, user);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="نام و نام خانوادگی "
            name="name"
            register={register}
            validationSchema={{
              required: 'نام و نام خانوادگی  ضروری است',
            }}
            errors={errors}
            //onChange={(e) => setName(e.target.value)}
            //value={name}
          />
          <TextField
            label="ایمیل "
            name="email"
            register={register}
            validationSchema={{
              required: 'ایمیل ضروری است',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'ایمیل نامعتبر است',
              },
            }}
            errors={errors}
            //onChange={(e) => setEmail(e.target.value)}
            //value={email}
          />
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: 'role',
              validationSchema: { required: 'انتخاب نقش ضروری است' },
              options: [
                {
                  value: 'OWNER',
                  label: 'کارفرما',
                },
                { value: 'FREELANCER', label: 'فریلنسر' },
              ],
            }}
          />
          {/*<div className="flex items-center justify-center gap-x-5">
            <RadioInput
              label="کارفرما"
              value="OWNER"
              id="OWNER"
              name="role"
              onChange={(e) => setRole(e.target.value)}
              checked={role === 'OWNER'}
            />
            <RadioInput
              label="فریلنسر"
              value="FREELANCER"
              id="FREELANCER"
              name="role"
              onChange={(e) => setRole(e.target.value)}
              checked={role === 'FREELANCER'}
            />
          </div>*/}

          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
