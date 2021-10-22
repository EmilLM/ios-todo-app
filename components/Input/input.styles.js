import styled from 'styled-components';

export const Form = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 2em 0;
`;

export const InputText = styled.input`
	width: 62%;
	margin: 0 20px;
	min-width: 200px;
	cursor: text;
	font-size: 1.3rem;
	padding: 0 16px;
	height: 38px;
	background-color: #fff;
	border: 1px solid #d6d6e7;
	border-radius: 3px;
	color: rgb(35, 38, 59);
	box-shadow: inset 0 1px 4px 0 rgb(119 122 175 / 30%);
	overflow: hidden;
	transition: all 100ms ease-in-out;
	:focus {
		border-color: #3c4fe0;
		box-shadow: 0 1px 0 0 rgb(35 38 59 / 5%);
	}
`;

export const InputSubmit = styled.input`
	min-width: 70px;
	height: 38px;
	outline: 0;
	border: 0;
	cursor: pointer;
	will-change: box-shadow, transform;
	background: radial-gradient(100% 100% at 100% 0%, #89e5ff 0%, #5468ff 100%);
	box-shadow: 0px 2px 4px rgb(45 35 66 / 40%),
		0px 7px 13px -3px rgb(45 35 66 / 30%),
		inset 0px -3px 0px rgb(58 65 111 / 50%);
	border-radius: 6px;
	color: #fff;
	font-size: 1rem;
	font-weight: bold;
	text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
	transition: box-shadow 0.15s ease, transform 0.15s ease;
	:hover {
		box-shadow: 0px 4px 8px rgb(45 35 66 / 40%),
			0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #3c4fe0;
		transform: translateY(-2px);
	}
	:active {
		box-shadow: inset 0px 3px 7px #3c4fe0;
		transform: translateY(2px);
	}
`;
export const ClearButton = styled.button`
	min-width: 70px;
	outline: 0;
	border: 0;
	cursor: pointer;
	will-change: box-shadow, transform;
	background: radial-gradient(100% 100% at 100% 0%, #89e5ff 0%, #5468ff 100%);
	box-shadow: 0px 2px 4px rgb(45 35 66 / 40%),
		0px 7px 13px -3px rgb(45 35 66 / 30%),
		inset 0px -3px 0px rgb(58 65 111 / 50%);
	border-radius: 6px;
	color: #fff;
	font-size: 1rem;
	font-weight: bold;
	text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
	transition: box-shadow 0.15s ease, transform 0.15s ease;
	:hover {
		box-shadow: 0px 4px 8px rgb(45 35 66 / 40%),
			0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #3c4fe0;
		transform: translateY(-2px);
	}
	:active {
		box-shadow: inset 0px 3px 7px #3c4fe0;
		transform: translateY(2px);
	}
`;
