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

    it('should have attribute data-qwik-primitives-avatar-root with empty value', () => {
      cy.mount(<Avatar.Root data-testid={AVATAR_ROOT_TESTID} />);
      cy.get(`[data-testid="${AVATAR_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-avatar-root', '');
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
  });
});
