import styled from "styled-components";
import SectionHeader from "./SectionHeader";

import { MdFingerprint } from "react-icons/md";

const Identity = () => {
	return (
		<Wrapper>
			<SectionHeader icon={<MdFingerprint />} title="Identity Verification" />
			<div className="max-w-md">
				<Label htmlFor="id-number">Patient ID / HPRN Number</Label>
				<Input id="id-number" placeholder="e.g. 850101 5000 081" type="text" />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* p-6 md:p-8 border-b border-surface-container */
	border-bottom: 2px solid var(--surface-container);
	padding: 1.5rem;
`;

const Input = styled.input`
	/* w-full bg-surface-container-high border-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-4 py-3 text-lg font-mono tracking-wider transition-color */
	width: 100%;
	background-color: var(--surface-container-high);
	border: none;
	border-bottom: 3px solid var(--outline);
	font-family: monospace;
	transition: color ease-in-out 0.2s;
	font-size: 1.6rem;
	padding: 1.6rem 2.4rem;

	&:focus {
		border-color: var(--primary);
		outline: none;
		box-shadow: none;
	}
`;

const Label = styled.label`
	/* block text-[10px] font-bold uppercase tracking-widest text-outline mb-2 */
	display: block;
	font-size: 10px;
	text-transform: uppercase;
	font-weight: 600;
	margin-bottom: 1.6rem;
	color: var(--outline);
`;

export default Identity;
