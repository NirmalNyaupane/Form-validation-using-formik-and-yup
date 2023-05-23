import { useContext } from "react";
import FormContext from './context/Context';
const Sucessmessage = () => {
  const {formData} = useContext(FormContext);
  return (
   
    <>
      <section className="container h-screen min-w-full bg-emerald-500 flex justify-center items-center">
        <div className="bg-white p-9 shadow-lg rounded-lg">
            <h1 className="font-bold text-lg mb-2">Thank you for the {formData.name}</h1>
            <p>Your account has been registered</p>
            <p>We have send email to <b>{formData.email}</b></p>
        </div>
      </section>
    </>
  );
};
export default Sucessmessage;
