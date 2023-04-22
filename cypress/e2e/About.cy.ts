describe('About page', () => {
  it('about page works correctly', () => {
    cy.visit('/');
    cy.visit('/about');
  });
});
