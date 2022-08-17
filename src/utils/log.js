import chalk from 'chalk';

export const logInfo = (text) => {
  // eslint-disable-next-line no-console
  console.log(text);
};

export const logWarning = (text) => {
  // eslint-disable-next-line no-console
  console.warn(chalk.yellow(text));
};

export const logError = (text) => {
  // eslint-disable-next-line no-console
  console.error(chalk.red(text));
};
