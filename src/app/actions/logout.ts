"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logout() {
  const store = cookies();
  store.delete("username");
  redirect("/");
}
