import { Primitive } from '@/components';
import * as AspectRatio from '.';

const ASPECT_RATIO_ROOT_TESTID = 'ASPECT_RATIO_ROOT_TESTID';
const ASPECT_RATIO_CONTENT_TESTID = 'ASPECT_RATIO_CONTENT_TESTID';

describe('AspectRatio', () => {
  describe('Root', () => {
    it('should be <div> element', () => {
      cy.mount(<AspectRatio.Root data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      cy.get(`[data-testid="${ASPECT_RATIO_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<AspectRatio.Root as={Primitive.span} data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      cy.get(`[data-testid="${ASPECT_RATIO_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${ASPECT_RATIO_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const ASPECT_RATIO_ROOT_TEXT = 'ASPECT_RATIO_ROOT_TEXT';

      cy.mount(<AspectRatio.Root data-testid={ASPECT_RATIO_ROOT_TESTID}>{ASPECT_RATIO_ROOT_TEXT}</AspectRatio.Root>);
      cy.get(`[data-testid="${ASPECT_RATIO_ROOT_TESTID}"]`).should('have.text', ASPECT_RATIO_ROOT_TEXT);
    });

    it('should have inline style provided via style prop', () => {
      const ASPECT_RATIO_ROOT_COLOR = 'rgb(1, 2, 3)';

      cy.mount(<AspectRatio.Root style={{ color: ASPECT_RATIO_ROOT_COLOR }} data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      cy.get(`[data-testid="${ASPECT_RATIO_ROOT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${ASPECT_RATIO_ROOT_COLOR}`);
    });

    it('should have attribute data-qwik-primitives-aspect-ratio-root with empty value', () => {
      cy.mount(<AspectRatio.Root data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      cy.get(`[data-testid="${ASPECT_RATIO_ROOT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-aspect-ratio-root',
        ''
      );
    });

    it('should have attribute data-scope with value "aspect-ratio"', () => {
      cy.mount(<AspectRatio.Root data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      cy.get(`[data-testid="${ASPECT_RATIO_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'aspect-ratio');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<AspectRatio.Root data-testid={ASPECT_RATIO_ROOT_TESTID} />);
      cy.get(`[data-testid="${ASPECT_RATIO_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });

  describe('Content', () => {
    it('should be <div> element', () => {
      cy.mount(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      cy.get(`[data-testid="${ASPECT_RATIO_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <AspectRatio.Root>
          <AspectRatio.Content as={Primitive.span} data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      cy.get(`[data-testid="${ASPECT_RATIO_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${ASPECT_RATIO_CONTENT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const ASPECT_RATIO_CONTENT_TEXT = 'ASPECT_RATIO_CONTENT_TEXT';

      cy.mount(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID}>
            {ASPECT_RATIO_CONTENT_TEXT}
          </AspectRatio.Content>
        </AspectRatio.Root>
      );
      cy.get(`[data-testid="${ASPECT_RATIO_CONTENT_TESTID}"]`).should('have.text', ASPECT_RATIO_CONTENT_TEXT);
    });

    it('should have inline style provided via style prop', () => {
      const ASPECT_RATIO_CONTENT_COLOR = 'rgb(1, 2, 3)';

      cy.mount(
        <AspectRatio.Root>
          <AspectRatio.Content
            style={{ color: ASPECT_RATIO_CONTENT_COLOR }}
            data-testid={ASPECT_RATIO_CONTENT_TESTID}
          />
        </AspectRatio.Root>
      );
      cy.get(`[data-testid="${ASPECT_RATIO_CONTENT_TESTID}"]`)
        .invoke('attr', 'style')
        .should('contain', `color: ${ASPECT_RATIO_CONTENT_COLOR}`);
    });

    it('should have attribute data-qwik-primitives-aspect-ratio-content with empty value', () => {
      cy.mount(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      cy.get(`[data-testid="${ASPECT_RATIO_CONTENT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-aspect-ratio-content',
        ''
      );
    });

    it('should have attribute data-scope with value "aspect-ratio"', () => {
      cy.mount(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      cy.get(`[data-testid="${ASPECT_RATIO_CONTENT_TESTID}"]`).should('have.attr', 'data-scope', 'aspect-ratio');
    });

    it('should have attribute data-part with value "content"', () => {
      cy.mount(
        <AspectRatio.Root>
          <AspectRatio.Content data-testid={ASPECT_RATIO_CONTENT_TESTID} />
        </AspectRatio.Root>
      );
      cy.get(`[data-testid="${ASPECT_RATIO_CONTENT_TESTID}"]`).should('have.attr', 'data-part', 'content');
    });
  });
});
