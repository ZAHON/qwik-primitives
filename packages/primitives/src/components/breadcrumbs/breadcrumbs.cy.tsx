import { Primitive } from '@/components';
import * as Breadcrumbs from '.';

const BREADCRUMBS_ROOT_TESTID = 'BREADCRUMBS_ROOT_TESTID';
const BREADCRUMBS_ROOT_TEXT = 'BREADCRUMBS_ROOT_TEXT';

const BREADCRUMBS_LIST_TESTID = 'BREADCRUMBS_LIST_TESTID';
const BREADCRUMBS_LIST_TEXT = 'BREADCRUMBS_LIST_TEXT';

const BREADCRUMBS_ITEM_TESTID = 'BREADCRUMBS_ITEM_TESTID';
const BREADCRUMBS_ITEM_TEXT = 'BREADCRUMBS_ITEM_TEXT';

const BREADCRUMBS_LINK_TESTID = 'BREADCRUMBS_LINK_TESTID';
const BREADCRUMBS_LINK_TEXT = 'BREADCRUMBS_LINK_TEXT';

const BREADCRUMBS_PAGE_TESTID = 'BREADCRUMBS_PAGE_TESTID';
const BREADCRUMBS_PAGE_TEXT = 'BREADCRUMBS_PAGE_TEXT';

const BREADCRUMBS_SEPARATOR_TESTID = 'BREADCRUMBS_SEPARATOR_TESTID';
const BREADCRUMBS_SEPARATOR_TEXT = 'BREADCRUMBS_SEPARATOR_TEXT';

