"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
    errors?: {
        title?: string[],
    },
    message?: string | null;
}

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Necessário no mínimo 3 caracteres"
  })
});

export async function create(prevState:State, formData: FormData) {
  const validateFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if(!validateFields.success) {
    return {
        errors: validateFields.error.flatten().fieldErrors,
        message: "Campos ausentes."
  }}

  const { title } = validateFields.data;

 try { await db.board.create({
    data: {
      title,
    },
  });}catch(error) {
    return{
        message: "Erro no Banco de Dados",
    }
  }

  revalidatePath("/organization/org_2b8wcDOuYshvZUSzPcx67JbQRXP");
  redirect("/organization/org_2b8wcDOuYshvZUSzPcx67JbQRXP");
}
