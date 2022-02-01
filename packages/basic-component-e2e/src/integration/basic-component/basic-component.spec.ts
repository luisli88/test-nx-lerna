describe('basic-component: BasicComponent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=basiccomponent--primary'));

    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome');
    });
});
