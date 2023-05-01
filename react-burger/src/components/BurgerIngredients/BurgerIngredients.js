import styles from './BurgerIngredients.module.css'
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react'
import IngridientsBlock from "../BurgerIngridientsBlock/BurgerIngridientsBlock"
import PropTypes from "prop-types";

const ingredientBlockNames = [
    {
       name: 'Булки',
       value: 'bun',
    },
    {
       name: 'Соусы',
       value: 'sauce',
    },
    {
       name: 'Начинки',
       value: 'main',
    }
 ]

export default function BurgerIngredients({ data }) {
    
    const [currentBlock, setBlockState] = React.useState('bun')

    React.useEffect(() => {
        document.getElementById(currentBlock).scrollIntoView({ behavior: "smooth" } )
      }, [currentBlock]);

    return (
      <section className={`mt-30" ${styles.ingredients}`}>
        <h1 className="text text_type_main-large ml-10">Соберите бургер</h1>
        <div className="mt-5 ml-10" style={{ display: 'flex'}}>
          {ingredientBlockNames.map( tab => 
              <Tab
                  key={ tab.name }
                  value={ tab.value }
                  active={ currentBlock === tab.value }
                  onClick={ setBlockState }
              >{tab.name }
              </Tab>
              )
              }
      </div>
      <div className={styles.ingredients__blocks}>
        <ul style={{ listStyle: 'none'}}>
          {ingredientBlockNames.map( ingredientName =>
              <IngridientsBlock 
              key={ingredientName.name}
              ingredientBlockName={ingredientName}
              ingredientsArray={data}></IngridientsBlock>
          )}
        </ul>
      </div>
      </section>
    )
};

BurgerIngredients.propTypes = {
  data: PropTypes.array
}; 
