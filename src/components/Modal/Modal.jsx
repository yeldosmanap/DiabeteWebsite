import React from 'react';
import './css/modal.css';

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allComponents: []
		}
		this.getAllComponents = this.getAllComponents.bind(this);
	}
	componentDidMount() {
		this.getAllComponents();
	}

	getAllComponents() {
		fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				this.setState({ allComponents: data.meals })
			});
	}

	render() {
		const components = [];
		const allComponents = this.state.allComponents;
		for (let index = 1; index < 21; index++) {
			let el = this.props.data[`strIngredient${index}`];
			if (el !== "" && el !== null) {
				let elem = allComponents.find(comp => comp.strIngredient.toLowerCase() === el.toLowerCase());
				let elId = elem !== undefined ? elem.idIngredient : "";
				components.push({ name: el, id: elId })
			}
		}
		console.log(components);
		const componentsList = components.map((el) => (
			<li>{el.name} <b>{el.id}</b> </li>
		))

		var grainUnits =  0;

		for (let index = 1; index < components.length; index++) {
			grainUnits = parseInt(grainUnits, 10) + parseInt(components[index].id, 10);
		}

		var insulinSum = grainUnits * 2;

		return (
			<div className="modal" id="modal">
				<div className="modal__body">
					<span className="modal__body__close" onClick={() => document.getElementById('modal').style.display = 'none'}>❌</span>
					<h3>{this.props.data.strMeal}</h3>
					<ul>
						{componentsList}
					</ul>
					<h2> Number of grain units = {grainUnits} , dose of insulin {insulinSum} </h2>
				</div>
			</div>
		);
	}
}

export default Modal;