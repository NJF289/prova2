import Aside from "./components/Aside";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@/app/admin/Theme"// importar o tema instalado 
// da pagina componentes navbar ...
export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="">
        <ThemeProvider //tema 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
           <div>
            <NavBar/>
            <div className="flex">
            <Aside/>
            {children}
            </div>
           </div>
           </ThemeProvider>
            </body>
      </html>
    );
  }