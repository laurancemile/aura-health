import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./header/Navigation";
import UserSection from "./header/UserSection";

const Header = () => {
	return (
		<Wrapper>
			<Logo />
			<Navigation />
			<UserSection />
		</Wrapper>
	);
};

const Wrapper = styled.header`
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 9999;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.6rem 1.6rem;
	max-width: 100%;
`;

export default Header;
