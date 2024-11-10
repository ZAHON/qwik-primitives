import { component$, useStyles$ } from '@builder.io/qwik';
import { Avatar } from 'qwik-primitives';
import styles from './styles.css?inline';

export const AvatarDemo = component$(() => {
  useStyles$(styles);

  return (
    <div class="wrapper">
      <Avatar.Root class="avatar-root">
        <Avatar.Image
          class="avatar-image"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <Avatar.Fallback class="avatar-fallback" delayMs={600}>
          CT
        </Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root class="avatar-root">
        <Avatar.Image
          class="avatar-image"
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="Pedro Duarte"
        />
        <Avatar.Fallback class="avatar-fallback" delayMs={600}>
          JD
        </Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root class="avatar-root">
        <Avatar.Fallback class="avatar-fallback">PD</Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
});
