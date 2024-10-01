import PageBanner from "../components/PageBanner";

const LoginForm = () => {
  return (
    <div className="">
      <PageBanner pageName="Login" urlPage="HOME/ACCOUNT" />
      <div className="raleway flex items-center justify-center my-[100px]">
        <div className="bg-[#f7f7f7] p-8  shadow-md w-[600px] ">
          <form className="">
            <div className="mb-4 ">
              <input
                type="email"
                required
                className="mt-1 block w-full border border-black  p-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                required
                className="mt-1 block w-full border border-black  p-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Password"
              />
            </div>

            <div className="flex justify-center p-[20px] border-b-4 border-black">
              <button className="raleway text-[16px] w-full md:w-[160px] h-[51px] border-[2px] bg-[#000] hover:border-black text-[#fff] transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#000] cursor-pointer">
                SIGN IN
              </button>
            </div>
          </form>
          <div className="flex justify-between text-[14px] mt-6 mx-10">
            <a href="#" className="text-black hover:text-blue-600">
              Forgot your password?
            </a>
            <a href="#" className="text-black hover:text-blue-600">
              Create account
            </a>
            <a href="#" className="text-black hover:text-blue-600">
              Return to Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
