export const generateHeader = (key: string) => {
  return {
    authorization: `Bearer ${key}`,
  };
};
