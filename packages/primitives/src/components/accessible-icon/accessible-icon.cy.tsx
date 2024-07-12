import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import * as AccessibleIcon from '.';

const CROSS_ICON = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg viewBox="0 0 32 32" width={24} height={24} fill="none" stroke="currentColor" {...props}>
      <path d="M2 30 L30 2 M30 30 L2 2" />
    </svg>
  );
});

const ACCESSIBLE_ICON_TESTID = 'ACCESSIBLE_ICON_TESTID';
const ACCESSIBLE_ICON_LABEL = 'ACCESSIBLE_ICON_LABEL';

describe('AccessibleIcon', () => {
  describe('Root', () => {
    it('should have attribute aria-hidden with value "true"', () => {
      cy.mount(
        <AccessibleIcon.Root as={CROSS_ICON} label={ACCESSIBLE_ICON_LABEL} data-testid={ACCESSIBLE_ICON_TESTID} />
      );
      cy.get(`[data-testid="${ACCESSIBLE_ICON_TESTID}"]`).should('have.attr', 'aria-hidden', 'true');
    });

    it('should have attribute focusable with value "false"', () => {
      cy.mount(
        <AccessibleIcon.Root as={CROSS_ICON} label={ACCESSIBLE_ICON_LABEL} data-testid={ACCESSIBLE_ICON_TESTID} />
      );
      cy.get(`[data-testid="${ACCESSIBLE_ICON_TESTID}"]`).should('have.attr', 'focusable', 'false');
    });

    it('label should be <span> element', () => {
      cy.mount(
        <AccessibleIcon.Root as={CROSS_ICON} label={ACCESSIBLE_ICON_LABEL} data-testid={ACCESSIBLE_ICON_TESTID} />
      );
      cy.get('span');
    });

    it('label should have text with value provided via label prop', () => {
      cy.mount(
        <AccessibleIcon.Root as={CROSS_ICON} label={ACCESSIBLE_ICON_LABEL} data-testid={ACCESSIBLE_ICON_TESTID} />
      );
      cy.get('span').contains(ACCESSIBLE_ICON_LABEL);
    });
  });
});
