"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NavbarV2.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3825":{"id":"e-3825","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-226","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3826"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d374729e7d930b906e9633|b4e36091-d52b-5509-fcf1-c24562845503","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d374729e7d930b906e9633|b4e36091-d52b-5509-fcf1-c24562845503","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758688371671},"e-3826":{"id":"e-3826","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-227","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3825"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d374729e7d930b906e9633|b4e36091-d52b-5509-fcf1-c24562845503","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d374729e7d930b906e9633|b4e36091-d52b-5509-fcf1-c24562845503","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758688371671},"e-3827":{"id":"e-3827","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-228","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3828"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d374729e7d930b906e9633|ded137fc-0383-08a7-e5a5-075bb4d088cc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d374729e7d930b906e9633|ded137fc-0383-08a7-e5a5-075bb4d088cc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758688371671},"e-3828":{"id":"e-3828","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-229","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3827"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d374729e7d930b906e9633|ded137fc-0383-08a7-e5a5-075bb4d088cc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d374729e7d930b906e9633|ded137fc-0383-08a7-e5a5-075bb4d088cc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1758688371671},"e-4019":{"id":"e-4019","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-226","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4020"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764803990173},"e-4020":{"id":"e-4020","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-227","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4019"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764803990173},"e-4021":{"id":"e-4021","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-228","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4022"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764803990173},"e-4022":{"id":"e-4022","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-229","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4021"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1764803990173}},"actionLists":{"a-226":{"id":"a-226","title":"Article Hero Hover In","actionItemGroups":[{"actionItems":[{"id":"a-226-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-226-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1.05,"yValue":1.05,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1749466393726},"a-227":{"id":"a-227","title":"Article Hero Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-227-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1749466393726},"a-228":{"id":"a-228","title":"Article Hero Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-228-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-228-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1.05,"yValue":1.05,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1749466393726},"a-229":{"id":"a-229","title":"Article Hero Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-229-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1749466393726}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavbarV2({
  as: _Component = _Builtin.NavbarWrapper,
  flexBlock4Visibility = false,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "nav-v2", "custom1")}
      data-w-id="a3b2cac0-cdfe-80e1-2df7-0ebc92e60215"
      tag="div"
      config={{
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: true,
        noScroll: false,
        animation: "over-left",
        collapse: "medium",
      }}
    >
      <_Builtin.NavbarButton
        className={_utils.cx(_styles, "", "", "menu-button", "white")}
        tag="div"
      >
        <_Builtin.Icon
          className={_utils.cx(_styles, "icon")}
          widget={{
            type: "icon",
            icon: "nav-menu",
          }}
        />
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "nav-arrow")}
          value="%3Csvg%20width%3D%2218%22%20height%3D%2214%22%20viewBox%3D%220%200%2018%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M18%207C18%207.55228%2017.5523%208%2017%208L3.415%208L7.70711%2012.2929C8.06759%2012.6534%208.09532%2013.2206%207.7903%2013.6129L7.70711%2013.7071C7.31658%2014.0976%206.68342%2014.0976%206.29289%2013.7071L0.292892%207.70711C0.264425%207.67864%200.237669%207.64847%200.212786%207.61675C0.207285%207.60984%200.201754%207.6026%200.196335%207.59531C0.17849%207.57113%200.161718%207.54628%200.146067%207.52066C0.138607%207.50861%200.1315%207.49639%200.124672%207.48406C0.113794%207.46429%200.103378%207.44389%200.0936546%207.4231C0.08568%207.4061%200.0781975%207.3888%200.0712261%207.37134C0.0633163%207.35158%200.0561237%207.3318%200.0495472%207.31174C0.0447292%207.29685%200.0400982%207.28146%200.0358448%207.26599C0.0298328%207.24444%200.0246391%207.22275%200.0201645%207.20079C0.0167007%207.18338%200.0136299%207.16595%200.0110188%207.14847C0.00376129%207.10036%200%207.05062%200%207L0.00361633%207.08522C0.00214577%207.06792%200.00112343%207.05059%200.000549316%207.03325L0%207C0%206.98887%200.000181198%206.97779%200.000541687%206.96675C0.00109482%206.94973%200.00215721%206.93173%200.00370216%206.91377C0.00553322%206.89211%200.007967%206.87148%200.0110188%206.85104C0.013628%206.83405%200.0167027%206.81663%200.0202408%206.79927C0.024641%206.77725%200.0298328%206.75556%200.0357208%206.73416C0.0400982%206.71854%200.0447292%206.70315%200.0497379%206.68786C0.0561218%206.6682%200.0633163%206.64842%200.071104%206.62894C0.0781956%206.6112%200.08568%206.5939%200.0936737%206.57678C0.103376%206.55611%200.113794%206.53571%200.124876%206.51572C0.131498%206.50361%200.138607%206.49139%200.145996%206.47929C0.161718%206.45373%200.17849%206.42887%200.196314%206.40484C0.225313%206.36567%200.257498%206.32829%200.292892%206.29289L0.212786%206.38325C0.237669%206.35153%200.264425%206.32136%200.292892%206.29289L6.29289%200.292893C6.68342%20-0.0976311%207.31658%20-0.0976311%207.70711%200.292893C8.09763%200.683418%208.09763%201.31658%207.70711%201.70711L3.415%206L17%206C17.5128%206%2017.9355%206.38604%2017.9933%206.88338L18%207Z%22%20fill%3D%22white%22%2F%3E%0A%3Cmask%20id%3D%22mask0_62_588%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2218%22%20height%3D%2214%22%3E%0A%3Cpath%20d%3D%22M18%207C18%207.55228%2017.5523%208%2017%208L3.415%208L7.70711%2012.2929C8.06759%2012.6534%208.09532%2013.2206%207.7903%2013.6129L7.70711%2013.7071C7.31658%2014.0976%206.68342%2014.0976%206.29289%2013.7071L0.292892%207.70711C0.264425%207.67864%200.237669%207.64847%200.212786%207.61675C0.207285%207.60984%200.201754%207.6026%200.196335%207.59531C0.17849%207.57113%200.161718%207.54628%200.146067%207.52066C0.138607%207.50861%200.1315%207.49639%200.124672%207.48406C0.113794%207.46429%200.103378%207.44389%200.0936546%207.4231C0.08568%207.4061%200.0781975%207.3888%200.0712261%207.37134C0.0633163%207.35158%200.0561237%207.3318%200.0495472%207.31174C0.0447292%207.29685%200.0400982%207.28146%200.0358448%207.26599C0.0298328%207.24444%200.0246391%207.22275%200.0201645%207.20079C0.0167007%207.18338%200.0136299%207.16595%200.0110188%207.14847C0.00376129%207.10036%200%207.05062%200%207L0.00361633%207.08522C0.00214577%207.06792%200.00112343%207.05059%200.000549316%207.03325L0%207C0%206.98887%200.000181198%206.97779%200.000541687%206.96675C0.00109482%206.94973%200.00215721%206.93173%200.00370216%206.91377C0.00553322%206.89211%200.007967%206.87148%200.0110188%206.85104C0.013628%206.83405%200.0167027%206.81663%200.0202408%206.79927C0.024641%206.77725%200.0298328%206.75556%200.0357208%206.73416C0.0400982%206.71854%200.0447292%206.70315%200.0497379%206.68786C0.0561218%206.6682%200.0633163%206.64842%200.071104%206.62894C0.0781956%206.6112%200.08568%206.5939%200.0936737%206.57678C0.103376%206.55611%200.113794%206.53571%200.124876%206.51572C0.131498%206.50361%200.138607%206.49139%200.145996%206.47929C0.161718%206.45373%200.17849%206.42887%200.196314%206.40484C0.225313%206.36567%200.257498%206.32829%200.292892%206.29289L0.212786%206.38325C0.237669%206.35153%200.264425%206.32136%200.292892%206.29289L6.29289%200.292893C6.68342%20-0.0976311%207.31658%20-0.0976311%207.70711%200.292893C8.09763%200.683418%208.09763%201.31658%207.70711%201.70711L3.415%206L17%206C17.5128%206%2017.9355%206.38604%2017.9933%206.88338L18%207Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_62_588)%22%3E%0A%3Cpath%20d%3D%22M21%2019V-5L-3%20-5V19H21Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.NavbarButton>
      <_Builtin.NavbarContainer
        className={_utils.cx(_styles, "navbarcontainer")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar-content", "custom1")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar-brand")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "navbar-logo-link")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "img-full-width")}
                width="Auto"
                height="Auto"
                loading="eager"
                src="https://cdn.prod.website-files.com/660d27533c9c61d241f50da3/660eb225ccb660034afc6ccb_the%20pocket%20protector.avif"
              />
              <_Builtin.Image
                className={_utils.cx(_styles, "logo", "white")}
                width="Auto"
                height="Auto"
                loading="lazy"
                src="https://cdn.prod.website-files.com/660d27533c9c61d241f50da3/660f9dc5c567e77fd0f08fe4_Logo_The%20Pocket%20Protector%402x.png"
              />
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "navbar-menu")}
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-menu-wrapper")}
              tag="div"
            >
              <_Builtin.NavbarButton
                className={_utils.cx(
                  _styles,
                  "",
                  "",
                  "menu-button",
                  "nav-menu"
                )}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "nav-arrow", "show")}
                  value="%3Csvg%20width%3D%2218%22%20height%3D%2214%22%20viewBox%3D%220%200%2018%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M18%207C18%207.55228%2017.5523%208%2017%208L3.415%208L7.70711%2012.2929C8.06759%2012.6534%208.09532%2013.2206%207.7903%2013.6129L7.70711%2013.7071C7.31658%2014.0976%206.68342%2014.0976%206.29289%2013.7071L0.292892%207.70711C0.264425%207.67864%200.237669%207.64847%200.212786%207.61675C0.207285%207.60984%200.201754%207.6026%200.196335%207.59531C0.17849%207.57113%200.161718%207.54628%200.146067%207.52066C0.138607%207.50861%200.1315%207.49639%200.124672%207.48406C0.113794%207.46429%200.103378%207.44389%200.0936546%207.4231C0.08568%207.4061%200.0781975%207.3888%200.0712261%207.37134C0.0633163%207.35158%200.0561237%207.3318%200.0495472%207.31174C0.0447292%207.29685%200.0400982%207.28146%200.0358448%207.26599C0.0298328%207.24444%200.0246391%207.22275%200.0201645%207.20079C0.0167007%207.18338%200.0136299%207.16595%200.0110188%207.14847C0.00376129%207.10036%200%207.05062%200%207L0.00361633%207.08522C0.00214577%207.06792%200.00112343%207.05059%200.000549316%207.03325L0%207C0%206.98887%200.000181198%206.97779%200.000541687%206.96675C0.00109482%206.94973%200.00215721%206.93173%200.00370216%206.91377C0.00553322%206.89211%200.007967%206.87148%200.0110188%206.85104C0.013628%206.83405%200.0167027%206.81663%200.0202408%206.79927C0.024641%206.77725%200.0298328%206.75556%200.0357208%206.73416C0.0400982%206.71854%200.0447292%206.70315%200.0497379%206.68786C0.0561218%206.6682%200.0633163%206.64842%200.071104%206.62894C0.0781956%206.6112%200.08568%206.5939%200.0936737%206.57678C0.103376%206.55611%200.113794%206.53571%200.124876%206.51572C0.131498%206.50361%200.138607%206.49139%200.145996%206.47929C0.161718%206.45373%200.17849%206.42887%200.196314%206.40484C0.225313%206.36567%200.257498%206.32829%200.292892%206.29289L0.212786%206.38325C0.237669%206.35153%200.264425%206.32136%200.292892%206.29289L6.29289%200.292893C6.68342%20-0.0976311%207.31658%20-0.0976311%207.70711%200.292893C8.09763%200.683418%208.09763%201.31658%207.70711%201.70711L3.415%206L17%206C17.5128%206%2017.9355%206.38604%2017.9933%206.88338L18%207Z%22%20fill%3D%22white%22%2F%3E%0A%3Cmask%20id%3D%22mask0_62_589%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2218%22%20height%3D%2214%22%3E%0A%3Cpath%20d%3D%22M18%207C18%207.55228%2017.5523%208%2017%208L3.415%208L7.70711%2012.2929C8.06759%2012.6534%208.09532%2013.2206%207.7903%2013.6129L7.70711%2013.7071C7.31658%2014.0976%206.68342%2014.0976%206.29289%2013.7071L0.292892%207.70711C0.264425%207.67864%200.237669%207.64847%200.212786%207.61675C0.207285%207.60984%200.201754%207.6026%200.196335%207.59531C0.17849%207.57113%200.161718%207.54628%200.146067%207.52066C0.138607%207.50861%200.1315%207.49639%200.124672%207.48406C0.113794%207.46429%200.103378%207.44389%200.0936546%207.4231C0.08568%207.4061%200.0781975%207.3888%200.0712261%207.37134C0.0633163%207.35158%200.0561237%207.3318%200.0495472%207.31174C0.0447292%207.29685%200.0400982%207.28146%200.0358448%207.26599C0.0298328%207.24444%200.0246391%207.22275%200.0201645%207.20079C0.0167007%207.18338%200.0136299%207.16595%200.0110188%207.14847C0.00376129%207.10036%200%207.05062%200%207L0.00361633%207.08522C0.00214577%207.06792%200.00112343%207.05059%200.000549316%207.03325L0%207C0%206.98887%200.000181198%206.97779%200.000541687%206.96675C0.00109482%206.94973%200.00215721%206.93173%200.00370216%206.91377C0.00553322%206.89211%200.007967%206.87148%200.0110188%206.85104C0.013628%206.83405%200.0167027%206.81663%200.0202408%206.79927C0.024641%206.77725%200.0298328%206.75556%200.0357208%206.73416C0.0400982%206.71854%200.0447292%206.70315%200.0497379%206.68786C0.0561218%206.6682%200.0633163%206.64842%200.071104%206.62894C0.0781956%206.6112%200.08568%206.5939%200.0936737%206.57678C0.103376%206.55611%200.113794%206.53571%200.124876%206.51572C0.131498%206.50361%200.138607%206.49139%200.145996%206.47929C0.161718%206.45373%200.17849%206.42887%200.196314%206.40484C0.225313%206.36567%200.257498%206.32829%200.292892%206.29289L0.212786%206.38325C0.237669%206.35153%200.264425%206.32136%200.292892%206.29289L6.29289%200.292893C6.68342%20-0.0976311%207.31658%20-0.0976311%207.70711%200.292893C8.09763%200.683418%208.09763%201.31658%207.70711%201.70711L3.415%206L17%206C17.5128%206%2017.9355%206.38604%2017.9933%206.88338L18%207Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_62_589)%22%3E%0A%3Cpath%20d%3D%22M21%2019V-5L-3%20-5V19H21Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.NavbarButton>
              <_Builtin.Link
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "logo", "white", "show")}
                  width="Auto"
                  height="Auto"
                  loading="eager"
                  src="https://cdn.prod.website-files.com/660d27533c9c61d241f50da3/660f9dc5c567e77fd0f08fe4_Logo_The%20Pocket%20Protector%402x.png"
                />
              </_Builtin.Link>
            </_Builtin.Block>
            {flexBlock4Visibility ? (
              <_Builtin.VFlex
                className={_utils.cx(_styles, "flex-block-4")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "button", "nav-btn")}
                  button={true}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"See If I Qualify"}
                </_Builtin.Link>
              </_Builtin.VFlex>
            ) : null}
          </_Builtin.NavbarMenu>
        </_Builtin.Block>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
