import {useState} from "react";

const useInputValidation = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => setValue(e.target.value)

    const validateInput = () => value.search(/\d/) >= 0;

    const validateColor = validateInput() ? 'text-danger' : null
    return {value, onChange, validateInput, validateColor}
}

export default useInputValidation;