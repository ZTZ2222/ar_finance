"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { credentialsSchema, zCredentials } from "@/types/auth.schema"
import FormError from "./form-error"
import FormSuccess from "./form-success"
import { useAction } from "next-safe-action/hooks"
import { loginUser } from "@/actions/login-action"

export default function FormLogin() {
  const t = useTranslations("Components.FormLogin")
  const form = useForm<zCredentials>({
    resolver: zodResolver(credentialsSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const { execute } = useAction(loginUser, {
    onSuccess(data) {
      if (data.data?.error) {
        toast.error(t("toast-error"), {
          duration: 4000,
        })
      } else {
        toast.success(t("toast-success"), {
          duration: 4000,
        })
      }
    },
  })

  function onSubmit(data: zCredentials) {
    execute(data)
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("label-email")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@mail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("label-password")}</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormError message="" />
            <FormSuccess message="" />
            <Button type="submit" className="w-full">
              {t("submit-button")}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
