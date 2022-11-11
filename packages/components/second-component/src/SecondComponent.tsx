import React from 'react';
import { FirstComponent } from '@myrealtrip/web-ui-first-component';

export interface SecondComponentProps {
  name: string;
  description: string;
  title: string;
}

export const SecondComponent: React.FC<SecondComponentProps> = ({ name, description, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <FirstComponent name={name} description={description} />
    </div>
  );
};
