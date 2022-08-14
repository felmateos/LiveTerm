// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const ajuda = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + ',\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ', ';
    }
  }
  return `Seja bem vindo! Aqui estão todos os comandos disponíveis:
\n${c}\n
[tab]: completa o comando.
[ctrl+l]/limpar: limpa o terminal.\n
Digite 'sumario' para mostrar o sumário.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Abrindo o repositório no GitHub...';
};

// About
export const sobre = async (args: string[]): Promise<string> => {
  return `Oie! Eu sou ${config.name}. 
Seja bem vindo ao meu portfólio!
Mais sobre mim:
'sumario' - pequeno sumário.
'curriculo' - meu currículo.
'readme' - Readme do meu GitHub.`;
};

export const curriculo = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Abrindo meu currículo...';
};

// Donate
/*
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};
*/
// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Abrindo mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Abrindo GitHub...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Abrindo LinkedIn...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Procurando ${args.join(' ')} no Google...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Procurando ${args.join(' ')} no DuckDuckGo...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Uau, sério que você usa o Bing? Procurando ${args.join(' ')} no Bing...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `SProcurando ${args.join(' ')} no Reddit...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `um
monte
de
diretorios
falsos`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Infelizmente não há mais diretórios disponíveis`;
};

export const data = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `Eita, você ainda usa 'vi'? Apenas tente 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' é tão antigo. Que tal 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? muito Nutella. Por que não 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `Sabe de uma coisa? Apenas use o vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permissão recusada: com pequenos poderes vêm... nenhuma responsabilidade? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

    ██████           ████                              ███                             
   ███░░███         ░░███                             ░███                              
  ░███ ░░░   ██████  ░███  █████████████    ██████   ███████    ██████   ██████   █████ 
 ███████    ███░░███ ░███ ░░███░░███░░███  ░░░░░███ ░░░███░    ███░░███ ███░░███ ███░░  
░░░███░    ░███████  ░███  ░███ ░███ ░███   ███████   ░███    ░███████ ░███ ░███░░█████ 
  ░███     ░███░░░   ░███  ░███ ░███ ░███  ███░░███   ░███ ███░███░░░  ░███ ░███ ░░░░███
  █████    ░░██████  █████ █████░███ █████░░████████  ░░█████ ░░██████ ░░██████  ██████ 
 ░░░░░      ░░░░░░  ░░░░░ ░░░░░ ░░░ ░░░░░  ░░░░░░░░    ░░░░░   ░░░░░░   ░░░░░░  ░░░░░░  
                                                                                        
                                                  
Digite 'ajuda' para ver a lista de commandos.
Digite 'sumario' para ver mais sobre mim.
Digite 'repo' ou clique <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">aqui</a></u> para ver o repositório no Github.
`;
};
