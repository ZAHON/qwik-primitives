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

    it('should contain passed children', () => {
      const VISUALLY_HIDDEN_TEXT = 'VISUALLY_HIDDEN_TEXT';

      cy.mount(<VisuallyHidden.Root data-testid={VISUALLY_HIDDEN_TESTID}>{VISUALLY_HIDDEN_TEXT}</VisuallyHidden.Root>);
      cy.get(`[data-testid="${VISUALLY_HIDDEN_TESTID}"]`).should('have.text', VISUALLY_HIDDEN_TEXT);
    });

    it('should have visually hidden style', () => {
      cy.mount(<VisuallyHidden.Root data-testid={VISUALLY_HIDDEN_TESTID} />);
      cy.get(`[data-testid="${VISUALLY_HIDDEN_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have inline style provided via style prop', () => {
      const VISUALLY_HIDDEN_COLOR = 'rgb(1, 2, 3)';

      cy.mount(<VisuallyHidden.Root style={{ color: VISUALLY_HIDDEN_COLOR }} data-testid={VISUALLY_HIDDEN_TESTID} />);
      cy.get(`[data-testid="${VISUALLY_HIDDEN_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${VISUALLY_HIDDEN_COLOR}`);
    });

    it('should have attribute data-qwik-primitives-visually-hidden-root with empty value', () => {
      cy.mount(<VisuallyHidden.Root data-testid={VISUALLY_HIDDEN_TESTID} />);
      cy.get(`[data-testid="${VISUALLY_HIDDEN_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-visually-hidden-root',
        ''
      );
    });

    it('should have attribute data-scope with value "visually-hidden"', () => {
      cy.mount(<VisuallyHidden.Root data-testid={VISUALLY_HIDDEN_TESTID} />);
      cy.get(`[data-testid="${VISUALLY_HIDDEN_TESTID}"]`).should('have.attr', 'data-scope', 'visually-hidden');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<VisuallyHidden.Root data-testid={VISUALLY_HIDDEN_TESTID} />);
      cy.get(`[data-testid="${VISUALLY_HIDDEN_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });
});
