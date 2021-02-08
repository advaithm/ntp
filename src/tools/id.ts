export const makeId = (length?: number) => {
  let a = '';

  for (let i = 0; i < (length || 5); i++) {
    a += Math.random().toString(16).slice(2, 8);
  }

  return a;
};