describe('Breadcrumbs', () => {
  describe('Root', () => {
    it('should be <nav> element', () => {
      cy.mount(<Breadcrumbs.Root data-testid={BREADCRUMBS_ROOT_TESTID}>{BREADCRUMBS_ROOT_TEXT}</Breadcrumbs.Root>);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.prop', 'tagName', 'NAV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Breadcrumbs.Root as={Primitive.div} data-testid={BREADCRUMBS_ROOT_TESTID}>
          {BREADCRUMBS_ROOT_TEXT}
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'NAV');
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should have attribute aria-label with value "Breadcrumbs"', () => {
      cy.mount(<Breadcrumbs.Root data-testid={BREADCRUMBS_ROOT_TESTID}>{BREADCRUMBS_ROOT_TEXT}</Breadcrumbs.Root>);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.attr', 'aria-label', 'Breadcrumbs');
    });

    it('should have attribute aria-label with value provided via aria-label prop', () => {
      const ariaLabel = 'Test';

      cy.mount(
        <Breadcrumbs.Root aria-label={ariaLabel} data-testid={BREADCRUMBS_ROOT_TESTID}>
          {BREADCRUMBS_ROOT_TEXT}
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.attr', 'aria-label', ariaLabel);
    });

    it('should have not attribute data-disabled when not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false} data-testid={BREADCRUMBS_ROOT_TESTID}>
          {BREADCRUMBS_ROOT_TEXT}
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled when disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true} data-testid={BREADCRUMBS_ROOT_TESTID}>
          {BREADCRUMBS_ROOT_TEXT}
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have attribute data-qwik-primitives-breadcrumbs-root with empty value', () => {
      cy.mount(<Breadcrumbs.Root data-testid={BREADCRUMBS_ROOT_TESTID}>{BREADCRUMBS_ROOT_TEXT}</Breadcrumbs.Root>);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-breadcrumbs-root',
        ''
      );
    });
  });

  describe('List', () => {
    it('should be <ol> element', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List data-testid={BREADCRUMBS_LIST_TESTID}>{BREADCRUMBS_LIST_TEXT}</Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.prop', 'tagName', 'OL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List as={Primitive.div} data-testid={BREADCRUMBS_LIST_TESTID}>
            {BREADCRUMBS_LIST_TEXT}
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'OL');
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should have not attribute aria-disabled when <Breadcrumbs.Root> not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List data-testid={BREADCRUMBS_LIST_TESTID}>{BREADCRUMBS_LIST_TEXT}</Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute aria-disabled when <Breadcrumbs.Root> disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List data-testid={BREADCRUMBS_LIST_TESTID}>{BREADCRUMBS_LIST_TEXT}</Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have attribute data-qwik-primitives-breadcrumbs-list with empty value', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List data-testid={BREADCRUMBS_LIST_TESTID}>{BREADCRUMBS_LIST_TEXT}</Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-breadcrumbs-list',
        ''
      );
    });
  });

  describe('Item', () => {
    it('should be <li> element', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item data-testid={BREADCRUMBS_ITEM_TESTID}>{BREADCRUMBS_ITEM_TEXT}</Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.prop', 'tagName', 'LI');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item as={Primitive.div} data-testid={BREADCRUMBS_ITEM_TESTID}>
              {BREADCRUMBS_ITEM_TEXT}
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'LI');
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should have not attribute aria-disabled when <Breadcrumbs.Root> not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item data-testid={BREADCRUMBS_ITEM_TESTID}>{BREADCRUMBS_ITEM_TEXT}</Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute aria-disabled when <Breadcrumbs.Root> disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item data-testid={BREADCRUMBS_ITEM_TESTID}>{BREADCRUMBS_ITEM_TEXT}</Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have attribute data-qwik-primitives-breadcrumbs-item with empty value', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item data-testid={BREADCRUMBS_ITEM_TESTID}>{BREADCRUMBS_ITEM_TEXT}</Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-breadcrumbs-item',
        ''
      );
    });
  });

  describe('Link', () => {
    it('should be <a> element', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link data-testid={BREADCRUMBS_LINK_TESTID}>{BREADCRUMBS_LINK_TEXT}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.prop', 'tagName', 'A');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link as={Primitive.div} data-testid={BREADCRUMBS_LINK_TESTID}>
                {BREADCRUMBS_LINK_TEXT}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'A');
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should have not attribute aria-disabled when not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={false} data-testid={BREADCRUMBS_LINK_TESTID}>
                {BREADCRUMBS_LINK_TEXT}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'aria-disabled');
    });

    it('should have not attribute data-disabled when not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={false} data-testid={BREADCRUMBS_LINK_TESTID}>
                {BREADCRUMBS_LINK_TEXT}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute aria-disabled when disabled', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={true} data-testid={BREADCRUMBS_LINK_TESTID}>
                {BREADCRUMBS_LINK_TEXT}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'aria-disabled');
    });

    it('should have attribute data-disabled when disabled', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={true} data-testid={BREADCRUMBS_LINK_TESTID}>
                {BREADCRUMBS_LINK_TEXT}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have not attribute aria-disabled when <Breadcrumbs.Root> not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link data-testid={BREADCRUMBS_LINK_TESTID}>{BREADCRUMBS_LINK_TEXT}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'aria-disabled');
    });

    it('should have not attribute data-disabled when <Breadcrumbs.Root> not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link data-testid={BREADCRUMBS_LINK_TESTID}>{BREADCRUMBS_LINK_TEXT}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute aria-disabled when <Breadcrumbs.Root> disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link data-testid={BREADCRUMBS_LINK_TESTID}>{BREADCRUMBS_LINK_TEXT}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'aria-disabled');
    });

    it('should have attribute data-disabled when <Breadcrumbs.Root> disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link data-testid={BREADCRUMBS_LINK_TESTID}>{BREADCRUMBS_LINK_TEXT}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have not attribute aria-disabled when not disabled and <Breadcrumbs.Root> disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={false} data-testid={BREADCRUMBS_LINK_TESTID}>
                {BREADCRUMBS_LINK_TEXT}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'aria-disabled');
    });

    it('should have not attribute data-disabled when not disabled and <Breadcrumbs.Root> disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={false} data-testid={BREADCRUMBS_LINK_TESTID}>
                {BREADCRUMBS_LINK_TEXT}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute aria-disabled when disabled and <Breadcrumbs.Root> not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={true} data-testid={BREADCRUMBS_LINK_TESTID}>
                {BREADCRUMBS_LINK_TEXT}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'aria-disabled');
    });

    it('should have attribute data-disabled when disabled and <Breadcrumbs.Root> not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={true} data-testid={BREADCRUMBS_LINK_TESTID}>
                {BREADCRUMBS_LINK_TEXT}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have attribute data-qwik-primitives-breadcrumbs-link with empty value', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link data-testid={BREADCRUMBS_LINK_TESTID}>{BREADCRUMBS_LINK_TEXT}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-breadcrumbs-link',
        ''
      );
    });
  });

  describe('Page', () => {
    it('should be <span> element', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID}>{BREADCRUMBS_PAGE_TEXT}</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.prop', 'tagName', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page as={Primitive.div} data-testid={BREADCRUMBS_PAGE_TESTID}>
                {BREADCRUMBS_PAGE_TEXT}
              </Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should have attribute role with value "link"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID}>{BREADCRUMBS_PAGE_TEXT}</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.attr', 'role', 'link');
    });

    it('should have attribute aria-current with value "page"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID}>{BREADCRUMBS_PAGE_TEXT}</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.attr', 'aria-current', 'page');
    });

    it('should have attribute aria-disabled with value "true"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID}>{BREADCRUMBS_PAGE_TEXT}</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.attr', 'aria-disabled', 'true');
    });

    it('should have not attribute aria-disabled when <Breadcrumbs.Root> not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID}>{BREADCRUMBS_PAGE_TEXT}</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute aria-disabled when <Breadcrumbs.Root> disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID}>{BREADCRUMBS_PAGE_TEXT}</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have attribute data-qwik-primitives-breadcrumbs-page with empty value', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID}>{BREADCRUMBS_PAGE_TEXT}</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-breadcrumbs-page',
        ''
      );
    });
  });

  describe('Separator', () => {
    it('should be <span> element', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator data-testid={BREADCRUMBS_SEPARATOR_TESTID}>
                {BREADCRUMBS_SEPARATOR_TEXT}
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.prop', 'tagName', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator as={Primitive.div} data-testid={BREADCRUMBS_SEPARATOR_TESTID}>
                {BREADCRUMBS_SEPARATOR_TEXT}
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should have attribute aria-hidden with value "true"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator data-testid={BREADCRUMBS_SEPARATOR_TESTID}>
                {BREADCRUMBS_SEPARATOR_TEXT}
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.document().then((document) => {
        const element = document.querySelector(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`);
        const isHidden = element?.getAttribute('aria-hidden');
        expect(isHidden).to.eq('true');
      });
    });

    it('should have not attribute aria-disabled when <Breadcrumbs.Root> not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator data-testid={BREADCRUMBS_SEPARATOR_TESTID}>
                {BREADCRUMBS_SEPARATOR_TEXT}
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute aria-disabled when <Breadcrumbs.Root> disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator data-testid={BREADCRUMBS_SEPARATOR_TESTID}>
                {BREADCRUMBS_SEPARATOR_TEXT}
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.attr', 'data-disabled');
    });

    it('should have attribute data-qwik-primitives-breadcrumbs-separator with empty value', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator data-testid={BREADCRUMBS_SEPARATOR_TESTID}>
                {BREADCRUMBS_SEPARATOR_TEXT}
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-breadcrumbs-separator',
        ''
      );
    });
  });
});
