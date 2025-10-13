import { z } from 'zod';

export const createContactSchema = (t: {
  nameMin: string;
  nameMax: string;
  emailInvalid: string;
  emailRequired: string;
  messageMin: string;
  messageMax: string;
}) => {
  return z.object({
    name: z
      .string()
      .min(2, t.nameMin)
      .max(100, t.nameMax),
    email: z
      .string()
      .email(t.emailInvalid)
      .min(1, t.emailRequired),
    message: z
      .string()
      .min(10, t.messageMin)
      .max(1000, t.messageMax),
  });
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};
