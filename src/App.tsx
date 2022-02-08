import React from 'react';
import './App.css';

import LessonList from "./components/LessonsList/LessonsList";

import { useLessons } from './components/LessonContext/LessonContext';
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LessonPage from "./components/LessonPage/LessonPage";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";

function App() {
    const { state, dispatch } = useLessons();

  return (
    <div className="App">
        <BrowserRouter>
            <Header dispatch={dispatch} />
            <Routes>
                <Route path='/' element={ <LessonList lessons={state.shown} /> } />
                <Route path='lesson/:id' element={ <LessonPage /> } />
                <Route path='/favorites' element={ <FavoritesPage /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
