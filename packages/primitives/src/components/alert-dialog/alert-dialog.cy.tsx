import { Primitive } from '@/components';
import * as AlertDialog from '.';

const ALERT_DIALOG_TRIGGER_TESTID = 'ALERT_DIALOG_TRIGGER_TESTID';
const ALERT_DIALOG_CONTENT_TESTID = 'ALERT_DIALOG_CONTENT_TESTID';
const ALERT_DIALOG_CANCEL_TESTID = 'ALERT_DIALOG_CANCEL_TESTID';
const ALERT_DIALOG_ACTION_TESTID = 'ALERT_DIALOG_ACTION_TESTID';
const ALERT_DIALOG_TITLE_TESTID = 'ALERT_DIALOG_TITLE_TESTID';
const ALERT_DIALOG_DESCRIPTION_TESTID = 'ALERT_DIALOG_DESCRIPTION_TESTID';

describe('AlertDialog', () => {
  describe('Trigger', () => {
    it('should be <button> element', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger as={Primitive.div} data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`)
        .should('have.prop', 'tagName')
        .should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const ALERT_DIALOG_TRIGGER_TEXT = 'ALERT_DIALOG_TRIGGER_TEXT';

      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID}>
            {ALERT_DIALOG_TRIGGER_TEXT}
          </AlertDialog.Trigger>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.text', ALERT_DIALOG_TRIGGER_TEXT);
    });

    it('should have attribute type with value "button"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should have attribute data-qwik-primitives-alert-dialog-trigger with empty value', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-alert-dialog-trigger',
        ''
      );
    });

    it('should have attribute data-scope with value "alert-dialog"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-scope', 'alert-dialog');
    });

    it('should have attribute data-part with value "trigger"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-part', 'trigger');
    });

    it('should not open alert dialog after user click trigger when disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger disabled={true} data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
    });

    it('should open alert dialog after user click trigger when not disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger disabled={false} data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
    });

    it('should be not disabled when not disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger disabled={false} data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger disabled={true} data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute data-disabled when not disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger disabled={false} data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger disabled={true} data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-state with value "closed" when alert dialog is closed and "open" when is open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'closed');

      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'open');

      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have not attribute aria-expanded when <AlertDialog.Root> not contains <AlertDialog.Content>', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-expanded');
    });

    it('should have attribute aria-expanded with value "false" when alert dialog is closed and "true" when is open, when <AlertDialog.Root> contains <AlertDialog.Content>', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'false');

      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'true');

      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'false');
    });

    it('should have not attribute aria-haspopup when <AlertDialog.Root> not contains <AlertDialog.Content>', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-haspopup');
    });

    it('should have attribute aria-haspopup with value "dialog" when <AlertDialog.Root> contains <AlertDialog.Content>', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'aria-haspopup', 'dialog');
    });

    it('should have not attribute aria-controls when <AlertDialog.Root> not contains <AlertDialog.Content>', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-controls');
    });

    it('should have attribute aria-controls associated with <AlertDialog.Content> id attribute when <AlertDialog.Root> contains <AlertDialog.Content>', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content id={undefined} data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`)
        .invoke('attr', 'aria-controls')
        .then((ariaControls) =>
          cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'id', ariaControls)
        );
    });

    it('should have attribute aria-controls associated with <AlertDialog.Content> id attribute provided via id prop when <AlertDialog.Root> contains <AlertDialog.Content>', () => {
      const ALERT_DIALOG_CONTENT_ID = 'DIALOG_CONTENT_ID';

      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content id={ALERT_DIALOG_CONTENT_ID} data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`)
        .invoke('attr', 'aria-controls')
        .then((ariaControls) =>
          cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'id', ariaControls)
        );
    });
  });

  describe('Content', () => {
    it('should be <dialog> element', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIALOG');
    });
    it('should be element provided via as prop', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content as={Primitive.div} data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`)
        .should('have.prop', 'tagName')
        .should('not.eq', 'DIALOG');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });
    it('should contain passed children', () => {
      const ALERT_DIALOG_CONTENT_TEXT = 'ALERT_DIALOG_CONTENT_TEXT';
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            {ALERT_DIALOG_CONTENT_TEXT}
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.text', ALERT_DIALOG_CONTENT_TEXT);
    });
    it('should have attribute role with value "alertdialog"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'role', 'alertdialog');
    });
    it('should have attribute tabIndex with value "-1"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'tabIndex', '-1');
    });
    it('should have attribute data-qwik-primitives-alert-dialog-content with empty value', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-alert-dialog-content',
        ''
      );
    });
    it('should have attribute data-scope with value "alert-dialog"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-scope', 'alert-dialog');
    });
    it('should have attribute data-part with value "content"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-part', 'content');
    });
    it('should have attribute id associated with <AlertDialog.Trigger> aria-controls attribute', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content id={undefined} data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'aria-controls', id)
        );
    });
    it('should have attribute id associated with <AlertDialog.Trigger> aria-controls attribute provided via id prop', () => {
      const ALERT_DIALOG_CONTENT_ID = 'ALERT_DIALOG_CONTENT_ID';
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content id={ALERT_DIALOG_CONTENT_ID} data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('have.attr', 'aria-controls', id)
        );
    });
    it('should have not attribute aria-labelledby when alert dialog is open and <AlertDialog.Root> not contains <AlertDialog.Title>', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
    });
    it('should have attribute aria-labelledby associated with <AlertDialog.Title> id attribute when alert dialog is open and <AlertDialog.Root> contains <AlertDialog.Title>', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
            <AlertDialog.Title data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'aria-labelledby')
        .then((ariaLabelledby) =>
          cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.attr', 'id', ariaLabelledby)
        );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
    });
    it('should have attribute aria-labelledby associated with <AlertDialog.Title> id attribute provided via id prop when alert dialog is open and <AlertDialog.Root> contains <AlertDialog.Title>', () => {
      const ALERT_DIALOG_TITLE_ID = 'ALERT_DIALOG_TITLE_ID';
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
            <AlertDialog.Title id={ALERT_DIALOG_TITLE_ID} data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'aria-labelledby')
        .then((ariaLabelledby) =>
          cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.attr', 'id', ariaLabelledby)
        );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
    });
    it('should have not attribute aria-describedby when alert dialog is open and <AlertDialog.Root> not contains <AlertDialog.Description>', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
    });
    it('should have attribute aria-describedby associated with <AlertDialog.Description> id attribute when alert dialog is open and <AlertDialog.Root> contains <AlertDialog.Description>', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
            <AlertDialog.Description data-testid={ALERT_DIALOG_DESCRIPTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
    });
    it('should have attribute aria-describedby associated with <AlertDialog.Description> id attribute provided via id prop when alert dialog is open and <AlertDialog.Root> contains <AlertDialog.Description>', () => {
      const DIALOG_DESCRIPTION_ID = 'DIALOG_DESCRIPTION_ID';
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
            <AlertDialog.Description id={DIALOG_DESCRIPTION_ID} data-testid={ALERT_DIALOG_DESCRIPTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
    });
    it('should have attribute open when alert dialog is open and not have this attribute when dialog is closed', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
    });
    it('should have attribute data-state with value "closed" when alert dialog is closed and "open" when is open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });
    it('should not close alert dialog when the escape key is down and closeOnEscapeKeyDown is false', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content closeOnEscapeKeyDown={false} data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).realPress('Escape');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });
    it('should close alert dialog when the escape key is down and closeOnEscapeKeyDown is true', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content closeOnEscapeKeyDown={true} data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).realPress('Escape');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });
    it('should call onEscapeKeyDown$ event handler when the escape key is down', () => {
      const ON_ESCAPE_KEY_DOWN_TEXT = 'ON_ESCAPE_KEY_DOWN_TEXT';
      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content
            onEscapeKeyDown$={() => console.log(ON_ESCAPE_KEY_DOWN_TEXT)}
            data-testid={ALERT_DIALOG_CONTENT_TESTID}
          />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).realPress('Escape');
      cy.wait(1000);
      cy.get('@log').should('be.calledWith', ON_ESCAPE_KEY_DOWN_TEXT);
      cy.get('@log').should('be.calledOnce');
    });
    it('should not close alert dialog when click outside and closeOnClickOutside is false', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content closeOnClickOutside={false} data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).click(1000, 1000, { force: true });
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });
    it('should close alert dialog when click outside and closeOnClickOutside is true', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content closeOnClickOutside={true} data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).click(1000, 1000, { force: true });
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });
    it('should not call onClickOutside$ event handler when not click outside', () => {
      const ON_CLICK_OUTSIDE_TEXT = 'ON_CLICK_OUTSIDE_TEXT';
      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content
            onClickOutside$={() => console.log(ON_CLICK_OUTSIDE_TEXT)}
            data-testid={ALERT_DIALOG_CONTENT_TESTID}
          />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).realClick({ position: 'topLeft' });
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
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content
            onClickOutside$={() => console.log(ON_CLICK_OUTSIDE_TEXT)}
            data-testid={ALERT_DIALOG_CONTENT_TESTID}
          />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).click(1000, 1000, { force: true });
      cy.wait(1000);
      cy.get('@log').should('be.calledWith', ON_CLICK_OUTSIDE_TEXT);
      cy.get('@log').should('be.calledOnce');
    });
    it('should call onOpen$ event handler after alert dialog opened', () => {
      const ON_OPEN_TEXT = 'ON_OPEN_TEXT';
      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content onOpen$={() => console.log(ON_OPEN_TEXT)} data-testid={ALERT_DIALOG_CONTENT_TESTID} />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
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
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content onClose$={() => console.log(ON_CLOSE_TEXT)} data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get('@log').should('be.calledWith', ON_CLOSE_TEXT);
      cy.get('@log').should('be.calledOnce');
    });

    it('should move focus on container when autoFocus is false after alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content autoFocus={false} data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('be.focused');
    });

    it('should move focus on container in which there is no focusable elements when autoFocus is true after alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content autoFocus={true} data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel disabled={true}>Alert cancel (disabled)</AlertDialog.Cancel>
            <AlertDialog.Action disabled={true}>Alert action (disabled)</AlertDialog.Action>
            <button disabled={true}>First button (disabled)</button>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('Alert cancel (disabled)').should('be.not.focused');
      cy.get('button').contains('Alert action (disabled)').should('be.not.focused');
      cy.get('button').contains('First button (disabled)').should('be.not.focused');
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('be.focused');
    });

    it('should move focus on <AlertDialog.Cancel> when autoFocus is true after alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content autoFocus={true} data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Action disabled={true}>First alert dialog action (disabled)</AlertDialog.Action>
            <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
            <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('Alert dialog cancel').should('be.focused');
    });

    it('should move focus on first focusable element when autoFocus is true and <AlertDialog.Cancel> is disabled after alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content autoFocus={true} data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
            <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
            <AlertDialog.Cancel disabled={true}>Alert dialog cancel</AlertDialog.Cancel>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First alert dialog action').should('be.focused');
    });

    it('should move focus on first focusable element when autoFocus is true and <AlertDialog.Content> not contains <AlertDialog.Cancel> after alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content autoFocus={true} data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Action disabled={true}>First alert dialog action (disabled)</AlertDialog.Action>
            <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('Second alert dialog action').should('be.focused');
    });

    it('should move focus on element which has attribute data-qwik-primitives-auto-focus when autoFocus is true after alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content autoFocus={true} data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Action disabled={true}>First alert dialog action (disabled)</AlertDialog.Action>
            <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
            <AlertDialog.Action data-qwik-primitives-auto-focus="">Third alert dialog action</AlertDialog.Action>
            <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('Third alert dialog action').should('be.focused');
    });

    it('should move focus on <AlertDialog.Cancel> when element which has attribute data-qwik-primitives-auto-focus is disabled and autoFocus is true after alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content autoFocus={true} data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Action disabled={true}>First alert dialog action (disabled)</AlertDialog.Action>
            <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
            <AlertDialog.Action disabled={true} data-qwik-primitives-auto-focus="">
              Third alert dialog action
            </AlertDialog.Action>
            <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('Alert dialog cancel').should('be.focused');
    });

    it('should move focus on first focusable element when element which has attribute data-qwik-primitives-auto-focus is disabled, <AlertDialog.Cancel> is disabled and autoFocus is true after alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content autoFocus={true} data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
            <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
            <AlertDialog.Action disabled={true} data-qwik-primitives-auto-focus="">
              Third alert dialog action
            </AlertDialog.Action>
            <AlertDialog.Cancel disabled={true}>Alert dialog cancel</AlertDialog.Cancel>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First alert dialog action').should('be.focused');
    });

    it('should move focus on first focusable element when element which has attribute data-qwik-primitives-auto-focus is disabled, <AlertDialog.Content> not contains <AlertDialog.Cancel> and autoFocus is true after alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content autoFocus={true} data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Action>First alert dialog action</AlertDialog.Action>
            <AlertDialog.Action>Second alert dialog action</AlertDialog.Action>
            <AlertDialog.Action disabled={true} data-qwik-primitives-auto-focus="">
              Third alert dialog action
            </AlertDialog.Action>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First alert dialog action').should('be.focused');
    });

    it('should not move focus on first focusable element when press Tab on last focusable element when loop is false and alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content loop={false}>
            <button disabled={false}>First button</button>
            <button disabled={false}>Second button</button>
            <button disabled={false}>Third button</button>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First button').should('be.focused').realPress('Tab');
      cy.get('button').contains('Second button').should('be.focused').realPress('Tab');
      cy.get('button').contains('Third button').should('be.focused').realPress('Tab');
      cy.get('button').contains('Third button').should('be.focused');
      cy.get('button').contains('First button').should('be.not.focused');
    });

    it('should move focus on first focusable element when press Tab on last focusable element when loop is true and alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content loop={true}>
            <button disabled={false}>First button</button>
            <button disabled={false}>Second button</button>
            <button disabled={false}>Third button</button>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First button').should('be.focused').realPress('Tab');
      cy.get('button').contains('Second button').should('be.focused').realPress('Tab');
      cy.get('button').contains('Third button').should('be.focused').realPress('Tab');
      cy.get('button').contains('Third button').should('be.not.focused');
      cy.get('button').contains('First button').should('be.focused');
    });

    it('should not move focus on last focusable element when press Shift + Tab on first focusable element when loop is false and alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content loop={false}>
            <button disabled={false}>First button</button>
            <button disabled={false}>Second button</button>
            <button disabled={false}>Third button</button>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First button').should('be.focused').realPress(['Shift', 'Tab']);
      cy.get('button').contains('First button').should('be.focused');
      cy.get('button').contains('Third button').should('be.not.focused');
    });

    it('should move focus on last focusable element when press Shift + Tab on first focusable element when loop is true and alert dialog open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content loop={true}>
            <button disabled={false}>First button</button>
            <button disabled={false}>Second button</button>
            <button disabled={false}>Third button</button>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get('button').contains('First button').should('be.focused').realPress(['Shift', 'Tab']);
      cy.get('button').contains('First button').should('be.not.focused');
      cy.get('button').contains('Third button').should('be.focused');
    });

    it('should not move focus on <AlertDialog.Trigger> after alert dialog closed when restoreFocus is false', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content restoreFocus={false}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).focus().click();
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('be.not.focused');
    });

    it('should not focus on <AlertDialog.Trigger> after alert dialog closed when restoreFocus is true', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content restoreFocus={true}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).focus().click();
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).focus().click();
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).should('be.focused');
    });

    it('should have inline style opacity with value "0" when alert dialog is closed and "1" when is open', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).invoke('attr', 'style').should('contain', 'opacity: 0');

      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).invoke('attr', 'style').should('contain', 'opacity: 1');

      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).invoke('attr', 'style').should('contain', 'opacity: 1');
    });

    it('should have inline style animation-name with value "none" before first open and not have this style after ', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'animation-name: none');

      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('not.contain', 'animation-name: none');

      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('not.contain', 'animation-name: none');
    });

    it('should have inline style provided via style prop', () => {
      const ALERT_DIALOG_CONTENT_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content
            style={{ color: ALERT_DIALOG_CONTENT_COLOR }}
            data-testid={ALERT_DIALOG_CONTENT_TESTID}
          />
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${ALERT_DIALOG_CONTENT_COLOR}`);
    });
  });

  describe('Cancel', () => {
    it('should be <button> element', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Cancel as={Primitive.div} data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const ALERT_DIALOG_CANCEL_TEXT = 'ALERT_DIALOG_CANCEL_TEXT';

      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID}>{ALERT_DIALOG_CANCEL_TEXT}</AlertDialog.Cancel>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).should('have.text', ALERT_DIALOG_CANCEL_TEXT);
    });

    it('should have attribute type with value "button"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should have attribute data-qwik-primitives-alert-dialog-cancel with empty value', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-alert-dialog-cancel',
        ''
      );
    });

    it('should have attribute data-scope with value "alert-dialog"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).should('have.attr', 'data-scope', 'alert-dialog');
    });

    it('should have attribute data-part with value "cancel"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Cancel data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).should('have.attr', 'data-part', 'cancel');
    });

    it('should not close alert dialog after user click close when disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel disabled={true} data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
    });

    it('should close alert dialog after user click close when not disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Cancel disabled={false} data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
    });

    it('should be not disabled when not disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger />
          <AlertDialog.Content>
            <AlertDialog.Cancel disabled={false} data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger />
          <AlertDialog.Content>
            <AlertDialog.Cancel disabled={true} data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute data-disabled when not disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger />
          <AlertDialog.Content>
            <AlertDialog.Cancel disabled={false} data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger />
          <AlertDialog.Content>
            <AlertDialog.Cancel disabled={true} data-testid={ALERT_DIALOG_CANCEL_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CANCEL_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });
  });

  describe('Action', () => {
    it('should be <button> element', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Action data-testid={ALERT_DIALOG_ACTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Action as={Primitive.div} data-testid={ALERT_DIALOG_ACTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const ALERT_DIALOG_ACTION_TEXT = 'ALERT_DIALOG_ACTION_TEXT';

      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Action data-testid={ALERT_DIALOG_ACTION_TESTID}>{ALERT_DIALOG_ACTION_TEXT}</AlertDialog.Action>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).should('have.text', ALERT_DIALOG_ACTION_TEXT);
    });

    it('should have attribute type with value "button"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Action data-testid={ALERT_DIALOG_ACTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should have attribute data-qwik-primitives-alert-dialog-action with empty value', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Action data-testid={ALERT_DIALOG_ACTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-alert-dialog-action',
        ''
      );
    });

    it('should have attribute data-scope with value "alert-dialog"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Action data-testid={ALERT_DIALOG_ACTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).should('have.attr', 'data-scope', 'alert-dialog');
    });

    it('should have attribute data-part with value "action"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Action data-testid={ALERT_DIALOG_ACTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).should('have.attr', 'data-part', 'action');
    });

    it('should not close alert dialog after user click close when disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Action disabled={true} data-testid={ALERT_DIALOG_ACTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.attr', 'open');
    });

    it('should close alert dialog after user click close when not disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger data-testid={ALERT_DIALOG_TRIGGER_TESTID} />
          <AlertDialog.Content data-testid={ALERT_DIALOG_CONTENT_TESTID}>
            <AlertDialog.Action disabled={false} data-testid={ALERT_DIALOG_ACTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
      cy.get(`[data-testid="${ALERT_DIALOG_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${ALERT_DIALOG_CONTENT_TESTID}"]`).should('have.not.attr', 'open');
    });

    it('should be not disabled when not disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger />
          <AlertDialog.Content>
            <AlertDialog.Action disabled={false} data-testid={ALERT_DIALOG_ACTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger />
          <AlertDialog.Content>
            <AlertDialog.Action disabled={true} data-testid={ALERT_DIALOG_ACTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute data-disabled when not disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger />
          <AlertDialog.Content>
            <AlertDialog.Action disabled={false} data-testid={ALERT_DIALOG_ACTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when disabled', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Trigger />
          <AlertDialog.Content>
            <AlertDialog.Action disabled={true} data-testid={ALERT_DIALOG_ACTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_ACTION_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });
  });

  describe('Title', () => {
    it('should be <h2> element', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H2');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title as={Primitive.div} data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'H2');
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be <h1> element when level="1"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title level="1" data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H1');
    });

    it('should be <h2> element when level="2"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title level="2" data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H2');
    });

    it('should be <h3> element when level="3"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title level="3" data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H3');
    });

    it('should be <h4> element when level="4"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title level="4" data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H4');
    });

    it('should be <h5> element when level="5"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title level="5" data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H5');
    });

    it('should be <h6> element when level="6"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title level="6" data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H6');
    });

    it('should contain passed children', () => {
      const ALERT_DIALOG_TITLE_TEXT = 'ALERT_DIALOG_TITLE_TEXT';

      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title data-testid={ALERT_DIALOG_TITLE_TESTID}>{ALERT_DIALOG_TITLE_TEXT}</AlertDialog.Title>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.text', ALERT_DIALOG_TITLE_TEXT);
    });

    it('should have attribute data-qwik-primitives-alert-dialog-title with empty value', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-alert-dialog-title',
        ''
      );
    });

    it('should have attribute data-scope with value "alert-dialog"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-scope', 'alert-dialog');
    });

    it('should have attribute data-part with value "title"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-part', 'title');
    });

    it('should have attribute data-lavel with value "1" when level="1"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title level="1" data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-level', '1');
    });

    it('should have attribute data-lavel with value "2" when level="2"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title level="2" data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-level', '2');
    });

    it('should have attribute data-lavel with value "3" when level="3"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title level="3" data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-level', '3');
    });

    it('should have attribute data-lavel with value "4" when level="4"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title level="4" data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-level', '4');
    });

    it('should have attribute data-lavel with value "5" when level="5"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title level="5" data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-level', '5');
    });

    it('should have attribute data-lavel with value "6" when level="6"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title level="6" data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.attr', 'data-level', '6');
    });

    it('should have attribute id with unique value when not provided via id prop', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title id={undefined} data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.attr', 'id');
    });

    it('should have attribute id with value provided via id prop', () => {
      const ALERT_DIALOG_TITLE_ID = 'ALERT_DIALOG_TITLE_ID';

      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title id={ALERT_DIALOG_TITLE_ID} data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`).should('have.attr', 'id', ALERT_DIALOG_TITLE_ID);
    });

    it('should have not visually hidden style when visuallyHidden is false', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title visuallyHidden={false} data-testid={ALERT_DIALOG_TITLE_TESTID}></AlertDialog.Title>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'not.contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have visually hidden style when visuallyHidden is true', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title visuallyHidden={true} data-testid={ALERT_DIALOG_TITLE_TESTID}></AlertDialog.Title>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have inline style provided via style prop', () => {
      const ALERT_DIALOG_TITLE_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Title style={{ color: ALERT_DIALOG_TITLE_COLOR }} data-testid={ALERT_DIALOG_TITLE_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_TITLE_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${ALERT_DIALOG_TITLE_COLOR}`);
    });
  });

  describe('Description', () => {
    it('should be <p> element', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Description data-testid={ALERT_DIALOG_DESCRIPTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'P');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Description as={Primitive.div} data-testid={ALERT_DIALOG_DESCRIPTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`)
        .should('have.prop', 'tagName')
        .should('not.eq', 'H2');
      cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const ALERT_DIALOG_DESCRIPTION_TEXT = 'ALERT_DIALOG_DESCRIPTION_TEXT';

      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Description data-testid={ALERT_DIALOG_DESCRIPTION_TESTID}>
              {ALERT_DIALOG_DESCRIPTION_TEXT}
            </AlertDialog.Description>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`).should('have.text', ALERT_DIALOG_DESCRIPTION_TEXT);
    });

    it('should have attribute data-qwik-primitives-alert-dialog-description with empty value', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Description data-testid={ALERT_DIALOG_DESCRIPTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-alert-dialog-description',
        ''
      );
    });

    it('should have attribute data-scope with value "alert-dialog"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Description data-testid={ALERT_DIALOG_DESCRIPTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-scope', 'alert-dialog');
    });

    it('should have attribute data-part with value "description"', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Description data-testid={ALERT_DIALOG_DESCRIPTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-part', 'description');
    });

    it('should have attribute id with unique value when not provided via id prop', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Description id={undefined} data-testid={ALERT_DIALOG_DESCRIPTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`).should('have.attr', 'id');
    });

    it('should have attribute id with value provided via id prop', () => {
      const ALERT_DIALOG_DESCRIPTION_ID = 'ALERT_DIALOG_DESCRIPTION_ID';

      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Description id={ALERT_DIALOG_DESCRIPTION_ID} data-testid={ALERT_DIALOG_DESCRIPTION_TESTID} />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`).should(
        'have.attr',
        'id',
        ALERT_DIALOG_DESCRIPTION_ID
      );
    });

    it('should have not visually hidden style when visuallyHidden is false', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Description
              visuallyHidden={false}
              data-testid={ALERT_DIALOG_DESCRIPTION_TESTID}
            ></AlertDialog.Description>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'not.contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have visually hidden style when visuallyHidden is true', () => {
      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Description
              visuallyHidden={true}
              data-testid={ALERT_DIALOG_DESCRIPTION_TESTID}
            ></AlertDialog.Description>
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have inline style provided via style prop', () => {
      const ALERT_DIALOG_DESCRIPTION_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <AlertDialog.Root>
          <AlertDialog.Content>
            <AlertDialog.Description
              style={{ color: ALERT_DIALOG_DESCRIPTION_COLOR }}
              data-testid={ALERT_DIALOG_DESCRIPTION_TESTID}
            />
          </AlertDialog.Content>
        </AlertDialog.Root>
      );
      cy.get(`[data-testid="${ALERT_DIALOG_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${ALERT_DIALOG_DESCRIPTION_COLOR}`);
    });
  });
});
