"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GoogleTagScript } from "./GoogleTagScript";
import { CalculateMedicareDatesScript } from "./CalculateMedicareDatesScript";
import * as _utils from "./utils";
import _styles from "./CalendarToolContent.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3285":{"id":"e-3285","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-173","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68228555ea7d6120b004743f|6b5879c2-222b-b595-b42e-9775e25652bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68228555ea7d6120b004743f|6b5879c2-222b-b595-b42e-9775e25652bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747133555073},"e-3287":{"id":"e-3287","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-174","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3288"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68228555ea7d6120b004743f|283bc0ba-8508-df0c-fc2f-1f4eea5cfa66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68228555ea7d6120b004743f|283bc0ba-8508-df0c-fc2f-1f4eea5cfa66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747133652599},"e-3295":{"id":"e-3295","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-173","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3296"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"682a8155292840b5a7b96960|6b5879c2-222b-b595-b42e-9775e25652bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"682a8155292840b5a7b96960|6b5879c2-222b-b595-b42e-9775e25652bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747616085606},"e-3297":{"id":"e-3297","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-174","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"682a8155292840b5a7b96960|283bc0ba-8508-df0c-fc2f-1f4eea5cfa66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"682a8155292840b5a7b96960|283bc0ba-8508-df0c-fc2f-1f4eea5cfa66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747616085606},"e-3617":{"id":"e-3617","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-215","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3618"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680470","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fe72d218-eeaa-8982-d7f4-8b224e680470","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748863614962},"e-3619":{"id":"e-3619","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-220","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3620"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680473","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fe72d218-eeaa-8982-d7f4-8b224e680473","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748863614962},"e-3621":{"id":"e-3621","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-212","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3622"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680476","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fe72d218-eeaa-8982-d7f4-8b224e680476","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748863614962},"e-3623":{"id":"e-3623","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-199","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3624"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e68047a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fe72d218-eeaa-8982-d7f4-8b224e68047a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748863614962},"e-3625":{"id":"e-3625","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-214","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3626"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803a8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803a8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748865352515},"e-3627":{"id":"e-3627","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-213","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3628"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803ab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803ab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748865352515},"e-3629":{"id":"e-3629","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-199","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3630"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803af","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803af","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748865352515},"e-3631":{"id":"e-3631","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-209","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3632"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e68048b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fe72d218-eeaa-8982-d7f4-8b224e68048b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748913933456},"e-3633":{"id":"e-3633","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-209","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3634"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e68048e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fe72d218-eeaa-8982-d7f4-8b224e68048e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748913933456},"e-3635":{"id":"e-3635","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-210","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3636"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6804ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fe72d218-eeaa-8982-d7f4-8b224e6804ae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748913933456},"e-3825":{"id":"e-3825","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-226","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3826"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d374729e7d930b906e9633|b4e36091-d52b-5509-fcf1-c24562845503","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d374729e7d930b906e9633|b4e36091-d52b-5509-fcf1-c24562845503","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758688371671},"e-3826":{"id":"e-3826","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-227","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3825"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d374729e7d930b906e9633|b4e36091-d52b-5509-fcf1-c24562845503","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d374729e7d930b906e9633|b4e36091-d52b-5509-fcf1-c24562845503","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758688371671},"e-3827":{"id":"e-3827","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-228","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3828"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d374729e7d930b906e9633|ded137fc-0383-08a7-e5a5-075bb4d088cc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d374729e7d930b906e9633|ded137fc-0383-08a7-e5a5-075bb4d088cc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758688371671},"e-3828":{"id":"e-3828","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-229","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3827"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d374729e7d930b906e9633|ded137fc-0383-08a7-e5a5-075bb4d088cc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d374729e7d930b906e9633|ded137fc-0383-08a7-e5a5-075bb4d088cc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1758688371671},"e-4019":{"id":"e-4019","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-226","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4020"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764803990173},"e-4020":{"id":"e-4020","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-227","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4019"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764803990173},"e-4021":{"id":"e-4021","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-228","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4022"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764803990173},"e-4022":{"id":"e-4022","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-229","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4021"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6930c595be5d68d0f4b14b37|1f315643-7be1-f755-113c-48c91ac61d8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1764803990173}},"actionLists":{"a-173":{"id":"a-173","title":"Turning 65 Next Year","actionItemGroups":[{"actionItems":[{"id":"a-173-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".screener-wrapper.enrollment-window","selectorGuids":["e2daf348-213b-d73a-a938-f2fe4577d24d","de324108-6af4-45a7-214d-e481935a214b"]},"value":"none"}},{"id":"a-173-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".screener-input-wrapper","selectorGuids":["795cadd8-137d-32d6-c9b5-08501ed30e8e"]},"value":"none"}}]},{"actionItems":[{"id":"a-173-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".screener-wrapper.enrollment-window","selectorGuids":["e2daf348-213b-d73a-a938-f2fe4577d24d","de324108-6af4-45a7-214d-e481935a214b"]},"value":"flex"}},{"id":"a-173-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".screener-input-wrapper","selectorGuids":["795cadd8-137d-32d6-c9b5-08501ed30e8e"]},"value":"flex"}},{"id":"a-173-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".screener-wrapper._01","selectorGuids":["e2daf348-213b-d73a-a938-f2fe4577d24d","35125726-1204-a526-4bf4-92f2b4063290"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1747133574747},"a-174":{"id":"a-174","title":"Over 65 But Not Enrolled","actionItemGroups":[{"actionItems":[{"id":"a-174-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".screener-wrapper.make-sure","selectorGuids":["e2daf348-213b-d73a-a938-f2fe4577d24d","330ed2b4-9853-5355-29fd-7f021b33e8e3"]},"value":"none"}}]},{"actionItems":[{"id":"a-174-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".screener-wrapper.make-sure","selectorGuids":["e2daf348-213b-d73a-a938-f2fe4577d24d","330ed2b4-9853-5355-29fd-7f021b33e8e3"]},"value":"flex"}},{"id":"a-174-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".screener-input-wrapper","selectorGuids":["795cadd8-137d-32d6-c9b5-08501ed30e8e"]},"value":"flex"}},{"id":"a-174-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".screener-wrapper._01","selectorGuids":["e2daf348-213b-d73a-a938-f2fe4577d24d","35125726-1204-a526-4bf4-92f2b4063290"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1747133673607},"a-215":{"id":"a-215","title":"Article New to Medicare 4","actionItemGroups":[{"actionItems":[{"id":"a-215-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e68047d"},"value":"none"}},{"id":"a-215-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680465"},"value":"flex"}},{"id":"a-215-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e68047b"},"value":"none"}},{"id":"a-215-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"683e587b005c6ee497f12712|3c3e8ab9-79c9-159d-74e3-c1f4ee73650b"},"value":"none"}},{"id":"a-215-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"683e587b005c6ee497f12712|602b3932-0f41-b9f8-4c56-84423e097ab8"},"value":"flex"}},{"id":"a-215-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"683e587b005c6ee497f12712|ddf7bfca-7266-2906-6816-d564cfda9f44"},"value":"flex"}}]},{"actionItems":[{"id":"a-215-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"683e587b005c6ee497f12712|ddf7bfca-7266-2906-6816-d564cfda9f44"},"value":"none"}},{"id":"a-215-n-14","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680465"},"value":"none"}},{"id":"a-215-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e68047d"},"value":"block"}},{"id":"a-215-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e68047b"},"value":"block"}},{"id":"a-215-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"683e587b005c6ee497f12712|602b3932-0f41-b9f8-4c56-84423e097ab8"},"value":"none"}},{"id":"a-215-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"683e587b005c6ee497f12712|3c3e8ab9-79c9-159d-74e3-c1f4ee73650b"},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748487845354},"a-220":{"id":"a-220","title":"Article New to Medicare 5","actionItemGroups":[{"actionItems":[{"id":"a-220-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6804d1"},"value":"none"}}]},{"actionItems":[{"id":"a-220-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"fe72d218-eeaa-8982-d7f4-8b224e680465"},"value":"none"}},{"id":"a-220-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6804d1"},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748487845354},"a-212":{"id":"a-212","title":"Article New Question 12","actionItemGroups":[{"actionItems":[{"id":"a-212-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680502"},"value":"none"}}]},{"actionItems":[{"id":"a-212-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680502"},"value":"block"}},{"id":"a-212-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6804d1"},"value":"none"}},{"id":"a-212-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803fa"},"value":"none"}},{"id":"a-212-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680456"},"value":"block"}},{"id":"a-212-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"fe72d218-eeaa-8982-d7f4-8b224e68046e"},"value":"none"}},{"id":"a-212-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680465"},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748510480824},"a-199":{"id":"a-199","title":"Hide Dim BG","actionItemGroups":[{"actionItems":[{"id":"a-199-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"6837be725a3f074ad688cc41|25bb5627-c918-8e92-e414-8c94e4f6f265"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1748573188879},"a-214":{"id":"a-214","title":"Article New to Medicare Calendar","actionItemGroups":[{"actionItems":[{"id":"a-214-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803b0"},"value":"none"}},{"id":"a-214-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680333"},"value":"block"}},{"id":"a-214-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680393"},"value":"none"}},{"id":"a-214-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"fe72d218-eeaa-8982-d7f4-8b224e6803a6"},"value":"flex"}}]},{"actionItems":[{"id":"a-214-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803b0"},"value":"flex"}},{"id":"a-214-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680333"},"value":"none"}},{"id":"a-214-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680393"},"value":"block"}},{"id":"a-214-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"fe72d218-eeaa-8982-d7f4-8b224e6803a6"},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748487845354},"a-213":{"id":"a-213","title":"Article Already Have Medicare 2","actionItemGroups":[{"actionItems":[{"id":"a-213-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"fe72d218-eeaa-8982-d7f4-8b224e68030e"},"value":"flex"}},{"id":"a-213-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".article-questions-wrapper.full-width","selectorGuids":["7fa1669e-ca04-ef3b-f4c8-9dded76a6b07","e8c5469d-5a2e-013e-4b79-9d60595048aa"]},"value":"none"}},{"id":"a-213-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680456"},"value":"none"}},{"id":"a-213-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803fa"},"value":"block"}},{"id":"a-213-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803d5"},"value":"none"}}]},{"actionItems":[{"id":"a-213-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"fe72d218-eeaa-8982-d7f4-8b224e68030e"},"value":"none"}},{"id":"a-213-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803d5"},"value":"flex"}},{"id":"a-213-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6803fa"},"value":"none"}},{"id":"a-213-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680456"},"value":"block"}},{"id":"a-213-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".article-questions-wrapper.full-width","selectorGuids":["7fa1669e-ca04-ef3b-f4c8-9dded76a6b07","e8c5469d-5a2e-013e-4b79-9d60595048aa"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748844207809},"a-209":{"id":"a-209","title":"Article New Question 9","actionItemGroups":[{"actionItems":[{"id":"a-209-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680491"},"value":"none"}}]},{"actionItems":[{"id":"a-209-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e680491"},"value":"block"}},{"id":"a-209-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"fe72d218-eeaa-8982-d7f4-8b224e68047d"},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748488230482},"a-210":{"id":"a-210","title":"Article New Question 10","actionItemGroups":[{"actionItems":[{"id":"a-210-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6804b2"},"value":"none"}}]},{"actionItems":[{"id":"a-210-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"fe72d218-eeaa-8982-d7f4-8b224e6804b2"},"value":"block"}},{"id":"a-210-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","id":"fe72d218-eeaa-8982-d7f4-8b224e680493"},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748488448765},"a-226":{"id":"a-226","title":"Article Hero Hover In","actionItemGroups":[{"actionItems":[{"id":"a-226-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-226-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1.05,"yValue":1.05,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1749466393726},"a-227":{"id":"a-227","title":"Article Hero Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-227-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1749466393726},"a-228":{"id":"a-228","title":"Article Hero Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-228-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-228-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1.05,"yValue":1.05,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1749466393726},"a-229":{"id":"a-229","title":"Article Hero Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-229-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-full-width.cover","selectorGuids":["8875c7e8-cd97-8796-6e71-7105adbb77e5","24034db7-497d-c051-2daa-7ce318f2c36a"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1749466393726}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CalendarToolContent({
  as: _Component = _Builtin.Block,
  phoneNumberVisibility = true,
  phoneErrorText = "Please enter a valid 10 digit phone number",
  zipCodeVisibility = true,
  content = "",
  iAlreadyHaveMedicare = true,
  iAlreadyHaveMedicareV2 = false,

  iAlreadyHaveV2Link = {
    href: "#",
  },

  scrollIntoVisibility = true,
  scrollIntoVisibility2 = false,
  isValid2WithZipCodeVisibility = true,
  isValid2EmailOnlyVisibility = false,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "main-wrapper")} tag="div">
      <GoogleTagScript />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "page-styling")}
        value="%3Cstyle%3E%0Ainput%3Afocus%20%7B%0A%20%20border%3A%201px%20solid%20%23ccc%20!important%3B%0A%20%20outline%3A%20none%20!important%3B%20%2F*%20Also%20removes%20the%20browser's%20default%20focus%20outline%20*%2F%0A%7D%0A%0A%3C%2Fstyle%3E"
      />
      <_Builtin.Section
        className={_utils.cx(_styles, "section-form")}
        data-w-id="fe72d218-eeaa-8982-d7f4-8b224e68030e"
        grid={{
          type: "section",
        }}
        tag="div"
        id="formf"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-1196")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "padding-section-custom8",
              "padding-bottom-1"
            )}
            tag="div"
          >
            <_Builtin.Section
              className={_utils.cx(_styles, "section-content")}
              grid={{
                type: "section",
              }}
              tag="section"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "padding-global", "custom1")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "container-1200")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "padding-section-custom13")}
                    tag="div"
                  >
                    <_Builtin.RichText
                      className={_utils.cx(
                        _styles,
                        "article-headers-2",
                        "margin-bottom-33"
                      )}
                      tag="div"
                      slot=""
                    >
                      <_Builtin.Heading tag="h1">
                        {"Why I Would Never Get a Medicare Advantage Plan"}
                      </_Builtin.Heading>
                      <_Builtin.Heading tag="h2">
                        {"And Recommend Medigap Instead"}
                      </_Builtin.Heading>
                    </_Builtin.RichText>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "author-wrapper",
                        "align-center"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "article-logo-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "img-full-width")}
                          loading="lazy"
                          width="auto"
                          height="auto"
                          alt=""
                          src="https://cdn.prod.website-files.com/660d27533c9c61d241f50da3/67518da8207f31df29f4fad6_image%206.png"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-size-18",
                            "custom-line-height-1"
                          )}
                          tag="div"
                        >
                          {"Jarret DiToro"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-size-18",
                            "custom-line-height-1"
                          )}
                          tag="div"
                        >
                          <_Builtin.Span
                            className={_utils.cx(_styles, "dynamic-date")}
                          >
                            {"MMMM dd, YYYY"}
                          </_Builtin.Span>
                          {" - 4 minute read"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-cover-img-wrapper",
                        "border-radius-0"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(
                          _styles,
                          "img-full-width",
                          "cover"
                        )}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://cdn.prod.website-files.com/660d27533c9c61d241f50da3/680ebce215e15addeb5922b0_imageedit_1_8273449850.png"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-inline-main-wrapper"
                      )}
                      data-w-id="fe72d218-eeaa-8982-d7f4-8b224e680333"
                      tag="div"
                    >
                      <_Builtin.RichText
                        className={_utils.cx(_styles, "article-richtext")}
                        tag="div"
                        slot=""
                      >
                        <_Builtin.Paragraph>
                          {
                            "There are so many companies selling Medicare Advantage that it's very easy to fall for the pitch. Add in the fact that Medicare Advantage plans cost $0 per month and include prescription drug plans at no extra cost, and it seems like a good move right?"
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "So why do most honest Medicare experts tell their clients to avoid them at all cost? Even if it means they make fewer sales and less money?"
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            'It\'s simple. Medicare Advantage plans are worse health insurance. They restrict your access to doctors, charge you more money over time through copays and deductibles, and even introduce the risk of you not being covered if you get admitted to an "out of network" hospital.'
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            'But perhaps worst of all, if you get sold a Medicare Advantage plan during your 6-month "new to Medicare" enrollment period, '
                          }
                          <_Builtin.Strong>
                            {
                              "you miss the window of time when the Medigap companies must by law offer you favorable pricing, and can't by law reject you from a Medigap plan."
                            }
                          </_Builtin.Strong>
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "So you could get stuck for life in an inferior coverage plan. This could be so harmful down the line when you need top notch health care that it borders on agent malpractice in our opinion."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h3">
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "Medicare Advantage plans save money by negotiating discounts with doctors and hospitals. But that means they don't include all doctors or hospitals in their networks. Some plans try to wow you with shiny benefits like $0 premiums, but if you can't see the doctor you want, what's the value of health insurance?"
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "Medigap plans include every doctor and hospital that accepts Medicare, which is around 99% of all doctors and hospitals in the USA."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h3">
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "If you have a critical diagnosis, you need to see specialists right away. "
                          }
                          <_Builtin.Strong>
                            {"Days could matter."}
                          </_Builtin.Strong>
                          {
                            " But most Medicare Advantage plans require a referral from a primary care physician before you can get to the specialist. Making matters worse, the limited number of specialists in network could have scheduling delays."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {"With Medigap, "}
                          <_Builtin.Strong>
                            {"you can go directly to a specialist"}
                          </_Builtin.Strong>
                          {
                            ", and you have access to basically all of them, so it will be easier to find one with an immediate opening."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h3">
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "At first glance, $0 monthly payments look good. But nothing is free in life, and Medicare is no different. Instead of charging you monthly premiums, Medicare Advantage plans charge you down the line. Every time you go to a doctor, there is a copay. And before the plan pays a penny, you generally have to pay the first few thousand in cost per year."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h3">
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "If down the line you decide you want to switch to Medicare Advantage after really learning the Medicare system, you always can. But if you take Medicare Advantage first, you can't come back to Medigap without risking being denied or paying far far more than you could have."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "By law, insurers must offer everyone who is new to Medicare the same pricing and access to Medigap plans. The insurance companies would rather screen by health and then either deny or charge more based on that screen. They aren't allowed to, but ONLY during the first 6-month enrollment window when you're new to Medicare. Once in, you're safe, and they can't kick you out, no matter what happens to your health or how costly you become. But if you miss this window, you could get locked out for life."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h3">
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "The best advice we can give you really depends on if you're new to Medicare or if you already have Medicare and a plan."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "If you're new to Medicare, it's really important that you don't miss any deadlines. If you miss your Initial Enrollment Period, you could lose your ability to get an affordable MediGap plan. If you miss your Part B enrollment deadline, you will have to pay monthly penalties for the rest of your life."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "That's why we created our free personalized Medicare calendar/ deadline reminder tool. It personalizes to your birthday and retirement situation, and will help you make sure you don't miss any of these deadlines. Medicare is complicated enough, don't get punished for something silly like missing one of these dates."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h6">
                          <_Builtin.Strong>
                            {
                              "So we can point you in the right direction, what best describes where you are now?"
                            }
                          </_Builtin.Strong>
                        </_Builtin.Heading>
                      </_Builtin.RichText>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-inline-questions-wrapper"
                      )}
                      data-w-id="fe72d218-eeaa-8982-d7f4-8b224e680393"
                      tag="div"
                    >
                      <_Builtin.RichText
                        className={_utils.cx(_styles, "article-richtext")}
                        tag="div"
                        slot=""
                      >
                        <_Builtin.Heading tag="h3">
                          {"‍"}
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "By law, insurers must offer everyone who is new to Medicare the same pricing and access to Medigap plans. The insurance companies would rather screen by health and then either deny or charge more based on that screen. They aren't allowed to, but ONLY during the first 6-month enrollment window when you're new to Medicare. Once in, you're safe, and they can't kick you out, no matter what happens to your health or how costly you become. But if you miss this window, you could get locked out for life."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "If down the line you decide you want to switch to Medicare Advantage after really learning the Medicare system, you always can. But if you take Medicare Advantage first, you can't come back to Medigap without risking being denied or paying far far more than you could have."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h3">
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "The best advice we can give you really depends on if you're new to Medicare or if you already have Medicare and a plan."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "If you're new to Medicare, it's really important that you don't miss any deadlines. If you miss your Initial Enrollment Period, you could lose your ability to get an affordable MediGap plan. If you miss your Part B enrollment deadline, you will have to pay monthly penalties for the rest of your life."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "That's why we created our free personalized Medicare calendar/ deadline reminder tool. It personalizes to your birthday and retirement situation, and will help you make sure you don't miss any of these deadlines. Medicare is complicated enough, don't get punished for something silly like missing one of these dates. So we can point you in the right direction, what best describes where you are now?"
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.RichText>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-btn-wrapper",
                        "margin-top-custom-1"
                      )}
                      data-w-id="fe72d218-eeaa-8982-d7f4-8b224e6803a6"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(
                          _styles,
                          "input-validation-script"
                        )}
                        value="%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%09%24('%23new_to_medicare_calendar').click(function()%7B%0A%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20event%3A%20'article_end_click'%2C%0A%20%20%20%20%20%20%20%20selection%3A%20'ntm_create_calendar'%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%20%20%24('.bg-dim').show()%3B%0A%20%20%20%20%20%20%24('%23main-flow1').addClass('is-active')%3B%0A%20%20%20%20%20%20%0A%09%7D)%3B%0A%20%20%0A%20%20%24('%23have_medicare_noplan').click(function()%7B%0A%20%20%20%20%2F*const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20event%3A%20'article_end_click'%2C%0A%20%20%20%20%20%20selection%3A%20'have_medicare_noplan'%0A%20%20%20%20%7D%3B%0A%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%0A%20%20%20%20%24('.bg-dim').show()%3B%0A%20%20%20%20%24('%23flow1').addClass('is-active')%3B*%2F%0A%20%20%7D)%3B%0A%20%20%0A%20%20%24('%23have_medicare_advantage').click(function()%7B%0A%20%20%20%20%2F*const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20event%3A%20'article_end_click'%2C%0A%20%20%20%20%20%20selection%3A%20'have_medicare_advantage'%0A%20%20%20%20%7D%3B%0A%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%0A%20%20%20%20%24('.bg-dim').show()%3B%0A%20%20%20%20%24('%23flow2').addClass('is-active')%3B*%2F%0A%20%20%7D)%3B%0A%0A%20%20%24('%23have_medicare_save').click(function()%7B%0A%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20event%3A%20'article_end_click'%2C%0A%20%20%20%20%20%20selection%3A%20'have_medicare_savemoney'%0A%20%20%20%20%7D%3B%0A%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%0A%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20const%20offset%20%3D%20%24('%23article-form').offset().top%3B%0A%20%20%20%20%20%20%24('html%2C%20body').animate(%7B%0A%20%20%20%20%20%20%20%20scrollTop%3A%20offset%20-%20100%0A%20%20%20%20%20%20%7D%2C%201000)%3B%20%2F%2F%20Duration%20in%20milliseconds%0A%20%20%20%20%7D%2C%20100)%3B%0A%20%20%20%20%0A%20%20%20%20%24('.bg-dim').show()%3B%0A%20%20%20%20%24('%23flowStart').addClass('is-active')%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%24('%5Bnew-to-medicare%5D').click(function()%7B%0A%20%20%09isNewToMedicare%20%3D%20true%3B%0A%20%20%7D)%3B%0A%20%20%0A%0A%7D)%3B%0A%3C%2Fscript%3E"
                      />
                      <_Builtin.Link
                        className={_utils.cx(
                          _styles,
                          "button",
                          "nav-btn",
                          "phone-number",
                          "v7"
                        )}
                        data-w-id="fe72d218-eeaa-8982-d7f4-8b224e6803a8"
                        button={false}
                        redirect="/ntm-screen-from-article"
                        new-to-medicare=""
                        id="new_to_medicare_calendar"
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block tag="div">
                          {
                            "I'm New To Medicare - Create My Personal Calendar Reminder"
                          }
                        </_Builtin.Block>
                      </_Builtin.Link>
                      {iAlreadyHaveMedicare ? (
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "button",
                            "nav-btn",
                            "phone-number",
                            "v7"
                          )}
                          data-w-id="fe72d218-eeaa-8982-d7f4-8b224e6803ab"
                          button={false}
                          id="have_medicare_save"
                          block="inline"
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block tag="div">
                            {
                              "I already have Medicare, can you help me save money?"
                            }
                          </_Builtin.Block>
                        </_Builtin.Link>
                      ) : null}
                      {iAlreadyHaveMedicareV2 ? (
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "button",
                            "nav-btn",
                            "phone-number",
                            "v7"
                          )}
                          button={false}
                          block="inline"
                          options={iAlreadyHaveV2Link}
                        >
                          <_Builtin.Block tag="div">
                            {"I have a question - a chat agent is standing by"}
                          </_Builtin.Block>
                        </_Builtin.Link>
                      ) : null}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "article-anchor")}
                      tag="div"
                      id="top"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "bg-dim")}
                      data-w-id="fe72d218-eeaa-8982-d7f4-8b224e6803af"
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-questions-wrapper"
                      )}
                      data-w-id="fe72d218-eeaa-8982-d7f4-8b224e6803b0"
                      tag="div"
                      id="main-flow1"
                    >
                      <_Builtin.RichText
                        className={_utils.cx(
                          _styles,
                          "article-question-richtext"
                        )}
                        tag="div"
                        slot=""
                        id="article-question-main"
                      >
                        {content}
                      </_Builtin.RichText>
                      <_Builtin.FormWrapper
                        className={_utils.cx(
                          _styles,
                          "article-ans-form-wrapper"
                        )}
                      >
                        <_Builtin.FormForm
                          className={_utils.cx(_styles, "article-ans-form")}
                          name="wf-form-Article-Medicare-Form"
                          data-name="Article Medicare Form"
                          method="get"
                          id="wf-form-Article-Medicare-Main-Form"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "article-questions-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "article-ans-wrapper"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "screener-input-wrapper",
                                  "full-width",
                                  "margin-bottom-0"
                                )}
                                tag="div"
                              >
                                {zipCodeVisibility ? (
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "zip-code-wrapper"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.FormTextInput
                                      className={_utils.cx(
                                        _styles,
                                        "zip-input",
                                        "custom1",
                                        "margin-bottom-10"
                                      )}
                                      name="Zip-Code"
                                      maxLength="5"
                                      data-name="Zip Code"
                                      placeholder="Zip Code"
                                      disabled={false}
                                      type="number"
                                      required={false}
                                      autoFocus={false}
                                      inputMode="numeric"
                                      max="99999"
                                      min="0"
                                      autoComplete="off"
                                      id="zip-input-main"
                                    />
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "zip-text-error-main"
                                      )}
                                      tag="div"
                                    >
                                      {"Please enter a valid 5 digit zip code."}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                ) : null}
                                {scrollIntoVisibility ? (
                                  <_Builtin.HtmlEmbed
                                    className={_utils.cx(
                                      _styles,
                                      "input-validation-script"
                                    )}
                                    value="%3Cscript%3E%0Alet%20isPhoneEntered%20%3D%20false%3B%0A%0Afunction%20isValidUSPhoneNumber(input)%20%7B%0A%0A%20%20try%20%7B%0A%20%20%20%20%2F%2F%20Remove%20all%20non-digit%20characters%0A%20%20%20%20const%20digits%20%3D%20input.replace(%2F%5CD%2Fg%2C%20'')%3B%0A%0A%20%20%20%20%2F%2F%20Check%20for%20valid%2010-digit%20US%20number%20or%2011-digit%20with%20country%20code%20'1'%0A%20%20%20%20if%20(digits.length%20%3D%3D%3D%2010)%20%7B%0A%20%20%20%20%20%20%20%20return%20true%3B%20%2F%2F%20e.g.%205551234567%0A%20%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%7D%20else%20if%20(digits.length%20%3D%3D%3D%2011%20%26%26%20digits.startsWith('1'))%20%7B%0A%20%20%20%20%20%20%20%20return%20true%3B%20%2F%2F%20e.g.%2015551234567%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%0A%20%20%20%20%20%20if(%24('%5Bmain-phone%5D').val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').text('Please%20enter%20a%20valid%2010%20digit%20phone%20number')%3B%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').show()%3B%0A%20%20%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%2C%20100)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%0A%20%20%20%20%7D%20catch%20(error)%20%7B%20%7D%0A%0A%20%20%20%20return%20false%3B%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Cscript%3E%0Alet%20isZipValidMain%20%3D%20false%3B%0Alet%20isEmailValidMain%20%3D%20false%3B%0Alet%20isBirthdayValidMain%20%3D%20false%3B%0Alet%20submit_locMain%20%3D%20'ntm_quiz'%3B%0Aconst%20validZipRegex%20%3D%20%2F%5E%5Cd%7B5%7D%24%2F%3B%0A%0A%0A%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool'%0A)%20%7B%0A%20%20%20%20setInterval(function()%7B%0A%20%20%20%20%20%20isZipValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%2F%2F%20You%20can%20run%20your%20custom%20logic%20here%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%0A%2F*setInterval(function()%7B%0A%09if(%24('%5Bmain-phone-error%5D').css('display')%20!%3D%3D%20'none')%7B%0A%09%09%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).addClass('is-disabled')%3B%0A%09%7D%0A%20%20else%20%7B%0A%20%20%09%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%7D%0A%7D%2C%20100)%3B*%2F%0A%0A%20%20function%20validateFormMain()%20%7B%0A%20%20%0A%20%20%20%20let%20zipCode%20%3D%20%22%22%3B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20zipCode%20%3D%20%24('%23zip-input-main').val().trim()%3B%0A%20%20%20%20%7D%20catch(err)%7B%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20const%20email%20%3D%20%24('%23email-input-main').val().trim()%3B%0A%20%20%20%20%20%20const%20birthday%20%3D%20%24('%23birthday-input-main').val().trim()%3B%0A%0A%20%20%20%20%20%20%2F%2F%20ZIP%20Validation%0A%20%20%20%20%20%20if%20(validZipRegex.test(zipCode))%20%7B%0A%20%20%20%20%20%20%20%20%24('.zip-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20isZipValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('.zip-text-error-main').text('Please%20enter%20a%20valid%205%20digit%20zip%20code.').show()%3B%0A%20%20%20%20%20%20%20%20isZipValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%7D%0A%0A%0A%20%20%20%20%20%20%2F%2Fconst%20email%20%3D%20%24('%23email-input-main').val().trim()%3B%0A%20%20%20%20%20%20const%20emailParts%20%3D%20email.split('%40')%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Trigger%20validation%20only%20if%20the%20email%20seems%20complete%20(ends%20with%20a%20dot%20or%20has%20full%20format)%0A%20%20%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20email.includes('%40')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20emailParts.length%20%3D%3D%3D%202%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20emailParts%5B1%5D.includes('.')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20(email.endsWith('.')%20%7C%7C%20%2F%5E%5B%5E%40%5D%2B%40%5B%5E%40%5D%2B%5C.%5B%5E%40%5D%2B%24%2F.test(email))%3B%0A%0A%20%20%20%20%20%20if%20(shouldValidate)%20%7B%0A%20%20%20%20%20%20%20%20const%20domainPart%20%3D%20emailParts%5B1%5D.trim()%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Basic%20domain%20validation%20(e.g.%2C%20example.com)%0A%20%20%20%20%20%20%20%20const%20domainRegex%20%3D%20%2F%5E%5Ba-zA-Z0-9.-%5D%2B%5C.%5Ba-zA-Z%5D%7B2%2C%7D%24%2F%3B%0A%0A%20%20%20%20%20%20%20%20if%20(emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-main')%0A%20%20%20%20%20%20%20%20%20%20%20%20.text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).')%0A%20%20%20%20%20%20%20%20%20%20%20%20.show()%3B%0A%20%20%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('.email-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%0A%20%20%20%20%20%20%20%20%20%20const%20phone%20%3D%20%24('%5Bmain-phone%5D').val()%3B%0A%20%20%20%20%20%20%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber(phone))%3B%0A%0A%20%20%20%20%20%20%20%20%7D%0A%0A%0A%09%09if(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool')%7B%0A%20%20%20%20%0A%20%20%20%20%20%20setInterval(function()%7B%0A%0A%20%20%20%20%20%20%20%20if%20(isEmailValidMain%20%26%26%20isBirthdayValidMain%20%26%26%20isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%7D%2C%20100)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20if%20(isEmailValidMain%20%26%26%20isBirthdayValidMain%20%26%26%20isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%09%09%7D%0A%0A%20%20%20%20%20%20%0A%20%20%7D%0A%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%20%20%24('%23new_to_medicare_calendar').click(function()%7B%0A%20%20%20%20%24('%5Btype%3D%22submit%22%5D').addClass('is-disabled')%3B%0A%20%20%7D)%3B%0A%0A%20%20%24('%5Bmain-phone%5D').on('input'%2C%20function()%7B%0A%20%20%20%20if(%24(this).val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20isPhoneEntered%20%3D%20true%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20isPhoneEntered%20%3D%20false%3B%0A%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%24(document).ready(function%20()%20%7B%0A%20%20%2F%2Fconst%20validZipRegex%20%3D%20%2F%5E%5Cd%7B5%7D%24%2F%3B%0A%20%20const%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%0A%20%20%2F%2F%20Declare%20state%20variables%0A%20%20%2F*let%20isZipValidMain%20%3D%20false%3B%0A%20%20let%20isEmailValidMain%20%3D%20false%3B%0A%20%20let%20isBirthdayValidMain%20%3D%20false%3B*%2F%0A%20%20%0A%20%20%24('.email-text-error').hide()%3B%0A%0A%20%20%20function%20validateFormMain()%20%7B%0A%20%20%20%0A%20%20%20%20%20let%20zipCode%20%3D%20%22%22%3B%0A%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20zipCode%20%3D%20%24('%23zip-input-main').val().trim()%3B%0A%20%20%20%20%20%7D%20catch(err)%7B%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20%20%20const%20email%20%3D%20%24('%23email-input-main').val().trim()%3B%0A%20%20%20%20%20%20%20const%20birthday%20%3D%20%24('%23birthday-input-main').val().trim()%3B%0A%0A%20%20%20%20%20%20%20%2F%2F%20ZIP%20Validation%0A%20%20%20%20%20%20%20if%20(validZipRegex.test(zipCode))%20%7B%0A%20%20%20%20%20%20%20%20%20%24('.zip-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20%20isZipValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%24('.zip-text-error-main').text('Please%20enter%20a%20valid%205%20digit%20zip%20code.').show()%3B%0A%20%20%20%20%20%20%20%20%20isZipValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%7D%0A%0A%0A%20%20%20%20%20%20%20%2F%2Fconst%20email%20%3D%20%24('%23email-input-main').val().trim()%3B%0A%20%20%20%20%20%20%20const%20emailParts%20%3D%20email.split('%40')%3B%0A%0A%20%20%20%20%20%20%20%2F%2F%20Trigger%20validation%20only%20if%20the%20email%20seems%20complete%20(ends%20with%20a%20dot%20or%20has%20full%20format)%0A%20%20%20%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20email.includes('%40')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20emailParts.length%20%3D%3D%3D%202%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20emailParts%5B1%5D.includes('.')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20(email.endsWith('.')%20%7C%7C%20%2F%5E%5B%5E%40%5D%2B%40%5B%5E%40%5D%2B%5C.%5B%5E%40%5D%2B%24%2F.test(email))%3B%0A%0A%20%20%20%20%20%20%20if%20(shouldValidate)%20%7B%0A%20%20%20%20%20%20%20%20%20const%20domainPart%20%3D%20emailParts%5B1%5D.trim()%3B%0A%0A%20%20%20%20%20%20%20%20%20%2F%2F%20Basic%20domain%20validation%20(e.g.%2C%20example.com)%0A%20%20%20%20%20%20%20%20%20const%20domainRegex%20%3D%20%2F%5E%5Ba-zA-Z0-9.-%5D%2B%5C.%5Ba-zA-Z%5D%7B2%2C%7D%24%2F%3B%0A%0A%20%20%20%20%20%20%20%20%20if%20(emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-main')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20.text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20.show()%3B%0A%20%20%20%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%24('.email-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%0A%20%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%0A%20%20%20%20%20%20%20%20%20const%20phone%20%3D%20%24('%5Bmain-phone%5D').val()%3B%0A%20%20%20%20%20%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber(phone))%3B%0A%0A%20%20%20%20%20%20%20%7D%0A%0A%0A%20%20%20%20%20%20%20if(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool')%7B%0A%0A%20%20%20%20%20%20%20%20%20setInterval(function()%7B%0A%0A%20%20%20%20%20%20%20%20%20%20%20if%20(isEmailValidMain%20%26%26%20isBirthdayValidMain%20%26%26%20isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%7D%2C%20100)%3B%0A%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20else%20%7B%0A%0A%20%20%20%20%20%20%20%20%20if%20(isEmailValidMain%20%26%26%20isBirthdayValidMain%20%26%26%20isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%7D%0A%0A%0A%20%20%20%7D%0A%0A%20%20%20%2F%2F%20Input%20validation%20triggers%0A%20%20%20%24('%23zip-input-main').on('input%20change'%2C%20function%20()%20%7B%0A%20%20%20%20%20let%20zipCode%20%3D%20%24('%23zip-input-main').val().replace(%2F%5B%5E%5Cd%5D%2Fg%2C%20'').slice(0%2C%205)%3B%0A%20%20%20%20%20%24('%23zip-input-main').val(zipCode)%3B%0A%20%20%20%20%20validateFormMain()%3B%0A%20%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Input%20validation%20triggers%0A%20%20%24('%23birthday-input-main').on('input%20change'%2C%20function%20()%20%7B%0A%20%20%20%20%2F%2Flet%20zipCode%20%3D%20%24('%23zip-input').val().replace(%2F%5B%5E%5Cd%5D%2Fg%2C%20'').slice(0%2C%205)%3B%0A%20%20%20%20%2F%2F%24('%23zip-input').val(zipCode)%3B%0A%20%20%20%20validateFormMain()%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%20%24('%23birthday-input-main').on('blur'%2C%20function%20()%20%7B%0A%20%20%20%20%20validateFormMain()%3B%0A%20%20%20%7D)%3B%0A%20%20%0A%20%20%20%24('%23email-input-main').on('input'%2C%20function%20()%20%7B%0A%20%20%20%20%20%2F%2Flet%20zipCode%20%3D%20%24('%23zip-input').val().replace(%2F%5B%5E%5Cd%5D%2Fg%2C%20'').slice(0%2C%205)%3B%0A%20%20%20%20%2F%2F%20%24('%23zip-input').val(zipCode)%3B%0A%20%20%20%20%20validateFormMain()%3B%0A%20%20%20%7D)%3B%0A%20%20%20%0A%20%20%20%24('%23email-input-main').on('blur'%2C%20function%20()%20%7B%0A%20%20%20%20%20const%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%20%20%20%20%20if%20(emailRegex.test(%24(this).val()))%20%7B%0A%20%20%20%20%20%20%20%24('.email-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20isEmailValidMain%20%3D%20true%3B%0A%20%20%20%20%20%7D%20else%20%7B%0A%0A%20%20%20%20%20%20%20if(%24('%23email-input-main').val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20%20%20%20%24('.email-text-error-main').text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).').show()%3B%0A%20%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%7D%0A%20%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Prevent%20Enter%20key%20on%20inputs%0A%20%20%24('%23email-input-main%2C%20%23birthday-input-main').on('keypress'%2C%20function%20(e)%20%7B%0A%20%20%20%20if%20(e.which%20%3D%3D%3D%2013)%20e.preventDefault()%3B%0A%20%20%20%20%0A%20%20%20%20validateFormMain()%3B%0A%20%20%20%20%0A%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%20%20%20%20const%20phone%20%3D%20%24('%5Bmain-phone%5D').val()%3B%0A%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber(phone))%3B%0A%20%20%20%20%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Prevent%20Enter%20key%20globally%20on%20form%0A%20%20const%20calculatorForm%20%3D%20document.getElementById(%22wf-form-NTM-Screen-Form%22)%3B%0A%20%20if%20(calculatorForm)%20%7B%0A%20%20%20%20calculatorForm.addEventListener(%22keydown%22%2C%20function%20(event)%20%7B%0A%20%20%20%20%20%20if%20(event.key%20%3D%3D%3D%20%22Enter%22)%20event.preventDefault()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20%2F%2F%20Form%20submit%20handler%0A%20%20%24('%23wf-form-Article-Medicare-Main-Form').on('submit'%2C%20function%20(e)%20%7B%0A%20%20%20%20const%20zipCode%20%3D%20%24('%23zip-input').val().trim()%3B%0A%20%20%20%20const%20email%20%3D%20%24('%23email-input-main').val().trim()%3B%0A%20%20%20%20const%20birthday%20%3D%20%24('%23birthday-input-main').val().trim()%3B%0A%20%20%20%20%0A%0A%20%20%20%20if%20(!emailRegex.test(email)%20%7C%7C%20birthday.length%20!%3D%3D%2010)%20%7B%0A%20%20%20%20%20%20%2F%2Fe.preventDefault()%3B%0A%20%20%20%20%20%20validateFormMain()%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%2F%2F%20Call%20your%20form%20submission%20function%0A%20%20%20%20%20%20submitFormMain('calendar_reminder'%2C%20%24('%23email-input-main').val())%3B%0A%20%20%20%20%20%20%2F%2F%24('%23article-question-main').hide()%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20const%20offset%20%3D%20%24('%23top').offset().top%3B%0A%20%20%20%20%20%20%20%20%24('html%2C%20body').animate(%7B%0A%20%20%20%20%20%20%20%20%20%20scrollTop%3A%20offset%0A%20%20%20%20%20%20%20%20%7D%2C%201000)%3B%20%2F%2F%20Duration%20in%20milliseconds%0A%20%20%20%20%20%20%7D%2C%203500)%3B%0A%0A%20%20%20%20%20%20const%20urlParam%20%3D%20new%20URLSearchParams(new%20URL(window.location.href).search)%3B%0A%20%20%20%20%20%20const%20medicare%20%3D%20urlParam.get('medicare')%20%7C%7C%20''%3B%0A%0A%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20event%3A%20'email_submit'%2C%0A%20%20%20%20%20%20%20%20%2F%2Flocation%3A%20medicare%20%3D%3D%3D%20'over_65'%20%3F%20'O65_Working_Screener_Result'%20%3A%20'T65_Screener_Result'%2C%0A%20%20%20%20%20%20%20%20location%3A%20'calendar_reminder'%2C%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20submit_locMain%20%3D%20'calendar_reminder'%3B%0A%0A%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20return%3B%0A%20%20%7D)%3B%0A%20%20%0A%0A%0A%09%2F%2FBirthdate%20Validation%0A%20%20%20const%20%24input%20%3D%20%24('%23birthday-input-main')%3B%0A%20%20%20let%20previousValue%20%3D%20''%3B%0A%20%20%20let%20hadCompleteInput%20%3D%20false%3B%20%2F%2F%20Track%20if%20input%20was%20ever%20completed%20(8%20digits)%0A%0A%20%20%20function%20validateBirthdayInput(triggeredByBlur%20%3D%20false)%20%7B%0A%20%20%20%20%20let%20raw%20%3D%20%24input.val()%3B%0A%20%20%20%20%20let%20numbers%20%3D%20raw.replace(%2F%5CD%2Fg%2C%20'').substring(0%2C%208)%3B%0A%20%20%20%20%20let%20formatted%20%3D%20''%3B%0A%0A%20%20%20%20%20if%20(numbers.length%20%3E%3D%201)%20formatted%20%2B%3D%20numbers.substring(0%2C%202)%3B%0A%20%20%20%20%20if%20(numbers.length%20%3E%3D%203)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(2%2C%204)%3B%0A%20%20%20%20%20if%20(numbers.length%20%3E%3D%205)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(4%2C%208)%3B%0A%0A%20%20%20%20%20if%20(raw%20!%3D%3D%20formatted)%20%7B%0A%20%20%20%20%20%20%20%24input.val(formatted)%3B%0A%20%20%20%20%20%20%20const%20inputEl%20%3D%20%24input.get(0)%3B%0A%20%20%20%20%20%20%20inputEl.setSelectionRange(formatted.length%2C%20formatted.length)%3B%0A%20%20%20%20%20%7D%0A%0A%20%20%20%20%20const%20isBackspace%20%3D%20previousValue.length%20%3E%20formatted.length%3B%0A%20%20%20%20%20const%20isNowComplete%20%3D%20numbers.length%20%3D%3D%3D%208%3B%0A%20%20%20%20%20const%20wasPreviouslyComplete%20%3D%20hadCompleteInput%3B%0A%0A%20%20%20%20%20%2F%2F%20Update%20tracker%0A%20%20%20%20%20if%20(isNowComplete)%20%7B%0A%20%20%20%20%20%20%20hadCompleteInput%20%3D%20true%3B%0A%20%20%20%20%20%7D%0A%0A%20%20%20%20%20previousValue%20%3D%20formatted%3B%0A%0A%20%20%20%20%20%2F%2F%20Determine%20whether%20to%20run%20validation%0A%20%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20triggeredByBlur%20%7C%7C%20isNowComplete%20%7C%7C%20wasPreviouslyComplete%3B%0A%0A%20%20%20%20%20if%20(!shouldValidate)%20return%3B%0A%0A%20%20%20%20%20if%20(numbers.length%20%3C%208)%20%7B%0A%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%24('.birthday-text-error-main').text('Please%20enter%20a%20valid%20birthday%20MM%2FDD%2FYYYY').show()%3B%0A%20%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%2F%2F%20Parse%20date%20parts%0A%20%20%20%20%20const%20month%20%3D%20parseInt(numbers.substring(0%2C%202)%2C%2010)%3B%0A%20%20%20%20%20const%20day%20%3D%20parseInt(numbers.substring(2%2C%204)%2C%2010)%3B%0A%20%20%20%20%20const%20year%20%3D%20parseInt(numbers.substring(4%2C%208)%2C%2010)%3B%0A%0A%20%20%20%20%20const%20isValidDate%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20const%20date%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%0A%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20date.getFullYear()%20%3D%3D%3D%20y%20%26%26%0A%20%20%20%20%20%20%20%20%20date.getMonth()%20%3D%3D%3D%20m%20-%201%20%26%26%0A%20%20%20%20%20%20%20%20%20date.getDate()%20%3D%3D%3D%20d%0A%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20const%20isWithinRange%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20const%20validYear%20%3D%20y%20%3E%3D%201900%20%26%26%20y%20%3C%3D%202025%3B%0A%20%20%20%20%20%20%20const%20inputDate%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%0A%20%20%20%20%20%20%20const%20today%20%3D%20new%20Date()%3B%0A%20%20%20%20%20%20%20today.setHours(0%2C%200%2C%200%2C%200)%3B%0A%20%20%20%20%20%20%20return%20validYear%20%26%26%20inputDate%20%3C%20today%3B%0A%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%2F%2F%20Final%20validation%0A%20%20%20%20%20if%20(isValidDate(month%2C%20day%2C%20year)%20%26%26%20isWithinRange(month%2C%20day%2C%20year))%20%7B%0A%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%24('.birthday-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%24('%23continue-question').removeClass('is-disabled')%3B%0A%0A%20%20%20%20%20%20%20console.log('Is%20Valid%20Birthdate'%2C%20isBirthdayValidMain)%3B%0A%0A%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%20%20%20%20%20%20%20%20%20const%20phone%20%3D%20%24('%5Bmain-phone%5D').val()%3B%0A%20%20%20%20%20%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber(phone))%3B%0A%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20if%20(isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%2F%2F%20ZIP%20logic%20if%20needed%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%24('.birthday-text-error-main').text('Please%20enter%20a%20valid%20birthday%20MM%2FDD%2FYYYY').show()%3B%0A%20%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20console.log('Is%20Invalid%20Birthdate')%3B%0A%20%20%20%20%20%7D%0A%0A%20%20%20%20%20validateFormMain()%3B%20%2F%2F%20Re-check%20form%0A%20%20%20%7D%0A%0A%20%20%20%2F%2F%20Trigger%20on%20input%0A%20%20%20%24input.on('input'%2C%20function%20()%20%7B%0A%20%20%20%20%20validateBirthdayInput(false)%3B%0A%20%20%20%7D)%3B%0A%0A%20%20%20%2F%2F%20Trigger%20on%20blur%0A%20%20%20%24input.on('blur'%2C%20function%20()%20%7B%0A%20%20%20%20%20validateBirthdayInput(true)%3B%0A%20%20%20%7D)%3B%0A%20%20%20%2F%2FBirthdate%20Validation%0A%0A%0A%20%20%2F%2F%20Birthday%20formatting%20and%20validation%0A%20%20%2F*const%20%24input%20%3D%20%24('%23birthday-input-main')%3B%0A%20%20%24input.on('input'%2C%20function%20(e)%20%7B%0A%20%20%0A%20%20%20%20let%20raw%20%3D%20%24(this).val()%3B%0A%20%20%20%20let%20numbers%20%3D%20raw.replace(%2F%5CD%2Fg%2C%20'').substring(0%2C%208)%3B%0A%20%20%20%20let%20formatted%20%3D%20''%3B%0A%0A%20%20%20%20if%20(numbers.length%20%3E%3D%201)%20formatted%20%2B%3D%20numbers.substring(0%2C%202)%3B%0A%20%20%20%20if%20(numbers.length%20%3E%3D%203)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(2%2C%204)%3B%0A%20%20%20%20if%20(numbers.length%20%3E%3D%205)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(4%2C%208)%3B%0A%0A%20%20%20%20if%20(raw%20!%3D%3D%20formatted)%20%7B%0A%20%20%20%20%20%20%24(this).val(formatted)%3B%0A%20%20%20%20%20%20this.setSelectionRange(formatted.length%2C%20formatted.length)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20if%20(numbers.length%20%3C%208)%20%7B%0A%20%20%20%20%20%20%24('.birthday-text-error').show()%3B%0A%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20const%20month%20%3D%20parseInt(numbers.substring(0%2C%202)%2C%2010)%3B%0A%20%20%20%20%20%20const%20day%20%3D%20parseInt(numbers.substring(2%2C%204)%2C%2010)%3B%0A%20%20%20%20%20%20const%20year%20%3D%20parseInt(numbers.substring(4%2C%208)%2C%2010)%3B%0A%0A%20%20%20%20%20%20const%20isValidDate%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20date%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20date.getFullYear()%20%3D%3D%3D%20y%20%26%26%0A%20%20%20%20%20%20%20%20%20%20date.getMonth()%20%3D%3D%3D%20m%20-%201%20%26%26%0A%20%20%20%20%20%20%20%20%20%20date.getDate()%20%3D%3D%3D%20d%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20const%20isWithinRange%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20isValidDate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20m%20%3E%3D%201%20%26%26%20m%20%3C%3D%2012%20%26%26%20d%20%3E%3D%201%20%26%26%20d%20%3C%3D%2031%20%26%26%20y%20%3E%3D%201900%20%26%26%20y%20%3C%3D%202025%3B%0A%0A%20%20%20%20%20%20%20%20if%20(!isValidDate)%20return%20false%3B%0A%0A%20%20%20%20%20%20%20%20const%20inputDate%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%20%2F%2F%20JS%20months%20are%200-based%0A%20%20%20%20%20%20%20%20const%20today%20%3D%20new%20Date()%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Remove%20time%20from%20today's%20date%20to%20compare%20only%20the%20date%20portion%0A%20%20%20%20%20%20%20%20today.setHours(0%2C%200%2C%200%2C%200)%3B%0A%0A%20%20%20%20%20%20%20%20return%20inputDate%20%3C%20today%3B%20%2F%2F%20must%20be%20strictly%20before%20today%0A%20%20%20%20%20%20%7D%3B%0A%0A%0A%20%20%20%20%20%20console.log(isValidDate)%3B%0A%20%20%20%20%20%20console.log(isWithinRange)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20if%20(isWithinRange(month%2C%20day%2C%20year)%20%26%26%20isValidDate(month%2C%20day%2C%20year))%20%7B%0A%20%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%24('.birthday-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20%24('.next-dob-btn').removeClass('v3')%3B%0A%20%20%20%20%20%20%20%20console.log('Is%20Valid%20Birthdate')%3B%0A%20%20%20%20%20%20%20%20%24('%23continue-question').removeClass('is-disabled')%3B%0A%0A%20%20%20%20%20%20%20%20if%20(isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%24('%23continue-question').removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20console.log('Is%20Invalid%20Birthdate')%3B%0A%20%20%20%20%20%20%20%20%24('.birthday-text-error-main').text('Please%20enter%20a%20valid%20birthday%20MM%2FDD%2FYYYY').show()%3B%0A%20%20%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%0A%20%20%20validateFormMain()%3B%20%2F%2F%20Re-check%20all%20fields%20after%20DOB%20update%0A%20%20%7D)%3B*%2F%0A%20%20%0A%20%20%24('.bg-dim').click(function()%7B%0A%20%20%09%24('.article-questions-wrapper').removeClass('is-active')%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%0A%7D)%3B%0A%20%20%0A%7D)%3B%0A%3C%2Fscript%3E"
                                  />
                                ) : null}
                                {scrollIntoVisibility2 ? (
                                  <_Builtin.HtmlEmbed
                                    className={_utils.cx(
                                      _styles,
                                      "input-validation-script"
                                    )}
                                    value="%3Cscript%3E%0Alet%20isPhoneEntered%20%3D%20false%3B%0A%0Afunction%20isValidUSPhoneNumber(input)%20%7B%0A%0A%20%20try%20%7B%0A%20%20%20%20%2F%2F%20Remove%20all%20non-digit%20characters%0A%20%20%20%20const%20digits%20%3D%20input.replace(%2F%5CD%2Fg%2C%20'')%3B%0A%0A%20%20%20%20%2F%2F%20Check%20for%20valid%2010-digit%20US%20number%20or%2011-digit%20with%20country%20code%20'1'%0A%20%20%20%20if%20(digits.length%20%3D%3D%3D%2010)%20%7B%0A%20%20%20%20%20%20%20%20return%20true%3B%20%2F%2F%20e.g.%205551234567%0A%20%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%7D%20else%20if%20(digits.length%20%3D%3D%3D%2011%20%26%26%20digits.startsWith('1'))%20%7B%0A%20%20%20%20%20%20%20%20return%20true%3B%20%2F%2F%20e.g.%2015551234567%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%0A%20%20%20%20%20%20if(%24('%5Bmain-phone%5D').val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').text('Please%20enter%20a%20valid%2010%20digit%20phone%20number')%3B%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').show()%3B%0A%20%20%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%2C%20100)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%0A%20%20%20%20%7D%20catch%20(error)%20%7B%20%7D%0A%0A%20%20%20%20return%20false%3B%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Cscript%3E%0Alet%20isZipValidMain%20%3D%20false%3B%0Alet%20isEmailValidMain%20%3D%20false%3B%0Alet%20isBirthdayValidMain%20%3D%20false%3B%0Alet%20submit_locMain%20%3D%20'ntm_quiz'%3B%0Aconst%20validZipRegex%20%3D%20%2F%5E%5Cd%7B5%7D%24%2F%3B%0A%0A%0A%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool'%0A)%20%7B%0A%20%20%20%20setInterval(function()%7B%0A%20%20%20%20%20%20isZipValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%2F%2F%20You%20can%20run%20your%20custom%20logic%20here%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%0A%2F*setInterval(function()%7B%0A%09if(%24('%5Bmain-phone-error%5D').css('display')%20!%3D%3D%20'none')%7B%0A%09%09%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).addClass('is-disabled')%3B%0A%09%7D%0A%20%20else%20%7B%0A%20%20%09%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%7D%0A%7D%2C%20100)%3B*%2F%0A%0A%20%20function%20validateFormMain()%20%7B%0A%20%20%0A%20%20%20%20let%20zipCode%20%3D%20%22%22%3B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20zipCode%20%3D%20%24('%23zip-input-main').val().trim()%3B%0A%20%20%20%20%7D%20catch(err)%7B%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20const%20email%20%3D%20%24('%23email-input-main').val().trim()%3B%0A%20%20%20%20%20%20const%20birthday%20%3D%20%24('%23birthday-input-main').val().trim()%3B%0A%0A%20%20%20%20%20%20%2F%2F%20ZIP%20Validation%0A%20%20%20%20%20%20if%20(validZipRegex.test(zipCode))%20%7B%0A%20%20%20%20%20%20%20%20%24('.zip-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20isZipValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('.zip-text-error-main').text('Please%20enter%20a%20valid%205%20digit%20zip%20code.').show()%3B%0A%20%20%20%20%20%20%20%20isZipValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%7D%0A%0A%0A%20%20%20%20%20%20%2F%2Fconst%20email%20%3D%20%24('%23email-input-main').val().trim()%3B%0A%20%20%20%20%20%20const%20emailParts%20%3D%20email.split('%40')%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Trigger%20validation%20only%20if%20the%20email%20seems%20complete%20(ends%20with%20a%20dot%20or%20has%20full%20format)%0A%20%20%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20email.includes('%40')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20emailParts.length%20%3D%3D%3D%202%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20emailParts%5B1%5D.includes('.')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20(email.endsWith('.')%20%7C%7C%20%2F%5E%5B%5E%40%5D%2B%40%5B%5E%40%5D%2B%5C.%5B%5E%40%5D%2B%24%2F.test(email))%3B%0A%0A%20%20%20%20%20%20if%20(shouldValidate)%20%7B%0A%20%20%20%20%20%20%20%20const%20domainPart%20%3D%20emailParts%5B1%5D.trim()%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Basic%20domain%20validation%20(e.g.%2C%20example.com)%0A%20%20%20%20%20%20%20%20const%20domainRegex%20%3D%20%2F%5E%5Ba-zA-Z0-9.-%5D%2B%5C.%5Ba-zA-Z%5D%7B2%2C%7D%24%2F%3B%0A%0A%20%20%20%20%20%20%20%20if%20(emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-main')%0A%20%20%20%20%20%20%20%20%20%20%20%20.text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).')%0A%20%20%20%20%20%20%20%20%20%20%20%20.show()%3B%0A%20%20%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('.email-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%0A%20%20%20%20%20%20%20%20%20%20const%20phone%20%3D%20%24('%5Bmain-phone%5D').val()%3B%0A%20%20%20%20%20%20%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber(phone))%3B%0A%0A%20%20%20%20%20%20%20%20%7D%0A%0A%0A%09%09if(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool')%7B%0A%20%20%20%20%0A%20%20%20%20%20%20setInterval(function()%7B%0A%0A%20%20%20%20%20%20%20%20if%20(isEmailValidMain%20%26%26%20isBirthdayValidMain%20%26%26%20isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%7D%2C%20100)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20if%20(isEmailValidMain%20%26%26%20isBirthdayValidMain%20%26%26%20isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%09%09%7D%0A%0A%20%20%20%20%20%20%0A%20%20%7D%0A%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%20%20%24('%23new_to_medicare_calendar').click(function()%7B%0A%20%20%20%20%24('%5Btype%3D%22submit%22%5D').addClass('is-disabled')%3B%0A%20%20%7D)%3B%0A%0A%20%20%24('%5Bmain-phone%5D').on('input'%2C%20function()%7B%0A%20%20%20%20if(%24(this).val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20isPhoneEntered%20%3D%20true%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20isPhoneEntered%20%3D%20false%3B%0A%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%24(document).ready(function%20()%20%7B%0A%20%20%2F%2Fconst%20validZipRegex%20%3D%20%2F%5E%5Cd%7B5%7D%24%2F%3B%0A%20%20const%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%0A%20%20%2F%2F%20Declare%20state%20variables%0A%20%20%2F*let%20isZipValidMain%20%3D%20false%3B%0A%20%20let%20isEmailValidMain%20%3D%20false%3B%0A%20%20let%20isBirthdayValidMain%20%3D%20false%3B*%2F%0A%20%20%0A%20%20%24('.email-text-error').hide()%3B%0A%0A%20%20%20function%20validateFormMain()%20%7B%0A%20%20%20%0A%20%20%20%20%20let%20zipCode%20%3D%20%22%22%3B%0A%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20zipCode%20%3D%20%24('%23zip-input-main').val().trim()%3B%0A%20%20%20%20%20%7D%20catch(err)%7B%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20%20%20const%20email%20%3D%20%24('%23email-input-main').val().trim()%3B%0A%20%20%20%20%20%20%20const%20birthday%20%3D%20%24('%23birthday-input-main').val().trim()%3B%0A%0A%20%20%20%20%20%20%20%2F%2F%20ZIP%20Validation%0A%20%20%20%20%20%20%20if%20(validZipRegex.test(zipCode))%20%7B%0A%20%20%20%20%20%20%20%20%20%24('.zip-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20%20isZipValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%24('.zip-text-error-main').text('Please%20enter%20a%20valid%205%20digit%20zip%20code.').show()%3B%0A%20%20%20%20%20%20%20%20%20isZipValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%7D%0A%0A%0A%20%20%20%20%20%20%20%2F%2Fconst%20email%20%3D%20%24('%23email-input-main').val().trim()%3B%0A%20%20%20%20%20%20%20const%20emailParts%20%3D%20email.split('%40')%3B%0A%0A%20%20%20%20%20%20%20%2F%2F%20Trigger%20validation%20only%20if%20the%20email%20seems%20complete%20(ends%20with%20a%20dot%20or%20has%20full%20format)%0A%20%20%20%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20email.includes('%40')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20emailParts.length%20%3D%3D%3D%202%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20emailParts%5B1%5D.includes('.')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20(email.endsWith('.')%20%7C%7C%20%2F%5E%5B%5E%40%5D%2B%40%5B%5E%40%5D%2B%5C.%5B%5E%40%5D%2B%24%2F.test(email))%3B%0A%0A%20%20%20%20%20%20%20if%20(shouldValidate)%20%7B%0A%20%20%20%20%20%20%20%20%20const%20domainPart%20%3D%20emailParts%5B1%5D.trim()%3B%0A%0A%20%20%20%20%20%20%20%20%20%2F%2F%20Basic%20domain%20validation%20(e.g.%2C%20example.com)%0A%20%20%20%20%20%20%20%20%20const%20domainRegex%20%3D%20%2F%5E%5Ba-zA-Z0-9.-%5D%2B%5C.%5Ba-zA-Z%5D%7B2%2C%7D%24%2F%3B%0A%0A%20%20%20%20%20%20%20%20%20if%20(emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-main')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20.text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20.show()%3B%0A%20%20%20%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%24('.email-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%0A%20%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%0A%20%20%20%20%20%20%20%20%20const%20phone%20%3D%20%24('%5Bmain-phone%5D').val()%3B%0A%20%20%20%20%20%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber(phone))%3B%0A%0A%20%20%20%20%20%20%20%7D%0A%0A%0A%20%20%20%20%20%20%20if(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool')%7B%0A%0A%20%20%20%20%20%20%20%20%20setInterval(function()%7B%0A%0A%20%20%20%20%20%20%20%20%20%20%20if%20(isEmailValidMain%20%26%26%20isBirthdayValidMain%20%26%26%20isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%7D%2C%20100)%3B%0A%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20else%20%7B%0A%0A%20%20%20%20%20%20%20%20%20if%20(isEmailValidMain%20%26%26%20isBirthdayValidMain%20%26%26%20isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-main').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%7D%0A%0A%0A%20%20%20%7D%0A%0A%20%20%20%2F%2F%20Input%20validation%20triggers%0A%20%20%20%24('%23zip-input-main').on('input%20change'%2C%20function%20()%20%7B%0A%20%20%20%20%20let%20zipCode%20%3D%20%24('%23zip-input-main').val().replace(%2F%5B%5E%5Cd%5D%2Fg%2C%20'').slice(0%2C%205)%3B%0A%20%20%20%20%20%24('%23zip-input-main').val(zipCode)%3B%0A%20%20%20%20%20validateFormMain()%3B%0A%20%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Input%20validation%20triggers%0A%20%20%24('%23birthday-input-main').on('input%20change'%2C%20function%20()%20%7B%0A%20%20%20%20%2F%2Flet%20zipCode%20%3D%20%24('%23zip-input').val().replace(%2F%5B%5E%5Cd%5D%2Fg%2C%20'').slice(0%2C%205)%3B%0A%20%20%20%20%2F%2F%24('%23zip-input').val(zipCode)%3B%0A%20%20%20%20validateFormMain()%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%20%24('%23birthday-input-main').on('blur'%2C%20function%20()%20%7B%0A%20%20%20%20%20validateFormMain()%3B%0A%20%20%20%7D)%3B%0A%20%20%0A%20%20%20%24('%23email-input-main').on('input'%2C%20function%20()%20%7B%0A%20%20%20%20%20%2F%2Flet%20zipCode%20%3D%20%24('%23zip-input').val().replace(%2F%5B%5E%5Cd%5D%2Fg%2C%20'').slice(0%2C%205)%3B%0A%20%20%20%20%2F%2F%20%24('%23zip-input').val(zipCode)%3B%0A%20%20%20%20%20validateFormMain()%3B%0A%20%20%20%7D)%3B%0A%20%20%20%0A%20%20%20%24('%23email-input-main').on('blur'%2C%20function%20()%20%7B%0A%20%20%20%20%20const%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%20%20%20%20%20if%20(emailRegex.test(%24(this).val()))%20%7B%0A%20%20%20%20%20%20%20%24('.email-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20isEmailValidMain%20%3D%20true%3B%0A%20%20%20%20%20%7D%20else%20%7B%0A%0A%20%20%20%20%20%20%20if(%24('%23email-input-main').val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20%20%20%20%24('.email-text-error-main').text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).').show()%3B%0A%20%20%20%20%20%20%20%20%20isEmailValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%7D%0A%20%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Prevent%20Enter%20key%20on%20inputs%0A%20%20%24('%23email-input-main%2C%20%23birthday-input-main').on('keypress'%2C%20function%20(e)%20%7B%0A%20%20%20%20if%20(e.which%20%3D%3D%3D%2013)%20e.preventDefault()%3B%0A%20%20%20%20%0A%20%20%20%20validateFormMain()%3B%0A%20%20%20%20%0A%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%20%20%20%20const%20phone%20%3D%20%24('%5Bmain-phone%5D').val()%3B%0A%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber(phone))%3B%0A%20%20%20%20%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Prevent%20Enter%20key%20globally%20on%20form%0A%20%20const%20calculatorForm%20%3D%20document.getElementById(%22wf-form-NTM-Screen-Form%22)%3B%0A%20%20if%20(calculatorForm)%20%7B%0A%20%20%20%20calculatorForm.addEventListener(%22keydown%22%2C%20function%20(event)%20%7B%0A%20%20%20%20%20%20if%20(event.key%20%3D%3D%3D%20%22Enter%22)%20event.preventDefault()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20%2F%2F%20Form%20submit%20handler%0A%20%20%24('%23wf-form-Article-Medicare-Main-Form').on('submit'%2C%20function%20(e)%20%7B%0A%20%20%20%20const%20zipCode%20%3D%20%24('%23zip-input').val().trim()%3B%0A%20%20%20%20const%20email%20%3D%20%24('%23email-input-main').val().trim()%3B%0A%20%20%20%20const%20birthday%20%3D%20%24('%23birthday-input-main').val().trim()%3B%0A%20%20%20%20%0A%0A%20%20%20%20if%20(!emailRegex.test(email)%20%7C%7C%20birthday.length%20!%3D%3D%2010)%20%7B%0A%20%20%20%20%20%20%2F%2Fe.preventDefault()%3B%0A%20%20%20%20%20%20validateFormMain()%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%2F%2F%20Call%20your%20form%20submission%20function%0A%20%20%20%20%20%20submitFormMain('calendar_reminder'%2C%20%24('%23email-input-main').val())%3B%0A%20%20%20%20%20%20%2F%2F%24('%23article-question-main').hide()%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20const%20offset%20%3D%20%24('%23article-question-main').offset().top%3B%0A%20%20%20%20%20%20%20%20%24('html%2C%20body').animate(%7B%0A%20%20%20%20%20%20%20%20%20%20scrollTop%3A%20offset%0A%20%20%20%20%20%20%20%20%7D%2C%201000)%3B%20%2F%2F%20Duration%20in%20milliseconds%0A%20%20%20%20%20%20%7D%2C%202500)%3B%0A%0A%20%20%20%20%20%20const%20urlParam%20%3D%20new%20URLSearchParams(new%20URL(window.location.href).search)%3B%0A%20%20%20%20%20%20const%20medicare%20%3D%20urlParam.get('medicare')%20%7C%7C%20''%3B%0A%0A%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20event%3A%20'email_submit'%2C%0A%20%20%20%20%20%20%20%20%2F%2Flocation%3A%20medicare%20%3D%3D%3D%20'over_65'%20%3F%20'O65_Working_Screener_Result'%20%3A%20'T65_Screener_Result'%2C%0A%20%20%20%20%20%20%20%20location%3A%20'calendar_reminder'%2C%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20submit_locMain%20%3D%20'calendar_reminder'%3B%0A%0A%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20return%3B%0A%20%20%7D)%3B%0A%20%20%0A%0A%0A%09%2F%2FBirthdate%20Validation%0A%20%20%20const%20%24input%20%3D%20%24('%23birthday-input-main')%3B%0A%20%20%20let%20previousValue%20%3D%20''%3B%0A%20%20%20let%20hadCompleteInput%20%3D%20false%3B%20%2F%2F%20Track%20if%20input%20was%20ever%20completed%20(8%20digits)%0A%0A%20%20%20function%20validateBirthdayInput(triggeredByBlur%20%3D%20false)%20%7B%0A%20%20%20%20%20let%20raw%20%3D%20%24input.val()%3B%0A%20%20%20%20%20let%20numbers%20%3D%20raw.replace(%2F%5CD%2Fg%2C%20'').substring(0%2C%208)%3B%0A%20%20%20%20%20let%20formatted%20%3D%20''%3B%0A%0A%20%20%20%20%20if%20(numbers.length%20%3E%3D%201)%20formatted%20%2B%3D%20numbers.substring(0%2C%202)%3B%0A%20%20%20%20%20if%20(numbers.length%20%3E%3D%203)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(2%2C%204)%3B%0A%20%20%20%20%20if%20(numbers.length%20%3E%3D%205)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(4%2C%208)%3B%0A%0A%20%20%20%20%20if%20(raw%20!%3D%3D%20formatted)%20%7B%0A%20%20%20%20%20%20%20%24input.val(formatted)%3B%0A%20%20%20%20%20%20%20const%20inputEl%20%3D%20%24input.get(0)%3B%0A%20%20%20%20%20%20%20inputEl.setSelectionRange(formatted.length%2C%20formatted.length)%3B%0A%20%20%20%20%20%7D%0A%0A%20%20%20%20%20const%20isBackspace%20%3D%20previousValue.length%20%3E%20formatted.length%3B%0A%20%20%20%20%20const%20isNowComplete%20%3D%20numbers.length%20%3D%3D%3D%208%3B%0A%20%20%20%20%20const%20wasPreviouslyComplete%20%3D%20hadCompleteInput%3B%0A%0A%20%20%20%20%20%2F%2F%20Update%20tracker%0A%20%20%20%20%20if%20(isNowComplete)%20%7B%0A%20%20%20%20%20%20%20hadCompleteInput%20%3D%20true%3B%0A%20%20%20%20%20%7D%0A%0A%20%20%20%20%20previousValue%20%3D%20formatted%3B%0A%0A%20%20%20%20%20%2F%2F%20Determine%20whether%20to%20run%20validation%0A%20%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20triggeredByBlur%20%7C%7C%20isNowComplete%20%7C%7C%20wasPreviouslyComplete%3B%0A%0A%20%20%20%20%20if%20(!shouldValidate)%20return%3B%0A%0A%20%20%20%20%20if%20(numbers.length%20%3C%208)%20%7B%0A%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%24('.birthday-text-error-main').text('Please%20enter%20a%20valid%20birthday%20MM%2FDD%2FYYYY').show()%3B%0A%20%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%2F%2F%20Parse%20date%20parts%0A%20%20%20%20%20const%20month%20%3D%20parseInt(numbers.substring(0%2C%202)%2C%2010)%3B%0A%20%20%20%20%20const%20day%20%3D%20parseInt(numbers.substring(2%2C%204)%2C%2010)%3B%0A%20%20%20%20%20const%20year%20%3D%20parseInt(numbers.substring(4%2C%208)%2C%2010)%3B%0A%0A%20%20%20%20%20const%20isValidDate%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20const%20date%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%0A%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20date.getFullYear()%20%3D%3D%3D%20y%20%26%26%0A%20%20%20%20%20%20%20%20%20date.getMonth()%20%3D%3D%3D%20m%20-%201%20%26%26%0A%20%20%20%20%20%20%20%20%20date.getDate()%20%3D%3D%3D%20d%0A%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20const%20isWithinRange%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20const%20validYear%20%3D%20y%20%3E%3D%201900%20%26%26%20y%20%3C%3D%202025%3B%0A%20%20%20%20%20%20%20const%20inputDate%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%0A%20%20%20%20%20%20%20const%20today%20%3D%20new%20Date()%3B%0A%20%20%20%20%20%20%20today.setHours(0%2C%200%2C%200%2C%200)%3B%0A%20%20%20%20%20%20%20return%20validYear%20%26%26%20inputDate%20%3C%20today%3B%0A%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%2F%2F%20Final%20validation%0A%20%20%20%20%20if%20(isValidDate(month%2C%20day%2C%20year)%20%26%26%20isWithinRange(month%2C%20day%2C%20year))%20%7B%0A%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%24('.birthday-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%24('%23continue-question').removeClass('is-disabled')%3B%0A%0A%20%20%20%20%20%20%20console.log('Is%20Valid%20Birthdate'%2C%20isBirthdayValidMain)%3B%0A%0A%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%20%20%20%20%20%20%20%20%20const%20phone%20%3D%20%24('%5Bmain-phone%5D').val()%3B%0A%20%20%20%20%20%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber(phone))%3B%0A%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20if%20(isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%2F%2F%20ZIP%20logic%20if%20needed%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%24('.birthday-text-error-main').text('Please%20enter%20a%20valid%20birthday%20MM%2FDD%2FYYYY').show()%3B%0A%20%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20console.log('Is%20Invalid%20Birthdate')%3B%0A%20%20%20%20%20%7D%0A%0A%20%20%20%20%20validateFormMain()%3B%20%2F%2F%20Re-check%20form%0A%20%20%20%7D%0A%0A%20%20%20%2F%2F%20Trigger%20on%20input%0A%20%20%20%24input.on('input'%2C%20function%20()%20%7B%0A%20%20%20%20%20validateBirthdayInput(false)%3B%0A%20%20%20%7D)%3B%0A%0A%20%20%20%2F%2F%20Trigger%20on%20blur%0A%20%20%20%24input.on('blur'%2C%20function%20()%20%7B%0A%20%20%20%20%20validateBirthdayInput(true)%3B%0A%20%20%20%7D)%3B%0A%20%20%20%2F%2FBirthdate%20Validation%0A%0A%0A%20%20%2F%2F%20Birthday%20formatting%20and%20validation%0A%20%20%2F*const%20%24input%20%3D%20%24('%23birthday-input-main')%3B%0A%20%20%24input.on('input'%2C%20function%20(e)%20%7B%0A%20%20%0A%20%20%20%20let%20raw%20%3D%20%24(this).val()%3B%0A%20%20%20%20let%20numbers%20%3D%20raw.replace(%2F%5CD%2Fg%2C%20'').substring(0%2C%208)%3B%0A%20%20%20%20let%20formatted%20%3D%20''%3B%0A%0A%20%20%20%20if%20(numbers.length%20%3E%3D%201)%20formatted%20%2B%3D%20numbers.substring(0%2C%202)%3B%0A%20%20%20%20if%20(numbers.length%20%3E%3D%203)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(2%2C%204)%3B%0A%20%20%20%20if%20(numbers.length%20%3E%3D%205)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(4%2C%208)%3B%0A%0A%20%20%20%20if%20(raw%20!%3D%3D%20formatted)%20%7B%0A%20%20%20%20%20%20%24(this).val(formatted)%3B%0A%20%20%20%20%20%20this.setSelectionRange(formatted.length%2C%20formatted.length)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20if%20(numbers.length%20%3C%208)%20%7B%0A%20%20%20%20%20%20%24('.birthday-text-error').show()%3B%0A%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20const%20month%20%3D%20parseInt(numbers.substring(0%2C%202)%2C%2010)%3B%0A%20%20%20%20%20%20const%20day%20%3D%20parseInt(numbers.substring(2%2C%204)%2C%2010)%3B%0A%20%20%20%20%20%20const%20year%20%3D%20parseInt(numbers.substring(4%2C%208)%2C%2010)%3B%0A%0A%20%20%20%20%20%20const%20isValidDate%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20date%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20date.getFullYear()%20%3D%3D%3D%20y%20%26%26%0A%20%20%20%20%20%20%20%20%20%20date.getMonth()%20%3D%3D%3D%20m%20-%201%20%26%26%0A%20%20%20%20%20%20%20%20%20%20date.getDate()%20%3D%3D%3D%20d%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20const%20isWithinRange%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20isValidDate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20m%20%3E%3D%201%20%26%26%20m%20%3C%3D%2012%20%26%26%20d%20%3E%3D%201%20%26%26%20d%20%3C%3D%2031%20%26%26%20y%20%3E%3D%201900%20%26%26%20y%20%3C%3D%202025%3B%0A%0A%20%20%20%20%20%20%20%20if%20(!isValidDate)%20return%20false%3B%0A%0A%20%20%20%20%20%20%20%20const%20inputDate%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%20%2F%2F%20JS%20months%20are%200-based%0A%20%20%20%20%20%20%20%20const%20today%20%3D%20new%20Date()%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Remove%20time%20from%20today's%20date%20to%20compare%20only%20the%20date%20portion%0A%20%20%20%20%20%20%20%20today.setHours(0%2C%200%2C%200%2C%200)%3B%0A%0A%20%20%20%20%20%20%20%20return%20inputDate%20%3C%20today%3B%20%2F%2F%20must%20be%20strictly%20before%20today%0A%20%20%20%20%20%20%7D%3B%0A%0A%0A%20%20%20%20%20%20console.log(isValidDate)%3B%0A%20%20%20%20%20%20console.log(isWithinRange)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20if%20(isWithinRange(month%2C%20day%2C%20year)%20%26%26%20isValidDate(month%2C%20day%2C%20year))%20%7B%0A%20%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%24('.birthday-text-error-main').hide()%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20%24('.next-dob-btn').removeClass('v3')%3B%0A%20%20%20%20%20%20%20%20console.log('Is%20Valid%20Birthdate')%3B%0A%20%20%20%20%20%20%20%20%24('%23continue-question').removeClass('is-disabled')%3B%0A%0A%20%20%20%20%20%20%20%20if%20(isZipValidMain)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%24('%23continue-question').removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20isBirthdayValidMain%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20console.log('Is%20Invalid%20Birthdate')%3B%0A%20%20%20%20%20%20%20%20%24('.birthday-text-error-main').text('Please%20enter%20a%20valid%20birthday%20MM%2FDD%2FYYYY').show()%3B%0A%20%20%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%0A%20%20%20validateFormMain()%3B%20%2F%2F%20Re-check%20all%20fields%20after%20DOB%20update%0A%20%20%7D)%3B*%2F%0A%20%20%0A%20%20%24('.bg-dim').click(function()%7B%0A%20%20%09%24('.article-questions-wrapper').removeClass('is-active')%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%0A%7D)%3B%0A%20%20%0A%7D)%3B%0A%3C%2Fscript%3E"
                                  />
                                ) : null}
                                <_Builtin.FormTextInput
                                  className={_utils.cx(
                                    _styles,
                                    "zip-input",
                                    "custom1",
                                    "margin-bottom-10"
                                  )}
                                  name="Birthday"
                                  maxLength="10"
                                  data-name="Birthday"
                                  placeholder="Your Birthday"
                                  disabled={false}
                                  type="text"
                                  required={false}
                                  autoFocus={false}
                                  autoComplete="off"
                                  inputMode="numeric"
                                  id="birthday-input-main"
                                />
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "birthday-text-error-main"
                                  )}
                                  tag="div"
                                >
                                  {"Please enter a valid birthday MM/DD/YYYY"}
                                </_Builtin.Block>
                                <_Builtin.HtmlEmbed
                                  className={_utils.cx(
                                    _styles,
                                    "form-validation-script"
                                  )}
                                  value="%3Cscript%3E%0Alet%20ip_addMain%20%3D%20''%3B%0Alet%20hubspotErrorMain%20%3D%20false%3B%0Alet%20contact_id_main%20%3D%20''%3B%0A%0Afunction%20submitFormMain(location%2C%20email)%7B%0A%0A%20%20%2F%2Flet%20apiUrl%20%3D%20'https%3A%2F%2Fx8ki-letl-twmt.n7.xano.io%2Fapi%3AHM44bvE3%2Ftpp_leads'%3B%20%2F%2F%20Test%20API%20URL%0A%20%20let%20apiUrl%20%3D%20'https%3A%2F%2Fx8ki-letl-twmt.n7.xano.io%2Fapi%3AHM44bvE3%2Ftpp_leads_send_to_hubspot'%3B%0A%20%20%0A%20%20if(hubspotErrorMain)%7B%0A%20%20%09apiUrl%20%3D%20'https%3A%2F%2Fx8ki-letl-twmt.n7.xano.io%2Fapi%3AHM44bvE3%2Ftpp_leads_send_to_hubspot_update'%3B%0A%20%20%7D%0A%20%20%0A%20%20const%20apiKey%20%3D%20'bqlq2wZ2Pb0n0P7R0IiIRRXYlffbHZ7_tYfbhsNJE3ls0LCDWuSZgNwftEFNrArtV5t98EGfai2XYrtFy3bGC3ihJWVQQfYh7OCWkmjBX9ayA4Qfv4nWe_kVa_9oALEpDitLTtG_bvU3y6C1fdE7nYi1Osv7manzc3Ah7s2SMXI'%3B%20%2F%2F%20Test%20API%20Key%0A%20%20%0A%20%20const%20url%20%3D%20window.location.href%3B%0A%20%20%2F%2F%20Create%20a%20URL%20object%0A%20%20%20%20const%20urlParams%20%3D%20new%20URLSearchParams(new%20URL(url).search)%3B%0A%20%20%20%20const%20urlParam%20%3D%20new%20URLSearchParams(new%20URL(url).search)%3B%0A%20%20%0A%20%20%2F%2F%20Extract%20parameters%0A%20%20const%20ls_agerange%20%3D%20urlParam.get('ls_agerange')%3B%20%2F%2F%20Fix%3A%20use%20%60urlParam%60%0A%20%20const%20ls_gender%20%3D%20urlParam.get('ls_gender')%3B%0A%20%20const%20ls_policysize%20%3D%20urlParam.get('ls_policysize')%3B%0A%20%20let%20policy_size%20%3D%20ls_policysize%3B%0A%20%20const%20utm_source_data%20%3D%20urlParam.get('utm_source')%3B%0A%20%20%0A%20%20%2F%2F%20Extract%20UTM%20parameters%0A%20%20const%20utm_source%20%3D%20urlParams.get('utm_source')%20%7C%7C%20''%3B%0A%20%20const%20utm_campaign%20%3D%20urlParams.get('utm_campaign')%20%7C%7C%20''%3B%0A%20%20const%20utm_medium%20%3D%20urlParams.get('utm_medium')%20%7C%7C%20''%3B%0A%20%20const%20utm_creative%20%3D%20urlParams.get('utm_creative')%20%7C%7C%20''%3B%0A%20%20const%20utm_adset%20%3D%20urlParams.get('utm_adset')%20%7C%7C%20''%3B%0A%20%20const%20utm_placement%20%3D%20urlParams.get('utm_placement')%20%7C%7C%20urlParams.get('placement')%20%7C%7C%20''%3B%0A%20%20const%20utm_id%20%3D%20urlParams.get('utm_id')%20%7C%7C%20''%3B%0A%20%20const%20utm_content%20%3D%20urlParams.get('utm_content')%20%7C%7C%20''%3B%0A%20%20const%20utm_term%20%3D%20urlParams.get('utm_term')%20%7C%7C%20''%3B%0A%20%20const%20fbclid%20%20%3D%20urlParams.get('fbclid')%20%7C%7C%20''%3B%0A%20%20%0A%20%20const%20dobInput%20%3D%20%24('%23birthday-input-main').val()%3B%20%2F%2F%20Example%3A%20%2201%2F01%2F1990%22%20or%20%2201-01-1990%22%0A%20%20const%20parsedDate%20%3D%20new%20Date(dobInput)%3B%0A%20%20const%20yyyy%20%3D%20parsedDate.getFullYear()%3B%0A%20%20const%20mm%20%3D%20String(parsedDate.getMonth()%20%2B%201).padStart(2%2C%20'0')%3B%20%2F%2F%20Months%20are%200-indexed%0A%20%20const%20dd%20%3D%20String(parsedDate.getDate()).padStart(2%2C%20'0')%3B%0A%20%20let%20phone%20%3D%20''%3B%0A%20%20%0A%20%20try%20%7B%0A%20%20%20%20phone%20%3D%20%24('%5Bmain-phone%5D').val().replace(%2F%5CD%2Fg%2C%20'')%3B%0A%20%20%7D%20catch(err)%7B%7D%0A%0A%20%20const%20formattedDate%20%3D%20%60%24%7Byyyy%7D-%24%7Bmm%7D-%24%7Bdd%7D%60%3B%0A%20%20console.log(formattedDate)%3B%20%2F%2F%20%221990-01-01%22%0A%20%20%0A%20%20%2F%2FCalculate%20Dates%0A%20%20let%20dobStr%20%3D%20formattedDate%3B%20%2F%2F%20YYYY-MM-DD%0A%20%20let%20medicareDates%20%3D%20calculateMedicareDates(dobStr)%3B%0A%20%20console.log(%22Beginning%20of%20IEP%3A%22%2C%20medicareDates.beginningOfIEP)%3B%0A%20%20console.log(%22Earliest%20Coverage%20Date%3A%22%2C%20medicareDates.earliestCoverageDate)%3B%0A%20%20console.log(%22Enrollment%20Window%20Closes%3A%22%2C%20medicareDates.enrollmentWindowCloses)%3B%0A%20%20%2F%2FCalculate%20Dates%0A%20%20%0A%09%0A%20%20const%20postDataLead%20%3D%20%7B%0A%20%20%09contactID%3A%20contact_id_main%2C%0A%20%20%20%20email%3A%20email%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20phone%3A%20phone%2C%0A%20%20%20%20zipcode%3A%20%24('%23zip-input-main').val()%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20DOB%3A%20%24('%23birthday-input-main').val()%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20dob%3A%20formattedDate%2C%0A%20%20%20%20submit_location%3A%20location%2C%0A%20%20%20%20ip_address%3A%20ip_addMain%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20%2F%2Froot_url%3A%20window.location.origin%20%2B%20window.location.pathname%2C%20%2F%2F%20Capture%20root%20URL%20(domain%20%2B%20path)%0A%20%20%20%20root_url%3A%20window.location.href%2C%0A%20%20%20%20utm_source%3A%20utm_source%2C%0A%20%20%20%20utm_campaign%3A%20utm_campaign%2C%0A%20%20%20%20utm_medium%3A%20utm_medium%2C%0A%20%20%20%20utm_creative%3A%20utm_creative%2C%0A%20%20%20%20utm_adset%3A%20utm_adset%2C%0A%20%20%20%20utm_placement%3A%20utm_placement%2C%0A%20%20%20%20utm_id%3A%20utm_id%2C%0A%20%20%09utm_content%3A%20utm_content%2C%0A%20%20%20%20utm_term%3A%20utm_term%2C%0A%20%20%20%20fbclid%3A%20fbclid%2C%0A%20%20%20%20policy_userinput%3A%20ls_policysize%2C%0A%20%20%20%20beginning_of_iep%3A%20medicareDates.beginningOfIEP%2C%20%2F%2FBeginning%20of%20IEP%0A%20%20%20%20earliest_coverage_date%3A%20medicareDates.earliestCoverageDate%2C%20%2F%2FEarliest%20Coverage%20Date%0A%20%20%20%20enrollment_window_closes%3A%20medicareDates.enrollmentWindowCloses%2C%20%2F%2FEnrollment%20Window%20Closes%0A%20%20%7D%3B%0A%20%20%0A%20%20%20console.log(postDataLead)%3B%0A%0A%20%20fetch(apiUrl%2C%20%7B%0A%20%20%20%20method%3A%20'POST'%2C%0A%20%20%20%20headers%3A%20%7B%0A%20%20%20%20%20%20'Content-Type'%3A%20'application%2Fjson'%2C%0A%20%20%20%20%20%20'Authorization'%3A%20%60%24%7BapiKey%7D%60%0A%20%20%20%20%7D%2C%0A%20%20%20%20body%3A%20JSON.stringify(postDataLead)%0A%20%20%7D)%0A%20%20%20%20.then(response%20%3D%3E%20%7B%0A%20%20%20%20if%20(!response.ok)%20%7B%0A%20%20%20%20%20%20throw%20new%20Error(%60HTTP%20error!%20Status%3A%20%24%7Bresponse.status%7D%60)%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20response.json()%3B%0A%20%20%7D)%0A%20%20%20%20.then(data%20%3D%3E%20%7B%0A%20%20%20%20console.log('Success%3A%20Sent%20Data'%2C%20data)%3B%0A%20%20%20%20%0A%20%20%20%20%09%09%2F%2FCheck%20if%20existing%20id%0A%20%20%20%20%20%20%20%20let%20existingId%20%3D%20null%3B%0A%0A%20%20%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20%20%20data.tpp_.response.result%20%26%26%0A%20%20%20%20%20%20%20%20%20%20data.tpp_.response.result.status%20%3D%3D%3D%20%22error%22%20%26%26%0A%20%20%20%20%20%20%20%20%20%20data.tpp_.response.result.message.includes(%22Existing%20ID%3A%22)%0A%20%20%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20existingId%20%3D%20data.tpp_.response.result.message.split(%22Existing%20ID%3A%22)%5B1%5D.trim()%3B%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20if(existingId)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20hubspotErrorMain%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20contact_id_main%20%3D%20existingId%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20submitFormMain(location%2C%20email)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20console.log(existingId)%3B%20%2F%2F%20%E2%9E%9D%20%22170457770712%22%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%2F%2FCheck%20if%20existing%20id%0A%20%20%20%20%0A%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20window.scrollTo(0%2C%200)%3B%0A%20%20%20%20%7D%2C%202000)%3B%0A%20%20%20%20window.scrollTo(%7B%0A%20%20%20%20%20%20top%3A%200%2C%0A%20%20%20%20%20%20behavior%3A%20'auto'%20%2F%2F%20Instantly%20scroll%20to%20the%20top.%20Use%20'smooth'%20for%20smooth%20scrolling.%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%7D)%0A%20%20%20%20.catch(error%20%3D%3E%20%7B%0A%20%20%20%20console.error('Error%3A'%2C%20error)%3B%0A%0A%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20window.scrollTo(0%2C%200)%3B%0A%20%20%20%20%7D%2C%202000)%3B%0A%20%20%20%20window.scrollTo(%7B%0A%20%20%20%20%20%20top%3A%200%2C%0A%20%20%20%20%20%20behavior%3A%20'auto'%20%2F%2F%20Instantly%20scroll%20to%20the%20top.%20Use%20'smooth'%20for%20smooth%20scrolling.%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%7D)%3B%0A%0A%7D%0A%0A%0A%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%09const%20apiUrl%20%3D%20'https%3A%2F%2Fapi.seeip.org%2Fgeoip'%3B%0A%0A%20%20fetch(apiUrl)%0A%20%20%20%20.then(response%20%3D%3E%20%7B%0A%20%20%20%20if%20(!response.ok)%20%7B%0A%20%20%20%20%20%20throw%20new%20Error('Network%20response%20was%20not%20ok')%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20response.json()%3B%0A%20%20%7D)%0A%20%20%20%20.then(data%20%3D%3E%20%7B%0A%20%20%20%0A%20%20%20%20console.log(data)%3B%0A%20%20%20%20%0A%20%20%20%20ip_addMain%20%3D%20data.ip%3B%0A%20%20%20%20%2F*postal_code%20%3D%20data.postal_code%3B%0A%20%20%20%20city%20%3D%20data.city.replaceAll('%20'%2C'').toLowerCase()%3B%0A%20%20%20%20region_iso%20%3D%20data.region_code.replaceAll('%20'%2C'').toLowerCase()%3B%0A%20%20%20%20country%20%3D%20data.country_code.replaceAll('%20'%2C'').toLowerCase()%3B%0A%20%20%20%20state_region%20%3D%20data.region.replaceAll('%20'%2C'').toLowerCase()%3B*%2F%0A%0A%20%20%7D)%0A%20%20%20%20.catch(error%20%3D%3E%20%7B%0A%20%20%20%20console.error(error)%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%0A%7D)%3B%0A%3C%2Fscript%3E"
                                />
                                <_Builtin.FormTextInput
                                  className={_utils.cx(
                                    _styles,
                                    "zip-input",
                                    "custom1",
                                    "margin-bottom-10"
                                  )}
                                  name="Email"
                                  maxLength={256}
                                  data-name="Email"
                                  placeholder="Your Email"
                                  disabled={false}
                                  type="email"
                                  required={true}
                                  autoFocus={false}
                                  autoComplete="off"
                                  id="email-input-main"
                                />
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "email-text-error-main"
                                  )}
                                  tag="div"
                                >
                                  {
                                    "Please enter a valid email address (e.g., name@example.com)."
                                  }
                                </_Builtin.Block>
                                {phoneNumberVisibility ? (
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "phone-number-wrapper"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed value="%3Cinput%20main-phone%20id%3D%22phone%22%20class%3D%22zip-input%20custom1%20margin-bottom-10%20phone-number%22%20name%3D%22Phone%20Number%22%20data-name%3D%22phone_number%22%20placeholder%3D%22e.g.%2C%20(312)%20555-1212%20(optional)%22%20inputmode%3D%22decimal%22%20onInput%3D%22this.value%20%3D%20phoneFormat(this.value)%22%20style%3D%22width%3A%20100%25%3B%22%20pattern%3D%22%5E%5C(%3F%5Cd%7B3%7D%5C)%3F%5B-.%5Cs%5D%3F%5Cd%7B3%7D%5B-.%5Cs%5D%3F%5Cd%7B4%7D%24%22%20title%3D%22Enter%20a%20valid%20phone%20number%20(e.g.%2C%20123-456-7890)%22%2F%3E" />
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "error-input-msg",
                                        "phone-msg"
                                      )}
                                      tag="div"
                                      main-phone-error=""
                                    >
                                      {phoneErrorText}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                ) : null}
                                <CalculateMedicareDatesScript />
                              </_Builtin.Block>
                              <_Builtin.HtmlEmbed
                                className={_utils.cx(
                                  _styles,
                                  "input-validation-script"
                                )}
                                value="%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%09%2F*%24('%23continue-question').click(function()%7B%0A%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20event%3A%20'quiz_answer'%2C%0A%20%20%20%20%20%20%20%20step%3A%20'2'%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%09%7D)%3B*%2F%0A%20%20%0A%7D)%3B%0A%3C%2Fscript%3E"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "article-ans-wrapper"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "screener-input-wrapper",
                                  "full-width",
                                  "margin-top-0"
                                )}
                                tag="div"
                              >
                                <_Builtin.FormButton
                                  className={_utils.cx(
                                    _styles,
                                    "button",
                                    "nav-btn",
                                    "phone-number",
                                    "v5",
                                    "text-weight-semi-bold",
                                    "is-disabled",
                                    "w-node-fe72d218-eeaa-8982-d7f4-8b224e6803cd-4e68030d"
                                  )}
                                  id={_utils.cx(_styles, "submit-btn-main")}
                                  type="submit"
                                  value="Get My Calendar Reminder"
                                  data-wait="Please wait..."
                                />
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.FormForm>
                        <_Builtin.FormSuccessMessage
                          className={_utils.cx(_styles, "article-success-msg")}
                        >
                          <_Builtin.RichText
                            className={_utils.cx(
                              _styles,
                              "article-question-richtext"
                            )}
                            tag="div"
                            slot=""
                          >
                            <_Builtin.Paragraph>
                              {"Thanks! We'll be reaching out to you shortly."}
                            </_Builtin.Paragraph>
                          </_Builtin.RichText>
                        </_Builtin.FormSuccessMessage>
                        <_Builtin.FormErrorMessage>
                          <_Builtin.Block tag="div">
                            {
                              "Oops! Something went wrong while submitting the form."
                            }
                          </_Builtin.Block>
                        </_Builtin.FormErrorMessage>
                      </_Builtin.FormWrapper>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Section>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-form")}
        data-w-id="fe72d218-eeaa-8982-d7f4-8b224e6803d5"
        grid={{
          type: "section",
        }}
        tag="div"
        id="form2"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-1196")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "padding-section-custom8",
              "padding-bottom-1"
            )}
            tag="div"
          >
            <_Builtin.Section
              className={_utils.cx(_styles, "section-content")}
              grid={{
                type: "section",
              }}
              tag="section"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "padding-global", "custom1")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "container-1200")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "padding-section-custom13")}
                    tag="div"
                  >
                    <_Builtin.RichText
                      className={_utils.cx(
                        _styles,
                        "article-headers-2",
                        "margin-bottom-33"
                      )}
                      tag="div"
                      slot=""
                    >
                      <_Builtin.Heading tag="h1">
                        {"Why I Would Never Get a Medicare Advantage Plan"}
                      </_Builtin.Heading>
                      <_Builtin.Heading tag="h2">
                        {"And Recommend Medigap Instead"}
                      </_Builtin.Heading>
                    </_Builtin.RichText>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "author-wrapper",
                        "align-center"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "article-logo-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "img-full-width")}
                          loading="lazy"
                          width="auto"
                          height="auto"
                          alt=""
                          src="https://cdn.prod.website-files.com/660d27533c9c61d241f50da3/67518da8207f31df29f4fad6_image%206.png"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-size-18",
                            "custom-line-height-1"
                          )}
                          tag="div"
                        >
                          {"Jarret DiToro"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-size-18",
                            "custom-line-height-1"
                          )}
                          tag="div"
                        >
                          <_Builtin.Span
                            className={_utils.cx(_styles, "dynamic-date")}
                            id="dynamic-date"
                          >
                            {"MMMM dd, YYYY"}
                          </_Builtin.Span>
                          {" - 4 minute read"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-cover-img-wrapper",
                        "border-radius-0"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(
                          _styles,
                          "img-full-width",
                          "cover"
                        )}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://cdn.prod.website-files.com/660d27533c9c61d241f50da3/680ebce215e15addeb5922b0_imageedit_1_8273449850.png"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-inline-main-wrapper"
                      )}
                      data-w-id="fe72d218-eeaa-8982-d7f4-8b224e6803fa"
                      tag="div"
                    >
                      <_Builtin.RichText
                        className={_utils.cx(_styles, "article-richtext")}
                        tag="div"
                        slot=""
                      >
                        <_Builtin.Paragraph>
                          {
                            "There are so many companies selling Medicare Advantage that it's very easy to fall for the pitch. Add in the fact that Medicare Advantage plans cost $0 per month and include prescription drug plans at no extra cost, and it seems like a good move right?"
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "So why do most honest Medicare experts tell their clients to avoid them at all cost? Even if it means they make fewer sales and less money?"
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            'It\'s simple. Medicare Advantage plans are worse health insurance. They restrict your access to doctors, charge you more money over time through copays and deductibles, and even introduce the risk of you not being covered if you get admitted to an "out of network" hospital.'
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            'But perhaps worst of all, if you get sold a Medicare Advantage plan during your 6-month "new to Medicare" enrollment period, '
                          }
                          <_Builtin.Strong>
                            {
                              "you miss the window of time when the Medigap companies must by law offer you favorable pricing, and can't by law reject you from a Medigap plan."
                            }
                          </_Builtin.Strong>
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "So you could get stuck for life in an inferior coverage plan. This could be so harmful down the line when you need top notch health care that it borders on agent malpractice in our opinion."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h3">
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "Medicare Advantage plans save money by negotiating discounts with doctors and hospitals. But that means they don't include all doctors or hospitals in their networks. Some plans try to wow you with shiny benefits like $0 premiums, but if you can't see the doctor you want, what's the value of health insurance?"
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "Medigap plans include every doctor and hospital that accepts Medicare, which is around 99% of all doctors and hospitals in the USA."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h3">
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "If you have a critical diagnosis, you need to see specialists right away. "
                          }
                          <_Builtin.Strong>
                            {"Days could matter."}
                          </_Builtin.Strong>
                          {
                            " But most Medicare Advantage plans require a referral from a primary care physician before you can get to the specialist. Making matters worse, the limited number of specialists in network could have scheduling delays."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {"With Medigap, "}
                          <_Builtin.Strong>
                            {"you can go directly to a specialist"}
                          </_Builtin.Strong>
                          {
                            ", and you have access to basically all of them, so it will be easier to find one with an immediate opening."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h3">
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "At first glance, $0 monthly payments look good. But nothing is free in life, and Medicare is no different. Instead of charging you monthly premiums, Medicare Advantage plans charge you down the line. Every time you go to a doctor, there is a copay. And before the plan pays a penny, you generally have to pay the first few thousand in cost per year."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h3">
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "By law, insurers must offer everyone who is new to Medicare the same pricing and access to Medigap plans. The insurance companies would rather screen by health and then either deny or charge more based on that screen. They aren't allowed to, but ONLY during the first 6-month enrollment window when you're new to Medicare. Once in, you're safe, and they can't kick you out, no matter what happens to your health or how costly you become. But if you miss this window, you could get locked out for life."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "If down the line you decide you want to switch to Medicare Advantage after really learning the Medicare system, you always can. But if you take Medicare Advantage first, you can't come back to Medigap without risking being denied or paying far far more than you could have."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h3">
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "The best advice we can give you really depends on if you're new to Medicare or if you already have Medicare and a plan. Then, if you do already have a plan, it depends on if you're already in Med Supp or Med Advantage. If you already have a Med Supp plan, its likely you shouldn't change anything."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          <_Builtin.Strong>
                            {
                              "So we can point you in the right direction, what best describes where you are now?"
                            }
                          </_Builtin.Strong>
                        </_Builtin.Paragraph>
                      </_Builtin.RichText>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-inline-questions-wrapper"
                      )}
                      data-w-id="fe72d218-eeaa-8982-d7f4-8b224e680456"
                      tag="div"
                    >
                      <_Builtin.RichText
                        className={_utils.cx(_styles, "article-richtext")}
                        tag="div"
                        slot=""
                      >
                        <_Builtin.Heading tag="h3">
                          {"‍"}
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "By law, insurers must offer everyone who is new to Medicare the same pricing and access to Medigap plans. The insurance companies would rather screen by health and then either deny or charge more based on that screen. They aren't allowed to, but ONLY during the first 6-month enrollment window when you're new to Medicare. Once in, you're safe, and they can't kick you out, no matter what happens to your health or how costly you become. But if you miss this window, you could get locked out for life."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Paragraph>
                          {
                            "If down the line you decide you want to switch to Medicare Advantage after really learning the Medicare system, you always can. But if you take Medicare Advantage first, you can't come back to Medigap without risking being denied or paying far far more than you could have."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Heading tag="h3">
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Paragraph>
                          {
                            "The best advice we can give you really depends on if you're new to Medicare or if you already have Medicare and a plan. Then, if you do already have a plan, it depends on if you're already in Med Supp or Med Advantage. If you already have a Med Supp plan, its likely you shouldn't change anything. So we can point you in the right direction, what best describes where you are now?"
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.RichText>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-questions-wrapper",
                        "full-width"
                      )}
                      data-w-id="fe72d218-eeaa-8982-d7f4-8b224e680465"
                      tag="div"
                      id="flowStart"
                    >
                      <_Builtin.RichText
                        className={_utils.cx(
                          _styles,
                          "article-question-richtext"
                        )}
                        tag="div"
                        slot=""
                      >
                        <_Builtin.Heading tag="h3">
                          {"‍"}
                          <_Builtin.NotSupported _atom="InlineCode" />
                        </_Builtin.Heading>
                        <_Builtin.Heading tag="h6">
                          <_Builtin.Strong>
                            {
                              "To get started, can you tell us where you are in Medicare journey?"
                            }
                          </_Builtin.Strong>
                        </_Builtin.Heading>
                      </_Builtin.RichText>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "article-btn-wrapper")}
                        data-w-id="fe72d218-eeaa-8982-d7f4-8b224e68046e"
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(
                            _styles,
                            "input-validation-script"
                          )}
                          value="%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%09%24('%23new_to_medicare').click(function()%7B%0A%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20event%3A%20'article_end_click'%2C%0A%20%20%20%20%20%20%20%20selection%3A%20'new_to_medicare'%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%20%20%24('.bg-dim').show()%3B%0A%20%20%20%20%20%20%24('%23flow1').addClass('is-active')%3B%0A%20%20%20%20%20%20%0A%09%7D)%3B%0A%20%20%0A%20%20%24('%23have_medicare_noplan').click(function()%7B%0A%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20event%3A%20'article_end_click'%2C%0A%20%20%20%20%20%20selection%3A%20'have_medicare_noplan'%0A%20%20%20%20%7D%3B%0A%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%0A%20%20%20%20%24('.bg-dim').show()%3B%0A%20%20%20%20%24('%23flow1').addClass('is-active')%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%24('%23have_medicare_advantage').click(function()%7B%0A%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20event%3A%20'article_end_click'%2C%0A%20%20%20%20%20%20selection%3A%20'have_medicare_advantage'%0A%20%20%20%20%7D%3B%0A%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%0A%20%20%20%20%24('.bg-dim').show()%3B%0A%20%20%20%20%24('%23flow2').addClass('is-active')%3B%0A%20%20%7D)%3B%0A%0A%20%20%24('%23have_medicare_supplement').click(function()%7B%0A%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20event%3A%20'article_end_click'%2C%0A%20%20%20%20%20%20selection%3A%20'have_medicare_supplement'%0A%20%20%20%20%7D%3B%0A%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%0A%20%20%20%20%24('.bg-dim').show()%3B%0A%20%20%20%20%24('%23flow3').addClass('is-active')%3B%0A%20%20%7D)%3B%0A%20%20%0A%0A%7D)%3B%0A%3C%2Fscript%3E"
                        />
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "button",
                            "nav-btn",
                            "phone-number",
                            "v7"
                          )}
                          data-w-id="fe72d218-eeaa-8982-d7f4-8b224e680470"
                          button={false}
                          redirect="/ntm-screen-from-article"
                          id="have_medicare_noplan"
                          block="inline"
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block tag="div">
                            {
                              "I already have Medicare, but haven't enrolled in a plan"
                            }
                          </_Builtin.Block>
                        </_Builtin.Link>
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "button",
                            "nav-btn",
                            "phone-number",
                            "v7"
                          )}
                          data-w-id="fe72d218-eeaa-8982-d7f4-8b224e680473"
                          button={false}
                          redirect="/ntm-screen-from-article"
                          id="have_medicare_advantage"
                          block="inline"
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block tag="div">
                            {
                              "I already have Medicare and a Medicare Advantage plan"
                            }
                          </_Builtin.Block>
                        </_Builtin.Link>
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "button",
                            "nav-btn",
                            "phone-number",
                            "v7"
                          )}
                          data-w-id="fe72d218-eeaa-8982-d7f4-8b224e680476"
                          button={false}
                          id="have_medicare_supplement"
                          block="inline"
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block tag="div">
                            {"I already have Medicare and a Medigap plan"}
                          </_Builtin.Block>
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-anchor",
                        "custom-1"
                      )}
                      tag="div"
                      id="article-form"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "bg-dim")}
                      data-w-id="fe72d218-eeaa-8982-d7f4-8b224e68047a"
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-questions-wrapper"
                      )}
                      data-w-id="fe72d218-eeaa-8982-d7f4-8b224e68047b"
                      tag="div"
                      id="flow1"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "article-anchor",
                          "custom-3"
                        )}
                        tag="div"
                        id="question-form"
                      />
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "article-questions-1-wrapper"
                        )}
                        data-w-id="fe72d218-eeaa-8982-d7f4-8b224e68047d"
                        tag="div"
                      >
                        <_Builtin.RichText
                          className={_utils.cx(
                            _styles,
                            "article-question-richtext"
                          )}
                          tag="div"
                          slot=""
                        >
                          <_Builtin.Heading tag="h3">
                            {"‍"}
                            <_Builtin.NotSupported _atom="InlineCode" />
                          </_Builtin.Heading>
                          <_Builtin.Paragraph>
                            {
                              "Medicare is incredible health insurance when properly structured. If you answer a quick quiz, we can develop a personalized plan recommendation for you, together with an explanation for why."
                            }
                          </_Builtin.Paragraph>
                          <_Builtin.Heading tag="h3">
                            {"Question 1:"}
                          </_Builtin.Heading>
                          <_Builtin.Paragraph>
                            {"Select the statement that best describes you:"}
                          </_Builtin.Paragraph>
                        </_Builtin.RichText>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "article-ans-wrapper")}
                          tag="div"
                        >
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(
                              _styles,
                              "input-validation-script"
                            )}
                            value="%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%09%24('%23med_supp_fit').click(function()%7B%0A%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20event%3A%20'quiz_answer'%2C%0A%20%20%20%20%20%20%20%20selection%3A%20'med_supp_fit'%2C%0A%20%20%20%20%20%20%20%20step%3A%20'1'%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%09%7D)%3B%0A%20%20%0A%20%20%09%24('%23med_adv_fit').click(function()%7B%0A%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20event%3A%20'quiz_answer'%2C%0A%20%20%20%20%20%20%20%20selection%3A%20'med_adv_fit'%2C%0A%20%20%20%20%20%20%20%20step%3A%20'1'%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%09%7D)%3B%0A%0A%7D)%3B%0A%3C%2Fscript%3E"
                          />
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "button",
                              "nav-btn",
                              "phone-number",
                              "v7"
                            )}
                            data-w-id="fe72d218-eeaa-8982-d7f4-8b224e68048b"
                            button={false}
                            id="med_supp_fit"
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block tag="div">
                              {
                                "I'd rather pay $100-$200 per month but be able to see any doctor or specialist I want"
                              }
                            </_Builtin.Block>
                          </_Builtin.Link>
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "button",
                              "nav-btn",
                              "phone-number",
                              "v7"
                            )}
                            data-w-id="fe72d218-eeaa-8982-d7f4-8b224e68048e"
                            button={false}
                            id="med_adv_fit"
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block tag="div">
                              {
                                "I'd rather pay $0 per month but have a limited choice of doctors or hospitals I can go to."
                              }
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.FormWrapper
                        className={_utils.cx(
                          _styles,
                          "article-ans-form-wrapper"
                        )}
                        data-w-id="fe72d218-eeaa-8982-d7f4-8b224e680491"
                      >
                        <_Builtin.FormForm
                          className={_utils.cx(_styles, "article-ans-form")}
                          name="wf-form-Article-Medicare-Form"
                          data-name="Article Medicare Form"
                          method="get"
                          id="wf-form-Article-Medicare-Form"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "article-questions-wrapper"
                            )}
                            data-w-id="fe72d218-eeaa-8982-d7f4-8b224e680493"
                            tag="div"
                          >
                            <_Builtin.RichText
                              className={_utils.cx(
                                _styles,
                                "article-question-richtext"
                              )}
                              tag="div"
                              slot=""
                            >
                              <_Builtin.Heading tag="h3">
                                {"‍"}
                                <_Builtin.NotSupported _atom="InlineCode" />
                              </_Builtin.Heading>
                              <_Builtin.Paragraph>
                                {
                                  "Medicare is incredible health insurance when properly structured. If you answer a quick quiz, we can develop a personalized plan recommendation for you, together with an explanation for why."
                                }
                              </_Builtin.Paragraph>
                              <_Builtin.Heading tag="h3">
                                {"Question 2:"}
                              </_Builtin.Heading>
                              <_Builtin.Paragraph>
                                {
                                  "Great, now all we need to know to start crafting your plan is your "
                                }
                                <_Builtin.Strong>{"zip code "}</_Builtin.Strong>
                                {"and "}
                                <_Builtin.Strong>
                                  {"birth date."}
                                </_Builtin.Strong>
                              </_Builtin.Paragraph>
                            </_Builtin.RichText>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "article-ans-wrapper"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "screener-input-wrapper",
                                  "full-width"
                                )}
                                tag="div"
                              >
                                <_Builtin.FormTextInput
                                  className={_utils.cx(
                                    _styles,
                                    "zip-input",
                                    "custom1",
                                    "margin-bottom-10"
                                  )}
                                  name="Zip-Code"
                                  maxLength="5"
                                  data-name="Zip Code"
                                  placeholder="Zip Code"
                                  disabled={false}
                                  type="number"
                                  required={false}
                                  autoFocus={false}
                                  inputMode="numeric"
                                  max="99999"
                                  min="0"
                                  autoComplete="off"
                                  id="zip-input"
                                />
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "zip-text-error"
                                  )}
                                  tag="div"
                                >
                                  {"Please enter a valid 5 digit zip code."}
                                </_Builtin.Block>
                                <_Builtin.HtmlEmbed
                                  className={_utils.cx(
                                    _styles,
                                    "input-validation-script"
                                  )}
                                  value="%3Cscript%3E%0Afunction%20isValidUSPhoneNumber2(input)%20%7B%0A%20%20%20%20%2F%2F%20Remove%20all%20non-digit%20characters%0A%20%20%20%20try%20%7B%0A%20%20%20%20const%20digits%20%3D%20input.replace(%2F%5CD%2Fg%2C%20'')%3B%0A%0A%20%20%20%20%2F%2F%20Check%20for%20valid%2010-digit%20US%20number%20or%2011-digit%20with%20country%20code%20'1'%0A%20%20%20%20if%20(digits.length%20%3D%3D%3D%2010)%20%7B%0A%20%20%20%20%20%20%20%20return%20true%3B%20%2F%2F%20e.g.%205551234567%0A%20%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%7D%20else%20if%20(digits.length%20%3D%3D%3D%2011%20%26%26%20digits.startsWith('1'))%20%7B%0A%20%20%20%20%20%20%20%20return%20true%3B%20%2F%2F%20e.g.%2015551234567%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%0A%20%20%20%20%20%20if(%24('%5Bquestion-2-phone%5D').val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').text('Please%20enter%20a%20valid%2010%20digit%20phone%20number')%3B%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').show()%3B%0A%20%20%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%2C%20100)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%7D%20catch%20(error)%20%7B%20%7D%0A%0A%20%20%20%20return%20false%3B%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Cscript%3E%0Alet%20isZipValid%20%3D%20false%3B%0Alet%20isEmailValid%20%3D%20false%3B%0Alet%20isBirthdayValid%20%3D%20false%3B%0Alet%20submit_loc%20%3D%20'ntm_quiz'%3B%0A%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%20%20%24('%5Bquestion-2-phone%5D').on('input'%2C%20function()%7B%0A%20%20%20%20if(%24(this).val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20isPhoneEntered%20%3D%20true%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20isPhoneEntered%20%3D%20false%3B%0A%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%24(document).ready(function%20()%20%7B%0A%20%20const%20validZipRegex%20%3D%20%2F%5E%5Cd%7B5%7D%24%2F%3B%0A%20%20const%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%0A%20%20%2F%2F%20Declare%20state%20variables%0A%20%20let%20isZipValid%20%3D%20false%3B%0A%20%20let%20isEmailValid%20%3D%20false%3B%0A%20%20let%20isBirthdayValid%20%3D%20false%3B%0A%20%20%0A%20%20%24('.email-text-error').hide()%3B%0A%0A%20%20function%20validateForm()%20%7B%0A%20%20%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20const%20zipCode%20%3D%20%24('%23zip-input').val().trim()%3B%0A%20%20%20%20%20%20const%20email%20%3D%20%24('%23email-input').val().trim()%3B%0A%20%20%20%20%20%20const%20birthday%20%3D%20%24('%23birthday-input').val().trim()%3B%0A%0A%20%20%20%20%20%20%2F%2F%20ZIP%20Validation%0A%20%20%20%20%20%20if%20(validZipRegex.test(zipCode))%20%7B%0A%20%20%20%20%20%20%20%20%24('.zip-text-error').hide()%3B%0A%20%20%20%20%20%20%20%20isZipValid%20%3D%20true%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('.zip-text-error').text('Please%20enter%20a%20valid%205%20digit%20zip%20code.').show()%3B%0A%20%20%20%20%20%20%20%20isZipValid%20%3D%20false%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%2F%2F%20Email%20Validation%0A%20%20%20%20%20%20%2F*if%20(emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%24('.email-text-error').hide()%3B%0A%20%20%20%20%20%20isEmailValid%20%3D%20true%3B%0A%20%20%20%20%7D%20else%20%7B%0A%0A%20%20%20%20%09if(%24('%23email-input').val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20%20%20%24('.email-text-error').text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).').show()%3B%0A%20%20%20%20%20%20%20%20isEmailValid%20%3D%20false%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%7D*%2F%0A%0A%20%20%20%20%20%20const%20emailParts%20%3D%20email.split('%40')%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Trigger%20validation%20only%20if%20the%20email%20seems%20complete%20(ends%20with%20a%20dot%20or%20has%20full%20format)%0A%20%20%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20email.includes('%40')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20emailParts.length%20%3D%3D%3D%202%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20emailParts%5B1%5D.includes('.')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20(email.endsWith('.')%20%7C%7C%20%2F%5E%5B%5E%40%5D%2B%40%5B%5E%40%5D%2B%5C.%5B%5E%40%5D%2B%24%2F.test(email))%3B%0A%0A%20%20%20%20%20%20if%20(shouldValidate)%20%7B%0A%20%20%20%20%20%20%20%20const%20domainPart%20%3D%20emailParts%5B1%5D.trim()%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Basic%20domain%20validation%20(e.g.%2C%20example.com)%0A%20%20%20%20%20%20%20%20const%20domainRegex%20%3D%20%2F%5E%5Ba-zA-Z0-9.-%5D%2B%5C.%5Ba-zA-Z%5D%7B2%2C%7D%24%2F%3B%0A%0A%20%20%20%20%20%20%20%20if%20(emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('.email-text-error').hide()%3B%0A%20%20%20%20%20%20%20%20%20%20isEmailValid%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('.email-text-error')%0A%20%20%20%20%20%20%20%20%20%20%20%20.text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).')%0A%20%20%20%20%20%20%20%20%20%20%20%20.show()%3B%0A%20%20%20%20%20%20%20%20%20%20isEmailValid%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('.email-text-error').hide()%3B%0A%20%20%20%20%20%20%20%20isEmailValid%20%3D%20false%3B%0A%20%20%20%20%20%20%7D%0A%0A%0A%20%20%20%20%20%20%2F%2F%20Birthday%20Validation%0A%20%20%20%20%20%20%2F*if%20(birthday.length%20%3D%3D%3D%2010)%20%7B%20%2F%2F%20Format%3A%20MM%2FDD%2FYYYY%0A%20%20%20%20%20%20%2F%2FisBirthdayValid%20%3D%20true%3B%0A%20%20%20%20%20%20%24('.birthday-text-error').hide()%3B%0A%20%20%20%20%20%20%2F%2F%24('%23continue-question').removeClass('is-disabled')%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%24('.birthday-text-error').text('Please%20enter%20your%20valid%20birthday.').show()%3B%0A%20%20%20%20%20%20%2F%2FisBirthdayValid%20%3D%20false%3B%0A%20%20%20%20%20%20%2F%2F%24('%23continue-question').addClass('is-disabled')%3B%0A%20%20%20%20%7D*%2F%0A%20%20%20%20%0A%20%20%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%0A%20%20%20%20%20%20%20%20const%20phone%20%3D%20%24('%5Bquestion-2-phone%5D').val()%3B%0A%20%20%20%20%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber2(phone))%3B%0A%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%2F%2F%20Toggle%20submit%20button%0A%20%20%20%20%20%20if%20(isZipValid%20%26%26%20isEmailValid%20%26%26%20isBirthdayValid)%20%7B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%7D%20catch(err)%7B%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%0A%20%20%2F%2F%20Input%20validation%20triggers%0A%20%20%24('%23zip-input%2C%20%23birthday-input').on('input%20change'%2C%20function%20()%20%7B%0A%20%20%20%20let%20zipCode%20%3D%20%24('%23zip-input').val().replace(%2F%5B%5E%5Cd%5D%2Fg%2C%20'').slice(0%2C%205)%3B%0A%20%20%20%20%24('%23zip-input').val(zipCode)%3B%0A%20%20%20%20validateForm()%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%20%24('%23email-input').on('input'%2C%20function%20()%20%7B%0A%20%20%20%20%20let%20zipCode%20%3D%20%24('%23zip-input').val().replace(%2F%5B%5E%5Cd%5D%2Fg%2C%20'').slice(0%2C%205)%3B%0A%20%20%20%20%20%24('%23zip-input').val(zipCode)%3B%0A%20%20%20%20%20validateForm()%3B%0A%20%20%20%7D)%3B%0A%20%20%20%0A%20%20%20%0A%20%20%20%24('%23email-input').on('blur'%2C%20function%20()%20%7B%0A%20%20%20%20%20const%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%20%20%20%20%20if%20(emailRegex.test(%24(this).val()))%20%7B%0A%20%20%20%20%20%20%20%24('.email-text-error').hide()%3B%0A%20%20%20%20%20%20%20isEmailValid%20%3D%20true%3B%0A%20%20%20%20%20%20%20validateForm()%3B%0A%20%20%20%20%20%7D%20else%20%7B%0A%0A%20%20%20%20%20%20%20if(%24('%23email-input').val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20%20%20%20%24('.email-text-error').text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).').show()%3B%0A%20%20%20%20%20%20%20%20%20isEmailValid%20%3D%20false%3B%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%7D%0A%20%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Prevent%20Enter%20key%20on%20inputs%0A%20%20%24('%23zip-input%2C%20%23email-input%2C%20%23birthday-input').on('keypress'%2C%20function%20(e)%20%7B%0A%20%20%20%20if%20(e.which%20%3D%3D%3D%2013)%20e.preventDefault()%3B%0A%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Prevent%20Enter%20key%20globally%20on%20form%0A%20%20const%20calculatorForm%20%3D%20document.getElementById(%22wf-form-NTM-Screen-Form%22)%3B%0A%20%20if%20(calculatorForm)%20%7B%0A%20%20%20%20calculatorForm.addEventListener(%22keydown%22%2C%20function%20(event)%20%7B%0A%20%20%20%20%20%20if%20(event.key%20%3D%3D%3D%20%22Enter%22)%20event.preventDefault()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20%2F%2F%20Form%20submit%20handler%0A%20%20%24('%23wf-form-Article-Medicare-Form').on('submit'%2C%20function%20(e)%20%7B%0A%20%20%20%20const%20zipCode%20%3D%20%24('%23zip-input').val().trim()%3B%0A%20%20%20%20const%20email%20%3D%20%24('%23email-input').val().trim()%3B%0A%20%20%20%20const%20birthday%20%3D%20%24('%23birthday-input').val().trim()%3B%0A%0A%20%20%20%20if%20(!validZipRegex.test(zipCode)%20%7C%7C%20!emailRegex.test(email)%20%7C%7C%20birthday.length%20!%3D%3D%2010)%20%7B%0A%20%20%20%20%20%20%2F%2Fe.preventDefault()%3B%0A%20%20%20%20%20%20validateForm()%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%2F%2F%20Call%20your%20form%20submission%20function%0A%20%20%20%20%20%20submitForm('ntm_quiz'%2C%20%24('%23email-input').val())%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20const%20offset%20%3D%20%24('%23article-form').offset().top%3B%0A%20%20%20%20%20%20%20%20%24('html%2C%20body').animate(%7B%0A%20%20%20%20%20%20%20%20%20%20scrollTop%3A%20offset%0A%20%20%20%20%20%20%20%20%7D%2C%201000)%3B%20%2F%2F%20Duration%20in%20milliseconds%0A%20%20%20%20%20%20%7D%2C%202800)%3B%0A%0A%20%20%20%20%20%20const%20urlParam%20%3D%20new%20URLSearchParams(new%20URL(window.location.href).search)%3B%0A%20%20%20%20%20%20const%20medicare%20%3D%20urlParam.get('medicare')%20%7C%7C%20''%3B%0A%0A%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20event%3A%20'email_submit'%2C%0A%20%20%20%20%20%20%20%20%2F%2Flocation%3A%20medicare%20%3D%3D%3D%20'over_65'%20%3F%20'O65_Working_Screener_Result'%20%3A%20'T65_Screener_Result'%2C%0A%20%20%20%20%20%20%20%20location%3A%20'ntm_quiz'%2C%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20submit_loc%20%3D%20'ntm_quiz'%3B%0A%0A%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20return%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%20%2F%2FBirthdate%20Validation%0A%20%20%20const%20%24input%20%3D%20%24('%23birthday-input')%3B%0A%20%20%20let%20previousValue%20%3D%20''%3B%0A%20%20%20let%20hadCompleteInput%20%3D%20false%3B%20%2F%2F%20Track%20if%20input%20was%20ever%20completed%20(8%20digits)%0A%0A%20%20%20function%20validateBirthdayInput(triggeredByBlur%20%3D%20false)%20%7B%0A%20%20%20%20%20let%20raw%20%3D%20%24input.val()%3B%0A%20%20%20%20%20let%20numbers%20%3D%20raw.replace(%2F%5CD%2Fg%2C%20'').substring(0%2C%208)%3B%0A%20%20%20%20%20let%20formatted%20%3D%20''%3B%0A%0A%20%20%20%20%20if%20(numbers.length%20%3E%3D%201)%20formatted%20%2B%3D%20numbers.substring(0%2C%202)%3B%0A%20%20%20%20%20if%20(numbers.length%20%3E%3D%203)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(2%2C%204)%3B%0A%20%20%20%20%20if%20(numbers.length%20%3E%3D%205)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(4%2C%208)%3B%0A%0A%20%20%20%20%20if%20(raw%20!%3D%3D%20formatted)%20%7B%0A%20%20%20%20%20%20%20%24input.val(formatted)%3B%0A%20%20%20%20%20%20%20const%20inputEl%20%3D%20%24input.get(0)%3B%0A%20%20%20%20%20%20%20inputEl.setSelectionRange(formatted.length%2C%20formatted.length)%3B%0A%20%20%20%20%20%7D%0A%0A%20%20%20%20%20const%20isBackspace%20%3D%20previousValue.length%20%3E%20formatted.length%3B%0A%20%20%20%20%20const%20isNowComplete%20%3D%20numbers.length%20%3D%3D%3D%208%3B%0A%20%20%20%20%20const%20wasPreviouslyComplete%20%3D%20hadCompleteInput%3B%0A%0A%20%20%20%20%20%2F%2F%20Update%20tracker%0A%20%20%20%20%20if%20(isNowComplete)%20%7B%0A%20%20%20%20%20%20%20hadCompleteInput%20%3D%20true%3B%0A%20%20%20%20%20%7D%0A%0A%20%20%20%20%20previousValue%20%3D%20formatted%3B%0A%0A%20%20%20%20%20%2F%2F%20Determine%20whether%20to%20run%20validation%0A%20%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20triggeredByBlur%20%7C%7C%20isNowComplete%20%7C%7C%20wasPreviouslyComplete%3B%0A%0A%20%20%20%20%20if%20(!shouldValidate)%20return%3B%0A%0A%20%20%20%20%20if%20(numbers.length%20%3C%208)%20%7B%0A%20%20%20%20%20%20%20isBirthdayValid%20%3D%20false%3B%0A%20%20%20%20%20%20%20%24('.birthday-text-error').text('Please%20enter%20a%20valid%20birthday%20MM%2FDD%2FYYYY').show()%3B%0A%20%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%2F%2F%20Parse%20date%20parts%0A%20%20%20%20%20const%20month%20%3D%20parseInt(numbers.substring(0%2C%202)%2C%2010)%3B%0A%20%20%20%20%20const%20day%20%3D%20parseInt(numbers.substring(2%2C%204)%2C%2010)%3B%0A%20%20%20%20%20const%20year%20%3D%20parseInt(numbers.substring(4%2C%208)%2C%2010)%3B%0A%0A%20%20%20%20%20const%20isValidDate%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20const%20date%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%0A%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20date.getFullYear()%20%3D%3D%3D%20y%20%26%26%0A%20%20%20%20%20%20%20%20%20date.getMonth()%20%3D%3D%3D%20m%20-%201%20%26%26%0A%20%20%20%20%20%20%20%20%20date.getDate()%20%3D%3D%3D%20d%0A%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20const%20isWithinRange%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20const%20validYear%20%3D%20y%20%3E%3D%201900%20%26%26%20y%20%3C%3D%202025%3B%0A%20%20%20%20%20%20%20const%20inputDate%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%0A%20%20%20%20%20%20%20const%20today%20%3D%20new%20Date()%3B%0A%20%20%20%20%20%20%20today.setHours(0%2C%200%2C%200%2C%200)%3B%0A%20%20%20%20%20%20%20return%20validYear%20%26%26%20inputDate%20%3C%20today%3B%0A%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%2F%2F%20Final%20validation%0A%20%20%20%20%20if%20(isValidDate(month%2C%20day%2C%20year)%20%26%26%20isWithinRange(month%2C%20day%2C%20year))%20%7B%0A%20%20%20%20%20%20%20isBirthdayValid%20%3D%20true%3B%0A%20%20%20%20%20%20%20%24('.birthday-text-error').hide()%3B%0A%20%20%20%20%20%20%20%24('%23continue-question').removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%20console.log('Is%20Valid%20Birthdate')%3B%0A%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%0A%20%20%20%20%20%20%20%20%20const%20phone%20%3D%20%24('%5Bquestion-2-phone%5D').val()%3B%0A%20%20%20%20%20%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber2(phone))%3B%0A%0A%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20if%20(isZipValid)%20%7B%0A%20%20%20%20%20%20%20%20%20%2F%2F%20ZIP%20logic%20if%20needed%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20isBirthdayValid%20%3D%20false%3B%0A%20%20%20%20%20%20%20%24('.birthday-text-error').text('Please%20enter%20a%20valid%20birthday%20MM%2FDD%2FYYYY').show()%3B%0A%20%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20console.log('Is%20Invalid%20Birthdate')%3B%0A%20%20%20%20%20%7D%0A%0A%20%20%20%20%20validateForm()%3B%20%2F%2F%20Re-check%20form%0A%20%20%20%7D%0A%0A%20%20%20%2F%2F%20Trigger%20on%20input%0A%20%20%20%24input.on('input'%2C%20function%20()%20%7B%0A%20%20%20%20%20validateBirthdayInput(false)%3B%0A%20%20%20%7D)%3B%0A%0A%20%20%20%2F%2F%20Trigger%20on%20blur%0A%20%20%20%24input.on('blur'%2C%20function%20()%20%7B%0A%20%20%20%20%20validateBirthdayInput(true)%3B%0A%20%20%20%7D)%3B%0A%20%20%20%2F%2FBirthdate%20Validation%0A%0A%20%20%2F%2F%20Birthday%20formatting%20and%20validation%0A%20%20%2F*const%20%24input%20%3D%20%24('%23birthday-input')%3B%0A%20%20%24input.on('input'%2C%20function%20(e)%20%7B%0A%20%20%0A%20%20%20%20let%20raw%20%3D%20%24(this).val()%3B%0A%20%20%20%20let%20numbers%20%3D%20raw.replace(%2F%5CD%2Fg%2C%20'').substring(0%2C%208)%3B%0A%20%20%20%20let%20formatted%20%3D%20''%3B%0A%0A%20%20%20%20if%20(numbers.length%20%3E%3D%201)%20formatted%20%2B%3D%20numbers.substring(0%2C%202)%3B%0A%20%20%20%20if%20(numbers.length%20%3E%3D%203)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(2%2C%204)%3B%0A%20%20%20%20if%20(numbers.length%20%3E%3D%205)%20formatted%20%2B%3D%20'%2F'%20%2B%20numbers.substring(4%2C%208)%3B%0A%0A%20%20%20%20if%20(raw%20!%3D%3D%20formatted)%20%7B%0A%20%20%20%20%20%20%24(this).val(formatted)%3B%0A%20%20%20%20%20%20this.setSelectionRange(formatted.length%2C%20formatted.length)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20if%20(numbers.length%20%3C%208)%20%7B%0A%20%20%20%20%20%20%24('.birthday-text-error').show()%3B%0A%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20const%20month%20%3D%20parseInt(numbers.substring(0%2C%202)%2C%2010)%3B%0A%20%20%20%20%20%20const%20day%20%3D%20parseInt(numbers.substring(2%2C%204)%2C%2010)%3B%0A%20%20%20%20%20%20const%20year%20%3D%20parseInt(numbers.substring(4%2C%208)%2C%2010)%3B%0A%0A%20%20%20%20%20%20const%20isValidDate%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20date%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20date.getFullYear()%20%3D%3D%3D%20y%20%26%26%0A%20%20%20%20%20%20%20%20%20%20date.getMonth()%20%3D%3D%3D%20m%20-%201%20%26%26%0A%20%20%20%20%20%20%20%20%20%20date.getDate()%20%3D%3D%3D%20d%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20const%20isWithinRange%20%3D%20(m%2C%20d%2C%20y)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20isValidDate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20m%20%3E%3D%201%20%26%26%20m%20%3C%3D%2012%20%26%26%20d%20%3E%3D%201%20%26%26%20d%20%3C%3D%2031%20%26%26%20y%20%3E%3D%201900%20%26%26%20y%20%3C%3D%202025%3B%0A%0A%20%20%20%20%20%20%20%20if%20(!isValidDate)%20return%20false%3B%0A%0A%20%20%20%20%20%20%20%20const%20inputDate%20%3D%20new%20Date(y%2C%20m%20-%201%2C%20d)%3B%20%2F%2F%20JS%20months%20are%200-based%0A%20%20%20%20%20%20%20%20const%20today%20%3D%20new%20Date()%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Remove%20time%20from%20today's%20date%20to%20compare%20only%20the%20date%20portion%0A%20%20%20%20%20%20%20%20today.setHours(0%2C%200%2C%200%2C%200)%3B%0A%0A%20%20%20%20%20%20%20%20return%20inputDate%20%3C%20today%3B%20%2F%2F%20must%20be%20strictly%20before%20today%0A%20%20%20%20%20%20%7D%3B%0A%0A%0A%20%20%20%20%20%20console.log(isValidDate)%3B%0A%20%20%20%20%20%20console.log(isWithinRange)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20if%20(isWithinRange(month%2C%20day%2C%20year)%20%26%26%20isValidDate(month%2C%20day%2C%20year))%20%7B%0A%20%20%20%20%20%20%20%20isBirthdayValid%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%24('.birthday-text-error').hide()%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20%24('.next-dob-btn').removeClass('v3')%3B%0A%20%20%20%20%20%20%20%20console.log('Is%20Valid%20Birthdate')%3B%0A%20%20%20%20%20%20%20%20%24('%23continue-question').removeClass('is-disabled')%3B%0A%0A%20%20%20%20%20%20%20%20if%20(isZipValid)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%24('%23continue-question').removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20isBirthdayValid%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20console.log('Is%20Invalid%20Birthdate')%3B%0A%20%20%20%20%20%20%20%20%24('.birthday-text-error').text('Please%20enter%20a%20valid%20birthday%20MM%2FDD%2FYYYY').show()%3B%0A%20%20%20%20%20%20%20%20%24('%23continue-question').addClass('is-disabled')%3B%0A%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%0A%20%20%20validateForm()%3B%20%2F%2F%20Re-check%20all%20fields%20after%20DOB%20update%0A%20%20%20%0A%20%20%7D)%3B*%2F%0A%20%20%0A%20%20%0A%7D)%3B%0A%0A%0A%0A%20%20%0A%7D)%3B%0A%3C%2Fscript%3E"
                                />
                                <_Builtin.FormTextInput
                                  className={_utils.cx(
                                    _styles,
                                    "zip-input",
                                    "custom1",
                                    "margin-bottom-10"
                                  )}
                                  name="Birthday"
                                  maxLength="10"
                                  data-name="Birthday"
                                  placeholder="Your Birthday"
                                  disabled={false}
                                  type="text"
                                  required={false}
                                  autoFocus={false}
                                  autoComplete="off"
                                  inputMode="numeric"
                                  dob=""
                                  id="birthday-input"
                                />
                                <_Builtin.HtmlEmbed
                                  className={_utils.cx(
                                    _styles,
                                    "form-validation-script"
                                  )}
                                  value="%3Cscript%3E%0Alet%20ip_add%20%3D%20''%3B%0Alet%20hubspotError%20%3D%20false%3B%0Alet%20contact_id%20%3D%20''%3B%0A%0Afunction%20submitForm(location%2C%20email)%7B%0A%0A%20%20%2F%2Flet%20apiUrl%20%3D%20'https%3A%2F%2Fx8ki-letl-twmt.n7.xano.io%2Fapi%3AHM44bvE3%2Ftpp_leads'%3B%20%2F%2F%20Test%20API%20URL%0A%20%20let%20apiUrl%20%3D%20'https%3A%2F%2Fx8ki-letl-twmt.n7.xano.io%2Fapi%3AHM44bvE3%2Ftpp_leads_send_to_hubspot'%3B%0A%0A%20%20if(hubspotError)%7B%0A%20%20%09apiUrl%20%3D%20'https%3A%2F%2Fx8ki-letl-twmt.n7.xano.io%2Fapi%3AHM44bvE3%2Ftpp_leads_send_to_hubspot_update'%3B%0A%20%20%7D%0A%20%20%0A%20%20const%20apiKey%20%3D%20'bqlq2wZ2Pb0n0P7R0IiIRRXYlffbHZ7_tYfbhsNJE3ls0LCDWuSZgNwftEFNrArtV5t98EGfai2XYrtFy3bGC3ihJWVQQfYh7OCWkmjBX9ayA4Qfv4nWe_kVa_9oALEpDitLTtG_bvU3y6C1fdE7nYi1Osv7manzc3Ah7s2SMXI'%3B%20%2F%2F%20Test%20API%20Key%0A%20%20%0A%20%20const%20url%20%3D%20window.location.href%3B%0A%20%20%2F%2F%20Create%20a%20URL%20object%0A%20%20%20%20const%20urlParams%20%3D%20new%20URLSearchParams(new%20URL(url).search)%3B%0A%20%20%20%20const%20urlParam%20%3D%20new%20URLSearchParams(new%20URL(url).search)%3B%0A%20%20%0A%20%20%2F%2F%20Extract%20parameters%0A%20%20const%20ls_agerange%20%3D%20urlParam.get('ls_agerange')%3B%20%2F%2F%20Fix%3A%20use%20%60urlParam%60%0A%20%20const%20ls_gender%20%3D%20urlParam.get('ls_gender')%3B%0A%20%20const%20ls_policysize%20%3D%20urlParam.get('ls_policysize')%3B%0A%20%20let%20policy_size%20%3D%20ls_policysize%3B%0A%20%20const%20utm_source_data%20%3D%20urlParam.get('utm_source')%3B%0A%20%20%0A%20%20%2F%2F%20Extract%20UTM%20parameters%0A%20%20const%20utm_source%20%3D%20urlParams.get('utm_source')%20%7C%7C%20''%3B%0A%20%20const%20utm_campaign%20%3D%20urlParams.get('utm_campaign')%20%7C%7C%20''%3B%0A%20%20const%20utm_medium%20%3D%20urlParams.get('utm_medium')%20%7C%7C%20''%3B%0A%20%20const%20utm_creative%20%3D%20urlParams.get('utm_creative')%20%7C%7C%20''%3B%0A%20%20const%20utm_adset%20%3D%20urlParams.get('utm_adset')%20%7C%7C%20''%3B%0A%20%20const%20utm_placement%20%3D%20urlParams.get('utm_placement')%20%7C%7C%20urlParams.get('placement')%20%7C%7C%20''%3B%0A%20%20const%20utm_id%20%3D%20urlParams.get('utm_id')%20%7C%7C%20''%3B%0A%20%20const%20utm_content%20%3D%20urlParams.get('utm_content')%20%7C%7C%20''%3B%0A%20%20const%20utm_term%20%3D%20urlParams.get('utm_term')%20%7C%7C%20''%3B%0A%20%20const%20fbclid%20%20%3D%20urlParams.get('fbclid')%20%7C%7C%20''%3B%0A%20%20%0A%20%20const%20dobInput%20%3D%20%24('%23birthday-input').val()%20%7C%7C%20''%3B%20%2F%2F%20Example%3A%20%2201%2F01%2F1990%22%20or%20%2201-01-1990%22%0A%20%20const%20parsedDate%20%3D%20new%20Date(dobInput)%3B%0A%20%20const%20yyyy%20%3D%20parsedDate.getFullYear()%3B%0A%20%20const%20mm%20%3D%20String(parsedDate.getMonth()%20%2B%201).padStart(2%2C%20'0')%3B%20%2F%2F%20Months%20are%200-indexed%0A%20%20const%20dd%20%3D%20String(parsedDate.getDate()).padStart(2%2C%20'0')%3B%0A%0A%20%20let%20formattedDate%20%3D%20%60%24%7Byyyy%7D-%24%7Bmm%7D-%24%7Bdd%7D%60%3B%0A%20%20console.log(formattedDate)%3B%20%2F%2F%20%221990-01-01%22%0A%20%20%0A%20%20%2F%2FCalculate%20Dates%0A%20%20let%20dobStr%20%3D%20formattedDate%3B%20%2F%2F%20YYYY-MM-DD%0A%20%20let%20medicareDates%20%3D%20calculateMedicareDates(dobStr)%3B%0A%20%20console.log(%22Beginning%20of%20IEP%3A%22%2C%20medicareDates.beginningOfIEP)%3B%0A%20%20console.log(%22Earliest%20Coverage%20Date%3A%22%2C%20medicareDates.earliestCoverageDate)%3B%0A%20%20console.log(%22Enrollment%20Window%20Closes%3A%22%2C%20medicareDates.enrollmentWindowCloses)%3B%0A%20%20%2F%2FCalculate%20Dates%0A%20%20%20%0A%20%20%0A%20%20const%20phone%20%3D%0A%20%20(%24('%5Bquestion-2-phone%5D').val()%20%7C%7C%20'').replace(%2F%5CD%2Fg%2C%20'')%20%7C%7C%0A%20%20(%24('%5Bquestion-3-phone%5D').val()%20%7C%7C%20'').replace(%2F%5CD%2Fg%2C%20'')%20%7C%7C%0A%20%20(%24('%5Bquestion-4-phone%5D').val()%20%7C%7C%20'').replace(%2F%5CD%2Fg%2C%20'')%3B%0A%20%20%0A%20%20const%20zip_code%20%3D%0A%20%20(%24('%23zip-input').val()%20%7C%7C%20'').replace(%2F%5CD%2Fg%2C%20'')%20%7C%7C%0A%20%20(%24('%23zip-input-2').val()%20%7C%7C%20'').replace(%2F%5CD%2Fg%2C%20'')%20%7C%7C%0A%20%20(%24('%23zip-input-3').val()%20%7C%7C%20'').replace(%2F%5CD%2Fg%2C%20'')%3B%0A%20%20%0A%20%20%2F*const%20zip_code%20%3D%0A%20%20(%24('%23zip-input').val()%20%7C%7C%20'').replace(%2F%5CD%2Fg%2C%20'')%20%7C%7C%0A%20%20(%24('%23zip-input-2').val()%20%7C%7C%20'').replace(%2F%5CD%2Fg%2C%20'')%20%7C%7C%0A%20%20(%24('%23zip-input-3').val()%20%7C%7C%20'').replace(%2F%5CD%2Fg%2C%20'')%3B*%2F%0A%20%20%0A%20%20%2F*const%20dob%20%3D%0A%20%20(%24('%23birthday-input').val()%20%7C%7C%20'').replace(%2F%5CD%2Fg%2C%20'')%20%7C%7C%0A%20%20(%24('%5Bdob%5D').val()%20%7C%7C%20'').replace(%2F%5CD%2Fg%2C%20'')%3B*%2F%0A%09%0A%20%20let%20postDataLead%20%3D%20%7B%7D%3B%0A%20%20%0A%20%20if(formattedDate%20!%3D%3D%20'NaN-NaN-NaN')%7B%0A%0A%20%20%20%20postDataLead%20%3D%20%7B%0A%20%20%20%20%20%20contactID%3A%20contact_id%2C%0A%20%20%20%20%20%20email%3A%20email%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20%20%20phone%3A%20phone%2C%0A%20%20%20%20%20%20zipcode%3A%20zip_code%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20%20%20DOB%3A%20%24('%23birthday-input').val()%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20%20%20dob%3A%20formattedDate%2C%0A%20%20%20%20%20%20submit_location%3A%20location%2C%0A%20%20%20%20%20%20ip_address%3A%20ip_add%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20%20%20%2F%2Froot_url%3A%20window.location.origin%20%2B%20window.location.pathname%2C%20%2F%2F%20Capture%20root%20URL%20(domain%20%2B%20path)%0A%20%20%20%20%20%20root_url%3A%20window.location.href%2C%0A%20%20%20%20%20%20utm_source%3A%20utm_source%2C%0A%20%20%20%20%20%20utm_campaign%3A%20utm_campaign%2C%0A%20%20%20%20%20%20utm_medium%3A%20utm_medium%2C%0A%20%20%20%20%20%20utm_creative%3A%20utm_creative%2C%0A%20%20%20%20%20%20utm_adset%3A%20utm_adset%2C%0A%20%20%20%20%20%20utm_placement%3A%20utm_placement%2C%0A%20%20%20%20%20%20utm_id%3A%20utm_id%2C%0A%20%20%20%20%20%20utm_content%3A%20utm_content%2C%0A%20%20%20%20%20%20utm_term%3A%20utm_term%2C%0A%20%20%20%20%20%20fbclid%3A%20fbclid%2C%0A%20%20%20%20%20%20policy_userinput%3A%20ls_policysize%2C%20%0A%20%20%20%20%20%20beginning_of_iep%3A%20medicareDates.beginningOfIEP%2C%20%2F%2FBeginning%20of%20IEP%0A%20%20%20%20%20%20earliest_coverage_date%3A%20medicareDates.earliestCoverageDate%2C%20%2F%2FEarliest%20Coverage%20Date%0A%20%20%20%20%20%20enrollment_window_closes%3A%20medicareDates.enrollmentWindowCloses%2C%20%2F%2FEnrollment%20Window%20Closes%0A%20%20%20%20%7D%3B%0A%20%20%20%20%0A%20%20%7D%0A%20%20else%20%7B%0A%20%20%0A%20%20%20%20postDataLead%20%3D%20%7B%0A%20%20%20%20%20%20contactID%3A%20contact_id%2C%0A%20%20%20%20%20%20dob%3A%20%22%22%2C%0A%20%20%20%20%20%20email%3A%20email%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20%20%20phone%3A%20phone%2C%0A%20%20%20%20%20%20zipcode%3A%20zip_code%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20%20%20submit_location%3A%20location%2C%0A%20%20%20%20%20%20ip_address%3A%20ip_add%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20%20%20%2F%2Froot_url%3A%20window.location.origin%20%2B%20window.location.pathname%2C%20%2F%2F%20Capture%20root%20URL%20(domain%20%2B%20path)%0A%20%20%20%20%20%20root_url%3A%20window.location.href%2C%0A%20%20%20%20%20%20utm_source%3A%20utm_source%2C%0A%20%20%20%20%20%20utm_campaign%3A%20utm_campaign%2C%0A%20%20%20%20%20%20utm_medium%3A%20utm_medium%2C%0A%20%20%20%20%20%20utm_creative%3A%20utm_creative%2C%0A%20%20%20%20%20%20utm_adset%3A%20utm_adset%2C%0A%20%20%20%20%20%20utm_placement%3A%20utm_placement%2C%0A%20%20%20%20%20%20utm_id%3A%20utm_id%2C%0A%20%20%20%20%20%20utm_content%3A%20utm_content%2C%0A%20%20%20%20%20%20utm_term%3A%20utm_term%2C%0A%20%20%20%20%20%20fbclid%3A%20fbclid%2C%0A%20%20%20%20%20%20policy_userinput%3A%20ls_policysize%2C%20%2F%2F%20Static%20value%20for%20testing%0A%20%20%20%20%7D%3B%0A%20%20%0A%20%20%7D%0A%20%20%0A%20%20%20console.log(postDataLead)%3B%0A%0A%20%20fetch(apiUrl%2C%20%7B%0A%20%20%20%20method%3A%20'POST'%2C%0A%20%20%20%20headers%3A%20%7B%0A%20%20%20%20%20%20'Content-Type'%3A%20'application%2Fjson'%2C%0A%20%20%20%20%20%20'Authorization'%3A%20%60%24%7BapiKey%7D%60%0A%20%20%20%20%7D%2C%0A%20%20%20%20body%3A%20JSON.stringify(postDataLead)%0A%20%20%7D)%0A%20%20%20%20.then(response%20%3D%3E%20%7B%0A%20%20%20%20if%20(!response.ok)%20%7B%0A%20%20%20%20%20%20throw%20new%20Error(%60HTTP%20error!%20Status%3A%20%24%7Bresponse.status%7D%60)%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20response.json()%3B%0A%20%20%7D)%0A%20%20%20%20.then(data%20%3D%3E%20%7B%0A%20%20%20%20console.log('Success%3A%20Sent%20Data'%2C%20data)%3B%0A%20%20%20%20%0A%20%20%20%20%20%20%2F%2FCheck%20if%20existing%20id%0A%20%20%20%20%20%20let%20existingId%20%3D%20null%3B%0A%0A%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20data.tpp_.response.result%20%26%26%0A%20%20%20%20%20%20%20%20data.tpp_.response.result.status%20%3D%3D%3D%20%22error%22%20%26%26%0A%20%20%20%20%20%20%20%20data.tpp_.response.result.message.includes(%22Existing%20ID%3A%22)%0A%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20existingId%20%3D%20data.tpp_.response.result.message.split(%22Existing%20ID%3A%22)%5B1%5D.trim()%3B%0A%0A%20%20%20%20%20%20%20%20if(existingId)%7B%0A%20%20%20%20%20%20%20%20%20%20hubspotError%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20contact_id%20%3D%20existingId%3B%0A%20%20%20%20%20%20%20%20%20%20submitForm(location%2C%20email)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20console.log(existingId)%3B%20%2F%2F%20%E2%9E%9D%20%22170457770712%22%0A%20%20%20%20%20%20%2F%2FCheck%20if%20existing%20id%0A%20%20%20%20%0A%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20window.scrollTo(0%2C%200)%3B%0A%20%20%20%20%7D%2C%202000)%3B%0A%20%20%20%20window.scrollTo(%7B%0A%20%20%20%20%20%20top%3A%200%2C%0A%20%20%20%20%20%20behavior%3A%20'auto'%20%2F%2F%20Instantly%20scroll%20to%20the%20top.%20Use%20'smooth'%20for%20smooth%20scrolling.%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%7D)%0A%20%20%20%20.catch(error%20%3D%3E%20%7B%0A%20%20%20%20console.error('Error%3A'%2C%20error)%3B%0A%0A%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20window.scrollTo(0%2C%200)%3B%0A%20%20%20%20%7D%2C%202000)%3B%0A%20%20%20%20window.scrollTo(%7B%0A%20%20%20%20%20%20top%3A%200%2C%0A%20%20%20%20%20%20behavior%3A%20'auto'%20%2F%2F%20Instantly%20scroll%20to%20the%20top.%20Use%20'smooth'%20for%20smooth%20scrolling.%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%7D)%3B%0A%0A%7D%0A%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%09const%20apiUrl%20%3D%20'https%3A%2F%2Fapi.seeip.org%2Fgeoip'%3B%0A%0A%20%20fetch(apiUrl)%0A%20%20%20%20.then(response%20%3D%3E%20%7B%0A%20%20%20%20if%20(!response.ok)%20%7B%0A%20%20%20%20%20%20throw%20new%20Error('Network%20response%20was%20not%20ok')%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20response.json()%3B%0A%20%20%7D)%0A%20%20%20%20.then(data%20%3D%3E%20%7B%0A%20%20%20%0A%20%20%20%20console.log(data)%3B%0A%20%20%20%20%0A%20%20%20%20ip_add%20%3D%20data.ip%3B%0A%20%20%20%20%2F*postal_code%20%3D%20data.postal_code%3B%0A%20%20%20%20city%20%3D%20data.city.replaceAll('%20'%2C'').toLowerCase()%3B%0A%20%20%20%20region_iso%20%3D%20data.region_code.replaceAll('%20'%2C'').toLowerCase()%3B%0A%20%20%20%20country%20%3D%20data.country_code.replaceAll('%20'%2C'').toLowerCase()%3B%0A%20%20%20%20state_region%20%3D%20data.region.replaceAll('%20'%2C'').toLowerCase()%3B*%2F%0A%0A%20%20%7D)%0A%20%20%20%20.catch(error%20%3D%3E%20%7B%0A%20%20%20%20console.error(error)%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%0A%7D)%3B%0A%3C%2Fscript%3E"
                                />
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "birthday-text-error"
                                  )}
                                  tag="div"
                                >
                                  {"Please enter a valid birthday MM/DD/YYYY"}
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Link
                                className={_utils.cx(
                                  _styles,
                                  "button",
                                  "nav-btn",
                                  "phone-number",
                                  "v7",
                                  "is-disabled"
                                )}
                                data-w-id="fe72d218-eeaa-8982-d7f4-8b224e6804ae"
                                button={false}
                                tabIndex="-1"
                                id="continue-question"
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Continue to Last Question"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.HtmlEmbed
                                className={_utils.cx(
                                  _styles,
                                  "input-validation-script"
                                )}
                                value="%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%09%24('%23continue-question').click(function()%7B%0A%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20event%3A%20'quiz_answer'%2C%0A%20%20%20%20%20%20%20%20step%3A%20'2'%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%09%7D)%3B%0A%20%20%0A%7D)%3B%0A%3C%2Fscript%3E"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "article-questions-wrapper"
                            )}
                            data-w-id="fe72d218-eeaa-8982-d7f4-8b224e6804b2"
                            tag="div"
                          >
                            <_Builtin.RichText
                              className={_utils.cx(
                                _styles,
                                "article-question-richtext"
                              )}
                              tag="div"
                              slot=""
                            >
                              <_Builtin.Heading tag="h3">
                                {"‍"}
                                <_Builtin.NotSupported _atom="InlineCode" />
                              </_Builtin.Heading>
                              <_Builtin.Paragraph>
                                {
                                  "Medicare is incredible health insurance when properly structured. If you answer a quick quiz, we can develop a personalized plan recommendation for you, together with an explanation for why."
                                }
                              </_Builtin.Paragraph>
                              <_Builtin.Heading tag="h3">
                                {"Question 3:"}
                              </_Builtin.Heading>
                              <_Builtin.Paragraph>
                                {
                                  "Thank you!One of our agents will put together a plan for you and email it to you within 2 hours. What is the best email address for us to send it to?"
                                }
                              </_Builtin.Paragraph>
                            </_Builtin.RichText>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "article-ans-wrapper"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "screener-input-wrapper",
                                  "full-width"
                                )}
                                tag="div"
                              >
                                <_Builtin.FormTextInput
                                  className={_utils.cx(
                                    _styles,
                                    "zip-input",
                                    "custom1",
                                    "margin-bottom-10"
                                  )}
                                  name="Email"
                                  maxLength={256}
                                  data-name="Email"
                                  placeholder="Your Email"
                                  disabled={false}
                                  type="email"
                                  required={true}
                                  autoFocus={false}
                                  autoComplete="off"
                                  id="email-input"
                                />
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "email-text-error"
                                  )}
                                  tag="div"
                                >
                                  {
                                    "Please enter a valid email address (e.g., name@example.com)."
                                  }
                                </_Builtin.Block>
                                {phoneNumberVisibility ? (
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "phone-number-wrapper"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed value="%3Cinput%20question-2-phone%20id%3D%22phone%22%20class%3D%22zip-input%20custom1%20margin-bottom-10%20phone-number%22%20name%3D%22Phone%20Number%22%20data-name%3D%22phone_number%22%20placeholder%3D%22e.g.%2C%20(312)%20555-1212%20(optional)%22%20inputmode%3D%22decimal%22%20onInput%3D%22this.value%20%3D%20phoneFormat(this.value)%22%20style%3D%22width%3A%20100%25%3B%22%20pattern%3D%22%5E%5C(%3F%5Cd%7B3%7D%5C)%3F%5B-.%5Cs%5D%3F%5Cd%7B3%7D%5B-.%5Cs%5D%3F%5Cd%7B4%7D%24%22%20title%3D%22Enter%20a%20valid%20phone%20number%20(e.g.%2C%20123-456-7890)%22%2F%3E" />
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "error-input-msg",
                                        "phone-msg"
                                      )}
                                      tag="div"
                                    >
                                      {
                                        "Please enter a valid 10 digit phone number"
                                      }
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                ) : null}
                                <_Builtin.FormButton
                                  className={_utils.cx(
                                    _styles,
                                    "button",
                                    "nav-btn",
                                    "phone-number",
                                    "v5",
                                    "text-weight-semi-bold",
                                    "is-disabled",
                                    "w-node-fe72d218-eeaa-8982-d7f4-8b224e6804c3-4e68030d"
                                  )}
                                  id={_utils.cx(_styles, "submit-btn")}
                                  type="submit"
                                  value="Get My Personalized Breakdown"
                                  data-wait="Please wait..."
                                />
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.FormForm>
                        <_Builtin.FormSuccessMessage
                          className={_utils.cx(_styles, "article-success-msg")}
                        >
                          <_Builtin.RichText
                            className={_utils.cx(
                              _styles,
                              "article-question-richtext"
                            )}
                            tag="div"
                            slot=""
                          >
                            <_Builtin.Heading tag="h3">
                              {"‍"}
                              <_Builtin.NotSupported _atom="InlineCode" />
                            </_Builtin.Heading>
                            <_Builtin.Paragraph>
                              {
                                "Medicare is incredible health insurance when properly structured. If you answer a quick quiz, we can develop a personalized plan recommendation for you, together with an explanation for why."
                              }
                            </_Builtin.Paragraph>
                            <_Builtin.Paragraph>
                              {"Thanks! We'll be reaching out to you shortly."}
                            </_Builtin.Paragraph>
                          </_Builtin.RichText>
                        </_Builtin.FormSuccessMessage>
                        <_Builtin.FormErrorMessage>
                          <_Builtin.Block tag="div">
                            {
                              "Oops! Something went wrong while submitting the form."
                            }
                          </_Builtin.Block>
                        </_Builtin.FormErrorMessage>
                      </_Builtin.FormWrapper>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-questions-wrapper"
                      )}
                      data-w-id="fe72d218-eeaa-8982-d7f4-8b224e6804d1"
                      tag="div"
                      id="flow2"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "article-anchor",
                          "custom-3"
                        )}
                        tag="div"
                        id="have-medicare-form"
                      />
                      <_Builtin.FormWrapper
                        className={_utils.cx(
                          _styles,
                          "article-ans-form-wrapper"
                        )}
                      >
                        <_Builtin.FormForm
                          className={_utils.cx(_styles, "article-ans-form")}
                          name="wf-form-Article-Medicare-Form"
                          data-name="Article Medicare Form"
                          method="get"
                          id="have_medicare_advantage-form"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "article-questions-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.RichText
                              className={_utils.cx(
                                _styles,
                                "article-question-richtext"
                              )}
                              tag="div"
                              slot=""
                            >
                              <_Builtin.Heading tag="h3">
                                {"‍"}
                                <_Builtin.NotSupported _atom="InlineCode" />
                              </_Builtin.Heading>
                              <_Builtin.Paragraph>
                                {
                                  "There are real reasons this makes sense for many people, and you're probably saving money each month in premiums."
                                }
                              </_Builtin.Paragraph>
                              <_Builtin.Paragraph>
                                {
                                  "The most important thing is to make sure you're in the RIGHT Medicare Advantage plan though. And that means the one that has the best network for you and offers the best benefits."
                                }
                              </_Builtin.Paragraph>
                              <_Builtin.Paragraph>
                                <_Builtin.Strong>
                                  {
                                    "Do you want to pull a quick report card on your plan, and show how it ranks against all the other plans in your county? "
                                  }
                                </_Builtin.Strong>
                                {
                                  "You might be in the right one, but you might be surprised and able to upgrade to better coverage or more benefits."
                                }
                              </_Builtin.Paragraph>
                              <_Builtin.Paragraph>
                                {
                                  "It would only take a couple of minutes and its completely online. No phone call."
                                }
                              </_Builtin.Paragraph>
                            </_Builtin.RichText>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "article-ans-wrapper"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "screener-input-wrapper",
                                  "full-width"
                                )}
                                tag="div"
                              >
                                {zipCodeVisibility ? (
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "zip-code-wrapper"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.FormTextInput
                                      className={_utils.cx(
                                        _styles,
                                        "zip-input",
                                        "custom1",
                                        "margin-bottom-10"
                                      )}
                                      name="Zip-Code"
                                      maxLength="5"
                                      data-name="Zip Code"
                                      placeholder="Zip Code"
                                      disabled={false}
                                      type="number"
                                      required={false}
                                      autoFocus={false}
                                      inputMode="numeric"
                                      max="99999"
                                      min="0"
                                      autoComplete="off"
                                      id="zip-input-2"
                                    />
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "zip-text-error-2"
                                      )}
                                      tag="div"
                                    >
                                      {"Please enter a valid 5 digit zip code."}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                ) : null}
                                <_Builtin.FormTextInput
                                  className={_utils.cx(
                                    _styles,
                                    "zip-input",
                                    "custom1",
                                    "margin-bottom-10"
                                  )}
                                  name="Email"
                                  maxLength={256}
                                  data-name="Email"
                                  placeholder="Your Email"
                                  disabled={false}
                                  type="email"
                                  required={true}
                                  autoFocus={false}
                                  autoComplete="off"
                                  id="email-input-2"
                                />
                                {isValid2WithZipCodeVisibility ? (
                                  <_Builtin.HtmlEmbed
                                    className={_utils.cx(
                                      _styles,
                                      "form-validation-script"
                                    )}
                                    value="%3Cscript%3E%0Afunction%20isValidUSPhoneNumber3(input)%20%7B%0A%20%20%20%20%2F%2F%20Remove%20all%20non-digit%20characters%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20const%20digits%20%3D%20input.replace(%2F%5CD%2Fg%2C%20'')%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Check%20for%20valid%2010-digit%20US%20number%20or%2011-digit%20with%20country%20code%20'1'%0A%20%20%20%20%20%20if%20(digits.length%20%3D%3D%3D%2010)%20%7B%0A%20%20%20%20%20%20%20%20return%20true%3B%20%2F%2F%20e.g.%205551234567%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%7D%20else%20if%20(digits.length%20%3D%3D%3D%2011%20%26%26%20digits.startsWith('1'))%20%7B%0A%20%20%20%20%20%20%20%20return%20true%3B%20%2F%2F%20e.g.%2015551234567%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20else%20%7B%0A%0A%20%20%20%20%20%20%20%20if(%24('%5Bquestion-3-phone%5D').val()%20!%3D%3D%20'')%7B%0A%0A%20%20%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').text('Please%20enter%20a%20valid%2010%20digit%20phone%20number')%3B%0A%20%20%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').show()%3B%0A%20%20%20%20%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20100)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%7D%20catch%20(error)%20%7B%20%7D%0A%0A%20%20%20%20return%20false%3B%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Cscript%3E%0Alet%20isEmailValid2%20%3D%20false%3B%0Alet%20isZipValid2%20%3D%20false%3B%0Aconst%20validZipRegex2%20%3D%20%2F%5E%5Cd%7B5%7D%24%2F%3B%0A%0A%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%20%20%24('%5Bquestion-3-phone%5D').on('input'%2C%20function()%7B%0A%20%20%20%20if(%24(this).val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20isPhoneEntered%20%3D%20true%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20isPhoneEntered%20%3D%20false%3B%0A%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%24(document).ready(function%20()%20%7B%0A%20%20const%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%0A%20%20function%20validateForm2()%20%7B%0A%20%20%20try%20%7B%0A%20%20%20%20const%20email%20%3D%20%24('%23email-input-2').val().trim()%3B%0A%20%20%20%20const%20zipCode%20%3D%20%24('%23zip-input-2').val().trim()%3B%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20ZIP%20Validation%0A%20%20%20%20if%20(validZipRegex2.test(zipCode))%20%7B%0A%20%20%20%20%20%20%24('.zip-text-error-2').hide()%3B%0A%20%20%20%20%20%20isZipValid2%20%3D%20true%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%24('.zip-text-error-2').text('Please%20enter%20a%20valid%205%20digit%20zip%20code.').show()%3B%0A%20%20%20%20%20%20isZipValid2%20%3D%20false%3B%0A%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20const%20emailParts%20%3D%20email.split('%40')%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Trigger%20validation%20only%20if%20the%20email%20seems%20complete%20(ends%20with%20a%20dot%20or%20has%20full%20format)%0A%20%20%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20email.includes('%40')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20emailParts.length%20%3D%3D%3D%202%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20emailParts%5B1%5D.includes('.')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20(email.endsWith('.')%20%7C%7C%20%2F%5E%5B%5E%40%5D%2B%40%5B%5E%40%5D%2B%5C.%5B%5E%40%5D%2B%24%2F.test(email))%3B%0A%0A%20%20%20%20%20%20if%20(shouldValidate)%20%7B%0A%20%20%20%20%20%20%20%20const%20domainPart%20%3D%20emailParts%5B1%5D.trim()%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Basic%20domain%20validation%20(e.g.%2C%20example.com)%0A%20%20%20%20%20%20%20%20const%20domainRegex%20%3D%20%2F%5E%5Ba-zA-Z0-9.-%5D%2B%5C.%5Ba-zA-Z%5D%7B2%2C%7D%24%2F%3B%0A%0A%20%20%20%20%20%20%20%20if%20(emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-2').hide()%3B%0A%20%20%20%20%20%20%20%20%20%20isEmailValid2%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%24('%23submit-btn-2').removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-2')%0A%20%20%20%20%20%20%20%20%20%20%20%20.text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).')%0A%20%20%20%20%20%20%20%20%20%20%20%20.show()%3B%0A%20%20%20%20%20%20%20%20%20%20isEmailValid2%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%24('%23submit-btn-2').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('.email-text-error-2').hide()%3B%0A%20%20%20%20%20%20%20%20isEmailValid2%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%2F%2F%24('%23submit-btn-2').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%2F%2F%20Toggle%20submit%20button%0A%20%20%20%20%20%20if%20(isZipValid2%20%26%26%20isEmailValid2)%20%7B%0A%20%20%20%20%20%20%20%20%24('.zip-text-error-2').hide()%3B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-2').removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-2').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-2').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-2').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%20%20%7D%0A%0A%09%09%7D%20catch(err)%7B%20%20%20%20%7D%0A%0A%20%20%7D%0A%20%20%2F%2F%20Input%20validation%20triggers%0A%20%20%24('%23email-input-2').on('input%20change'%2C%20function%20()%20%7B%0A%20%20%20%20validateForm2()%3B%0A%20%20%20%20%0A%20%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%20%20%20%20%20%20const%20phone%20%3D%20%24('%5Bquestion-3-phone%5D').val()%3B%0A%20%20%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber3(phone))%3B%0A%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%20%20%0A%20%20%20%24('%23email-input-2').on('input'%2C%20function%20()%20%7B%0A%20%20%20const%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%20%20%20%20%20if%20(emailRegex.test(%24(this).val()))%20%7B%0A%20%20%20%20%20%20%20%24('.email-text-error-2').hide()%3B%0A%20%20%20%20%20%20%20isEmailValid2%20%3D%20true%3B%0A%20%20%20%20%20%20%20%2F%2F%24('%23submit-btn-2').removeClass('is-disabled')%3B%0A%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%24('.email-text-error-2').text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).').show()%3B%0A%20%20%20%20%20%20%20isEmailValid2%20%3D%20false%3B%0A%20%20%20%20%20%20%20%2F%2F%24('%23submit-btn-2').addClass('is-disabled')%3B%0A%20%20%20%20%20%7D%0A%20%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Prevent%20Enter%20key%20on%20inputs%0A%20%20%24('%20%23email-input-2').on('keypress'%2C%20function%20(e)%20%7B%0A%20%20%20%20if%20(e.which%20%3D%3D%3D%2013)%20e.preventDefault()%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%0A%20%20%20%20%2F%2F%20Input%20validation%20triggers%0A%20%20%24('%23zip-input-2').on('input%20change'%2C%20function%20()%20%7B%0A%20%20%20%20let%20zipCode%20%3D%20%24('%23zip-input-2').val().replace(%2F%5B%5E%5Cd%5D%2Fg%2C%20'').slice(0%2C%205)%3B%0A%20%20%20%20%24('%23zip-input-2').val(zipCode)%3B%0A%20%20%20%20validateForm2()%3B%0A%20%20%20%20%0A%20%20%20%20const%20phone%20%3D%20%24('%5Bquestion-3-phone%5D').val()%3B%0A%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber3(phone))%3B%0A%20%20%7D)%3B%0A%20%20%0A%0A%20%20%2F%2F%20Prevent%20Enter%20key%20globally%20on%20form%0A%20%20const%20calculatorForm%20%3D%20document.getElementById(%22wf-form-NTM-Screen-Form-2%22)%3B%0A%20%20if%20(calculatorForm)%20%7B%0A%20%20%20%20calculatorForm.addEventListener(%22keydown%22%2C%20function%20(event)%20%7B%0A%20%20%20%20%20%20if%20(event.key%20%3D%3D%3D%20%22Enter%22)%20event.preventDefault()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20%2F%2F%20Form%20submit%20handler%0A%20%20%24('%23have_medicare_advantage-form').on('submit'%2C%20function%20(e)%20%7B%0A%20%20%20%20const%20email%20%3D%20%24('%23email-input-2').val().trim()%3B%0A%0A%20%20%20%20if%20(!emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%2F%2Fe.preventDefault()%3B%0A%20%20%20%20%20%20validateForm2()%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%2F%2F%20Call%20your%20form%20submission%20function%0A%20%20%20%20%20%20submitForm('have_medicare_advantage'%2C%20%24('%23email-input-2').val())%3B%0A%0A%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20const%20offset%20%3D%20%24('%23article-form').offset().top%3B%0A%20%20%20%20%20%20%20%20%24('html%2C%20body').animate(%7B%0A%20%20%20%20%20%20%20%20%20%20scrollTop%3A%20offset%0A%20%20%20%20%20%20%20%20%7D%2C%201000)%3B%20%2F%2F%20Duration%20in%20milliseconds%0A%20%20%20%20%20%20%7D%2C%202800)%3B%0A%0A%20%20%20%20%20%20const%20urlParam%20%3D%20new%20URLSearchParams(new%20URL(window.location.href).search)%3B%0A%20%20%20%20%20%20const%20medicare%20%3D%20urlParam.get('medicare')%20%7C%7C%20''%3B%0A%0A%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20event%3A%20'email_submit'%2C%0A%20%20%20%20%20%20%20%20location%3A%20'have_medicare_advantage'%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20submit_loc%20%3D%20'have_medicare_advantage'%3B%0A%0A%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%20%20%0A%20%20%0A%7D)%3B%0A%0A%20%20%0A%7D)%3B%0A%3C%2Fscript%3E"
                                  />
                                ) : null}
                                {isValid2EmailOnlyVisibility ? (
                                  <_Builtin.HtmlEmbed
                                    className={_utils.cx(
                                      _styles,
                                      "form-validation-script"
                                    )}
                                    value="%3Cscript%3E%0Afunction%20isValidUSPhoneNumber3(input)%20%7B%0A%20%20%20%20%2F%2F%20Remove%20all%20non-digit%20characters%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20const%20digits%20%3D%20input.replace(%2F%5CD%2Fg%2C%20'')%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Check%20for%20valid%2010-digit%20US%20number%20or%2011-digit%20with%20country%20code%20'1'%0A%20%20%20%20%20%20if%20(digits.length%20%3D%3D%3D%2010)%20%7B%0A%20%20%20%20%20%20%20%20return%20true%3B%20%2F%2F%20e.g.%205551234567%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%7D%20else%20if%20(digits.length%20%3D%3D%3D%2011%20%26%26%20digits.startsWith('1'))%20%7B%0A%20%20%20%20%20%20%20%20return%20true%3B%20%2F%2F%20e.g.%2015551234567%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20else%20%7B%0A%0A%20%20%20%20%20%20%20%20if(%24('%5Bquestion-3-phone%5D').val()%20!%3D%3D%20'')%7B%0A%0A%20%20%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').text('Please%20enter%20a%20valid%2010%20digit%20phone%20number')%3B%0A%20%20%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').show()%3B%0A%20%20%20%20%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20100)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%7D%20catch%20(error)%20%7B%20%7D%0A%0A%20%20%20%20return%20false%3B%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Cscript%3E%0Alet%20isEmailValid2%20%3D%20false%3B%0Alet%20isZipValid2%20%3D%20true%3B%0Aconst%20validZipRegex2%20%3D%20%2F%5E%5Cd%7B5%7D%24%2F%3B%0A%0A%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%20%20%24('%5Bquestion-3-phone%5D').on('input'%2C%20function()%7B%0A%20%20%20%20if(%24(this).val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20isPhoneEntered%20%3D%20true%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20isPhoneEntered%20%3D%20false%3B%0A%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%24(document).ready(function%20()%20%7B%0A%20%20const%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%0A%20%20function%20validateForm2()%20%7B%0A%20%20%20try%20%7B%0A%20%20%20%20const%20email%20%3D%20%24('%23email-input-2').val().trim()%3B%0A%20%20%20%20const%20zipCode%20%3D%20'60625'%3B%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20ZIP%20Validation%0A%20%20%20%20if%20(validZipRegex2.test(zipCode))%20%7B%0A%20%20%20%20%20%20%24('.zip-text-error-2').hide()%3B%0A%20%20%20%20%20%20isZipValid2%20%3D%20true%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%24('.zip-text-error-2').text('Please%20enter%20a%20valid%205%20digit%20zip%20code.').show()%3B%0A%20%20%20%20%20%20isZipValid2%20%3D%20true%3B%0A%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20const%20emailParts%20%3D%20email.split('%40')%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Trigger%20validation%20only%20if%20the%20email%20seems%20complete%20(ends%20with%20a%20dot%20or%20has%20full%20format)%0A%20%20%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20email.includes('%40')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20emailParts.length%20%3D%3D%3D%202%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20emailParts%5B1%5D.includes('.')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20(email.endsWith('.')%20%7C%7C%20%2F%5E%5B%5E%40%5D%2B%40%5B%5E%40%5D%2B%5C.%5B%5E%40%5D%2B%24%2F.test(email))%3B%0A%0A%20%20%20%20%20%20if%20(shouldValidate)%20%7B%0A%20%20%20%20%20%20%20%20const%20domainPart%20%3D%20emailParts%5B1%5D.trim()%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Basic%20domain%20validation%20(e.g.%2C%20example.com)%0A%20%20%20%20%20%20%20%20const%20domainRegex%20%3D%20%2F%5E%5Ba-zA-Z0-9.-%5D%2B%5C.%5Ba-zA-Z%5D%7B2%2C%7D%24%2F%3B%0A%0A%20%20%20%20%20%20%20%20if%20(emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-2').hide()%3B%0A%20%20%20%20%20%20%20%20%20%20isEmailValid2%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%24('%23submit-btn-2').removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-2')%0A%20%20%20%20%20%20%20%20%20%20%20%20.text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).')%0A%20%20%20%20%20%20%20%20%20%20%20%20.show()%3B%0A%20%20%20%20%20%20%20%20%20%20isEmailValid2%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%24('%23submit-btn-2').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('.email-text-error-2').hide()%3B%0A%20%20%20%20%20%20%20%20isEmailValid2%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%2F%2F%24('%23submit-btn-2').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%2F%2F%20Toggle%20submit%20button%0A%20%20%20%20%20%20if%20(isZipValid2%20%26%26%20isEmailValid2)%20%7B%0A%20%20%20%20%20%20%20%20%24('.zip-text-error-2').hide()%3B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-2').removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-2').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-2').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-2').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%20%20%7D%0A%0A%09%09%7D%20catch(err)%7B%20%20%20%20%7D%0A%0A%20%20%7D%0A%20%20%2F%2F%20Input%20validation%20triggers%0A%20%20%24('%23email-input-2').on('input%20change'%2C%20function%20()%20%7B%0A%20%20%20%20validateForm2()%3B%0A%20%20%20%20%0A%20%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%20%20%20%20%20%20const%20phone%20%3D%20%24('%5Bquestion-3-phone%5D').val()%3B%0A%20%20%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber3(phone))%3B%0A%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%20%20%0A%20%20%20%24('%23email-input-2').on('input'%2C%20function%20()%20%7B%0A%20%20%20const%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%20%20%20%20%20if%20(emailRegex.test(%24(this).val()))%20%7B%0A%20%20%20%20%20%20%20%24('.email-text-error-2').hide()%3B%0A%20%20%20%20%20%20%20isEmailValid2%20%3D%20true%3B%0A%20%20%20%20%20%20%20%2F%2F%24('%23submit-btn-2').removeClass('is-disabled')%3B%0A%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%24('.email-text-error-2').text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).').show()%3B%0A%20%20%20%20%20%20%20isEmailValid2%20%3D%20false%3B%0A%20%20%20%20%20%20%20%2F%2F%24('%23submit-btn-2').addClass('is-disabled')%3B%0A%20%20%20%20%20%7D%0A%20%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Prevent%20Enter%20key%20on%20inputs%0A%20%20%24('%20%23email-input-2').on('keypress'%2C%20function%20(e)%20%7B%0A%20%20%20%20if%20(e.which%20%3D%3D%3D%2013)%20e.preventDefault()%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%0A%20%20%20%20%2F%2F%20Input%20validation%20triggers%0A%20%20%24('%23zip-input-2').on('input%20change'%2C%20function%20()%20%7B%0A%20%20%20%20let%20zipCode%20%3D%20%24('%23zip-input-2').val().replace(%2F%5B%5E%5Cd%5D%2Fg%2C%20'').slice(0%2C%205)%3B%0A%20%20%20%20%24('%23zip-input-2').val(zipCode)%3B%0A%20%20%20%20validateForm2()%3B%0A%20%20%20%20%0A%20%20%20%20const%20phone%20%3D%20%24('%5Bquestion-3-phone%5D').val()%3B%0A%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber3(phone))%3B%0A%20%20%7D)%3B%0A%20%20%0A%0A%20%20%2F%2F%20Prevent%20Enter%20key%20globally%20on%20form%0A%20%20const%20calculatorForm%20%3D%20document.getElementById(%22wf-form-NTM-Screen-Form-2%22)%3B%0A%20%20if%20(calculatorForm)%20%7B%0A%20%20%20%20calculatorForm.addEventListener(%22keydown%22%2C%20function%20(event)%20%7B%0A%20%20%20%20%20%20if%20(event.key%20%3D%3D%3D%20%22Enter%22)%20event.preventDefault()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20%2F%2F%20Form%20submit%20handler%0A%20%20%24('%23have_medicare_advantage-form').on('submit'%2C%20function%20(e)%20%7B%0A%20%20%20%20const%20email%20%3D%20%24('%23email-input-2').val().trim()%3B%0A%0A%20%20%20%20if%20(!emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%2F%2Fe.preventDefault()%3B%0A%20%20%20%20%20%20validateForm2()%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%2F%2F%20Call%20your%20form%20submission%20function%0A%20%20%20%20%20%20submitForm('have_medicare_advantage'%2C%20%24('%23email-input-2').val())%3B%0A%0A%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20const%20offset%20%3D%20%24('%23article-form').offset().top%3B%0A%20%20%20%20%20%20%20%20%24('html%2C%20body').animate(%7B%0A%20%20%20%20%20%20%20%20%20%20scrollTop%3A%20offset%0A%20%20%20%20%20%20%20%20%7D%2C%201000)%3B%20%2F%2F%20Duration%20in%20milliseconds%0A%20%20%20%20%20%20%7D%2C%202800)%3B%0A%0A%20%20%20%20%20%20const%20urlParam%20%3D%20new%20URLSearchParams(new%20URL(window.location.href).search)%3B%0A%20%20%20%20%20%20const%20medicare%20%3D%20urlParam.get('medicare')%20%7C%7C%20''%3B%0A%0A%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20event%3A%20'email_submit'%2C%0A%20%20%20%20%20%20%20%20location%3A%20'have_medicare_advantage'%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20submit_loc%20%3D%20'have_medicare_advantage'%3B%0A%0A%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%20%20%0A%20%20%0A%7D)%3B%0A%0A%20%20%0A%7D)%3B%0A%3C%2Fscript%3E"
                                  />
                                ) : null}
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "email-text-error-2"
                                  )}
                                  tag="div"
                                >
                                  {
                                    "Please enter a valid email address (e.g., name@example.com)."
                                  }
                                </_Builtin.Block>
                                {phoneNumberVisibility ? (
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "phone-number-wrapper"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed value="%3Cinput%20question-3-phone%20id%3D%22phone%22%20class%3D%22zip-input%20custom1%20margin-bottom-10%20phone-number%22%20name%3D%22Phone%20Number%22%20data-name%3D%22phone_number%22%20placeholder%3D%22e.g.%2C%20(312)%20555-1212%20(optional)%22%20inputmode%3D%22decimal%22%20onInput%3D%22this.value%20%3D%20phoneFormat(this.value)%22%20style%3D%22width%3A%20100%25%3B%22%20pattern%3D%22%5E%5C(%3F%5Cd%7B3%7D%5C)%3F%5B-.%5Cs%5D%3F%5Cd%7B3%7D%5B-.%5Cs%5D%3F%5Cd%7B4%7D%24%22%20title%3D%22Enter%20a%20valid%20phone%20number%20(e.g.%2C%20123-456-7890)%22%2F%3E" />
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "error-input-msg",
                                        "phone-msg"
                                      )}
                                      tag="div"
                                    >
                                      {
                                        "Please enter a valid 10 digit phone number"
                                      }
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                ) : null}
                                <_Builtin.FormButton
                                  className={_utils.cx(
                                    _styles,
                                    "button",
                                    "nav-btn",
                                    "phone-number",
                                    "v5",
                                    "text-weight-semi-bold",
                                    "is-disabled",
                                    "w-node-fe72d218-eeaa-8982-d7f4-8b224e6804eb-4e68030d"
                                  )}
                                  id={_utils.cx(_styles, "submit-btn-2")}
                                  type="submit"
                                  value="Get My Free Report Card"
                                  data-wait="Please wait..."
                                />
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.FormForm>
                        <_Builtin.FormSuccessMessage
                          className={_utils.cx(_styles, "article-success-msg")}
                        >
                          <_Builtin.RichText
                            className={_utils.cx(
                              _styles,
                              "article-question-richtext"
                            )}
                            tag="div"
                            slot=""
                          >
                            <_Builtin.Heading tag="h3">
                              <_Builtin.NotSupported _atom="InlineCode" />
                            </_Builtin.Heading>
                            <_Builtin.Paragraph>
                              {
                                "There are real reasons this makes sense for many people, and you're probably saving money each month in premiums."
                              }
                            </_Builtin.Paragraph>
                            <_Builtin.Paragraph>
                              {
                                "The most important thing is to make sure you're in the RIGHT Medicare Advantage plan though. And that means the one that has the best network for you and offers the best benefits."
                              }
                            </_Builtin.Paragraph>
                            <_Builtin.Paragraph>
                              <_Builtin.Strong>
                                {
                                  "Do you want to pull a quick report card on your plan, and show how it ranks against all the other plans in your county? "
                                }
                              </_Builtin.Strong>
                              {
                                "You might be in the right one, but you might be surprised and able to upgrade to better coverage or more benefits."
                              }
                            </_Builtin.Paragraph>
                            <_Builtin.Paragraph>
                              {
                                "It would only take a couple of minutes and its completely online. No phone call."
                              }
                            </_Builtin.Paragraph>
                            <_Builtin.Paragraph>{"‍"}</_Builtin.Paragraph>
                            <_Builtin.Paragraph>
                              {"Thanks! We'll be reaching out to you shortly."}
                            </_Builtin.Paragraph>
                          </_Builtin.RichText>
                        </_Builtin.FormSuccessMessage>
                        <_Builtin.FormErrorMessage>
                          <_Builtin.Block tag="div">
                            {
                              "Oops! Something went wrong while submitting the form."
                            }
                          </_Builtin.Block>
                        </_Builtin.FormErrorMessage>
                      </_Builtin.FormWrapper>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "article-questions-wrapper"
                      )}
                      data-w-id="fe72d218-eeaa-8982-d7f4-8b224e680502"
                      tag="div"
                      id="flow3"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "article-anchor",
                          "custom-3"
                        )}
                        tag="div"
                        id="have-both-form"
                      />
                      <_Builtin.FormWrapper
                        className={_utils.cx(
                          _styles,
                          "article-ans-form-wrapper"
                        )}
                      >
                        <_Builtin.FormForm
                          className={_utils.cx(_styles, "article-ans-form")}
                          name="wf-form-Article-Medicare-Form"
                          data-name="Article Medicare Form"
                          method="get"
                          id="have_medicare_supplement-form"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "article-questions-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.RichText
                              className={_utils.cx(
                                _styles,
                                "article-question-richtext"
                              )}
                              tag="div"
                              slot=""
                            >
                              <_Builtin.Heading tag="h3">
                                {"‍"}
                                <_Builtin.NotSupported _atom="InlineCode" />
                              </_Builtin.Heading>
                              <_Builtin.Paragraph>
                                {
                                  "If you have a prescription drug plan, we might be able to save you some money."
                                }
                              </_Builtin.Paragraph>
                              <_Builtin.Paragraph>
                                {
                                  "Would you like to get an online perscription drug plan report card and see if you could be saving money without reducing your coverage?"
                                }
                              </_Builtin.Paragraph>
                              <_Builtin.Paragraph>
                                {
                                  "This would only take a couple of minutes and be 100% online. No phone calls."
                                }
                              </_Builtin.Paragraph>
                            </_Builtin.RichText>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "article-ans-wrapper"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "screener-input-wrapper",
                                  "full-width"
                                )}
                                tag="div"
                              >
                                {zipCodeVisibility ? (
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "zip-code-wrapper"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.FormTextInput
                                      className={_utils.cx(
                                        _styles,
                                        "zip-input",
                                        "custom1",
                                        "margin-bottom-10"
                                      )}
                                      name="Zip-Code"
                                      maxLength="5"
                                      data-name="Zip Code"
                                      placeholder="Zip Code"
                                      disabled={false}
                                      type="number"
                                      required={false}
                                      autoFocus={false}
                                      inputMode="numeric"
                                      max="99999"
                                      min="0"
                                      autoComplete="off"
                                      id="zip-input-3"
                                    />
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "zip-text-error-3"
                                      )}
                                      tag="div"
                                    >
                                      {"Please enter a valid 5 digit zip code."}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                ) : null}
                                <_Builtin.FormTextInput
                                  className={_utils.cx(
                                    _styles,
                                    "zip-input",
                                    "custom1",
                                    "margin-bottom-10"
                                  )}
                                  name="Email"
                                  maxLength={256}
                                  data-name="Email"
                                  placeholder="Your Email"
                                  disabled={false}
                                  type="email"
                                  required={true}
                                  autoFocus={false}
                                  autoComplete="off"
                                  id="email-input-3"
                                />
                                <_Builtin.HtmlEmbed
                                  className={_utils.cx(
                                    _styles,
                                    "form-validation-script"
                                  )}
                                  value="%3Cscript%3E%0Afunction%20isValidUSPhoneNumber4(input)%20%7B%0A%20%20%20%20%2F%2F%20Remove%20all%20non-digit%20characters%0A%20%20%20%20try%20%7B%0A%20%20%20%20const%20digits%20%3D%20input.replace(%2F%5CD%2Fg%2C%20'')%3B%0A%0A%20%20%20%20%2F%2F%20Check%20for%20valid%2010-digit%20US%20number%20or%2011-digit%20with%20country%20code%20'1'%0A%20%20%20%20if%20(digits.length%20%3D%3D%3D%2010)%20%7B%0A%20%20%20%20%20%20%20%20return%20true%3B%20%2F%2F%20e.g.%205551234567%0A%20%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%7D%20else%20if%20(digits.length%20%3D%3D%3D%2011%20%26%26%20digits.startsWith('1'))%20%7B%0A%20%20%20%20%20%20%20%20return%20true%3B%20%2F%2F%20e.g.%2015551234567%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%0A%20%20%20%20%20%20if(%24('%5Bquestion-4-phone%5D').val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').text('Please%20enter%20a%20valid%2010%20digit%20phone%20number')%3B%0A%20%20%20%20%20%20%20%20%24('.error-input-msg.phone-msg').show()%3B%0A%20%20%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%2C%20100)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%7D%20catch%20(error)%20%7B%20%7D%0A%0A%20%20%20%20return%20false%3B%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Cscript%3E%0Alet%20isEmailValid3%20%3D%20false%3B%0Alet%20isZipValid3%20%3D%20false%3B%0Aconst%20validZipRegex3%20%3D%20%2F%5E%5Cd%7B5%7D%24%2F%3B%0A%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function()%7B%0A%0A%20%20%24('%5Bquestion-4-phone%5D').on('input'%2C%20function()%7B%0A%20%20%20%20if(%24(this).val()%20!%3D%3D%20'')%7B%0A%20%20%20%20%20%20isPhoneEntered%20%3D%20true%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20isPhoneEntered%20%3D%20false%3B%0A%20%20%20%20%20%20%24(%22.button.nav-btn.phone-number.v5.text-weight-semi-bold%22).removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%24('.error-input-msg.phone-msg').hide()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%24(document).ready(function%20()%20%7B%0A%20%20const%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%0A%20%20function%20validateForm3()%20%7B%0A%20%20%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20const%20email%20%3D%20%24('%23email-input-3').val().trim()%3B%0A%20%20%20%20%20%20const%20zipCode%20%3D%20%24('%23zip-input-3').val().trim()%3B%0A%0A%20%20%20%20%20%20%2F%2F%20ZIP%20Validation%0A%20%20%20%20%20%20if%20(validZipRegex3.test(zipCode))%20%7B%0A%20%20%20%20%20%20%20%20%24('.zip-text-error-3').hide()%3B%0A%20%20%20%20%20%20%20%20isZipValid3%20%3D%20true%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('.zip-text-error-3').text('Please%20enter%20a%20valid%205%20digit%20zip%20code.').show()%3B%0A%20%20%20%20%20%20%20%20isZipValid3%20%3D%20false%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%2F%2F%20Email%20Validation%0A%20%20%20%20%20%20%2F*if%20(emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%24('.email-text-error-3').hide()%3B%0A%20%20%20%20%20%20isEmailValid3%20%3D%20true%3B%0A%20%20%20%20%20%20%24('%23submit-btn-3').removeClass('is-disabled')%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%24('.email-text-error-3').text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).').show()%3B%0A%20%20%20%20%20%20isEmailValid3%20%3D%20false%3B%0A%20%20%20%20%20%20%24('%23submit-btn-3').addClass('is-disabled')%3B%0A%20%20%20%20%7D*%2F%0A%0A%20%20%20%20%20%20const%20emailParts%20%3D%20email.split('%40')%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Trigger%20validation%20only%20if%20the%20email%20seems%20complete%20(ends%20with%20a%20dot%20or%20has%20full%20format)%0A%20%20%20%20%20%20const%20shouldValidate%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20email.includes('%40')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20emailParts.length%20%3D%3D%3D%202%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20emailParts%5B1%5D.includes('.')%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20(email.endsWith('.')%20%7C%7C%20%2F%5E%5B%5E%40%5D%2B%40%5B%5E%40%5D%2B%5C.%5B%5E%40%5D%2B%24%2F.test(email))%3B%0A%0A%20%20%20%20%20%20if%20(shouldValidate)%20%7B%0A%20%20%20%20%20%20%20%20const%20domainPart%20%3D%20emailParts%5B1%5D.trim()%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Basic%20domain%20validation%20(e.g.%2C%20example.com)%0A%20%20%20%20%20%20%20%20const%20domainRegex%20%3D%20%2F%5E%5Ba-zA-Z0-9.-%5D%2B%5C.%5Ba-zA-Z%5D%7B2%2C%7D%24%2F%3B%0A%0A%20%20%20%20%20%20%20%20if%20(emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-3').hide()%3B%0A%20%20%20%20%20%20%20%20%20%20isEmailValid3%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-3').removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24('.email-text-error-3')%0A%20%20%20%20%20%20%20%20%20%20%20%20.text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).')%0A%20%20%20%20%20%20%20%20%20%20%20%20.show()%3B%0A%20%20%20%20%20%20%20%20%20%20isEmailValid3%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%24('%23submit-btn-3').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('.email-text-error-3').hide()%3B%0A%20%20%20%20%20%20%20%20isEmailValid3%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-3').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%7D%0A%0A%0A%0A%20%20%20%20%20%20%2F%2F%20Toggle%20submit%20button%0A%20%20%20%20%20%20if%20(isZipValid3%20%26%26%20isEmailValid3)%20%7B%0A%20%20%20%20%20%20%20%20%24('.zip-text-error-3').hide()%3B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-3').removeClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-3').removeClass('is-disabled').prop('disabled'%2C%20false)%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-3').addClass('is-disabled')%3B%0A%20%20%20%20%20%20%20%20%24('%23submit-btn-3').addClass('is-disabled').prop('disabled'%2C%20true)%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%7D%20catch(err)%7B%20%20%20%20%7D%0A%0A%20%20%7D%0A%0A%20%20%2F%2F%20Input%20validation%20triggers%0A%20%20%24('%23email-input-3').on('input'%2C%20function%20()%20%7B%0A%20%20%20%20validateForm3()%3B%0A%20%20%20%20%0A%20%20%20%20%20if%20(window.location.pathname%20%3D%3D%3D%20'%2Farticle-why-i-would-never-get-medicare-advantage-calendar-tool-phone')%20%7B%0A%20%20%20%20%20%0A%20%20%20%20const%20phone%20%3D%20%24('%5Bquestion-4-phone%5D').val()%3B%0A%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber4(phone))%3B%0A%20%20%20%20%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%20%20%0A%20%20%20%24('%23email-input-3').on('input'%2C%20function%20()%20%7B%0A%20%20%20const%20emailRegex%20%3D%20%2F%5E%5B%5E%5Cs%40%5D%2B%40%5B%5E%5Cs%40%5D%2B%5C.(com%7Cnet%7Corg%7Cedu%7Cgov%7Cmil%7Cio%7Cco%7Cus%7Cbiz%7Cinfo%7Cme%7Cdev%7Cai)%24%2Fi%3B%0A%20%20%20%20%20if%20(emailRegex.test(%24(this).val()))%20%7B%0A%20%20%20%20%20%20%20%24('.email-text-error-3').hide()%3B%0A%20%20%20%20%20%20%20isEmailValid3%20%3D%20true%3B%0A%20%20%20%20%20%20%20%24('%23submit-btn-3').removeClass('is-disabled')%3B%0A%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%24('.email-text-error-3').text('Please%20enter%20a%20valid%20email%20address%20(e.g.%2C%20name%40example.com).').show()%3B%0A%20%20%20%20%20%20%20isEmailValid3%20%3D%20false%3B%0A%20%20%20%20%20%20%20%24('%23submit-btn-3').addClass('is-disabled')%3B%0A%20%20%20%20%20%7D%0A%20%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Prevent%20Enter%20key%20on%20inputs%0A%20%20%24('%20%23email-input-3').on('keypress'%2C%20function%20(e)%20%7B%0A%20%20%20%20if%20(e.which%20%3D%3D%3D%2013)%20e.preventDefault()%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%20%2F%2F%20Input%20validation%20triggers%0A%20%20%20%24('%23zip-input-3').on('input%20change'%2C%20function%20()%20%7B%0A%20%20%20%20%20let%20zipCode%20%3D%20%24('%23zip-input-3').val().replace(%2F%5B%5E%5Cd%5D%2Fg%2C%20'').slice(0%2C%205)%3B%0A%20%20%20%20%20%24('%23zip-input-3').val(zipCode)%3B%0A%20%20%20%20%20validateForm3()%3B%0A%20%20%20%20%20const%20phone%20%3D%20%24('%5Bquestion-4-phone%5D').val()%3B%0A%20%20%20%20%20console.log('Phone%3A%20'%2C%20isValidUSPhoneNumber4(phone))%3B%0A%20%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Prevent%20Enter%20key%20globally%20on%20form%0A%20%20const%20calculatorForm%20%3D%20document.getElementById(%22wf-form-NTM-Screen-Form-3%22)%3B%0A%20%20if%20(calculatorForm)%20%7B%0A%20%20%20%20calculatorForm.addEventListener(%22keydown%22%2C%20function%20(event)%20%7B%0A%20%20%20%20%20%20if%20(event.key%20%3D%3D%3D%20%22Enter%22)%20event.preventDefault()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20%2F%2F%20Form%20submit%20handler%0A%20%20%24('%23have_medicare_supplement-form').on('submit'%2C%20function%20(e)%20%7B%0A%20%20%20%20const%20email%20%3D%20%24('%23email-input-3').val().trim()%3B%0A%0A%20%20%20%20if%20(!emailRegex.test(email))%20%7B%0A%20%20%20%20%20%20%2F%2Fe.preventDefault()%3B%0A%20%20%20%20%20%20validateForm3()%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%2F%2F%20Call%20your%20form%20submission%20function%0A%20%20%20%20%20%20submitForm('have_medicare_supplement'%2C%20%24('%23email-input-3').val())%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20const%20offset%20%3D%20%24('%23article-form').offset().top%3B%0A%20%20%20%20%20%20%20%20%24('html%2C%20body').animate(%7B%0A%20%20%20%20%20%20%20%20%20%20scrollTop%3A%20offset%0A%20%20%20%20%20%20%20%20%7D%2C%201000)%3B%20%2F%2F%20Duration%20in%20milliseconds%0A%20%20%20%20%20%20%7D%2C%202800)%3B%0A%0A%20%20%20%20%20%20const%20urlParam%20%3D%20new%20URLSearchParams(new%20URL(window.location.href).search)%3B%0A%20%20%20%20%20%20const%20medicare%20%3D%20urlParam.get('medicare')%20%7C%7C%20''%3B%0A%0A%20%20%20%20%20%20const%20dataLayerEvent%20%3D%20%7B%0A%20%20%20%20%20%20%20%20event%3A%20'email_submit'%2C%0A%20%20%20%20%20%20%20%20location%3A%20'have_medicare_supplement'%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20submit_loc%20%3D%20'have_medicare_supplement'%3B%0A%0A%20%20%20%20%20%20window.dataLayer.push(dataLayerEvent)%3B%0A%20%20%20%20%20%20console.log(window.dataLayer)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%20%20%0A%20%20%0A%7D)%3B%0A%0A%20%20%0A%7D)%3B%0A%3C%2Fscript%3E"
                                />
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "email-text-error-3"
                                  )}
                                  tag="div"
                                >
                                  {
                                    "Please enter a valid email address (e.g., name@example.com)."
                                  }
                                </_Builtin.Block>
                                {phoneNumberVisibility ? (
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "phone-number-wrapper"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed value="%3Cinput%20question-4-phone%20id%3D%22phone%22%20class%3D%22zip-input%20custom1%20margin-bottom-10%20phone-number%22%20name%3D%22Phone%20Number%22%20data-name%3D%22phone_number%22%20placeholder%3D%22e.g.%2C%20(312)%20555-1212%20(optional)%22%20inputmode%3D%22decimal%22%20onInput%3D%22this.value%20%3D%20phoneFormat(this.value)%22%20style%3D%22width%3A%20100%25%3B%22%20pattern%3D%22%5E%5C(%3F%5Cd%7B3%7D%5C)%3F%5B-.%5Cs%5D%3F%5Cd%7B3%7D%5B-.%5Cs%5D%3F%5Cd%7B4%7D%24%22%20title%3D%22Enter%20a%20valid%20phone%20number%20(e.g.%2C%20123-456-7890)%22%2F%3E" />
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "error-input-msg",
                                        "phone-msg"
                                      )}
                                      tag="div"
                                    >
                                      {
                                        "Please enter a valid 10 digit phone number"
                                      }
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                ) : null}
                                <_Builtin.FormButton
                                  className={_utils.cx(
                                    _styles,
                                    "button",
                                    "nav-btn",
                                    "phone-number",
                                    "v5",
                                    "text-weight-semi-bold",
                                    "is-disabled",
                                    "w-node-fe72d218-eeaa-8982-d7f4-8b224e680518-4e68030d"
                                  )}
                                  id={_utils.cx(_styles, "submit-btn-3")}
                                  type="submit"
                                  value="Get My Free Report Card"
                                  data-wait="Please wait..."
                                />
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.FormForm>
                        <_Builtin.FormSuccessMessage
                          className={_utils.cx(_styles, "article-success-msg")}
                        >
                          <_Builtin.RichText
                            className={_utils.cx(
                              _styles,
                              "article-question-richtext"
                            )}
                            tag="div"
                            slot=""
                          >
                            <_Builtin.Heading tag="h3">
                              {"‍"}
                              <_Builtin.NotSupported _atom="InlineCode" />
                            </_Builtin.Heading>
                            <_Builtin.Paragraph>
                              {
                                "If you have a prescription drug plan, we might be able to save you some money."
                              }
                            </_Builtin.Paragraph>
                            <_Builtin.Paragraph>
                              {
                                "Would you like to get an online perscription drug plan report card and see if you could be saving money without reducing your coverage?"
                              }
                            </_Builtin.Paragraph>
                            <_Builtin.Paragraph>
                              {
                                "This would only take a couple of minutes and be 100% online. No phone calls."
                              }
                            </_Builtin.Paragraph>
                            <_Builtin.Paragraph>{"‍"}</_Builtin.Paragraph>
                            <_Builtin.Paragraph>
                              {"Thanks! We'll be reaching out to you shortly."}
                            </_Builtin.Paragraph>
                          </_Builtin.RichText>
                        </_Builtin.FormSuccessMessage>
                        <_Builtin.FormErrorMessage>
                          <_Builtin.Block tag="div">
                            {
                              "Oops! Something went wrong while submitting the form."
                            }
                          </_Builtin.Block>
                        </_Builtin.FormErrorMessage>
                      </_Builtin.FormWrapper>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Section>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
    </_Component>
  );
}
