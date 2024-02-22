import { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import { useMutation } from '@tanstack/react-query';
import { checkOtp } from '../../services/authService';
import { toast } from 'react-hot-toast';
import Loading from '../../ui/Loading';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { CiEdit } from 'react-icons/ci';
const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onback, onReSendOtp, otpResponse }) {
  const [otp, setOtp] = useState(' ');
  const navigate = useNavigate();
  const [time, setTime] = useState(RESEND_TIME);
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);
  const CheckOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate('/complete-profile');
      if (user.status !== 2) {
        navigate('/');
        toast.error('پروفایل شما در انتظار تایید است ', { icon: '👏' });
        return;
      }

      if (user.role === 'OWNER') return navigate('/owner');
      if (user.role === 'FRELANCER') return navigate('/frelancer');

      //console.log(data);
      //name ,email ,role =>push to slash owner /freelancer
      //push to complete profile -> name,..
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <button onClick={onback}>
        <HiArrowRight className="w-6 h-6 text-secondary-600" />
      </button>
      {otpResponse && (
        <p className="flex items-center gap-x-2 my-4">
          <span>{otpResponse?.message}</span>
          <button onClick={onback}>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </button>
        </p>
      )}
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onReSendOtp}>ارسال مجدد کد تایید </button>
        )}
      </div>
      <form className="space-y-8 " onSubmit={CheckOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2  justify-center"
          inputStyle={{
            width: '2.5rem',
            padding: '0.5rem 0.2rem',
            border: '1px solid rgb(var(--color-primary-400))',
            borderRadius: '0.5rem',
          }}
        />
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
  );
}

export default CheckOTPForm;
