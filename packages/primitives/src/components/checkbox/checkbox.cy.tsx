import { Primitive } from '@/components';
import * as Checkbox from '.';

const CHECKBOX_ROOT_TESTID = 'CHECKBOX_ROOT_TESTID';
const CHECKBOX_INPUT_TESTID = 'CHECKBOX_INPUT_TESTID';
const CHECKBOX_LABEL_TESTID = 'CHECKBOX_LABEL_TESTID';
const CHECKBOX_DESCRIPTION_TESTID = 'CHECKBOX_DESCRIPTION_TESTID';
const CHECKBOX_ERROR_MESSAGE_TESTID = 'CHECKBOX_ERROR_MESSAGE_TESTID';

describe('Checkbox', () => {
  describe('Root', () => {
    it('should be <div> element', () => {
      cy.mount(<Checkbox.Root data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Checkbox.Root as={Primitive.span} data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const CHECKBOX_ROOT_TEXT = 'CHECKBOX_ROOT_TEXT';

      cy.mount(<Checkbox.Root data-testid={CHECKBOX_ROOT_TESTID}>{CHECKBOX_ROOT_TEXT}</Checkbox.Root>);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.text', CHECKBOX_ROOT_TEXT);
    });

    it('should have attribute role with value "group"', () => {
      cy.mount(<Checkbox.Root data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.attr', 'role', 'group');
    });

    it('should have attribute data-state with value "unchecked" by default', () => {
      cy.mount(<Checkbox.Root data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.attr', 'data-state', 'unchecked');
    });

    it('should have attribute data-state with value "unchecked" when is unchecked', () => {
      cy.mount(<Checkbox.Root defaultChecked={false} data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.attr', 'data-state', 'unchecked');
    });

    it('should have attribute data-state with value "checked" when is checked', () => {
      cy.mount(<Checkbox.Root defaultChecked={true} data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.attr', 'data-state', 'checked');
    });

    it('should have attribute data-state with value "indeterminate" when is indeterminate', () => {
      cy.mount(<Checkbox.Root defaultChecked="indeterminate" data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.attr', 'data-state', 'indeterminate');
    });

    it('should have not attribute data-disabled when is not disabled', () => {
      cy.mount(<Checkbox.Root disabled={false} data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when is disabled', () => {
      cy.mount(<Checkbox.Root disabled={true} data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when is not invalid', () => {
      cy.mount(<Checkbox.Root invalid={false} data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when is invalid', () => {
      cy.mount(<Checkbox.Root invalid={true} data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when is not required', () => {
      cy.mount(<Checkbox.Root required={false} data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when is required', () => {
      cy.mount(<Checkbox.Root required={true} data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have attribute data-qwik-primitives-checkbox-root with empty value', () => {
      cy.mount(<Checkbox.Root data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-checkbox-root', '');
    });

    it('should have attribute data-scope with value "checkbox"', () => {
      cy.mount(<Checkbox.Root data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.attr', 'data-scope', 'checkbox');
    });

    it('should have attribute data-part with value "root"', () => {
      cy.mount(<Checkbox.Root data-testid={CHECKBOX_ROOT_TESTID} />);
      cy.get(`[data-testid="${CHECKBOX_ROOT_TESTID}"]`).should('have.attr', 'data-part', 'root');
    });
  });

  describe('Input', () => {
    it('should be <input> element', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'INPUT');
    });

    it('should be not checked when <Checkbox.Root> is unchecked', () => {
      cy.mount(
        <Checkbox.Root defaultChecked={false}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('be.not.checked');
    });

    it('should be checked when <Checkbox.Root> is checked', () => {
      cy.mount(
        <Checkbox.Root defaultChecked={true}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('be.checked');
    });

    it('should be not checked when <Checkbox.Root> is indeterminate', () => {
      cy.mount(
        <Checkbox.Root defaultChecked="indeterminate">
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('be.not.checked');
    });

    it('should have attribute id with value provided via id prop', () => {
      const CHECKBOX_INPUT_ID = 'CHECKBOX_INPUT_ID';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Input id={CHECKBOX_INPUT_ID} data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'id', CHECKBOX_INPUT_ID);
    });

    it('should have attribute id associated with <Checkbox.Label> for attribute when <Checkbox.Root> contains <Checkbox.Label>', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
          <Checkbox.Input id={undefined} data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'for', id));
    });

    it('should have attribute id provided via id prop associated with <Checkbox.Label> for attribute when <Checkbox.Root> contains <Checkbox.Label>', () => {
      const CHECKBOX_INPUT_ID = 'CHECKBOX_INPUT_ID';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
          <Checkbox.Input id={CHECKBOX_INPUT_ID} data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'for', id));
    });

    it('should have attribute name with value provided via <Checkbox.Root> name prop', () => {
      const CHECKBOX_ROOT_NAME = 'CHECKBOX_ROOT_NAME';

      cy.mount(
        <Checkbox.Root name={CHECKBOX_ROOT_NAME}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'name', CHECKBOX_ROOT_NAME);
    });

    it('should have attribute value with value "on" by default', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'value', 'on');
    });

    it('should have attribute value with value provided via <Checkbox.Root> value prop', () => {
      const CHECKBOX_ROOT_VALUE = 'CHECKBOX_ROOT_VALUE';

      cy.mount(
        <Checkbox.Root value={CHECKBOX_ROOT_VALUE}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'value', CHECKBOX_ROOT_VALUE);
    });

    it('should be not disabled when <Checkbox.Root> is not disabled', () => {
      cy.mount(
        <Checkbox.Root disabled={false}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('be.not.disabled');
    });

    it('should be disabled when <Checkbox.Root> is disabled', () => {
      cy.mount(
        <Checkbox.Root disabled={true}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('be.disabled');
    });

    it('should have attribute type with value "checkbox"', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'type', 'checkbox');
    });

    it('should have attribute autocomplete with value "off"', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'autocomplete', 'off');
    });

    it('should have not attribute aria-invalid when <Checkbox.Root> is not invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={false}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.not.attr', 'aria-invalid');
    });

    it('should have attribute aria-invalid with value "true" when <Checkbox.Root> is invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={true}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'aria-invalid', 'true');
    });

    it('should have not attribute aria-required when <Checkbox.Root> is not required', () => {
      cy.mount(
        <Checkbox.Root required={false}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.not.attr', 'aria-required');
    });

    it('should have attribute aria-required with value "true" when <Checkbox.Root> is required', () => {
      cy.mount(
        <Checkbox.Root required={true}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'aria-required', 'true');
    });

    it('should have not attribute aria-labelledby when <Checkbox.Root> not contains <Checkbox.Label>', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.not.attr', 'aria-labelledby');
    });

    it('should have attribute aria-labelledby associated with <Checkbox.Label> id attribute when <Checkbox.Root> contains <Checkbox.Label>', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label id={undefined} data-testid={CHECKBOX_LABEL_TESTID} />
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-labelledby')
        .then((ariaLabelledby) =>
          cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'id', ariaLabelledby)
        );
    });

    it('should have attribute aria-labelledby associated with <Checkbox.Label> id attribute provided via id prop when <Checkbox.Root> contains <Checkbox.Label>', () => {
      const CHECKBOX_LABEL_ID = 'CHECKBOX_LABEL_ID';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label id={CHECKBOX_LABEL_ID} data-testid={CHECKBOX_LABEL_TESTID} />
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-labelledby')
        .then((ariaLabelledby) =>
          cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'id', ariaLabelledby)
        );
    });

    it('should have not attribute aria-describedby when <Checkbox.Root> not contains <Checkbox.Description>', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
    });

    it('should have attribute aria-describedby associated with <Checkbox.Description> id attribute when <Checkbox.Root> contains <Checkbox.Description>', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
          <Checkbox.Description id={undefined} data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
    });

    it('should have attribute aria-describedby associated with <Checkbox.Description> id attribute provided via id prop when <Checkbox.Root> contains <Checkbox.Description>', () => {
      const CHECKBOX_DESCRIPTION_ID = 'CHECKBOX_DESCRIPTION_ID';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
          <Checkbox.Description id={CHECKBOX_DESCRIPTION_ID} data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
    });

    it('should have not attribute aria-describedby when <Checkbox.Root> is not invalid and <Checkbox.Root> not contains <Checkbox.ErrorMessage>', () => {
      cy.mount(
        <Checkbox.Root invalid={false}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.not.attr', 'aria-describedby');
    });

    it('should have attribute aria-describedby associated with <Checkbox.ErrorMessage> id attribute when <Checkbox.Root> is invalid and <Checkbox.Root> contains <Checkbox.ErrorMessage>', () => {
      cy.mount(
        <Checkbox.Root invalid={true}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
          <Checkbox.ErrorMessage id={undefined} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
    });

    it('should have attribute aria-describedby associated with <Checkbox.ErrorMessage> id attribute provided via id prop when <Checkbox.Root> is invalid and <Checkbox.Root> contains <Checkbox.ErrorMessage>', () => {
      const CHECKBOX_ERROR_MESSAGE_ID = 'CHECKBOX_ERROR_MESSAGE_ID';

      cy.mount(
        <Checkbox.Root invalid={true}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
          <Checkbox.ErrorMessage id={CHECKBOX_ERROR_MESSAGE_ID} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`)
        .invoke('attr', 'aria-describedby')
        .then((ariaDescribedby) =>
          cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'id', ariaDescribedby)
        );
    });

    it('should have attribute data-state with value "unchecked" when <Checkbox.Root> is unchecked', () => {
      cy.mount(
        <Checkbox.Root defaultChecked={false}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'data-state', 'unchecked');
    });

    it('should have attribute data-state with value "checked" when <Checkbox.Root> is checked', () => {
      cy.mount(
        <Checkbox.Root defaultChecked={true}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'data-state', 'checked');
    });

    it('should have attribute data-state with value "indeterminate" when <Checkbox.Root> is indeterminate', () => {
      cy.mount(
        <Checkbox.Root defaultChecked="indeterminate">
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'data-state', 'indeterminate');
    });

    it('should have not attribute data-disabled when <Checkbox.Root> is not disabled', () => {
      cy.mount(
        <Checkbox.Root disabled={false}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Checkbox.Root> is disabled', () => {
      cy.mount(
        <Checkbox.Root disabled={true}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when <Checkbox.Root> is not invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={false}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when <Checkbox.Root> is invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={true}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when <Checkbox.Root> is not required', () => {
      cy.mount(
        <Checkbox.Root required={false}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when <Checkbox.Root> is required', () => {
      cy.mount(
        <Checkbox.Root required={true}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have attribute data-qwik-primitives-checkbox-input with empty value', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'data-qwik-primitives-checkbox-input', '');
    });

    it('should have attribute data-scope with value "checkbox"', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'data-scope', 'checkbox');
    });

    it('should have attribute data-part with value "input"', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'data-part', 'input');
    });
  });

  describe('Label', () => {
    it('should be <label> element', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'LABEL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label as={Primitive.span} data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'LABEL');
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should contain passed children', () => {
      const CHECKBOX_LABEL_TEXT = 'CHECKBOX_LABEL_TEXT';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID}>{CHECKBOX_LABEL_TEXT}</Checkbox.Label>
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.text', CHECKBOX_LABEL_TEXT);
    });

    it('should have attribute for with value provided via for prop', () => {
      const CHECKBOX_LABEL_FOR = 'CHECKBOX_LABEL_FOR';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label for={CHECKBOX_LABEL_FOR} data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'for', CHECKBOX_LABEL_FOR);
    });

    it('should have not attribute for when <Checkbox.Root> not contains <Checkbox.Input>', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.not.attr', 'for');
    });

    it('should have attribute for associated with <Checkbox.Input> id attribute when <Checkbox.Root> contains <Checkbox.Input>', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
          <Checkbox.Input id={undefined} data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`)
        .invoke('attr', 'for')
        .then((htmlFor) => cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'id', htmlFor));
    });

    it('should have attribute for associated with <Checkbox.Input> id attribute provided via id prop when <Checkbox.Root> contains <Checkbox.Input>', () => {
      const CHECKBOX_INPUT_ID = 'CHECKBOX_INPUT_ID';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
          <Checkbox.Input id={CHECKBOX_INPUT_ID} data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`)
        .invoke('attr', 'for')
        .then((htmlFor) => cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'id', htmlFor));
    });

    it('should have attribute id with value provided via id prop', () => {
      const CHECKBOX_LABEL_ID = 'CHECKBOX_LABEL_ID';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label id={CHECKBOX_LABEL_ID} data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'id', CHECKBOX_LABEL_ID);
    });

    it('should have attribute id associated with <Checkbox.Input> aria-labelledby attribute when <Checkbox.Root> contains <Checkbox.Input>', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
          <Checkbox.Input id={undefined} data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'aria-labelledby', id));
    });

    it('should have attribute id provided via id prop associated with <Checkbox.Input> aria-labelledby attribute when <Checkbox.Root> contains <Checkbox.Input>', () => {
      const CHECKBOX_LABEL_ID = 'CHECKBOX_LABEL_ID';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label id={CHECKBOX_LABEL_ID} data-testid={CHECKBOX_LABEL_TESTID} />
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'aria-labelledby', id));
    });

    it('should prevent text selection when double clicking', () => {
      const CHECKBOX_LABEL_TEXT = 'CHECKBOX_LABEL_TEXT';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID}>{CHECKBOX_LABEL_TEXT}</Checkbox.Label>
        </Checkbox.Root>
      );
      cy.get(`[data-testid=${CHECKBOX_LABEL_TESTID}]`).realClick({ clickCount: 2 });
      cy.window().then((window) => expect(window.getSelection()?.toString()).to.eq(''));
    });

    it('should have attribute data-state with value "unchecked" when <Checkbox.Root> is unchecked', () => {
      cy.mount(
        <Checkbox.Root defaultChecked={false}>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'data-state', 'unchecked');
    });

    it('should have attribute data-state with value "checked" when <Checkbox.Root> is checked', () => {
      cy.mount(
        <Checkbox.Root defaultChecked={true}>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'data-state', 'checked');
    });

    it('should have attribute data-state with value "indeterminate" when <Checkbox.Root> is indeterminate', () => {
      cy.mount(
        <Checkbox.Root defaultChecked="indeterminate">
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'data-state', 'indeterminate');
    });

    it('should have not attribute data-disabled when <Checkbox.Root> is not disabled', () => {
      cy.mount(
        <Checkbox.Root disabled={false}>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Checkbox.Root> is disabled', () => {
      cy.mount(
        <Checkbox.Root disabled={true}>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when <Checkbox.Root> is not invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={false}>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when <Checkbox.Root> is invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={true}>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when <Checkbox.Root> is not required', () => {
      cy.mount(
        <Checkbox.Root required={false}>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when <Checkbox.Root> is required', () => {
      cy.mount(
        <Checkbox.Root required={true}>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have attribute data-qwik-primitives-checkbox-label with empty value', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'data-qwik-primitives-checkbox-label', '');
    });

    it('should have attribute data-scope with value "checkbox"', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'data-scope', 'checkbox');
    });

    it('should have attribute data-part with value "label"', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Label data-testid={CHECKBOX_LABEL_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_LABEL_TESTID}"]`).should('have.attr', 'data-part', 'label');
    });
  });

  describe('Description', () => {
    it('should be <span> element', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Description as={Primitive.div} data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const CHECKBOX_DESCRIPTION_TEXT = 'CHECKBOX_DESCRIPTION_TEXT';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID}>
            {CHECKBOX_DESCRIPTION_TEXT}
          </Checkbox.Description>
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.text', CHECKBOX_DESCRIPTION_TEXT);
    });

    it('should have attribute id with value provided via id prop', () => {
      const CHECKBOX_DESCRIPTION_ID = 'CHECKBOX_DESCRIPTION_ID';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Description id={CHECKBOX_DESCRIPTION_ID} data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.attr', 'id', CHECKBOX_DESCRIPTION_ID);
    });

    it('should have attribute id associated with <Checkbox.Input> aria-describedby attribute', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Description id={undefined} data-testid={CHECKBOX_DESCRIPTION_TESTID} />
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'aria-describedby', id));
    });

    it('should have attribute id provided via id prop associated with <Checkbox.Input> aria-describedby attribute', () => {
      const CHECKBOX_DESCRIPTION_ID = 'CHECKBOX_DESCRIPTION_ID';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.Description id={CHECKBOX_DESCRIPTION_ID} data-testid={CHECKBOX_DESCRIPTION_TESTID} />
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'aria-describedby', id));
    });

    it('should have attribute data-state with value "unchecked" when <Checkbox.Root> is unchecked', () => {
      cy.mount(
        <Checkbox.Root defaultChecked={false}>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-state', 'unchecked');
    });

    it('should have attribute data-state with value "checked" when <Checkbox.Root> is checked', () => {
      cy.mount(
        <Checkbox.Root defaultChecked={true}>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-state', 'checked');
    });

    it('should have attribute data-state with value "indeterminate" when <Checkbox.Root> is indeterminate', () => {
      cy.mount(
        <Checkbox.Root defaultChecked="indeterminate">
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-state', 'indeterminate');
    });

    it('should have not attribute data-disabled when <Checkbox.Root> is not disabled', () => {
      cy.mount(
        <Checkbox.Root disabled={false}>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Checkbox.Root> is disabled', () => {
      cy.mount(
        <Checkbox.Root disabled={true}>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when <Checkbox.Root> is not invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={false}>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when <Checkbox.Root> is invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={true}>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when <Checkbox.Root> is not required', () => {
      cy.mount(
        <Checkbox.Root required={false}>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when <Checkbox.Root> is required', () => {
      cy.mount(
        <Checkbox.Root required={true}>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have attribute data-qwik-primitives-checkbox-description with empty value', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-checkbox-description',
        ''
      );
    });

    it('should have attribute data-scope with value "checkbox"', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-scope', 'checkbox');
    });

    it('should have attribute data-part with value "description"', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.Description data-testid={CHECKBOX_DESCRIPTION_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_DESCRIPTION_TESTID}"]`).should('have.attr', 'data-part', 'description');
    });
  });

  describe('ErrorMessage', () => {
    it('should be <span> element', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.ErrorMessage as={Primitive.div} forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`)
        .should('have.prop', 'tagName')
        .should('not.eq', 'SPAN');
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should contain passed children', () => {
      const CHECKBOX_ERROR_MESSAGE_TEXT = 'CHECKBOX_ERROR_MESSAGE_TEXT';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID}>
            {CHECKBOX_ERROR_MESSAGE_TEXT}
          </Checkbox.ErrorMessage>
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.text', CHECKBOX_ERROR_MESSAGE_TEXT);
    });

    it('should not exist when is not forceMount and <Checkbox.Root> is not invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={false}>
          <Checkbox.ErrorMessage forceMount={false} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('not.exist');
    });

    it('should exist when is not forceMount and <Checkbox.Root> is invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={true}>
          <Checkbox.ErrorMessage forceMount={false} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('exist');
    });

    it('should exist when is forceMount and <Checkbox.Root> is not invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={false}>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('exist');
    });

    it('should exist when is forceMount and <Checkbox.Root> is invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={true}>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('exist');
    });

    it('should have not attribute aria-hidden when is forceMount and <Checkbox.Root> is invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={true}>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'aria-hidden');
    });

    it('should have attribute aria-hidden with value "true" when is forceMount and <Checkbox.Root> is not invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={false}>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'aria-hidden', 'true');
    });

    it('should have attribute id with value provided via id prop', () => {
      const CHECKBOX_ERROR_MESSAGE_ID = 'CHECKBOX_ERROR_MESSAGE_ID';

      cy.mount(
        <Checkbox.Root>
          <Checkbox.ErrorMessage
            id={CHECKBOX_ERROR_MESSAGE_ID}
            forceMount={true}
            data-testid={CHECKBOX_ERROR_MESSAGE_TESTID}
          />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'id', CHECKBOX_ERROR_MESSAGE_ID);
    });

    it('should have not attribute id associated with <Checkbox.Input> aria-describedby attribute when <Checkbox.Root> is not invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={false}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
          <Checkbox.ErrorMessage id={undefined} forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.not.attr', 'aria-describedby', id)
        );
    });

    it('should have not attribute id provided via id prop associated with <Checkbox.Input> aria-describedby attribute when <Checkbox.Root> is not invalid', () => {
      const CHECKBOX_ERROR_MESSAGE_ID = 'CHECKBOX_ERROR_MESSAGE_ID';

      cy.mount(
        <Checkbox.Root invalid={false}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
          <Checkbox.ErrorMessage
            id={CHECKBOX_ERROR_MESSAGE_ID}
            forceMount={true}
            data-testid={CHECKBOX_ERROR_MESSAGE_TESTID}
          />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) =>
          cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.not.attr', 'aria-describedby', id)
        );
    });

    it('should have attribute id associated with <Checkbox.Input> aria-describedby attribute when <Checkbox.Root> is invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={true}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
          <Checkbox.ErrorMessage id={undefined} forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'aria-describedby', id));
    });

    it('should have attribute id provided via id prop associated with <Checkbox.Input> aria-describedby attribute when <Checkbox.Root> is invalid', () => {
      const CHECKBOX_ERROR_MESSAGE_ID = 'CHECKBOX_ERROR_MESSAGE_ID';

      cy.mount(
        <Checkbox.Root invalid={true}>
          <Checkbox.Input data-testid={CHECKBOX_INPUT_TESTID} />
          <Checkbox.ErrorMessage
            id={CHECKBOX_ERROR_MESSAGE_ID}
            forceMount={true}
            data-testid={CHECKBOX_ERROR_MESSAGE_TESTID}
          />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`)
        .invoke('attr', 'id')
        .then((id) => cy.get(`[data-testid="${CHECKBOX_INPUT_TESTID}"]`).should('have.attr', 'aria-describedby', id));
    });

    it('should have attribute data-state with value "unchecked" when <Checkbox.Root> is unchecked', () => {
      cy.mount(
        <Checkbox.Root defaultChecked={false}>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-state', 'unchecked');
    });

    it('should have attribute data-state with value "checked" when <Checkbox.Root> is checked', () => {
      cy.mount(
        <Checkbox.Root defaultChecked={true}>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-state', 'checked');
    });

    it('should have attribute data-state with value "indeterminate" when <Checkbox.Root> is indeterminate', () => {
      cy.mount(
        <Checkbox.Root defaultChecked="indeterminate">
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-state', 'indeterminate');
    });

    it('should have not attribute data-disabled when <Checkbox.Root> is not disabled', () => {
      cy.mount(
        <Checkbox.Root disabled={false}>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'data-disabled');
    });

    it('should have attribute data-disabled with empty value when <Checkbox.Root> is disabled', () => {
      cy.mount(
        <Checkbox.Root disabled={true}>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-disabled', '');
    });

    it('should have not attribute data-invalid when <Checkbox.Root> is not invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={false}>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'data-invalid');
    });

    it('should have attribute data-invalid with empty value when <Checkbox.Root> is invalid', () => {
      cy.mount(
        <Checkbox.Root invalid={true}>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-invalid', '');
    });

    it('should have not attribute data-required when <Checkbox.Root> is not required', () => {
      cy.mount(
        <Checkbox.Root required={false}>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.not.attr', 'data-required');
    });

    it('should have attribute data-required with empty value when <Checkbox.Root> is required', () => {
      cy.mount(
        <Checkbox.Root required={true}>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-required', '');
    });

    it('should have attribute data-qwik-primitives-checkbox-error-message with empty value', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should(
        'have.attr',
        'data-qwik-primitives-checkbox-error-message',
        ''
      );
    });

    it('should have attribute data-scope with value "checkbox"', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-scope', 'checkbox');
    });

    it('should have attribute data-part with value "error-message"', () => {
      cy.mount(
        <Checkbox.Root>
          <Checkbox.ErrorMessage forceMount={true} data-testid={CHECKBOX_ERROR_MESSAGE_TESTID} />
        </Checkbox.Root>
      );
      cy.get(`[data-testid="${CHECKBOX_ERROR_MESSAGE_TESTID}"]`).should('have.attr', 'data-part', 'error-message');
    });
  });
});
