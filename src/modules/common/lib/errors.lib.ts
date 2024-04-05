/**
 * Handles fetch error response to extract error message.
 * @param defaultMessage The default error message.
 * @param response The response object containing error information.
 * @returns The error message extracted from the response.
 */
export const handleFetchError = async (defaultMessage: string, response: Response): Promise<string> => {
  const errorResponse = await response.json();
  if (errorResponse.error && errorResponse.error.message) {
    defaultMessage = errorResponse.error.message;
  }
  return defaultMessage;
};

/**
 * Extracts error message from an error object.
 * @param defaultMessage The default error message.
 * @param error The error object from which to extract the message.
 * @returns The error message extracted from the error object.
 */
export const extractErrorMessage = (defaultMessage: string, error: unknown): string => {
  let errorMessage = defaultMessage;
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  return errorMessage;
};
