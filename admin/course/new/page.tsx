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

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Nome deve conter no minimo 2 caracteres."
  }),
})

export default function SaveCourse() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  })

  async function onSubmit(course: z.infer<typeof FormSchema>) {
    console.log(course)
    const requestOption={
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(course)
   }
   const response = await fetch("https://server20241-alpha.vercel.app/courses", requestOption)
    form.reset();
    alert("Curso cadastrado:")
  }
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Docurso</FormLabel>
              <FormControl>
                <Input placeholder="Digite o curso" {...field} />
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
