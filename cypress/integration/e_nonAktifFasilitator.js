describe('non-aktifkan facilitator', function(){
    it('1. non-aktifkan facilitator', function(){
        cy.loginDojo()
        cy.get('#dataTable_filter > label > .form-control').type('dojo-miswa')
        cy.wait(2000)
        cy.get('tbody > :nth-child(1) > .dt-center').click()
        cy.contains('Nonaktifkan').click()
        cy.get('#modal-title').should('have.text','Success')
        cy.get('#modal-body').should('have.text','Perubahan fasilitator berhasil diproses')
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click({force: true})
        cy.wait(2000)
    })

    it('2. aktifkan facilitator', function(){
        cy.loginDojo()
        cy.get('#dataTable_filter > label > .form-control').clear().type('dojo-miswa')
        cy.wait(2000)
        cy.get('tbody > :nth-child(1) > .dt-center').click()
        cy.contains('Aktifkan').click()
        cy.get('#modal-title').should('have.text','Success')
        cy.get('#modal-body').should('have.text','Perubahan fasilitator berhasil diproses')
        cy.wait(2000)
    })    
})
