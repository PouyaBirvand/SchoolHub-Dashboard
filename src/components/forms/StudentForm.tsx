"use client";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputField from "../InputField";
import Image from "next/image";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters long!")
    .max(20, "Username must be at most 20 characters long!")
    .required(),
  email: Yup.string().email("Invalid email address!").required(),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long!")
    .required(),
  firstName: Yup.string().required("First name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  phone: Yup.string().required("Phone is required!"),
  address: Yup.string().required("Address is required!"),
  bloodType: Yup.string().required("Blood Type is required!"),
  birthday: Yup.date().required("Birthday is required!"),
  sex: Yup.string().oneOf(["male", "female"]).required("Sex is required!"),
  img: Yup.mixed().required("Image is required"),
});

const StudentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const initialValues = {
    username: data?.username || "",
    email: data?.email || "",
    password: data?.password || "",
    firstName: data?.firstName || "",
    lastName: data?.lastName || "",
    phone: data?.phone || "",
    address: data?.address || "",
    bloodType: data?.bloodType || "",
    birthday: data?.birthday || "",
    sex: data?.sex || "male",
    img: null,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="flex flex-col gap-8">
          <h1 className="text-xl font-semibold">Create a new student</h1>
          
          <span className="text-xs text-gray-400 font-medium">
            Authentication Information
          </span>
          
          <div className="flex justify-between flex-wrap gap-4">
            <InputField
              label="Username"
              name="username"
              type="text"
            />
            <InputField
              label="Email"
              name="email"
              type="email"
            />
            <InputField
              label="Password"
              name="password"
              type="password"
            />
          </div>

          <span className="text-xs text-gray-400 font-medium">
            Personal Information
          </span>

          <div className="flex justify-between flex-wrap gap-4">
            <InputField
              label="First Name"
              name="firstName"
            />
            <InputField
              label="Last Name"
              name="lastName"
            />
            <InputField
              label="Phone"
              name="phone"
            />
            <InputField
              label="Address"
              name="address"
            />
            <InputField
              label="Blood Type"
              name="bloodType"
            />
            <InputField
              label="Birthday"
              name="birthday"
              type="date"
            />

            <div className="flex flex-col gap-2 w-full md:w-1/4">
              <label className="text-xs text-gray-500">Sex</label>
              <Field
                as="select"
                name="sex"
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              {errors.sex && touched.sex && (
                <p className="text-xs text-red-400">{errors.sex}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
              <label
                className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                htmlFor="img"
              >
                <Image src="/upload.png" alt="" width={28} height={28} />
                <span>Upload a photo</span>
              </label>
              <input
                type="file"
                id="img"
                className="hidden"
                onChange={(event) => {
                  setFieldValue("img", event.currentTarget.files?.[0]);
                }}
              />
              {errors.img && touched.img && (
                <p className="text-xs text-red-400">{errors.img as string}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-400 text-white p-2 rounded-md"
          >
            {type === "create" ? "Create" : "Update"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default StudentForm;