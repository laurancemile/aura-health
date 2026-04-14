import styled from "styled-components";
import type { Reason as ReasonType } from "../../types/types";
import Reason from "./Reason";

const reasons: ReasonType[] = [
	{
		id: 1,
		text: "Forgot",
	},
	{
		id: 2,
		text: "No money For taxi",
	},
	{
		id: 3,
		text: "Ran out of pills",
	},
];

const Reasons = () => {
	return (
		<Wrapper>
			{reasons.map((reason) => {
				return <Reason key={reason.id} reason={reason} />;
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;

export default Reasons;
