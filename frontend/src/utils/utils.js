export const isAsync = (fn) => {
  const AsyncFunction = (async () => {}).constructor;

  return fn instanceof AsyncFunction === true;
};
