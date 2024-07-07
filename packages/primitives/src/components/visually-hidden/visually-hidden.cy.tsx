import { Primitive } from '@/components';
import * as VisuallyHidden from '.';

const VISUALLY_HIDDEN_TESTID = 'VISUALLY_HIDDEN_TESTID';

describe('VisuallyHidden', () => {
  describe('Root', () => {
    it('should be <span> element', () => {
      cy.mount(<VisuallyHidden.Root data-testid={VISUALLY_HIDDEN_TESTID} />);
      cy.get(`[data-testid="${VISUALLY_HIDDEN_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<VisuallyHidden.Root as={Primitive.div} data-testid={VISUALLY_HIDDEN_TESTID} />);
      cy.get(`[data-testid="${VISUALLY_HIDDEN_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${VISUALLY_HIDDEN_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });
  });
});
