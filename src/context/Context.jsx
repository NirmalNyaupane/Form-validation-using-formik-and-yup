import {useState, createContext} from 'react'

const FormContext = createContext(null);

export const ContextForm = (props) =>{
    const [formData, changeForm] = useState({});
    
    const chageState = (items)=>{
            changeForm(items);
    }

    const ContextValue = {formData, chageState};

    // eslint-disable-next-line react/prop-types
    return <FormContext.Provider value={ContextValue}>{props.children}</FormContext.Provider>
}

export default FormContext;