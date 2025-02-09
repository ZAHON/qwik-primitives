import { Primitive } from '@/components';
import * as Spinner from '.';

const SPINNER_ROOT_TESTID = 'SPINNER_ROOT_TESTID';
const SPINNER_LABEL_TESTID = 'SPINNER_LABEL_TESTID';

describe('Spinner', () => {
  describe('Root', () => {
    it('should be <span> element', () => {
      cy.mount(<Spinner.Root data-testid={SPINNER_ROOT_TESTID} />);
      cy.get(`[data-testid="${SPINNER_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Spinner.Root as={Primitive.div} data-testid={SPINNER_ROOT_TESTID} />);
      cy.get(`[data-testid="${SPINNER_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${SPINNER_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const SPINNER_ROOT_TEXT = 'SPINNER_ROOT_TEXT';

      cy.mount(<Spinner.Root data-testid={SPINNER_ROOT_TESTID}>{SPINNER_ROOT_TEXT}</Spinner.Root>);
      cy.get(`[data-testid="${SPINNER_ROOT_TESTID}"]`).should('have.text', SPINNER_ROOT_TEXT);
    });

    it('should have attribute role with value "status"', () => {
      cy.mount(<Spinner.Root data-testid={SPINNER_ROOT_TESTID} />);
      cy.get(`[data-testid="${SPINNER_ROOT_TESTID}"]`).should('have.attr', 'role', 'status');
    });

    it('should have attribute data-qwik-primitives-spinner-root with empty value', () => {
      cy.mount(<Spinner.Root data-testid={SPINNER_ROOT_TESTID} />);
      cy.get(`[data-testid="${SPINNER_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-spinner-root', '');
    });

    it('should have attribute data-scope with value "spinner"', () => {
      cy.mount(<Spinner.Root data-testid={SPINNER_ROOT_TESTID} />);
      cy.get(`[data-testid="${SPINNER_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'spinner');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<Spinner.Root data-testid={SPINNER_ROOT_TESTID} />);
      cy.get(`[data-testid="${SPINNER_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });

  describe('Label', () => {
    it('should be <span> element', () => {
      cy.mount(
        <Spinner.Root>
          <Spinner.Label data-testid={SPINNER_LABEL_TESTID} />
        </Spinner.Root>
      );
      cy.get(`[data-testid="${SPINNER_LABEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Spinner.Root>
          <Spinner.Label as={Primitive.div} data-testid={SPINNER_LABEL_TESTID} />
        </Spinner.Root>
      );
      cy.get(`[data-testid="${SPINNER_LABEL_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${SPINNER_LABEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const SPINNER_LABEL_TEXT = 'SPINNER_LABEL_TEXT';

      cy.mount(
        <Spinner.Root>
          <Spinner.Label data-testid={SPINNER_LABEL_TESTID}>{SPINNER_LABEL_TEXT}</Spinner.Label>
        </Spinner.Root>
      );
      cy.get(`[data-testid="${SPINNER_LABEL_TESTID}"]`).should('have.text', SPINNER_LABEL_TEXT);
    });

    it('should have not attribute data-visually-hidden when is not visuallyHidden', () => {
      cy.mount(
        <Spinner.Root>
          <Spinner.Label visuallyHidden={false} data-testid={SPINNER_LABEL_TESTID} />
        </Spinner.Root>
      );
      cy.get(`[data-testid="${SPINNER_LABEL_TESTID}"]`).should('have.not.attr', 'data-visually-hidden');
    });

    it('should have attribute data-visually-hidden with empty value when is visuallyHidden', () => {
      cy.mount(
        <Spinner.Root>
          <Spinner.Label visuallyHidden={true} data-testid={SPINNER_LABEL_TESTID} />
        </Spinner.Root>
      );
      cy.get(`[data-testid="${SPINNER_LABEL_TESTID}"]`).should('have.attr', 'data-visually-hidden', '');
    });

    it('should have not visually hidden style when is not visuallyHidden', () => {
      cy.mount(
        <Spinner.Root>
          <Spinner.Label visuallyHidden={false} data-testid={SPINNER_LABEL_TESTID} />
        </Spinner.Root>
      );
      cy.get(`[data-testid="${SPINNER_LABEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'not.contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have visually hidden style when is visuallyHidden', () => {
      cy.mount(
        <Spinner.Root>
          <Spinner.Label visuallyHidden={true} data-testid={SPINNER_LABEL_TESTID} />
        </Spinner.Root>
      );
      cy.get(`[data-testid="${SPINNER_LABEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have inline style provided via style prop', () => {
      const SPINNER_LABEL_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <Spinner.Root>
          <Spinner.Label style={{ color: SPINNER_LABEL_COLOR }} data-testid={SPINNER_LABEL_TESTID} />
        </Spinner.Root>
      );
      cy.get(`[data-testid="${SPINNER_LABEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${SPINNER_LABEL_COLOR}`);
    });

    it('should have attribute data-qwik-primitives-spinner-label with empty value', () => {
      cy.mount(
        <Spinner.Root>
          <Spinner.Label data-testid={SPINNER_LABEL_TESTID} />
        </Spinner.Root>
      );
      cy.get(`[data-testid="${SPINNER_LABEL_TESTID}"]`).should('have.attr', 'data-qwik-primitives-spinner-label', '');
    });

    it('should have attribute data-scope with value "spinner"', () => {
      cy.mount(
        <Spinner.Root>
          <Spinner.Label data-testid={SPINNER_LABEL_TESTID} />
        </Spinner.Root>
      );
      cy.get(`[data-testid="${SPINNER_LABEL_TESTID}"]`).should('have.attr', 'data-scope', 'spinner');
    });

    it('should have attribute data-part with value "label"', () => {
      cy.mount(
        <Spinner.Root>
          <Spinner.Label data-testid={SPINNER_LABEL_TESTID} />
        </Spinner.Root>
      );
      cy.get(`[data-testid="${SPINNER_LABEL_TESTID}"]`).should('have.attr', 'data-part', 'label');
    });
  });
});
