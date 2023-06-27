describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
  it("info for a specific Pokemon can be opened", function () {
    cy.visit("http://localhost:5000/");
    cy.contains("ivysaur").click();
    cy.contains("Previous");
    cy.contains("Home");
    cy.contains("Next");
    cy.contains("ivysaur");
    cy.contains("speed");
    cy.contains("60");
    cy.contains("special defense");
    cy.contains("80");
    cy.contains("special attack");
    cy.contains("80");
    cy.contains("defense");
    cy.contains("63");
    cy.contains("attack");
    cy.contains("62");
    cy.contains("hp");
    cy.contains("60");
    cy.contains("Hidden ability");
    cy.contains("overgrow");
    cy.contains("chlorophyll");
  });
});
