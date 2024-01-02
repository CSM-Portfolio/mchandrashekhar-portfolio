import { createVisitorSchema } from "@/lib/validation/visitor";
import prisma from "@/lib/db/prisma";

export async function POST ( req: Request )
{
    try
    {
        const body = await req.json();

        const parseResult = createVisitorSchema.safeParse( body );

        if ( !parseResult.success )
        {
            console.log( parseResult.error );
            return Response.json( { error: "Invalid request body" }, { status: 400 } );
        }

        const { email, name, subject, message, phone } = parseResult.data;

        const visitor = await prisma.visitor.create( {
            data: {
                email,
                name,
                subject,
                message,
                phone
            }
        } );

        return Response.json( { visitor }, { status: 201 } );
    } catch ( error )
    {
        console.log( error );
        return Response.json( { error: "Internal server error !" }, { status: 500 } );
    }
}