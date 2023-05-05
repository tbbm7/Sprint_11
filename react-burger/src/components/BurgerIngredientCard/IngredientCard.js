import styles from './IngredientCard.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';

export default function IngredientCard(props) {
  const ingridientElement = props.ingredient;
  const { bun, fillings } = useSelector((store) => store.constructorList);

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { ingridientElement },
  });

  const counter = useMemo(() => {
    if (bun != null) {
      if (ingridientElement.type === 'bun' && ingridientElement._id === bun._id) {
        return 2;
      }
    }
    if (fillings.ingridientElement !== []) {
      return Object.keys(fillings.filter((props) => props._id === ingridientElement._id)).length;
    }
    return 1;
  }, [ingridientElement, fillings, bun]);

  return (
    <>
      <div id={ingridientElement._id} ref={dragRef} className={styles.ingredient}>
        <Counter count={counter} size="default" extraClass="m-1" />
        <img
          src={ingridientElement.image}
          className={styles.ingredient__image}
          alt={ingridientElement.name}
        />
        <div className={`mt-2 ${styles.ingredient__price}`}>
          <p className="text text_type_digits-default mt-2">{ingridientElement.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`text text_type_main-small mt-2 ${styles.ingredient__text}`}>
          {ingridientElement.name}
        </p>
      </div>
    </>
  );
}
