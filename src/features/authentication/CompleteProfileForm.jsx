import { useState } from 'react';
import TextField from '../../ui/TextField';
import RadioInput from '../../ui/RadioInput';
import { useMutation } from '@tanstack/react-query';
import { completeProfile } from '../../services/authService';
import { toast } from 'react-hot-toast';
import { data } from 'autoprefixer';

function CompleteProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const handlSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      toast.success(message);
      console.log(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handlSubmit}>
          <TextField
            label="نام و نام خانوادگی "
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            label="ایمیل "
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex items-center justify-center gap-x-5">
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
          </div>
          <button className="btn btn--primary w-full"> تایید</button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
