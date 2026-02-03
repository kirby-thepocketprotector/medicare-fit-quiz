"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GoogleTagScript } from "./GoogleTagScript";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer")}
      tag="div"
      id="contact-us"
    >
      <_Builtin.Block className={_utils.cx(_styles, "columns-2")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "column")} tag="div">
          <_Builtin.Image
            className={_utils.cx(_styles, "logo_the-pocket-protector")}
            loading="lazy"
            width="228.0003662109375"
            height="72.25253295898438"
            src="https://cdn.prod.website-files.com/660d27533c9c61d241f50da3/660eb1d9e655a263ea421101_Logo_The-Pocket-Protector.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "title", "medium", "align-center")}
            tag="div"
          >
            {"750 N. State Street "}
            <br />
            {"Chicago, IL 60654"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "",
              "title",
              "medium",
              "align-center"
            )}
            tag="div"
          >
            {"jarret@thepocketprotector.com"}
            <br />
            {"(773) 814-3028"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "small-columns")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "column-2")} tag="div">
            <_Builtin.Block className={_utils.cx(_styles, "content")} tag="div">
              <_Builtin.Block className={_utils.cx(_styles, "title")} tag="div">
                {"Company"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-links")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "", "title", "medium")}
                  button={false}
                  block="inline"
                  options={{
                    href: "/#our-team",
                  }}
                >
                  {"About Us"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "", "title", "medium")}
                  button={false}
                  block="inline"
                  options={{
                    href: "/#lines-of-work",
                  }}
                >
                  {"Lines of Business"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "", "column-2")}
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "content")} tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "", "title")}
                tag="div"
              >
                {"Legal"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-links")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "", "title", "medium")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  {"Privacy Policy"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "", "title", "medium")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  {"Terms of Service"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "copyright")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "text-10")} tag="div">
          {"© Copyright 2024 The Pocket Protector LLC"}
        </_Builtin.Block>
      </_Builtin.Block>
      <GoogleTagScript />
    </_Component>
  );
}
