import type { PrimitiveScriptProps } from './primitive-script.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `script` element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.
 * The `script` element can also be used with other languages, such as [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)'s GLSL shader programming language and [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON).
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script).
 */
export const PrimitiveScript = component$<PrimitiveScriptProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'script';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
