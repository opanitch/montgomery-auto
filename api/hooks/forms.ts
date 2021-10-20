import { useCallback, useState } from 'react';

export enum FormStatus {
  EMPTY = 'EMPTY',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  READY = 'READY',
  SUCCESS = 'SUCCESS',
}

interface FormStatusAction {
  status: FormStatus;
  updateFormStatus: (status: FormStatus) => void;
}

export const useFormStatus = (): FormStatusAction => {
  const [formStatus, setFormStatus] = useState(FormStatus.EMPTY);

  const updateFormStatus = useCallback((status) => setFormStatus(status), []);

  return {
    status: formStatus as FormStatus,
    updateFormStatus,
  };
};
