import type { ReactNode } from "react";
import styled from "styled-components";

import { MdMedicalServices } from "react-icons/md";
import { MdOutlinePregnantWoman } from "react-icons/md";
import { MdTagFaces } from "react-icons/md";
import { MdEmergency } from "react-icons/md";
import { MdCallToAction } from "react-icons/md";

import SectionHeader from "./SectionHeader";
import Stream from "./Stream";

interface Item {
	icon: ReactNode;
	title: string;
	text: string;
}

const items: Item[] = [
	{
		icon: <MdMedicalServices />,
		title: "General Check-up",
		text: "Routine Consultation",
	},
	{
		icon: <MdOutlinePregnantWoman />,
		title: "Maternal",
		text: "Antenatal Care",
	},
	{
		icon: <MdTagFaces />,
		title: "Paeds",
		text: "Under 12 Years",
	},
	{
		icon: <MdEmergency />,
		title: "Traume",
		text: "Urgent Care",
	},
];

const Streams = () => {
	return (
		<Wrapper>
			<SectionHeader
				icon={<MdCallToAction />}
				title="Clinical Stream Selection"
			/>
			<Selection>
				{items.map((item) => {
					return <Stream item={item} key={item.text} />;
				})}
			</Selection>
		</Wrapper>
	);
};

/*
      - Font sizes (px)
      10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

      - Spacing system (px)
      2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/

const Wrapper = styled.div`
	/* p-6 md:p-8 border-b border-surface-container */
	border-bottom: 3px solid var(--surface-container);
	padding: 1.6rem;
`;

const Selection = styled.form`
	/* grid grid-cols-1 sm:grid-cols-2 gap-3 */
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.6rem;
`;

export default Streams;
