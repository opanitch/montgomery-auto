import { RegexType } from 'Components/Form/form-helpers';

export type LabelProps = JSX.IntrinsicElements['label'] & {
  htmlFor: string;
  required?: boolean;
  text: string;
};

export type InputProps = JSX.IntrinsicElements['input'] & {
  disabled?: boolean;
  errorText?: string;
  id: string;
  labelPosition?: string;
  labelText?: string;
  regex?: RegexType;
  type: 'text' | 'email' | 'tel';
};

export type NumberInputProps = Omit<InputProps, 'type'> & {
  type?: 'number';
};

export type TextAreaInputProps = JSX.IntrinsicElements['textarea'] & {
  errorText?: string;
  id: string;
  labelPosition?: string;
  labelText?: string;
  type?: 'text';
};
