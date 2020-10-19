describe('Creating a message', () => {
    it('Displays the message in a list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="messageText"]').type('New Message');

        cy.get('[data-testid="sendButton"]').click();

        cy.get('[data-testid="messageText"]').should('have.value', '');

        cy.contains('New Message');
    })
})