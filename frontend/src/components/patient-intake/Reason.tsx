import styled from "styled-components";
import type { Reason as ReasonType } from "../../types/types";

interface ReasonProp {
	reason: ReasonType;
}

const Reason = ({ reason }: ReasonProp) => {
	return (
		<Label>
			<Input
				className="text-tertiary focus:ring-tertiary"
				name="reason"
				type="radio"
			/>
			<Text className="ml-3 text-sm font-medium">{reason.text}</Text>
		</Label>
	);
};

const Input = styled.input`
	color: var(--tertiary);

	&:focus {
	}
`;

const Text = styled.span`
	margin-left: 1.2rem;
	font-weight: 600;
	font-size: 1.6rem;
`;

const Label = styled.label`
	/* flex items-center p-3 rounded bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer */
	display: flex;
	align-items: center;
	border-radius: 5px;
	background-color: var(--surface-container);
	transition: all ease-in-out 0.2s;
	cursor: pointer;
	padding: 1.2rem;

	&:hover {
		background-color: var(--surface-container-high);
	}
`;

export default Reason;
