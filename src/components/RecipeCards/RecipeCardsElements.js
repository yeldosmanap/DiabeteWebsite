import styled from 'styled-components';

export const Container = styled.section`
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
`

export const Meal = styled.div`
    display: flex;
    background-color: white;
    box-shadow: 0 10px 10px rgba(0,0,0,.15);
    border-radius: 5px;
`

export const MealImageHolder = styled.div`
    flex: 1;
    overflow: hidden;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const MealWrap = styled.div`
    flex: 2;
    padding: 30px;
    position: relative;
`

export const MealImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const MealTitle = styled.h3`
    font-size: 1.8rem;
    margin: 0 0 20px;
`

export const MealInstructions = styled.p`
    font-size: 14px;
`

export const MealInfo = styled.ul`
    list-style-type: none;
    padding: 0 ;
    display: flex;
`

export const MealList = styled.li`
    margin-right: 50px;
    font-size: 14px;
`

export const MealStrong = styled.strong`
    display: block;
    font-size: 18px;
`

export const MealButton = styled.button`
    box-shadow: 0 5px 5px rgba(0,0,0,.15);
    position: absolute;
    bottom: -10px;
    right: -10px;
    background-color: black;
    color: white;
    padding: 20px 35px;
    border: none;
    border-radius: 5px
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: .5px;
    cursor: pointer;
`