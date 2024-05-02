import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Notebook } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JAM NOTE - Note",
};

export default async function NotePage() {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return (
    <div className="flex w-full flex-col  justify-center px-9 py-3">
      <div className="flex items-center gap-3">
        <h1>Your Note</h1>
        <Notebook width={33} height={33} />
      </div>
      {JSON.stringify(allNotes)}
    </div>
  );
}
