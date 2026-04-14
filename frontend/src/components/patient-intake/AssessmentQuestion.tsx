import styled from "styled-components";
import ButtonYes from "./ButtonYes";
import ButtonNo from "./ButtonNo";

interface Props {
	question: string;
}

const AssessmentQuestion = ({ question }: Props) => {
	return (
		<Wrapper>
			<Question>{question}</Question>
			<Btns>
				<ButtonYes>Yes</ButtonYes>
				<ButtonNo>No</ButtonNo>
			</Btns>
		</Wrapper>
	);
};

const Btns = styled.div`
	display: flex;
	gap: 2.4rem;
`;

const Wrapper = styled.div`
	margin-bottom: 2.4rem;
`;

const Question = styled.p`
	font-weight: 600;
	color: var(--on-surface);
	margin-bottom: 1.2rem;
	font-size: 1.6rem;
`;

export default AssessmentQuestion;
