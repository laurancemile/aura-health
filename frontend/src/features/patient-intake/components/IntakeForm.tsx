import styled from "styled-components";
import IntakeHeader from "../../../components/patient-intake/IntakeHeader";
import Identity from "../../../components/patient-intake/Identity";
import Streams from "../../../components/patient-intake/Streams";
import Assessment from "../../../components/patient-intake/Assessment";

const IntakeForhtmlForm = () => {
	return (
		<Wrapper>
			<IntakeHeader />
			<Identity />
			<Streams />
			<Assessment />
			{/* <!-- Sticky Navigation Actions --> */}
			<div className="p-6 md:p-8 flex flex-col sm:flex-row gap-4">
				<button className="flex-1 py-4 clinical-gradient text-white font-extrabold rounded uppercase tracking-[0.2em] text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all">
					Continue Intake
				</button>
				<button className="flex-[0.4] py-4 bg-transparent text-primary font-bold rounded uppercase tracking-widest text-xs hover:underline transition-all">
					Back
				</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 1.2rem 2.4rem;
	max-width: 96rem;
	margin: 0 auto;
	background-color: var(--surface-container-lowest);
	overflow: hidden;
	border-radius: 5px;
`;

export default IntakeForhtmlForm;
