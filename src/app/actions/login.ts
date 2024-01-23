"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password");

  const store = cookies();
  store.set("username", username);

  redirect("/");
}
