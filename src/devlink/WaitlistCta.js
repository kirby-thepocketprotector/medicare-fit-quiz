"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WaitlistCta.module.css";

export function WaitlistCta({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-waitlist")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "page-padding")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "container-1280")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-64")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "max-width-form")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "heading-32-custom-1",
                  "margin-bottom-32",
                  "line-height-1"
                )}
                tag="h2"
              >
                {"Coming Soon"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "hero-subheader-wrapper",
                  "margin-bottom-16"
                )}
                tag="div"
              />
              <_Builtin.FormWrapper
                className={_utils.cx(_styles, "waitlist-form-wrapper")}
              >
                <_Builtin.FormForm
                  className={_utils.cx(_styles, "waitlist-form")}
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  id="email-form"
                >
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "waitlist-input")}
                    name="Email"
                    maxLength={256}
                    data-name="Email"
                    placeholder="Enter your email"
                    disabled={false}
                    type="email"
                    required={true}
                    autoFocus={false}
                    id="Email"
                  />
                  <_Builtin.FormButton
                    className={_utils.cx(_styles, "waitlist-cta-wrapper")}
                    type="submit"
                    value="Learn More"
                    data-wait="Please wait..."
                  />
                </_Builtin.FormForm>
                <_Builtin.FormSuccessMessage
                  className={_utils.cx(_styles, "waitlist-success")}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-size-16-custom-1",
                      "poppins",
                      "line-height-32"
                    )}
                    tag="div"
                  >
                    {"Thank you! Your submission has been received!"}
                  </_Builtin.Block>
                </_Builtin.FormSuccessMessage>
                <_Builtin.FormErrorMessage>
                  <_Builtin.Block tag="div">
                    {"Oops! Something went wrong while submitting the form."}
                  </_Builtin.Block>
                </_Builtin.FormErrorMessage>
              </_Builtin.FormWrapper>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-size-16-custom-1",
                  "poppins",
                  "line-height-32",
                  "text-color-grey"
                )}
                tag="div"
              >
                {"No spam, no calls - just smarter Medicare."}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
