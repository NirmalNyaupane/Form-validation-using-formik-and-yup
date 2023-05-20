import { useSearchParams } from "react-router-dom";

const Sucessmessage = () => {
  const [param] = useSearchParams();
  return (
    <>
      <section className="container h-screen min-w-full bg-emerald-500 flex justify-center items-center">
        <div className="bg-white p-9 shadow-lg rounded-lg">
            <h1 className="font-bold text-lg mb-2">Thank you for the {param.name}</h1>
            <p>Your account has been registered</p>
            <p>We have send email to ${param.email}</p>
        </div>
      </section>
    </>
  );
};
export default Sucessmessage;
