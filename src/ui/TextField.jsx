function TextField({
  label,
  register,
  validationSchema,
  name,
  type = 'text',
  required,
  errors,
}) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        type={type}
        className="textField__input"
        id={name}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>
      )}
    </div>
  );
}

export default TextField;
