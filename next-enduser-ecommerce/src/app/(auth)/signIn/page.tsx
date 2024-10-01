const SignupForm = () => {
  return (
    <div className="flex items-center justify-center my-[80px]">
      <div className="bg-[#f7f7f7] p-8 rounded-lg shadow-md w-[600px]">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-black p-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-black p-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full border border-black p-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              className="mt-1 block w-full border border-black p-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Birthday
            </label>
            <input
              type="date"
              required
              className="mt-1 block w-full border border-black p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              required
              className="mt-1 block w-full border border-black p-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="0123456789"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Street
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-black p-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="123 Đường ABC"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-black p-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Hà Nội"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-black p-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="100000"
            />
          </div>
          <div className="flex justify-between my-10">
            <button className="raleway text-[15px] w-full md:w-[160px] h-[51px] border-[2px] bg-[#000] hover:border-black text-[#fff] transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#000] cursor-pointer">
              CREATE
            </button>
            <button className="raleway text-[15px] w-full md:w-[160px] h-[51px] border-[2px] bg-[#000] hover:border-black text-[#fff] transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#000] cursor-pointer">
              <a href="/">RETURN TO STORE</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
