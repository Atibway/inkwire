"use client"

import { settings } from "@/actions/settings"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useSession } from "next-auth/react"
import { useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
import {  SettingsSchema } from "@/schemas"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { useCurrentUser } from "@/hooks/use-current-user"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserRole } from "@prisma/client"
import { Switch } from "@/components/ui/switch"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export const ManageSetting = () => {
   const {update}= useSession()
  const [isPending] = useTransition()
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()
  
  const user = useCurrentUser()


if(!user?.id){
  redirect("/auth/login")
}

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues:{
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined
    }
      })
const onSubmit = (values: z.infer<typeof SettingsSchema>)=> {


  settings(values)
  .then((data)=> {
    if(data.error){
      setError(data.error)
    }

    if(data.success){
      update()
      setSuccess(data.success)
    }
  })
  .catch(()=> setError("Something went wrong"))
}
  return (
    <div className="md:grid md:place-items-center ">

    <Card className="md:mt-[20px] md:w-[600px]">
<CardHeader>
  <div className="flex justify-center">
{user && (
        <>
          <Link href={"/dashboard"}>
            <Image
              src={user?.image || ""}
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
        </>
      )}
  </div>
  <p className="text-2xl font-semibold text-center">
⚙ Settings
  </p>
</CardHeader>
<CardContent>
<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input 
                disabled={isPending}
                placeholder="john Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {user?.isOAuth === false && (
          <>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                  disabled={isPending}
                  placeholder="johnDoe@gmail.com" {...field} 
                  type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input 
                  disabled={isPending}
                  placeholder="********" {...field} 
                  type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input 
                  disabled={isPending}
                  placeholder="********" {...field} 
                  type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         
          </>
        )}
        
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select
              disabled={isPending}
              onValueChange={field.onChange}
              defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={UserRole.ADMIN}>
                    Admin
                  </SelectItem>
                  <SelectItem value={UserRole.USER}>
                    User
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

{user?.isOAuth === false && (

<FormField
          control={form.control}
          name="isTwoFactorEnabled"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">

          <div className="space-y-0.5">
              <FormLabel>Two Factor Authentication</FormLabel>
              <FormDescription>
                Enable two factor authentication for yur account
              </FormDescription>
          </div>
              <FormControl>
                <Switch
                id="airplane-mode"
                disabled={isPending}
                checked={field.value}
                onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
)}
        </div>
        <FormError message={error}/>
        <FormSuccess message={success}/>

        <Button 
        disabled={isPending}
        type="submit"
        className="w-full"
        >
          Save
        </Button>
      </form>
    </Form>
</CardContent>
    </Card>
    </div>
  )
}
