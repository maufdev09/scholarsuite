"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import useAuth from "@/hooks/useAuth";
import PrivateRoute from "@/components/PrivateRoute";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),

  shortDescription: z.string().min(10, "Short description is too short"),

  fullDescription: z.string().min(20, "Full description is too short"),

  category: z.string(),

  price: z.coerce.number().min(0, "Price cannot be negative"),

  level: z.enum(["Beginner", "Intermediate", "Advanced"]),

  image: z.url("Image must be a valid URL"),
});

export default function AddItemPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      shortDescription: "",
      fullDescription: "",
      category: "",
      price: 0,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    const id = crypto.randomUUID();

    const newCourse = {
      id,
      ...data,
    };
    const existingCourses = JSON.parse(localStorage.getItem("courses") || "[]");
    localStorage.setItem(
      "courses",
      JSON.stringify([...existingCourses, newCourse]),
    );
    toast.success("Item added successfully!");
    form.reset();
    router.push("/items");
  }

  return (
    <PrivateRoute>
      <Card className="w-full sm:max-w-5xl mx-auto my-auto">
        <CardHeader>
          <CardTitle>Add Item</CardTitle>
          <CardDescription>
            Fill in the details for the new item.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">Title</FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Item title"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="shortDescription"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-shortDescription">
                      Short Description
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-shortDescription"
                      aria-invalid={fieldState.invalid}
                      placeholder="Short description"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="fullDescription"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-fullDescription">
                      Full Description
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-fullDescription"
                      aria-invalid={fieldState.invalid}
                      placeholder="Full description"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-category">
                      Category
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-category"
                      aria-invalid={fieldState.invalid}
                      placeholder="Category"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="price"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-price">Price</FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-price"
                      aria-invalid={fieldState.invalid}
                      placeholder="Price"
                      autoComplete="off"
                      type="number"
                      step="0.01"
                      min="0"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="level"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-level">Level</FieldLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger
                        id="form-rhf-demo-level"
                        aria-invalid={fieldState.invalid}
                      >
                        <SelectValue placeholder="Select Level" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">
                          Intermediate
                        </SelectItem>

                        <SelectItem value="Advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="image"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-image">Image</FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-image"
                      aria-invalid={fieldState.invalid}
                      placeholder="Image URL"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button type="submit" form="form-rhf-demo">
              Add Item
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </PrivateRoute>
  );
}
