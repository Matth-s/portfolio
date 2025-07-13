import { z } from "zod";

export const messageSchema = z.object({
  email: z.email({
    message: "Email invalide",
  }),
  content: z
    .string()
    .trim()
    .min(1, {
      message: "Champ requis",
    })
    .max(1500, {
      message: "Doi être inférieur à 1500 caractères",
    }),
});

export type messageType = z.infer<typeof messageSchema>;
