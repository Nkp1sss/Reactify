describe('Home page', () => {
  it('home visit', () => {
    cy.visit('/');
  });

  it('card renders', () => {
    cy.visit('/');
    cy.request('https://json-server-6d972uqd4-nkp1sss.vercel.app/catalog').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.length(12);
      cy.get('div.card').should('have.length', response.body.length);
    });
  });
});
