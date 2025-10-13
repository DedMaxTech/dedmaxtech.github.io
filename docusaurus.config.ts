import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'Полезная инфа от Деда Максима', // DedMax
  tagline: '',
  favicon: 'img/favicon.ico',

  future: {v4: true,},

  url: 'https://dedmaxtech.github.io',
  baseUrl: '/',

  organizationName: 'dedmaxtech',
  projectName: 'dedmaxtech.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'c',
        path: 'c',
        routeBasePath: 'c',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/DedMaxTech/dedmaxtech.github.io/tree/main',
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'python',
        path: 'python',
        routeBasePath: 'python',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/DedMaxTech/dedmaxtech.github.io/tree/main',
        showLastUpdateTime: true,
      },
    ],
    // при необходимости добавляйте другие языки по аналогии
  ],
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DedMax',
      logo: {
        alt: 'My Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo_dark.png'
      },
      items: [
        {
          type: 'docSidebar',
          docsPluginId: 'c',
          sidebarId: 'cSidebar',
          position: 'left',
          label: 'Сишка',
        },
        // пункт меню для Python
        {
          type: 'docSidebar',
          docsPluginId: 'python',
          sidebarId: 'pythonSidebar',
          position: 'left',
          label: 'Python',
        },
        // {
        //   href: 'https://github.com/DedMaxTech/dedmaxtech.github.io',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} DedMax`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
