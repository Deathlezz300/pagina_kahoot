import { useState } from "react";

export const useForm=(initialState)=>{

    const [form, setform] = useState(initialState);


    const onInputChange=({target})=>{
        const {value,name}=target;
        setform({
            ...form,
            [name]:value
        });
    }

    return {
        ...form,
        onInputChange
    }
}