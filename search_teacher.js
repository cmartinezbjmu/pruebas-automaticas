describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Busqueda de profesores  
      cy.contains('Busca un profesor o materia...').click()
      cy.get('.Select-input').find('input[role="combobox"]').type("Mario Linares").click()
      
      //Entrar al sitio de un profesor
      cy.get('.is-focused').find('div[id="react-select-required_error_checksum--option-0"]').click()
      cy.contains('Mario Linares Vasquez')

      //Filtar materias
      cy.get('.statsProfesorDropdown').find('input[name="id:ISIS3510"]').check()
      cy.contains('Mario es un muy buen profesor y así mismo es exigente a la hora de calificar.')
      cy.get('.statsProfesorDropdown').find('input[name="id:ISIS3510"]').uncheck()
      cy.get('.statsProfesorDropdown').find('input[name="id:ISIS1206"]').check()
      cy.contains('Es un excelente profesor hace que realmente uno se esfuerce por aprender y entender.')
      
    })
})