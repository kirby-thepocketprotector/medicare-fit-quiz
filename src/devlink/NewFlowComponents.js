"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NewFlowComponents.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3825":{"id":"e-3825","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-226","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3826"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d374729e7d930b906e9633|b4e36091-d52b-5509-fcf1-c24562845503","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d374729e7d930b906e9633|b4e36091-d52b-5509-fcf1-c24562845503","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758688371671},"e-3826":{"id":"e-3826","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-227","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3825"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d374729e7d930b906e9633|b4e36091-d52b-5509-fcf1-c24562845503","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d374729e7d930b906e9633|b4e36091-d52b-5509-fcf1-c24562845503","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758688371671},"e-3827":{"id":"e-3827","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-228","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3828"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d374729e7d930b906e9633|ded137fc-0383-08a7-e5a5-075bb4d088cc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d374729e7d930b906e9633|ded137fc-0383-08a7-e5a5-075bb4d088cc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758688371671},"e-3828":{"id":"e-3828","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-229","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3827"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d374729e7d930b906e9633|ded137fc-0383-08a7-e5a5-075bb4d088cc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d374729e7d930b906e9633|ded137fc-0383-08a7-e5a5-075bb4d088cc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1758688371671},"e-3991":{"id":"e-3991","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3992"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f0134351-a1ff-5991-1b73-d510c4c45a6e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f0134351-a1ff-5991-1b73-d510c4c45a6e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764319384001},"e-3993":{"id":"e-3993","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3994"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"52c6bbcc-8705-fc0a-4a55-a25cb4168768","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"52c6bbcc-8705-fc0a-4a55-a25cb4168768","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764319457440},"e-3995":{"id":"e-3995","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3996"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6928fe5961a464a1c8bafa53|a6ab9181-f4ec-fcf3-ccfa-0dc7bf7f6bab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6928fe5961a464a1c8bafa53|a6ab9181-f4ec-fcf3-ccfa-0dc7bf7f6bab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764334260484},"e-4001":{"id":"e-4001","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4002"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6b124689-4beb-3eb3-72ae-de83606e1e48","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6b124689-4beb-3eb3-72ae-de83606e1e48","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764546554635},"e-4002":{"id":"e-4002","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-286","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4001"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6b124689-4beb-3eb3-72ae-de83606e1e48","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6b124689-4beb-3eb3-72ae-de83606e1e48","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764546554647},"e-4003":{"id":"e-4003","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4004"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6928fe5961a464a1c8bafa53|2722cc55-440c-4bfd-4bf5-14c53b7adfa4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6928fe5961a464a1c8bafa53|2722cc55-440c-4bfd-4bf5-14c53b7adfa4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764546901507},"e-4004":{"id":"e-4004","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-286","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4003"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6928fe5961a464a1c8bafa53|2722cc55-440c-4bfd-4bf5-14c53b7adfa4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6928fe5961a464a1c8bafa53|2722cc55-440c-4bfd-4bf5-14c53b7adfa4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764546901507},"e-4005":{"id":"e-4005","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-287","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4006"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"84af9347-8b4e-c37f-ab12-b38c29443734","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"84af9347-8b4e-c37f-ab12-b38c29443734","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764546914295},"e-4006":{"id":"e-4006","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-288","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4005"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"84af9347-8b4e-c37f-ab12-b38c29443734","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"84af9347-8b4e-c37f-ab12-b38c29443734","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764546914321},"e-4007":{"id":"e-4007","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-287","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4008"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6928fe5961a464a1c8bafa53|99dbc02b-9407-ee34-8228-e220e4c11dbb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6928fe5961a464a1c8bafa53|99dbc02b-9407-ee34-8228-e220e4c11dbb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764546935011},"e-4008":{"id":"e-4008","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-288","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4007"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6928fe5961a464a1c8bafa53|99dbc02b-9407-ee34-8228-e220e4c11dbb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6928fe5961a464a1c8bafa53|99dbc02b-9407-ee34-8228-e220e4c11dbb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764546935011},"e-4009":{"id":"e-4009","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-289","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4010"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7fe58e38-ee84-07bc-8089-f00b982edc4e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7fe58e38-ee84-07bc-8089-f00b982edc4e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764546949601},"e-4010":{"id":"e-4010","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-290","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4009"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7fe58e38-ee84-07bc-8089-f00b982edc4e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7fe58e38-ee84-07bc-8089-f00b982edc4e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764546949610},"e-4011":{"id":"e-4011","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4012"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"692e1f182b8f95fad5ee2b21|a6ab9181-f4ec-fcf3-ccfa-0dc7bf7f6bab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"692e1f182b8f95fad5ee2b21|a6ab9181-f4ec-fcf3-ccfa-0dc7bf7f6bab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764630297307},"e-4013":{"id":"e-4013","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-291","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4014"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"692e1f182b8f95fad5ee2b21|2722cc55-440c-4bfd-4bf5-14c53b7adfa4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"692e1f182b8f95fad5ee2b21|2722cc55-440c-4bfd-4bf5-14c53b7adfa4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764630297307},"e-4014":{"id":"e-4014","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4013"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"692e1f182b8f95fad5ee2b21|2722cc55-440c-4bfd-4bf5-14c53b7adfa4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"692e1f182b8f95fad5ee2b21|2722cc55-440c-4bfd-4bf5-14c53b7adfa4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764630297307},"e-4015":{"id":"e-4015","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-287","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4016"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"692e1f182b8f95fad5ee2b21|99dbc02b-9407-ee34-8228-e220e4c11dbb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"692e1f182b8f95fad5ee2b21|99dbc02b-9407-ee34-8228-e220e4c11dbb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764630297307},"e-4016":{"id":"e-4016","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-288","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4015"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"692e1f182b8f95fad5ee2b21|99dbc02b-9407-ee34-8228-e220e4c11dbb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"692e1f182b8f95fad5ee2b21|99dbc02b-9407-ee34-8228-e220e4c11dbb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764630297307},"e-4019":{"id":"e-4019","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-226","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4020"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764803990173},"e-4020":{"id":"e-4020","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-227","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4019"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764803990173},"e-4021":{"id":"e-4021","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-228","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4022"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764803990173},"e-4022":{"id":"e-4022","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-229","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4021"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1764803990173}},"actionLists":{"a-226":{"id":"a-226","title":"Article Hero Hover In","actionItemGroups":[{"actionItems":[{"id":"a-226-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-226-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1.05,"yValue":1.05,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1749466393726},"a-227":{"id":"a-227","title":"Article Hero Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-227-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1749466393726},"a-228":{"id":"a-228","title":"Article Hero Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-228-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-228-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1.05,"yValue":1.05,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1749466393726},"a-229":{"id":"a-229","title":"Article Hero Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-229-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1749466393726},"a-284":{"id":"a-284","title":"New Applicant Hide Full Summary","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".new-flow-applicant-summary-wrapper","selectorGuids":["5e33297c-3923-ce11-91f7-5b3252de4534"]},"value":"block"}},{"id":"a-284-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"f0134351-a1ff-5991-1b73-d510c4c45a6e"},"value":"flex"}},{"id":"a-284-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","id":"52c6bbcc-8705-fc0a-4a55-a25cb4168768"},"value":"none"}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".new-flow-applicant-summary-wrapper","selectorGuids":["5e33297c-3923-ce11-91f7-5b3252de4534"]},"value":"none"}},{"id":"a-284-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"f0134351-a1ff-5991-1b73-d510c4c45a6e"},"value":"none"}},{"id":"a-284-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","id":"52c6bbcc-8705-fc0a-4a55-a25cb4168768"},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1764319387218},"a-285":{"id":"a-285","title":"New Applicant Show Full Summary","actionItemGroups":[{"actionItems":[{"id":"a-285-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".new-flow-applicant-summary-wrapper","selectorGuids":["5e33297c-3923-ce11-91f7-5b3252de4534"]},"value":"block"}},{"id":"a-285-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","id":"f0134351-a1ff-5991-1b73-d510c4c45a6e"},"value":"flex"}},{"id":"a-285-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"52c6bbcc-8705-fc0a-4a55-a25cb4168768"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764319387218},"a-283":{"id":"a-283","title":"New Applicant Hover In 1","actionItemGroups":[{"actionItems":[{"id":"a-283-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"9d3c5b04-28a0-454f-784c-295e15927860"},"value":"none"}}]},{"actionItems":[{"id":"a-283-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"9d3c5b04-28a0-454f-784c-295e15927860"},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1764314223989},"a-286":{"id":"a-286","title":"New Applicant Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-286-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"9d3c5b04-28a0-454f-784c-295e15927860"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764331359140},"a-287":{"id":"a-287","title":"New Applicant Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-287-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".new-applicant-tool-tip-content-wrapper._02","selectorGuids":["1cebdde3-b40d-6ecc-0a90-4f85d705b69c","bb05330f-0104-f52f-fbcc-506a83799bc4"]},"value":"none"}}]},{"actionItems":[{"id":"a-287-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".new-applicant-tool-tip-content-wrapper._02","selectorGuids":["1cebdde3-b40d-6ecc-0a90-4f85d705b69c","bb05330f-0104-f52f-fbcc-506a83799bc4"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1764314223989},"a-288":{"id":"a-288","title":"New Applicant Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-288-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".new-applicant-tool-tip-content-wrapper._02","selectorGuids":["1cebdde3-b40d-6ecc-0a90-4f85d705b69c","bb05330f-0104-f52f-fbcc-506a83799bc4"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764314223989},"a-289":{"id":"a-289","title":"New Applicant Hover In 3","actionItemGroups":[{"actionItems":[{"id":"a-289-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".new-applicant-tool-tip-content-wrapper._03","selectorGuids":["1cebdde3-b40d-6ecc-0a90-4f85d705b69c","dede7d9a-33f7-9bcc-016d-3bfd94ef0e0a"]},"value":"none"}}]},{"actionItems":[{"id":"a-289-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".new-applicant-tool-tip-content-wrapper._03","selectorGuids":["1cebdde3-b40d-6ecc-0a90-4f85d705b69c","dede7d9a-33f7-9bcc-016d-3bfd94ef0e0a"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1764314223989},"a-290":{"id":"a-290","title":"New Applicant Hover Out 3","actionItemGroups":[{"actionItems":[{"id":"a-290-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".new-applicant-tool-tip-content-wrapper._03","selectorGuids":["1cebdde3-b40d-6ecc-0a90-4f85d705b69c","dede7d9a-33f7-9bcc-016d-3bfd94ef0e0a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764314223989},"a-291":{"id":"a-291","title":"New Applicant Hover In 4","actionItemGroups":[{"actionItems":[{"id":"a-291-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"692e1f182b8f95fad5ee2b21|9d3c5b04-28a0-454f-784c-295e15927860"},"value":"none"}}]},{"actionItems":[{"id":"a-291-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"692e1f182b8f95fad5ee2b21|9d3c5b04-28a0-454f-784c-295e15927860"},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1764314223989},"a-292":{"id":"a-292","title":"New Applicant Hover Out 4","actionItemGroups":[{"actionItems":[{"id":"a-292-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"692e1f182b8f95fad5ee2b21|9d3c5b04-28a0-454f-784c-295e15927860"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764331359140}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewFlowComponents({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "page-styling")}
        value="%3Cstyle%3E%0A%2F*%20Remove%20arrow%20in%20Chrome%2C%20Safari%2C%20Edge%2C%20Opera%20*%2F%0Aselect%20%7B%0A%20%20-webkit-appearance%3A%20none%3B%0A%20%20-moz-appearance%3A%20none%3B%20%2F*%20Firefox%20*%2F%0A%20%20appearance%3A%20none%3B%0A%20%20background%3A%20transparent%3B%20%2F*%20Optional%3A%20removes%20default%20background%20*%2F%0A%20%20padding-right%3A%201em%3B%20%2F*%20Optional%3A%20space%20for%20custom%20arrow%20if%20needed%20*%2F%0A%20%20border%3A%201px%20solid%20%23ccc%3B%20%2F*%20Optional%20styling%20*%2F%0A%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%2F*%20Remove%20arrow%20in%20IE%2010%2B%20*%2F%0Aselect%3A%3A-ms-expand%20%7B%0A%20%20display%3A%20none%3B%0A%7D%0A%0A%2F*%20Class%20for%20when%20a%20value%20is%20selected%20*%2F%0Aselect.selected%20%7B%0A%20%20color%3A%20%23131827%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.Block className={_utils.cx(_styles, "new-flow-nav")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "page-padding")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-1280")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "new-flow-nav-wrapper")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "new-flow-back-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "new-flow-back-icon")}
                  value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M15%2019L8%2012L15%205%22%20stroke%3D%22black%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "new-flow-call-btn-wrapper")}
                button={false}
                block="inline"
                options={{
                  href: "tel:(844)557-8100",
                }}
              >
                <_Builtin.Block tag="div">{"Call Now"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "main-wrapper")} tag="div">
        <_Builtin.Section
          className={_utils.cx(_styles, "section-humana")}
          grid={{
            type: "section",
          }}
          tag="section"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "page-padding")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "container-600")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "padding-section-25")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "new-flow-content-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-top")}
                    tag="div"
                    id="top"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "new-flow-eyelid-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-size-16-outfit")}
                      tag="div"
                    >
                      {
                        "This is an online enrollment form to be enrolled once accepted by the Centers of Medicare and Medicaid Services. You will receive notice of acceptance or denial. Outside of the annual enrollment period, you will need to have a special election period to enroll. This will be determined later in the application process."
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "new-flow-logo-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(
                        _styles,
                        "img-full-width",
                        "contain"
                      )}
                      loading="eager"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/660d27533c9c61d241f50da3/6929170cdc63064ea78eaa92_tpp-humana-logo.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "header-20-outfit",
                      "margin-bottom-33"
                    )}
                    tag="h1"
                  >
                    {"Let's Get Started"}
                  </_Builtin.Heading>
                  <_Builtin.FormWrapper
                    className={_utils.cx(_styles, "new-flow-form")}
                  >
                    <_Builtin.FormForm
                      className={_utils.cx(_styles, "new-flow-form-wrapper")}
                      name="wf-form-Humana-Checkout-Form"
                      data-name="Humana Checkout Form"
                      method="get"
                      id="wf-form-Humana-Checkout-Form"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-flow-applicant-summary-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "new-flow-applicant-info-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "heading-16-outfit",
                              "margin-bottom-11"
                            )}
                            tag="h2"
                          >
                            {"Applicant Info"}
                          </_Builtin.Heading>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="completedBy"
                            >
                              {"Who is completing this enrollment?"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Who-is-completing-this-enrollment"
                              data-name="Who is completing this enrollment?"
                              required={false}
                              multiple={false}
                              id="completedBy"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Applicant",
                                  v: "Applicant",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="carrier"
                            >
                              {"Carrier"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "new-flow-input")}
                              name="Carrier"
                              maxLength={256}
                              data-name="Carrier"
                              placeholder="Enter carrier name"
                              disabled={false}
                              type="text"
                              required={false}
                              autoFocus={false}
                              id="carrier"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="Plan"
                            >
                              {"Plan"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "new-flow-input")}
                              name="Plan"
                              maxLength={256}
                              data-name="Plan"
                              placeholder="Enter plan name"
                              disabled={false}
                              type="text"
                              required={false}
                              autoFocus={false}
                              id="Plan"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="firstName"
                            >
                              {"First Name"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "new-flow-input")}
                              name="First-Name"
                              maxLength={256}
                              data-name="First Name"
                              placeholder="Enter first name"
                              disabled={false}
                              type="text"
                              required={false}
                              autoFocus={false}
                              id="firstName"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="lastName"
                            >
                              {"Last Name"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "new-flow-input")}
                              name="Last-Name"
                              maxLength={256}
                              data-name="Last Name"
                              placeholder="Enter last name"
                              disabled={false}
                              type="text"
                              required={false}
                              autoFocus={false}
                              id="lastName"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="sex"
                            >
                              {"Sex"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Sex"
                              data-name="Sex"
                              required={false}
                              multiple={false}
                              id="sex"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "M",
                                  v: "Male",
                                },
                                {
                                  t: "F",
                                  v: "Female",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="permanentAdd"
                            >
                              {"Permanent Address"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "new-flow-input")}
                              name="Permanent-Address"
                              maxLength={256}
                              data-name="Permanent Address"
                              placeholder="Enter permanent address"
                              disabled={false}
                              type="text"
                              required={false}
                              autoFocus={false}
                              id="permanentAdd"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="county"
                            >
                              {"County"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="County"
                              data-name="County"
                              required={false}
                              multiple={false}
                              id="county"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="medNum"
                            >
                              {"Medicare Number"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "new-flow-input")}
                              name="Medicare-Number"
                              maxLength={256}
                              data-name="Medicare Number"
                              placeholder="Enter medicare number"
                              disabled={false}
                              type="text"
                              required={false}
                              autoFocus={false}
                              id="medNum"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="partADate"
                            >
                              {"Part A Effective Date"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "new-flow-input")}
                              name="Part-A-Effective-Date"
                              maxLength={256}
                              data-name="Part A Effective Date"
                              placeholder="Enter Part A Effective Date"
                              disabled={false}
                              type="text"
                              required={false}
                              autoFocus={false}
                              id="partADate"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="partBDate"
                            >
                              {"Part B Effective Date"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "new-flow-input")}
                              name="Part-B-Effective-Date"
                              maxLength={256}
                              data-name="Part B Effective Date"
                              placeholder="Enter Part B Effective Date"
                              disabled={false}
                              type="text"
                              required={false}
                              autoFocus={false}
                              id="partBDate"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="proposedPlanDate"
                            >
                              {"Proposed Plan Effective Date"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "new-flow-input")}
                              name="Proposed-Plan-Effective-Date"
                              maxLength={256}
                              data-name="Proposed Plan Effective Date"
                              placeholder="Enter Proposed Plan Effective Date"
                              disabled={false}
                              type="text"
                              required={false}
                              autoFocus={false}
                              id="proposedPlanDate"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "new-flow-add-info-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "heading-16-outfit",
                              "margin-bottom-11"
                            )}
                            tag="h2"
                          >
                            {"Additional Info"}
                          </_Builtin.Heading>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="language"
                            >
                              {"Your preferred language"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Language"
                              data-name="Language"
                              required={false}
                              multiple={false}
                              id="language"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "English",
                                  v: "English",
                                },
                                {
                                  t: "Spanish",
                                  v: "Spanish",
                                },
                                {
                                  t: "Other",
                                  v: "Other",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="accessibilityOptions"
                            >
                              {
                                "Do you wish to denote any accessibility options?"
                              }
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Do-you-wish-to-denote-any-accessibility-options"
                              data-name="Do you wish to denote any accessibility options?"
                              required={false}
                              multiple={false}
                              id="accessibilityOptions"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Yes",
                                  v: "Yes",
                                },
                                {
                                  t: "No",
                                  v: "No",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="isMailingDifferent"
                            >
                              {
                                "Is your mailing address different from your permanent address?"
                              }
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Is-your-mailing-address-different-from-your-permanent-address"
                              data-name="Is your mailing address different from your permanent address?"
                              required={false}
                              multiple={false}
                              id="isMailingDifferent"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Yes",
                                  v: "Yes",
                                },
                                {
                                  t: "No",
                                  v: "No",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "new-flow-add-info-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "heading-16-outfit",
                              "margin-bottom-11"
                            )}
                            tag="h2"
                          >
                            {"Other Insurance"}
                          </_Builtin.Heading>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="isEnrolledInMedicaid"
                            >
                              {
                                "Are you enrolled in your state Medicaid assistance program?"
                              }
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Are-you-enrolled-in-your-state-Medicaid-assistance-program"
                              data-name="Are you enrolled in your state Medicaid assistance program?"
                              required={false}
                              multiple={false}
                              id="isEnrolledInMedicaid"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Yes",
                                  v: "Yes",
                                },
                                {
                                  t: "No",
                                  v: "No",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "new-applicant-tool-tip-wrapper"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-12-outfit",
                                  "margin-bottom-custom-1"
                                )}
                                tag="div"
                              >
                                {
                                  "Will you have any medical insurance other than Medicare or Medicaid when this plan becomes effective? "
                                }
                                <_Builtin.Span
                                  className={_utils.cx(_styles, "tool-tip")}
                                  data-w-id="6b124689-4beb-3eb3-72ae-de83606e1e48"
                                >
                                  {""}
                                </_Builtin.Span>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "new-applicant-tool-tip-content-wrapper"
                                )}
                                data-w-id="9d3c5b04-28a0-454f-784c-295e15927860"
                                tag="div"
                              >
                                <_Builtin.Block tag="div">
                                  {
                                    "This includes any coverage from an employer, union, Veterans Affairs (VA), TRICARE, or private insurance. Select “No” if none of these apply"
                                  }
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Will-you-have-any-medical-insurance-other-than-Medicare-or-Medicaid-when-this-plan-becomes-effective"
                              data-name="Will you have any medical insurance other than Medicare or Medicaid when this plan becomes effective?"
                              required={false}
                              multiple={false}
                              id="hasOtherMedicalInsurance"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Yes",
                                  v: "Yes",
                                },
                                {
                                  t: "No",
                                  v: "No",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="hasOtherPrescriptionCoverage"
                            >
                              {
                                "Will you have other prescription drug coverage when this plan becomes effective?"
                              }
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(
                                _styles,
                                "new-flow-select",
                                "margin-bottom-16"
                              )}
                              name="Will-you-have-other-prescription-drug-coverage-when-this-plan-becomes-effective"
                              data-name="Will you have other prescription drug coverage when this plan becomes effective?"
                              required={false}
                              multiple={false}
                              id="hasOtherPrescriptionCoverage"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Yes",
                                  v: "Yes",
                                },
                                {
                                  t: "No",
                                  v: "No",
                                },
                              ]}
                            />
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "new-flow-policy-yes-wrapper"
                              )}
                              tag="div"
                              id="otherDrugCoverageYes"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "new-applicant-item-wrapper"
                                )}
                                tag="div"
                              >
                                <_Builtin.FormBlockLabel
                                  className={_utils.cx(
                                    _styles,
                                    "text-size-12-outfit",
                                    "margin-bottom-custom-1"
                                  )}
                                  htmlFor="policyID"
                                >
                                  {"Policy ID"}
                                </_Builtin.FormBlockLabel>
                                <_Builtin.FormTextInput
                                  className={_utils.cx(
                                    _styles,
                                    "new-flow-input"
                                  )}
                                  name="Policy-ID"
                                  maxLength={256}
                                  data-name="Policy ID"
                                  placeholder="Enter Policy ID"
                                  disabled={false}
                                  type="text"
                                  required={false}
                                  autoFocus={false}
                                  id="policyID"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "new-applicant-item-wrapper"
                                )}
                                tag="div"
                              >
                                <_Builtin.FormBlockLabel
                                  className={_utils.cx(
                                    _styles,
                                    "text-size-12-outfit",
                                    "margin-bottom-custom-1"
                                  )}
                                  htmlFor="policyCarrierName"
                                >
                                  {"Carrier Name"}
                                </_Builtin.FormBlockLabel>
                                <_Builtin.FormTextInput
                                  className={_utils.cx(
                                    _styles,
                                    "new-flow-input"
                                  )}
                                  name="Carrier-Name"
                                  maxLength={256}
                                  data-name="Carrier Name"
                                  placeholder="Enter Carrier Name"
                                  disabled={false}
                                  type="text"
                                  required={false}
                                  autoFocus={false}
                                  id="policyCarrierName"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "new-applicant-item-wrapper"
                                )}
                                tag="div"
                              >
                                <_Builtin.FormBlockLabel
                                  className={_utils.cx(
                                    _styles,
                                    "text-size-12-outfit",
                                    "margin-bottom-custom-1"
                                  )}
                                  htmlFor="policyMemberID"
                                >
                                  {"Member ID"}
                                </_Builtin.FormBlockLabel>
                                <_Builtin.FormTextInput
                                  className={_utils.cx(
                                    _styles,
                                    "new-flow-input"
                                  )}
                                  name="Member-ID"
                                  maxLength={256}
                                  data-name="Member ID"
                                  placeholder="Enter Member ID"
                                  disabled={false}
                                  type="text"
                                  required={false}
                                  autoFocus={false}
                                  id="policyMemberID"
                                />
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="wantsToProvideVeteranStatus"
                            >
                              {
                                "Would you like to provide us your veteran status?"
                              }
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Would-you-like-to-provide-us-your-veteran-status"
                              data-name="Would you like to provide us your veteran status?"
                              required={false}
                              multiple={false}
                              id="wantsToProvideVeteranStatus"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Yes",
                                  v: "Yes",
                                },
                                {
                                  t: "No",
                                  v: "No",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "new-flow-add-info-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "heading-16-outfit",
                              "margin-bottom-11"
                            )}
                            tag="h2"
                          >
                            {"Your Doctor"}
                          </_Builtin.Heading>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "custom-text-1"
                            )}
                            tag="div"
                          >
                            {
                              "We strongly recommend that you specify a primary care doctor (PCP). If you don’t specify a PCP, the health plan will likely assign you one. If that happens you will need to contact the health plan’s customer service team to update your provider."
                            }
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="wantsToSpecifyPrimaryCarePhysician"
                            >
                              {
                                "Do you wish to specify a primary care physician now?"
                              }
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Do-you-wish-to-specify-a-primary-care-physician-now"
                              data-name="Do you wish to specify a primary care physician now?"
                              required={false}
                              multiple={false}
                              id="wantsToSpecifyPrimaryCarePhysician"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Yes",
                                  v: "Yes",
                                },
                                {
                                  t: "No",
                                  v: "No",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "new-flow-add-info-wrapper"
                          )}
                          tag="div"
                          id="otherDoctorSearchNo"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="otherDoctorSearch"
                            >
                              {
                                "Any other doctors not listed you want to look up?"
                              }
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Any-other-doctors-not-listed-you-want-to-look-up"
                              data-name="Any other doctors not listed you want to look up?"
                              required={false}
                              multiple={false}
                              id="otherDoctorSearch"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Yes",
                                  v: "Yes",
                                },
                                {
                                  t: "No",
                                  v: "No",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "heading-16-outfit",
                              "margin-bottom-11"
                            )}
                            tag="h2"
                          >
                            {"Your Doctorname"}
                          </_Builtin.Heading>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="doctorName"
                            >
                              {"Doctor Name"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "new-flow-input")}
                              name="Doctor-Name"
                              maxLength={256}
                              data-name="Doctor Name"
                              placeholder="Enter Doctor Name"
                              disabled={false}
                              type="text"
                              required={false}
                              autoFocus={false}
                              id="doctorName"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="doctorLocation"
                            >
                              {"Location"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "new-flow-input")}
                              name="Doctor-Location"
                              maxLength={256}
                              data-name="Doctor Location"
                              placeholder="Enter Location"
                              disabled={false}
                              type="text"
                              required={false}
                              autoFocus={false}
                              id="doctorLocation"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="isCurrentPatientOfProvider"
                            >
                              {"Are you currently a patient of this provided?"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Are-you-currently-a-patient-of-this-provided"
                              data-name="Are you currently a patient of this provided?"
                              required={false}
                              multiple={false}
                              id="isCurrentPatientOfProvider"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Yes",
                                  v: "Yes",
                                },
                                {
                                  t: "No",
                                  v: "No",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "new-flow-add-info-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "heading-16-outfit",
                              "margin-bottom-11"
                            )}
                            tag="h2"
                          >
                            {"Optional Questions"}
                          </_Builtin.Heading>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="isNursingHomeResident"
                            >
                              {
                                "Are you currently a resident in a nursing home or long-term care facility?"
                              }
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Are-you-currently-a-resident-in-a-nursing-home-or-long-term-care-facility"
                              data-name="Are you currently a resident in a nursing home or long-term care facility?"
                              required={false}
                              multiple={false}
                              id="isNursingHomeResident"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Yes",
                                  v: "Yes",
                                },
                                {
                                  t: "No",
                                  v: "No",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="willYouOrSpouseWork"
                            >
                              {"Once enrolled, will you or your spouse work?"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Once-enrolled-will-you-or-your-spouse-work"
                              data-name="Once enrolled, will you or your spouse work?"
                              required={false}
                              multiple={false}
                              id="willYouOrSpouseWork"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Yes",
                                  v: "Yes",
                                },
                                {
                                  t: "No",
                                  v: "No",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "new-flow-add-info-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "heading-16-outfit",
                              "margin-bottom-11"
                            )}
                            tag="h2"
                          >
                            {"Contact Preference (optional)"}
                          </_Builtin.Heading>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="preferredContactMethod"
                            >
                              {
                                "Would you prefer to receive important messages about your coverage and benefit by email or phone?"
                              }
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Would-you-prefer-to-receive-important-messages-about-your-coverage-and-benefit-by-email-or-phone"
                              data-name="Would you prefer to receive important messages about your coverage and benefit by email or phone?"
                              required={false}
                              multiple={false}
                              id="preferredContactMethod"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Email",
                                  v: "Email",
                                },
                                {
                                  t: "Phone",
                                  v: "Phone",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                            id="emailInputWrapper"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "new-applicant-tool-tip-wrapper"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "new-applicant-tool-tip-content-wrapper",
                                  "_02"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block tag="div">
                                  {
                                    "By providing your email address, you authorize "
                                  }
                                  <_Builtin.Span
                                    className={_utils.cx(
                                      _styles,
                                      "carrier-text"
                                    )}
                                  >
                                    {"[carrier]"}
                                  </_Builtin.Span>
                                  {
                                    " to send you health information and plan materials electronically to this address."
                                  }
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-12-outfit",
                                  "margin-bottom-custom-1"
                                )}
                                tag="div"
                              >
                                {"Email "}
                                <_Builtin.Span
                                  className={_utils.cx(_styles, "tool-tip")}
                                  data-w-id="84af9347-8b4e-c37f-ab12-b38c29443734"
                                >
                                  {""}
                                </_Builtin.Span>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.FormTextInput
                              className={_utils.cx(
                                _styles,
                                "new-flow-input",
                                "normal-caps"
                              )}
                              name="Email-Input"
                              maxLength={256}
                              data-name="Email Input"
                              placeholder="Enter your email"
                              disabled={false}
                              type="email"
                              required={false}
                              autoFocus={false}
                              id="emailInput"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper",
                              "hide"
                            )}
                            tag="div"
                            id="phoneInputWrapper"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "new-applicant-tool-tip-wrapper"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "new-applicant-tool-tip-content-wrapper",
                                  "_03"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block tag="div">
                                  <_Builtin.Span
                                    className={_utils.cx(
                                      _styles,
                                      "carrier-text"
                                    )}
                                  >
                                    {"[Carrier]"}
                                  </_Builtin.Span>
                                  {
                                    " and The Pocket Protector may call you to follow-up on your application."
                                  }
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-12-outfit",
                                  "margin-bottom-custom-1"
                                )}
                                tag="div"
                              >
                                {"Phone "}
                                <_Builtin.Span
                                  className={_utils.cx(_styles, "tool-tip")}
                                  data-w-id="7fe58e38-ee84-07bc-8089-f00b982edc4e"
                                >
                                  {""}
                                </_Builtin.Span>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "new-flow-input")}
                              name="Phone"
                              maxLength={256}
                              data-name="Phone"
                              placeholder="Enter your phone"
                              disabled={false}
                              type="tel"
                              required={false}
                              autoFocus={false}
                              id="phone"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "new-flow-add-info-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "heading-16-outfit",
                              "margin-bottom-11"
                            )}
                            tag="h2"
                          >
                            {"Payment"}
                          </_Builtin.Heading>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "margin-bottom-custom-1"
                              )}
                              htmlFor="selectedPayment"
                            >
                              {"You’ve selected a $"}
                              <_Builtin.Span id="premiumPlanText">
                                {"145"}
                              </_Builtin.Span>
                              {". [Every month we will [deduct/charge] $"}
                              <_Builtin.Span id="deductChargeText">
                                {"145"}
                              </_Builtin.Span>
                              {" from your"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(_styles, "new-flow-select")}
                              name="Selected-Payment"
                              data-name="Selected Payment"
                              required={false}
                              multiple={false}
                              id="selectedPayment"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "Coupon Book / Monthly Bill",
                                  v: "Coupon Book / Monthly Bill",
                                },
                                {
                                  t: "Monthly Bill Social Security Check Withholding",
                                  v: "Monthly Bill Social Security Check Withholding",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                            id="couponBook"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "custom-text-1"
                              )}
                              tag="div"
                            >
                              {
                                "Please note that if you have Extra Help and are enrolling in a plan with Drug Coverage, your premium or copay may change if your Extra Help level changes."
                              }
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "new-applicant-item-wrapper"
                            )}
                            tag="div"
                            id="bankAcct"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "text-size-12-outfit",
                                "custom-text-1"
                              )}
                              tag="div"
                            >
                              {
                                "Social Security must approve this deduction. You will receive a monthly bill until approval is received."
                              }
                              <br />
                              <br />
                              {
                                "The Social Security deduction may take two or more months to begin after Social Security approves the deduction. In most cases, if Social Security accepts your request for automatic deduction, the first deduction from your Social Security check will include all premiums due from your enrollment effective date up to the point withholding begins. If Social Security does not approve your request for automatic deduction, your plan will send you a paper bill for your monthly premiums."
                              }
                              <br />
                              {""}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-flow-add-info-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-16-outfit",
                            "margin-bottom-11"
                          )}
                          tag="h2"
                        >
                          {"Last Step!"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "new-applicant-item-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "heading-14-outfit",
                              "margin-bottom-11"
                            )}
                            tag="h3"
                          >
                            {"Summary"}
                          </_Builtin.Heading>
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"First Name "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="firstNameText"
                            >
                              {"[UserInfo]"}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Last Name "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="lastNameText"
                            >
                              {"[UserInfo]"}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Plan Name "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="planNameText"
                            >
                              {"[UserInfo]"}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Monthly premium "}
                            <_Builtin.Strong>{"$"}</_Builtin.Strong>
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="monthlyPremiumText"
                            >
                              {"145"}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-1"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Proposed effective date "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="proposedDateText"
                            >
                              {"--/--/----"}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(
                          _styles,
                          "new-flow-hide-show-wrapper"
                        )}
                        data-w-id="f0134351-a1ff-5991-1b73-d510c4c45a6e"
                        button={false}
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "new-flow-cta-text")}
                          tag="div"
                        >
                          {"Hide full summary"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "new-flow-cta-icon")}
                          value="%3Csvg%20width%3D%2221%22%20height%3D%2221%22%20viewBox%3D%220%200%2021%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.23259%209.31155H13.6882L9.55717%205.18056C9.22703%204.85042%209.22703%204.30866%209.55717%203.97851C9.63548%203.90004%209.72851%203.83778%209.83091%203.7953C9.93332%203.75282%2010.0431%203.73096%2010.154%203.73096C10.2648%203.73096%2010.3746%203.75282%2010.477%203.7953C10.5794%203.83778%2010.6724%203.90004%2010.7508%203.97851L16.3293%209.55704C16.4078%209.63536%2016.47%209.72838%2016.5125%209.83079C16.555%209.93319%2016.5768%2010.043%2016.5768%2010.1538C16.5768%2010.2647%2016.555%2010.3745%2016.5125%2010.4769C16.47%2010.5793%2016.4078%2010.6723%2016.3293%2010.7506L10.7508%2016.3292C10.6724%2016.4075%2010.5793%2016.4697%2010.4769%2016.5121C10.3745%2016.5545%2010.2648%2016.5764%2010.154%2016.5764C10.0431%2016.5764%209.93338%2016.5545%209.83098%2016.5121C9.72858%2016.4697%209.63554%2016.4075%209.55717%2016.3292C9.4788%2016.2508%209.41663%2016.1577%209.37422%2016.0553C9.3318%2015.9529%209.30997%2015.8432%209.30997%2015.7324C9.30997%2015.6215%209.3318%2015.5118%209.37422%2015.4094C9.41663%2015.307%209.4788%2015.2139%209.55717%2015.1356L13.6882%2011.0046H4.23259C3.76701%2011.0046%203.38608%2010.6237%203.38608%2010.1581C3.38608%209.69249%203.76701%209.31155%204.23259%209.31155Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(
                          _styles,
                          "new-flow-hide-show-wrapper"
                        )}
                        data-w-id="52c6bbcc-8705-fc0a-4a55-a25cb4168768"
                        button={false}
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "new-flow-cta-text")}
                          tag="div"
                        >
                          {"Show full summary"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "new-flow-cta-icon")}
                          value="%3Csvg%20width%3D%2221%22%20height%3D%2221%22%20viewBox%3D%220%200%2021%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.23259%209.31155H13.6882L9.55717%205.18056C9.22703%204.85042%209.22703%204.30866%209.55717%203.97851C9.63548%203.90004%209.72851%203.83778%209.83091%203.7953C9.93332%203.75282%2010.0431%203.73096%2010.154%203.73096C10.2648%203.73096%2010.3746%203.75282%2010.477%203.7953C10.5794%203.83778%2010.6724%203.90004%2010.7508%203.97851L16.3293%209.55704C16.4078%209.63536%2016.47%209.72838%2016.5125%209.83079C16.555%209.93319%2016.5768%2010.043%2016.5768%2010.1538C16.5768%2010.2647%2016.555%2010.3745%2016.5125%2010.4769C16.47%2010.5793%2016.4078%2010.6723%2016.3293%2010.7506L10.7508%2016.3292C10.6724%2016.4075%2010.5793%2016.4697%2010.4769%2016.5121C10.3745%2016.5545%2010.2648%2016.5764%2010.154%2016.5764C10.0431%2016.5764%209.93338%2016.5545%209.83098%2016.5121C9.72858%2016.4697%209.63554%2016.4075%209.55717%2016.3292C9.4788%2016.2508%209.41663%2016.1577%209.37422%2016.0553C9.3318%2015.9529%209.30997%2015.8432%209.30997%2015.7324C9.30997%2015.6215%209.3318%2015.5118%209.37422%2015.4094C9.41663%2015.307%209.4788%2015.2139%209.55717%2015.1356L13.6882%2011.0046H4.23259C3.76701%2011.0046%203.38608%2010.6237%203.38608%2010.1581C3.38608%209.69249%203.76701%209.31155%204.23259%209.31155Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Link>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-item-wrapper",
                          "margin-top-32"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-14-outfit",
                            "margin-bottom-11"
                          )}
                          tag="h3"
                        >
                          {"Applicant Info"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "applicant-info-text-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Date of birth "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="dobText"
                            >
                              {"[UserInfo]"}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "applicant-info-text-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Sex "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="sexText"
                            >
                              {"[UserInfo]"}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "applicant-info-text-wrapper"
                          )}
                          tag="div"
                          id="phoneTextWrapper"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Phone "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="phoneText"
                            >
                              {""}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "applicant-info-text-wrapper"
                          )}
                          tag="div"
                          id="emailTextWrapper"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Email address "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="emailText"
                            >
                              {""}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "applicant-info-text-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Preferred language "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="preferredLanguageText"
                            >
                              {"[UserInfo]"}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "applicant-info-text-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Alternate format "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="alternateFormatText"
                            >
                              {"[UserInfo]"}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-item-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-14-outfit",
                            "margin-bottom-11"
                          )}
                          tag="h3"
                        >
                          {"Medicare Info"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "applicant-info-text-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Medicare number "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="medicareNumText"
                            >
                              {"[UserInfo]"}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "applicant-info-text-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Election period "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="electionPeriodText"
                            >
                              {"[UserInfo]"}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-item-wrapper",
                          "margin-bottom-32"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-14-outfit",
                            "margin-bottom-11"
                          )}
                          tag="h3"
                        >
                          {"Plan Details"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "applicant-info-text-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit",
                              "margin-bottom-custom-2"
                            )}
                            htmlFor="selectedPayment"
                          >
                            {"Plan Method "}
                            <_Builtin.Strong
                              className={_utils.cx(
                                _styles,
                                "text-size-14-outfit",
                                "text-weight-semibold"
                              )}
                              id="planMethodText"
                            >
                              {"[UserInfo]"}
                            </_Builtin.Strong>
                          </_Builtin.FormBlockLabel>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-item-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-14-outfit",
                            "margin-bottom-11"
                          )}
                          tag="h3"
                        >
                          {"Agreements"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "new-applicant-agreements-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit"
                            )}
                          >
                            <_Builtin.Strong>
                              {"Please read this important information"}
                            </_Builtin.Strong>
                            <br />
                            {"‍"}
                            <br />
                            {
                              "By completing this enrollment form, I agree to the following:"
                            }
                            <br />
                            {"‍"}
                            <br />
                            {
                              "If I am enrolling in a Medicare Advantage health plan that has a contract with the federal government, I must keep both Hospital Part A and Medical Part B to stay in "
                            }
                            <_Builtin.Span
                              className={_utils.cx(_styles, "carrier-text")}
                            >
                              {"Humana"}
                            </_Builtin.Span>{" "}
                            <_Builtin.Span
                              className={_utils.cx(_styles, "plan-text")}
                            >
                              {"Gold Plus Giveback (HMO) H1468-021"}
                            </_Builtin.Span>
                            {
                              ". I must continue to pay my Medicare Part B premium. It is my responsibility to inform Humana of any prescription drug coverage that I have or may get in the future. I understand that if I don’t have Medicare prescription drug coverage, or creditable prescription drug coverage (as good as Medicare’s), I may have to pay a late enrollment penalty if I enroll in Medicare prescription drug coverage in the future. With few exceptions, I can only be in one Medicare Advantage health plan or Medicare prescription drug plan at a time. I understand that my enrollment in my selected plan will automatically end my enrollment in another Medicare Advantage health plan or prescription drug plan. Enrollment in my selected plan is generally for the entire year."
                            }
                            <br />
                            {"‍"}
                            <br />
                            {
                              "I understand that when my Humana coverage begins, I must get all of my medical and prescription drug benefits from Humana. Benefits and services provided by Humana and contained in my “Evidence of Coverage” document (also known as a member contract or subscriber agreement) will be covered. Neither Medicare nor Humana will pay for benefits or services that are not covered. I will abide by the rules of my Evidence of Coverage. Once I am a member of Humana, I have the right to appeal plan decisions about payment or services if I disagree."
                            }
                            <br />
                            {"‍"}
                            <br />
                            {
                              "This Humana plan serves a specific service area. If I move out of the area that my selected plan serves, I need to notify Humana so I can disenroll and find a new plan in my new area. I understand that Medicare beneficiaries are generally not covered under Medicare while out of the country, except for limited coverage near the U.S. border."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.FormCheckboxWrapper
                        className={_utils.cx(
                          _styles,
                          "new-application-checkbox-wrapper"
                        )}
                      >
                        <_Builtin.FormCheckboxInput
                          className={_utils.cx(
                            _styles,
                            "new-applicant-checkbox"
                          )}
                          type="checkbox"
                          name="Acknowledged-and-understand-the-contents-of-the-application"
                          data-name="Acknowledged and understand the contents of the application"
                          required={true}
                          checked={false}
                          id="Acknowledged-and-understand-the-contents-of-the-application"
                          form={{
                            type: "checkbox-input",
                            name: "Acknowledged and understand the contents of the application",
                          }}
                          inputType="custom"
                          customClassName="w-checkbox-input--inputType-custom"
                        />
                        <_Builtin.FormInlineLabel
                          className={_utils.cx(_styles, "text-size-12-outfit")}
                        >
                          {
                            "I acknowledge that I have read the above information and understand the contents of the application."
                          }
                        </_Builtin.FormInlineLabel>
                      </_Builtin.FormCheckboxWrapper>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-item-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.FormBlockLabel
                          className={_utils.cx(
                            _styles,
                            "text-size-12-outfit",
                            "margin-bottom-custom-1"
                          )}
                          htmlFor="Signature-Name"
                        >
                          {"Sign"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className={_utils.cx(_styles, "new-flow-input")}
                          name="Signature-Name"
                          maxLength={256}
                          data-name="Signature Name"
                          placeholder="Enter your name"
                          disabled={false}
                          type="text"
                          required={true}
                          autoFocus={false}
                          id="Signature-Name"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-item-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.FormBlockLabel
                          className={_utils.cx(
                            _styles,
                            "text-size-12-outfit",
                            "margin-bottom-custom-1"
                          )}
                          htmlFor="signatureDate"
                        >
                          {"Date"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className={_utils.cx(_styles, "new-flow-input")}
                          name="Signature-Date"
                          maxLength={256}
                          data-name="Signature Date"
                          placeholder="MM-DD-YYYY"
                          disabled={false}
                          type="text"
                          required={true}
                          autoFocus={false}
                          id="signatureDate"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-representative-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(_styles, "text-size-12-outfit")}
                        >
                          {"If is it [For "}
                          <_Builtin.Strong>{"individuals"}</_Builtin.Strong>
                          {
                            " helping enrollee with completing this form only Complete this section if you’re an individual (i.e. agents, brokers, SHIP counselors, family members, or other third parties) helping an enrollee fill out this form."
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-item-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.FormBlockLabel
                          className={_utils.cx(
                            _styles,
                            "text-size-12-outfit",
                            "margin-bottom-custom-1"
                          )}
                          htmlFor="Signature-Name"
                        >
                          {"Name"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className={_utils.cx(_styles, "new-flow-input")}
                          name="Representative-Name"
                          maxLength={256}
                          data-name="Representative Name"
                          placeholder="Enter your name"
                          disabled={false}
                          type="text"
                          required={false}
                          autoFocus={false}
                          id="Representative-Name"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-item-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.FormBlockLabel
                          className={_utils.cx(
                            _styles,
                            "text-size-12-outfit",
                            "margin-bottom-custom-1"
                          )}
                          htmlFor="Representative-Address"
                        >
                          {"Address"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className={_utils.cx(_styles, "new-flow-input")}
                          name="Representative-Address"
                          maxLength={256}
                          data-name="Representative Address"
                          placeholder="Address here"
                          disabled={false}
                          type="text"
                          required={false}
                          autoFocus={false}
                          id="Representative-Address"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-item-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.FormBlockLabel
                          className={_utils.cx(
                            _styles,
                            "text-size-12-outfit",
                            "margin-bottom-custom-1"
                          )}
                          htmlFor="Representative-Phone"
                        >
                          {"Phone number"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className={_utils.cx(_styles, "new-flow-input")}
                          name="Representative-Phone"
                          maxLength={256}
                          data-name="Representative Phone"
                          placeholder="Enter phone number"
                          disabled={false}
                          type="tel"
                          required={false}
                          autoFocus={false}
                          id="Representative-Phone"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-item-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.FormBlockLabel
                          className={_utils.cx(
                            _styles,
                            "text-size-12-outfit",
                            "margin-bottom-custom-1"
                          )}
                          htmlFor="Relationship-to-enrollee"
                        >
                          {"Relationship to enrollee"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className={_utils.cx(_styles, "new-flow-input")}
                          name="Relationship-to-enrollee"
                          maxLength={256}
                          data-name="Relationship to enrollee"
                          placeholder="Text here"
                          disabled={false}
                          type="text"
                          required={false}
                          autoFocus={false}
                          id="Relationship-to-enrollee"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-item-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.FormBlockLabel
                          className={_utils.cx(
                            _styles,
                            "text-size-12-outfit",
                            "margin-bottom-custom-1"
                          )}
                          htmlFor="Authorized-Representative-Signature"
                        >
                          {"Signature"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className={_utils.cx(_styles, "new-flow-input")}
                          name="Authorized-Representative-Signature"
                          maxLength={256}
                          data-name="Authorized Representative Signature"
                          placeholder="Enter your name"
                          disabled={false}
                          type="text"
                          required={false}
                          autoFocus={false}
                          id="Authorized-Representative-Signature"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-item-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.FormBlockLabel
                          className={_utils.cx(
                            _styles,
                            "text-size-12-outfit",
                            "margin-bottom-custom-1"
                          )}
                          htmlFor="National-Producer-Number"
                        >
                          {"National Producer Number (Agents/Brokers only)"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className={_utils.cx(_styles, "new-flow-input")}
                          name="National-Producer-Number"
                          maxLength={256}
                          data-name="National Producer Number"
                          placeholder="Enter National Producer Number"
                          disabled={false}
                          type="text"
                          required={false}
                          autoFocus={false}
                          id="National-Producer-Number"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-submit-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.FormButton
                          className={_utils.cx(_styles, "new-applicant-submit")}
                          type="submit"
                          value="Enroll now"
                          data-wait="Please wait..."
                        />
                      </_Builtin.Block>
                    </_Builtin.FormForm>
                    <_Builtin.FormSuccessMessage
                      className={_utils.cx(
                        _styles,
                        "new-flow-applicant-success"
                      )}
                    >
                      <_Builtin.Heading
                        className={_utils.cx(
                          _styles,
                          "heading-16-outfit",
                          "margin-bottom-11"
                        )}
                        tag="h2"
                      >
                        {"Thank You"}
                      </_Builtin.Heading>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-size-16-outfit")}
                        tag="div"
                      >
                        <_Builtin.Span
                          className={_utils.cx(_styles, "confirmation-number")}
                        >
                          {"[Confirmation Number]"}
                        </_Builtin.Span>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "new-flow-ty-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-14-outfit",
                            "margin-bottom-11"
                          )}
                          tag="h3"
                        >
                          {"Your Agreements"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "new-applicant-agreements-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph
                            className={_utils.cx(
                              _styles,
                              "text-size-12-outfit"
                            )}
                          >
                            <_Builtin.Strong>
                              {"Please read this important information"}
                            </_Builtin.Strong>
                            <br />
                            {"‍"}
                            <br />
                            {
                              "By completing this enrollment form, I agree to the following:"
                            }
                            <br />
                            {"‍"}
                            <br />
                            {
                              "If I am enrolling in a Medicare Advantage health plan that has a contract with the federal government, I must keep both Hospital Part A and Medical Part B to stay in "
                            }
                            <_Builtin.Span
                              className={_utils.cx(_styles, "carrier-text")}
                            >
                              {"Humana"}
                            </_Builtin.Span>{" "}
                            <_Builtin.Span
                              className={_utils.cx(_styles, "plan-text")}
                            >
                              {"Gold Plus Giveback (HMO) H1468-021"}
                            </_Builtin.Span>
                            {
                              ". I must continue to pay my Medicare Part B premium. It is my responsibility to inform Humana of any prescription drug coverage that I have or may get in the future. I understand that if I don’t have Medicare prescription drug coverage, or creditable prescription drug coverage (as good as Medicare’s), I may have to pay a late enrollment penalty if I enroll in Medicare prescription drug coverage in the future. With few exceptions, I can only be in one Medicare Advantage health plan or Medicare prescription drug plan at a time. I understand that my enrollment in my selected plan will automatically end my enrollment in another Medicare Advantage health plan or prescription drug plan. Enrollment in my selected plan is generally for the entire year."
                            }
                            <br />
                            {"‍"}
                            <br />
                            {
                              "I understand that when my Humana coverage begins, I must get all of my medical and prescription drug benefits from Humana. Benefits and services provided by Humana and contained in my “Evidence of Coverage” document (also known as a member contract or subscriber agreement) will be covered. Neither Medicare nor Humana will pay for benefits or services that are not covered. I will abide by the rules of my Evidence of Coverage. Once I am a member of Humana, I have the right to appeal plan decisions about payment or services if I disagree."
                            }
                            <br />
                            {"‍"}
                            <br />
                            {
                              "This Humana plan serves a specific service area. If I move out of the area that my selected plan serves, I need to notify Humana so I can disenroll and find a new plan in my new area. I understand that Medicare beneficiaries are generally not covered under Medicare while out of the country, except for limited coverage near the U.S. border."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "new-applicant-disclaimer-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-size-16-outfit")}
                          tag="div"
                        >
                          {
                            "By submitting this online enrollment is being processed."
                          }
                          <br />
                          {"[IF DSNP]"}
                          <br />
                          {"You will receive further communication from "}
                          <_Builtin.Span
                            className={_utils.cx(_styles, "carrier-text")}
                          >
                            {"[Carrier]"}
                          </_Builtin.Span>
                          {
                            " regarding verificationverification of your status [carrier languagelanguage and process]"
                          }
                          <br />
                          {""}
                          <br />
                          {
                            "If you’d like to schedule a follow-up onboarding with a licensed insurance agent please click the link below to schedule:"
                          }
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(
                          _styles,
                          "new-flow-hide-show-wrapper"
                        )}
                        data-w-id="a6ab9181-f4ec-fcf3-ccfa-0dc7bf7f6bab"
                        button={false}
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "new-flow-cta-text")}
                          tag="div"
                        >
                          {"Calendar Link"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "new-flow-cta-icon")}
                          value="%3Csvg%20width%3D%2221%22%20height%3D%2221%22%20viewBox%3D%220%200%2021%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.23259%209.31155H13.6882L9.55717%205.18056C9.22703%204.85042%209.22703%204.30866%209.55717%203.97851C9.63548%203.90004%209.72851%203.83778%209.83091%203.7953C9.93332%203.75282%2010.0431%203.73096%2010.154%203.73096C10.2648%203.73096%2010.3746%203.75282%2010.477%203.7953C10.5794%203.83778%2010.6724%203.90004%2010.7508%203.97851L16.3293%209.55704C16.4078%209.63536%2016.47%209.72838%2016.5125%209.83079C16.555%209.93319%2016.5768%2010.043%2016.5768%2010.1538C16.5768%2010.2647%2016.555%2010.3745%2016.5125%2010.4769C16.47%2010.5793%2016.4078%2010.6723%2016.3293%2010.7506L10.7508%2016.3292C10.6724%2016.4075%2010.5793%2016.4697%2010.4769%2016.5121C10.3745%2016.5545%2010.2648%2016.5764%2010.154%2016.5764C10.0431%2016.5764%209.93338%2016.5545%209.83098%2016.5121C9.72858%2016.4697%209.63554%2016.4075%209.55717%2016.3292C9.4788%2016.2508%209.41663%2016.1577%209.37422%2016.0553C9.3318%2015.9529%209.30997%2015.8432%209.30997%2015.7324C9.30997%2015.6215%209.3318%2015.5118%209.37422%2015.4094C9.41663%2015.307%209.4788%2015.2139%209.55717%2015.1356L13.6882%2011.0046H4.23259C3.76701%2011.0046%203.38608%2010.6237%203.38608%2010.1581C3.38608%209.69249%203.76701%209.31155%204.23259%209.31155Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Link>
                    </_Builtin.FormSuccessMessage>
                    <_Builtin.FormErrorMessage>
                      <_Builtin.Block tag="div">
                        {
                          "Oops! Something went wrong while submitting the form."
                        }
                      </_Builtin.Block>
                    </_Builtin.FormErrorMessage>
                  </_Builtin.FormWrapper>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "new-flow-disclaimer-wrapper"
                    )}
                    tag="div"
                  >
                    <_Builtin.Paragraph>
                      {
                        "The Pocket Protector LLC represents Medicare Advantage [HMO, PPO and PFFS] organizations [and stand-alone PDP prescription drug plans] that have a Medicare contract. Enrollment depends on the plan's contract renewal."
                      }
                      <br />
                      {""}
                      <br />
                      {
                        "We do not offer every plan available in your area. Currently we represent 9 organizations which offer products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options."
                      }
                      <br />
                      {""}
                      <br />
                      {
                        "Members may receive a monthly or quarterly allowance in the form of a benefits prepaid card to pay for a wide range of approved [groceries] [and] [utilities]. Unused amounts will expire at the end of the month or quarter."
                      }
                      <br />
                      {""}
                      <br />
                      {
                        "Plans with benefits described may be available from [Anthem Blue Cross and Cross Blue Shield], [Cigna Healthcare], [Devoted Health], [Highmark Health], [Humana], [Kaiser Permanente], [UnitedHealthcare®], [WellCare], [Zing Health]."
                      }
                      <br />
                      {""}
                      <br />
                      {
                        "Every year, Medicare evaluates plans based on a 5-star rating system."
                      }
                      <br />
                      {""}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Section>
      </_Builtin.Block>
    </_Component>
  );
}
