import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import RecipeDetail from './components/RecipeDetail';
import AddRecipe from './components/AddRecipe';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="/add-recipe" element={<AddRecipe />} />
            </Routes>
        </Router>
    );
}

export default App;
