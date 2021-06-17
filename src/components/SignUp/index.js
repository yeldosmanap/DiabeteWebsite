import React from 'react'
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
} from './SigninElements'


class SignUp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			login: "",
			password: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}


	async handleSubmit(event) {
		event.preventDefault();
		const data = {};
		data.login = this.state.login;
		data.password = this.state.password;
		// // console.log(data);
		//----------------------------
		let res = await fetch('http://localhost:80/den_prezent/api/user/reg.php', {
			method: 'POST',
			contentType: 'application/json',
			body: JSON.stringify(data)
		});
		res = await res.json();

		if (res.email !== undefined) {
			alert("Регистрация прошла успешно");
			localStorage.setItem("email", res.email);
			document.location.href = 'http://localhost:3000/'
			// window.location.reload();
		}
		else {
			alert("При регистрации	 произошла ошибка. Попробуйте ещё раз.");
		}
	}


	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'file' ? target.files[0] : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}
	render() {
		return (
			<Container>
				<FormWrap>
					<Icon to="/">logo</Icon>
					<FormContent>
						<Form onSubmit={this.handleSubmit} method="POST">
							<FormH1>Sign Up</FormH1>
							<FormLabel htmlFor="for">Email</FormLabel>
							<FormInput type="email" name="login" onChange={this.handleInputChange} required />
							<FormLabel htmlFor='for'>Password</FormLabel>
							<FormInput type="password" name="password" onChange={this.handleInputChange} required />
							<FormButton type="submit">Sign Up</FormButton>
							<Text><a className="sc-eGJWMs eSCVZV" href="/signin" offset={-80}>Already have account ?</a></Text>

						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		)
	}
}


export default SignUp
