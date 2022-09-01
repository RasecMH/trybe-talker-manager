const validateFieldLength = (field, n) => {
  if (field.length < n) return false;
  if (!field) return false;
  return true;
};

const validateIntField = (field, n) => {
  if (field < n) return false;
  if (!field) return false;
  return true;
};

module.exports = { validateFieldLength, validateIntField };