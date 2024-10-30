import type { Meta, StoryObj } from 'storybook-framework-qwik';
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
          <CodeBlock
            defaultValue="tsx"
            type="tabs"
            codes={[
              { tab: 'tsx', code: code.tsx, language: 'tsx' },
              { tab: 'css', code: code.css, language: 'css' },
              { tab: 'shell', code: code.shell, language: 'shell' },
            ]}
          />
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
      <CodeBlock
        defaultValue="tsx"
        type="tabs"
        codes={[
          { tab: 'tsx', code: code.tsx, language: 'tsx' },
          { tab: 'css', code: code.css, language: 'css' },
          { tab: 'shell', code: code.shell, language: 'shell' },
        ]}
      />
    );
  },
};
