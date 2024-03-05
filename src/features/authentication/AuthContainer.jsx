import { useState } from 'react';
import SendOTPForm from './SendOTPForm';
import CheckOTPForm from './CheckOTPForm';
import { getOtp } from '../../services/authService';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

function AuthContainer() {
  const [step, setStep] = useState(2);
  //const [phoneNumber, setPhoneNumber] = useState('09944685701');
  const { handleSubmit, register, getValues } = useForm();
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    //e.preventDefault();
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      console.log(message);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            setStep={setStep}
            onSubmit={handleSubmit(sendOtpHandler)}
            register={register}
            //onSubmit={sendOtpHandler}
            //phoneNumber={phoneNumber}
            //onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onback={(s) => setStep(s - 1)}
            onReSendOtp={sendOtpHandler}
            otpResponse={otpResponse}
            getValues={getValues('phoneNumber')}
            //phoneNumber={phoneNumber}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm ">{renderStep()}</div>;
}

export default AuthContainer;
