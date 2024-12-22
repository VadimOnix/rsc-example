'use server';

export const ServerComponent = async () => {
  return (
    <div>
      Server Component: {Date.now()}
    </div>
  );
};
