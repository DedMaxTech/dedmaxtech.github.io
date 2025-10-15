import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'DedMax Guides', // DedMax
  tagline: 'Гайды от Деда Максима',
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
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'guides',         // => /guide
          path: 'docs',                   // папка с доками
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          editUrl: 'https://github.com/DedMaxTech/dedmaxtech.github.io',
          async sidebarItemsGenerator(args) {
          const items = await args.defaultSidebarItemsGenerator(args);

          function fix(items) {
            for (const it of items) {
              if (it.type === 'category') {
                // если у категории сгенерированный индекс — переписываем slug
                if (it.link && it.link.type === 'generated-index') {
                  // пробуем вычислить директорию по первому дочернему doc
                  const firstDoc =
                    (it.items || []).find(x => x.type === 'doc') ||
                    // если внутри подкатегории, спускаемся рекурсивно
                    (it.items || []).find(x => x.type === 'category');

                  if (firstDoc) {
                    // doc.id в формате 'c/p1/t1' -> берём 'c/p1'
                    const docId =
                      firstDoc.type === 'doc'
                        ? firstDoc.id
                        : // возьмём первый doc внутри подкатегории
                          (firstDoc.items || []).find(x => x.type === 'doc')?.id;

                    if (docId) {
                      const parts = docId.split('/');
                      const dir = parts.slice(0, parts.length - 1).join('/');
                      if (dir) {
                        it.link.slug = `/${dir}`; // => /guide/<dir>
                      }
                    }
                  }
                }
                if (it.items) fix(it.items);
              }
            }
          }

          fix(items);
          return items;
        },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
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
          sidebarId: 'cSidebar',
          position: 'left',
          label: 'Сишка',
        },
        // пункт меню для Python
        {
          type: 'docSidebar',
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
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
