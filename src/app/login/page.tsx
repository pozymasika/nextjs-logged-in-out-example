import login from "../actions/login";

const LoginPage = () => {
  return (
    <form
      method="POST"
      action={login}
      className="flex flex-col items-center justify-center h-screen"
    >
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="mb-4 p-2 w-96 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="mb-4 p-2 w-96 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="p-2 w-96 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginPage;
