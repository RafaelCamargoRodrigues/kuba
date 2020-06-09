import h from '@h'
import * as f from '@f'

const __organization__ = Symbol('organization')
const defaultOrganization = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'JRMod',
  logo: 'https://dummyimage.com/112x112/1a1a1a/1a1a1a',
  url: 'https://jrmod.net',
  sameAs: [
    'https://www.facebook.com/JRMOD',
    'https://www.facebook.com/rossettijr',
    'https://twitter.com/juniorrossetti',
    'https://www.instagram.com/jrmod/',
    'https://www.youtube.com/user/rossettijr'
  ],
  address: {
    '@type': 'PostalAddress',
    postalCode: '05523-000',
    streetAddress: 'Rua Ministro Edmundo Lins, 199',
    addressRegion: 'SP',
    addressLocality: 'Bairro Ferreira',
    addressCountry: 'BR',
    telephone: '+55 11 3881-9937',
    email: 'rossettijrmod@hotmail.com'
  }
}

export default (page) =>
  document.body.appendChild(<script type='application/ld+json'>{ JSON.stringify(f.or(page[__organization__], defaultOrganization)) }</script>)

export {
  __organization__
}
