const CACHE_NAME = 'v.1';

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(
			CACHE_NAME
		).then(cache => {
			return cache.addAll([
				'/webgl_tetrisball/',
				'/webgl_tetrisball/index.html',
				'/webgl_tetrisball/sw.js',
				'/webgl_tetrisball/app/main.js',
				'/webgl_tetrisball/app/classes/objectMap.js',
				'/webgl_tetrisball/app/classes/observable.js',
				'/webgl_tetrisball/app/controller/controller.js',
				'/webgl_tetrisball/app/model/config.js',
				'/webgl_tetrisball/app/model/highscore.js',
				'/webgl_tetrisball/app/model/options.js',
				'/webgl_tetrisball/app/model/tetrisball.js',
				'/webgl_tetrisball/app/view/view.js',
				'/webgl_tetrisball/app/view/partial/baseView.js',
				'/webgl_tetrisball/app/view/partial/gameView.js',
				'/webgl_tetrisball/app/view/partial/highscoreView.js',
				'/webgl_tetrisball/app/view/partial/menuView.js',
				'/webgl_tetrisball/app/view/partial/optionsView.js',
				'/webgl_tetrisball/lib/rdo/fontTexture.js',
				'/webgl_tetrisball/lib/rdo/helper.js',
				'/webgl_tetrisball/lib/rdo/sound.js',
				'/webgl_tetrisball/lib/threejs_95/three.min.js',
				'/webgl_tetrisball/resources/config/config.json',
				'/webgl_tetrisball/resources/css/global.css',
				'/webgl_tetrisball/resources/icon/icon_192.png',
				'/webgl_tetrisball/resources/icon/icon_32.png',
				'/webgl_tetrisball/resources/icon/icon_512.png',
				'/webgl_tetrisball/resources/json/manifest.json',
				'/webgl_tetrisball/resources/language/de.json',
				'/webgl_tetrisball/resources/language/en.json',
				'/webgl_tetrisball/resources/music/track_01.mp3',
				'/webgl_tetrisball/resources/texture/font/bg.png',
				'/webgl_tetrisball/resources/texture/game/1.png',
				'/webgl_tetrisball/resources/texture/game/2.png',
				'/webgl_tetrisball/resources/texture/game/3.png',
				'/webgl_tetrisball/resources/texture/game/4.png',
				'/webgl_tetrisball/resources/texture/game/5.png',
				'/webgl_tetrisball/resources/texture/game/6.png',
				'/webgl_tetrisball/resources/texture/game/nonpick.png',
				'/webgl_tetrisball/resources/texture/game/pick.png'
			]);
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(
			event.request
		).then(response => {
			if (response) {
				return response;
			}

			return fetch(event.request);
		})
	);
});