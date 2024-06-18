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
  
  interface ICompany{
    id: number,
    name: string,
    endereco: string
  }
  
  export default async function ListCompany() {
    
    const company = await list()
    async function list(){
      revalidatePath("/admin/company")
     const response = await fetch("https://server20241-alpha.vercel.app/company");
      return response.json();
    }
  
  
    return (
      <Table>
        <TableCaption>Lista de Empresas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>NOME</TableHead>
            <TableHead>Endereco</TableHead>
           
          </TableRow>
        </TableHeader>
        <TableBody>
          {company.map((iten:ICompany) => (
            <TableRow key={iten.id}>
              <TableCell className="font-medium">{iten.id}</TableCell>
              <TableCell>{iten.name}</TableCell>
              <TableCell>{iten.endereco}</TableCell>
            </TableRow>
          ))}
        </TableBody>   
      </Table>
    )
  }
  