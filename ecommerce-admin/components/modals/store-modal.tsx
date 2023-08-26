"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

// set schema

const formSchema = z.object({
  name: z.string().min(1),
});
export const StoreModal = () => {
  
  const storeModal = useStoreModal();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      
      const response = await axios.post("/api/stores", values);

      console.log(response);
      toast.success("Store created successfully");

      window.location.assign(`/${response.data.id}`)
      
      
    } catch (error) {
      toast.error("Something went Wrong");
      
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="E-commerce" disabled={loading} {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <div className="pt-6 space-x-2 flex items-center justify-end w-full ">
            <Button disabled={loading} variant="outline" onClick={storeModal.onClose}>Cancel</Button>
            <Button disabled={loading} type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
