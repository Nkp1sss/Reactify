describe('Modal', () => {
  it('Modal opens correctly', () => {
    cy.visit('/');
    cy.get('div[data-testid="test-1"').click();
    cy.contains('51 years old');
    cy.get('div.modal').should('exist');
    cy.get('span.modal-close').click();
    cy.get('div.modal').should('not.exist');
  });
});
