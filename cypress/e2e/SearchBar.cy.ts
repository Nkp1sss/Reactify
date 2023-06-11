describe('Search Bar', () => {
  it('Search Bar works correctly', () => {
    cy.visit('/');
    cy.get('input.search__input').type('search value');
    cy.get('input.search__input').type('{enter}');
    cy.visit('/notfound');
  });
});
