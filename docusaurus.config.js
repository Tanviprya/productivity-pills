module.exports = {
  title: 'the productivity book',
  tagline: 'just enough productivity funda to get you started',
  url: 'https://theproductivitybook.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'tanaypratap',
  projectName: 'the-productivity-book',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-49394184-6',
      anonymizeIP: true,
    },
    navbar: {
      title: 'theproductivitybook',
      logo: {
        alt: 'theproductivitybook Logo',
        src: 'img/logo.svg',
      },
      items: [{
        to: 'book/',
        activeBasePath: 'book',
        label: 'Read',
        position: 'left',
      }, ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Book',
        //   items: [{
        //     label: 'Style Guide',
        //     to: 'Book/',
        //   }],
        // },
        // {
        //   title: 'Community',
        //   items: [{
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Productivity Book, Built by Tanay Pratap`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: "chapters",
          routeBasePath: "book",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/tanaypratap/the-productivity-book/tree/master",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};