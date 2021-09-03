describe('lihat fasilitator', function(){
    it('lihat fasilitator', function(){
        cy.loginDojo()
        cy.get('#dataTable_filter > label > .form-control').type('dojo-miswa')
        cy.wait(2000)
        cy.get('tbody > :nth-child(1) > .dt-center').click()
        cy.contains('Lihat').click()
        cy.contains('Detail Data Fasilitator').should('exist')
    })
})