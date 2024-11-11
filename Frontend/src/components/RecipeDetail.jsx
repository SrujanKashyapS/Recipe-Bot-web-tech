import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        // Fetch recipe details by ID
    }, [id]);

    return (
        <div>
            {recipe ? (
                <div>
                    <h2>{recipe.title}</h2>
                    <p>{recipe.instructions}</p>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RecipeDetail;
