import React from 'react';
import { FirstComponent } from '@yichangmin/web-ui-first-component';

export interface SecondComponentProps {
  name: string;
  description: string;
  title: string;
}

export const SecondComponent: React.FC<SecondComponentProps> = ({ name, description, title }) => {
  console.log('test2');
  return (
    <div>
      <h1>{title}</h1>
      <FirstComponent name={name} description={description} />
    </div>
  );
};
