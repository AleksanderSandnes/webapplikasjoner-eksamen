export const validateInput = async (schema, input) => {
  try {
    return await schema.validateAsync({ ...input });
  } catch (error) {
    return error;
  }
};

export const validationError = async (schema, input, res) => {
  const validation = await validateInput(schema, input);
  if (
    validation.isJoi &&
    Array.isArray(validation.details) &&
    validation.details.length > 0
  ) {
    const validationMessages = validation.details.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));
    return res.status(400).json({ message: validationMessages });
  }
  return false;
};
