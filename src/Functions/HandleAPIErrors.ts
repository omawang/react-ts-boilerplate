export const formatAPIErrors = (errors: any) => {
  const finalErrors: { [x: string]: any } = {};
  const keys = Object.keys(errors);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const message = Array.isArray(errors[key]) ? errors[key][0] : errors[key];
    finalErrors[key] = message;
  }

  return finalErrors;
};
