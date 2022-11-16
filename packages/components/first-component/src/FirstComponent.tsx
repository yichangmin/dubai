import React from 'react';

export interface FirstComponentProps {
  name: string;
  description: string;
}

export const FirstComponent: React.FC<FirstComponentProps> = ({ name, description }) => {
  console.log('test11');
  return (
    <div>
      <p>{name}</p>
      <p>{`description! : ${description}`}</p>
    </div>
  );
};
