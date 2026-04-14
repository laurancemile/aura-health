import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import AssessmentQuestion from "./AssessmentQuestion";
import Reasons from "./Reasons";

const Assessment = () => {
	return (
		<Wrapper>
			<SectionHeader title="Chronic Stream Assessment" />
			<AssessmentQuestion question="Are you taking medication for Sugar (Diabetes) or High Blood Pressure?" />
			<AssessmentQuestion question="Have you missed any doses in the last two weeks?" />

			<SectionReasons>
				<Heading>Reason For Missed Dosage</Heading>
				<Reasons />
			</SectionReasons>
			<AssessmentQuestion question="Do you have enough food at home to take your meds with?" />
		</Wrapper>
	);
};

const Heading = styled.p`
	font-size: 1.6rem;
	font-weight: 700;
	text-transform: uppercase;
	color: var(--tertiary);
	margin-bottom: 1.2rem;
	line-height: 1.5;
`;

const SectionReasons = styled.div`
	background-color: #fff;
	border-radius: 2px;
	border-left: 4px solid var(--tertiary);
	box-shadow: 0 0 24px rgba(0, 0, 0, 0.05);
	padding: 2.4rem;
	margin-bottom: 4.6rem;
`;

const Wrapper = styled.section`
	/* p-6 md:p-8 bg-surface-container-low/50 */
	background-color: var(--surface-container-low);
	padding: 1.6rem;
`;

export default Assessment;
