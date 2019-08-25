describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas  
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Cristian")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Martinez")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("cmb@prueba.com")
      cy.get('.cajaSignUp').find('input[type="checkbox"]').check()
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Maestría en Ingeniería de Software').should('have.value', '16')
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Ocurrió un error activando tu cuenta')
    })
})



