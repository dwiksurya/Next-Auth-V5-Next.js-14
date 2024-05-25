import * as React from 'react';

interface EmailTemplateProps {
  confirmLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  confirmLink,
}) => (
  <div>
    Click <a href={confirmLink}>here</a> to cinfirm email!
  </div>
);
