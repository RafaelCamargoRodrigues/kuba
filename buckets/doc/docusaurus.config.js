// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kuba',
  tagline: 'Javascript é como uma folha em branco, a liberdade de programar do jeito que faça sentido para o produto!',
  url: 'https://kuba.engineer',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'deMGoncalves', // Usually your GitHub org/user name.
  projectName: 'kuba', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'kuba',
        logo: {
          alt: 'kuba',
          src: 'img/logo.png'
        },
        items: [ 
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial'
          },
          {
            label: 'Experimente',
            position: 'left',
            to: '/getting-started'
          },
          {
            label: 'Valores',
            position: 'left',
            to: '/about'
          },
          {
            label: 'Blog',
            position: 'left',
            to: '/blog'
          },
          {
            href: 'https://demo.kuba.engineer',
            label: 'Demo',
            position: 'right'
          },
          {
            href: 'https://bundle.kuba.engineer/report.html',
            label: 'Bundle',
            position: 'right'
          },
          {
            href: 'https://github.com/deMGoncalves/kuba',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus'
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/deMGoncalves/kuba'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kuba, Inc. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
