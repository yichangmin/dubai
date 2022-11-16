import React from 'react';

export interface FirstComponentProps {
  name: string;
  description: string;
}

export const FirstComponent: React.FC<FirstComponentProps> = ({ name, description }) => {
  console.log('test');
  console.log('ttest');
  console.log('test3');
  return (
    <div>
      <p>{name}</p>
      <p>{`description! : ${description}`}</p>
    </div>
  );
};
