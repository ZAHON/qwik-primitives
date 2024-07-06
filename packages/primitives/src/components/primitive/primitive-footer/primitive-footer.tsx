import type { PrimitiveFooterProps } from './primitive-footer.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `footer` element represents a footer for its nearest ancestor [sectioning content](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#sectioning_content) or [sectioning root](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#labeling_section_content) element.
 * A `footer` typically contains information about the author of the section, copyright data or links to related documents.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer).
 */
export const PrimitiveFooter = component$<PrimitiveFooterProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'footer';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
