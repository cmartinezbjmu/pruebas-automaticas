describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas  
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("cmb@prueba.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('Busca y califica profesores y clases anónimamente')
    })
})