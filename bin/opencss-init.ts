// opencss-init.ts
import * as fs from 'fs';
import * as path from 'path';

// Check if the user wants TypeScript or JavaScript configuration
const isTypeScript = process.argv.includes('--ts') || process.argv.includes('--typescript');

// Define the extension for the configuration file
const fileExtension = isTypeScript ? 'ts' : 'js';

// Define the path to the configuration file
const configFilePath = path.join(process.cwd(), `opencss.config.${fileExtension}`);

// Check if the configuration file already exists
if (!fs.existsSync(configFilePath)) {
    // Define the content for the OpenCSS initialization file
    const opencssConfig = isTypeScript
        ? `import type { Configuration } from 'opencss';

      const config: Configuration = {
        content: ["./src/**/*.{html,js}"],
        theme: {
          extend: {},
        },
        plugins: [],
      };

      export default config;
    `
        : `module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
          extend: {},
        },
        plugins: [],
      };
    `;

    // Write the configuration to the file
    fs.writeFileSync(configFilePath, opencssConfig);

    console.log(`OpenCSS configuration (${fileExtension}) initialized successfully!`);
} else {
    console.log(`OpenCSS configuration file already exists. Skipping initialization.`);
}
