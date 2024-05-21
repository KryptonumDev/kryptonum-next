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
        source: '/czym-jest-q-commerce-m-commerce-re-commerce-rodzaje-e-commerce',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/o-czym-pamietac-podczas-implementacji-strony-www',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/najwazniejsze-trendy-technologiczne',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/ile-kosztuje-identyfikacja-wizualna-firmy',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/jakie-sa-etapy-tworzenia-strony-internetowej',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/czym-jest-system-zarzadzania-trescia-strony-www',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/cyberataki-przyklady-i-rodzaje-atakow-hakerskich-cyberbezpieczenstwo',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/jak-wybrac-agencje',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/bogdan',
        destination: '/pl/zespol/bogdan',
        permanent: true,
      },
      {
        source: '/bogumil',
        destination: '/pl/zespol/bogumil',
        permanent: true,
      },
      {
        source: '/user-flow-design',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/przemek',
        destination: '/pl/zespol/przemek',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/pl/kontakt',
        permanent: true,
      },
      {
        source: '/o-czym-pamietac-podczas-tworzenia-stron-internetowych',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/jak-wyglada-wspolpraca-z-agencja-interaktywna',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/wymiary-zdjec-i-grafik-na-social-media-w-2023-roku',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/bartek',
        destination: '/pl/zespol/bartek',
        permanent: true,
      },
      {
        source: '/agencja-interaktywna-kreatywna-reklamowa-marketingowa-czym-sie-roznia',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/rozwoj-technologii-blockchain-nft-i-kryptowalut',
        destination: '/pl/blog',
        permanent: true,
      },
      {
        source: '/maciek',
        destination: '/pl/zespol/maciek',
        permanent: true,
      },
      {
        source: '/kuba',
        destination: '/pl/zespol/kuba',
        permanent: true,
      },
      {
        source: '/oliwia',
        destination: '/pl/zespol/oliwia',
        permanent: true,
      },
      {
        source: '/michal',
        destination: '/pl/zespol/michal',
        permanent: true,
      },
      {
        source: '/patrycja',
        destination: '/pl/zespol/patrycja',
        permanent: true,
      },
      {
        source: '/damian',
        destination: '/pl/zespol/damian',
        permanent: true,
      },
      {
        source: '/pl/blog/idealny-brief-dla-agencji',
        destination: '/pl/blog/jak-napisac-dobry-brief',
        permanent: true,
      },
      {
        source: '/pl/blog/agencja-interaktywna-kreatywna-reklamowa-marketingowa-czym-sie-roznia',
        destination: '/pl/blog/jakie-sa-typy-i-rodzaje-agencji-reklamowych-i-innych',
        permanent: true,
      },
      {
        source: '/kto-powinien-zlecic-prace-agencji-interaktywnej',
        destination: '/pl/blog/jakie-sa-typy-i-rodzaje-agencji-reklamowych-i-innych',
        permanent: true,
      },
      {
        source: '/02',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/03',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/co-to-jest-rebranding',
        destination: '/pl/blog/co-to-jest-rebranding',
        permanent: true,
      },
      {
        source: '/pl/blog/cyberataki-',
        destination: '/pl/blog/cyberataki-przyklady-i-rodzaje-atakow-hakerskich-cyberbezpieczenstwo',
        permanent: true,
      },
      {
        source: '/jak-zadbac-o-wizerunek-firmy-w-internecie',
        destination: '/pl/blog/jak-zadbac-o-wizerunek-firmy-w-internecie',
        permanent: true,
      },
      {
        source: '/04',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/pl/portfolio/baza-vintage-wzrost-fraz-kluczowych-i-zwiekszenie-przychodow',
        destination: '/pl/marketing-360',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;