"use client";

import { Section, Block } from "@/devlink/_Builtin";
import Link from "next/link";

export default function Home() {
  return (
    <Section
      tag="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Block tag="div" className="container">
        <Block
          tag="div"
          className="hero-split"
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h1
            className="margin-bottom-24px"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              background: "linear-gradient(83.21deg, #0A5C5C 0%, #0D7A7A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Medicare Fit Quiz
          </h1>
          <Block tag="p" className="margin-bottom-24px">
            Find the right Medicare plan for you in just 2 minutes. Get personalized recommendations based on your unique needs.
          </Block>
          <div style={{ marginTop: "12px" }}>
            <Link
              href="/ntm-quiz-2026-v1/"
              className="button-primary"
              style={{
                display: "inline-block",
                textDecoration: "none",
                borderRadius: "12px",
                background: "#0A5C5C",
                color: "#ffffff",
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: "0px 4px 12px rgba(10, 92, 92, 0.2)",
              }}
            >
              Start Quiz
            </Link>
          </div>
        </Block>
      </Block>
    </Section>
  );
}
