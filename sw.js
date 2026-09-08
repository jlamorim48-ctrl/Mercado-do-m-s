// Service worker mínimo — por enquanto só permite instalar o PWA
// na tela inicial. Cache offline pode ser adicionado numa fase futura.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', () => {}); // sem cache por enquanto, sempre busca da rede
