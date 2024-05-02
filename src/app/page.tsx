import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-3">
      <div className="flex items-center justify-center">
        <Image src={logo} alt="Logo" width={120} height={120}></Image>
        <h1>JAM NOTE</h1>
      </div>
      <div className="flex w-full items-center justify-center md:w-1/2">
        <p className="text-center">
          Introducing 'JAM NOTE' – your go-to app for effortless note-taking.
          With its sleek design and intuitive interface, capturing ideas has
          never been easier. Stay organized, stay efficient, with JAM NOTE.
        </p>
      </div>
      <Link href={"/notes"}>
        <Button className="mt-6 bg-black">
          <h3>Get Start</h3>
        </Button>
      </Link>
    </div>
  );
}
