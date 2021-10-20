import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { CONTACT } from 'API/constants/page-names';

import { FullWidthContainer } from 'Components';
import { Card } from 'Atoms';

const ContactPage: FunctionComponent<Page> = ({
  className: parentClasses,
}: {
  className: string;
}) => {
  return (
    <FullWidthContainer
      id={CONTACT}
      className={classnames('pb-5 bg-center bg-no-repeat', parentClasses)}
    >
      {({ ChildContainer }) => (
        <ChildContainer className="flex items-center justify-center h-full text-center">
          <Card className="w-5/6 md:w-3/5 lg:w-1/2">
            <p className="p-3 font-exon text-scale-6">
              {'getQuote(quoteBlock)'}
            </p>
          </Card>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default ContactPage;
