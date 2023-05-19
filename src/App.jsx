import "./App.css";
import Image from "./assets/Images/Side.jpg";
import { useFormik } from "formik";
import FormValidation from "./Schema";
function App() {
  const { values, handleSubmit, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        country: "",
        checkbox: "",
      },

      onSubmit: (value) => {
        console.log("🚀 ~ file: App.jsx:20 ~ App ~ value:", value);
      },

      validationSchema: FormValidation,
    });

  return (
    <>
      <section className="container h-screen min-w-full bg-emerald-500 flex justify-center items-center">
        {/* Side image secton */}

        <div
          className="form-conainer flex flex-col
              md:flex-row-reverse justify-start 
              w-[95%] max-w-[800px] bg-white shadow-lg rounded-md "
        >
          <div className="form-image md:w-1/2">
            <img
              src={Image}
              alt="Side Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* form content */}

          <form className="block md:w-1/2 pr-4 p-8" onSubmit={handleSubmit}>
            <h2 className="bold">Lets get started 👏</h2>
            <p className="text-gray-500 text-[14px] mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus beatae ipsa quia ullam
            </p>

            {/* name input field */}
            <div className="name-section">
              <label
                htmlFor="name"
                className={`block text-[14px] ${
                  errors.name && touched.name ? "text-red-500" : null
                }`}
              >
                {`${errors.name && touched.name ? errors.name : "Name"}`}
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                id="name"
                className="border border-gray-400 p-1 rounded-sm block w-[80%] 
                focus:outline-emerald-500"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            {/* Email input field */}
            <div className="email-section my-3">
              <label
                htmlFor="email"
                className={`block text-[14px] ${
                  errors.email && touched.email ? "text-red-500" : null
                }`}
              >
                {`${errors.email && touched.email ? errors.email : "Email"}`}
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                id="email"
                className="border border-gray-400 p-1 rounded-sm block w-[80%]
                focus:outline-emerald-500"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            {/* Country select field */}
            <div className="country-section block my-3">
              <label
                className={`block text-[14px] ${
                  errors.country && touched.country ? "text-red-500" : null
                }`}
              >
                {`${
                  errors.country && touched.country
                    ? errors.country
                    : "Select Country"
                }`}
              </label>
              <select
                name="country"
                className="border border-gray-400 p-1 rounded-sm 
                block w-[80%] focus:outline-emerald-500"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="Nepal">Afaganistan</option>
                <option value="Bangladesh">Bangaladesh</option>
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
                <option value="Pakistan">Pakistan</option>
              </select>
            </div>

            {/* Checkbox option */}
            <label className={`block text-[14px] ${
                  errors.checkbox && touched.checkbox ? "text-red-500" : null
                }`}>
                     {`${
                  errors.checkbox && touched.checkbox
                    ? errors.checkbox
                    : "Terms and Condition"
                }`}
                </label>
            <div className="terms-service my-3 flex gap-3">

              <input
                type="checkbox"
                id="check"
                name="checkbox"
                value="checked"
                className="border border-gray-400 p-2 
                block w-fu focus:outline-emerald-500 checked:accent-emerald-500 checked:color-white"
                onChange={handleChange}
              ></input>
              <label htmlFor="check" className="block text-[14px]">
                I accept all agrement
              </label>
            </div>
  
            {/* submit button */}
            <input
              type="submit"
              value="Start learning today"
              className="border border-gray-400 p-1 rounded-sm block w-[80%]
               bg-emerald-500 text-white cursor-pointer border-none
               hover:bg-emerald-700 hover:transition-all hover:delay-75"
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
