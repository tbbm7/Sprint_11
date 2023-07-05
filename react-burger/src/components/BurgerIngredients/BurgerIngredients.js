import styles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BurgerIngridientsBlock from '../BurgerIngridientsBlock/BurgerIngridientsBlock';
import { useSelector, useDispatch } from 'react-redux';
import { CURRENT_INGREDIENT } from '../../services/actions/ingredientDetails';

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
  },
];

export default function BurgerIngredients() {
  const ingredients = useSelector((store) => store.ingredientList.ingredients);
  const [currentBlock, setBlockState] = useState('bun');

  const [bunRef, bunRefInView] = useInView({ threshold: 0.2 });
  const [sauceRef, sauceRefInView] = useInView({ threshold: 0.2 });
  const [mainRef, mainRefInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const block = document.getElementById(currentBlock);
    if (block !== null) {
      block.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentBlock]);

  useEffect(() => {
    if (bunRefInView) {
      setBlockState('bun');
    } else if (sauceRefInView) {
      setBlockState('sauce');
    } else {
      setBlockState('main');
    }
  }, [bunRefInView, sauceRefInView, mainRefInView]);

  const dispatch = useDispatch();

  const onClickIngredient = (groupIngredient) => {
    dispatch({ type: CURRENT_INGREDIENT, payload: groupIngredient });
  };

  return (
    <>
      <div className={`mt-30" ${styles.ingredients}`}>
        <h1 id="text" className="text text_type_main-large">
          Соберите бургер
        </h1>
        <div className={`mt-5" ${styles.ingredients__block_headers}`}>
          {ingredientBlockNames.map((tab) => (
            <Tab
              key={tab.name}
              value={tab.value}
              active={currentBlock === tab.value}
              onClick={setBlockState}>
              {tab.name}
            </Tab>
          ))}
        </div>
        {ingredients !== undefined && (
          <div className={styles.ingredients__blocks}>
            <div ref={bunRef}>
              <BurgerIngridientsBlock
                key={ingredientBlockNames[0].name}
                ingredientBlockName={ingredientBlockNames[0]}
                ingredientsArray={ingredients}
                onClickIngredient={onClickIngredient}></BurgerIngridientsBlock>
            </div>
            <div ref={sauceRef}>
              <BurgerIngridientsBlock
                key={ingredientBlockNames[1].name}
                ingredientBlockName={ingredientBlockNames[1]}
                onClickIngredient={onClickIngredient}
                ingredientsArray={ingredients}></BurgerIngridientsBlock>
            </div>
            <div ref={mainRef}>
              <BurgerIngridientsBlock
                key={ingredientBlockNames[2].name}
                ingredientBlockName={ingredientBlockNames[2]}
                onClickIngredient={onClickIngredient}
                ingredientsArray={ingredients}></BurgerIngridientsBlock>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
