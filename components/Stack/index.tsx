import { Stack as StackBase } from "@chen/design-system/jsx";
import React from "react";

export const Stack = ({ children, ...props }) => (
	<StackBase {...props}>{children}</StackBase>
);
