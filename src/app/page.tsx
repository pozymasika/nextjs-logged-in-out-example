import Dashboard from "@/components/Dashboard";
import HomePage from "@/components/HomePage";
import useUser from "@/hooks/useUser";

export default function Home() {
  const [username] = useUser();
  if (username) {
    return <Dashboard username={username} />;
  }
  return <HomePage />;
}
