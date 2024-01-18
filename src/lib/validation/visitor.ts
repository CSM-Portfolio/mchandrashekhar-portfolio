import { z } from 'zod';
import validator from "validator";

export const createVisitorSchema = z.object( {
    emailAddress: z.string().email(),
    visitorName: z.string().min( 1, { message: 'Name is required' } ),
    subject: z.string().min( 10, { message: 'Subject is required' } ),
    message: z.string().min( 10, { message: 'Message is required' } ),
    phone: z.string().refine(validator.isMobilePhone)
} );

export type CreateVisitorSchema = z.infer<typeof createVisitorSchema>;
