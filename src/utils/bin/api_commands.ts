// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

export const projetos = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const citacao = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Abrindo GitHub README...\n
  ${readme}`;
};

export const clima = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usagem: clima [cidade]. Exemplo: clima São Paulo';
  }
  const weather = await getWeather(city);
  return weather;
};
