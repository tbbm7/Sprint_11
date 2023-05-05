import styles from './BurgerConstructorBlock.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { DELETE_INGREDIENT, REORDER_INGREDIENT } from '../../services/actions/constructor';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';

export default function BurgerConstructorBlock({
  text,
  price,
  thumbnail,
  type,
  isLocked,
  index,
  ingredientUniqId,
}) {
  const dispatch = useDispatch();
  const elementIndex = index;
  const [, dragRef] = useDrag({
    type: 'ingredientBlock',
    item: { index },
  });

  const [, dropTarget] = useDrop({
    accept: 'ingredientBlock',
    drop(index) {
      if (elementIndex === index.index) return;
      dispatch({
        type: REORDER_INGREDIENT,
        payload: [index.index, elementIndex],
      });
    },
  });

  return (
    <li ref={dropTarget} className={styles.constructor__column}>
      <div>{!type && <DragIcon type="primary" />}</div>
      <div>
        <div ref={dragRef} className={styles.constructor__element}>
          <ConstructorElement
            type={type}
            handleClose={() => dispatch({ type: DELETE_INGREDIENT, payload: ingredientUniqId })}
            isLocked={isLocked}
            text={text}
            price={price}
            thumbnail={thumbnail}
          />
        </div>
      </div>
    </li>
  );
}

BurgerConstructorBlock.propTypes = {
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  ingredientUniqId: PropTypes.string
};
