import { Button } from "@/components/ui/button";
import ListCompany from "./list";



//clik em Estudante 
export default function Company(){
    return(
        <div className=" w-full flex flex-col justify-center mt-6">
            <div className="flex justify-center mb-4">
                <a href="/admin/company/new">
                    <Button>Cadastrar Empresa</Button>
                </a>
            </div>
            <h1>Lista de Empresa.</h1>
            <ListCompany/>   
        </div>
      
    ) 
}