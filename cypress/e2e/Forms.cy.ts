describe('Forms page', () => {
  it('forms visit', () => {
    cy.visit('/forms');
  });

  it('input not valid data to form', () => {
    cy.visit('/forms');
    cy.get('input[name="fullname"]').type('testName');
    cy.get('input[type="submit"]').click();
    cy.contains('Fullname must be two words');
  });

  it('input valid data to form', () => {
    cy.visit('/forms');
    cy.get('input[name="fullname"]').type('Nikita Kovalev');
    cy.get('input[type="date"]').type('2023-04-21');
    cy.get('input[name="gender"][value="male"]').check();

    const filePath = 'images/evening.jpg';
    cy.get('input[type="file"]').attachFile(filePath);

    cy.get('input[type="submit"]').click();

    cy.get('div.form-cards').should('have.length', 1);
  });
});
