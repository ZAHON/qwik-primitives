import { Primitive } from '@/components';
import * as TextArea from '.';

const TEXT_AREA_ROOT_TESTID = 'TEXT_AREA_ROOT_TESTID';
const TEXT_AREA_LABEL_TESTID = 'TEXT_AREA_LABEL_TESTID';
const TEXT_AREA_INPUT_TESTID = 'TEXT_AREA_INPUT_TESTID';
const TEXT_AREA_DESCRIPTION_TESTID = 'TEXT_AREA_DESCRIPTION_TESTID';
const TEXT_AREA_ERROR_MESSAGE_TESTID = 'TEXT_AREA_ERROR_MESSAGE_TESTID';

describe('TextArea', () => {
  describe('Root', () => {
    it('should be <div> element', () => {
      cy.mount(<TextArea.Root data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<TextArea.Root as={Primitive.span} data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const TEXT_AREA_ROOT_TEXT = 'TEXT_AREA_ROOT_TEXT';

      cy.mount(<TextArea.Root data-testid={TEXT_AREA_ROOT_TESTID}>{TEXT_AREA_ROOT_TEXT}</TextArea.Root>);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.text', TEXT_AREA_ROOT_TEXT);
    });

    it('should have attribute role with value "group"', () => {
      cy.mount(<TextArea.Root data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.attr', 'role', 'group');
    });

    it('should have not attribute data-disabled when is not disabled', () => {
      cy.mount(<TextArea.Root disabled={false} data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when is disabled', () => {
      cy.mount(<TextArea.Root disabled={true} data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when is not invalid', () => {
      cy.mount(<TextArea.Root invalid={false} data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when is invalid', () => {
      cy.mount(<TextArea.Root invalid={true} data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when is not required', () => {
      cy.mount(<TextArea.Root required={false} data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when is required', () => {
      cy.mount(<TextArea.Root required={true} data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have not attribute data-readonly when is not readonly', () => {
      cy.mount(<TextArea.Root readOnly={false} data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.not.attr', 'data-readonly');
    });

    it('should have attribute data-readonly with empty value when is readonly', () => {
      cy.mount(<TextArea.Root readOnly={true} data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.attr', 'data-readonly', '');
    });

    it('should have attribute data-qwik-primitives-text-area-root with empty value', () => {
      cy.mount(<TextArea.Root data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-text-area-root', '');
    });

    it('should have attribute data-scope with value "text-area"', () => {
      cy.mount(<TextArea.Root data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'text-area');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<TextArea.Root data-testid={TEXT_AREA_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_AREA_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });

  describe('Label', () => {
    it('should be <label> element', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'LABEL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Label as={Primitive.span} data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'LABEL');
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const TEXT_AREA_LABEL_TEXT = 'TEXT_AREA_LABEL_TEXT';

      cy.mount(
        <TextArea.Root>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID}>{TEXT_AREA_LABEL_TEXT}</TextArea.Label>
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.text', TEXT_AREA_LABEL_TEXT);
    });

    it('should have attribute for with value provided via for prop', () => {
      const TEXT_AREA_LABEL_FOR = 'TEXT_AREA_LABEL_FOR';

      cy.mount(
        <TextArea.Root>
          <TextArea.Label for={TEXT_AREA_LABEL_FOR} data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.attr', 'for', TEXT_AREA_LABEL_FOR);
    });

    it('should have not attribute for when <TextArea.Root> not contains <TextArea.Input>', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.not.attr', 'for');
    });

    it('should have attribute for associated with <TextArea.Input> id attribute when <TextArea.Root> contains <TextArea.Input>', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
          <TextArea.Input id={undefined} data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`)
        .invoke('attr', 'for')
        .then((htmlFor) => cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'id', htmlFor));
    });

    it('should have attribute for associated with <TextArea.Input> id attribute provided via id prop when <TextArea.Root> contains <TextArea.Input>', () => {
      const TEXT_AREA_INPUT_ID = 'TEXT_AREA_INPUT_ID';

      cy.mount(
        <TextArea.Root>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
          <TextArea.Input id={TEXT_AREA_INPUT_ID} data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`)
        .invoke('attr', 'for')
        .then((htmlFor) => cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'id', htmlFor));
    });

    it('should have attribute id with value provided via id prop', () => {
      const TEXT_AREA_LABEL_ID = 'TEXT_AREA_LABEL_ID';

      cy.mount(
        <TextArea.Root>
          <TextArea.Label id={TEXT_AREA_LABEL_ID} data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.attr', 'id', TEXT_AREA_LABEL_ID);
    });

    it('should have attribute id associated with <TextArea.Input> aria-labelledby attribute when <TextArea.Root> contains <TextArea.Input>', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
          <TextArea.Input id={undefined} data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'aria-labelledby', id));
    });

    it('should have attribute id provided via id prop associated with <TextArea.Input> aria-labelledby attribute when <TextArea.Root> contains <TextArea.Input>', () => {
      const TEXT_AREA_LABEL_ID = 'TEXT_AREA_LABEL_ID';

      cy.mount(
        <TextArea.Root>
          <TextArea.Label id={TEXT_AREA_LABEL_ID} data-testid={TEXT_AREA_LABEL_TESTID} />
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'aria-labelledby', id));
    });

    it('should prevent text selection when double clicking', () => {
      const TEXT_AREA_LABEL_TEXT = 'TEXT_AREA_LABEL_TEXT';

      cy.mount(
        <TextArea.Root>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID}>{TEXT_AREA_LABEL_TEXT}</TextArea.Label>
        </TextArea.Root>
      );
      cy.get(`[data-testid=${TEXT_AREA_LABEL_TESTID}]`).realClick({ clickCount: 2 });
      cy.window().then((window) => expect(window.getSelection()?.toString()).to.eq(''));
    });

    it('should have not attribute data-disabled when <TextArea.Root> is not disabled', () => {
      cy.mount(
        <TextArea.Root disabled={false}>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <TextArea.Root> is disabled', () => {
      cy.mount(
        <TextArea.Root disabled={true}>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when <TextArea.Root> is not invalid', () => {
      cy.mount(
        <TextArea.Root invalid={false}>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when <TextArea.Root> is invalid', () => {
      cy.mount(
        <TextArea.Root invalid={true}>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when <TextArea.Root> is not required', () => {
      cy.mount(
        <TextArea.Root required={false}>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when <TextArea.Root> is required', () => {
      cy.mount(
        <TextArea.Root required={true}>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have not attribute data-readonly when <TextArea.Root> is not readonly', () => {
      cy.mount(
        <TextArea.Root readOnly={false}>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.not.attr', 'data-readonly');
    });

    it('should have attribute data-readonly with empty value when <TextArea.Root> is readonly', () => {
      cy.mount(
        <TextArea.Root readOnly={true}>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.attr', 'data-readonly', '');
    });

    it('should have attribute data-qwik-primitives-text-area-label with empty value', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-text-area-label',
        ''
      );
    });

    it('should have attribute data-scope with value "text-area"', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.attr', 'data-scope', 'text-area');
    });

    it('should have attribute data-part with value "label"', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.attr', 'data-part', 'label');
    });
  });

  describe('Input', () => {
    it('should be <textarea> element', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'TEXTAREA');
    });

    it('should have attribute id with value provided via id prop', () => {
      const TEXT_AREA_INPUT_ID = 'TEXT_AREA_INPUT_ID';

      cy.mount(
        <TextArea.Root>
          <TextArea.Input id={TEXT_AREA_INPUT_ID} data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'id', TEXT_AREA_INPUT_ID);
    });

    it('should have attribute id associated with <TextArea.Label> for attribute when <TextArea.Root> contains <TextArea.Label>', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
          <TextArea.Input id={undefined} data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.attr', 'for', id));
    });

    it('should have attribute id provided via id prop associated with <TextArea.Label> for attribute when <TextArea.Root> contains <TextArea.Label>', () => {
      const TEXT_AREA_INPUT_ID = 'TEXT_AREA_INPUT_ID';

      cy.mount(
        <TextArea.Root>
          <TextArea.Label data-testid={TEXT_AREA_LABEL_TESTID} />
          <TextArea.Input id={TEXT_AREA_INPUT_ID} data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.attr', 'for', id));
    });

    it('should have attribute name with value provided via <TextArea.Root> name prop', () => {
      const TEXT_AREA_ROOT_NAME = 'TEXT_AREA_ROOT_NAME';

      cy.mount(
        <TextArea.Root name={TEXT_AREA_ROOT_NAME}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'name', TEXT_AREA_ROOT_NAME);
    });

    it('should be not disabled when <TextArea.Root> is not disabled', () => {
      cy.mount(
        <TextArea.Root disabled={false}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when <TextArea.Root> is disabled', () => {
      cy.mount(
        <TextArea.Root disabled={true}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute readonly when <TextArea.Root> is not readonly', () => {
      cy.mount(
        <TextArea.Root readOnly={false}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'readonly');
    });

    it('should have attribute readonly when <TextArea.Root> is readonly', () => {
      cy.mount(
        <TextArea.Root readOnly={true}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'readonly');
    });

    it('should have attribute autocomplete with value "off"', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'autocomplete', 'off');
    });

    it('should have not attribute aria-multiline when submitOnEnter prop is set to false', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Input submitOnEnter={false} data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'aria-multiline');
    });

    it('should have attribute aria-multiline with value "false" when submitOnEnter prop is set to true', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Input submitOnEnter={true} data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'aria-multiline', 'false');
    });

    it('should have not attribute aria-invalid when <TextArea.Root> is not invalid', () => {
      cy.mount(
        <TextArea.Root invalid={false}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'aria-invalid');
    });

    it('should have attribute aria-invalid with value "true" when <TextArea.Root> is invalid', () => {
      cy.mount(
        <TextArea.Root invalid={true}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'aria-invalid', 'true');
    });

    it('should have not attribute aria-required when <TextArea.Root> is not required', () => {
      cy.mount(
        <TextArea.Root required={false}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'aria-required');
    });

    it('should have attribute aria-required with value "true" when <TextArea.Root> is required', () => {
      cy.mount(
        <TextArea.Root required={true}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'aria-required', 'true');
    });

    it('should have not attribute aria-labelledby when <TextArea.Root> not contains <TextArea.Label>', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
    });

    it('should have attribute aria-labelledby associated with <TextArea.Label> id attribute when <TextArea.Root> contains <TextField.Label>', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Label id={undefined} data-testid={TEXT_AREA_LABEL_TESTID} />
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-labelledby')
        .then((ariaLabelledby) =>
          cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.attr', 'id', ariaLabelledby)
        );
    });

    it('should have attribute aria-labelledby associated with <TextArea.Label> id attribute provided via id prop when <TextArea.Root> contains <TextArea.Label>', () => {
      const TEXT_AREA_LABEL_ID = 'TEXT_AREA_LABEL_ID';

      cy.mount(
        <TextArea.Root>
          <TextArea.Label id={TEXT_AREA_LABEL_ID} data-testid={TEXT_AREA_LABEL_TESTID} />
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-labelledby')
        .then((ariaLabelledby) =>
          cy.get(`[data-testid="${TEXT_AREA_LABEL_TESTID}"]`).should('have.attr', 'id', ariaLabelledby)
        );
    });

    it('should have not attribute aria-describedby when <TextArea.Root> not contains <TextArea.Description>', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
    });

    it('should have attribute aria-describedby associated with <TextArea.Description> id attribute when <TextArea.Root> contains <TextArea.Description>', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
          <TextArea.Description id={undefined} data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
    });

    it('should have attribute aria-describedby associated with <TextArea.Description> id attribute provided via id prop when <TextArea.Root> contains <TextArea.Description>', () => {
      const TEXT_AREA_DESCRIPTION_ID = 'TEXT_AREA_DESCRIPTION_ID';

      cy.mount(
        <TextArea.Root>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
          <TextArea.Description id={TEXT_AREA_DESCRIPTION_ID} data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
    });

    it('should have not attribute aria-describedby when <TextArea.Root> is not invalid and <TextArea.Root> not contains <TextArea.ErrorMessage>', () => {
      cy.mount(
        <TextArea.Root invalid={false}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
    });

    it('should have attribute aria-describedby associated with <TextArea.ErrorMessage> id attribute when <TextArea.Root> is invalid and <TextArea.Root> contains <TextArea.ErrorMessage>', () => {
      cy.mount(
        <TextArea.Root invalid={true}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
          <TextArea.ErrorMessage id={undefined} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
    });

    it('should have attribute aria-describedby associated with <TextArea.ErrorMessage> id attribute provided via id prop when <TextArea.Root> is invalid and <TextArea.Root> contains <TextArea.ErrorMessage>', () => {
      const TEXT_AREA_ERROR_MESSAGE_ID = 'TEXT_AREA_ERROR_MESSAGE_ID';

      cy.mount(
        <TextArea.Root invalid={true}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
          <TextArea.ErrorMessage id={TEXT_AREA_ERROR_MESSAGE_ID} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
    });

    it('should have not attribute data-disabled when <TextArea.Root> is not disabled', () => {
      cy.mount(
        <TextArea.Root disabled={false}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <TextArea.Root> is disabled', () => {
      cy.mount(
        <TextArea.Root disabled={true}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when <TextArea.Root> is not invalid', () => {
      cy.mount(
        <TextArea.Root invalid={false}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when <TextArea.Root> is invalid', () => {
      cy.mount(
        <TextArea.Root invalid={true}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when <TextArea.Root> is not required', () => {
      cy.mount(
        <TextArea.Root required={false}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when <TextArea.Root> is required', () => {
      cy.mount(
        <TextArea.Root required={true}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have not attribute data-readonly when <TextArea.Root> is not readonly', () => {
      cy.mount(
        <TextArea.Root readOnly={false}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'data-readonly');
    });

    it('should have attribute data-readonly with empty value when <TextArea.Root> is readonly', () => {
      cy.mount(
        <TextArea.Root readOnly={true}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'data-readonly', '');
    });

    it('should have attribute data-qwik-primitives-text-area-input with empty value', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-text-area-input',
        ''
      );
    });

    it('should have attribute data-scope with value "text-area"', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'data-scope', 'text-area');
    });

    it('should have attribute data-part with value "input"', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'data-part', 'input');
    });
  });

  describe('Description', () => {
    it('should be <span> element', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Description as={Primitive.div} data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const TEXT_AREA_DESCRIPTION_TEXT = 'TEXT_AREA_DESCRIPTION_TEXT';

      cy.mount(
        <TextArea.Root>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID}>
            {TEXT_AREA_DESCRIPTION_TEXT}
          </TextArea.Description>
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.text', TEXT_AREA_DESCRIPTION_TEXT);
    });

    it('should have attribute id with value provided via id prop', () => {
      const TEXT_AREA_DESCRIPTION_ID = 'TEXT_AREA_DESCRIPTION_ID';

      cy.mount(
        <TextArea.Root>
          <TextArea.Description id={TEXT_AREA_DESCRIPTION_ID} data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', TEXT_AREA_DESCRIPTION_ID);
    });

    it('should have attribute id associated with <TextArea.Input> aria-describedby attribute', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Description id={undefined} data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'aria-describedby', id));
    });

    it('should have attribute id provided via id prop associated with <TextArea.Input> aria-describedby attribute', () => {
      const TEXT_AREA_DESCRIPTION_ID = 'TEXT_AREA_DESCRIPTION_ID';

      cy.mount(
        <TextArea.Root>
          <TextArea.Description id={TEXT_AREA_DESCRIPTION_ID} data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'aria-describedby', id));
    });

    it('should have not attribute data-disabled when <TextArea.Root> is not disabled', () => {
      cy.mount(
        <TextArea.Root disabled={false}>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <TextArea.Root> is disabled', () => {
      cy.mount(
        <TextArea.Root disabled={true}>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when <TextArea.Root> is not invalid', () => {
      cy.mount(
        <TextArea.Root invalid={false}>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when <TextArea.Root> is invalid', () => {
      cy.mount(
        <TextArea.Root invalid={true}>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when <TextArea.Root> is not required', () => {
      cy.mount(
        <TextArea.Root required={false}>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when <TextArea.Root> is required', () => {
      cy.mount(
        <TextArea.Root required={true}>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have not attribute data-readonly when <TextArea.Root> is not readonly', () => {
      cy.mount(
        <TextArea.Root readOnly={false}>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.not.attr', 'data-readonly');
    });

    it('should have attribute data-readonly with empty value when <TextArea.Root> is readonly', () => {
      cy.mount(
        <TextArea.Root readOnly={true}>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-readonly', '');
    });

    it('should have attribute data-qwik-primitives-text-area-description with empty value', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-text-area-description',
        ''
      );
    });

    it('should have attribute data-scope with value "text-area"', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-scope', 'text-area');
    });

    it('should have attribute data-part with value "description"', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.Description data-testid={TEXT_AREA_DESCRIPTION_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-part', 'description');
    });
  });

  describe('ErrorMessage', () => {
    it('should be <span> element', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.ErrorMessage as={Primitive.div} forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`)
        .should('have.prop', 'tagName')
        .should('not.eq', 'SPAN');
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const TEXT_AREA_ERROR_MESSAGE_TEXT = 'TEXT_AREA_ERROR_MESSAGE_TEXT';

      cy.mount(
        <TextArea.Root>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID}>
            {TEXT_AREA_ERROR_MESSAGE_TEXT}
          </TextArea.ErrorMessage>
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.text', TEXT_AREA_ERROR_MESSAGE_TEXT);
    });

    it('should not exist when is not forceMount and <TextArea.Root> is not invalid', () => {
      cy.mount(
        <TextArea.Root invalid={false}>
          <TextArea.ErrorMessage forceMount={false} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('not.exist');
    });

    it('should exist when is not forceMount and <TextArea.Root> is invalid', () => {
      cy.mount(
        <TextArea.Root invalid={true}>
          <TextArea.ErrorMessage forceMount={false} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('exist');
    });

    it('should exist when is forceMount and <TextArea.Root> is not invalid', () => {
      cy.mount(
        <TextArea.Root invalid={false}>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('exist');
    });

    it('should exist when is forceMount and <TextArea.Root> is invalid', () => {
      cy.mount(
        <TextArea.Root invalid={true}>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('exist');
    });

    it('should have not attribute aria-hidden when is forceMount and <TextArea.Root> is invalid', () => {
      cy.mount(
        <TextArea.Root invalid={true}>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'aria-hidden');
    });

    it('should have attribute aria-hidden with value "true" when is forceMount and <TextArea.Root> is not invalid', () => {
      cy.mount(
        <TextArea.Root invalid={false}>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'aria-hidden', 'true');
    });

    it('should have attribute id with value provided via id prop', () => {
      const TEXT_AREA_ERROR_MESSAGE_ID = 'TEXT_AREA_ERROR_MESSAGE_ID';

      cy.mount(
        <TextArea.Root>
          <TextArea.ErrorMessage
            id={TEXT_AREA_ERROR_MESSAGE_ID}
            forceMount={true}
            data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID}
          />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'id', TEXT_AREA_ERROR_MESSAGE_ID);
    });

    it('should have not attribute id associated with <TextArea.Input> aria-describedby attribute when <TextArea.Root> is not invalid', () => {
      cy.mount(
        <TextArea.Root invalid={false}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
          <TextArea.ErrorMessage id={undefined} forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'aria-describedby', id)
        );
    });

    it('should have not attribute id provided via id prop associated with <TextArea.Input> aria-describedby attribute when <TextArea.Root> is not invalid', () => {
      const TEXT_FIELD_ERROR_MESSAGE_ID = 'TEXT_FIELD_ERROR_MESSAGE_ID';

      cy.mount(
        <TextArea.Root invalid={false}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
          <TextArea.ErrorMessage
            id={TEXT_FIELD_ERROR_MESSAGE_ID}
            forceMount={true}
            data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID}
          />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.not.attr', 'aria-describedby', id)
        );
    });

    it('should have attribute id associated with <TextArea.Input> aria-describedby attribute when <TextArea.Root> is invalid', () => {
      cy.mount(
        <TextArea.Root invalid={true}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
          <TextArea.ErrorMessage id={undefined} forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'aria-describedby', id));
    });

    it('should have attribute id provided via id prop associated with <TextArea.Input> aria-describedby attribute when <TextArea.Root> is invalid', () => {
      const TEXT_AREA_ERROR_MESSAGE_ID = 'TEXT_AREA_ERROR_MESSAGE_ID';

      cy.mount(
        <TextArea.Root invalid={true}>
          <TextArea.Input data-testid={TEXT_AREA_INPUT_TESTID} />
          <TextArea.ErrorMessage
            id={TEXT_AREA_ERROR_MESSAGE_ID}
            forceMount={true}
            data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID}
          />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_AREA_INPUT_TESTID}"]`).should('have.attr', 'aria-describedby', id));
    });

    it('should have not attribute data-disabled when <TextArea.Root> is not disabled', () => {
      cy.mount(
        <TextArea.Root disabled={false}>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <TextArea.Root> is disabled', () => {
      cy.mount(
        <TextArea.Root disabled={true}>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when <TextArea.Root> is not invalid', () => {
      cy.mount(
        <TextArea.Root invalid={false}>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when <TextArea.Root> is invalid', () => {
      cy.mount(
        <TextArea.Root invalid={true}>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when <TextArea.Root> is not required', () => {
      cy.mount(
        <TextArea.Root required={false}>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when <TextArea.Root> is required', () => {
      cy.mount(
        <TextArea.Root required={true}>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have not attribute data-readonly when <TextArea.Root> is not readonly', () => {
      cy.mount(
        <TextArea.Root readOnly={false}>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'data-readonly');
    });

    it('should have attribute data-readonly with empty value when <TextArea.Root> is readonly', () => {
      cy.mount(
        <TextArea.Root readOnly={true}>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-readonly', '');
    });

    it('should have attribute data-qwik-primitives-text-area-error-message with empty value', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-text-area-error-message',
        ''
      );
    });

    it('should have attribute data-scope with value "text-area"', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-scope', 'text-area');
    });

    it('should have attribute data-part with value "error-message"', () => {
      cy.mount(
        <TextArea.Root>
          <TextArea.ErrorMessage forceMount={true} data-testid={TEXT_AREA_ERROR_MESSAGE_TESTID} />
        </TextArea.Root>
      );
      cy.get(`[data-testid="${TEXT_AREA_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-part', 'error-message');
    });
  });
});
