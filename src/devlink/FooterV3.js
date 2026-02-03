"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GoogleTagScript } from "./GoogleTagScript";
import * as _utils from "./utils";
import _styles from "./FooterV3.module.css";

export function FooterV3({
  as: _Component = _Builtin.Section,

  footerLinkTwoLink = {
    href: "/#about-us",
  },

  footerLinkTwoLink2 = {
    href: "#",
  },

  footerLinkTwoLink3 = {
    href: "#",
  },

  footerLinkTwoLink4 = {
    href: "/#contact-us",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-home-footer")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global", "custom2")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-1140")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "padding-section-80",
              "custom-padding-1"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-wrapper-two")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-brand")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/660d27533c9c61d241f50da3/67514f5e4a8f7692896cdc33_the-pocketprotector-logo.png"
                />
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-contents-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "footer-block-two",
                    "margin-right-117"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer-title")}
                    tag="div"
                  >
                    {"Quick Links"}
                  </_Builtin.Block>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link-two")}
                    button={false}
                    block=""
                    options={{
                      href: "/#home",
                    }}
                  >
                    {"Home"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link-two")}
                    button={false}
                    block=""
                    options={footerLinkTwoLink}
                  >
                    {"About Us"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link-two")}
                    button={false}
                    block=""
                    options={footerLinkTwoLink3}
                  >
                    {"Meet our Team"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link-two")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Resources"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link-two")}
                    button={false}
                    block=""
                    options={footerLinkTwoLink4}
                  >
                    {"Contact Us"}
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-block-two")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer-title")}
                    tag="div"
                  >
                    {"Legal"}
                  </_Builtin.Block>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link-two")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Terms of Use"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link-two")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Privacy Policy"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link-two")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Licensing & Legal Information"}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "footer-bottom")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-copyright")}
          tag="div"
        >
          {"© Copyright "}
          <_Builtin.Span className={_utils.cx(_styles, "year")}>
            {"2025"}
          </_Builtin.Span>
          {" The Pocket Protector LLC"}
        </_Builtin.Block>
      </_Builtin.Block>
      <GoogleTagScript />
    </_Component>
  );
}
