import type { PropsOf } from '@builder.io/qwik';
import { component$, useStyles$ } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';
import styles from './styles.css?inline';

const CaretRightIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

export const BreadcrumbsDemo = component$(() => {
  useStyles$(styles);

  return (
    <Breadcrumbs.Root class="breadcrumbs-root">
      <Breadcrumbs.List class="breadcrumbs-list">
        <Breadcrumbs.Item class="breadcrumbs-item">
          <Breadcrumbs.Link href="#" class="breadcrumbs-link">
            Docs
          </Breadcrumbs.Link>
          <Breadcrumbs.Separator class="breadcrumbs-separator">
            <CaretRightIcon height={16} width={16} />
          </Breadcrumbs.Separator>
        </Breadcrumbs.Item>

        <Breadcrumbs.Item class="breadcrumbs-item">
          <Breadcrumbs.Link href="#" class="breadcrumbs-link">
            Components
          </Breadcrumbs.Link>
          <Breadcrumbs.Separator class="breadcrumbs-separator">
            <CaretRightIcon height={16} width={16} />
          </Breadcrumbs.Separator>
        </Breadcrumbs.Item>

        <Breadcrumbs.Item class="breadcrumbs-item">
          <Breadcrumbs.Page class="breadcrumbs-page">Breadcrumbs</Breadcrumbs.Page>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  );
});
