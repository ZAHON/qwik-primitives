import { UseFocusTrapTest } from './use-focus-trap.test';

const CONTAINER_TESTID = 'CONTAINER_TESTID';
const ACTIVE_BUTTON_TESTID = 'ACTIVE_BUTTON_TESTID';
const DEACTIVATE_BUTTON_TESTID = 'DEACTIVATE_BUTTON_TESTID';

describe('useFocusTrap', () => {
  it('should move focus on container when autoFocus is false after activated', () => {
    cy.mount(<UseFocusTrapTest autoFocus={false} />);
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).focus().click();
    cy.get(`[data-testid="${CONTAINER_TESTID}"]`).should('be.focused');
  });

  it('should move focus on container in which there is no focusable elements when autoFocus is true after activated', () => {
    cy.mount(
      <UseFocusTrapTest autoFocus={true}>
        <button disabled={true}>First button (disabled)</button>
        <button disabled={true}>Second button (disabled)</button>
        <button disabled={true}>Third button (disabled)</button>
      </UseFocusTrapTest>
    );
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).focus().click();
    cy.get('button').contains('First button (disabled)').should('be.not.focused');
    cy.get('button').contains('Second button (disabled)').should('be.not.focused');
    cy.get('button').contains('Third button (disabled)').should('be.not.focused');
    cy.get(`[data-testid="${CONTAINER_TESTID}"]`).should('be.focused');
  });

  it('should move focus on first focusable element when autoFocus is true after activated', () => {
    cy.mount(
      <UseFocusTrapTest autoFocus={true}>
        <button disabled={true}>First button (disabled)</button>
        <button disabled={false}>Second button</button>
        <button disabled={false}>Third button</button>
      </UseFocusTrapTest>
    );
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).focus().click();
    cy.get('button').contains('First button (disabled)').should('be.not.focused');
    cy.get('button').contains('Second button').should('be.focused');
  });

  it('should move focus on first focusable element which has attribute data-qwik-primitives-auto-focus when autoFocus is true after activated', () => {
    cy.mount(
      <UseFocusTrapTest autoFocus={true}>
        <button disabled={true}>First button (disabled)</button>
        <button disabled={false}>Second button</button>
        <button disabled={false} data-qwik-primitives-auto-focus="">
          Third button
        </button>
      </UseFocusTrapTest>
    );
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).focus().click();
    cy.get('button').contains('Second button').should('be.not.focused');
    cy.get('button').contains('Third button').should('be.focused');
  });

  it('should not move focus on first focusable element which has attribute data-qwik-primitives-auto-focus but is disabled when autoFocus is true after activated', () => {
    cy.mount(
      <UseFocusTrapTest autoFocus={true}>
        <button disabled={true}>First button (disabled)</button>
        <button disabled={false}>Second button</button>
        <button disabled={true} data-qwik-primitives-auto-focus="">
          Third button
        </button>
      </UseFocusTrapTest>
    );
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).focus().click();
    cy.get('button').contains('Second button').should('be.focused');
    cy.get('button').contains('Third button').should('be.not.focused');
  });

  it('should not move focus on first focusable element when press Tab on last focusable element when loop is false and active', () => {
    cy.mount(
      <UseFocusTrapTest loop={false}>
        <button disabled={false}>First button</button>
        <button disabled={false}>Second button</button>
        <button disabled={false}>Third button</button>
      </UseFocusTrapTest>
    );
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).focus().click();
    cy.get('button').contains('First button').should('be.focused').realPress('Tab');
    cy.get('button').contains('Second button').should('be.focused').realPress('Tab');
    cy.get('button').contains('Third button').should('be.focused').realPress('Tab');
    cy.get('button').contains('Third button').should('be.focused');
    cy.get('button').contains('First button').should('be.not.focused');
  });

  it('should move focus on first focusable element when press Tab on last focusable element when loop is true and active', () => {
    cy.mount(
      <UseFocusTrapTest loop={true}>
        <button disabled={false}>First button</button>
        <button disabled={false}>Second button</button>
        <button disabled={false}>Third button</button>
      </UseFocusTrapTest>
    );
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).focus().click();
    cy.get('button').contains('First button').should('be.focused').realPress('Tab');
    cy.get('button').contains('Second button').should('be.focused').realPress('Tab');
    cy.get('button').contains('Third button').should('be.focused').realPress('Tab');
    cy.get('button').contains('Third button').should('be.not.focused');
    cy.get('button').contains('First button').should('be.focused');
  });

  it('should not move focus on last focusable element when press Shift + Tab on first focusable element when loop is false and active', () => {
    cy.mount(
      <UseFocusTrapTest loop={false}>
        <button disabled={false}>First button</button>
        <button disabled={false}>Second button</button>
        <button disabled={false}>Third button</button>
      </UseFocusTrapTest>
    );
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).focus().click();
    cy.get('button').contains('First button').should('be.focused').realPress(['Shift', 'Tab']);
    cy.get('button').contains('First button').should('be.focused');
    cy.get('button').contains('Third button').should('be.not.focused');
  });

  it('should move focus on last focusable element when press Shift + Tab on first focusable element when loop is true and active', () => {
    cy.mount(
      <UseFocusTrapTest loop={true}>
        <button disabled={false}>First button</button>
        <button disabled={false}>Second button</button>
        <button disabled={false}>Third button</button>
      </UseFocusTrapTest>
    );
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).focus().click();
    cy.get('button').contains('First button').should('be.focused').realPress(['Shift', 'Tab']);
    cy.get('button').contains('First button').should('be.not.focused');
    cy.get('button').contains('Third button').should('be.focused');
  });

  it('should not move focus on element that has focus before activated after deactivated when restoreFocus is false', () => {
    cy.mount(
      <UseFocusTrapTest restoreFocus={false}>
        <button disabled={false}>First button</button>
        <button disabled={false}>Second button</button>
        <button disabled={false}>Third button</button>
      </UseFocusTrapTest>
    );
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).focus().click();
    cy.get(`[data-testid="${DEACTIVATE_BUTTON_TESTID}"]`).click();
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).should('be.not.focused');
    cy.get('button').contains('First button').should('be.focused');
  });

  it('should move focus on element that has focus before activated after deactivated when restoreFocus is true', () => {
    cy.mount(
      <UseFocusTrapTest restoreFocus={true}>
        <button disabled={false}>First button</button>
        <button disabled={false}>Second button</button>
        <button disabled={false}>Third button</button>
      </UseFocusTrapTest>
    );
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).focus().click();
    cy.get(`[data-testid="${DEACTIVATE_BUTTON_TESTID}"]`).click();
    cy.get(`[data-testid="${ACTIVE_BUTTON_TESTID}"]`).should('be.focused');
    cy.get('button').contains('First button').should('be.not.focused');
  });
});
