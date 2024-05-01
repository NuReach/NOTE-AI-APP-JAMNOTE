import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JAM NOTE - Sign In",
};

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <SignIn appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  );
}
