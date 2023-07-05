import styles from './IngredientCard.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';
import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import { IIngredientCard } from '../../services/types/data';
import { useSelector } from '../../services/hooks';

const IngredientCard: FC<IIngredientCard> = ({ ingredient, onClickIngredient }) => {
  const ingridientElement = ingredient;

  const { bun, fillings } = useSelector((store) => store.constructorList);
  const location = useLocation();

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
    if (fillings.length > 0) {
      return Object.keys(fillings.filter((props) => props._id === ingridientElement._id)).length;
    }
    return 0;
  }, [ingridientElement, fillings, bun]);

  return (
    <>
      <div id={ingridientElement._id} ref={dragRef} className={styles.ingredient}>
        <Counter count={counter} size="default" extraClass="m-1" />
        <Link
          to={`/ingredients/${ingridientElement._id}`}
          className={`text_color_primary ${styles.ingredient__link}`}
          onClick={onClickIngredient}
          state={{ locationIngredient: location }}>
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
        </Link>
      </div>
    </>
  );
};

export default IngredientCard;
