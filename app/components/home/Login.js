import { forwardRef } from "react";

const Login = forwardRef(function Login(props, ref) {
  return (
    <>
      <div
        ref={ref}
        className={"w-full z-50 fixed justify-center hidden mt-20"}
      >
        <div className="container border bg-white w-11/12 py-10 px-10 rounded-3xl text-center ">
          <h1 className=" font-bold text-xl mb-5">Login</h1>
          <form>
            <div className="mb-5">
              <label className="block text-left">Username</label>
              <input type="text" className="w-full rounded-md"></input>
            </div>
            <div className="mb-5">
              <label className="text-left block">Password</label>
              <input type="password" className="w-full rounded-md"></input>
            </div>
            <div className="text-left">
              <label className=" inline-flex items-center">
                <input type="checkbox" className="mr-2 text-green-500"></input>
                Remember Me
              </label>
            </div>
          </form>
          <div>
            <button className=" bg-blue-500 py-2 px-5 rounded-md mt-5 text-white hover:bg-blue-600">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

export default Login;
