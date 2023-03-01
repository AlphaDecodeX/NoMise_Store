import React from 'react';

type Props = {
  name: string,
  img: string
};

const Homepage: React.FC<Props> = (props: Props) => {
  // your component code goes here

  return (
    <div>I am Homepage</div>
  );
};

export {
    Homepage, Props
};