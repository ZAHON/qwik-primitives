import type { TableOfContentsProps } from './table-of-contents.types';
import { component$ } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { TableOfContentsHeading } from './table-of-contents-heading';
import { TableOfContentsList } from './table-of-contents-list';
import { TableOfContentsSubList } from './table-of-contents-sub-list';
import { TableOfContentsItem } from './table-of-contents-item';
import { TableOfContentsLink } from './table-of-contents-link';
import { tableOfContentsStyles } from './table-of-contents.styles';

export const TableOfContents = component$<TableOfContentsProps>((props) => {
  const { data, class: className } = props;

  return (
    <>
      <nav aria-labelledby="table-of-contents-heading" class={twm(tableOfContentsStyles(), className)}>
        <TableOfContentsHeading />
        <TableOfContentsList>
          {data.map(({ label, data, ...others }) => (
            <TableOfContentsItem key={label}>
              <TableOfContentsLink {...others}>{label}</TableOfContentsLink>

              {data &&
                data.map(({ label, ...others }) => (
                  <TableOfContentsSubList key={label}>
                    <TableOfContentsItem>
                      <TableOfContentsLink {...others}>{label}</TableOfContentsLink>
                    </TableOfContentsItem>
                  </TableOfContentsSubList>
                ))}
            </TableOfContentsItem>
          ))}
        </TableOfContentsList>
      </nav>
    </>
  );
});
