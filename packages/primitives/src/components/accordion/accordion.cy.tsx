import { Primitive } from '@/components';
import * as Accordion from '.';

const ACCORDION_ROOT_TESTID = 'ACCORDION_ROOT_TESTID';
const ACCORDION_ITEM_TESTID = 'ACCORDION_ITEM_TESTID';
const ACCORDION_ITEM_HEADER_TESTID = 'ACCORDION_ITEM_HEADER_TESTID';
const ACCORDION_ITEM_TRIGGER_TESTID = 'ACCORDION_ITEM_TRIGGER_TESTID';
const ACCORDION_ITEM_INDICATOR_TESTID = 'ACCORDION_ITEM_INDICATOR_TESTID';
const ACCORDION_ITEM_PANEL_TESTID = 'ACCORDION_ITEM_PANEL_TESTID';
const ACCORDION_ITEM_CONTENT_TESTID = 'ACCORDION_ITEM_CONTENT_TESTID';

describe('Accordion', () => {
  describe('Root', () => {
    describe('type single', () => {
      it('should be <div> element', () => {
        cy.mount(<Accordion.Root type="single" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
      });

      it('should be element provided via as prop', () => {
        cy.mount(<Accordion.Root as={Primitive.span} type="single" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
      });

      it('should contain passed children', () => {
        const ACCORDION_ROOT_TEXT = 'ACCORDION_ROOT_TEXT';

        cy.mount(
          <Accordion.Root type="single" data-testid={ACCORDION_ROOT_TESTID}>
            {ACCORDION_ROOT_TEXT}
          </Accordion.Root>
        );
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.text', ACCORDION_ROOT_TEXT);
      });

      it('should have not attribute data-disabled when is not disabled', () => {
        cy.mount(<Accordion.Root disabled={false} type="single" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled');
      });

      it('should have attribute data-disabled when is disabled', () => {
        cy.mount(<Accordion.Root disabled={true} type="single" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.attr', 'data-disabled');
      });

      it('should have attribute data-qwik-primitives-accordion-root with empty value', () => {
        cy.mount(<Accordion.Root type="single" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should(
          'have.attr',
          'data-qwik-primitives-accordion-root',
          ''
        );
      });

      it('should have attribute data-scope with value "accordion"', () => {
        cy.mount(<Accordion.Root type="single" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'accordion');
      });

      it('should have attribute data-part with value "root"', () => {
        cy.mount(<Accordion.Root type="single" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
      });

      it('should move focus to the first enabled <Accordion.ItemTrigger> when press Home and focus is on an <Accordion.ItemTrigger>', () => {
        cy.mount(
          <Accordion.Root type="single" data-testid={ACCORDION_ROOT_TESTID}>
            <Accordion.Item disabled={true} value="item-1">
              <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-2">
              <Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-3">
              <Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
            </Accordion.Item>
          </Accordion.Root>
        );
        cy.get('button').contains('Item 3').focus();
        cy.get('button').contains('Item 3').should('be.focused').realPress('Home');
        cy.get('button').contains('Item 1').should('be.not.focused');
        cy.get('button').contains('Item 2').should('be.focused');
      });

      it('should move focus to the last enabled <Accordion.ItemTrigger> when press End and focus is on an <Accordion.ItemTrigger>', () => {
        cy.mount(
          <Accordion.Root type="single" data-testid={ACCORDION_ROOT_TESTID}>
            <Accordion.Item disabled={false} value="item-1">
              <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-2">
              <Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={true} value="item-3">
              <Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
            </Accordion.Item>
          </Accordion.Root>
        );
        cy.get('button').contains('Item 1').focus();
        cy.get('button').contains('Item 1').should('be.focused').realPress('End');
        cy.get('button').contains('Item 3').should('be.not.focused');
        cy.get('button').contains('Item 2').should('be.focused');
      });

      it('should move focus to the next enabled <Accordion.ItemTrigger> when press ArrowDown and focus is on an <Accordion.ItemTrigger>', () => {
        cy.mount(
          <Accordion.Root type="single" data-testid={ACCORDION_ROOT_TESTID}>
            <Accordion.Item disabled={false} value="item-1">
              <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={true} value="item-2">
              <Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-3">
              <Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-4">
              <Accordion.ItemTrigger>Item 4</Accordion.ItemTrigger>
            </Accordion.Item>
          </Accordion.Root>
        );
        cy.get('button').contains('Item 1').focus();
        cy.get('button').contains('Item 1').should('be.focused').realPress('ArrowDown');
        cy.get('button').contains('Item 2').should('be.not.focused');
        cy.get('button').contains('Item 3').should('be.focused').realPress('ArrowDown');
        cy.get('button').contains('Item 4').should('be.focused').realPress('ArrowDown');
        cy.get('button').contains('Item 1').should('be.focused');
      });

      it('should move focus to the previous enabled <Accordion.ItemTrigger> when press ArrowUp and focus is on an <Accordion.ItemTrigger>', () => {
        cy.mount(
          <Accordion.Root type="single" data-testid={ACCORDION_ROOT_TESTID}>
            <Accordion.Item disabled={false} value="item-1">
              <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={true} value="item-2">
              <Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-3">
              <Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-4">
              <Accordion.ItemTrigger>Item 4</Accordion.ItemTrigger>
            </Accordion.Item>
          </Accordion.Root>
        );
        cy.get('button').contains('Item 4').focus();
        cy.get('button').contains('Item 4').should('be.focused').realPress('ArrowUp');
        cy.get('button').contains('Item 3').should('be.focused').realPress('ArrowUp');
        cy.get('button').contains('Item 2').should('be.not.focused');
        cy.get('button').contains('Item 1').should('be.focused').realPress('ArrowUp');
        cy.get('button').contains('Item 4').should('be.focused');
      });
    });

    describe('type multiple', () => {
      it('should be <div> element', () => {
        cy.mount(<Accordion.Root type="multiple" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
      });

      it('should be element provided via as prop', () => {
        cy.mount(<Accordion.Root as={Primitive.span} type="multiple" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
      });

      it('should contain passed children', () => {
        const ACCORDION_ROOT_TEXT = 'ACCORDION_ROOT_TEXT';

        cy.mount(
          <Accordion.Root type="multiple" data-testid={ACCORDION_ROOT_TESTID}>
            {ACCORDION_ROOT_TEXT}
          </Accordion.Root>
        );
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.text', ACCORDION_ROOT_TEXT);
      });

      it('should have not attribute data-disabled when is not disabled', () => {
        cy.mount(<Accordion.Root disabled={false} type="multiple" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled');
      });

      it('should have attribute data-disabled when is disabled', () => {
        cy.mount(<Accordion.Root disabled={true} type="multiple" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.attr', 'data-disabled');
      });

      it('should have attribute data-qwik-primitives-accordion-root with empty value', () => {
        cy.mount(<Accordion.Root type="multiple" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should(
          'have.attr',
          'data-qwik-primitives-accordion-root',
          ''
        );
      });

      it('should have attribute data-scope with value "accordion"', () => {
        cy.mount(<Accordion.Root type="multiple" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'accordion');
      });

      it('should have attribute data-part with value "root"', () => {
        cy.mount(<Accordion.Root type="multiple" data-testid={ACCORDION_ROOT_TESTID} />);
        cy.get(`[data-testid="${ACCORDION_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
      });

      it('should move focus to the first enabled <Accordion.ItemTrigger> when press Home and focus is on an <Accordion.ItemTrigger>', () => {
        cy.mount(
          <Accordion.Root type="multiple" data-testid={ACCORDION_ROOT_TESTID}>
            <Accordion.Item disabled={true} value="item-1">
              <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-2">
              <Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-3">
              <Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
            </Accordion.Item>
          </Accordion.Root>
        );
        cy.get('button').contains('Item 3').focus();
        cy.get('button').contains('Item 3').should('be.focused').realPress('Home');
        cy.get('button').contains('Item 1').should('be.not.focused');
        cy.get('button').contains('Item 2').should('be.focused');
      });

      it('should move focus to the last enabled <Accordion.ItemTrigger> when press End and focus is on an <Accordion.ItemTrigger>', () => {
        cy.mount(
          <Accordion.Root type="multiple" data-testid={ACCORDION_ROOT_TESTID}>
            <Accordion.Item disabled={false} value="item-1">
              <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-2">
              <Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={true} value="item-3">
              <Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
            </Accordion.Item>
          </Accordion.Root>
        );
        cy.get('button').contains('Item 1').focus();
        cy.get('button').contains('Item 1').should('be.focused').realPress('End');
        cy.get('button').contains('Item 3').should('be.not.focused');
        cy.get('button').contains('Item 2').should('be.focused');
      });

      it('should move focus to the next enabled <Accordion.ItemTrigger> when press ArrowDown and focus is on an <Accordion.ItemTrigger>', () => {
        cy.mount(
          <Accordion.Root type="multiple" data-testid={ACCORDION_ROOT_TESTID}>
            <Accordion.Item disabled={false} value="item-1">
              <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={true} value="item-2">
              <Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-3">
              <Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-4">
              <Accordion.ItemTrigger>Item 4</Accordion.ItemTrigger>
            </Accordion.Item>
          </Accordion.Root>
        );
        cy.get('button').contains('Item 1').focus();
        cy.get('button').contains('Item 1').should('be.focused').realPress('ArrowDown');
        cy.get('button').contains('Item 2').should('be.not.focused');
        cy.get('button').contains('Item 3').should('be.focused').realPress('ArrowDown');
        cy.get('button').contains('Item 4').should('be.focused').realPress('ArrowDown');
        cy.get('button').contains('Item 1').should('be.focused');
      });

      it('should move focus to the previous enabled <Accordion.ItemTrigger> when press ArrowUp and focus is on an <Accordion.ItemTrigger>', () => {
        cy.mount(
          <Accordion.Root type="multiple" data-testid={ACCORDION_ROOT_TESTID}>
            <Accordion.Item disabled={false} value="item-1">
              <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={true} value="item-2">
              <Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-3">
              <Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
            </Accordion.Item>
            <Accordion.Item disabled={false} value="item-4">
              <Accordion.ItemTrigger>Item 4</Accordion.ItemTrigger>
            </Accordion.Item>
          </Accordion.Root>
        );
        cy.get('button').contains('Item 4').focus();
        cy.get('button').contains('Item 4').should('be.focused').realPress('ArrowUp');
        cy.get('button').contains('Item 3').should('be.focused').realPress('ArrowUp');
        cy.get('button').contains('Item 2').should('be.not.focused');
        cy.get('button').contains('Item 1').should('be.focused').realPress('ArrowUp');
        cy.get('button').contains('Item 4').should('be.focused');
      });
    });
  });

  describe('Item', () => {
    it('should be <div> element', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item as={Primitive.span} value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const ACCORDION_ITEM_TEXT = 'ACCORDION_ITEM_TEXT';

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID}>
            {ACCORDION_ITEM_TEXT}
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.text', ACCORDION_ITEM_TEXT);
    });

    it('should have attribute data-state with value "closed" when is closed', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have attribute data-state with value "open" when is open', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should have not attribute data-disabled when is not disabled', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item disabled={false} value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when is disabled', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item disabled={true} value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-disabled when <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} type="single">
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} type="single">
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-disabled when is not disabled and <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} type="single">
          <Accordion.Item disabled={false} value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when is disabled and <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} type="single">
          <Accordion.Item disabled={true} value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-qwik-primitives-accordion-item with empty value', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-qwik-primitives-accordion-item', '');
    });

    it('should have attribute data-scope with value "accordion"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-scope', 'accordion');
    });

    it('should have attribute data-part with value "item"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID} />
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-part', 'item');
    });
  });

  describe('ItemHeader', () => {
    it('should be <h3> element', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H3');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader as={Primitive.span} data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'H3');
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be <h1> element when level="1"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader level="1" data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H1');
    });

    it('should be <h2> element when level="2"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader level="2" data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H2');
    });

    it('should be <h3> element when level="3"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader level="3" data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H3');
    });

    it('should be <h4> element when level="4"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader level="4" data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H4');
    });

    it('should be <h5> element when level="5"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader level="5" data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H5');
    });

    it('should be <h6> element when level="6"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader level="6" data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H6');
    });

    it('should contain passed children', () => {
      const ACCORDION_ITEM_HEADER_TEXT = 'ACCORDION_ITEM_HEADER_TEXT';

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID}>
              {ACCORDION_ITEM_HEADER_TEXT}
            </Accordion.ItemHeader>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.text', ACCORDION_ITEM_HEADER_TEXT);
    });

    it('should have attribute data-state with value "closed" when <Accordion.Item> is closed', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have attribute data-state with value "open" when <Accordion.Item> is open', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should have not attribute data-disabled when <Accordion.Item> is not disabled', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item disabled={false} value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Item> is disabled', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item disabled={true} value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-disabled when <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-disabled when <Accordion.Item> is not disabled and <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} type="single">
          <Accordion.Item disabled={false} value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Item> is disabled and <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} type="single">
          <Accordion.Item disabled={true} value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-lavel with value "1" when level="1"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader level="1" data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-level', '1');
    });

    it('should have attribute data-lavel with value "2" when level="2"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader level="2" data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-level', '2');
    });

    it('should have attribute data-lavel with value "3" when level="3"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader level="3" data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-level', '3');
    });

    it('should have attribute data-lavel with value "4" when level="4"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader level="4" data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-level', '4');
    });

    it('should have attribute data-lavel with value "5" when level="5"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader level="5" data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-level', '5');
    });

    it('should have attribute data-lavel with value "6" when level="6"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader level="6" data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-level', '6');
    });

    it('should have attribute data-qwik-primitives-accordion-item-header with empty value', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-accordion-item-header',
        ''
      );
    });

    it('should have attribute data-scope with value "accordion"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-scope', 'accordion');
    });

    it('should have attribute data-part with value "item-header"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemHeader data-testid={ACCORDION_ITEM_HEADER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_HEADER_TESTID}"]`).should('have.attr', 'data-part', 'item-header');
    });
  });

  describe('ItemTrigger', () => {
    it('should be <button> element', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger as={Primitive.div} data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`)
        .should('have.prop', 'tagName')
        .should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const ACCORDION_ITEM_TRIGGER_TEXT = 'ACCORDION_ITEM_TRIGGER_TEXT';

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID}>
              {ACCORDION_ITEM_TRIGGER_TEXT}
            </Accordion.ItemTrigger>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.text', ACCORDION_ITEM_TRIGGER_TEXT);
    });

    it('should have attribute type with value "button"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.attr', 'type', 'button');
    });

    it('should have attribute id associated with <Accordion.ItemPanel> aria-labelledby attribute', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'aria-labelledby', id)
        );
    });

    it('should have attribute id provided via id prop associated with <Accordion.ItemPanel> aria-labelledby attribute', () => {
      const ACCORDION_ITEM_TRIGGER_ID = 'ACCORDION_ITEM_TRIGGER_ID';

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger id={ACCORDION_ITEM_TRIGGER_ID} data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'aria-labelledby', id)
        );
    });

    it('should be not disabled when <Accordion.Item> is not disabled', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item disabled={false} value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when <Accordion.Item> is disabled', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item disabled={true} value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('be.disabled');
    });

    it('should be not disabled when <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('be.disabled');
    });

    it('should be not disabled when <Accordion.Item> is not disabled and <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} type="single">
          <Accordion.Item disabled={false} value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('be.not.disabled');
    });

    it('should be not disabled when <Accordion.Item> is disabled and <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} type="single">
          <Accordion.Item disabled={true} value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute aria-controls when <Accordion.Item> not contains <Accordion.ItemPanel>', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-controls');
    });

    it('should have attribute aria-controls associated with <Accordion.ItemPanel> id attribute when <Accordion.Item> contains <Accordion.ItemPanel>', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
            <Accordion.ItemPanel id={undefined} data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`)
        .invoke('attr', 'aria-controls')
        .then((ariaControls) =>
          cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'id', ariaControls)
        );
    });

    it('should have attribute aria-controls associated with <Accordion.ItemPanel> id attribute provided via id prop when <Accordion.Item> contains <Accordion.ItemPanel>', () => {
      const ACCORDION_ITEM_PANEL_ID = 'ACCORDION_ITEM_PANEL_ID';

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
            <Accordion.ItemPanel id={ACCORDION_ITEM_PANEL_ID} data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`)
        .invoke('attr', 'aria-controls')
        .then((ariaControls) =>
          cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'id', ariaControls)
        );
    });

    it('should have not attribute aria-expanded when <Accordion.Item> not contains <Accordion.ItemPanel>', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.not.attr', 'aria-expanded');
    });

    it('should have attribute aria-expanded with value "false" when <Accordion.Item> is closed and <Accordion.Item> contains <Accordion.ItemPanel>', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
            <Accordion.ItemPanel />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'false');
    });

    it('should have attribute aria-expanded with value "true" when <Accordion.Item> is open and <Accordion.Item> contains <Accordion.ItemPanel>', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
            <Accordion.ItemPanel />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.attr', 'aria-expanded', 'true');
    });

    it('should have attribute data-state with value "closed" when <Accordion.Item> is closed', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have attribute data-state with value "open" when <Accordion.Item> is open', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should have not attribute data-disabled when <Accordion.Item> is not disabled', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item disabled={false} value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Item> is disabled', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item disabled={true} value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-disabled when <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-disabled when <Accordion.Item> is not disabled and <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} type="single">
          <Accordion.Item disabled={false} value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Item> is disabled and <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} type="single">
          <Accordion.Item disabled={true} value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-qwik-primitives-accordion-item-trigger with empty value', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-accordion-item-trigger',
        ''
      );
    });

    it('should have attribute data-scope with value "accordion"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.attr', 'data-scope', 'accordion');
    });

    it('should have attribute data-part with value "item-trigger"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.attr', 'data-part', 'item-trigger');
    });

    it('should open <Accordion.Item> when this one is closed after the user clicks the trigger when <Accordion.Root> has type "single"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID}>
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should not close <Accordion.Item> when this one is open after the user clicks the trigger when <Accordion.Root> has type "single" and collapsible={false}', () => {
      cy.mount(
        <Accordion.Root type="single" collapsible={false}>
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID}>
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'open');
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should close <Accordion.Item> when this one is open after the user clicks the trigger when <Accordion.Root> has type "single" and collapsible={false}', () => {
      cy.mount(
        <Accordion.Root type="single" collapsible={true}>
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID}>
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'open');
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should open <Accordion.Item> when this one is closed after the user clicks the trigger when <Accordion.Root> has type "multiple"', () => {
      cy.mount(
        <Accordion.Root type="multiple">
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID}>
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should close <Accordion.Item> when this one is open after the user clicks the trigger when <Accordion.Root> has type "single" and collapsible={false}', () => {
      cy.mount(
        <Accordion.Root type="multiple">
          <Accordion.Item value="test" data-testid={ACCORDION_ITEM_TESTID}>
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'closed');
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'open');
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).realClick();
      cy.get(`[data-testid="${ACCORDION_ITEM_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });
  });

  describe('ItemIndicator', () => {
    it('should be <span> element', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemIndicator as={Primitive.div} data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`)
        .should('have.prop', 'tagName')
        .should('not.eq', 'SPAN');
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const ACCORDION_ITEM_INDICATOR_TEXT = 'ACCORDION_ITEM_INDICATOR_TEXT';

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID}>
              {ACCORDION_ITEM_INDICATOR_TEXT}
            </Accordion.ItemIndicator>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.text', ACCORDION_ITEM_INDICATOR_TEXT);
    });

    it('should have attribute data-state with value "closed" when <Accordion.Item> is closed', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have attribute data-state with value "open" when <Accordion.Item> is open', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should have not attribute data-disabled when <Accordion.Item> is not disabled', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item disabled={false} value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Item> is disabled', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item disabled={true} value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-disabled when <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-disabled when <Accordion.Item> is not disabled and <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} defaultValue="test" type="single">
          <Accordion.Item disabled={false} value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Item> is disabled and <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} defaultValue="test" type="single">
          <Accordion.Item disabled={true} value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have inline style pointer-events with value "none"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'pointer-events', 'none');
    });

    it('should have inline style provided via style prop', () => {
      const ACCORDION_ITEM_INDICATOR_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemIndicator
              style={{ color: ACCORDION_ITEM_INDICATOR_COLOR }}
              data-testid={ACCORDION_ITEM_INDICATOR_TESTID}
            />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${ACCORDION_ITEM_INDICATOR_COLOR}`);
    });

    it('should have attribute data-qwik-primitives-accordion-item-indicator with empty value', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-accordion-item-indicator',
        ''
      );
    });

    it('should have attribute data-scope with value "accordion"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.attr', 'data-scope', 'accordion');
    });

    it('should have attribute data-part with value "item-indicator"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemIndicator data-testid={ACCORDION_ITEM_INDICATOR_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_INDICATOR_TESTID}"]`).should('have.attr', 'data-part', 'item-indicator');
    });
  });

  describe('ItemPanel', () => {
    it('should be <div> element', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel as={Primitive.span} data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const ACCORDION_ITEM_PANEL_TEXT = 'ACCORDION_ITEM_PANEL_TEXT';

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID}>
              {ACCORDION_ITEM_PANEL_TEXT}
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.text', ACCORDION_ITEM_PANEL_TEXT);
    });

    it('should have attribute role with value "region"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'role', 'region');
    });

    it('should have attribute id associated with <Accordion.ItemTrigger> aria-controls attribute', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
            <Accordion.ItemPanel id={undefined} data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.attr', 'aria-controls', id)
        );
    });

    it('should have attribute id provided via id prop associated with <Accordion.ItemTrigger> aria-controls attribute', () => {
      const ACCORDION_ITEM_PANEL_ID = 'ACCORDION_ITEM_PANEL_ID';

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
            <Accordion.ItemPanel id={ACCORDION_ITEM_PANEL_ID} data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).should('have.attr', 'aria-controls', id)
        );
    });

    it('should have attribute hidden when <Accordion.Item> is closed', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'hidden');
    });

    it('should have not attribute hidden when <Accordion.Item> is open', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.not.attr', 'hidden');
    });

    it('should have attribute aria-labelledby associated with <Accordion.ItemTrigger> id attribute', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger id={undefined} data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'aria-labelledby', id)
        );
    });

    it('should have attribute aria-labelledby associated with <Accordion.ItemTrigger> id attribute provided via id prop', () => {
      const ACCORDION_ITEM_TRIGGER_ID = 'ACCORDION_ITEM_TRIGGER_ID';

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger id={ACCORDION_ITEM_TRIGGER_ID} data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'aria-labelledby', id)
        );
    });

    it('should have attribute data-state with value "closed" when is closed', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have attribute data-state with value "open" when is open', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should have not attribute data-disabled when <Accordion.Item> is not disabled', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item disabled={false} value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Item> is disabled', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item disabled={true} value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-disabled when <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-disabled when <Accordion.Item> is not disabled and <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} type="single">
          <Accordion.Item disabled={false} value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Item> is disabled and <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} type="single">
          <Accordion.Item disabled={true} value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have inline style display with value "grid"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'display', 'grid');
    });

    it('should have inline style grid-template-rows with value "0fr" when <Accordion.Item> is closed', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'grid-template-rows', '0fr');
    });

    it('should have inline style grid-template-rows with value "1fr" when <Accordion.Item> is open', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'grid-template-rows', '1fr');
    });

    it('should have not inline style animation-duration when <Accordion.Item> is initially closed', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('not.contain', 'animation-duration');
    });

    it('should have inline style animation-duration with value "0s" when <Accordion.Item> is initially open', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'animation-duration: 0s');
    });

    it('should have inline style provided via style prop', () => {
      const ACCORDION_ITEM_PANEL_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel
              style={{ color: ACCORDION_ITEM_PANEL_COLOR }}
              data-testid={ACCORDION_ITEM_PANEL_TESTID}
            />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${ACCORDION_ITEM_PANEL_COLOR}`);
    });

    it('should have attribute data-qwik-primitives-accordion-item-panel with empty value', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-accordion-item-panel',
        ''
      );
    });

    it('should have attribute data-scope with value "accordion"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'data-scope', 'accordion');
    });

    it('should have attribute data-part with value "item-panel"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel data-testid={ACCORDION_ITEM_PANEL_TESTID} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_PANEL_TESTID}"]`).should('have.attr', 'data-part', 'item-panel');
    });

    it('should call onOpen$ event handler when the panel is fully open', () => {
      const ON_OPEN_TEXT = 'ON_OPEN_TEXT';

      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
            <Accordion.ItemPanel onOpen$={() => console.log(ON_OPEN_TEXT)} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).click();
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
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemTrigger data-testid={ACCORDION_ITEM_TRIGGER_TESTID} />
            <Accordion.ItemPanel onClose$={() => console.log(ON_CLOSE_TEXT)} />
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).click();
      cy.get(`[data-testid="${ACCORDION_ITEM_TRIGGER_TESTID}"]`).click();
      cy.get('@log').should('be.calledWith', ON_CLOSE_TEXT);
      cy.get('@log').should('be.calledOnce');
    });
  });

  describe('ItemContent', () => {
    it('should be <div> element', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent as={Primitive.span} data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const ACCORDION_ITEM_CONTENT_TEXT = 'ACCORDION_ITEM_CONTENT_TEXT';

      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID}>
                {ACCORDION_ITEM_CONTENT_TEXT}
              </Accordion.ItemContent>
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.text', ACCORDION_ITEM_CONTENT_TEXT);
    });

    it('should have attribute data-state with value "closed" when <Accordion.Item> is closed', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'closed');
    });

    it('should have attribute data-state with value "open" when <Accordion.Item> is open', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.attr', 'data-state', 'open');
    });

    it('should have not attribute data-disabled when <Accordion.Item> is not disabled', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item disabled={false} value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Item> is disabled', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item disabled={true} value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-disabled when <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-disabled when <Accordion.Item> is not disabled and <Accordion.Root> is disabled', () => {
      cy.mount(
        <Accordion.Root disabled={true} type="single">
          <Accordion.Item disabled={false} value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Accordion.Item> is disabled and <Accordion.Root> is not disabled', () => {
      cy.mount(
        <Accordion.Root disabled={false} type="single">
          <Accordion.Item disabled={true} value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have inline style overflow with value "hidden" when <Accordion.Item> is closed', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'overflow', 'hidden');
    });

    it('should have not inline style overflow when <Accordion.Item> is open', () => {
      cy.mount(
        <Accordion.Root defaultValue="test" type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('not.contain', 'overflow');
    });

    it('should have inline style provided via style prop', () => {
      const ACCORDION_ITEM_CONTENT_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent
                style={{ color: ACCORDION_ITEM_CONTENT_COLOR }}
                data-testid={ACCORDION_ITEM_CONTENT_TESTID}
              />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${ACCORDION_ITEM_CONTENT_COLOR}`);
    });

    it('should have attribute data-qwik-primitives-accordion-item-content with empty value', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-accordion-item-content',
        ''
      );
    });

    it('should have attribute data-scope with value "accordion"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.attr', 'data-scope', 'accordion');
    });

    it('should have attribute data-part with value "item-content"', () => {
      cy.mount(
        <Accordion.Root type="single">
          <Accordion.Item value="test">
            <Accordion.ItemPanel>
              <Accordion.ItemContent data-testid={ACCORDION_ITEM_CONTENT_TESTID} />
            </Accordion.ItemPanel>
          </Accordion.Item>
        </Accordion.Root>
      );
      cy.get(`[data-testid="${ACCORDION_ITEM_CONTENT_TESTID}"]`).should('have.attr', 'data-part', 'item-content');
    });
  });
});
