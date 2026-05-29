export const combineClassNames = (...classNames: (string | undefined)[]) => {
  return classNames
    .map((cls) => cls?.trim())
    .filter((cls) => cls)
    .join(' ');
};
