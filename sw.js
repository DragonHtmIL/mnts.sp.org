var GHPATH = '/mnts.sp.org';
var APP_PREFIX = 'gppwa_';
var VERSION = '0.0.3-v2';
var URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,

  `${GHPATH}/index_data`,

  `${GHPATH}/index_data/textures/system_logo.png`,

  `${GHPATH}/index_data/scripts`,
  `${GHPATH}/index_data/scripts/auto_set_local.js`,
  `${GHPATH}/index_data/scripts/change_theme.js`,
  `${GHPATH}/index_data/scripts/detect_theme_scheme.js`,
  `${GHPATH}/index_data/scripts/favicon.js`,
  `${GHPATH}/index_data/scripts/player_image.js`,
  `${GHPATH}/index_data/scripts/player_video.js`,
  `${GHPATH}/index_data/scripts/stick_header.js`,
  `${GHPATH}/index_data/scripts/switch_theme.js`,
  `${GHPATH}/index_data/scripts/system_battery.js`,
  `${GHPATH}/index_data/scripts/system_clendar.js`,
  `${GHPATH}/index_data/scripts/system_clock.js`,
  `${GHPATH}/index_data/scripts/tabs.js`,
  `${GHPATH}/index_data/scripts/window_load.js`,
  `${GHPATH}/index_data/scripts/window_scroll.js`,

  `${GHPATH}/index_data/themes`,

  `${GHPATH}/index_data/themes/system/root_dark.css`,
  `${GHPATH}/index_data/themes/system/root_light.css`,
  `${GHPATH}/index_data/themes/system/style_0.css`,
  `${GHPATH}/index_data/themes/system/style_created.css`,
  `${GHPATH}/index_data/themes/system/style_loader.js`,

  `${GHPATH}/index_data/themes/system/fonts`,
  `${GHPATH}/index_data/themes/system/fonts/font.ttf`,

  `${GHPATH}/index_data/themes/system/textures`,

  `${GHPATH}/index_data/themes/system/textures/light`,
  `${GHPATH}/index_data/themes/system/textures/light/auds_remove.png`,
  `${GHPATH}/index_data/themes/system/textures/light/close_0.png`,
  `${GHPATH}/index_data/themes/system/textures/light/close_1.png`,
  `${GHPATH}/index_data/themes/system/textures/light/docs_remov.png`,
  `${GHPATH}/index_data/themes/system/textures/light/icon.png`,
  `${GHPATH}/index_data/themes/system/textures/light/imgs_remove.png`,
  `${GHPATH}/index_data/themes/system/textures/light/loop_off.png`,
  `${GHPATH}/index_data/themes/system/textures/light/loop_on.png`,
  `${GHPATH}/index_data/themes/system/textures/light/player_audio.png`,
  `${GHPATH}/index_data/themes/system/textures/light/player_document.png`,
  `${GHPATH}/index_data/themes/system/textures/light/player_image.png`,
  `${GHPATH}/index_data/themes/system/textures/light/player_video.png`,
  `${GHPATH}/index_data/themes/system/textures/light/vids_remove.png`,

  `${GHPATH}/index_data/themes/system/textures/dark`,
  `${GHPATH}/index_data/themes/system/textures/dark/auds_remove.png`,
  `${GHPATH}/index_data/themes/system/textures/dark/close_0.png`,
  `${GHPATH}/index_data/themes/system/textures/dark/close_1.png`,
  `${GHPATH}/index_data/themes/system/textures/dark/docs_remov.png`,
  `${GHPATH}/index_data/themes/system/textures/dark/icon.png`,
  `${GHPATH}/index_data/themes/system/textures/dark/imgs_remove.png`,
  `${GHPATH}/index_data/themes/system/textures/dark/loop_off.png`,
  `${GHPATH}/index_data/themes/system/textures/dark/loop_on.png`,
  `${GHPATH}/index_data/themes/system/textures/dark/player_audio.png`,
  `${GHPATH}/index_data/themes/system/textures/dark/player_document.png`,
  `${GHPATH}/index_data/themes/system/textures/dark/player_image.png`,
  `${GHPATH}/index_data/themes/system/textures/dark/player_video.png`,
  `${GHPATH}/index_data/themes/system/textures/dark/vids_remove.png`,
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => cache.addAll(URLS))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Return cached response
        }
        return fetch(event.request); // Fetch from network
      })
  );
});