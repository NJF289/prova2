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
  
  interface IStudent{
    id: number,
    name: string,
    email: string
  }
  
  export default async function ListStudent() {
    
    const students = await list()
    async function list(){
      revalidatePath("/admin/student")
     const response = await fetch("https://server20241-alpha.vercel.app/studants");
      return response.json();
    }
  
  
    return (
      <Table>
        <TableCaption>Lista de Estudante</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>NOME</TableHead>
            <TableHead>EMAIL</TableHead>
           
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((iten:IStudent) => (
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
  