import Cookies from "js-cookie";

export default function useUser() {
  const username = Cookies.get("username");
  return [username];
}
