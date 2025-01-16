import { Primitive } from '@/components';
import * as CopyButton from '.';

const COPY_BUTTON_ROOT_TESTID = 'COPY_BUTTON_ROOT_TESTID';
const COPY_BUTTON_ROOT_VALUE = 'COPY_BUTTON_ROOT_VALUE';

describe('CopyButton', () => {
  describe('Root', () => {
    it('should be <button> element', () => {
      cy.mount(<CopyButton.Root value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <CopyButton.Root as={Primitive.div} value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />
      );
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const COPY_BUTTON_ROOT_TEXT = 'COPY_BUTTON_ROOT_TEXT';

      cy.mount(
        <CopyButton.Root value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID}>
          {COPY_BUTTON_ROOT_TEXT}
        </CopyButton.Root>
      );
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('have.text', COPY_BUTTON_ROOT_TEXT);
    });

    it('should have attribute type with value "button"', () => {
      cy.mount(<CopyButton.Root value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should not copy to clipboard value provided via value prop when is disabled after user click', () => {
      cy.mount(
        <CopyButton.Root disabled={true} value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />
      );
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).realClick();
      cy.window().then((window) => {
        window.navigator.clipboard.readText().then((text) => {
          expect(text).to.eq('');
        });
      });
    });

    it('should copy to clipboard value provided via value prop when is not disabled after user click', () => {
      cy.mount(
        <CopyButton.Root disabled={false} value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />
      );
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).realClick();
      cy.window().then((window) => {
        window.navigator.clipboard.readText().then((text) => {
          expect(text).to.eq(COPY_BUTTON_ROOT_VALUE);
        });
      });
    });

    it('should have attribute data-copied with empty value after user click', () => {
      cy.mount(<CopyButton.Root value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).realClick();
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('have.attr', 'data-copied', '');
    });

    it('should have not attribute data-copied after user click after timeout', () => {
      const COPY_BUTTON_ROOT_TIMEOUT = 2000;

      cy.mount(
        <CopyButton.Root
          timeout={COPY_BUTTON_ROOT_TIMEOUT}
          value={COPY_BUTTON_ROOT_VALUE}
          data-testid={COPY_BUTTON_ROOT_TESTID}
        />
      );
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).realClick();
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('have.attr', 'data-copied', '');
      cy.wait(COPY_BUTTON_ROOT_TIMEOUT);
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('have.not.attr', 'data-copied');
    });

    it('should call onCopyStatusChange$ function with value "copied" when the value was copied to clipboard', () => {
      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <CopyButton.Root
          onCopyStatusChange$={(status) => console.log(status)}
          value={COPY_BUTTON_ROOT_VALUE}
          data-testid={COPY_BUTTON_ROOT_TESTID}
        />
      );
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).realClick();
      cy.get('@log').should('be.calledOnce');
      cy.get('@log').should('be.calledWith', 'copied');
    });

    it('should call onCopyStatusChange$ function with value "idle" after copy operation end', () => {
      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <CopyButton.Root
          onCopyStatusChange$={(status) => console.log(status)}
          value={COPY_BUTTON_ROOT_VALUE}
          data-testid={COPY_BUTTON_ROOT_TESTID}
        />
      );
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).realClick();
      cy.wait(5000);
      cy.get('@log').should('be.calledWith', 'idle');
    });

    it('should be not disabled when is not disabled', () => {
      cy.mount(
        <CopyButton.Root disabled={false} value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />
      );
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when is disabled', () => {
      cy.mount(
        <CopyButton.Root disabled={true} value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />
      );
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute data-disabled when not disabled', () => {
      cy.mount(
        <CopyButton.Root disabled={false} value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />
      );
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled when disabled', () => {
      cy.mount(
        <CopyButton.Root disabled={true} value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />
      );
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have attribute data-qwik-primitives-copy-button-root with empty value', () => {
      cy.mount(<CopyButton.Root value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-copy-button-root',
        ''
      );
    });

    it('should have attribute data-scope with value "copy-button"', () => {
      cy.mount(<CopyButton.Root value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'copy-button');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<CopyButton.Root value={COPY_BUTTON_ROOT_VALUE} data-testid={COPY_BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${COPY_BUTTON_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });
});
