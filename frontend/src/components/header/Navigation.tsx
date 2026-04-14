import styled from "styled-components";

interface Menu {
	link: string;
	text: string;
}

const menu: Menu[] = [
	{
		link: "",
		text: "Intake",
	},
	{
		link: "",
		text: "History",
	},
	{
		link: "",
		text: "Support",
	},
];

const Navigation = () => {
	return (
		<Nav>
			{menu.map((el) => {
				return (
					<Link key={el.text} href={el.link}>
						{el.text}
					</Link>
				);
			})}
		</Nav>
	);
};

const Nav = styled.nav`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

const Link = styled.a`
	font-weight: 500;
	font-size: 1.6rem;
	line-height: 1.25rem;
	text-decoration: none;
	padding-bottom: 4px;
	color: currentColor;
	transition: color ease-in-out 0.3s;

	&.active {
		border-bottom: 2px solid var(--primary);
	}

	&:hover {
		color: var(--primary);
	}
`;

export default Navigation;
