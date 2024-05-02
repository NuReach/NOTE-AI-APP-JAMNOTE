import Note from "@/components/Note";
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

  const allNotes = await prisma.note.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex w-full flex-col  justify-center px-9 py-3">
      <div className="flex items-center gap-3">
        <h1>Your Note</h1>
        <Notebook width={33} height={33} />
      </div>
      <div className=" columns-1 gap-4 space-y-4  p-4 md:columns-2 lg:columns-3">
        {allNotes.map((note) => (
          <Note note={note} key={note.id} />
        ))}
        {allNotes.length === 0 && (
          <div className="col-span-full text-center">
            {"You don't have any notes yet. Why don't you create one?"}
          </div>
        )}
      </div>
    </div>
  );
}
