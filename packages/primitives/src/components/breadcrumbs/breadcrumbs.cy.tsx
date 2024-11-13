import { Primitive } from '@/components';
import * as Breadcrumbs from '.';

const BREADCRUMBS_ROOT_TESTID = 'BREADCRUMBS_ROOT_TESTID';
const BREADCRUMBS_LIST_TESTID = 'BREADCRUMBS_LIST_TESTID';
const BREADCRUMBS_ITEM_TESTID = 'BREADCRUMBS_ITEM_TESTID';
const BREADCRUMBS_LINK_TESTID = 'BREADCRUMBS_LINK_TESTID';
const BREADCRUMBS_PAGE_TESTID = 'BREADCRUMBS_PAGE_TESTID';
const BREADCRUMBS_SEPARATOR_TESTID = 'BREADCRUMBS_SEPARATOR_TESTID';

const BREADCRUMBS_LINK_URL = 'https://github.com/ZAHON/qwik-primitives';

describe('Breadcrumbs', () => {
  describe('Root', () => {
    it('should be <nav> element', () => {
      cy.mount(<Breadcrumbs.Root data-testid={BREADCRUMBS_ROOT_TESTID} />);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.prop', 'tagName', 'NAV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Breadcrumbs.Root as={Primitive.div} data-testid={BREADCRUMBS_ROOT_TESTID} />);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'NAV');
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const BREADCRUMBS_ROOT_TEXT = 'BREADCRUMBS_ROOT_TEXT';

      cy.mount(<Breadcrumbs.Root data-testid={BREADCRUMBS_ROOT_TESTID}>{BREADCRUMBS_ROOT_TEXT}</Breadcrumbs.Root>);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.text', BREADCRUMBS_ROOT_TEXT);
    });

    it('should have attribute aria-label with value "Breadcrumbs"', () => {
      cy.mount(<Breadcrumbs.Root data-testid={BREADCRUMBS_ROOT_TESTID} />);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.attr', 'aria-label', 'Breadcrumbs');
    });

    it('should have attribute aria-label with value provided via aria-label prop', () => {
      const BREADCRUMBS_ROOT_ARIA_LABEL = 'BREADCRUMBS_ROOT_ARAI_LABEL';

      cy.mount(<Breadcrumbs.Root aria-label={BREADCRUMBS_ROOT_ARIA_LABEL} data-testid={BREADCRUMBS_ROOT_TESTID} />);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should(
        'have.attr',
        'aria-label',
        BREADCRUMBS_ROOT_ARIA_LABEL
      );
    });

    it('should have not attribute data-disabled when is not disabled', () => {
      cy.mount(<Breadcrumbs.Root disabled={false} data-testid={BREADCRUMBS_ROOT_TESTID} />);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when is disabled', () => {
      cy.mount(<Breadcrumbs.Root disabled={true} data-testid={BREADCRUMBS_ROOT_TESTID} />);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-qwik-primitives-breadcrumbs-root with empty value', () => {
      cy.mount(<Breadcrumbs.Root data-testid={BREADCRUMBS_ROOT_TESTID} />);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-breadcrumbs-root',
        ''
      );
    });

    it('should have attribute data-scope with value "breadcrumbs"', () => {
      cy.mount(<Breadcrumbs.Root data-testid={BREADCRUMBS_ROOT_TESTID} />);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'breadcrumbs');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<Breadcrumbs.Root data-testid={BREADCRUMBS_ROOT_TESTID} />);
      cy.get(`[data-testid="${BREADCRUMBS_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });

  describe('List', () => {
    it('should be <ol> element', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List data-testid={BREADCRUMBS_LIST_TESTID} />
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.prop', 'tagName', 'OL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List as={Primitive.div} data-testid={BREADCRUMBS_LIST_TESTID} />
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'OL');
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const BREADCRUMBS_LIST_TEXT = 'BREADCRUMBS_LIST_TEXT';

      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List data-testid={BREADCRUMBS_LIST_TESTID}>{BREADCRUMBS_LIST_TEXT}</Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.text', BREADCRUMBS_LIST_TEXT);
    });

    it('should have not attribute data-disabled when <Breadcrumbs.Root> is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List data-testid={BREADCRUMBS_LIST_TESTID} />
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Breadcrumbs.Root> is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List data-testid={BREADCRUMBS_LIST_TESTID} />
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-qwik-primitives-breadcrumbs-list with empty value', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List data-testid={BREADCRUMBS_LIST_TESTID} />
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-breadcrumbs-list',
        ''
      );
    });

    it('should have attribute data-scope with value "breadcrumbs"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List data-testid={BREADCRUMBS_LIST_TESTID} />
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.attr', 'data-scope', 'breadcrumbs');
    });

    it('should have attribute data-part with value "list"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List data-testid={BREADCRUMBS_LIST_TESTID} />
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LIST_TESTID}"]`).should('have.attr', 'data-part', 'list');
    });
  });

  describe('Item', () => {
    it('should be <li> element', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item data-testid={BREADCRUMBS_ITEM_TESTID} />
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.prop', 'tagName', 'LI');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item as={Primitive.div} data-testid={BREADCRUMBS_ITEM_TESTID} />
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'LI');
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const BREADCRUMBS_ITEM_TEXT = 'BREADCRUMBS_ITEM_TEXT';

      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item data-testid={BREADCRUMBS_ITEM_TESTID}>{BREADCRUMBS_ITEM_TEXT}</Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.text', BREADCRUMBS_ITEM_TEXT);
    });

    it('should have not attribute data-disabled when <Breadcrumbs.Root> is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item data-testid={BREADCRUMBS_ITEM_TESTID} />
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Breadcrumbs.Root> is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item data-testid={BREADCRUMBS_ITEM_TESTID} />
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-qwik-primitives-breadcrumbs-item with empty value', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item data-testid={BREADCRUMBS_ITEM_TESTID} />
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-breadcrumbs-item',
        ''
      );
    });

    it('should have attribute data-scope with value "breadcrumbs"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item data-testid={BREADCRUMBS_ITEM_TESTID} />
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.attr', 'data-scope', 'breadcrumbs');
    });

    it('should have attribute data-part with value "item"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item data-testid={BREADCRUMBS_ITEM_TESTID} />
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_ITEM_TESTID}"]`).should('have.attr', 'data-part', 'item');
    });
  });

  describe('Link', () => {
    it('should be <a> element', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
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
              <Breadcrumbs.Link as={Primitive.div} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'A');
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const BREADCRUMBS_LINK_TEXT = 'BREADCRUMBS_LINK_TEXT';

      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID}>
                {BREADCRUMBS_LINK_TEXT}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.text', BREADCRUMBS_LINK_TEXT);
    });

    it('should have not attribute role when is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={false} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'role');
    });

    it('should have attribute href with value provided via href prop when is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={false} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'href', BREADCRUMBS_LINK_URL);
    });

    it('should have not attribute aria-disabled when is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={false} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'aria-disabled');
    });

    it('should have not attribute data-disabled when is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={false} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute role with value "link" when is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={true} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'role', 'link');
    });

    it('should have not attribute href when is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={true} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'href');
    });

    it('should have attribute aria-disabled with value "true" when is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={true} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'aria-disabled', 'true');
    });

    it('should have attribute data-disabled with empty value when is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={true} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute role when <Breadcrumbs.Root> is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'role');
    });

    it('should have attribute href with value provided via href prop when <Breadcrumbs.Root> is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'href', BREADCRUMBS_LINK_URL);
    });

    it('should have not attribute aria-disabled when <Breadcrumbs.Root> is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'aria-disabled');
    });

    it('should have not attribute data-disabled when <Breadcrumbs.Root> is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute role with value "link" when <Breadcrumbs.Root> is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'role', 'link');
    });

    it('should have not attribute href when <Breadcrumbs.Root> is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'href');
    });

    it('should have attribute aria-disabled with value "true" when <Breadcrumbs.Root> is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'aria-disabled', 'true');
    });

    it('should have attribute data-disabled with empty value when <Breadcrumbs.Root> is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute role when is not disabled and <Breadcrumbs.Root> is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={false} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'role');
    });

    it('should have attribute href with value provided via href prop when is not disabled and <Breadcrumbs.Root> is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={false} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'href', BREADCRUMBS_LINK_URL);
    });

    it('should have not attribute aria-disabled when is not disabled and <Breadcrumbs.Root> is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={false} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'aria-disabled');
    });

    it('should have not attribute data-disabled when is not disabled and <Breadcrumbs.Root> is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={false} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute role with value "link" when is disabled and <Breadcrumbs.Root> is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={true} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'role', 'link');
    });

    it('should have not attribute href when is disabled and <Breadcrumbs.Root> is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={true} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.not.attr', 'href');
    });

    it('should have attribute aria-disabled with value "true" when is disabled and <Breadcrumbs.Root> is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={true} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'aria-disabled', 'true');
    });

    it('should have attribute data-disabled with empty value when is disabled and <Breadcrumbs.Root> is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link disabled={true} href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-qwik-primitives-breadcrumbs-link with empty value', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
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

    it('should have attribute data-scope with value "breadcrumbs"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'data-scope', 'breadcrumbs');
    });

    it('should have attribute data-part with value "link"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BREADCRUMBS_LINK_URL} data-testid={BREADCRUMBS_LINK_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_LINK_TESTID}"]`).should('have.attr', 'data-part', 'link');
    });
  });

  describe('Page', () => {
    it('should be <span> element', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID} />
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
              <Breadcrumbs.Page as={Primitive.div} data-testid={BREADCRUMBS_PAGE_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const BREADCRUMBS_PAGE_TEXT = 'BREADCRUMBS_PAGE_TEXT';

      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID}>{BREADCRUMBS_PAGE_TEXT}</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.text', BREADCRUMBS_PAGE_TEXT);
    });

    it('should have attribute role with value "link"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID} />
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
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID} />
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
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.attr', 'aria-disabled', 'true');
    });

    it('should have not attribute data-disabled when <Breadcrumbs.Root> is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Breadcrumbs.Root> is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-qwik-primitives-breadcrumbs-page with empty value', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID} />
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

    it('should have attribute data-scope with value "breadcrumbs"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.attr', 'data-scope', 'breadcrumbs');
    });

    it('should have attribute data-part with value "page"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page data-testid={BREADCRUMBS_PAGE_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_PAGE_TESTID}"]`).should('have.attr', 'data-part', 'page');
    });
  });

  describe('Separator', () => {
    it('should be <span> element', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator data-testid={BREADCRUMBS_SEPARATOR_TESTID} />
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
              <Breadcrumbs.Separator as={Primitive.div} data-testid={BREADCRUMBS_SEPARATOR_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const BREADCRUMBS_SEPARATOR_TEXT = 'BREADCRUMBS_SEPARATOR_TEXT';

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
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.text', BREADCRUMBS_SEPARATOR_TEXT);
    });

    it('should have attribute aria-hidden with value "true"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator data-testid={BREADCRUMBS_SEPARATOR_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.attr', 'aria-hidden', 'true');
    });

    it('should have not attribute data-disabled when <Breadcrumbs.Root> is not disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={false}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator data-testid={BREADCRUMBS_SEPARATOR_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Breadcrumbs.Root> is disabled', () => {
      cy.mount(
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator data-testid={BREADCRUMBS_SEPARATOR_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have attribute data-qwik-primitives-breadcrumbs-separator with empty value', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator data-testid={BREADCRUMBS_SEPARATOR_TESTID} />
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

    it('should have attribute data-scope with value "breadcrumbs"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator data-testid={BREADCRUMBS_SEPARATOR_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.attr', 'data-scope', 'breadcrumbs');
    });

    it('should have attribute data-part with value "separator"', () => {
      cy.mount(
        <Breadcrumbs.Root>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Separator data-testid={BREADCRUMBS_SEPARATOR_TESTID} />
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      );
      cy.get(`[data-testid="${BREADCRUMBS_SEPARATOR_TESTID}"]`).should('have.attr', 'data-part', 'separator');
    });
  });
});
