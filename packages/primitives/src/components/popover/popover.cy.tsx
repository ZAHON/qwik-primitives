import { Primitive } from '@/components';
import * as Popover from '.';

const POPOVER_TRIGGER_TESTID = 'POPOVER_TRIGGER_TESTID';
const POPOVER_ANCHOR_TESTID = 'POPOVER_ANCHOR_TESTID';
const POPOVER_CONTENT_TESTID = 'POPOVER_CONTENT_TESTID';
const POPOVER_CLOSE_TESTID = 'POPOVER_CLOSE_TESTID';
const POPOVER_TITLE_TESTID = 'POPOVER_TITLE_TESTID';
const POPOVER_DESCRIPTION_TESTID = 'POPOVER_DESCRIPTION_TESTID';

describe('Popover', () => {
  describe('Trigger', () => {
    it('should be <button> element', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger as={Primitive.div} data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const POPOVER_TRIGGER_TEXT = 'POPOVER_TRIGGER_TEXT';
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID}>{POPOVER_TRIGGER_TEXT}</Popover.Trigger>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.text', POPOVER_TRIGGER_TEXT);
    });

    it('should have attribute type with value "button"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should have attribute data-qwik-primitives-popover-trigger with empty value', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-popover-trigger',
        ''
      );
    });

    it('should have attribute data-scope with value "popover"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.attr', 'data-scope', 'popover');
    });

    it('should have attribute data-part with value "trigger"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.attr', 'data-part', 'trigger');
    });

    it('should not open popover after user click trigger when is disabled', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger disabled={true} data-testid={POPOVER_TRIGGER_TESTID} />
          <Popover.Content data-testid={POPOVER_CONTENT_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${POPOVER_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should open popover after user click trigger when is not disabled', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger disabled={false} data-testid={POPOVER_TRIGGER_TESTID} />
          <Popover.Content data-testid={POPOVER_CONTENT_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${POPOVER_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should be not disabled when is not disabled', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger disabled={false} data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when is disabled', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger disabled={true} data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute data-disabled when is not disabled', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger disabled={false} data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when is disabled', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger disabled={true} data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-state with value "closed" when popover is closed and "open" when is open', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
          <Popover.Content>
            <Popover.Close data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'open');
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have not attribute aria-expanded when <Popover.Root> not contains <Popover.Content>', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-expanded');
    });

    it('should have attribute aria-expanded with value "false" when popover is closed and "true" when is open, when <Popover.Root> contains <Popover.Content>', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
          <Popover.Content>
            <Popover.Close data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'false');
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'true');
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'false');
    });

    it('should have not attribute aria-haspopup when <Popover.Root> not contains <Popover.Content>', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-haspopup');
    });

    it('should have attribute aria-haspopup with value "dialog" when <Popover.Root> contains <Popover.Content>', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
          <Popover.Content />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.attr', 'aria-haspopup', 'dialog');
    });

    it('should have not attribute aria-controls when <Popover.Root> not contains <Popover.Content>', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-controls');
    });

    it('should have attribute aria-controls associated with <Popover.Content> id attribute when <Popover.Root> contains <Popover.Content>', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
          <Popover.Content id={undefined} data-testid={POPOVER_CONTENT_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`)
        .invoke('attr', 'aria-controls')
        .then((ariaControls) =>
          cy.get(`[data-testid="${POPOVER_CONTENT_TESTID}"]`).should('have.attr', 'id', ariaControls)
        );
    });

    it('should have attribute aria-controls associated with <Popover.Content> id attribute provided via id prop when <Popover.Root> contains <Popover.Content>', () => {
      const POPOVER_CONTENT_ID = 'POPOVER_CONTENT_ID';
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
          <Popover.Content id={POPOVER_CONTENT_ID} data-testid={POPOVER_CONTENT_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`)
        .invoke('attr', 'aria-controls')
        .then((ariaControls) =>
          cy.get(`[data-testid="${POPOVER_CONTENT_TESTID}"]`).should('have.attr', 'id', ariaControls)
        );
    });
  });

  describe('Anchor', () => {
    it('should be <div> element', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Anchor data-testid={POPOVER_ANCHOR_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_ANCHOR_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Anchor as={Primitive.span} data-testid={POPOVER_ANCHOR_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_ANCHOR_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${POPOVER_ANCHOR_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const POPOVER_ANCHOR_TEXT = 'POPOVER_ANCHOR_TEXT';
      cy.mount(
        <Popover.Root>
          <Popover.Anchor data-testid={POPOVER_ANCHOR_TESTID}>{POPOVER_ANCHOR_TEXT}</Popover.Anchor>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_ANCHOR_TESTID}"]`).should('have.text', POPOVER_ANCHOR_TEXT);
    });

    it('should have attribute data-qwik-primitives-popover-anchor with empty value', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Anchor data-testid={POPOVER_ANCHOR_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_ANCHOR_TESTID}"]`).should('have.attr', 'data-qwik-primitives-popover-anchor', '');
    });

    it('should have attribute data-scope with value "popover"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Anchor data-testid={POPOVER_ANCHOR_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_ANCHOR_TESTID}"]`).should('have.attr', 'data-scope', 'popover');
    });

    it('should have attribute data-part with value "anchor"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Anchor data-testid={POPOVER_ANCHOR_TESTID} />
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_ANCHOR_TESTID}"]`).should('have.attr', 'data-part', 'anchor');
    });
  });

  describe('ContentPositioner', () => {
    const POPOVER_CONTENT_POSITIONER_DATA_ATTR = 'data-qwik-primitives-popover-content-positioner';
    it('should be <div> element', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content />
        </Popover.Root>
      );
      cy.get(`[${POPOVER_CONTENT_POSITIONER_DATA_ATTR}]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should have attribute popover with value "manual"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content />
        </Popover.Root>
      );
      cy.get(`[${POPOVER_CONTENT_POSITIONER_DATA_ATTR}]`).should('have.attr', 'popover', 'manual');
    });

    it('should have attribute dir with value "ltr"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content />
        </Popover.Root>
      );
      cy.get(`[${POPOVER_CONTENT_POSITIONER_DATA_ATTR}]`).should('have.attr', 'dir', 'ltr');
    });
  });

  describe('Close', () => {
    it('should be <button> element', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Close data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Close as={Primitive.div} data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const POPOVER_CLOSE_TEXT = 'POPOVER_CLOSE_TEXT';
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Close data-testid={POPOVER_CLOSE_TESTID}>{POPOVER_CLOSE_TEXT}</Popover.Close>
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).should('have.text', POPOVER_CLOSE_TEXT);
    });

    it('should have attribute type with value "button"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Close data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should have attribute data-qwik-primitives-popover-close with empty value', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Close data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).should('have.attr', 'data-qwik-primitives-popover-close', '');
    });

    it('should have attribute data-scope with value "popover"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Close data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).should('have.attr', 'data-scope', 'popover');
    });

    it('should have attribute data-part with value "close"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Close data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).should('have.attr', 'data-part', 'close');
    });

    it('should not close popover after user click close when is disabled', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
          <Popover.Content data-testid={POPOVER_CONTENT_TESTID}>
            <Popover.Close disabled={true} data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${POPOVER_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${POPOVER_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should not popover after user click close when is not disabled', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Trigger data-testid={POPOVER_TRIGGER_TESTID} />
          <Popover.Content data-testid={POPOVER_CONTENT_TESTID}>
            <Popover.Close disabled={false} data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${POPOVER_TRIGGER_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${POPOVER_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).realClick();
      cy.wait(1000);
      cy.get(`[data-testid="${POPOVER_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should be not disabled when is not disabled', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Close disabled={false} data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when is disabled', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Close disabled={true} data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute data-disabled when is not disabled', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Close disabled={false} data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when is disabled', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Close disabled={true} data-testid={POPOVER_CLOSE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_CLOSE_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });
  });

  describe('Title', () => {
    it('should be <h2> element', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Title data-testid={POPOVER_TITLE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H2');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Title as={Primitive.div} data-testid={POPOVER_TITLE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'H2');
      cy.get(`[data-testid="${POPOVER_TITLE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const POPOVER_TITLE_TEXT = 'POPOVER_TITLE_TEXT';
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Title data-testid={POPOVER_TITLE_TESTID}>{POPOVER_TITLE_TEXT}</Popover.Title>
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TITLE_TESTID}"]`).should('have.text', POPOVER_TITLE_TEXT);
    });

    it('should have attribute data-qwik-primitives-popover-title with empty value', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Title data-testid={POPOVER_TITLE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TITLE_TESTID}"]`).should('have.attr', 'data-qwik-primitives-popover-title', '');
    });

    it('should have attribute data-scope with value "popover"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Title data-testid={POPOVER_TITLE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TITLE_TESTID}"]`).should('have.attr', 'data-scope', 'popover');
    });

    it('should have attribute data-part with value "title"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Title data-testid={POPOVER_TITLE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TITLE_TESTID}"]`).should('have.attr', 'data-part', 'title');
    });

    it('should have attribute id with unique value when not provided via id prop', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Title id={undefined} data-testid={POPOVER_TITLE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TITLE_TESTID}"]`).should('have.attr', 'id');
    });

    it('should have attribute id with value provided via id prop', () => {
      const POPOVER_TITLE_ID = 'POPOVER_TITLE_ID';
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Title id={POPOVER_TITLE_ID} data-testid={POPOVER_TITLE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TITLE_TESTID}"]`).should('have.attr', 'id', POPOVER_TITLE_ID);
    });

    it('should have not visually hidden style when visuallyHidden is false', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Title visuallyHidden={false} data-testid={POPOVER_TITLE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TITLE_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'not.contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have visually hidden style when visuallyHidden is true', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Title visuallyHidden={true} data-testid={POPOVER_TITLE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TITLE_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have inline style provided via style prop', () => {
      const POPOVER_TITLE_COLOR = 'rgb(1, 2, 3)';
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Title style={{ color: POPOVER_TITLE_COLOR }} data-testid={POPOVER_TITLE_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_TITLE_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${POPOVER_TITLE_COLOR}`);
    });
  });

  describe('Description', () => {
    it('should be <p> element', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Description data-testid={POPOVER_DESCRIPTION_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'P');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Description as={Primitive.div} data-testid={POPOVER_DESCRIPTION_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'P');
      cy.get(`[data-testid="${POPOVER_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const POPOVER_DESCRIPTION_TEXT = 'POPOVER_DESCRIPTION_TEXT';
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Description data-testid={POPOVER_DESCRIPTION_TESTID}>
              {POPOVER_DESCRIPTION_TEXT}
            </Popover.Description>
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_DESCRIPTION_TESTID}"]`).should('have.text', POPOVER_DESCRIPTION_TEXT);
    });

    it('should have attribute data-qwik-primitives-popover-description with empty value', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Description data-testid={POPOVER_DESCRIPTION_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_DESCRIPTION_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-popover-description',
        ''
      );
    });

    it('should have attribute data-scope with value "popover"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Description data-testid={POPOVER_DESCRIPTION_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-scope', 'popover');
    });

    it('should have attribute data-part with value "description"', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Description data-testid={POPOVER_DESCRIPTION_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-part', 'description');
    });

    it('should have attribute id with unique value when not provided via id prop', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Description id={undefined} data-testid={POPOVER_DESCRIPTION_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_DESCRIPTION_TESTID}"]`).should('have.attr', 'id');
    });

    it('should have attribute id with value provided via id prop', () => {
      const POPOVER_DESCRIPTION_ID = 'POPOVER_DESCRIPTION_ID';
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Description id={POPOVER_DESCRIPTION_ID} data-testid={POPOVER_DESCRIPTION_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', POPOVER_DESCRIPTION_ID);
    });

    it('should have not visually hidden style when visuallyHidden is false', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Description visuallyHidden={false} data-testid={POPOVER_DESCRIPTION_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'not.contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have visually hidden style when visuallyHidden is true', () => {
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Description visuallyHidden={true} data-testid={POPOVER_DESCRIPTION_TESTID} />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'style')
        .should(
          'contain',
          `position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;`
        );
    });

    it('should have inline style provided via style prop', () => {
      const POPOVER_DESCRIPTION_COLOR = 'rgb(1, 2, 3)';
      cy.mount(
        <Popover.Root>
          <Popover.Content>
            <Popover.Description
              style={{ color: POPOVER_DESCRIPTION_COLOR }}
              data-testid={POPOVER_DESCRIPTION_TESTID}
            />
          </Popover.Content>
        </Popover.Root>
      );
      cy.get(`[data-testid="${POPOVER_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${POPOVER_DESCRIPTION_COLOR}`);
    });
  });
});
