import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JAM NOTE - Note",
};

export default function Note() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1>Note</h1>
    </div>
  );
}
