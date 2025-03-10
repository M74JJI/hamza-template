import { currentUser } from "@/modules/auth/lib";
import { getSession } from "next-auth/react";

export default async function HomePage() {
  const user=await currentUser();
  console.log("user",user)
  return (
    <>
    Hamza Sennouni
    </>
  );
}
