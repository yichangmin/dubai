import React from 'react';

export interface FirstComponentProps {
  name: string;
  description: string;
}

export const FirstComponent: React.FC<FirstComponentProps> = ({ name, description }) => {
  console.log('test');
  console.log('test2');
  console.log('test3');
  console.log('test4');
  return (
    <div>
      <p>{name}</p>
      <p>{`description! : ${description}`}</p>
    </div>
  );
};
