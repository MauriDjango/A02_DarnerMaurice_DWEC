import React, {useEffect, useState} from 'react';
import '../App.css';


//TODO: To be implemented
const Recipe = ({name, instrtuctions}) => {
    return (
        <li>
            <h3>{name}</h3>
            <p>{instrtuctions}</p>
        </li>
    )
}

const RecipeList = () => {
    const [recipes, setRecipes] = useState([
        {name: 'Spaghetti', instrtuctions: 'Hire an Italina'},
        {name: 'Tacos', instrtuctions: 'Hire a Mexican'},
        {name: 'Cheeseburger', instrtuctions: 'Hire me'}
    ])

    function addRecipe(name, instructions) {
        setRecipes([...recipes, {name, instructions}])
    }

    function removeRecipe(name) {
        setRecipes(recipes.filter(recipe => recipe.name !== name))
    }

    return (
        <div className="exercises-container">
            <div className="exercises-title">Cookbook</div>
            <div className="exercises-description">
                <p>Diseña un sitio web que muestre un libro de recetas (4 o 5), siguiendo las siguientes instrucciones:</p>
                <p>Las recetas deben tener nombre y explicación de la misma.</p>
                <p>Deben  mostrarse en formato ordered list</p>
                <p>La lista se generará desde JavaScript</p>
                <p>La web ha de tener un botón para eliminar receta que pida al usuario el número de receta a eliminar, comprobar si existe, y si es así eliminarla de la lista.</p>
            </div>
            <div className="exercises-input">

            </div>
        </div>
    )
}

export default RecipeList;