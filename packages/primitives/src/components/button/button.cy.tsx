import { Primitive } from '@/components';
import * as Button from '.';

const BUTTON_ROOT_TESTID = 'BUTTON_ROOT_TESTID';
const BUTTON_CONTENT_TESTID = 'BUTTON_CONTENT_TESTID';
const BUTTON_FALLBACK_TESTID = 'BUTTON_FALLBACK_TESTID';

describe('Button', () => {
  describe('Root', () => {
    it('should be <button> element', () => {
      cy.mount(<Button.Root data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Button.Root as={Primitive.div} data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const BUTTON_ROOT_TEXT = 'BUTTON_ROOT_TEXT';

      cy.mount(<Button.Root data-testid={BUTTON_ROOT_TESTID}>{BUTTON_ROOT_TEXT}</Button.Root>);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.text', BUTTON_ROOT_TEXT);
    });

    it('should have attribute type with value "button" by default', () => {
      cy.mount(<Button.Root data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should have attribute type with value "button" when type prop is "button"', () => {
      cy.mount(<Button.Root type="button" data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should have attribute type with value "reset" when type prop is "reset"', () => {
      cy.mount(<Button.Root type="reset" data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.attr', 'type', 'reset');
    });

    it('should have attribute type with value "submit" when type prop is "submit"', () => {
      cy.mount(<Button.Root type="submit" data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.attr', 'type', 'submit');
    });

    it('should be not disabled when is not disabled', () => {
      cy.mount(<Button.Root disabled={false} data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when is disabled', () => {
      cy.mount(<Button.Root disabled={true} data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute aria-disabled when is not pending', () => {
      cy.mount(<Button.Root pending={false} data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.not.attr', 'aria-disabled');
    });

    it('should have attribute aria-disabled with value "true" when is pending', () => {
      cy.mount(<Button.Root pending={true} data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.attr', 'aria-disabled', 'true');
    });

    it('should have not attribute data-disabled when is not disabled', () => {
      cy.mount(<Button.Root disabled={false} data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled when is disabled', () => {
      cy.mount(<Button.Root disabled={true} data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have not attribute data-pending when is not pending', () => {
      cy.mount(<Button.Root pending={false} data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.not.attr', 'data-pending');
    });

    it('should have attribute data-pending when is pending', () => {
      cy.mount(<Button.Root pending={true} data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.attr', 'data-pending');
    });

    it('should have attribute data-qwik-primitives-button-root with empty value', () => {
      cy.mount(<Button.Root data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-button-root', '');
    });

    it('should have attribute data-scope with value "button"', () => {
      cy.mount(<Button.Root data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'button');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<Button.Root data-testid={BUTTON_ROOT_TESTID} />);
      cy.get(`[data-testid="${BUTTON_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });

  describe('Content', () => {
    it('should be <span> element', () => {
      cy.mount(
        <Button.Root>
          <Button.Content forceMount={true} data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Button.Root>
          <Button.Content as={Primitive.div} forceMount={true} data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const BUTTON_CONTENT_TEXT = 'BUTTON_CONTENT_TEXT';

      cy.mount(
        <Button.Root>
          <Button.Content forceMount={true} data-testid={BUTTON_CONTENT_TESTID}>
            {BUTTON_CONTENT_TEXT}
          </Button.Content>
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.text', BUTTON_CONTENT_TEXT);
    });

    it('should not exist when is not forceMount and <Button.Root> is pending', () => {
      cy.mount(
        <Button.Root pending={true}>
          <Button.Content forceMount={false} data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('not.exist');
    });

    it('should exist when is not forceMount and <Button.Root> is not pending', () => {
      cy.mount(
        <Button.Root pending={false}>
          <Button.Content forceMount={false} data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('exist');
    });

    it('should exist when is forceMount and <Button.Root> is not pending', () => {
      cy.mount(
        <Button.Root pending={false}>
          <Button.Content forceMount={true} data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('exist');
    });

    it('should exist when is forceMount and <Button.Root> is pending', () => {
      cy.mount(
        <Button.Root pending={true}>
          <Button.Content forceMount={true} data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('exist');
    });

    it('should have not attribute aria-hidden when is forceMount and <Button.Root> is not pending', () => {
      cy.mount(
        <Button.Root pending={false}>
          <Button.Content forceMount={true} data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-hidden');
    });

    it('should have attribute aria-hidden with value "true" when is forceMount and <Button.Root> is pending', () => {
      cy.mount(
        <Button.Root pending={true}>
          <Button.Content forceMount={true} data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.attr', 'aria-hidden', 'true');
    });

    it('should have not attribute data-disabled when <Button.Root> is not disabled', () => {
      cy.mount(
        <Button.Root disabled={false}>
          <Button.Content data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Button.Root> is disabled', () => {
      cy.mount(
        <Button.Root disabled={true}>
          <Button.Content data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have not attribute data-pending when <Button.Root> is not pending', () => {
      cy.mount(
        <Button.Root pending={false}>
          <Button.Content forceMount={true} data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.not.attr', 'data-pending');
    });

    it('should have attribute data-pending with empty value when <Button.Root> is pending', () => {
      cy.mount(
        <Button.Root pending={true}>
          <Button.Content forceMount={true} data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.attr', 'data-pending');
    });

    it('should have attribute data-qwik-primitives-button-content with empty value', () => {
      cy.mount(
        <Button.Root>
          <Button.Content data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-button-content', '');
    });

    it('should have attribute data-scope with value "button"', () => {
      cy.mount(
        <Button.Root>
          <Button.Content data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.attr', 'data-scope', 'button');
    });

    it('should have attribute data-part with value "content"', () => {
      cy.mount(
        <Button.Root>
          <Button.Content data-testid={BUTTON_CONTENT_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_CONTENT_TESTID}"]`).should('have.attr', 'data-part', 'content');
    });
  });

  describe('Fallback', () => {
    it('should be <span> element', () => {
      cy.mount(
        <Button.Root>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Button.Root>
          <Button.Fallback as={Primitive.div} forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const BUTTON_FALLBACK_TEXT = 'BUTTON_FALLBACK_TEXT';

      cy.mount(
        <Button.Root>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID}>
            {BUTTON_FALLBACK_TEXT}
          </Button.Fallback>
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('have.text', BUTTON_FALLBACK_TEXT);
    });

    it('should not exist when is not forceMount and <Button.Root> is not pending', () => {
      cy.mount(
        <Button.Root pending={false}>
          <Button.Fallback forceMount={false} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('not.exist');
    });

    it('should exist when is forceMount and <Button.Root> is not pending', () => {
      cy.mount(
        <Button.Root pending={false}>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('exist');
    });

    it('should exist when is forceMount and <Button.Root> is pending', () => {
      cy.mount(
        <Button.Root pending={true}>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('exist');
    });

    it('should have not attribute aria-hidden when is forceMount and <Button.Root> is pending', () => {
      cy.mount(
        <Button.Root pending={true}>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('have.not.attr', 'aria-hidden');
    });

    it('should have attribute aria-hidden with value "true" when is forceMount and <Button.Root> is not pending', () => {
      cy.mount(
        <Button.Root pending={false}>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('have.attr', 'aria-hidden', 'true');
    });

    it('should have not attribute data-disabled when <Button.Root> is not disabled', () => {
      cy.mount(
        <Button.Root disabled={false}>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Button.Root> is disabled', () => {
      cy.mount(
        <Button.Root disabled={true}>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have not attribute data-pending when <Button.Root> is not pending', () => {
      cy.mount(
        <Button.Root pending={false}>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('have.not.attr', 'data-pending');
    });

    it('should have attribute data-pending with empty value when <Button.Root> is pending', () => {
      cy.mount(
        <Button.Root pending={true}>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('have.attr', 'data-pending');
    });

    it('should have attribute data-qwik-primitives-button-fallback with empty value', () => {
      cy.mount(
        <Button.Root>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-button-fallback',
        ''
      );
    });

    it('should have attribute data-scope with value "button"', () => {
      cy.mount(
        <Button.Root>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('have.attr', 'data-scope', 'button');
    });

    it('should have attribute data-part with value "fallback"', () => {
      cy.mount(
        <Button.Root>
          <Button.Fallback forceMount={true} data-testid={BUTTON_FALLBACK_TESTID} />
        </Button.Root>
      );
      cy.get(`[data-testid="${BUTTON_FALLBACK_TESTID}"]`).should('have.attr', 'data-part', 'fallback');
    });
  });
});
