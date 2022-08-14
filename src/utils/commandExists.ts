import * as bin from './bin';

export const commandExists = (command: string) => {
  const commands = ['limpar', ...Object.keys(bin)];
  return commands.indexOf(command.split(' ')[0].toLowerCase()) !== -1;
};
