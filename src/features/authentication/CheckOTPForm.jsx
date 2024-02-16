import { useState } from "react";
import  OTPInput from 'react-otp-input';
import { useMutation } from '@tanstack/react-query';
import { checkOtp } from "../../services/authService";
import { toast } from 'react-hot-toast';


function CheckOTPForm({phoneNumber}) {
  const [otp, setOtp] = useState("");
 const {isPending,error,data ,mutateAsync}= useMutation({
  mutationFn:checkOtp,

  });
  const CheckOtpHandler = async (e)=>{
    e.preventDefault();
  try {
   const data= await mutateAsync({phoneNumber,otp});
    toast.success(data);
    //name ,email ,role =>push to slash owner /freelancer
    //push to complete profile -> name,.. 
  } catch (error) {
    toast.error(error?.response?.data?.message);
    
  } 
  
  }

    return (
    <div>
        <form className="space-y-8 "onChange={CheckOtpHandler}>
            <p className="font-bold text-secondary-800">کد تایید را وارد کنید </p>
            <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input type="number" {...props} />}
            containerStyle="flex flex-row-reverse gap-x-2 justify-center "
            inputStyle={{
            width:"2.5rem",
            padding:"0.5rem 0.2rem",
            border:"1px solid rgb(var(--color-primary-300))",
            borderRadius:"0.5rem",
              
            }}
    />   
    <button className="btn btn--primary w-full">تایید </button>      
        </form>
    </div>
  )
}

export default CheckOTPForm;