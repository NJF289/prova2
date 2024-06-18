import { Button } from "@/components/ui/button";

import ListEmployee from "./list";




export default function Employee(){
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