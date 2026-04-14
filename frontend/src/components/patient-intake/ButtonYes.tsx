import { type ReactNode } from "react";
import styled from "styled-components";
import Button from "../Button";

const ButtonYes = ({ children }: { children: ReactNode }) => {
	return <ButttonStyles>{children}</ButttonStyles>;
};

const ButttonStyles = styled(Button)`
	background-color: var(--primary);
	color: #fff;

	&:hover {
		opacity: 0.9;
	}
`;

export default ButtonYes;
