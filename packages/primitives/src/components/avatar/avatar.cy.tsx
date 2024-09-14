import { Primitive } from '@/components';
import * as Avatar from '.';

const AVATAR_IMAGE_SRC = 'https://picsum.photos/id/1005/400/400';
const AVATAR_IMAGE_SRC_BROKEN = 'https://broken.link.com/broken-pic.jpg';

const AVATAR_ROOT_TESTID = 'AVATAR_ROOT_TESTID';
const AVATAR_IMAGE_TESTID = 'AVATAR_IMAGE_TESTID';
const AVATAR_FALLBACK_TESTID = 'AVATAR_FALLBACK_TESTID';

describe('Avatar', () => {
  describe('Root', () => {
    it('should be <span> element', () => {
      cy.mount(<Avatar.Root data-testid={AVATAR_ROOT_TESTID} />);
      cy.get(`[data-testid="${AVATAR_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Avatar.Root as={Primitive.div} data-testid={AVATAR_ROOT_TESTID} />);
      cy.get(`[data-testid="${AVATAR_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${AVATAR_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contains <span> element that have attribute data-qwik-primitives-avatar-observer and attribute aria-hidden with value "true"', () => {
      cy.mount(<Avatar.Root data-testid={AVATAR_ROOT_TESTID} />);
      cy.document().then((document) => {
        expect(document.querySelector('[data-qwik-primitives-avatar-observer]')?.tagName).to.eq('SPAN');
        expect(document.querySelector('[data-qwik-primitives-avatar-observer]')?.ariaHidden).to.eq('true');
      });
    });

    it('should contain passed children', () => {
      const AVATAR_ROOT_TEXT = 'AVATAR_ROOT_TEXT';

      cy.mount(<Avatar.Root data-testid={AVATAR_ROOT_TESTID}>{AVATAR_ROOT_TEXT}</Avatar.Root>);
      cy.get(`[data-testid="${AVATAR_ROOT_TESTID}"]`).should('have.text', AVATAR_ROOT_TEXT);
    });

    it('should have attribute data-qwik-primitives-avatar-root with empty value', () => {
      cy.mount(<Avatar.Root data-testid={AVATAR_ROOT_TESTID} />);
      cy.get(`[data-testid="${AVATAR_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-avatar-root', '');
    });

    it('should have attribute data-scope with value "avatar"', () => {
      cy.mount(<Avatar.Root data-testid={AVATAR_ROOT_TESTID} />);
      cy.get(`[data-testid="${AVATAR_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'avatar');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<Avatar.Root data-testid={AVATAR_ROOT_TESTID} />);
      cy.get(`[data-testid="${AVATAR_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });

  describe('Image', () => {
    it('should be <img> element', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Image src={AVATAR_IMAGE_SRC} data-testid={AVATAR_IMAGE_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_IMAGE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'IMG');
    });

    it('should call onLoadingStatusChange$ event handler with value "loading" when image is loading', () => {
      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <Avatar.Root>
          <Avatar.Image
            src={AVATAR_IMAGE_SRC}
            onLoadingStatusChange$={(status) => console.log(status)}
            data-testid={AVATAR_IMAGE_TESTID}
          />
        </Avatar.Root>
      );
      cy.get('@log').should('be.calledWith', 'loading');
    });

    it('should call onLoadingStatusChange$ event handler with value "loaded" when image is loaded', () => {
      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <Avatar.Root>
          <Avatar.Image
            src={AVATAR_IMAGE_SRC}
            onLoadingStatusChange$={(status) => console.log(status)}
            data-testid={AVATAR_IMAGE_TESTID}
          />
        </Avatar.Root>
      );
      cy.get('@log').should('be.calledWith', 'loaded');
    });

    it('should call onLoadingStatusChange$ event handler with value "error" when an error occurred while loading the image', () => {
      cy.window()
        .its('console')
        .then((console) => {
          cy.spy(console, 'log').as('log');
        });

      cy.mount(
        <Avatar.Root>
          <Avatar.Image
            src={AVATAR_IMAGE_SRC_BROKEN}
            onLoadingStatusChange$={(status) => console.log(status)}
            data-testid={AVATAR_IMAGE_TESTID}
          />
        </Avatar.Root>
      );
      cy.get('@log').should('be.calledWith', 'error');
    });

    it('should initially not exist', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Image src={AVATAR_IMAGE_SRC} data-testid={AVATAR_IMAGE_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_IMAGE_TESTID}"]`).should('not.exist');
    });

    it('should not exist when attribute src is broken', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Image src={AVATAR_IMAGE_SRC_BROKEN} data-testid={AVATAR_IMAGE_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_IMAGE_TESTID}"]`).should('not.exist');
    });

    it('should exist after loaded', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Image src={AVATAR_IMAGE_SRC} data-testid={AVATAR_IMAGE_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_IMAGE_TESTID}"]`).should('not.exist');
      cy.get(`[data-testid="${AVATAR_IMAGE_TESTID}"]`).should('exist');
    });

    it('should have attribute data-qwik-primitives-avatar-image with empty value', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Image src={AVATAR_IMAGE_SRC} data-testid={AVATAR_IMAGE_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_IMAGE_TESTID}"]`).should('have.attr', 'data-qwik-primitives-avatar-image', '');
    });

    it('should have attribute data-scope with value "avatar"', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Image src={AVATAR_IMAGE_SRC} data-testid={AVATAR_IMAGE_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_IMAGE_TESTID}"]`).should('have.attr', 'data-scope', 'avatar');
    });

    it('should have attribute data-part with value "image"', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Image src={AVATAR_IMAGE_SRC} data-testid={AVATAR_IMAGE_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_IMAGE_TESTID}"]`).should('have.attr', 'data-part', 'image');
    });
  });

  describe('Fallback', () => {
    it('should be <span> element', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Fallback data-testid={AVATAR_FALLBACK_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Fallback as={Primitive.div} data-testid={AVATAR_FALLBACK_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const AVATAR_FALLBACK_TEXT = 'AVATAR_FALLBACK_TEXT';

      cy.mount(
        <Avatar.Root>
          <Avatar.Fallback data-testid={AVATAR_FALLBACK_TESTID}>{AVATAR_FALLBACK_TEXT}</Avatar.Fallback>
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`).should('have.text', AVATAR_FALLBACK_TEXT);
    });

    it('should not exist after image loaded', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Image src={AVATAR_IMAGE_SRC} />
          <Avatar.Fallback data-testid={AVATAR_FALLBACK_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`).should('exist');
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`).should('not.exist');
    });

    it('should initially exist', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Image src={AVATAR_IMAGE_SRC} />
          <Avatar.Fallback data-testid={AVATAR_FALLBACK_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`).should('exist');
    });

    it('should exist when image have broken src attribute', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Image src={AVATAR_IMAGE_SRC_BROKEN} />
          <Avatar.Fallback data-testid={AVATAR_FALLBACK_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`).should('exist');
    });

    it('should exist after the delay', () => {
      const delayMs = 1500;

      cy.mount(
        <Avatar.Root>
          <Avatar.Fallback delayMs={delayMs} data-testid={AVATAR_FALLBACK_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`).should('not.exist');
      cy.wait(delayMs);
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`, { timeout: 0 }).should('exist');
    });

    it('should have attribute data-qwik-primitives-avatar-fallback with empty value', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Fallback data-testid={AVATAR_FALLBACK_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-avatar-fallback',
        ''
      );
    });

    it('should have attribute data-scope with value "avatar"', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Fallback data-testid={AVATAR_FALLBACK_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`).should('have.attr', 'data-scope', 'avatar');
    });

    it('should have attribute data-part with value "fallback"', () => {
      cy.mount(
        <Avatar.Root>
          <Avatar.Fallback data-testid={AVATAR_FALLBACK_TESTID} />
        </Avatar.Root>
      );
      cy.get(`[data-testid="${AVATAR_FALLBACK_TESTID}"]`).should('have.attr', 'data-part', 'fallback');
    });
  });
});
