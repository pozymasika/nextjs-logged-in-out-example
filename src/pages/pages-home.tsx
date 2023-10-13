import Dashboard from "@/components/Dashboard";
import HomePage from "@/components/HomePage";
import Nav from "@/components/NavPages";
import useUser from "@/hooks/useUserPages";
import { GetServerSideProps } from "next";

type Props = {
  username: string;
};

export default function Home({ username }: Props) {
  console.log("user:", username);

  return (
    <section>
      <Nav />
      {username ? <Dashboard /> : <HomePage />}
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const username = req.cookies.username;
  return {
    props: {
      username,
    },
  };
};
