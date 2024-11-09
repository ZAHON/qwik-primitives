import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { component$ } from '@builder.io/qwik';
import { CodeBlock } from '.';

type Props = { type: 'single' | 'tabs' };
type Story = StoryObj<Props>;

const meta: Meta<Props> = {
  title: 'COMPONENTS/CodeBlock',
  args: {
    type: 'single',
  },
  argTypes: {
    type: {
      options: ['single', 'tabs'],
      control: 'select',
    },
  },
};

export default meta;

const cssCode = `html {
	margin: 0;
	background: black;
	height: 100%;
}

body {
	margin: 0;
	width: 100%;
	height: inherit;
}

.test1 {
	display: block;
}

.test2 {
	display: flex;
}

/* the three main rows going down the page */

body > div {
  height: 25%;
}

.thumb {
	float: left;
	width: 25%;
	height: 100%;
	object-fit: cover;
}

.main {
  display: none;
}

.blowup {
  display: block;
  position: absolute;
  object-fit: contain;
  object-position: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
}

.darken {
  opacity: 0.4;
}`;

const shellCode = `pnpm install -D qwik-primitives`;

const tsxCode = `// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

const test1 = () => console.log('Test 1')

const test2 = () => console.log('Test 2')

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

export default Blog`;

const code = {
  css: cssCode,
  shell: shellCode,
  tsx: tsxCode,
};

const NPMLogo = component$(() => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path fill="#c12127" d="M0,16V0H16V16ZM3,3V13H8V5h3v8h2V3Z" />
      <path fill="#fff" d="M3,3H13V13H11V5H8v8H3Z" />
    </svg>
  );
});

const YarnLogo = component$(() => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 518 518"
    >
      <path fill="#2c8ebb" d="M259 0c143 0 259 116 259 259S402 518 259 518 0 402 0 259 116 0 259 0z" />
      <path
        fill="#fff"
        d="M435.2 337.5c-1.8-14.2-13.8-24-29.2-23.8-23 .3-42.3 12.2-55.1 20.1-5 3.1-9.3 5.4-13 7.1.8-11.6.1-26.8-5.9-43.5-7.3-20-17.1-32.3-24.1-39.4 8.1-11.8 19.2-29 24.4-55.6 4.5-22.7 3.1-58-7.2-77.8-2.1-4-5.6-6.9-10-8.1-1.8-.5-5.2-1.5-11.9.4C293.1 96 289.6 93.8 286.9 92c-5.6-3.6-12.2-4.4-18.4-2.1-8.3 3-15.4 11-22.1 25.2-1 2.1-1.9 4.1-2.7 6.1-12.7.9-32.7 5.5-49.6 23.8-2.1 2.3-6.2 4-10.5 5.6h.1c-8.8 3.1-12.8 10.3-17.7 23.3-6.8 18.2.2 36.1 7.1 47.7-9.4 8.4-21.9 21.8-28.5 37.5-8.2 19.4-9.1 38.4-8.8 48.7-7 7.4-17.8 21.3-19 36.9-1.6 21.8 6.3 36.6 9.8 42 1 1.6 2.1 2.9 3.3 4.2-.4 2.7-.5 5.6.1 8.6 1.3 7 5.7 12.7 12.4 16.3 13.2 7 31.6 10 45.8 2.9 5.1 5.4 14.4 10.6 31.3 10.6h1c4.3 0 58.9-2.9 74.8-6.8 7.1-1.7 12-4.7 15.2-7.4 10.2-3.2 38.4-12.8 65-30 18.8-12.2 25.3-14.8 39.3-18.2 13.6-3.3 22.1-15.7 20.4-29.4zm-23.8 14.7c-16 3.8-24.1 7.3-43.9 20.2-30.9 20-64.7 29.3-64.7 29.3s-2.8 4.2-10.9 6.1c-14 3.4-66.7 6.3-71.5 6.4-12.9.1-20.8-3.3-23-8.6-6.7-16 9.6-23 9.6-23s-3.6-2.2-5.7-4.2c-1.9-1.9-3.9-5.7-4.5-4.3-2.5 6.1-3.8 21-10.5 27.7-9.2 9.3-26.6 6.2-36.9.8-11.3-6 .8-20.1.8-20.1s-6.1 3.6-11-3.8c-4.4-6.8-8.5-18.4-7.4-32.7 1.2-16.3 19.4-32.1 19.4-32.1s-3.2-24.1 7.3-48.8c9.5-22.5 35.1-40.6 35.1-40.6s-21.5-23.8-13.5-45.2c5.2-14 7.3-13.9 9-14.5 6-2.3 11.8-4.8 16.1-9.5 21.5-23.2 48.9-18.8 48.9-18.8s13-39.5 25-31.8c3.7 2.4 17 32 17 32s14.2-8.3 15.8-5.2c8.6 16.7 9.6 48.6 5.8 68-6.4 32-22.4 49.2-28.8 60-1.5 2.5 17.2 10.4 29 43.1 10.9 29.9 1.2 55 2.9 57.8.3.5.4.7.4.7s12.5 1 37.6-14.5c13.4-8.3 29.3-17.6 47.4-17.8 17.5-.3 18.4 20.2 5.2 23.4z"
      />
    </svg>
  );
});

export const Preview: Story = {
  render: (props) => {
    const { type } = props;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        {type === 'single' && (
          <>
            <CodeBlock type="single" code={code.shell} language="shell" />
            <CodeBlock type="single" code={code.tsx} language="tsx" />
          </>
        )}
        {type === 'tabs' && (
          <>
            <CodeBlock
              defaultValue="npm"
              type="tabs"
              codes={[
                { tab: 'npm', icon: NPMLogo, code: 'npm install -D qwik-primitives', language: 'shell' },
                { tab: 'yarn', icon: YarnLogo, code: 'yarn install -D qwik-primitives', language: 'shell' },
              ]}
            />
            <CodeBlock
              defaultValue="tsx"
              type="tabs"
              codes={[
                { tab: 'tsx', code: code.tsx, language: 'tsx' },
                { tab: 'css', code: code.css, language: 'css' },
                { tab: 'shell', code: code.shell, language: 'shell' },
              ]}
            />
          </>
        )}
      </div>
    );
  },
};

export const TypeSingle: Story = {
  argTypes: {
    type: { control: false },
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <CodeBlock type="single" code={code.shell} language="shell" />
        <CodeBlock type="single" code={code.tsx} language="tsx" />
      </div>
    );
  },
};

export const TypeTabs: Story = {
  argTypes: {
    type: { control: false },
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <CodeBlock
          defaultValue="npm"
          type="tabs"
          codes={[
            { tab: 'npm', icon: NPMLogo, code: 'npm install -D qwik-primitives', language: 'shell' },
            { tab: 'yarn', icon: YarnLogo, code: 'yarn install -D qwik-primitives', language: 'shell' },
          ]}
        />
        <CodeBlock
          defaultValue="tsx"
          type="tabs"
          codes={[
            { tab: 'tsx', code: code.tsx, language: 'tsx' },
            { tab: 'css', code: code.css, language: 'css' },
            { tab: 'shell', code: code.shell, language: 'shell' },
          ]}
        />
      </div>
    );
  },
};
