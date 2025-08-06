"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useForm } from "react-hook-form";
import { messageSchema, messageType } from "@/schema/message-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { sendMessageAction } from "@/actions/send-message-action";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const ContactForm = () => {
  const form = useForm<messageType>({
    defaultValues: {
      email: "",
      content: "",
    },
    resolver: zodResolver(messageSchema),
  });

  const { isSubmitting } = form.formState;

  const handleFormSubmit = async (message: messageType) => {
    try {
      const res = await sendMessageAction(message);

      if (res?.error) {
        return toast.error(res.error);
      }

      toast.success("Votre message à été envoyé avec succès");
    } catch {
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <Card className="md:4/5 m-auto w-[95%] bg-[#161a29] sm:w-xl">
      <CardHeader>
        <CardTitle className="text-text text-center text-2xl font-bold text-[var(--text)]">
          Contact
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => handleFormSubmit(data))}
            className="flex flex-col gap-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-sm bg-white!"
                      placeholder="Votre email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <ScrollArea className="border-input bg-background focus-within:ring-ring focus-within:ring-offset-background rounded-sm border shadow-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:outline-none">
                      <Textarea
                        {...field}
                        placeholder="Votre message"
                        className="h-24 resize-none border-none bg-transparent outline-none focus:outline-none"
                      />
                      <ScrollBar orientation="vertical" />
                    </ScrollArea>
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <CardFooter className="px-0">
              <Button
                disabled={isSubmitting}
                type="submit"
                className="ml-auto w-full cursor-pointer px-8 sm:w-fit"
              >
                Envoyer
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
