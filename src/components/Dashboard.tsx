export default function Dashboard({ username = "" }) {
  return (
    <div className="bg-white dark:bg-gray-900 h-screen">
      <h1 className="text-center text-4xl">
        Welcome to the Dashboard
        {username && (
          <span className="bg-blue-700 mx-2 px-2 font-bold rounded-sm">
            {username}
          </span>
        )}
      </h1>
    </div>
  );
}
