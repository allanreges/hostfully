Cypress.Commands.add("fillDate", (date, position) => {
  cy.get('[name="date-picker"]')
    .eq(position)
    .type(date)
    .should("have.value", date);
});

describe("render initial page", () => {
  it("", () => {
    cy.visit("/");
    cy.get("[data-testid='home-list']");
  });
});

describe("user should be able to create, edit and delete a booking without overlapping with another booking ", () => {
  it("should be able to create a booking", () => {
    cy.visit("/");
    cy.get(
      "[data-testid='book-button17fd4f39-79b8-4f54-85f9-483c7665137a']"
    ).click();
    cy.fillDate("03/05/2024", 0);
    cy.fillDate("03/10/2024", 1);
    cy.get("[data-testid='daily-price']").click();
    cy.get("[data-testid='save-button']").click();
    cy.get("[data-testid='bookings-link']").click();
    cy.get(
      "[data-testid='edit-button17fd4f39-79b8-4f54-85f9-483c7665137a']"
    ).should("exist");
  });

  it("user should be blocked from creating a booking that overlaps with another booking", () => {
    cy.visit("/");
    cy.get(
      "[data-testid='book-button17fd4f39-79b8-4f54-85f9-483c7665137a']"
    ).click();
    cy.fillDate("03/05/2024", 0);
    cy.fillDate("03/10/2024", 1);
    cy.get("[data-testid='daily-price']").click();
    cy.get("[data-testid='save-button']").click();
    cy.get(
      "[data-testid='book-button17fd4f39-79b8-4f54-85f9-483c7665137a']"
    ).click();
    cy.fillDate("03/04/2024", 0);
    cy.fillDate("03/11/2024", 1);
    cy.get("[data-testid='daily-price']").click();
    cy.contains(
      "p",
      "Your reservation is overlapping with another reservation, please select a new date"
    );
    cy.get('[data-testid="save-button"]').should("be.disabled");
  });

  it("user should be able to create and then delete a booking", () => {
    cy.visit("/");
    cy.get(
      "[data-testid='book-button17fd4f39-79b8-4f54-85f9-483c7665137a']"
    ).click();
    cy.fillDate("03/05/2024", 0);
    cy.fillDate("03/10/2024", 1);
    cy.get("[data-testid='daily-price']").click();
    cy.get("[data-testid='save-button']").click();
    cy.get("[data-testid='bookings-link']").click();
    cy.get(
      "[data-testid='delete-button17fd4f39-79b8-4f54-85f9-483c7665137a']"
    ).click();
    cy.get("[data-testid='empty-bookings-list']").should("exist");
  });

  it("user should be able to create and then edit a booking", () => {
    cy.visit("/");
    cy.get(
      "[data-testid='book-button17fd4f39-79b8-4f54-85f9-483c7665137a']"
    ).click();
    cy.fillDate("03/05/2024", 0);
    cy.fillDate("03/10/2024", 1);
    cy.get("[data-testid='daily-price']").click();
    cy.get("[data-testid='save-button']").click();
    cy.get("[data-testid='bookings-link']").click();
    cy.get(
      "[data-testid='edit-button17fd4f39-79b8-4f54-85f9-483c7665137a']"
    ).click();
    cy.fillDate("03/11/2024", 0);
    cy.fillDate("03/15/2024", 1);
    cy.get("[data-testid='daily-price']").click();
    cy.get("[data-testid='save-button']").click();
  });
});
