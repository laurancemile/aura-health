import type { ReactNode } from "react";
import styled from "styled-components";

interface Item {
	title: string;
	icon: ReactNode;
	text: string;
}

interface StreamProps {
	item: Item;
}

const Stream = ({ item }: StreamProps) => {
	return (
		<Label key={item.title}>
			<Input name="stream" type="radio" />
			<Icon>
				<span>{item.icon}</span>
			</Icon>
			<Info>
				<Title>{item.title}</Title>
				<Text>{item.text}</Text>
			</Info>
		</Label>
	);
};

const Input = styled.input`
	appearance: none;
	-webkit-appearance: none;
`;

const Label = styled.label`
	/* group relative flex items-center p-4 bg-white border-2 border-surface-container-high rounded cursor-pointer hover:border-primary transition-all */
	display: flex;
	align-items: center;
	background-color: #fff;
	border: 2px solid var(--surface-container-high);
	border-radius: 4px;
	cursor: pointer;
	transition: all ease-in-out 0.2s;
	padding: 1.2rem;
`;

const Icon = styled.span`
	/* w-12 h-12 flex items-center justify-center rounded bg-surface-container-low text-primary group-hover:clinical-gradient group-hover:text-white transition-colors" */
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50px;
	color: var(--primary);
	background-color: var(--surface-container-low);
	height: 4.8rem;
	width: 4.8rem;
	font-size: 6.2rem;
`;

const Info = styled.div`
	margin-left: 2.4rem;
`;

const Title = styled.p`
	/* text-sm font-bold uppercase tracking-wide */
	text-transform: uppercase;
	font-weight: 700;
	font-size: 1.4rem;
	line-height: 1.5;
`;

const Text = styled.p`
	/* text-[10px] text-outline uppercase font-semibold */
	font-size: 10px;
	text-transform: uppercase;
	font-weight: 500;
	color: var(--outline);
	line-height: 1.5;
`;

export default Stream;
