import styled from 'styled-components';

export const Container = styled.div`
	width: 90%;
   min-height: 40px;
	display: flex;
	justify-content space-between;
   align-items: center;
   margin: 0.3em 0;

`;

export const DoneButton = styled.button`
	background: none;
	border: none;
	color: white;
	font-size: 1.5rem;
	cursor: pointer;
`;


export const TodoText = styled.p`
	background: ${(props) => (props.done ? 'gray' : 'lightblue')};
	width: 80%;
	min-height: 40px;
	padding: 0 10px;
	line-height: 40px;
	font-size: 1.5rem;
	text-align: left;
	border-radius: 3px;
	text-decoration: ${(props) => props.done && 'line-through'};
`;

export const RemoveButton = styled.button`
	border: none;
	cursor: pointer;
	background: none;
	font-size: 1.5rem;
	font-weight: bold;
	color: white;
	&: hover {
		color: black;
	}
`;
