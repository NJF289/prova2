"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { METHODS } from "http"
import { headers } from "next/headers"

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Nome deve conter no minimo 2 caracteres."
  }),
  email : z.string().email({
    message: "Digite o email correto"
}),
})

export default function SaveEmployee() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })
  
  async function onSubmit(student: z.infer<typeof FormSchema>) {
    console.log(student)
    console.log("ggg")
    const requestOption={
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(student)
   }

   const response = await fetch("https://animated-invention-pv6p4r4755q37w4w-3000.app.github.dev/employees", requestOption);
    form.reset();
    alert("Funcionario cadastrado. ")   
  }
   

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Funcionario</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome do Funcionario" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email do Funcionario</FormLabel>
              <FormControl>
                <Input placeholder="Digite o Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
