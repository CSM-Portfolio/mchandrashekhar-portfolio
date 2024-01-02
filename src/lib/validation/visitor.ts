import { z } from "zod";

export const createVisitorSchema = z.object( {
    email: z.string().email(),
    name: z.string().min( 1, { message: 'Name is required' } ),
    subject: z.string().min( 10, { message: 'Subject is required' } ),
    message: z.string().min( 10, { message: 'Message is required' } ),
    phone: z.string().min( 10, { message: 'Phone number is required' } ),
} );

export type CreateVisitorSchema = z.infer<typeof createVisitorSchema>;