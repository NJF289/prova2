import { Button } from "@/components/ui/button";
import { PersonStanding } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <a href="/admin" className=" flex justify-center">
                    <Button variant="destructive">
                      <PersonStanding/>
                        Cilk aqui para ver cadastros
                    </Button>
                </a>
  );
}
