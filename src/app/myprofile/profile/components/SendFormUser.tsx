"use client";
import { useFormik } from "formik";
import { btnHoverOrange } from "../../../page";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short First Name!")
    .max(35, "Too Long First Name!")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Too Short Last Name!")
    .max(35, "Too Long Last Name!")
    .required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .min(14, "Too Short Phone number!")
    .max(14, "Too Long Phone number!"),
  age: Yup.date().required("Your age is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string()
    .min(2, "Too Short Country Name!")
    .max(50, "Too Long Country Name!")
    .required("Country is required"),
  address: Yup.string()
    .min(2, "Too Short Address Name!")
    .max(50, "Too Long Address Name!"),
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: Date;
  country: string;
  city: string;
  address: string;
}

export const styleInputProfile = (
  formikError: string,
  formikTouch: undefined | boolean
) => {
  return `bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%] ${
    formikError && formikTouch ? "bg-[#ffe3e3]" : "bg-[blue1]"
  }`;
};

export const ErrorMessageText = (text: string) => {
  return (
    <span className="text-xs text-[red] absolute top-[15px] right-[20px]">
      {text}
    </span>
  );
};

export const SendFormUser: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: new Date(),
      country: "",
      city: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="my-[1.5rem] flex flex-col gap-[1.5rem]"
    >
      <ul className="flex flex-col gap-[1.5rem]">
        <li>
          <label htmlFor="firstName" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">
              First Name<span className="text-[red]">*</span>
            </p>
            <div className="flex flex-col w-[100%] relative">
              <input
                required
                type="text"
                placeholder="Name"
                name="firstName"
                id="firstName"
                className={styleInputProfile(
                  formik.errors.firstName,
                  formik.touched.firstName
                )}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.errors.firstName &&
                formik.touched.firstName &&
                ErrorMessageText(formik.errors.firstName)}
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="lastName" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">
              Last Name<span className="text-[red]">*</span>
            </p>
            <div className="flex flex-col w-[100%] relative">
              <input
                required
                type="text"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
                className={styleInputProfile(
                  formik.errors.lastName,
                  formik.touched.lastName
                )}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.errors.lastName &&
                formik.touched.lastName &&
                ErrorMessageText(formik.errors.lastName)}
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="email" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">
              Your email<span className="text-[red]">*</span>
            </p>
            <div className="flex flex-col w-[100%] relative">
              <input
                required
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className={styleInputProfile(
                  formik.errors.email,
                  formik.touched.email
                )}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email &&
                formik.touched.email &&
                ErrorMessageText(formik.errors.email)}
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="phone" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">
              Phone number<span className="text-[red]">*</span>
            </p>
            <div className="flex flex-col w-[100%] relative">
              <input
                required
                type="tel"
                placeholder="Phone number"
                id="phone"
                name="phone"
                className={styleInputProfile(
                  formik.errors.phone,
                  formik.touched.phone
                )}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.errors.phone &&
                formik.touched.phone &&
                ErrorMessageText(formik.errors.phone)}
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="age" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">
              Your age<span className="text-[red]">*</span>
            </p>
            <div className="flex flex-col w-[100%] relative">
              <input
                required
                type="date"
                placeholder="Name"
                id="age"
                name="age"
                className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.age &&
                formik.touched.age &&
                ErrorMessageText("Your age is required")}
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="country" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">
              Country<span className="text-[red]">*</span>
            </p>
            <div className="flex flex-col w-[100%] relative">
              <input
                required
                type="text"
                placeholder="Country"
                id="country"
                name="country"
                className={styleInputProfile(
                  formik.errors.country,
                  formik.touched.country
                )}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              />
              {formik.errors.country &&
                formik.touched.country &&
                ErrorMessageText(formik.errors.country)}
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="city" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">
              City<span className="text-[red]">*</span>
            </p>
            <div className="flex flex-col w-[100%] relative">
              <input
                required
                type="text"
                placeholder="City"
                id="city"
                name="city"
                className={styleInputProfile(
                  formik.errors.city,
                  formik.touched.city
                )}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              {formik.errors.city &&
                formik.touched.city &&
                ErrorMessageText(formik.errors.city)}
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="address" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">Address</p>
            <div className="flex flex-col w-[100%] relative">
              <input
                type="text"
                placeholder="Address"
                id="address"
                name="address"
                className={styleInputProfile(
                  formik.errors.address,
                  formik.touched.address
                )}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.errors.address &&
                formik.touched.address &&
                ErrorMessageText(formik.errors.address)}
            </div>
          </label>
        </li>
      </ul>
      <div className="flex justify-end">
        <button
          className={`${btnHoverOrange} px-2 py-[0.625rem]  text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[10rem] rounded-[0.625rem]`}
        >
          Save
        </button>
      </div>
    </form>
  );
};
