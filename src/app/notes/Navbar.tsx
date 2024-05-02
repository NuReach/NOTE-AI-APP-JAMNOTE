import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-3 shadow">
      <Link href={`/`} className="flex items-center">
        <Image src={logo} alt="Icon" width={80} height={80} />
        <h3 className="hidden md:block">JAM NOTE</h3>
      </Link>
      <div className="flex items-center gap-3">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                width: "2.5rem",
                height: "2.5rem",
              },
            },
          }}
        />
        <Button className="flex gap-3 bg-black">
          <Plus />
          <p className=" text-sm md:text-lg">ADD NOTE</p>
        </Button>
      </div>
    </div>
  );
}
