var GHPATH = '/mnts.sp.org';
var APP_PREFIX = 'gppwa_';
var VERSION = '0.1.8-04092026';
var URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,

  `${GHPATH}/index_data`,

  `${GHPATH}/index_data/animations`,
  `${GHPATH}/index_data/animations/cursour`,
  `${GHPATH}/index_data/animations/cursour/effects`,
  `${GHPATH}/index_data/animations/cursour/effects/0000`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/0.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/1.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/2.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/3.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/4.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/5.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/6.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/7.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/8.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/9.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/10.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/11.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/12.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/13.png`,
  `${GHPATH}/index_data/animations/cursour/effects/0000/14.png`,

  `${GHPATH}/index_data/scripts`,
  `${GHPATH}/index_data/scripts/apply_settings.js`,
  `${GHPATH}/index_data/scripts/auto_set_local.js`,
  `${GHPATH}/index_data/scripts/favicon.js`,
  `${GHPATH}/index_data/scripts/images_preview.js`,
  `${GHPATH}/index_data/scripts/loading_system_assets.js`,
  `${GHPATH}/index_data/scripts/player_audio.js`,
  `${GHPATH}/index_data/scripts/player_document.js`,
  `${GHPATH}/index_data/scripts/player_image.js`,
  `${GHPATH}/index_data/scripts/player_video.js`,
  `${GHPATH}/index_data/scripts/settings_prechanges.js`,
  `${GHPATH}/index_data/scripts/stick_header.js`,
  `${GHPATH}/index_data/scripts/system_battery.js`,
  `${GHPATH}/index_data/scripts/system_clendar.js`,
  `${GHPATH}/index_data/scripts/system_clock.js`,
  `${GHPATH}/index_data/scripts/tabs.js`,
  `${GHPATH}/index_data/scripts/window_context.js`,
  `${GHPATH}/index_data/scripts/window_load.js`,
  `${GHPATH}/index_data/scripts/window_scroll.js`,
  `${GHPATH}/index_data/scripts/window_click.js`,
  `${GHPATH}/index_data/scripts/keyboard_keys.js`,
  `${GHPATH}/index_data/scripts/reload.js`,
  `${GHPATH}/index_data/scripts/close.js`,
  `${GHPATH}/index_data/scripts/upload_via_zip.js`,

  `${GHPATH}/index_data/scripts/languages`,
  `${GHPATH}/index_data/scripts/languages/for_scripts.js`,
  `${GHPATH}/index_data/scripts/languages/language_text.js`,

  `${GHPATH}/index_data/styles`,
  `${GHPATH}/index_data/styles/system_loading_style.css`,
  `${GHPATH}/index_data/styles/root.css`,
  `${GHPATH}/index_data/styles/style.css`,
  `${GHPATH}/index_data/styles/style_created.css`,
  `${GHPATH}/index_data/styles/style_loader.js`,

  `${GHPATH}/index_data/fonts`,
  `${GHPATH}/index_data/fonts/font.ttf`,

  `${GHPATH}/index_data/textures`

  `${GHPATH}/index_data/textures/system_logo.png`,

  `${GHPATH}/index_data/textures/dark`,
  `${GHPATH}/index_data/textures/dark/auds_remove.png`,
  `${GHPATH}/index_data/textures/dark/close_0.png`,
  `${GHPATH}/index_data/textures/dark/close_1.png`,
  `${GHPATH}/index_data/textures/dark/close_2.png`,
  `${GHPATH}/index_data/textures/dark/docs_remove.png`,
  `${GHPATH}/index_data/textures/dark/icon.png`,
  `${GHPATH}/index_data/textures/dark/imgs_remove.png`,
  `${GHPATH}/index_data/textures/dark/loop_off.png`,
  `${GHPATH}/index_data/textures/dark/loop_off_2.png`,
  `${GHPATH}/index_data/textures/dark/loop_on.png`,
  `${GHPATH}/index_data/textures/dark/loop_on_2.png`,
  `${GHPATH}/index_data/textures/dark/menu_0.png`,
  `${GHPATH}/index_data/textures/dark/menu_1.png`,
  `${GHPATH}/index_data/textures/dark/menu_2.png`,
  `${GHPATH}/index_data/textures/dark/player_audio.png`,
  `${GHPATH}/index_data/textures/dark/player_audio_2.png`,
  `${GHPATH}/index_data/textures/dark/player_document.png`,
  `${GHPATH}/index_data/textures/dark/player_document_2.png`,
  `${GHPATH}/index_data/textures/dark/player_image.png`,
  `${GHPATH}/index_data/textures/dark/player_image_2.png`,
  `${GHPATH}/index_data/textures/dark/player_video.png`,
  `${GHPATH}/index_data/textures/dark/player_video_2.png`,
  `${GHPATH}/index_data/textures/dark/show_full_screen.png`,
  `${GHPATH}/index_data/textures/dark/show_full_screen_2.png`,
  `${GHPATH}/index_data/textures/dark/vids_remove.png`,
  `${GHPATH}/index_data/textures/dark/next_on.png`,
  `${GHPATH}/index_data/textures/dark/next_on_2.png`,
  `${GHPATH}/index_data/textures/dark/next_off.png`,
  `${GHPATH}/index_data/textures/dark/next_off_2.png`,
  `${GHPATH}/index_data/textures/dark/player_top_btn.png`
  `${GHPATH}/index_data/textures/dark/player_top_btn_2.png`
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