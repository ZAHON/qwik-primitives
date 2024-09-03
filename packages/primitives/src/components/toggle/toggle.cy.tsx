import { Primitive } from '@/components';
import * as Toggle from '.';

const TOGGLE_ROOT_TESTID = 'TOGGLE_ROOT_TESTID';

describe('Toggle', () => {
  describe('Root', () => {
    it('should be <button> element', () => {
      cy.mount(<Toggle.Root data-testid={TOGGLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Toggle.Root as={Primitive.div} data-testid={TOGGLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should have attribute type with value "button"', () => {
      cy.mount(<Toggle.Root data-testid={TOGGLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should be not disabled when not disabled', () => {
      cy.mount(<Toggle.Root disabled={false} data-testid={TOGGLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when disabled', () => {
      cy.mount(<Toggle.Root disabled={true} data-testid={TOGGLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute data-disabled with empty value when not disabled', () => {
      cy.mount(<Toggle.Root disabled={false} data-testid={TOGGLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled', '');
    });

    it('should have attribute data-disabled with empty value when disabled', () => {
      cy.mount(<Toggle.Root disabled={true} data-testid={TOGGLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-state with value "off" when not pressed', () => {
      cy.mount(<Toggle.Root defaultPressed={false} data-testid={TOGGLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('have.attr', 'data-state', 'off');
    });

    it('should have attribute data-state with value "on" when pressed', () => {
      cy.mount(<Toggle.Root defaultPressed={true} data-testid={TOGGLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('have.attr', 'data-state', 'on');
    });

    it('should have attribute data-state with value "off" when initially not pressed after user click this attribute should have value "on"', () => {
      cy.mount(<Toggle.Root defaultPressed={false} data-testid={TOGGLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('have.attr', 'data-state', 'off');
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).click();
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('have.attr', 'data-state', 'on');
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).click();
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('have.attr', 'data-state', 'off');
    });

    it('should have attribute data-qwik-primitives-toggle-root with empty value', () => {
      cy.mount(<Toggle.Root data-testid={TOGGLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${TOGGLE_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-toggle-root', '');
    });
  });
});
