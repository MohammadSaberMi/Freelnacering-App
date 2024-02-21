import TextField from '../../ui/TextField';
import Loading from '../../ui/Loading';

function SendOTPForm({ onChange, phoneNumber, onSubmit, isSendingOtp }) {
  //usequire , => get
  //useMutation , =>post, put, delete, patch
  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          label=" شماره موبایل"
          name={phoneNumber}
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {isSendingOtp ? (
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

export default SendOTPForm;
