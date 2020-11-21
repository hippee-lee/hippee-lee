const path = require('path');

const projectRoot = process.cwd();
const alias = path.resolve(projectRoot, 'src');
console.log(alias);

module.exports = {
    // If you need to configure any plugins etc, this is the call to do so
    configureWebpack(config) {
        // Solely to speed up Vuepress, reenable if you need to debug your setup
        config.devtool = false;
        // Match standard Vue CLI aliasing
        config.resolve.alias['@'] = alias;
    },
    plugins: [
        ['vuepress-plugin-typescript', {
            tsLoaderOptions: {
                // Vuepress compilation is ridiculously slow without this, type checking belongs in development not documentation anyway
                transpileOnly: true,
                compilerOptions: {
                    // Vuepress needs an older target (as opposed to esnext) to correctly transpile optional chaining and nullish coalescing
                    'target': 'es2020',
                },
            },
        }],
    ],
}