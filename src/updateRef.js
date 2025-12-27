/* eslint-disable jsdoc/reject-any-type */
/**
 * Updates a React ref with the given value. Supports both function and object refs.
 * @param {import("react").Ref<any>} ref - The React ref to update.
 * @param {any} value - The value to assign to the ref.
 */
export const updateRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  }
  if (typeof ref === "object" && ref !== null) {
    ref.current = value;
  }
};
