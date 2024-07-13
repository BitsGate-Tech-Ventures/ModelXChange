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
    <div className="h-screen w-full flex items-center justify-center tracking-wider bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-md rounded-lg">
        <div className="w-full text-center my-3">
          <h2 className="text-2xl text-white font-medium">Register</h2>
        </div>

        <form className="my-2" autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="flex items-center border-b-2 border-gray-600 mx-1 my-5 py-2">
            <input
              type="text"
              id="name"
              className="flex-grow bg-transparent outline-none placeholder-gray-400 text-white px-2"
              placeholder="Enter your name"
              {...formik.getFieldProps('name')}
            />
            <FaUser className="text-gray-400 mx-2" />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-xs mx-1">{formik.errors.name}</div>
          ) : null}

          <div className="flex items-center border-b-2 border-gray-600 mx-1 my-5 py-2">
            <input
              type="email"
              id="email"
              className="flex-grow bg-transparent outline-none placeholder-gray-400 text-white px-2"
              placeholder="Enter your email"
              {...formik.getFieldProps('email')}
            />
            <FaEnvelope className="text-gray-400 mx-2" />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs mx-1">{formik.errors.email}</div>
          ) : null}

          <div className="flex items-center border-b-2 border-gray-600 mx-1 my-5 py-2">
            <input
              type="password"
              id="password"
              className="flex-grow bg-transparent outline-none placeholder-gray-400 text-white px-2"
              placeholder="Enter your password"
              {...formik.getFieldProps('password')}
            />
            <FaKey className="text-gray-400 mx-2" />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs mx-1">{formik.errors.password}</div>
          ) : null}

          <div className="flex items-center border-b-2 border-gray-600 mx-1 my-5 py-2">
            <input
              type="password"
              id="confirmpassword"
              className="flex-grow bg-transparent outline-none placeholder-gray-400 text-white px-2"
              placeholder="Confirm Password"
              {...formik.getFieldProps('confirmpassword')}
            />
            <FaKey className="text-gray-400 mx-2" />
          </div>
          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <div className="text-red-500 text-xs mx-1">{formik.errors.confirmpassword}</div>
          ) : null}

          <div className="mx-1 my-2 py-2">
            <button type="submit" className="bg-gray-700 w-full h-[40px] rounded text-white">Register</button>
          </div>

          <div className="text-center text-gray-400 my-2">
            <p>or</p>
          </div>

          <div className="mx-1 my-2 py-2">
            <button className="bg-gray-700 w-full h-[40px] rounded text-white flex items-center justify-center gap-2">
              <FaGoogle /> Continue with Google
            </button>
          </div>

          <Link to='/Login' className="mx-1 my-5 py-2 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <p className="text-sm text-gray-400">Already have an account? Login</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
