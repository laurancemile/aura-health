import { type ReactNode } from "react";
import styled from "styled-components";
import Button from "../Button";

const ButtonNo = ({ children }: { children: ReactNode }) => {
	return <ButttonStyles>{children}</ButttonStyles>;
};

const ButttonStyles = styled(Button)`
	color: var(--outline);
	background-color: #fff;
	box-shadow: inset 0 0 0 3px var(--outline-variant);

	&:hover {
		background-color: var(--surface-container-lowest);
	}
`;

export default ButtonNo;
