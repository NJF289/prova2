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
  
  interface ICourse{
    id: number,
    name: string,
    
  }
  
  export default async function Listcourse() {
    
    const course = await list()
    async function list(){
      revalidatePath("/admin/course")
     const response = await fetch("https://server20241-alpha.vercel.app/courses");
      return response.json();
    }
  
  
    return (
      <Table>
        <TableCaption>Lista de Curso.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Curso</TableHead>
            
           
          </TableRow>
        </TableHeader>
        <TableBody>
          {course.map((iten:ICourse) => (
            <TableRow key={iten.id}>
              <TableCell className="font-medium">{iten.id}</TableCell>
              <TableCell>{iten.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  