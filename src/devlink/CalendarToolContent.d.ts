import * as React from "react";
import * as Types from "./types";

declare function CalendarToolContent(props: {
  as?: React.ElementType;
  phoneNumberVisibility?: Types.Visibility.VisibilityConditions;
  phoneErrorText?: React.ReactNode;
  zipCodeVisibility?: Types.Visibility.VisibilityConditions;
  content?: Types.Basic.RichTextChildren;
  iAlreadyHaveMedicare?: Types.Visibility.VisibilityConditions;
  iAlreadyHaveMedicareV2?: Types.Visibility.VisibilityConditions;
  iAlreadyHaveV2Link?: Types.Basic.Link;
  scrollIntoVisibility?: Types.Visibility.VisibilityConditions;
  scrollIntoVisibility2?: Types.Visibility.VisibilityConditions;
  isValid2WithZipCodeVisibility?: Types.Visibility.VisibilityConditions;
  isValid2EmailOnlyVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
