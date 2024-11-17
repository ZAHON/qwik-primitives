import { Primitive } from '@/components';
import * as Collapsible from '.';

const COLLAPSIBLE_ROOT_TESTID = 'COLLAPSIBLE_ROOT_TESTID';
const COLLAPSIBLE_TRIGGER_TESTID = 'COLLAPSIBLE_TRIGGER_TESTID';
const COLLAPSIBLE_PANEL_TESTID = 'COLLAPSIBLE_PANEL_TESTID';
const COLLAPSIBLE_CONTENT_TESTID = 'COLLAPSIBLE_CONTENT_TESTID';

describe('Collapsible', () => {
  describe('Root', () => {
    it('should be <div> element', () => {
      cy.mount(<Collapsible.Root data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${COLLAPSIBLE_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Collapsible.Root as={Primitive.span} data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${COLLAPSIBLE_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${COLLAPSIBLE_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const COLLAPSIBLE_ROOT_TEXT = 'COLLAPSIBLE_ROOT_TEXT';

      cy.mount(<Collapsible.Root data-testid={COLLAPSIBLE_ROOT_TESTID}>{COLLAPSIBLE_ROOT_TEXT}</Collapsible.Root>);
      cy.get(`[data-testid="${COLLAPSIBLE_ROOT_TESTID}"]`).should('have.text', COLLAPSIBLE_ROOT_TEXT);
    });

    it('should have not attribute data-disabled when is not disabled', () => {
      cy.mount(<Collapsible.Root disabled={false} data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${COLLAPSIBLE_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when is disabled', () => {
      cy.mount(<Collapsible.Root disabled={true} data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${COLLAPSIBLE_ROOT_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-state with value "closed" when closed', () => {
      cy.mount(<Collapsible.Root defaultOpen={false} data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${COLLAPSIBLE_ROOT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have attribute data-state with value "open" when open', () => {
      cy.mount(<Collapsible.Root defaultOpen={true} data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${COLLAPSIBLE_ROOT_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should have attribute data-qwik-primitives-collapsible-root with empty value', () => {
      cy.mount(<Collapsible.Root data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${COLLAPSIBLE_ROOT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-collapsible-root',
        ''
      );
    });

    it('should have attribute data-scope with value "collapsible"', () => {
      cy.mount(<Collapsible.Root data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${COLLAPSIBLE_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'collapsible');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<Collapsible.Root data-testid={COLLAPSIBLE_ROOT_TESTID} />);
      cy.get(`[data-testid="${COLLAPSIBLE_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });

  describe('Trigger', () => {
    it('should be <button> element', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger as={Primitive.div} data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const COLLAPSIBLE_TRIGGER_TEXT = 'COLLAPSIBLE_TRIGGER_TEXT';

      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID}>{COLLAPSIBLE_TRIGGER_TEXT}</Collapsible.Trigger>
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.text', COLLAPSIBLE_TRIGGER_TEXT);
    });

    it('should have attribute type with value "button"', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should be not disabled when <Collapsible.Root> is not disabled', () => {
      cy.mount(
        <Collapsible.Root disabled={false}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when <Collapsible.Root> is disabled', () => {
      cy.mount(
        <Collapsible.Root disabled={true}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute data-disabled when <Collapsible.Root> is not disabled', () => {
      cy.mount(
        <Collapsible.Root disabled={false}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled when <Collapsible.Root> is disabled', () => {
      cy.mount(
        <Collapsible.Root disabled={true}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have attribute data-state with value "closed" when <Collapsible.Root> is closed', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={false}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have attribute data-state with value "open" when <Collapsible.Root> is open', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should not change open state of the whole component when <Collapsible.Root> is disabled and user click <Collapsible.Trigger>', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={false} disabled={true}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).click({ force: true });
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.not.attr', 'data-state', 'open');
    });

    it('should have attribute data-state with value "closed" when <Collapsible.Root> is closed after user click this attribute should have value "open"', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={false} disabled={false}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).click();
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'open');
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).click();
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have not attribute aria-controls when <Collapsible.Root> not contains <Collapsible.Panel>', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-controls');
    });

    it('should have attribute aria-controls associated with <Collapsible.Panel> id attribute when <Collapsible.Root> contains <Collapsible.Panel>', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`)
        .invoke('attr', 'aria-controls')
        .then((ariaControls) =>
          cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should('have.attr', 'id', ariaControls)
        );
    });

    it('should have attribute aria-controls associated with <Collapsible.Panel> id attribute provided via id prop when <Collapsible.Root> contains <Collapsible.Panel>', () => {
      const COLLAPSIBLE_PANEL_ID = 'COLLAPSIBLE_PANEL_ID';

      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
          <Collapsible.Panel id={COLLAPSIBLE_PANEL_ID} data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`)
        .invoke('attr', 'aria-controls')
        .then((ariaControls) =>
          cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should('have.attr', 'id', ariaControls)
        );
    });

    it('should have not attribute aria-expanded when <Collapsible.Root> not contains <Collapsible.Panel>', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-expanded');
    });

    it('should have attribute aria-expanded with value "false" when <Collapsible.Root> contains <Collapsible.Panel> and <Collapsible.Root> closed', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={false}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
          <Collapsible.Panel />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'false');
    });

    it('should have attribute aria-expanded with value "true" when <Collapsible.Root> contains <Collapsible.Panel> and <Collapsible.Root> open', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
          <Collapsible.Panel />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'true');
    });

    it('should have attribute aria-expanded with value "false" when <Collapsible.Root> closed and "true" when open, when <Collapsible.Root> contains <Collapsible.Panel>', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={false}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
          <Collapsible.Panel />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'false');
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).click();
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'true');
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).click();
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'false');
    });

    it('should have attribute data-qwik-primitives-collapsible-trigger with empty value', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-collapsible-trigger',
        ''
      );
    });

    it('should have attribute data-scope with value "collapsible"', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'data-scope', 'collapsible');
    });

    it('should have attribute data-part with value "trigger"', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'data-part', 'trigger');
    });
  });

  describe('Panel', () => {
    it('should be <div> element', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Panel as={Primitive.span} data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const COLLAPSIBLE_PANEL_TEXT = 'COLLAPSIBLE_ROOT_TEXT';

      cy.mount(
        <Collapsible.Root>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID}>{COLLAPSIBLE_PANEL_TEXT}</Collapsible.Panel>
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should('have.text', COLLAPSIBLE_PANEL_TEXT);
    });

    it('should have not attribute data-disabled when <Collapsible.Root> is not disabled', () => {
      cy.mount(
        <Collapsible.Root disabled={false}>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled when <Collapsible.Root> is disabled', () => {
      cy.mount(
        <Collapsible.Root disabled={true}>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have not attribute hidden when <Collapsible.Root> is open', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should('have.not.attr', 'hidden');
    });

    it('should have attribute hidden when <Collapsible.Root> is closed', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={false}>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should('have.attr', 'hidden');
    });

    it('should have attribute id associated with <Collapsible.Trigger> aria-controls attribute', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
          <Collapsible.Panel id={undefined} data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'aria-controls', id));
    });

    it('should have attribute id associated with <Collapsible.Trigger> aria-controls attribute provided via id prop', () => {
      const COLLAPSIBLE_PANEL_ID = 'COLLAPSIBLE_PANEL_ID';

      cy.mount(
        <Collapsible.Root>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
          <Collapsible.Panel id={COLLAPSIBLE_PANEL_ID} data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).should('have.attr', 'aria-controls', id));
    });

    it('should call onOpen$ event handler when the panel is fully open', () => {
      const ON_OPEN_TEXT = 'ON_OPEN_TEXT';

      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <Collapsible.Root defaultOpen={false}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
          <Collapsible.Panel onOpen$={() => console.log(ON_OPEN_TEXT)} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).click();
      cy.get('@log').should('be.calledWith', ON_OPEN_TEXT);
      cy.get('@log').should('be.calledOnce');
    });

    it('should call onClose$ event handler when the panel is fully close', () => {
      const ON_CLOSE_TEXT = 'ON_CLOSE_TEXT';

      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
          <Collapsible.Panel onClose$={() => console.log(ON_CLOSE_TEXT)} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).click();
      cy.get('@log').should('be.calledWith', ON_CLOSE_TEXT);
      cy.get('@log').should('be.calledOnce');
    });

    it('should have inline style display with value "grid"', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'display', 'grid');
    });

    it('should have inline style grid-template-rows with value "0fr" when <Collapsible.Root> is closed', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={false}>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'grid-template-rows', '0fr');
    });

    it('should have inline style grid-template-rows with value "1fr" when <Collapsible.Root> is open', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'grid-template-rows', '1fr');
    });

    it('should have not inline style animation-duration when <Collapsible.Root> is initially closed', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={false}>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('not.contain', 'animation-duration');
    });

    it('should have inline style animation-duration with value "0s" when <Collapsible.Root> is initially open', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'animation-duration: 0s');
    });

    it('should have inline style animation-duration with value "0s" when <Collapsible.Root> is initially open but after user click <Collapsible.Trigger> should have not this style', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Trigger data-testid={COLLAPSIBLE_TRIGGER_TESTID} />
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'animation-duration: 0s');

      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).click();
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('not.contain', 'animation-duration');

      cy.get(`[data-testid="${COLLAPSIBLE_TRIGGER_TESTID}"]`).click();
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('not.contain', 'animation-duration');
    });

    it('should have inline style provided via style prop', () => {
      const COLLAPSIBLE_PANEL_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <Collapsible.Root>
          <Collapsible.Panel style={{ color: COLLAPSIBLE_PANEL_COLOR }} data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${COLLAPSIBLE_PANEL_COLOR}`);
    });

    it('should have attribute data-qwik-primitives-collapsible-panel with empty value', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-collapsible-panel',
        ''
      );
    });

    it('should have attribute data-scope with value "collapsible"', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should('have.attr', 'data-scope', 'collapsible');
    });

    it('should have attribute data-part with value "panel"', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Panel data-testid={COLLAPSIBLE_PANEL_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_PANEL_TESTID}"]`).should('have.attr', 'data-part', 'panel');
    });
  });

  describe('Content', () => {
    it('should be <div> element', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Content data-testid={COLLAPSIBLE_CONTENT_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Content as={Primitive.span} data-testid={COLLAPSIBLE_CONTENT_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const COLLAPSIBLE_CONTENT_TEXT = 'COLLAPSIBLE_ROOT_TEXT';

      cy.mount(
        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Panel>
            <Collapsible.Content data-testid={COLLAPSIBLE_CONTENT_TESTID}>
              {COLLAPSIBLE_CONTENT_TEXT}
            </Collapsible.Content>
          </Collapsible.Panel>
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`).should('have.text', COLLAPSIBLE_CONTENT_TEXT);
    });

    it('should have not attribute data-disabled when <Collapsible.Root> is not disabled', () => {
      cy.mount(
        <Collapsible.Root disabled={false}>
          <Collapsible.Content data-testid={COLLAPSIBLE_CONTENT_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled when <Collapsible.Root> is disabled', () => {
      cy.mount(
        <Collapsible.Root disabled={true}>
          <Collapsible.Content data-testid={COLLAPSIBLE_CONTENT_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have attribute data-state with value "closed" when <Collapsible.Root> is closed', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={false}>
          <Collapsible.Content data-testid={COLLAPSIBLE_CONTENT_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have attribute data-state with value "open" when <Collapsible.Root> is open', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Content data-testid={COLLAPSIBLE_CONTENT_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should have inline style overflow with value "hidden" when <Collapsible.Root> is closed', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={false}>
          <Collapsible.Content data-testid={COLLAPSIBLE_CONTENT_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'overflow', 'hidden');
    });

    it('should have not inline style overflow when <Collapsible.Root> is open', () => {
      cy.mount(
        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Content data-testid={COLLAPSIBLE_CONTENT_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`).invoke('attr', 'style').should('not.contain', 'overflow');
    });

    it('should have inline style provided via style prop', () => {
      const COLLAPSIBLE_CONTENT_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <Collapsible.Root>
          <Collapsible.Content style={{ color: COLLAPSIBLE_CONTENT_COLOR }} data-testid={COLLAPSIBLE_CONTENT_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${COLLAPSIBLE_CONTENT_COLOR}`);
    });

    it('should have attribute data-qwik-primitives-collapsible-content with empty value', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Content data-testid={COLLAPSIBLE_CONTENT_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-collapsible-content',
        ''
      );
    });

    it('should have attribute data-scope with value "collapsible"', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Content data-testid={COLLAPSIBLE_CONTENT_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`).should('have.attr', 'data-scope', 'collapsible');
    });

    it('should have attribute data-part with value "content"', () => {
      cy.mount(
        <Collapsible.Root>
          <Collapsible.Content data-testid={COLLAPSIBLE_CONTENT_TESTID} />
        </Collapsible.Root>
      );
      cy.get(`[data-testid="${COLLAPSIBLE_CONTENT_TESTID}"]`).should('have.attr', 'data-part', 'content');
    });
  });
});
