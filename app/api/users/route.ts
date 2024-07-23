import { NextResponse } from "next/server";

const DB = [
  { id: 1, name: "won" },
  { id: 2, name: "woong" },
];

export async function GET(request: Request) {
  const searchParmas = new URL(request.url).searchParams;
  const name = searchParmas.get("name") as string;

  return NextResponse.json({
    users: DB.filter((user) => user.name.includes(name)),
  });
}
