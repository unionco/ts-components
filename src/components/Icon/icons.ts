
export const getIcon = async (key: string) => {
  const icon = await import(`../../lib/svgs/${key}.svg`);
  if (icon) {
    return icon.default;
  }
  return null;
};
