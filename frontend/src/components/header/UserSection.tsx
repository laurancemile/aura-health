import styled from "styled-components";

import { MdPerson } from "react-icons/md";
import { MdHelp } from "react-icons/md";

const UserSection = () => {
	return (
		<Wrapper>
			<Icon data-icon="account_circle">
				<MdPerson />
			</Icon>
			<Icon data-icon="help_outline">
				<MdHelp />
			</Icon>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const Icon = styled.span`
	font-size: 3.2rem;
`;

export default UserSection;
