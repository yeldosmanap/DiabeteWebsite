import RandomMeal from '../components/RecipeCards';
import React from 'react';

class recipes extends React.Component {
	render() {
		return <section>
			<h2> Featured Meal </h2>
			<RandomMeal />
		</section>;
	}
}
export default recipes