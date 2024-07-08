import React from "react"
import { Link } from "react-router-dom"
import { useFormik } from "formik"

function RegisterPage() {

  const formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      password:"",
      confirmpassword:"",
      
    },
  })

  console.log(formik)
  return (

    <div className="h-screen w-full flex items-center justify-center tracking-wider">

    <div className="w-11/12 sm:w-5/12 md:w-3/12 text-sm glass" >

    <div className="w-full text-center my-3" >

      <h2 className="text-2xl text-black font-medium">Register</h2>
      
    </div>





    <form className="my-2" autoComplete="off">


    <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">

      <input type="text" id="name" className="w-11/12 bg-transparent outline-none placeholder-black" placeholder="Enter your name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />

      <div className="w-2/12 flex items-center justify-center">
      <i className="fa-solid fa-user text-xl"></i>
      </div>

    </div>


    <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">

    <input type="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-11/12 bg-transparent outline-none placeholder-black" placeholder="Enter your email" />

    <div className="w-2/12 flex items-center justify-center">
    <i className="fa-solid fa-envelope text-xl"></i>
    </div>

    </div>


    <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">

    <input type="password" className="w-11/12 bg-transparent outline-none placeholder-black" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter your password" />

    <div className="w-2/12 flex items-center justify-center">
    <i className="fa-solid fa-key text-xl"></i>
    </div>

    </div>


    <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">

    <input type="password" className="w-11/12 bg-transparent outline-none placeholder-black" placeholder="Confirm Password" id="confirmpassword" value={formik.values.confirmpassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />

    <div className="w-2/12 flex items-center justify-center">
    <i className="fa-solid fa-key text-xl"></i>
    </div>

    </div>

    <div className="mx-5 my-7 py-2">
    <button className="bg-black w-full h-[35px] rounded-sm text-white">Register</button>
    </div>


    <Link className="mx-5 my-5 py-2 flex items-center justify-center cursor-pointer">
      <p className="text-sm">Already have an account? Login </p>
    </Link>


    </form>
    
    </div>

    </div>
  )
}

export default RegisterPage