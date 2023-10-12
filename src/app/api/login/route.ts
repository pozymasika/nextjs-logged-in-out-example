import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  //  log in the user
  const { username, password } = await req.json();
  console.log({ username, password });

  return NextResponse.json(
    { success: true },
    {
      status: 200,
      headers: {
        "Set-Cookie": `username=${username}; Max-Age=${60 * 60 * 24 * 7}; Path=/; HttpOnly`,
      },
    }
  );
}
