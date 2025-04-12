import { Code as CodeBase } from "./code";

export const Code = (props) => (
	<CodeBase as="code" {...props}>
		{props?.children}
	</CodeBase>
);

export * from "./code";
