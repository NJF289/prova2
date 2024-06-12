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

export default function SaveStudent() {
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

   const response = await fetch("https://server20241-alpha.vercel.app/studants", requestOption);
    form.reset();
    alert("Estudante cadastrado. ")   
  }
   

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Estudante</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome do estudante" {...field} />
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
              <FormLabel>Email do Estudante</FormLabel>
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
