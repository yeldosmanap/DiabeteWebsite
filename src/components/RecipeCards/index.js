import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import {
	Container,
	Meal,
	MealImageHolder,
	MealImage,
	MealWrap,
	MealTitle,
	MealInstructions,
	MealInfo,
	MealList,
	MealStrong,
	MealButton
} from './RecipeCardsElements'

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const RandomMeal = () => {
	const [meal, setMeal] = useState(undefined);

	useEffect(() => {
		async function getMeal() {
			const res = await fetch(API_URL);
			const data = await res.json();

			setMeal(data.meals[0]);
		}
		getMeal();

	}, []);

	if (!meal) return null;

	const {
		strMeal,
		strMealThumb,
		strInstructions,
		strArea,
		strCategory
	} = meal;


	function addMeal(mealName) {

		let recipeHistory = JSON.parse(localStorage.getItem("recipeHistory"));
		console.log(mealName);
		if (recipeHistory === null) {
			recipeHistory = [];
		}
		recipeHistory.push(mealName)
		localStorage.setItem("recipeHistory", JSON.stringify(recipeHistory));
	}
	return (
		<div>
			<Container>
				<Meal>
					<MealImageHolder>
						<MealImage src={strMealThumb} alt={strMeal} />
					</MealImageHolder>
					<MealWrap>
						<MealTitle>{strMeal}</MealTitle>
						<MealInstructions> {strInstructions.substring(0, 200) + "..."} </MealInstructions>
						<MealInfo>
							<MealList>
								Category:
                        <MealStrong>{strCategory}</MealStrong>
							</MealList>
							<MealList>
								Area:
                        <MealStrong>{strArea}</MealStrong>
							</MealList>
						</MealInfo>

						<MealButton onClick={() => { document.getElementById('modal').style.display = 'flex'; addMeal(meal.strMeal); }}> View Recipe </MealButton>
					</MealWrap>
				</Meal>
			</Container>
			<Modal data={meal} />
		</div>
	)

}

export default RandomMeal;