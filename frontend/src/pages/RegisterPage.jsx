import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { FaKey, FaEnvelope, FaUser, FaGoogle } from "react-icons/fa";
import * as Yup from "yup";

function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: values => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <div className="h-screen w-full flex items-center justify-center tracking-wider">
      <div className="w-11/12 sm:w-5/12 md:w-3/12 text-sm glass">
        <div className="w-full text-center my-3">
          <h2 className="text-2xl text-black font-medium">Register</h2>
        </div>

        <form className="my-2" autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="text"
              id="name"
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your name"
              {...formik.getFieldProps('name')}
            />
            <div className="w-2/12 flex items-center justify-center">
              <FaUser />
            </div>
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-xs mx-5">{formik.errors.name}</div>
          ) : null}

          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="email"
              id="email"
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your email"
              {...formik.getFieldProps('email')}
            />
            <div className="w-2/12 flex items-center justify-center">
              <FaEnvelope />
            </div>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs mx-5">{formik.errors.email}</div>
          ) : null}

          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="password"
              id="password"
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your password"
              {...formik.getFieldProps('password')}
            />
            <div className="w-2/12 flex items-center justify-center">
              <FaKey />
            </div>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs mx-5">{formik.errors.password}</div>
          ) : null}

          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="password"
              id="confirmpassword"
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Confirm Password"
              {...formik.getFieldProps('confirmpassword')}
            />
            <div className="w-2/12 flex items-center justify-center">
              <FaKey />
            </div>
          </div>
          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <div className="text-red-500 text-xs mx-5">{formik.errors.confirmpassword}</div>
          ) : null}

          <div className="mx-5 my-2 py-2">
            <button type="submit" className="bg-black w-full h-[35px] rounded-sm text-white">Register</button>
          </div>

          <div className="text-center">
            or
          </div>

          <div className="mx-5 my-2 py-2">
            <button className="bg-black w-full h-[35px] rounded-sm text-white flex items-center justify-center gap-5">
              <FaGoogle /> Continue with Google
            </button>
          </div>

          <Link to='/Login' className="mx-5 my-5 py-2 flex items-center justify-center cursor-pointer">
            <p className="text-sm">Already have an account? Login</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
