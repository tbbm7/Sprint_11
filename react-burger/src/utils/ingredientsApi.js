const config = {
  API_URL: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export function getlIngredientsApi() {
  return fetch(`${config.API_URL}/ingredients`).then(checkResponse);
}

export function orderApi(ingredientsList) {
  return fetch(`${config.API_URL}/orders`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      ingredients: ingredientsList,
    }),
  }).then(checkResponse);
}
