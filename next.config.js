const path = require('path');

const nextConfig = {
  productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/pl/web-development-aplikacje-internetowe',
        destination: '/pl/web-development/aplikacje-internetowe',
        permanent: true,
      },
      {
        source: '/pl/web-development-sklepy-internetowe',
        destination: '/pl/web-development/sklepy-internetowe',
        permanent: true,
      },
      {
        source: '/pl/web-development-strony-internetowe',
        destination: '/pl/web-development/strony-internetowe',
        permanent: true,
      },
      {
        source: '/pl/grafika-design-projektowanie-logo',
        destination: '/pl/grafika-design/projektowanie-logo',
        permanent: true,
      },
      {
        source: '/pl/grafika-design-identyfikacja-wizualna-marki',
        destination: '/pl/grafika-design/identyfikacja-wizualna-marki',
        permanent: true,
      },
      {
        source: '/pl/grafika-design-audyt-ux-ui',
        destination: '/pl/grafika-design/audyt-ux-ui',
        permanent: true,
      },
      {
        source: '/pl/akademia/:slug(\\d+)',
        destination: '/pl/akademia/strona/:slug',
        permanent: true,
      },
      {
        source: '/pl/blog/:slug(\\d+)',
        destination: '/pl/blog/strona/:slug',
        permanent: true,
      },
      {
        source: '/',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/projekty/dwa-slowa/',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/projekty/brygida-helbig/',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/projekty/',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/oferta/',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/projekty/9m13/',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/kontakt/',
        destination: '/pl/kontakt',
        permanent: true,
      },
      {
        source: '/blog/jak-rozmawiac-z-tworcami-stron-internetowych/',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/projekty/centrum-korekty/',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/faq/',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/blog/strony-internetowe-na-lata/',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/blog/',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/projekty/wloski-od-zera/',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/polityka-prywatnosci/',
        destination: '/pl/polityka-prywatnosci',
        permanent: true,
      },
      {
        source: '/o-nas/',
        destination: '/pl/zespol',
        permanent: true,
      },
      {
        source: '/onas',
        destination: '/pl/zespol',
        permanent: true,
      },
      {
        source: '/blog/strona-internetowa-czy-media-spolecznosciowe/',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/projekty/altwork/',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/projekty/cargem/',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/projekty/justyna-holosyniuk/',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/projekty/xminer/',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/blog/jak-zdobyc-pierwszego-klienta/',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/blog/3-sposoby-na-rozpoznawalnosc-twojej-marki/',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/blog/jak-zdobyc-pierwszego-klienta/mailtokuba@kryptonum.eu',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/page-data/blog/jak-zdobyc-pierwszego-klienta/mailtokuba@kryptonum.eu/page-data.json',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/projekty/dwa-slowa',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/projekty/brygida-helbig',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/projekty',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/oferta',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/projekty/9m13',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/blog/jak-rozmawiac-z-tworcami-stron-internetowych',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/projekty/centrum-korekty',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/blog/strony-internetowe-na-lata',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/projekty/wloski-od-zera',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/polityka-prywatnosci',
        destination: '/pl/polityka-prywatnosci',
        permanent: true,
      },
      {
        source: '/o-nas',
        destination: '/pl/zespol',
        permanent: true,
      },
      {
        source: '/blog/strona-internetowa-czy-media-spolecznosciowe',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/projekty/altwork',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/projekty/cargem',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/projekty/justyna-holosyniuk',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/projekty/xminer',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/blog/jak-zdobyc-pierwszego-klienta',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/blog/3-sposoby-na-rozpoznawalnosc-twojej-marki',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/sitemap-index.xml',
        destination: '/pl/sitemap-index.xml',
        permanent: true,
      },
      {
        source: '/sitemap-0.xml',
        destination: '/pl/sitemap-0.xml',
        permanent: true,
      },
      {
        source: '/pl/akademia/najwazniejsze-trendy-technologiczne',
        destination: '/pl/akademia/jak-wybrac-technologie-projektowania-stron-www',
        permanent: true,
      },
      {
        source: '/blog/cargem',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/blog/brygida-helbig',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/blog/dwa-slowa',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/blog/9m13',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/blog/xminer',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/blog/wloski-od-zera',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/blog/altwork',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/blog/centrum-korekty',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/blog/justyna-holosyniuk',
        destination: '/pl/portfolio',
        permanent: true,
      },
      {
        source: '/pl/web-development-strony-internetowe',
        destination: '/pl/web-development/strony-internetowe',
        permanent: true,
      },
      {
        source: '/pl/web-development-aplikacje-internetowe',
        destination: '/pl/web-development/aplikacje-internetowe',
        permanent: true,
      },
      {
        source: '/pl/web-development-sklepy-internetowe',
        destination: '/pl/web-development/sklepy-internetowe',
        permanent: true,
      },
      {
        source: '/pl/blog/czym-sa',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/pl/akademia/rozwoj-technologii-blockchain-nft-i-kryptowalut',
        destination: '/pl/akademia',
        permanent: true,
      },
      {
        source: '/pl/akademia/cyberataki-przyklady-i-rodzaje-atakow-hakerskich-cyberbezpieczenstwo',
        destination: '/pl/akademia',
        permanent: true,
      },
      {
        source: '/pl/branding',
        destination: '/pl/grafika-design/branding',
        permanent: true,
      },
      {
        source: '/pl/projektowanie-ux',
        destination: '/pl/grafika-design/projektowanie-ux',
        permanent: true,
      },
      {
        source: '/pl/projektowanie-ui',
        destination: '/pl//grafika-design/projektowanie-ui',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/czym-jest-q-commerce-m-commerce-re-commerce-rodzaje-e-commerce',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/o-czym-pamietac-podczas-implementacji-strony-www',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/najwazniejsze-trendy-technologiczne',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/ile-kosztuje-identyfikacja-wizualna-firmy',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/jakie-sa-etapy-tworzenia-strony-internetowej',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/czym-jest-system-zarzadzania-trescia-strony-www',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/cyberataki-przyklady-i-rodzaje-atakow-hakerskich-cyberbezpieczenstwo',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/jak-wybrac-agencje',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/bogdan',
        destination: 'https://kryptonum.eu/pl/zespol/bogdan',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/bogumil',
        destination: 'https://kryptonum.eu/pl/zespol/bogumil',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/user-flow-design',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/przemek',
        destination: 'https://kryptonum.eu/pl/zespol/przemek',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/kontakt',
        destination: 'https://kryptonum.eu/pl/kontakt',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/o-czym-pamietac-podczas-tworzenia-stron-internetowych',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/jak-wyglada-wspolpraca-z-agencja-interaktywna',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/wymiary-zdjec-i-grafik-na-social-media-w-2023-roku',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/bartek',
        destination: 'https://kryptonum.eu/pl/zespol/bartek',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/agencja-interaktywna-kreatywna-reklamowa-marketingowa-czym-sie-roznia',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/rozwoj-technologii-blockchain-nft-i-kryptowalut',
        destination: 'https://kryptonum.eu/pl/blog',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/maciek',
        destination: 'https://kryptonum.eu/pl/zespol/maciek',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/kuba',
        destination: 'https://kryptonum.eu/pl/zespol/kuba',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/oliwia',
        destination: 'https://kryptonum.eu/pl/zespol/oliwia',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/michal',
        destination: 'https://kryptonum.eu/pl/zespol/michal',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/patrycja',
        destination: 'https://kryptonum.eu/pl/zespol/patrycja',
        permanent: true,
      },
      {
        source: 'https://kryptonum.eu/damian',
        destination: 'https://kryptonum.eu/pl/zespol/damian',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;