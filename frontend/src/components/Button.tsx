import type { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
	return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.button`
	/* flex-1 py-3 px-6 bg-white border border-outline-variant text-outline font-bold rounded uppercase tracking-widest text-xs */
	text-transform: uppercase;
	font-size: 1.6rem;
	border-radius: 5px;
	padding: 1.2rem 2.4rem;
	border: none;
	font-weight: 600;
	letter-spacing: 1.5px;
	cursor: pointer;
	transition: all ease-in-out 0.2s;
	width: 100%;
`;

export default Button;
