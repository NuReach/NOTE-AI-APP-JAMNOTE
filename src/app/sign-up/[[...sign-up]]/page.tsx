import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JAM NOTE - Sign Up",
};

export default function SingUpPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <SignUp appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  );
}
