describe('tambah facilitator', function(){
    it('tambah facilitator', function(){
        cy.loginDojo()
        cy.contains('Tambah Facilitator').click()
        cy.get('#user_fullname').clear().type('dojo-miswam').should('have.value','dojo-miswam')
        cy.get('#user_email').clear().type('m@m.com').should('have.value','m@m.com')
        cy.get('#user_is_active').select('Aktif').should('have.value',1) //Aktif = 1, NonAktif = 0
        cy.get('#user_password').type('dojo-miswam').should('have.value','dojo-miswam')
        
        // Alamat
        cy.get('#user_province_id').select('BANTEN').should('have.value', '36')
        cy.get('#user_city_id').select('KOTA TANGERANG SELATAN').should('have.value', '3674')
        cy.get('#user_subdistrict_id').select('Ciputat').should('have.value', '367404')
        cy.get('#user_address').clear().type('Jl. Jalan Kenangan No. 10')
        cy.get('.custom-control').click()
        cy.get('input[type="file"]').attachFile('pic1.jpg')
        cy.get('#add').click()
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    })
})
