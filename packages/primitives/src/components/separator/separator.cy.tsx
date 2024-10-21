import { Primitive } from '@/components';
import * as Separator from '.';

const SEPARATOR_ROOT_TESTID = 'SEPARATOR_ROOT_TESTID';

describe('Separator', () => {
  describe('Root', () => {
    it('should be <div> element', () => {
      cy.mount(<Separator.Root data-testid={SEPARATOR_ROOT_TESTID} />);
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Separator.Root as={Primitive.span} data-testid={SEPARATOR_ROOT_TESTID} />);
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should have not attribute aria-orientation when decorative={true}', () => {
      cy.mount(<Separator.Root decorative={true} data-testid={SEPARATOR_ROOT_TESTID} />);
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.not.attr', 'aria-orientation');
    });

    it('should have not attribute aria-orientation when decorative={false} and orientation="horizontal"', () => {
      cy.mount(<Separator.Root decorative={false} orientation="horizontal" data-testid={SEPARATOR_ROOT_TESTID} />);
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.not.attr', 'aria-orientation');
    });

    it('should have attribute aria-orientation with value "vertical" when decorative={false} and orientation="vertical"', () => {
      cy.mount(<Separator.Root decorative={false} orientation="vertical" data-testid={SEPARATOR_ROOT_TESTID} />);
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.attr', 'aria-orientation', 'vertical');
    });

    it('should have attribute role with value "none" when decorative={true}', () => {
      cy.mount(<Separator.Root decorative={true} data-testid={SEPARATOR_ROOT_TESTID} />);
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.attr', 'role', 'none');
    });

    it('should have attribute role with value "separator" when decorative={false}', () => {
      cy.mount(<Separator.Root decorative={false} data-testid={SEPARATOR_ROOT_TESTID} />);
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.attr', 'role', 'separator');
    });

    it('should have attribute data-qwik-primitives-separator-root with empty value', () => {
      cy.mount(<Separator.Root data-testid={SEPARATOR_ROOT_TESTID} />);
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-separator-root', '');
    });

    it('should have attribute data-scope with value "separator"', () => {
      cy.mount(<Separator.Root data-testid={SEPARATOR_ROOT_TESTID} />);
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'separator');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<Separator.Root data-testid={SEPARATOR_ROOT_TESTID} />);
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });

    it('should have attribute data-orientation with value "horizontal" when orientation="horizontal"', () => {
      cy.mount(<Separator.Root orientation="horizontal" data-testid={SEPARATOR_ROOT_TESTID} />);
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.attr', 'data-orientation', 'horizontal');
    });

    it('should have attribute data-orientation with value "vertical" when orientation="vertical"', () => {
      cy.mount(<Separator.Root orientation="vertical" data-testid={SEPARATOR_ROOT_TESTID} />);
      cy.get(`[data-testid="${SEPARATOR_ROOT_TESTID}"]`).should('have.attr', 'data-orientation', 'vertical');
    });
  });
});
