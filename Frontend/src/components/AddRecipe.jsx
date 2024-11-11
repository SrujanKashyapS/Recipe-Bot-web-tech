import React, { useState } from 'react';

function AddRecipe() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = () => {
        // Call API to add a new recipe
    };

    return (
        <div>
            <h2>Add a New Recipe</h2>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Ingredients" onChange={(e) => setIngredients(e.target.value)} />
            <textarea placeholder="Instructions" onChange={(e) => setInstructions(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddRecipe;
