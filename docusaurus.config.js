module.exports = {
  title: 'the productivity book',
  tagline: 'just enough productivity funda to get you started',
  url: 'https://theproductivitybook.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'tanaypratap', // Usually your GitHub org/user name.
  projectName: 'the-productivity-book', // Usually your repo name.
  themeConfig: {
    plugins: ['@docusaurus/plugin-google-analytics'],
    themeConfig: {
      googleAnalytics: {
        trackingID: 'UA-49394184-6',
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      },
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
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
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
          // It is recommended to set document id as docs home page (`docs/` path).
          path: "chapters",
          routeBasePath: "book",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/tanaypratap/the-productivity-book/tree/master",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};