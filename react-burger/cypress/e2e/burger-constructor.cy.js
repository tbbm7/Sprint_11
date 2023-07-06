const testURL = 'http://localhost:3000/';
const email = 'tbbm7@yandex.ru';
const password = 'Qwerty1234!';
const ingredientCard = 'ingredient-card';
const dragDestination = 'drag-destination';
const totalPrice = 'totalPrice';
const modal = 'modal'

describe('Тест конструктора бургеров', function () {
  before(() => {
    cy.visit(testURL);
    cy.viewport(1474, 762);
  });
});

describe('Тест создания заказа', () => {
  it('Перетаскивание ингредиентов в конструктор', () => {
    cy.visit(`${testURL}login`);
    cy.get('[type=email]').type(email);
    cy.get('[type=password]').type(password);
    cy.get('button').click();

    cy.get(`[data-testid=${ingredientCard}]`).first().trigger('dragstart').trigger('dragleave');
    cy.get(`[data-testid=${dragDestination}]`)
      .trigger('dragenter')
      .trigger('dragover')
      .trigger('drop')
      .trigger('dragend');

    cy.get(`[data-testid=${ingredientCard}]`).eq(3).trigger('dragstart').trigger('dragleave');
    cy.get(`[data-testid=${dragDestination}]`)
      .trigger('dragenter')
      .trigger('dragover')
      .trigger('drop')
      .trigger('dragend');

    cy.get(`[data-testid=${totalPrice}]`).should('contain', '2590');

    cy.get('button').click();

    cy.wait(20000);
    cy.get('[id="modal_close"]', { timeout: 1000 }).find('svg').click({ force: true });
    cy.get('[data-testid="modal"]').should('not.exist');
  });
});

it('Тест проверка открытия и закрытиея модального с ингредиентом', () => {
  cy.visit(`${testURL}`);
  cy.get(`[data-testid=${ingredientCard}]`).first().click();
  cy.location('pathname').should('eq', '/ingredients/60d3b41abdacab0026a733c6');

  cy.get(`[data-testid=${modal}]`).should('exist');

  cy.get('[id="modal_close"]', { timeout: 1000 }).find('svg').click({ force: true });
  cy.get(`[data-testid=${modal}]`).should('not.exist');
});
