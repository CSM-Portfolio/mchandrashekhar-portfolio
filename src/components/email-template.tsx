import * as React from 'react';
import
{
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

import NavLogo from '/public/assets/images/logo-no-background.png'

interface EmailTemplateProps
{
    visitorName: string;
}


const baseUrl = process.env.BASE_EMAIL_URL
    ? `http://${ process.env.BASE_EMAIL_URL }`
    : "";


export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ( {
    visitorName,
} ) => (
    <>
        <Html>
            <Head />
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-8">
                        <Text className="text-black text-[14px] leading-[24px] font-semibold">
                            Hello { visitorName },
                        </Text>

                        <section className="mt-[32px]">
                            <Text className="text-black text-[14px] leading-[24px] font-medium">
                                Thanks for reaching out! I appreciate your interest in my work.
                            </Text>

                            <Text className="text-black text-[14px] leading-[24px] font-medium">
                                I&apos;m currently reviewing your inquiry and will get back to you shortly with the information you need. If you have any specific details to share or questions in the meantime, feel free to reply to this email.
                            </Text>

                            <Text className="text-black text-[14px] leading-[24px] font-medium">
                                Looking forward to the possibility of collaborating.
                            </Text>
                        </section>
                        <Section className="mt-[32px]">
                            <Text className="text-black text-[14px] font-medium">
                                Best regards,
                            </Text>
                            <Text className="text-black text-[14px] font-medium">
                                Chandrashekhar Marella
                            </Text>
                            <Text className="text-black text-[14px] font-medium">
                                Website: &nbsp;
                                <Link
                                    href="https://www.chandrashekharmarella.com/"
                                    className="text-blue-600"
                                >
                                    www.chandrashekharmarella.com
                                </Link>
                                <Img
                                    className="rounded-full"
                                    src="/public/assets/images/ContactMe.jpg"
                                    width="200"
                                    height="200"
                                />
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html >
    </>
);
