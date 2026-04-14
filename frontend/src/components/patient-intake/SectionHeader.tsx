import type { ReactNode } from "react";
import styled from "styled-components";

interface HeaderProps {
	icon?: ReactNode;
	title: string;
}

const SectionHeader = ({ icon, title }: HeaderProps) => {
	return (
		<HeaderStyles>
			<Icon data-icon="split_scene">{icon}</Icon>
			<Heading>{title}</Heading>
		</HeaderStyles>
	);
};

const Icon = styled.span`
	color: var(--primary);
	font-size: 4.8rem;
`;

const HeaderStyles = styled.div`
	/* flex items-center gap-3 mb-6 */
	display: flex;
	align-items: center;
	gap: 1.6rem;
	margin-bottom: 2.4rem;
`;

const Heading = styled.h2`
	/* text-lg font-bold */
	font-weight: 700;
	font-size: 1.8rem;
`;

export default SectionHeader;
