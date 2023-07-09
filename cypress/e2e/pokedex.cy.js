describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('navigate to wartortle', function () {
    cy.visit('http://localhost:5000')
    cy.contains('wartortle').click()
    cy.get('.pokemon-image').should(
      'have.css',
      'background-image',
      'url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png")'
    )
    cy.contains('torrent')
    cy.contains('rain dish')
  })
})
