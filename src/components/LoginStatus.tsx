import useUser from "@/hooks/useUserPages";

export default function LoginStatus() {
  const [username] = useUser();
  return (
    <>
      {username ? (
        <span>{username}</span>
      ) : (
        <a type="button" href="/login" className="login-link">
          Log In
        </a>
      )}
    </>
  );
}
