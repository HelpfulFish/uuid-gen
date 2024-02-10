const handleWithQuotes = (withQuotes: boolean, ids: string[]): string[] => {
  return ids.map((u) => {
    return withQuotes ? `"${u}"` : u;
  });
};

const handleWithBlockCopy = (withBlockCopy: boolean, ids: string[]): string[] => {
  return ids.map((u) => {
    return withBlockCopy ? `${u},\n` : `${u},`;
  });
};

const handleArrayToString = (ids: string[]): string => {
  if (ids.length === 0) return ""; // handle empty array case

  // Remove ",\n" from the last item
  const lastItem = ids[ids.length - 1].replace(/,\s*$/, "");

  // Join the array elements with a space
  return [...ids.slice(0, -1), lastItem].join(" ");
};

export { handleWithQuotes, handleWithBlockCopy, handleArrayToString };
