describe('pkg: Pkg component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pkg--primary'));

    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome');
    });
});
