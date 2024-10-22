import { Primitive } from '@/components';
import * as Heading from '.';

const HEADING_ROOT_TESTID = 'HEADING_ROOT_TESTID';

describe('Heading', () => {
  describe('Root', () => {
    it('should be <h1> element by default', () => {
      cy.mount(<Heading.Root data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H1');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Heading.Root as={Primitive.span} data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'H1');
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be <h1> element when level="1"', () => {
      cy.mount(<Heading.Root level="1" data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H1');
    });

    it('should be <h2> element when level="2"', () => {
      cy.mount(<Heading.Root level="2" data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H2');
    });

    it('should be <h3> element when level="3"', () => {
      cy.mount(<Heading.Root level="3" data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H3');
    });

    it('should be <h4> element when level="4"', () => {
      cy.mount(<Heading.Root level="4" data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H4');
    });

    it('should be <h5> element when level="5"', () => {
      cy.mount(<Heading.Root level="5" data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H5');
    });

    it('should be <h6> element when level="6"', () => {
      cy.mount(<Heading.Root level="6" data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H6');
    });

    it('should contain passed children', () => {
      const HEADING_ROOT_TEXT = 'HEADING_ROOT_TEXT';

      cy.mount(<Heading.Root data-testid={HEADING_ROOT_TESTID}>{HEADING_ROOT_TEXT}</Heading.Root>);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.text', HEADING_ROOT_TEXT);
    });

    it('should have attribute data-qwik-primitives-heading-root with empty value', () => {
      cy.mount(<Heading.Root data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-heading-root', '');
    });

    it('should have attribute data-scope with value "heading"', () => {
      cy.mount(<Heading.Root data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'heading');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<Heading.Root data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });

    it('should have attribute data-lavel with value "1" when level="1"', () => {
      cy.mount(<Heading.Root level="1" data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.attr', 'data-level', '1');
    });

    it('should have attribute data-lavel with value "2" when level="2"', () => {
      cy.mount(<Heading.Root level="2" data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.attr', 'data-level', '2');
    });

    it('should have attribute data-lavel with value "3" when level="3"', () => {
      cy.mount(<Heading.Root level="3" data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.attr', 'data-level', '3');
    });

    it('should have attribute data-lavel with value "4" when level="4"', () => {
      cy.mount(<Heading.Root level="4" data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.attr', 'data-level', '4');
    });

    it('should have attribute data-lavel with value "5" when level="5"', () => {
      cy.mount(<Heading.Root level="5" data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.attr', 'data-level', '5');
    });

    it('should have attribute data-lavel with value "6" when level="6"', () => {
      cy.mount(<Heading.Root level="6" data-testid={HEADING_ROOT_TESTID} />);
      cy.get(`[data-testid="${HEADING_ROOT_TESTID}"]`).should('have.attr', 'data-level', '6');
    });
  });
});
