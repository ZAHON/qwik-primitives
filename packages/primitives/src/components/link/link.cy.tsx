import { Primitive } from '@/components';
import * as Link from '.';

const LINK_ROOT_TESTID = 'LINK_ROOT_TESTID';
const LINK_ROOT_URL = 'https://github.com/ZAHON/qwik-primitives';

describe('Link', () => {
  describe('Root', () => {
    it('should be <a> element', () => {
      cy.mount(<Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'A');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Link.Root as={Primitive.div} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'A');
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const LINK_ROOT_TEXT = 'LINK_ROOT_TEXT';

      cy.mount(
        <Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.text', LINK_ROOT_TEXT);
    });

    it('should have attribute href with value provided via href prop', () => {
      cy.mount(<Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.attr', 'href', LINK_ROOT_URL);
    });

    it('should have not attribute aria-disabled when not disabled', () => {
      cy.mount(<Link.Root disabled={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.not.attr', 'aria-disabled');
    });

    it('should have not attribute data-disabled when not disabled', () => {
      cy.mount(<Link.Root disabled={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute aria-disabled with value "true" when disabled', () => {
      cy.mount(<Link.Root disabled={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.attr', 'aria-disabled', 'true');
    });

    it('should have attribute data-disabled when disabled', () => {
      cy.mount(<Link.Root disabled={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have attribute data-qwik-primitives-link-root with empty value', () => {
      cy.mount(<Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-link-root', '');
    });

    it('should have attribute data-scope with value "link"', () => {
      cy.mount(<Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'link');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID} />);
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });
});
