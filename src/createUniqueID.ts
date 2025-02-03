const createUniqueID = () => {
  return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
};

export default createUniqueID;
