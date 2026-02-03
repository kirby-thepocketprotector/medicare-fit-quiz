"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SeeIfQualifyCta.module.css";

export function SeeIfQualifyCta({
  as: _Component = _Builtin.Link,
  mainCtaTextVisibility = true,
  secondCtaTextVisibility = false,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "see-if-qualify-cta-wrapper")}
      button={false}
      block="inline"
      options={{
        href: "https://veterans.thepocketprotector.com/v4/veteran",
      }}
    >
      {mainCtaTextVisibility ? (
        <_Builtin.Block tag="div">{"See If You Qualify"}</_Builtin.Block>
      ) : null}
      {secondCtaTextVisibility ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "text-size-14")}
          tag="div"
        >
          {"See If You Qualify"}
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
