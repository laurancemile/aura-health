import styled from "styled-components";

const IntakeHeader = () => {
	return (
		<Wrapper>
			<Heading>Clinical Intake</Heading>
			<Text>Triage Sieve • System v4.2</Text>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: var(--surface-container-low);
	border-bottom: 4px solid var(--primary-container);
	padding: 1.5rem;
`;

const Heading = styled.h1`
	font-size: 2.4rem;
	font-weight: 800;
	line-height: 1.2;
	margin-bottom: 0.4rem;
`;

const Text = styled.p`
	font-size: 1.6rem;
	font-weight: 500;
	text-transform: uppercase;
	line-height: 1.5;
	letter-spacing: 1px;
	color: var(--on-surface-variant);
`;

export default IntakeHeader;
