import { ThunkAction, ThunkDispatch } from "redux-thunk";
import store from "../store";
import {
  TConstructorAction,
  TIngredientsAction,
  TCurrenIngredientAction,
  TOrderAction,
  TUserActions,
  TFeedOrdersActions

} from "../types/data";

type TApplicationActions =
  | TConstructorAction
  | TIngredientsAction
  | TCurrenIngredientAction
  | TOrderAction
  | TUserActions
  | TFeedOrdersActions

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;