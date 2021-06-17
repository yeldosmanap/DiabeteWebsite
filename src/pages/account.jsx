import React from 'react';
import {
	Container,
	FormButton,
	FormInput,
	FormWrap,
	Icon,
	FormContent,
	Form,
	FormH1,
	FormLabel,
	Text
} from '../components/Signin/SigninElements'

class Account extends React.Component {
	render() {
		const email = localStorage.getItem("email");
		const recipeHistory = JSON.parse(localStorage.getItem("recipeHistory"));
		let recipeHistoryItems;
		if (recipeHistory === null) {
			recipeHistoryItems = <h5>Your history is empty</h5>
		}
		else {
			recipeHistoryItems = <ul className="recipe-list">
				<Text>Your search history:</Text>
				{recipeHistory.map((el) => (
					<li>{el}</li>
				))}
			</ul>
		}
		return (

			<Container>
				<FormWrap>
					<Icon to="/">logo</Icon>
					<FormContent>
						<Form>
							<FormH1> Account</FormH1>
							<FormLabel htmlFor="for">Email: {email}</FormLabel>
							{recipeHistoryItems}
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		);
	}
}
export default Account