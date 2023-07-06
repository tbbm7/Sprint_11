import styles from './BurgerConstructorBlock.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IBurgerConstructorBlock } from '../../services/types/data';
import { REORDER_INGREDIENT } from '../../services/actions/constructor';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from '../../services/hooks';
import { FC } from 'react';
import { deleteIngredient } from '../../services/actions/constructor';

const BurgerConstructorBlock: FC<IBurgerConstructorBlock> = ({
  text,
  price,
  thumbnail,
  type,
  isLocked,
  index,
  ingredientUniqId,
}) => {
  const dispatch = useDispatch();
  const elementIndex = index;
  const [, dragRef] = useDrag({
    type: 'ingredientBlock',
    item: { index },
  });

  const [, dropTarget] = useDrop({
    accept: 'ingredientBlock',
    drop(index: any) {
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
            handleClose={() => dispatch(deleteIngredient(ingredientUniqId))}
            isLocked={isLocked}
            text={text}
            price={price}
            thumbnail={thumbnail}
          />
        </div>
      </div>
    </li>
  );
};

export default BurgerConstructorBlock;
