import Dashboard from "@/components/Dashboard";
import HomePage from "@/components/HomePage";
import useUser from "@/hooks/useUser";

export default function Home() {
  const [username] = useUser();
  console.log("user:", username);
  if (username) {
    return <Dashboard />;
  }
  return <HomePage />;
}
