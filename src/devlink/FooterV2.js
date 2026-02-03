"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GoogleTagScript } from "./GoogleTagScript";
import * as _utils from "./utils";
import _styles from "./FooterV2.module.css";

export function FooterV2({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-footer")}
      grid={{
        type: "section",
      }}
      tag="footer"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "footer-paragraph-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-paragraph-contents")}
          tag="div"
        >
          <_Builtin.RichText
            className={_utils.cx(_styles, "footer-richtext")}
            tag="div"
            slot=""
          >
            <_Builtin.Paragraph>
              {
                "Cigna Healthcare, Humana Inc., Aetna Inc., WellCare Health Plans, Inc., Devoted Health, Blue Cross and Blue Shield of Illinois, and UnitedHealthcare have contracts with Medicare. Enrollment depends on contract renewal."
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph>
              {
                "Plans are insured or covered by a Medicare Advantage (HMO, PPO and PFFS) organization with a Medicare contract and/or a Medicare-approved Part D sponsor. Enrollment in the plan depends on the plan’s contract renewal with Medicare."
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph>
              {
                "We do not offer every plan available in your area. Currently we represent 8 organizations which offer 11 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options."
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph>
              {
                "The Part B Giveback Benefit pays part or all of your Part B premium and the amount may"
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph>
              {
                "Benefits may vary by carrier and location. The plans listed above apply to Cook County Illinois for Plan Year 2024. Limitations and exclusions may apply."
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph>
              {
                "The standard Part B premium for 2024 is $174.70. Monthly savings varies and may be subject to processing delays and may not be immediate. Not available with all plans. Availability varies by carrier and location."
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph>
              {
                "Cigna Healthcare, Humana Inc., Aetna Inc., WellCare Health Plans, Inc., Devoted Health, BlueCross and Blue Shield of Illinois, and UnitedHealthcare represents Medicare Advantage HMO, PPO and PFFS organizations and stand-alone PDP prescription drug plans that have a Medicare contract. Enrollment depends on the plan’s contract renewal."
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph>
              <br />
              {
                "The plans we represent do not discriminate on the basis of race, color, national origin, age, disability, or sex. You do not need to be a veteran to qualify for these plans. To learn more about a plan’s nondiscrimination policy, please click here"
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph>
              {
                "Flex Card/Allowance amounts cannot be combined with other benefit allowances. Limitations and restrictions may apply. Out-of-network/non-contracted providers are under no obligation to treat Plan members, except in emergency situations. Please call the Plan’s customer service number or see your Evidence of Coverage for more information, including the cost-sharing that applies to out-of-network services."
              }
            </_Builtin.Paragraph>
          </_Builtin.RichText>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "footer-content-wrapper")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "columns-2")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "column", "custom1")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "logo_the-pocket-protector")}
              loading="lazy"
              width="228.0003662109375"
              height="72.25253295898438"
              src="https://cdn.prod.website-files.com/660d27533c9c61d241f50da3/660eb1d9e655a263ea421101_Logo_The-Pocket-Protector.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "small-columns", "footer-columns")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "column-2", "margin-right-61")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "content")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "footer-header")}
                  tag="h2"
                >
                  {"Contact"}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-links")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "title", "footer-text")}
                    tag="div"
                  >
                    {"750 N. State Street "}
                    <br />
                    {"Chicago, IL 60654"}
                    <br />
                    {"244-534-6541"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "column-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "content")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "footer-header")}
                  tag="h2"
                >
                  {"Legal"}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-links")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Privacy Policy"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Terms &Conditions"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Licensing and Legal Information"}
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-links")}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "copyright", "custom1")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "text-10")} tag="div">
            {"© Copyright 2024 The Pocket Protector LLC"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <GoogleTagScript />
    </_Component>
  );
}
