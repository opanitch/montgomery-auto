import * as NODE_NAMES from 'CONSTANTS/node-names';

type FormValuesType = {
  [key: string]: string;
};

export type FormInputsType = HTMLInputElement | HTMLTextAreaElement;

export enum RegexType {
  EMAIL = 'EMAIL',
  NAME = 'NAME',
  PHONE = 'PHONE',
}

interface RegExpConstructorArgs {
  pattern: string;
  flags?: string;
}
export const dictionary: Map<RegexType, RegExpConstructorArgs> = new Map();
dictionary.set(RegexType.EMAIL, {
  flags: 'g',
  /* eslint-disable-next-line */
  pattern: `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`,
});
dictionary.set(RegexType.NAME, {
  flags: 'gu',
  pattern: `/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u`,
});
dictionary.set(RegexType.PHONE, {
  flags: 'g',
  /* eslint-disable-next-line */
  pattern: `/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/`,
});

export const createRegExp = (key: string, flags = ''): RegExp => {
  if (key.charAt(0) === '/') return new RegExp(key);

  const dictionaryKey = dictionary.get(key as RegexType);

  return new RegExp(
    (dictionaryKey &&
      (dictionaryKey.pattern, (!!flags && flags) || dictionaryKey?.flags)) ||
      /* eslint-disable-next-line */
      (!!flags && (key, flags)) ||
      key
  );
};

export const getFormDefaultValues = (form: HTMLFormElement): FormValuesType => {
  const formInputs = getFormInputs(form) as FormInputsType[];

  // Construct Object of form values based on { `id`: `value` } pairing.
  return formInputs.reduce(
    (values, input) => ({ ...values, [input.id]: input.defaultValue }),
    {}
  );
};

export const getFormInputs = (form: HTMLFormElement): Element[] => {
  const formInputs = Array.from(form.elements).filter((element) => {
    // Filter out all elements that are not Input Types
    return (
      element.nodeName === NODE_NAMES.INPUT ||
      element.nodeName === NODE_NAMES.TEXTAREA
    );
  });

  return formInputs;
};

export const getFormValues = (form: HTMLFormElement): FormValuesType => {
  const formInputs = getFormInputs(form) as FormInputsType[];

  // Construct Object of form values based on { `id`: `value` } pairing.
  return formInputs.reduce(
    (values, input) => ({ ...values, [input.id]: input.value }),
    {}
  );
};

export const getRegExpPattern = (
  key: RegexType
): RegExpConstructorArgs['pattern'] | undefined => {
  const dictionaryKey = dictionary.get(key as RegexType);

  return dictionaryKey && dictionaryKey.pattern;
};
