import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  message: string;
}

export const ContactEmail = ({
  name,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>VantLaunch: We&apos;ve received your inquiry</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
             <Heading style={h1}>VantLaunch</Heading>
          </Section>
          <Section style={contentSection}>
            <Text style={text}>
              Hey {name},
            </Text>
            <Text style={text}>
              Thanks for reaching out to VantLaunch. We&apos;ve received your message and our team is already reviewing what you&apos;re building.
            </Text>
            <Section style={quoteSection}>
              <Text style={quoteText}>
                &ldquo;{message}&rdquo;
              </Text>
            </Section>
            <Text style={text}>
              We usually reply within a business day. In the meantime, feel free to check out our latest deployments or follow our shipping rhythm on X.
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              Industrial-grade products for high-performance teams.
              <br />
              <Link href="https://vantlaunch.com" style={link}>vantlaunch.com</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: "#080808",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "560px",
};

const headerSection = {
  padding: "32px 0",
};

const h1 = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  letterSpacing: "-0.05em",
  margin: "0",
};

const contentSection = {
  backgroundColor: "#121212",
  padding: "40px",
  borderRadius: "24px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const text = {
  color: "#a1a1aa",
  fontSize: "16px",
  lineHeight: "26px",
};

const quoteSection = {
  margin: "24px 0",
  padding: "16px 24px",
  backgroundColor: "rgba(255, 255, 255, 0.03)",
  borderRadius: "12px",
  borderLeft: "4px solid #ffffff",
};

const quoteText = {
  color: "#ffffff",
  fontSize: "15px",
  fontStyle: "italic",
  margin: "0",
};

const hr = {
  borderColor: "rgba(255, 255, 255, 0.06)",
  margin: "32px 0",
};

const footer = {
  color: "#52525b",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  letterSpacing: "0.15em",
};

const link = {
  color: "#ffffff",
  textDecoration: "underline",
};
