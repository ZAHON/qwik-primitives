import { Primitive } from '@/components';
import * as Label from '.';

const LABEL_ROOT_TESTID = 'LABEL_ROOT_TESTID';

describe('Label', () => {
  describe('Root', () => {
    it('should be <label> element', () => {
      cy.mount(<Label.Root data-testid={LABEL_ROOT_TESTID} />);
      cy.get(`[data-testid="${LABEL_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'LABEL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Label.Root as={Primitive.div} data-testid={LABEL_ROOT_TESTID} />);
      cy.get(`[data-testid="${LABEL_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'LABEL');
      cy.get(`[data-testid="${LABEL_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should prevent text selection when double clicking', () => {
      const LABEL_ROOT_TEXT = 'LABEL_ROOT_TEXT';

      cy.mount(<Label.Root data-testid={LABEL_ROOT_TESTID}>{LABEL_ROOT_TEXT}</Label.Root>);
      cy.get(`[data-testid=${LABEL_ROOT_TESTID}]`).realClick({ clickCount: 2 });
      cy.window().then((window) => expect(window.getSelection()?.toString()).to.eq(''));
    });

    it('should contain passed children', () => {
      const LABEL_ROOT_TEXT = 'LABEL_ROOT_TEXT';

      cy.mount(<Label.Root data-testid={LABEL_ROOT_TESTID}>{LABEL_ROOT_TEXT}</Label.Root>);
      cy.get(`[data-testid=${LABEL_ROOT_TESTID}]`).should('have.text', LABEL_ROOT_TEXT);
    });

    it('should have attribute data-qwik-primitives-label-root with empty value', () => {
      cy.mount(<Label.Root data-testid={LABEL_ROOT_TESTID} />);
      cy.get(`[data-testid="${LABEL_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-label-root', '');
    });

    it('should have attribute data-scope with value "label"', () => {
      cy.mount(<Label.Root data-testid={LABEL_ROOT_TESTID} />);
      cy.get(`[data-testid="${LABEL_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'label');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<Label.Root data-testid={LABEL_ROOT_TESTID} />);
      cy.get(`[data-testid="${LABEL_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });
});
