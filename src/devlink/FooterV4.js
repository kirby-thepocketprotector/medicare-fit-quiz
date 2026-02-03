"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FooterV4.module.css";

export function FooterV4({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-footer-v3")}
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
            className={_utils.cx(_styles, "padding-section-30")}
            tag="div"
          >
            <_Builtin.Block tag="div">
              {"© "}
              <_Builtin.Span className={_utils.cx(_styles, "year")}>
                {"2025"}
              </_Builtin.Span>
              {" The Pocket Protector LLC · hello@thepocketprotector.com · "}
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-v2")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Privacy Policy"}
              </_Builtin.Link>
              {" · "}
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-v2")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Terms"}
              </_Builtin.Link>
              {" · "}
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-v2")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Licensing & Legal"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
