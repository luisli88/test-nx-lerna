describe('test-component: TestComponent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testcomponent--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TestComponent!');
    });
});
