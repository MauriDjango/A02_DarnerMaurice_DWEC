import React, { useState } from 'react';
import '../App.css';

/**
 * Component for displaying a single recipe.
 *
 * @param {string} name - The name of the recipe.
 * @param {string} instructions - The instructions for the recipe.
 */
const Recipe = ({ name, instructions }) => {
    return (
        <li>
            <h3>{name}</h3>
            <p>{instructions}</p>
        </li>
    );
};

/**
 * Component for managing a list of recipes.
 */
const RecipeList = () => {
    const [recipes, setRecipes] = useState([
        { name: 'Spaghetti', instructions: 'Hire an Italian' },
        { name: 'Tacos', instructions: 'Hire a Mexican' },
        { name: 'Cheeseburger', instructions: 'Hire me' },
    ]);

    /**
     * Add a new recipe to the list.
     *
     * @param {string} name - The name of the recipe to add.
     * @param {string} instructions - The instructions for the new recipe.
     */
    function addRecipe(name, instructions) {
        setRecipes([...recipes, { name, instructions }]);
    }

    /**
     * Remove a recipe from the list by name.
     *
     * @param {string} name - The name of the recipe to remove.
     */
    function removeRecipe(name) {
        setRecipes(recipes.filter((recipe) => recipe.name !== name));
    }

    return (
        <div className="exercises-container">
            <div className="exercises-title">Cookbook</div>
            <div className="exercises-description">
                <p>
                    Diseña un sitio web que muestre un libro de recetas (4 o 5), siguiendo las siguientes instrucciones:
                </p>
                <p>Las recetas deben tener nombre y explicación de la misma.</p>
                <p>Deben mostrarse en formato ordered list.</p>
                <p>La lista se generará desde JavaScript.</p>
                <p>
                    La web ha de tener un botón para eliminar receta que pida al usuario el número de receta a eliminar, comprobar si existe,
                    y si es así eliminarla de la lista.
                </p>
            </div>
            <div className="exercises-input">
                {/* The form for adding a new recipe */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const name = e.target.name.value;
                        const instructions = e.target.instructions.value;
                        addRecipe(name, instructions);
                        e.target.reset();
                    }}
                >
                    <input type="text" name="name" placeholder="Recipe Name" required />
                    <input type="text" name="instructions" placeholder="Instructions" required />
                    <button type="submit">Add Recipe</button>
                </form>

                {/* The list of recipes */}
                <ul>
                    {recipes.map((recipe, index) => (
                        <Recipe key={index} name={recipe.name} instructions={recipe.instructions} />
                    ))}
                </ul>

                {/* The form for removing a recipe */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const nameToRemove = e.target.nameToRemove.value;
                        removeRecipe(nameToRemove);
                        e.target.reset();
                    }}
                >
                    <input type="text" name="nameToRemove" placeholder="Recipe Name to Remove" required />
                    <button type="submit">Remove Recipe</button>
                </form>
            </div>
        </div>
    );
};

export default RecipeList;
