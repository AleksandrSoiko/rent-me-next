"use client";
import { useFormik } from "formik";
import Image from "next/image";
import * as Yup from "yup";

interface FormValues {
  title: string;
  address: string;
  price: number;
  numBedrooms: number;
  description: string;
  photo: File[];
  company: string;
  agentName: string;
  phone: string;
  email: string;
}

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short title!")
    .max(35, "Too Long title!")
    .required("Name is required"),
  address: Yup.string()
    .min(2, "Too Short address!")
    .max(35, "Too Long address!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Email is phone"),
  price: Yup.string().required("Email is price"),
  numBedrooms: Yup.string().required("Num.Bedrooms is required"),
  description: Yup.string().required("Description is required"),
  company: Yup.string().required("Company name is required"),
  agentName: Yup.string().required("Agent name is required"),
});

const FormOut = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      title: "",
      address: "",
      price: 1,
      numBedrooms: 0,
      description: "",
      photo: [],
      company: "",
      agentName: "",
      phone: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    num: number
  ) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const photoArray = [...formik.values.photo];
      photoArray[num] = selectedFile;
      formik.setFieldValue("photo", photoArray);
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-6 lg:mb-[2.19rem] lg:grid-cols-2 lg:grid lg:rounded-[0.75rem] lg:shadow-[0px_4px_16px_0px_#D7E5FF] lg:py-10 lg:px-10"
    >
      <label
        htmlFor="title"
        className="font-Manrope text-base font-medium leading-[1.2rem]"
      >
        Title*
        <input
          required
          type="text"
          name="title"
          id="title"
          className={`w-[100%] px-4 py-4 mt-2 rounded-[0.5rem] text-black ${
            formik.touched.title === undefined &&
            formik.errors.title === undefined
              ? "bg-light_blue_opacity"
              : "bg-light_red_opacity"
          }`}
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </label>
      <label
        htmlFor="address"
        className="font-Manrope text-base font-medium leading-[1.2rem]"
      >
        Address*
        <input
          required
          type="text"
          name="address"
          id="address"
          className={`w-[100%] px-4 py-4 mt-2 rounded-[0.5rem] text-black ${
            formik.touched.address === undefined &&
            formik.errors.address === undefined
              ? "bg-light_blue_opacity"
              : "bg-light_red_opacity"
          }`}
          onChange={formik.handleChange}
          value={formik.values.address}
        />
      </label>
      <label
        htmlFor="price"
        className="font-Manrope text-base font-medium leading-[1.2rem] lg:mt-8"
      >
        Price*
        <input
          required
          min="1"
          type="number"
          name="price"
          id="price"
          className={`w-[100%] px-4 py-4 mt-2 rounded-[0.5rem] text-black ${
            formik.touched.price === undefined &&
            formik.errors.price === undefined
              ? "bg-light_blue_opacity"
              : "bg-light_red_opacity"
          }`}
          onChange={formik.handleChange}
          value={formik.values.price}
        />
      </label>
      <label
        htmlFor="bumBedrooms"
        className="font-Manrope text-base font-medium leading-[1.2rem] lg:mt-8"
      >
        Number of bedrooms*
        <input
          required
          type="number"
          name="numBedrooms"
          id="numBedrooms"
          className={`w-[100%] px-4 py-4 mt-2 rounded-[0.5rem] text-black ${
            formik.touched.numBedrooms === undefined &&
            formik.errors.numBedrooms === undefined
              ? "bg-light_blue_opacity"
              : "bg-light_red_opacity"
          }`}
          onChange={formik.handleChange}
          value={formik.values.numBedrooms}
        />
      </label>
      <label
        htmlFor="bedrooms"
        className="font-Manrope text-base font-medium leading-[1.2rem] col-span-2 lg:mt-6"
      >
        Description*
        <textarea
          required
          name="description"
          id="description"
          className="w-[100%] h-[7.5rem] px-4 py-4 bg-light_blue_opacity mt-2 rounded-[0.5rem] "
          onChange={formik.handleChange}
          value={formik.values.description}
        ></textarea>
      </label>
      <div className="col-span-2 lg:mt-8 ">
        <p>Photo upload*</p>
        <div className="flex max-lg:justify-between mt-2 lg:gap-8 lg:h-[140px]">
          {[0, 1, 2, 3].map((num) => (
            <label key={num} id="file" htmlFor={`file-input-${num}`}>
              <input
                type="file"
                id={`file-input-${num}`}
                className="hidden"
                onChange={(e) => handleFileChange(e, num)}
              />
              <Image
                src={
                  formik.values.photo[num]
                    ? URL.createObjectURL(formik.values.photo[num])
                    : "/account/plus.svg"
                }
                width="72"
                height="72"
                alt="find"
                className="lg:w-[140px] lg:h-[140px]"
              />
            </label>
          ))}
        </div>
      </div>
      <label
        htmlFor="company"
        className="font-Manrope text-base font-medium leading-[1.2rem] lg:mt-14"
      >
        Company*
        <input
          required
          type="text"
          name="company"
          id="company"
          className={`w-[100%] px-4 py-4 mt-2 rounded-[0.5rem] text-black ${
            formik.touched.company === undefined &&
            formik.errors.company === undefined
              ? "bg-light_blue_opacity"
              : "bg-light_red_opacity"
          }`}
          onChange={formik.handleChange}
          value={formik.values.company}
        />
      </label>
      <label
        htmlFor="agent"
        className="font-Manrope text-base font-medium leading-[1.2rem] lg:mt-14"
      >
        Agent name*
        <input
          required
          type="text"
          name="agentName"
          id="agentName"
          className={`w-[100%] px-4 py-4 mt-2 rounded-[0.5rem] text-black ${
            formik.touched.agentName === undefined &&
            formik.errors.agentName === undefined
              ? "bg-light_blue_opacity"
              : "bg-light_red_opacity"
          }`}
          onChange={formik.handleChange}
          value={formik.values.agentName}
        />
      </label>
      <label
        htmlFor="phone"
        className="font-Manrope text-base font-medium leading-[1.2rem] lg:mt-8"
      >
        Phone number*
        <input
          required
          type="tel"
          name="phone"
          id="phone"
          className={`w-[100%] px-4 py-4 mt-2 rounded-[0.5rem] text-black ${
            formik.touched.phone === undefined &&
            formik.errors.phone === undefined
              ? "bg-light_blue_opacity"
              : "bg-light_red_opacity"
          }`}
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
      </label>
      <label
        htmlFor="Email"
        className="font-Manrope text-base font-medium leading-[1.2rem] lg:mt-8"
      >
        Email address*
        <input
          required
          type="email"
          name="email"
          id="email"
          className={`w-[100%] px-4 py-4 mt-2 rounded-[0.5rem] text-black ${
            formik.touched.email === undefined &&
            formik.errors.email === undefined
              ? "bg-light_blue_opacity"
              : "bg-light_red_opacity"
          }`}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </label>
      <div className="flex gap-4 col-span-2">
        <button
          type="submit"
          className="px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[9.75rem] rounded-[0.625rem]"
        >
          Add
        </button>
        <button
          type="button"
          className="px-2 py-[0.625rem] whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[9.75rem] rounded-[0.625rem]"
        >
          Save in drafts
        </button>
      </div>
    </form>
  );
};

export default FormOut;
