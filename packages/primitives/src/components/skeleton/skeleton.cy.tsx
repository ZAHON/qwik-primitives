import { Primitive } from '@/components';
import * as Skeleton from '.';

const SKELETON_ROOT_TESTID = 'SKELETON_ROOT_TESTID';
const SKELETON_CONTENT_TESTID = 'SKELETON_CONTENT_TESTID';
const SKELETON_FALLBACK_TESTID = 'SKELETON_FALLBACK_TESTID';

describe('Skeleton', () => {
  describe('Root', () => {
    it('should be <div> element', () => {
      cy.mount(<Skeleton.Root forceMount={true} data-testid={SKELETON_ROOT_TESTID} />);
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Skeleton.Root as={Primitive.span} forceMount={true} data-testid={SKELETON_ROOT_TESTID} />);
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const SKELETON_ROOT_TEXT = 'SKELETON_ROOT_TEXT';

      cy.mount(
        <Skeleton.Root forceMount={true} data-testid={SKELETON_ROOT_TESTID}>
          {SKELETON_ROOT_TEXT}
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('have.text', SKELETON_ROOT_TEXT);
    });

    it('should not exist when is not loading', () => {
      const SKELETON_ROOT_TEXT = 'SKELETON_ROOT_TEXT';

      cy.mount(
        <Skeleton.Root loading={false} data-testid={SKELETON_ROOT_TESTID}>
          {SKELETON_ROOT_TEXT}
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('not.exist');
      cy.contains(SKELETON_ROOT_TEXT).should('exist');
    });

    it('should not exist when is not forceMount', () => {
      const SKELETON_ROOT_TEXT = 'SKELETON_ROOT_TEXT';

      cy.mount(
        <Skeleton.Root forceMount={false} data-testid={SKELETON_ROOT_TESTID}>
          {SKELETON_ROOT_TEXT}
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('not.exist');
      cy.contains(SKELETON_ROOT_TEXT).should('exist');
    });

    it('should not exist when is not loading and is not forceMount', () => {
      const SKELETON_ROOT_TEXT = 'SKELETON_ROOT_TEXT';

      cy.mount(
        <Skeleton.Root loading={false} forceMount={false} data-testid={SKELETON_ROOT_TESTID}>
          {SKELETON_ROOT_TEXT}
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('not.exist');
      cy.contains(SKELETON_ROOT_TEXT).should('exist');
    });

    it('should exist when is loading', () => {
      const SKELETON_ROOT_TEXT = 'SKELETON_ROOT_TEXT';

      cy.mount(
        <Skeleton.Root loading={true} data-testid={SKELETON_ROOT_TESTID}>
          {SKELETON_ROOT_TEXT}
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('exist');
      cy.contains(SKELETON_ROOT_TEXT).should('exist');
    });

    it('should exist when is forceMount', () => {
      const SKELETON_ROOT_TEXT = 'SKELETON_ROOT_TEXT';

      cy.mount(
        <Skeleton.Root forceMount={true} data-testid={SKELETON_ROOT_TESTID}>
          {SKELETON_ROOT_TEXT}
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('exist');
      cy.contains(SKELETON_ROOT_TEXT).should('exist');
    });

    it('should exist when is loading and is forceMount', () => {
      const SKELETON_ROOT_TEXT = 'SKELETON_ROOT_TEXT';

      cy.mount(
        <Skeleton.Root loading={true} forceMount={true} data-testid={SKELETON_ROOT_TESTID}>
          {SKELETON_ROOT_TEXT}
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('exist');
      cy.contains(SKELETON_ROOT_TEXT).should('exist');
    });

    it('should exist when is not loading and is forceMount', () => {
      const SKELETON_ROOT_TEXT = 'SKELETON_ROOT_TEXT';

      cy.mount(
        <Skeleton.Root loading={false} forceMount={true} data-testid={SKELETON_ROOT_TESTID}>
          {SKELETON_ROOT_TEXT}
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('exist');
      cy.contains(SKELETON_ROOT_TEXT).should('exist');
    });

    it('should exist when is loading and is not forceMount', () => {
      const SKELETON_ROOT_TEXT = 'SKELETON_ROOT_TEXT';

      cy.mount(
        <Skeleton.Root loading={true} forceMount={false} data-testid={SKELETON_ROOT_TESTID}>
          {SKELETON_ROOT_TEXT}
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('exist');
      cy.contains(SKELETON_ROOT_TEXT).should('exist');
    });

    it('should have not attribute aria-busy when is not loading', () => {
      cy.mount(<Skeleton.Root loading={false} forceMount={true} data-testid={SKELETON_ROOT_TESTID} />);
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('not.have.attr', 'aria-busy');
    });

    it('should have attribute aria-busy with value "true" when is loading', () => {
      cy.mount(<Skeleton.Root loading={true} data-testid={SKELETON_ROOT_TESTID} />);
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('have.attr', 'aria-busy', 'true');
    });

    it('should have not attribute data-loading when is not loading', () => {
      cy.mount(<Skeleton.Root loading={false} forceMount={true} data-testid={SKELETON_ROOT_TESTID} />);
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('not.have.attr', 'data-loading');
    });

    it('should have attribute data-loading with empty value when is loading', () => {
      cy.mount(<Skeleton.Root loading={true} data-testid={SKELETON_ROOT_TESTID} />);
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('have.attr', 'data-loading', '');
    });

    it('should have not attribute data-force-mount when is not forceMount', () => {
      cy.mount(<Skeleton.Root loading={true} forceMount={false} data-testid={SKELETON_ROOT_TESTID} />);
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('not.have.attr', 'data-force-mount');
    });

    it('should have attribute data-force-mount with empty value when is forceMount', () => {
      cy.mount(<Skeleton.Root forceMount={true} data-testid={SKELETON_ROOT_TESTID} />);
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('have.attr', 'data-force-mount', '');
    });

    it('should have inline style position with value "relative"', () => {
      cy.mount(<Skeleton.Root forceMount={true} data-testid={SKELETON_ROOT_TESTID} />);
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'position', 'relative');
    });

    it('should have inline style provided via style prop', () => {
      const SKELETON_ROOT_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <Skeleton.Root style={{ color: SKELETON_ROOT_COLOR }} forceMount={true} data-testid={SKELETON_ROOT_TESTID} />
      );
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${SKELETON_ROOT_COLOR}`);
    });

    it('should have attribute data-qwik-primitives-skeleton-root with empty value', () => {
      cy.mount(<Skeleton.Root forceMount={true} data-testid={SKELETON_ROOT_TESTID} />);
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-skeleton-root', '');
    });

    it('should have attribute data-scope with value "skeleton"', () => {
      cy.mount(<Skeleton.Root forceMount={true} data-testid={SKELETON_ROOT_TESTID} />);
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'skeleton');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<Skeleton.Root forceMount={true} data-testid={SKELETON_ROOT_TESTID} />);
      cy.get(`[data-testid="${SKELETON_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });

  describe('Content', () => {
    it('should be <div> element', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Content as={Primitive.span} forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const SKELETON_CONTENT_TEXT = 'SKELETON_CONTENT_TEXT';

      cy.mount(
        <Skeleton.Root>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID}>
            {SKELETON_CONTENT_TEXT}
          </Skeleton.Content>
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('have.text', SKELETON_CONTENT_TEXT);
    });

    it('should not exist when <Skeleton.Root> is not loading', () => {
      const SKELETON_CONTENT_TEXT = 'SKELETON_CONTENT_TEXT';

      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Content data-testid={SKELETON_CONTENT_TESTID}>{SKELETON_CONTENT_TEXT}</Skeleton.Content>
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('not.exist');
      cy.contains(SKELETON_CONTENT_TEXT).should('exist');
    });

    it('should not exist when is not forceMount', () => {
      const SKELETON_CONTENT_TEXT = 'SKELETON_CONTENT_TEXT';

      cy.mount(
        <Skeleton.Root>
          <Skeleton.Content forceMount={false} data-testid={SKELETON_CONTENT_TESTID}>
            {SKELETON_CONTENT_TEXT}
          </Skeleton.Content>
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('not.exist');
      cy.contains(SKELETON_CONTENT_TEXT).should('exist');
    });

    it('should not exist when <Skeleton.Root> is not loading and is not forceMount', () => {
      const SKELETON_CONTENT_TEXT = 'SKELETON_CONTENT_TEXT';

      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Content forceMount={false} data-testid={SKELETON_CONTENT_TESTID}>
            {SKELETON_CONTENT_TEXT}
          </Skeleton.Content>
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('not.exist');
      cy.contains(SKELETON_CONTENT_TEXT).should('exist');
    });

    it('should exist when <Skeleton.Root> is loading', () => {
      const SKELETON_CONTENT_TEXT = 'SKELETON_CONTENT_TEXT';

      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Content data-testid={SKELETON_CONTENT_TESTID}>{SKELETON_CONTENT_TEXT}</Skeleton.Content>
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('exist');
      cy.contains(SKELETON_CONTENT_TEXT).should('exist');
    });

    it('should exist when is forceMount', () => {
      const SKELETON_CONTENT_TEXT = 'SKELETON_CONTENT_TEXT';

      cy.mount(
        <Skeleton.Root>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID}>
            {SKELETON_CONTENT_TEXT}
          </Skeleton.Content>
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('exist');
      cy.contains(SKELETON_CONTENT_TEXT).should('exist');
    });

    it('should exist when <Skeleton.Root> is loading and is forceMount', () => {
      const SKELETON_CONTENT_TEXT = 'SKELETON_CONTENT_TEXT';

      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID}>
            {SKELETON_CONTENT_TEXT}
          </Skeleton.Content>
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('exist');
      cy.contains(SKELETON_CONTENT_TEXT).should('exist');
    });

    it('should exist when <Skeleton.Root> is not loading and is forceMount', () => {
      const SKELETON_CONTENT_TEXT = 'SKELETON_CONTENT_TEXT';

      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID}>
            {SKELETON_CONTENT_TEXT}
          </Skeleton.Content>
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('exist');
      cy.contains(SKELETON_CONTENT_TEXT).should('exist');
    });

    it('should exist when <Skeleton.Root> is loading and is not forceMount', () => {
      const SKELETON_CONTENT_TEXT = 'SKELETON_CONTENT_TEXT';

      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Content forceMount={false} data-testid={SKELETON_CONTENT_TESTID}>
            {SKELETON_CONTENT_TEXT}
          </Skeleton.Content>
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('exist');
      cy.contains(SKELETON_CONTENT_TEXT).should('exist');
    });

    it('should have not attribute inert', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('not.have.attr', 'inert');
    });

    it('should have not attribute aria-hidden when <Skeleton.Root> is not loading', () => {
      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('not.have.attr', 'aria-hidden');
    });

    it('should have attribute aria-hidden with value "true" when <Skeleton.Root> is loading', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('have.attr', 'aria-hidden', 'true');
    });

    it('should have not attribute data-loading when <Skeleton.Root> is not loading', () => {
      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('not.have.attr', 'data-loading');
    });

    it('should have attribute data-loading with empty value when <Skeleton.Root> is loading', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('have.attr', 'data-loading', '');
    });

    it('should have not attribute data-force-mount when is not forceMount', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Content forceMount={false} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('not.have.attr', 'data-force-mount');
    });

    it('should have attribute data-force-mount with empty value when is forceMount', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('have.attr', 'data-force-mount', '');
    });

    it('should have not inline style display when <Skeleton.Root> is not loading', () => {
      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).invoke('attr', 'style').should('not.contain', 'display');
    });

    it('should have inline style display with value "contents" when <Skeleton.Root> is loading', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'display', 'contents');
    });

    it('should have not inline style visibility when <Skeleton.Root> is not loading', () => {
      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).invoke('attr', 'style').should('not.contain', 'visibility');
    });

    it('should have inline style visibility with value "hidden" when <Skeleton.Root> is loading', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'visibility', 'hidden');
    });

    it('should have not inline style pointerEvents when <Skeleton.Root> is not loading', () => {
      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('not.contain', 'pointerEvents');
    });

    it('should have inline style pointer-events with value "none" when <Skeleton.Root> is loading', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'pointer-events', 'none');
    });

    it('should have inline style provided via style prop', () => {
      const SKELETON_CONTENT_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <Skeleton.Root>
          <Skeleton.Content
            style={{ color: SKELETON_CONTENT_COLOR }}
            forceMount={true}
            data-testid={SKELETON_CONTENT_TESTID}
          />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${SKELETON_CONTENT_COLOR}`);
    });

    it('should have attribute data-qwik-primitives-skeleton-content with empty value', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-skeleton-content',
        ''
      );
    });

    it('should have attribute data-scope with value "skeleton"', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('have.attr', 'data-scope', 'skeleton');
    });

    it('should have attribute data-part with value "content"', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Content forceMount={true} data-testid={SKELETON_CONTENT_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_CONTENT_TESTID}"]`).should('have.attr', 'data-part', 'content');
    });
  });

  describe('Fallback', () => {
    it('should be <div> element', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Fallback as={Primitive.span} forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const SKELETON_FALLBACK_TEXT = 'SKELETON_FALLBACK_TEXT';

      cy.mount(
        <Skeleton.Root>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID}>
            {SKELETON_FALLBACK_TEXT}
          </Skeleton.Fallback>
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('have.text', SKELETON_FALLBACK_TEXT);
    });

    it('should not exist when <Skeleton.Root> is not loading', () => {
      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Fallback data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('not.exist');
    });

    it('should not exist when is not forceMount', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Fallback forceMount={false} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('not.exist');
    });

    it('should not exist when <Skeleton.Root> is not loading and is not forceMount', () => {
      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Fallback forceMount={false} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('not.exist');
    });

    it('should exist when <Skeleton.Root> is loading', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Fallback data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('exist');
    });

    it('should exist when is forceMount', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('exist');
    });

    it('should exist when <Skeleton.Root> is loading and is forceMount', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('exist');
    });

    it('should exist when <Skeleton.Root> is not loading and is forceMount', () => {
      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('exist');
    });

    it('should exist when <Skeleton.Root> is loading and is not forceMount', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Fallback forceMount={false} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('exist');
    });

    it('should have not attribute aria-hidden when <Skeleton.Root> is loading', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Fallback data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('have.not.attr', 'aria-hidden');
    });

    it('should have not attribute aria-hidden when <Skeleton.Root> is loading and is forceMount', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('have.not.attr', 'aria-hidden');
    });

    it('should have attribute aria-hidden with value "true" when <Skeleton.Root> is not loading and is forceMount', () => {
      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('have.attr', 'aria-hidden', 'true');
    });

    it('should have not attribute data-loading when <Skeleton.Root> is not loading', () => {
      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('not.have.attr', 'data-loading');
    });

    it('should have attribute data-loading with empty value when <Skeleton.Root> is loading', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('have.attr', 'data-loading', '');
    });

    it('should have not attribute data-force-mount when is not forceMount', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Fallback forceMount={false} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('not.have.attr', 'data-force-mount');
    });

    it('should have attribute data-force-mount with empty value when is forceMount', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('have.attr', 'data-force-mount', '');
    });

    it('should have inline style position with value "absolute"', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'position', 'absolute');
    });

    it('should have inline style inset with value "0"', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).invoke('attr', 'style').should('contain', 'inset', '0');
    });

    it('should have not inline style pointer-events when <Skeleton.Root> is loading', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Fallback data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`)
        .invoke('attr', 'style')
        .should('not.contain', 'pointer-events');
    });

    it('should have not inline style pointer-events when <Skeleton.Root> is loading and is forceMount', () => {
      cy.mount(
        <Skeleton.Root loading={true}>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`)
        .invoke('attr', 'style')
        .should('not.contain', 'pointer-events');
    });

    it('should have inline style pointer-events with value "none" when <Skeleton.Root> is not loading and is forceMount', () => {
      cy.mount(
        <Skeleton.Root loading={false}>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', 'pointer-events', 'none');
    });

    it('should have inline style provided via style prop', () => {
      const SKELETON_FALLBACK_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <Skeleton.Root>
          <Skeleton.Fallback
            style={{ color: SKELETON_FALLBACK_COLOR }}
            forceMount={true}
            data-testid={SKELETON_FALLBACK_TESTID}
          />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${SKELETON_FALLBACK_COLOR}`);
    });

    it('should have attribute data-qwik-primitives-skeleton-fallback with empty value', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-skeleton-fallback',
        ''
      );
    });

    it('should have attribute data-scope with value "skeleton"', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('have.attr', 'data-scope', 'skeleton');
    });

    it('should have attribute data-part with value "fallback"', () => {
      cy.mount(
        <Skeleton.Root>
          <Skeleton.Fallback forceMount={true} data-testid={SKELETON_FALLBACK_TESTID} />
        </Skeleton.Root>
      );
      cy.get(`[data-testid="${SKELETON_FALLBACK_TESTID}"]`).should('have.attr', 'data-part', 'fallback');
    });
  });
});
