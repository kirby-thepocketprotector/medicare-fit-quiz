import * as React from "react";
import * as Types from "./types";

declare function SeeIfQualifyCta(props: {
  as?: React.ElementType;
  mainCtaTextVisibility?: Types.Visibility.VisibilityConditions;
  secondCtaTextVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
