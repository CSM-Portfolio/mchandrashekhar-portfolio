import { NextResponse } from 'next/server';

import { createVisitorSchema } from '@/lib/validation/visitor';
import { xata } from '@/utils/xata';

export async function POST ( request: Request )
{
    try
    {
        const body = await request.json();

        const parseResult = createVisitorSchema.safeParse( body );

        if ( !parseResult.success )
        {
            console.log( parseResult.error );
            return Response.json( { error: 'Invalid request body' }, { status: 400 } );
        }

        const { emailAddress, visitorName, subject, message, phone } = parseResult.data;

        const visitor = await xata.db.visitors.create( {
            emailAddress,
            visitorName,
            subject,
            message,
            phone,
        } );

        return NextResponse.json( { visitor }, { status: 201 } );
    } catch ( error )
    {
        console.log( error );
        return NextResponse.json( { error: 'Internal server error !' }, { status: 500 } );
    }
}
