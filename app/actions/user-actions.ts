"use server";

export async function searchUsers(name: string) {
  const DB = [
    { id: 1, name: "won" },
    { id: 2, name: "woong" },
  ];

  return DB.filter((user) => user.name.includes(name));
}
