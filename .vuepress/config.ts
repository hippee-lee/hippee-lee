const markdownItAttrs = require("markdown-it-attrs");
const markdownItInclude = require("markdown-it-include");
const { config } = require("vuepress-theme-hope");

module.exports = config(
    {
        title: "Hello. 👋🏼. I'm Matt.",
        description: "This is my digital playground.",

        base: "/vuepress-theme-hope-template/",

        dest: './dist',

        themeConfig: {
            logo: "/logo.svg",
            lastUpdated: true,
            searchMaxSuggestions: 10,
            sidebar: ["/", "/posts/introspection", ["/posts/technospection"]],
            typescript: false
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
                permalinkAttrs: slug => ({ "aria-label": `permalink to ${slug}` })
            }
        },
        extraWatchFiles: [
            ".vuepress/sidebar.js",
            ".vuepress/blocks.js",
            ".vuepress/public/**"
        ],

        // If you need to configure any plugins etc, this is the call to do so
        configureWebpack(config) {},
        plugins: [
            "vuepress-plugin-table-of-contents",
            "@vuepress/active-header-links",
            "@vuepress/last-updated",
            [
                "@vuepress/pwa",
                {
                    serviceWorker: true,
                    updatePopup: true
                }
            ],
            "vuepress-plugin-smooth-scroll",
            [
                "vuepress-plugin-sitemap",
                {
                    hostname: "https://hippeelee.info",
                    outFile: "sitemap.xml",
                    changefreq: "weekly"
                }
            ],
            [
                "@vuepress/google-analytics",
                {
                    ga: ""
                }
            ],
            [
                "vuepress-plugin-clean-urls",
                {
                    normalSuffix: "/",
                    indexSuffix: "/",
                    notFoundPath: "/404.html"
                }
            ],
            [
                "robots",
                {
                    allowAll: true,
                    host: "https://socalranch.land",
                    sitemap: "/sitemap.xml",
                    policies: [
                        {
                            userAgent: "*"
                        }
                    ]
                }
            ]
        ]
    }
);
