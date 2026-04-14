import styled from "styled-components";

const Logo = () => {
	return (
		<Wrapper>
			<Text>Aura Health</Text>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

const Text = styled.span`
	font-weight: 900;
	text-transform: uppercase;
	font-size: 1.6rem;
	line-height: 1.75rem;
	color: var(--primary);
`;

export default Logo;
