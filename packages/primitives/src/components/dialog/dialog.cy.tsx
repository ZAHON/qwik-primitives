import { Primitive } from '@/components';
import * as Dialog from '.';

const DIALOG_TRIGGER_TESTID = 'DIALOG_TRIGGER_TESTID';
const DIALOG_CONTENT_TESTID = 'DIALOG_CONTENT_TESTID';
const DIALOG_CLOSE_TESTID = 'DIALOG_CLOSE_TESTID';
const DIALOG_TITLE_TESTID = 'DIALOG_TITLE_TESTID';
const DIALOG_DESCRIPTION_TESTID = 'DIALOG_DESCRIPTION_TESTID';

describe('Dialog', () => {
  describe('Trigger', () => {
    it('should be <button> element', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger as={Primitive.div} data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const DIALOG_TRIGGER_TEXT = 'DIALOG_TRIGGER_TEXT';

      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID}>{DIALOG_TRIGGER_TEXT}</Dialog.Trigger>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.text', DIALOG_TRIGGER_TEXT);
    });

    it('should have attribute type with value "button"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should have attribute data-qwik-primitives-dialog-trigger with empty value', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-qwik-primitives-dialog-trigger', '');
    });

    it('should have attribute data-scope with value "dialog"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-scope', 'dialog');
    });

    it('should have attribute data-part with value "trigger"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-part', 'trigger');
    });

    it('should not open dialog after user click trigger when disabled', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger disabled={true} data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
    });

    it('should open dialog after user click trigger when not disabled', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger disabled={false} data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
    });

    it('should be not disabled when not disabled', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger disabled={false} data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when disabled', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger disabled={true} data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute data-disabled when not disabled', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger disabled={false} data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when disabled', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger disabled={true} data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-state with value "closed" when dialog is closed and "open" when is open', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'closed');

      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'open');

      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have not attribute aria-expanded when <Dialog.Root> not contains <Dialog.Content>', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-expanded');
    });

    it('should have attribute aria-expanded with value "false" when dialog is closed and "true" when is open, when <Dialog.Root> contains <Dialog.Content>', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'false');

      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'true');

      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'false');
    });

    it('should have not attribute aria-haspopup when <Dialog.Root> not contains <Dialog.Content>', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-haspopup');
    });

    it('should have attribute aria-haspopup with value "dialog" when <Dialog.Root> contains <Dialog.Content>', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'aria-haspopup', 'dialog');
    });

    it('should have not attribute aria-controls when <Dialog.Root> not contains <Dialog.Content>', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-controls');
    });

    it('should have attribute aria-controls associated with <Dialg.Content> id attribute when <Dialog.Root> contains <Dialog.Content>', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content id={undefined} data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`)
        .invoke('attr', 'aria-controls')
        .then((ariaControls) =>
          cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'id', ariaControls)
        );
    });

    it('should have attribute aria-controls associated with <Dialg.Content> id attribute provided via id prop when <Dialog.Root> contains <Dialog.Content>', () => {
      const DIALOG_CONTENT_ID = 'DIALOG_CONTENT_ID';

      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content id={DIALOG_CONTENT_ID} data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`)
        .invoke('attr', 'aria-controls')
        .then((ariaControls) =>
          cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'id', ariaControls)
        );
    });
  });

  describe('Content', () => {
    it('should be <dialog> element', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIALOG');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content as={Primitive.div} data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIALOG');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const DIALOG_CONTENT_TEXT = 'DIALOG_CONTENT_TEXT';

      cy.mount(
        <Dialog.Root>
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>{DIALOG_CONTENT_TEXT}</Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.text', DIALOG_CONTENT_TEXT);
    });

    it('should have attribute role with value "dialog"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'role', 'dialog');
    });

    it('should have attribute tabIndex with value "-1"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'tabIndex', '-1');
    });

    it('should have attribute data-qwik-primitives-dialog-content with empty value', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-dialog-content', '');
    });

    it('should have attribute data-scope with value "dialog"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-scope', 'dialog');
    });

    it('should have attribute data-part with value "content"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-part', 'content');
    });

    it('should have attribute id associated with <Dialog.Trigger> aria-controls attribute', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content id={undefined} data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'aria-controls', id));
    });

    it('should have attribute id associated with <Dialog.Trigger> aria-controls attribute provided via id prop', () => {
      const DIALOG_CONTENT_ID = 'DIALOG_CONTENT_ID';

      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content id={DIALOG_CONTENT_ID} data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'aria-controls', id));
    });

    it('should have not attribute aria-labelledby when dialog is open and <Dialog.Root> not contains <Dialog.Title>', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
    });

    it('should have attribute aria-labelledby associated with <Dialog.Title> id attribute when dialog is open and <Dialog.Root> contains <Dialog.Title>', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
            <Dialog.Title data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();

      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'aria-labelledby')
        .then((ariaLabelledby) =>
          cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'id', ariaLabelledby)
        );

      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
    });

    it('should have attribute aria-labelledby associated with <Dialog.Title> id attribute provided via id prop when dialog is open and <Dialog.Root> contains <Dialog.Title>', () => {
      const DIALOG_TITLE_ID = 'DIALOG_TITLE_ID';

      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
            <Dialog.Title id={DIALOG_TITLE_ID} data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();

      cy.wait(1000);

      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'aria-labelledby')
        .then((ariaLabelledby) =>
          cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'id', ariaLabelledby)
        );

      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
    });

    it('should have not attribute aria-describedby when dialog is open and <Dialog.Root> not contains <Dialog.Description>', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
    });

    it('should have attribute aria-describedby associated with <Dialog.Description> id attribute when dialog is open and <Dialog.Root> contains <Dialog.Description>', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
            <Dialog.Description data-testid={DIALOG_DESCRIPTION_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();

      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );

      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
    });

    it('should have attribute aria-describedby associated with <Dialog.Description> id attribute provided via id prop when dialog is open and <Dialog.Root> contains <Dialog.Description>', () => {
      const DIALOG_DESCRIPTION_ID = 'DIALOG_DESCRIPTION_ID';

      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
            <Dialog.Description id={DIALOG_DESCRIPTION_ID} data-testid={DIALOG_DESCRIPTION_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();

      cy.wait(1000);

      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );

      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
    });

    it('should have attribute open when dialog is open and not have this attribute when dialog is closed', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');

      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');

      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
    });

    it('should have attribute data-state with value "closed" when dialog is closed and "open" when is open', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');

      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');

      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should not close dialog when the escape key is down and closeOnEscapeKeyDown is false', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content closeOnEscapeKeyDown={false} data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');

      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');

      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).realPress('Escape');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should close dialog when the escape key is down and closeOnEscapeKeyDown is true', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content closeOnEscapeKeyDown={true} data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');

      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');

      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).realPress('Escape');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should call onEscapeKeyDown$ event handler when the escape key is down', () => {
      const ON_ESCAPE_KEY_DOWN_TEXT = 'ON_ESCAPE_KEY_DOWN_TEXT';

      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content
            onEscapeKeyDown$={() => console.log(ON_ESCAPE_KEY_DOWN_TEXT)}
            data-testid={DIALOG_CONTENT_TESTID}
          >
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );

      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).realPress('Escape');
      cy.wait(1000);
      cy.get('@log').should('be.calledWith', ON_ESCAPE_KEY_DOWN_TEXT);
      cy.get('@log').should('be.calledOnce');
    });

    it('should not close dialog when click outside and closeOnClickOutside is false', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content closeOnClickOutside={false} data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');

      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');

      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).click(1000, 1000, { force: true });
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should close dialog when click outside and closeOnClickOutside is true', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content closeOnClickOutside={true} data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');

      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');

      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).click(1000, 1000, { force: true });
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should not call onClickOutside$ event handler when not click outside', () => {
      const ON_CLICK_OUTSIDE_TEXT = 'ON_CLICK_OUTSIDE_TEXT';

      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content
            onClickOutside$={() => console.log(ON_CLICK_OUTSIDE_TEXT)}
            data-testid={DIALOG_CONTENT_TESTID}
          />
        </Dialog.Root>
      );

      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).realClick({ position: 'topLeft' });
      cy.wait(1000);
      cy.get('@log').should('be.not.calledWith', ON_CLICK_OUTSIDE_TEXT);
      cy.get('@log').should('be.not.calledOnce');
    });

    it('should call onClickOutside$ event handler when click outside', () => {
      const ON_CLICK_OUTSIDE_TEXT = 'ON_CLICK_OUTSIDE_TEXT';

      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content
            onClickOutside$={() => console.log(ON_CLICK_OUTSIDE_TEXT)}
            data-testid={DIALOG_CONTENT_TESTID}
          />
        </Dialog.Root>
      );

      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).click(1000, 1000, { force: true });
      cy.wait(1000);
      cy.get('@log').should('be.calledWith', ON_CLICK_OUTSIDE_TEXT);
      cy.get('@log').should('be.calledOnce');
    });

    it('should call onOpen$ event handler after dialog opened', () => {
      const ON_OPEN_TEXT = 'ON_OPEN_TEXT';

      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content onOpen$={() => console.log(ON_OPEN_TEXT)} data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get('@log').should('be.calledWith', ON_OPEN_TEXT);
      cy.get('@log').should('be.calledOnce');
    });

    it('should call onClose$ event handler after dialog closed', () => {
      const ON_CLOSE_TEXT = 'ON_CLOSE_TEXT';

      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content onClose$={() => console.log(ON_CLOSE_TEXT)} data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get('@log').should('be.calledWith', ON_CLOSE_TEXT);
      cy.get('@log').should('be.calledOnce');
    });

    it('should move focus on container when autoFocus is false after dialog open', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content autoFocus={false} data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('be.focused');
    });

    it('should move focus on container in which there is no focusable elements when autoFocus is true after dialog open', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content autoFocus={true} data-testid={DIALOG_CONTENT_TESTID}>
            <button disabled={true}>First button (disabled)</button>
            <button disabled={true}>Second button (disabled)</button>
            <button disabled={true}>Third button (disabled)</button>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First button (disabled)').should('be.not.focused');
      cy.get('button').contains('Second button (disabled)').should('be.not.focused');
      cy.get('button').contains('Third button (disabled)').should('be.not.focused');
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('be.focused');
    });

    it('should move focus on first focusable element when autoFocus is true after dialog open', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content autoFocus={true} data-testid={DIALOG_CONTENT_TESTID}>
            <button disabled={true}>First button (disabled)</button>
            <button disabled={false}>Second button</button>
            <button disabled={false}>Third button</button>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First button (disabled)').should('be.not.focused');
      cy.get('button').contains('Second button').should('be.focused');
    });

    it('should move focus on first focusable element which has attribute data-qwik-primitives-auto-focus when autoFocus is true after dialog open', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content autoFocus={true} data-testid={DIALOG_CONTENT_TESTID}>
            <button disabled={true}>First button (disabled)</button>
            <button disabled={false}>Second button</button>
            <button disabled={false} data-qwik-primitives-auto-focus="">
              Third button
            </button>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('Second button').should('be.not.focused');
      cy.get('button').contains('Third button').should('be.focused');
    });

    it('should not move focus on first focusable element which has attribute data-qwik-primitives-auto-focus but is disabled when autoFocus is true after dialog open', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content autoFocus={true} data-testid={DIALOG_CONTENT_TESTID}>
            <button disabled={true}>First button (disabled)</button>
            <button disabled={false}>Second button</button>
            <button disabled={true} data-qwik-primitives-auto-focus="">
              Third button
            </button>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('Second button').should('be.focused');
      cy.get('button').contains('Third button').should('be.not.focused');
    });

    it('should not move focus on first focusable element when press Tab on last focusable element when loop is false and dialog open', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content loop={false} data-testid={DIALOG_CONTENT_TESTID}>
            <button disabled={false}>First button</button>
            <button disabled={false}>Second button</button>
            <button disabled={false}>Third button</button>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First button').should('be.focused').realPress('Tab');
      cy.get('button').contains('Second button').should('be.focused').realPress('Tab');
      cy.get('button').contains('Third button').should('be.focused').realPress('Tab');
      cy.get('button').contains('Third button').should('be.focused');
      cy.get('button').contains('First button').should('be.not.focused');
    });

    it('should move focus on first focusable element when press Tab on last focusable element when loop is true and dialog open', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content loop={true} data-testid={DIALOG_CONTENT_TESTID}>
            <button disabled={false}>First button</button>
            <button disabled={false}>Second button</button>
            <button disabled={false}>Third button</button>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First button').should('be.focused').realPress('Tab');
      cy.get('button').contains('Second button').should('be.focused').realPress('Tab');
      cy.get('button').contains('Third button').should('be.focused').realPress('Tab');
      cy.get('button').contains('Third button').should('be.not.focused');
      cy.get('button').contains('First button').should('be.focused');
    });

    it('should not move focus on last focusable element when press Shift + Tab on first focusable element when loop is false and dialog open', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content loop={false} data-testid={DIALOG_CONTENT_TESTID}>
            <button disabled={false}>First button</button>
            <button disabled={false}>Second button</button>
            <button disabled={false}>Third button</button>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First button').should('be.focused').realPress(['Shift', 'Tab']);
      cy.get('button').contains('First button').should('be.focused');
      cy.get('button').contains('Third button').should('be.not.focused');
    });

    it('should move focus on last focusable element when press Shift + Tab on first focusable element when loop is true and dialog open', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content loop={true} data-testid={DIALOG_CONTENT_TESTID}>
            <button disabled={false}>First button</button>
            <button disabled={false}>Second button</button>
            <button disabled={false}>Third button</button>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First button').should('be.focused').realPress(['Shift', 'Tab']);
      cy.get('button').contains('First button').should('be.not.focused');
      cy.get('button').contains('Third button').should('be.focused');
    });

    it('should not move focus on <Dialog.Trigger> after dialog closed when restoreFocus is false', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content restoreFocus={false} data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).focus().click();
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('be.not.focused');
    });

    it('should move focus on <Dialog.Trigger> after dialog closed when restoreFocus is true', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content restoreFocus={true} data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).focus().click();
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).should('be.focused');
    });

    it('should have inline style opacity with value "0" when dialog is closed and "1" when is open', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).invoke('attr', 'style').should('contain', 'opacity: 0');

      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).invoke('attr', 'style').should('contain', 'opacity: 1');

      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).invoke('attr', 'style').should('contain', 'opacity: 1');
    });

    it('should have inline style animation-name with value "none" before first open and not have this style after ', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'animation-name: none');

      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('not.contain', 'animation-name: none');

      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('not.contain', 'animation-name: none');
    });

    it('should have inline style provided via style prop', () => {
      const DIALOG_CONTENT_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <Dialog.Root>
          <Dialog.Content style={{ color: DIALOG_CONTENT_COLOR }} data-testid={DIALOG_CONTENT_TESTID} />
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${DIALOG_CONTENT_COLOR}`);
    });
  });

  describe('Close', () => {
    it('should be <button> element', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Close as={Primitive.div} data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const DIALOG_CLOSE_TEXT = 'DIALOG_CLOSE_TEXT';

      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID}>{DIALOG_CLOSE_TEXT}</Dialog.Close>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).should('have.text', DIALOG_CLOSE_TEXT);
    });

    it('should have attribute type with value "button"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should have attribute data-qwik-primitives-dialog-close with empty value', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).should('have.attr', 'data-qwik-primitives-dialog-close', '');
    });

    it('should have attribute data-scope with value "dialog"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).should('have.attr', 'data-scope', 'dialog');
    });

    it('should have attribute data-part with value "close"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Close data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).should('have.attr', 'data-part', 'close');
    });

    it('should not close dialog after user click close when disabled', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close disabled={true} data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
    });

    it('should close dialog after user click close when not disabled', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger data-testid={DIALOG_TRIGGER_TESTID} />
          <Dialog.Content data-testid={DIALOG_CONTENT_TESTID}>
            <Dialog.Close disabled={false} data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).realClick();
      cy.get(`[data-testid="${DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
    });

    it('should be not disabled when not disabled', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger />
          <Dialog.Content>
            <Dialog.Close disabled={false} data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when disabled', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger />
          <Dialog.Content>
            <Dialog.Close disabled={true} data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute data-disabled when not disabled', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger />
          <Dialog.Content>
            <Dialog.Close disabled={false} data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when disabled', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Trigger />
          <Dialog.Content>
            <Dialog.Close disabled={true} data-testid={DIALOG_CLOSE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_CLOSE_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });
  });

  describe('Title', () => {
    it('should be <h2> element', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H2');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title as={Primitive.div} data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'H2');
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be <h1> element when level="1"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title level="1" data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H1');
    });

    it('should be <h2> element when level="2"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title level="2" data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H2');
    });

    it('should be <h3> element when level="3"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title level="3" data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H3');
    });

    it('should be <h4> element when level="4"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title level="4" data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H4');
    });

    it('should be <h5> element when level="5"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title level="5" data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H5');
    });

    it('should be <h6> element when level="6"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title level="6" data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H6');
    });

    it('should contain passed children', () => {
      const DIALOG_TITLE_TEXT = 'DIALOG_TITLE_TEXT';

      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title data-testid={DIALOG_TITLE_TESTID}>{DIALOG_TITLE_TEXT}</Dialog.Title>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.text', DIALOG_TITLE_TEXT);
    });

    it('should have attribute data-qwik-primitives-dialog-title with empty value', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-qwik-primitives-dialog-title', '');
    });

    it('should have attribute data-scope with value "dialog"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-scope', 'dialog');
    });

    it('should have attribute data-part with value "title"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-part', 'title');
    });

    it('should have attribute data-lavel with value "1" when level="1"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title level="1" data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-level', '1');
    });

    it('should have attribute data-lavel with value "2" when level="2"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title level="2" data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-level', '2');
    });

    it('should have attribute data-lavel with value "3" when level="3"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title level="3" data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-level', '3');
    });

    it('should have attribute data-lavel with value "4" when level="4"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title level="4" data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-level', '4');
    });

    it('should have attribute data-lavel with value "5" when level="5"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title level="5" data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-level', '5');
    });

    it('should have attribute data-lavel with value "6" when level="6"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title level="6" data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-level', '6');
    });

    it('should have attribute id with unique value when not provided via id prop', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title id={undefined} data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'id');
    });

    it('should have attribute id with value provided via id prop', () => {
      const DIALOG_TITLE_ID = 'DIALOG_TITLE_ID';

      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title id={DIALOG_TITLE_ID} data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`).should('have.attr', 'id', DIALOG_TITLE_ID);
    });

    it('should have not visually hidden style when visuallyHidden is false', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title visuallyHidden={false} data-testid={DIALOG_TITLE_TESTID}></Dialog.Title>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'not.contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have visually hidden style when visuallyHidden is true', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title visuallyHidden={true} data-testid={DIALOG_TITLE_TESTID}></Dialog.Title>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have inline style provided via style prop', () => {
      const DIALOG_TITLE_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Title style={{ color: DIALOG_TITLE_COLOR }} data-testid={DIALOG_TITLE_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_TITLE_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${DIALOG_TITLE_COLOR}`);
    });
  });

  describe('Description', () => {
    it('should be <p> element', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Description data-testid={DIALOG_DESCRIPTION_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'P');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Description as={Primitive.div} data-testid={DIALOG_DESCRIPTION_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'P');
      cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const DIALOG_DESCRIPTION_TEXT = 'DIALOG_DESCRIPTION_TEXT';

      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Description data-testid={DIALOG_DESCRIPTION_TESTID}>{DIALOG_DESCRIPTION_TEXT}</Dialog.Description>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`).should('have.text', DIALOG_DESCRIPTION_TEXT);
    });

    it('should have attribute data-qwik-primitives-dialog-description with empty value', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Description data-testid={DIALOG_DESCRIPTION_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-dialog-description',
        ''
      );
    });

    it('should have attribute data-scope with value "dialog"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Description data-testid={DIALOG_DESCRIPTION_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-scope', 'dialog');
    });

    it('should have attribute data-part with value "description"', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Description data-testid={DIALOG_DESCRIPTION_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-part', 'description');
    });

    it('should have attribute id with unique value when not provided via id prop', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Description id={undefined} data-testid={DIALOG_DESCRIPTION_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`).should('have.attr', 'id');
    });

    it('should have attribute id with value provided via id prop', () => {
      const DIALOG_DESCRIPTION_ID = 'DIALOG_DESCRIPTION_ID';

      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Description id={DIALOG_DESCRIPTION_ID} data-testid={DIALOG_DESCRIPTION_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', DIALOG_DESCRIPTION_ID);
    });

    it('should have not visually hidden style when visuallyHidden is false', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Description visuallyHidden={false} data-testid={DIALOG_DESCRIPTION_TESTID}></Dialog.Description>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'not.contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have visually hidden style when visuallyHidden is true', () => {
      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Description visuallyHidden={true} data-testid={DIALOG_DESCRIPTION_TESTID}></Dialog.Description>
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have inline style provided via style prop', () => {
      const DIALOG_DESCRIPTION_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <Dialog.Root>
          <Dialog.Content>
            <Dialog.Description style={{ color: DIALOG_DESCRIPTION_COLOR }} data-testid={DIALOG_DESCRIPTION_TESTID} />
          </Dialog.Content>
        </Dialog.Root>
      );
      cy.get(`[data-testid="${DIALOG_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${DIALOG_DESCRIPTION_COLOR}`);
    });
  });
});
