const consoleMethods = {
  log: 'log',
  warn: 'warn',
  error: 'error',
};

// eslint-disable-next-line no-console
const log = (method) => (text) => console[method](text);

export const logInfo = log(consoleMethods.log);

export const logWarning = log(consoleMethods.warn);

export const logError = log(consoleMethods.error);
