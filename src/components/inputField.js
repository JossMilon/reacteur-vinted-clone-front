const InputField = ({id, type, setFunc, label, placeholder}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input onChange={(e) => {setFunc(e.target.value)}} type={type} id={id} placeholder={placeholder} />
        </>
    )
};

export default InputField;