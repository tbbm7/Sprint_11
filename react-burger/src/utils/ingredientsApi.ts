import {config} from "./formApi";

function checkResponse(res: Response) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export function getlIngredientsApi() {
  return fetch(`${config.API_URL}/ingredients`).then(checkResponse);
}

export function orderApi(ingredientsList: Array<string>, accessToken: string | undefined) {
  return fetch(`${config.API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      ingredients: ingredientsList
    }),
  }).then(checkResponse);
}

export function getOrdersApi() {
  return fetch(`${config.API_URL}/orders/all`).then(checkResponse);
}