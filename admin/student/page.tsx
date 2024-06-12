import { Button } from "@/components/ui/button";
import ListStudent from "./list";



//clik em Estudante 
export default function Student(){
    return(
        <div className=" w-full flex flex-col justify-center mt-6">
            <div className="flex justify-center mb-4">
                <a href="/admin/student/new">
                    <Button>Cadastrar Estudante</Button>
                </a>
            </div>
            <h1>Lista de estudantes.</h1>
            <ListStudent/>   
        </div>
      
    ) 
}