"use server";

import arcjet, { detectBot, request, shield, tokenBucket } from "@arcjet/next";
import { prisma } from "@/lib/prisma";
import { messageSchema, messageType } from "@/schema/message-schema";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: [],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 1,
      interval: 3 * 60,
      capacity: 5,
    }),
  ],
});

export const sendMessageAction = async (message: messageType) => {
  const req = await request();

  const decision = await aj.protect(req, {
    requested: 1,
  });

  if (decision.isDenied()) {
    if (decision.reason.type === "RATE_LIMIT") {
      return {
        error: "Veuillez réessayer plus tard",
      };
    }
    throw new Error("Interdit");
  }

  const validatedFields = messageSchema.safeParse(message);

  if (!validatedFields.success) {
    return {
      error: "Formulaire invalide",
    };
  }

  try {
    await prisma.message.create({
      data: {
        ...validatedFields.data,
      },
    });
  } catch {
    throw new Error("Une erreur est survenue");
  }
};
