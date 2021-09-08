import React from 'react';

export const MainLayout = (Page: React.ComponentType) => {
  const NewPage = () => (
    <>
      <Page />
    </>
  );

  return NewPage;
};
