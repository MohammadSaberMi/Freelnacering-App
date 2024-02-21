

function TextField({label ,value,onChange,name}) {
  return (
        <div>
            <label className="mb-2 block" htmlFor={name}> {label}  </label>
            <input
             type="text"
             className="textField__input"
             value={value}
             onChange={onChange}
             id={name}
             name={name}
             autoComplete="off"
             />
        </div>
  )
}

export default TextField