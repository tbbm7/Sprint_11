import './styles/main.css';
import React from 'react'
import "./App.css"
import ReactDOM from 'react-dom/client'
import {useEffect, useState} from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";



const API = 'https://norma.nomoreparties.space/api/ingredients'


function App() {
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
    async function getIngredientsApi() {
        const response =  await fetch(`${API}`);
        const data =  await response.json();
        setIngredients(data.data)
    }
    getIngredientsApi()
    }, [])

    return (
        <>
          <AppHeader/>
            <main  style={{ display: 'flex', justifyContent:'center', gap:"24px"}}>
              <BurgerIngredients data={ingredients}/>
              <BurgerConstructor data={ingredients}/>
            </main> 
            
        </>
     )
};

export default App