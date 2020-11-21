const markdownItAttrs = require('markdown-it-attrs');
const markdownItInclude = require('markdown-it-include');

module.exports = {
    title: 'Hello. 👋🏼. I\'m Matt.',
    description: 'This is my playground.',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#0065ab' }],
        ['meta', { name: 'charset', content: 'utf-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width,minimum-scale=1,initial-scale=1' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
        ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
        ['meta', { name: 'background_color', content: '#ffffff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/images/icons/icon-152x152.png' }],
    ],
    dest: '../../dist/website',
    themeConfig: {
        searchMaxSuggestions: 10,
        lastUpdated: true,
    },
    markdown: {
        extendMarkdown: md => {
            md.use(markdownItAttrs);
            md.use(markdownItInclude);
        },
        anchor: {
            permalink: true,
            permalinkBefore: false,
            permalinkSymbol: '<cds-icon shape="link" aria-hidden="true"></cds-icon>',
            permalinkAttrs: (slug) => ({"aria-label": `permalink to ${slug}`})
        },
    },
    extraWatchFiles: ['.vuepress/sidebar.js', '.vuepress/blocks.js', '.vuepress/public/**'],

    // If you need to configure any plugins etc, this is the call to do so
    configureWebpack(config) {

    },
    plugins: [
        'vuepress-plugin-table-of-contents',
        '@vuepress/active-header-links',
        '@vuepress/last-updated',
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true,
            },
        ],
        'vuepress-plugin-smooth-scroll',
        [
            'vuepress-plugin-sitemap',
            {
                hostname: 'https://hippeelee.info',
                outFile: 'sitemap.xml',
                changefreq: 'weekly',
            },
        ],
        [
            '@vuepress/google-analytics',
            {
                ga: '',
            },
        ],
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
        [
            'robots',
            {
                allowAll: true,
                host: 'https://socalranch.land',
                sitemap: '/sitemap.xml',
                policies: [
                    {
                        userAgent: '*',
                    },
                ],
            },
        ],
    ],
}