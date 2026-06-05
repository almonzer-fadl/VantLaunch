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
              Thanks for reaching out to VantLaunch. We&apos;ve received your message and our team is reviewing it.
            </Text>
            <Section style={quoteSection}>
              <Text style={quoteText}>
                &ldquo;{message}&rdquo;
              </Text>
            </Section>
            <Text style={text}>
              We usually reply within one business day.
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              Focused SaaS products for operational businesses.
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
  backgroundColor: "#fbf4e2",
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
  color: "#17140d",
  fontSize: "24px",
  fontWeight: "bold",
  letterSpacing: "-0.05em",
  margin: "0",
};

const contentSection = {
  backgroundColor: "#fff9ed",
  padding: "40px",
  borderRadius: "24px",
  border: "1px solid rgba(23, 20, 13, 0.1)",
};

const text = {
  color: "#695b45",
  fontSize: "16px",
  lineHeight: "26px",
};

const quoteSection = {
  margin: "24px 0",
  padding: "16px 24px",
  backgroundColor: "#f3ead3",
  borderRadius: "12px",
  borderLeft: "4px solid #00401f",
};

const quoteText = {
  color: "#17140d",
  fontSize: "15px",
  fontStyle: "italic",
  margin: "0",
};

const hr = {
  borderColor: "rgba(23, 20, 13, 0.1)",
  margin: "32px 0",
};

const footer = {
  color: "#8a7657",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  letterSpacing: "0.15em",
};

const link = {
  color: "#00401f",
  textDecoration: "underline",
};
