import * as Link from '.';

const LINK_ROOT_TESTID = 'LINK_ROOT_TESTID';
const LINK_ROOT_TEXT = 'LINK_ROOT_TEXT';
const LINK_ROOT_URL = 'https://github.com/ZAHON/qwik-primitives';

describe('Link', () => {
  describe('Root', () => {
    it('should be <a> element by default', () => {
      cy.mount(
        <Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'A');
    });

    it('should have attribute href with value provided via href prop', () => {
      cy.mount(
        <Link.Root href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.attr', 'href', LINK_ROOT_URL);
    });

    it('should have not attribute aria-disabled when not disabled', () => {
      cy.mount(
        <Link.Root disabled={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.not.attr', 'aria-disabled');
    });

    it('should have not attribute data-disabled when not disabled', () => {
      cy.mount(
        <Link.Root disabled={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have not attribute rel when not external', () => {
      cy.mount(
        <Link.Root external={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.not.attr', 'rel');
    });

    it('should have not attribute target when not external', () => {
      cy.mount(
        <Link.Root external={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.not.attr', 'target');
    });

    it('should have not attribute data-external when not external', () => {
      cy.mount(
        <Link.Root external={false} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.not.attr', 'data-external');
    });

    it('should have attribute aria-disabled with value "true" when disabled', () => {
      cy.mount(
        <Link.Root disabled={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.attr', 'aria-disabled', 'true');
    });

    it('should have attribute data-disabled when disabled', () => {
      cy.mount(
        <Link.Root disabled={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have attribute rel with value "noopener noreferrer" when external', () => {
      cy.mount(
        <Link.Root external={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.attr', 'rel', 'noopener noreferrer');
    });

    it('should have attribute target with value "_blank" when external', () => {
      cy.mount(
        <Link.Root external={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.attr', 'target', '_blank');
    });

    it('should have attribute data-external when external', () => {
      cy.mount(
        <Link.Root external={true} href={LINK_ROOT_URL} data-testid={LINK_ROOT_TESTID}>
          {LINK_ROOT_TEXT}
        </Link.Root>
      );
      cy.get(`[data-testid="${LINK_ROOT_TESTID}"]`).should('have.attr', 'data-external');
    });
  });
});
