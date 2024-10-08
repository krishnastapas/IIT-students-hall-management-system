import InputField from "../../../components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "../../../components/checkbox";
import { useState } from "react"
import { wardenLogin } from "../repository";
import { useUserAuth } from "../../context/UserAuthContext";
import { AdminInterface } from "../../context/Model";
import { SetJwtToken } from "../../../utils/function";
import { useNavigate } from "react-router-dom";


export default function WardenLogin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate()
  const { authLogIn } = useUserAuth()
  const handleSignIn = async () => {
    console.log(email)
    console.log(password)
    const res = await wardenLogin({ email: email, password: password });
    if (res?.code == 200) {
      authLogIn(res.data.userInfo);
      SetJwtToken(res.data.jwtToken);
      if(res.data.userInfo.permissionNo==2000){
        navigate("/warden/dashboard")
      }
      // navigate("/super-admin/student-list");
    }
  }
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Warden Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        {/* <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div> */}
        {/* <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div> */}
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
          value={email}
          handleChange={(value: string) => {
            console.log(value)
            setEmail(value)
          }}

        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
          value={password}
          handleChange={(value) => {
            setPassword(value)
          }}
        />
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          {/* <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a> */}
        </div>
        <button
          onClick={handleSignIn}
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Sign In
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Admin Login ?
          </span>
          <a
            href="/admin/login"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Sign In here
          </a>
        </div>
      </div>
    </div>
  );
}
