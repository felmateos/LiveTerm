import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
    return `
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀            Sumário
    ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠛⠉⠙⠛⠛⠛⠛⠻⢿⣿⣷⡀⠀⠀⠀⠀⠀          
    ⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠋⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠈⢻⣿⣿⡄⠀⠀⠀⠀            -----------
    ⠀⠀⠀⠀⠀⠀⠀⣸⣿⡏⠀⠀⠀⣠⣶⣾⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣄⠀⠀⠀         
    ⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⢰⣿⣿⣯⠁⠀⠀⠀⠀ ⠀⠀⠀⠈⠙⢿⣷⡄⠀             SOBRE
     ⠀⠀⣀⣤⣴⣾⣿⣿⠀⠀⠀⢸⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⣿⣿               ${config.name}
    ⠀⢰⣿⡟⠋⠉⣹⣿⡇⠀⠀⠀⠘⣿⣿⣿⣿⣷⣦⣤⣤⣤⣶⣶⣶⣶⣿⣿⠀               <u><a href="${config.resume_url}" target="_blank">currículo</a></u>
    ⠀⢸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀         
    ⠀⣸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠉⠻⠿⣿⣿⣿⣿⡿⠿⠿⠛⢻⣿⡇⠀⠀               -----------
    ⠀⣿⣿⠁⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⢸⣿⣧⠀⠀          
    ⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⢸⣿⣿⠀⠀                  CONTATO
    ⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⢸⣿⣿⠀⠀                   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
    ⠀⢿⣿⡆⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⢸⣿⡟⠀⠀                   爵 <u><a href="https://twitter.com/${config.social.twitter}" target="_blank">twitter.com/${config.social.twitter}</a></u>
    ⠀⠸⣿⣧⡀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⢸⣿⡇⠀⠀                     <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ⠀⠀⠛⢿⣿⣿⣿⣿⣇⠀⠀⠀⠀ ⠀⣰⣿⣿⣿⣿⣷⣶⣶⠶ ⢠⣿⡿⠀⠀⠀         
    ⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀ ⠀⣿⣿⡇⠀⣽⣿⡏⠁⠀⠀ ⢸⣿⡇⠀⠀⠀                      -----------
    ⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀ ⣿⣿⡇⠀⢹⣿⡆⠀⠀  ⣸⣿⠇⠀⠀⠀         
    ⠀⠀⠀⠀⠀⠀⠀⢿⣿⣦⣄⣀⣠⣴⣿⣿⠁⠀⠈⠻⣿⣿⣿⣿⡿⠏⠀⠀⠀⠀                          PROJETOS 
    ⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⠿⠿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                             <u><a href="${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
`;
  }

export default sumfetch;
