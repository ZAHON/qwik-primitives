import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { SyntaxHighlighter } from '.';

type Props = {
  language: 'css' | 'shell' | 'tsx' | 'typescript';
  lines: string[];
  words: string[];
  withCopyButton: boolean;
};
type Story = StoryObj<Props>;

const meta: Meta<Props> = {
  title: 'COMPONENTS/SyntaxHighlighter',
  args: {
    language: 'css',
    lines: undefined,
    words: undefined,
    withCopyButton: true,
  },
  argTypes: {
    language: {
      options: ['css', 'shell', 'tsx', 'typescript'],
      control: 'select',
    },
    lines: {
      options: ['1', '2-4', '3-10'],
      mapping: { '1': ['1'], '2-10': ['2-4'], '3-10': ['3-10'] },
      control: 'select',
    },
    words: {
      options: ['test1', 'test2'],
      mapping: { test1: ['test1'], test2: ['test2'] },
      control: 'select',
    },
    withCopyButton: {
      control: 'boolean',
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

const typescriptCode = `// Using 'typeof' to infer types
const person = { name: "Alice", age: 30 };
type PersonType = typeof person;  // { name: string; age: number }

const test1 = () => console.log('Test 1')

const test2 = () => console.log('Test 2')

// 'satisfies' to ensure a type matches but allows more specific types
type Animal = { name: string };
const dog = { name: "Buddy", breed: "Golden Retriever" } satisfies Animal;

// Generics with 'extends' and default values
function identity<T extends number | string = string>(arg: T): T {
  return arg;
}

let str = identity();  // Default type is string
let num = identity(42);  // T inferred as number

// 'extends' with interface and class
interface HasLength {
  length: number;
}

function logLength<T extends HasLength = string>(arg: T): void {
  console.log(arg.length);
}

logLength("Hello");    // OK: string has length (default is string)
logLength([1, 2, 3]);  // OK: array has length
// logLength(123);      // Error: number doesn't have length

// 'typeof' with functions
function add(x: number, y: number): number {
  return x + y;
}

type AddFunctionType = typeof add;  // (x: number, y: number) => number

// Generic interfaces with 'extends' and default types
interface Box<T extends object = { message: string }> {
  content: T;
}

let defaultBox: Box = { content: { message: "Hello" } };  // Uses default type
let customBox: Box<{ status: number }> = { content: { status: 200 } };

// Complex example with 'satisfies' and default generics
type Task = {
  title: string;
  description?: string;
  completed: boolean;
};

const myTask = {
  title: "Learn TypeScript",
  completed: false,
  priority: "High",
} satisfies Task;  // Allows priority but ensures Task structure

// Generic function with default type
function wrapInArray<T = string>(value: T): T[] {
  return [value];
}

const stringArray = wrapInArray();  // Default to string
const numberArray = wrapInArray(42);  // T inferred as number

/**
 * Combines two generic types into a tuple.
 * 
 * @template T - The first type.
 * @template U - The second type.
 * @param {T} first - The first value.
 * @param {U} second - The second value.
 * @returns {[T, U]} A tuple containing both values.
 */
function combine<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}`;

const code = {
  css: cssCode,
  shell: shellCode,
  tsx: tsxCode,
  typescript: typescriptCode,
};

export const Preview: Story = {
  render: (props) => {
    const { language, ...others } = props;

    return <SyntaxHighlighter code={code[language]} language={language} {...others} />;
  },
};

export const WithoutCopyButton: Story = {
  args: {
    withCopyButton: false,
  },
  render: (props) => {
    const { language, ...others } = props;

    return <SyntaxHighlighter code={code[language]} language={language} {...others} />;
  },
};
