import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { revalidatePath } from "next/cache";
  
  interface IEmployee{
    id: number,
    name: string,
    email: string
  }
  
  export default async function ListEmployee() {
    
    const employees = await list()
    async function list(){
      revalidatePath("/admin/employee")
     const response = await fetch("https://server20241-alpha.vercel.app/employees");
      return response.json();
    }
  
  
    return (
      <Table>
        <TableCaption>Lista de Funcionario</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>NOME</TableHead>
            <TableHead>EMAIL</TableHead>
           
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((iten:IEmployee) => (
            <TableRow key={iten.id}>
              <TableCell className="font-medium">{iten.id}</TableCell>
              <TableCell>{iten.name}</TableCell>
              <TableCell>{iten.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>   
      </Table>
    )
  }
  