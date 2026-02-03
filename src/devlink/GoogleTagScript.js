"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GoogleTagScript.module.css";

export function GoogleTagScript({ as: _Component = _Builtin.HtmlEmbed }) {
  return (
    <_Component
      className={_utils.cx(_styles, "gtag-script")}
      value="%3C!--%20Google%20Tag%20Manager--%3E%0A%3Cscript%3E(function(w%2Cd%2Cs%2Cl%2Ci)%7Bw%5Bl%5D%3Dw%5Bl%5D%7C%7C%5B%5D%3Bw%5Bl%5D.push(%7B'gtm.start'%3A%0Anew%20Date().getTime()%2Cevent%3A'gtm.js'%7D)%3Bvar%20f%3Dd.getElementsByTagName(s)%5B0%5D%2C%0Aj%3Dd.createElement(s)%2Cdl%3Dl!%3D'dataLayer'%3F'%26l%3D'%2Bl%3A''%3Bj.async%3Dtrue%3Bj.src%3D%0A'https%3A%2F%2Fwww.googletagmanager.com%2Fgtm.js%3Fid%3D'%2Bi%2Bdl%3Bf.parentNode.insertBefore(j%2Cf)%3B%0A%7D)(window%2Cdocument%2C'script'%2C'dataLayer'%2C'GTM-MNMSS4VX')%3B%3C%2Fscript%3E%0A%3C!--%20End%20Google%20Tag%20Manager%20--%3E%0A%0A%3C!--%20Google%20tag%20(gtag.js)%20--%3E%0A%3Cscript%20async%20src%3D%22https%3A%2F%2Fwww.googletagmanager.com%2Fgtag%2Fjs%3Fid%3DG-BCXK6E3PL3%22%3E%3C%2Fscript%3E%0A%3Cscript%3E%0A%20%20window.dataLayer%20%3D%20window.dataLayer%20%7C%7C%20%5B%5D%3B%0A%20%20function%20gtag()%7BdataLayer.push(arguments)%3B%7D%0A%20%20gtag('js'%2C%20new%20Date())%3B%0A%20%20gtag('config'%2C%20'G-BCXK6E3PL3')%3B%0A%3C%2Fscript%3E%0A%0A%0A%3C!--%20Google%20Tag%20Manager%20(noscript)--%3E%0A%3Cnoscript%3E%3Ciframe%20src%3D%22https%3A%2F%2Fwww.googletagmanager.com%2Fns.html%3Fid%3DGTM-MNMSS4VX%22%0Aheight%3D%220%22%20width%3D%220%22%20style%3D%22display%3Anone%3Bvisibility%3Ahidden%22%3E%3C%2Fiframe%3E%3C%2Fnoscript%3E%0A%3C!--%20End%20Google%20Tag%20Manager%20(noscript)--%3E"
    />
  );
}
