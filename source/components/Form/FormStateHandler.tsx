import React, { FunctionComponent } from 'react';

import EmptyView from './states/FormEmpty';
import FailedView from './states/FormFailure';
// import LoadingView from './FormLoading';
import SuccessView from './states/FormSuccess';
import { FormStateProps, FormStateSwitcher } from './types';
import { FormStatus } from 'API/hooks/forms';

export const FormSwitcher = <Props extends FormStateProps<any>>({
  FormEdit,
  FormEmpty = EmptyView,
  FormFailure = FailedView,
  // FormLoading = LoadingView,
  FormSuccess = SuccessView,
}: FormStateSwitcher<Props>): FunctionComponent<Props> => {
  return (props: Props) => {
    const { status } = props;

    switch (status) {
      case FormStatus.EMPTY:
        return <FormEmpty {...props} />;
      case FormStatus.ERROR:
        return <FormFailure {...props} />;
      // case FormStatus.LOADING:
      //   return <FormLoading {...props} />;
      case FormStatus.READY:
        return <FormEdit {...props} />;
      case FormStatus.SUCCESS:
        return <FormSuccess {...props} />;
      default:
        return <FormEmpty {...props} />;
    }
  };
};
