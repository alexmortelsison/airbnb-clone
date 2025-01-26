import Link from "next/link";
import { Button } from "../ui/button";
import { TentIcon } from "lucide-react";

export default function Logo() {
  return (
    <Button size={"icon"} asChild>
      <Link href={"/"}>
        <TentIcon className="invert text-black" />
      </Link>
    </Button>
  );
}
