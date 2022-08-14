import React from 'react';
import * as bin from './bin';

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const args = command.split(' ');
  args[0] = args[0].toLowerCase();

  if (args[0] === 'limpar') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (Object.keys(bin).indexOf(args[0]) === -1) {
    setHistory(
      `shell: comando não encontrado: ${args[0]}. Digite 'ajuda' para ver os comandos disponíveis.`,
    );
  } else {
    const output = await bin[args[0]](args.slice(1));
    setHistory(output);
  }

  setCommand('');
};
