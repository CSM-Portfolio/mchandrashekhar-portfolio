import React from 'react';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

import { EmailTemplate } from '@/components/email-template';

export async function POST ( request: Request )
{
    const resend = new Resend( process.env.RESEND_API_KEY );

    try
    {
        const body = await request.json();
        const { emailAddress, visitorName, subject, message, phone } = body;
        const data = await resend.emails.send( {
            from: 'Chandrashekhar Marella <connect@chandrashekharmarella.com>',
            to: emailAddress,
            subject: 'Thank You for Your Inquiry',
            text: 'This is the plain text version of the email',
            react: EmailTemplate( { visitorName: visitorName } ),
        } );

        return NextResponse.json( { message: 'Email sent successfully!' } );
        // return NextResponse.json( data );
    } catch ( error )
    {
        return Response.json( { error } );
    }
}



// headers: {
//     'X-Entity-Ref-ID': '123456789',
//             },
// tags: [
//     {
//         name: 'category',
//         value: 'confirm_email',
//     },
// ],