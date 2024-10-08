import { Primitive } from '@/components';
import * as Alert from '.';

const ALERT_ROOT_TESTID = 'ALERT_ROOT_TESTID';

describe('Alert', () => {
  describe('Root', () => {
    it('should be <div> element', () => {
      cy.mount(<Alert.Root data-testid={ALERT_ROOT_TESTID} />);
      cy.get(`[data-testid="${ALERT_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Alert.Root as={Primitive.span} data-testid={ALERT_ROOT_TESTID} />);
      cy.get(`[data-testid="${ALERT_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${ALERT_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const ALERT_ROOT_TEXT = 'ALERT_ROOT_TEXT';

      cy.mount(<Alert.Root data-testid={ALERT_ROOT_TESTID}>{ALERT_ROOT_TEXT}</Alert.Root>);
      cy.get(`[data-testid="${ALERT_ROOT_TESTID}"]`).should('have.text', ALERT_ROOT_TEXT);
    });

    it('should have attribute role with value "alert"', () => {
      cy.mount(<Alert.Root data-testid={ALERT_ROOT_TESTID} />);
      cy.get(`[data-testid="${ALERT_ROOT_TESTID}"]`).should('have.attr', 'role', 'alert');
    });

    it('should have attribute data-qwik-primitives-alert-root with empty value', () => {
      cy.mount(<Alert.Root data-testid={ALERT_ROOT_TESTID} />);
      cy.get(`[data-testid="${ALERT_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-alert-root', '');
    });

    it('should have attribute data-scope with value "alert"', () => {
      cy.mount(<Alert.Root data-testid={ALERT_ROOT_TESTID} />);
      cy.get(`[data-testid="${ALERT_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'alert');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<Alert.Root data-testid={ALERT_ROOT_TESTID} />);
      cy.get(`[data-testid="${ALERT_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });
});
