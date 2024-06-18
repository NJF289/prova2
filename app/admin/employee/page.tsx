import { Button } from "@/components/ui/button";

import ListEmployee from "./list";



//clik em Estudante 
export default function Student(){
    return(
        <div className=" w-full flex flex-col justify-center mt-6">
            <div className="flex justify-center mb-4">
                <a href="/admin/employee/new">
                    <Button>Cadastrar Funcionarios</Button>
                </a>
            </div>
            <h1>Lista de Funcionarios.</h1>
            <ListEmployee/>   
        </div>
      
    ) 
}