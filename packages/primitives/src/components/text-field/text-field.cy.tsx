import { Primitive } from '@/components';
import * as TextField from '.';

const TEXT_FIELD_ROOT_TESTID = 'TEXT_FIELD_ROOT_TESTID';
const TEXT_FIELD_LABEL_TESTID = 'TEXT_FIELD_LABEL_TESTID';
const TEXT_FIELD_INPUT_TESTID = 'TEXT_FIELD_INPUT_TESTID';
const TEXT_FIELD_DESCRIPTION_TESTID = 'TEXT_FIELD_DESCRIPTION_TESTID';
const TEXT_FIELD_ERROR_MESSAGE_TESTID = 'TEXT_FIELD_ERROR_MESSAGE_TESTID';

describe('TextField', () => {
  describe('Root', () => {
    it('should be <div> element', () => {
      cy.mount(<TextField.Root data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<TextField.Root as={Primitive.span} data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const TEXT_FIELD_ROOT_TEXT = 'TEXT_FIELD_ROOT_TEXT';

      cy.mount(<TextField.Root data-testid={TEXT_FIELD_ROOT_TESTID}>{TEXT_FIELD_ROOT_TEXT}</TextField.Root>);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.text', TEXT_FIELD_ROOT_TEXT);
    });

    it('should have attribute role with value "group"', () => {
      cy.mount(<TextField.Root data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.attr', 'role', 'group');
    });

    it('should have not attribute data-disabled when is not disabled', () => {
      cy.mount(<TextField.Root disabled={false} data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when is disabled', () => {
      cy.mount(<TextField.Root disabled={true} data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when is not invalid', () => {
      cy.mount(<TextField.Root invalid={false} data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when is invalid', () => {
      cy.mount(<TextField.Root invalid={true} data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when is not required', () => {
      cy.mount(<TextField.Root required={false} data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when is required', () => {
      cy.mount(<TextField.Root required={true} data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have not attribute data-readonly when is not readonly', () => {
      cy.mount(<TextField.Root readOnly={false} data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.not.attr', 'data-readonly');
    });

    it('should have attribute data-readonly with empty value when is readonly', () => {
      cy.mount(<TextField.Root readOnly={true} data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.attr', 'data-readonly', '');
    });

    it('should have attribute data-qwik-primitives-text-field-root with empty value', () => {
      cy.mount(<TextField.Root data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-text-field-root',
        ''
      );
    });

    it('should have attribute data-scope with value "text-field"', () => {
      cy.mount(<TextField.Root data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'text-field');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<TextField.Root data-testid={TEXT_FIELD_ROOT_TESTID} />);
      cy.get(`[data-testid="${TEXT_FIELD_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });

  describe('Label', () => {
    it('should be <label> element', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'LABEL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Label as={Primitive.span} data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'LABEL');
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const TEXT_FIELD_LABEL_TEXT = 'TEXT_FIELD_LABEL_TEXT';

      cy.mount(
        <TextField.Root>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID}>{TEXT_FIELD_LABEL_TEXT}</TextField.Label>
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.text', TEXT_FIELD_LABEL_TEXT);
    });

    it('should have attribute for with value provided via for prop', () => {
      const TEXT_FIELD_LABEL_FOR = 'TEXT_FIELD_LABEL_FOR';

      cy.mount(
        <TextField.Root>
          <TextField.Label for={TEXT_FIELD_LABEL_FOR} data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.attr', 'for', TEXT_FIELD_LABEL_FOR);
    });

    it('should have not attribute for when <TextField.Root> not contains <TextField.Input>', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.not.attr', 'for');
    });

    it('should have attribute for associated with <TextField.Input> id attribute when <TextField.Root> contains <TextField.Input>', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
          <TextField.Input id={undefined} data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`)
        .invoke('attr', 'for')
        .then((htmlFor) => cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'id', htmlFor));
    });

    it('should have attribute for associated with <TextField.Input> id attribute provided via id prop when <TextField.Root> contains <TextField.Input>', () => {
      const TEXT_FIELD_INPUT_ID = 'TEXT_FIELD_INPUT_ID';

      cy.mount(
        <TextField.Root>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
          <TextField.Input id={TEXT_FIELD_INPUT_ID} data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`)
        .invoke('attr', 'for')
        .then((htmlFor) => cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'id', htmlFor));
    });

    it('should have attribute id with value provided via id prop', () => {
      const TEXT_FIELD_LABEL_ID = 'TEXT_FIELD_LABEL_ID';

      cy.mount(
        <TextField.Root>
          <TextField.Label id={TEXT_FIELD_LABEL_ID} data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.attr', 'id', TEXT_FIELD_LABEL_ID);
    });

    it('should have attribute id associated with <TextField.Input> aria-labelledby attribute when <TextField.Root> contains <TextField.Input>', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
          <TextField.Input id={undefined} data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'aria-labelledby', id));
    });

    it('should have attribute id provided via id prop associated with <TextField.Input> aria-labelledby attribute when <TextField.Root> contains <TextField.Input>', () => {
      const TEXT_FIELD_LABEL_ID = 'TEXT_FIELD_LABEL_ID';

      cy.mount(
        <TextField.Root>
          <TextField.Label id={TEXT_FIELD_LABEL_ID} data-testid={TEXT_FIELD_LABEL_TESTID} />
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'aria-labelledby', id));
    });

    it('should prevent text selection when double clicking', () => {
      const TEXT_FIELD_LABEL_TEXT = 'TEXT_FIELD_LABEL_TEXT';

      cy.mount(
        <TextField.Root>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID}>{TEXT_FIELD_LABEL_TEXT}</TextField.Label>
        </TextField.Root>
      );
      cy.get(`[data-testid=${TEXT_FIELD_LABEL_TESTID}]`).realClick({ clickCount: 2 });
      cy.window().then((window) => expect(window.getSelection()?.toString()).to.eq(''));
    });

    it('should have not attribute data-disabled when <TextField.Root> is not disabled', () => {
      cy.mount(
        <TextField.Root disabled={false}>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <TextField.Root> is disabled', () => {
      cy.mount(
        <TextField.Root disabled={true}>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when <TextField.Root> is not invalid', () => {
      cy.mount(
        <TextField.Root invalid={false}>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when <TextField.Root> is invalid', () => {
      cy.mount(
        <TextField.Root invalid={true}>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when <TextField.Root> is not required', () => {
      cy.mount(
        <TextField.Root required={false}>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when <TextField.Root> is required', () => {
      cy.mount(
        <TextField.Root required={true}>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have not attribute data-readonly when <TextField.Root> is not readonly', () => {
      cy.mount(
        <TextField.Root readOnly={false}>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.not.attr', 'data-readonly');
    });

    it('should have attribute data-readonly with empty value when <TextField.Root> is readonly', () => {
      cy.mount(
        <TextField.Root readOnly={true}>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.attr', 'data-readonly', '');
    });

    it('should have attribute data-qwik-primitives-text-field-label with empty value', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-text-field-label',
        ''
      );
    });

    it('should have attribute data-scope with value "text-field"', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.attr', 'data-scope', 'text-field');
    });

    it('should have attribute data-part with value "label"', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.attr', 'data-part', 'label');
    });
  });

  describe('Input', () => {
    it('should be <input> element', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'INPUT');
    });

    it('should have attribute id with value provided via id prop', () => {
      const TEXT_FIELD_INPUT_ID = 'TEXT_FIELD_INPUT_ID';

      cy.mount(
        <TextField.Root>
          <TextField.Input id={TEXT_FIELD_INPUT_ID} data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'id', TEXT_FIELD_INPUT_ID);
    });

    it('should have attribute id associated with <TextField.Label> for attribute when <TextField.Root> contains <TextField.Label>', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
          <TextField.Input id={undefined} data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.attr', 'for', id));
    });

    it('should have attribute id provided via id prop associated with <TextField.Label> for attribute when <TextField.Root> contains <TextField.Label>', () => {
      const TEXT_FIELD_INPUT_ID = 'TEXT_FIELD_INPUT_ID';

      cy.mount(
        <TextField.Root>
          <TextField.Label data-testid={TEXT_FIELD_LABEL_TESTID} />
          <TextField.Input id={TEXT_FIELD_INPUT_ID} data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.attr', 'for', id));
    });

    it('should have attribute name with value provided via <TextField.Root> name prop', () => {
      const TEXT_FIELD_ROOT_NAME = 'TEXT_FIELD_ROOT_NAME';

      cy.mount(
        <TextField.Root name={TEXT_FIELD_ROOT_NAME}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'name', TEXT_FIELD_ROOT_NAME);
    });

    it('should be not disabled when <TextField.Root> is not disabled', () => {
      cy.mount(
        <TextField.Root disabled={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when <TextField.Root> is disabled', () => {
      cy.mount(
        <TextField.Root disabled={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('be.disabled');
    });

    it('should have not attribute readonly when <TextField.Root> is not readonly', () => {
      cy.mount(
        <TextField.Root readOnly={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.not.attr', 'readonly');
    });

    it('should have attribute readonly when <TextField.Root> is readonly', () => {
      cy.mount(
        <TextField.Root readOnly={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'readonly');
    });

    it('should have attribute type with value "text"', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'type', 'text');
    });

    it('should have attribute autocomplete with value "off"', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'autocomplete', 'off');
    });

    it('should have not attribute aria-invalid when <TextField.Root> is not invalid', () => {
      cy.mount(
        <TextField.Root invalid={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.not.attr', 'aria-invalid');
    });

    it('should have attribute aria-invalid with value "true" when <TextField.Root> is invalid', () => {
      cy.mount(
        <TextField.Root invalid={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'aria-invalid', 'true');
    });

    it('should have not attribute aria-required when <TextField.Root> is not required', () => {
      cy.mount(
        <TextField.Root required={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.not.attr', 'aria-required');
    });

    it('should have attribute aria-required with value "true" when <TextField.Root> is required', () => {
      cy.mount(
        <TextField.Root required={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'aria-required', 'true');
    });

    it('should have not attribute aria-labelledby when <TextField.Root> not contains <TextField.Label>', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
    });

    it('should have attribute aria-labelledby associated with <TextField.Label> id attribute when <TextField.Root> contains <TextField.Label>', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Label id={undefined} data-testid={TEXT_FIELD_LABEL_TESTID} />
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-labelledby')
        .then((ariaLabelledby) =>
          cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.attr', 'id', ariaLabelledby)
        );
    });

    it('should have attribute aria-labelledby associated with <TextField.Label> id attribute provided via id prop when <TextField.Root> contains <TextField.Label>', () => {
      const TEXT_FIELD_LABEL_ID = 'TEXT_FIELD_LABEL_ID';

      cy.mount(
        <TextField.Root>
          <TextField.Label id={TEXT_FIELD_LABEL_ID} data-testid={TEXT_FIELD_LABEL_TESTID} />
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-labelledby')
        .then((ariaLabelledby) =>
          cy.get(`[data-testid="${TEXT_FIELD_LABEL_TESTID}"]`).should('have.attr', 'id', ariaLabelledby)
        );
    });

    it('should have not attribute aria-describedby when <TextField.Root> not contains <TextField.Description>', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
    });

    it('should have attribute aria-describedby associated with <TextField.Description> id attribute when <TextField.Root> contains <TextField.Description>', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
          <TextField.Description id={undefined} data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
    });

    it('should have attribute aria-describedby associated with <TextField.Description> id attribute provided via id prop when <TextField.Root> contains <TextField.Description>', () => {
      const TEXT_FIELD_DESCRIPTION_ID = 'TEXT_FIELD_DESCRIPTION_ID';

      cy.mount(
        <TextField.Root>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
          <TextField.Description id={TEXT_FIELD_DESCRIPTION_ID} data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
    });

    it('should have not attribute aria-describedby when <TextField.Root> is not invalid and <TextField.Root> not contains <TextField.ErrorMessage>', () => {
      cy.mount(
        <TextField.Root invalid={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
    });

    it('should have attribute aria-describedby associated with <TextField.ErrorMessage> id attribute when <TextField.Root> is invalid and <TextField.Root> contains <TextField.ErrorMessage>', () => {
      cy.mount(
        <TextField.Root invalid={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
          <TextField.ErrorMessage id={undefined} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
    });

    it('should have attribute aria-describedby associated with <TextField.ErrorMessage> id attribute provided via id prop when <TextField.Root> is invalid and <TextField.Root> contains <TextField.ErrorMessage>', () => {
      const TEXT_FIELD_ERROR_MESSAGE_ID = 'TEXT_FIELD_ERROR_MESSAGE_ID';

      cy.mount(
        <TextField.Root invalid={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
          <TextField.ErrorMessage id={TEXT_FIELD_ERROR_MESSAGE_ID} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
    });

    it('should have not attribute data-disabled when <TextField.Root> is not disabled', () => {
      cy.mount(
        <TextField.Root disabled={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <TextField.Root> is disabled', () => {
      cy.mount(
        <TextField.Root disabled={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when <TextField.Root> is not invalid', () => {
      cy.mount(
        <TextField.Root invalid={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when <TextField.Root> is invalid', () => {
      cy.mount(
        <TextField.Root invalid={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when <TextField.Root> is not required', () => {
      cy.mount(
        <TextField.Root required={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when <TextField.Root> is required', () => {
      cy.mount(
        <TextField.Root required={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have not attribute data-readonly when <TextField.Root> is not readonly', () => {
      cy.mount(
        <TextField.Root readOnly={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.not.attr', 'data-readonly');
    });

    it('should have attribute data-readonly with empty value when <TextField.Root> is readonly', () => {
      cy.mount(
        <TextField.Root readOnly={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'data-readonly', '');
    });

    it('should have attribute data-qwik-primitives-text-field-input with empty value', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-text-field-input',
        ''
      );
    });

    it('should have attribute data-scope with value "text-field"', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'data-scope', 'text-field');
    });

    it('should have attribute data-part with value "input"', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'data-part', 'input');
    });
  });

  describe('Description', () => {
    it('should be <span> element', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Description as={Primitive.div} data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`)
        .should('have.prop', 'tagName')
        .should('not.eq', 'SPAN');
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const TEXT_FIELD_DESCRIPTION_TEXT = 'TEXT_FIELD_DESCRIPTION_TEXT';

      cy.mount(
        <TextField.Root>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID}>
            {TEXT_FIELD_DESCRIPTION_TEXT}
          </TextField.Description>
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.text', TEXT_FIELD_DESCRIPTION_TEXT);
    });

    it('should have attribute id with value provided via id prop', () => {
      const TEXT_FIELD_DESCRIPTION_ID = 'TEXT_FIELD_DESCRIPTION_ID';

      cy.mount(
        <TextField.Root>
          <TextField.Description id={TEXT_FIELD_DESCRIPTION_ID} data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', TEXT_FIELD_DESCRIPTION_ID);
    });

    it('should have attribute id associated with <TextField.Input> aria-describedby attribute', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Description id={undefined} data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'aria-describedby', id));
    });

    it('should have attribute id provided via id prop associated with <TextField.Input> aria-describedby attribute', () => {
      const TEXT_FIELD_DESCRIPTION_ID = 'TEXT_FIELD_DESCRIPTION_ID';

      cy.mount(
        <TextField.Root>
          <TextField.Description id={TEXT_FIELD_DESCRIPTION_ID} data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'aria-describedby', id));
    });

    it('should have not attribute data-disabled when <TextField.Root> is not disabled', () => {
      cy.mount(
        <TextField.Root disabled={false}>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <TextField.Root> is disabled', () => {
      cy.mount(
        <TextField.Root disabled={true}>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when <TextField.Root> is not invalid', () => {
      cy.mount(
        <TextField.Root invalid={false}>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when <TextField.Root> is invalid', () => {
      cy.mount(
        <TextField.Root invalid={true}>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when <TextField.Root> is not required', () => {
      cy.mount(
        <TextField.Root required={false}>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when <TextField.Root> is required', () => {
      cy.mount(
        <TextField.Root required={true}>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have not attribute data-readonly when <TextField.Root> is not readonly', () => {
      cy.mount(
        <TextField.Root readOnly={false}>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.not.attr', 'data-readonly');
    });

    it('should have attribute data-readonly with empty value when <TextField.Root> is readonly', () => {
      cy.mount(
        <TextField.Root readOnly={true}>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-readonly', '');
    });

    it('should have attribute data-qwik-primitives-text-field-description with empty value', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-text-field-description',
        ''
      );
    });

    it('should have attribute data-scope with value "text-field"', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-scope', 'text-field');
    });

    it('should have attribute data-part with value "description"', () => {
      cy.mount(
        <TextField.Root>
          <TextField.Description data-testid={TEXT_FIELD_DESCRIPTION_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-part', 'description');
    });
  });

  describe('ErrorMessage', () => {
    it('should be <span> element', () => {
      cy.mount(
        <TextField.Root>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <TextField.Root>
          <TextField.ErrorMessage as={Primitive.div} forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`)
        .should('have.prop', 'tagName')
        .should('not.eq', 'SPAN');
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const TEXT_FIELD_ERROR_MESSAGE_TEXT = 'TEXT_FIELD_ERROR_MESSAGE_TEXT';

      cy.mount(
        <TextField.Root>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID}>
            {TEXT_FIELD_ERROR_MESSAGE_TEXT}
          </TextField.ErrorMessage>
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.text', TEXT_FIELD_ERROR_MESSAGE_TEXT);
    });

    it('should not exist when is not forceMount and <TextField.Root> is not invalid', () => {
      cy.mount(
        <TextField.Root invalid={false}>
          <TextField.ErrorMessage forceMount={false} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('not.exist');
    });

    it('should exist when is not forceMount and <TextField.Root> is invalid', () => {
      cy.mount(
        <TextField.Root invalid={true}>
          <TextField.ErrorMessage forceMount={false} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('exist');
    });

    it('should exist when is forceMount and <TextField.Root> is not invalid', () => {
      cy.mount(
        <TextField.Root invalid={false}>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('exist');
    });

    it('should exist when is forceMount and <TextField.Root> is invalid', () => {
      cy.mount(
        <TextField.Root invalid={true}>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('exist');
    });

    it('should have not attribute aria-hidden when is forceMount and <TextField.Root> is invalid', () => {
      cy.mount(
        <TextField.Root invalid={true}>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'aria-hidden');
    });

    it('should have attribute aria-hidden with value "true" when is forceMount and <TextField.Root> is not invalid', () => {
      cy.mount(
        <TextField.Root invalid={false}>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'aria-hidden', 'true');
    });

    it('should have attribute id with value provided via id prop', () => {
      const TEXT_FIELD_ERROR_MESSAGE_ID = 'TEXT_FIELD_ERROR_MESSAGE_ID';

      cy.mount(
        <TextField.Root>
          <TextField.ErrorMessage
            id={TEXT_FIELD_ERROR_MESSAGE_ID}
            forceMount={true}
            data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID}
          />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should(
        'have.attr',
        'id',
        TEXT_FIELD_ERROR_MESSAGE_ID
      );
    });

    it('should have not attribute id associated with <TextField.Input> aria-describedby attribute when <TextField.Root> is not invalid', () => {
      cy.mount(
        <TextField.Root invalid={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
          <TextField.ErrorMessage id={undefined} forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.not.attr', 'aria-describedby', id)
        );
    });

    it('should have not attribute id provided via id prop associated with <TextField.Input> aria-describedby attribute when <TextField.Root> is not invalid', () => {
      const TEXT_FIELD_ERROR_MESSAGE_ID = 'TEXT_FIELD_ERROR_MESSAGE_ID';

      cy.mount(
        <TextField.Root invalid={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
          <TextField.ErrorMessage
            id={TEXT_FIELD_ERROR_MESSAGE_ID}
            forceMount={true}
            data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID}
          />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.not.attr', 'aria-describedby', id)
        );
    });

    it('should have attribute id associated with <TextField.Input> aria-describedby attribute when <TextField.Root> is invalid', () => {
      cy.mount(
        <TextField.Root invalid={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
          <TextField.ErrorMessage id={undefined} forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'aria-describedby', id));
    });

    it('should have attribute id provided via id prop associated with <TextField.Input> aria-describedby attribute when <TextField.Root> is invalid', () => {
      const TEXT_FIELD_ERROR_MESSAGE_ID = 'TEXT_FIELD_ERROR_MESSAGE_ID';

      cy.mount(
        <TextField.Root invalid={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TESTID} />
          <TextField.ErrorMessage
            id={TEXT_FIELD_ERROR_MESSAGE_ID}
            forceMount={true}
            data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID}
          />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${TEXT_FIELD_INPUT_TESTID}"]`).should('have.attr', 'aria-describedby', id));
    });

    it('should have not attribute data-disabled when <TextField.Root> is not disabled', () => {
      cy.mount(
        <TextField.Root disabled={false}>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <TextField.Root> is disabled', () => {
      cy.mount(
        <TextField.Root disabled={true}>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when <TextField.Root> is not invalid', () => {
      cy.mount(
        <TextField.Root invalid={false}>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when <TextField.Root> is invalid', () => {
      cy.mount(
        <TextField.Root invalid={true}>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when <TextField.Root> is not required', () => {
      cy.mount(
        <TextField.Root required={false}>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when <TextField.Root> is required', () => {
      cy.mount(
        <TextField.Root required={true}>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have not attribute data-readonly when <TextField.Root> is not readonly', () => {
      cy.mount(
        <TextField.Root readOnly={false}>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'data-readonly');
    });

    it('should have attribute data-readonly with empty value when <TextField.Root> is readonly', () => {
      cy.mount(
        <TextField.Root readOnly={true}>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-readonly', '');
    });

    it('should have attribute data-qwik-primitives-text-field-error-message with empty value', () => {
      cy.mount(
        <TextField.Root>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-text-field-error-message',
        ''
      );
    });

    it('should have attribute data-scope with value "text-field"', () => {
      cy.mount(
        <TextField.Root>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-scope', 'text-field');
    });

    it('should have attribute data-part with value "error-message"', () => {
      cy.mount(
        <TextField.Root>
          <TextField.ErrorMessage forceMount={true} data-testid={TEXT_FIELD_ERROR_MESSAGE_TESTID} />
        </TextField.Root>
      );
      cy.get(`[data-testid="${TEXT_FIELD_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-part', 'error-message');
    });
  });
});
