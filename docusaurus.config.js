// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OppoDocs',
  tagline: 'Documentation page containing resources of OppoNoppo for Fivem',
  url: 'https://opponoppo.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Oppo2.png',
  organizationName: 'OppoNoppo', // Usually your GitHub org/user name.
  projectName: 'opponoppo.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/OppoNoppo/opponoppo.github.io/tree/main',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'OppoDocs',
        logo: {
          alt: 'OppoDocs',
          src: 'img/Oppo2.png',
        },
        items: [
          {
            href: 'https://github.com/OppoNoppo',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'https://discord.gg/9fhBMJVKVm',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://opponoppo.tebex.io/',
            label: 'Tebex',
            position: 'left',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua'],
      },
      metadata: [{name: 'keywords', content: 'opponoppo, op-vehshop, op'}],
    }),
};

module.exports = config;
