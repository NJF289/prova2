import Home from "@/app/admin/page";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Book, BookAIcon, FolderPen, HomeIcon, PersonStanding } from "lucide-react";
import { Noto_Emoji } from "next/font/google";

export default function Aside({className}:any) {
    return (
        <div className={cn("hidden md:block size-1/6", className)}>
            <div className="flex flex-col ">
                <h2 className="font-bold">Dasboard</h2>
                <a href="/admin">
                    <Button variant="ghost">
                        <HomeIcon/>
                        Home.
                    </Button>
                </a>
                <a href="/admin/employee">
                    <Button variant="ghost">
                        <PersonStanding/>
                        Funcionario 
                    </Button>
                </a>
                <a href="/admin/company">
                    <Button variant="ghost">
                        <FolderPen/>
                       Empresa
                    </Button>
                    </a>
            </div>
        </div>
    )
}