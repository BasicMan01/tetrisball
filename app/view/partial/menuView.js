import BaseView from './baseView.js';

class MenuView extends BaseView {
	constructor(mainView) {
		super(mainView);

		this.navToGameButton = null;
		this.navToHighscoreButton = null;
		this.navToOptionsButton = null;
		this.versionLabel = null;

		this.createObjects();
	}

	createObjects() {
		this.navToGameButton = this.mainView.addTextBasePlane(this.scene);
		this.navToHighscoreButton = this.mainView.addTextBasePlane(this.scene);
		this.navToOptionsButton = this.mainView.addTextBasePlane(this.scene);
		this.versionLabel = this.mainView.addTextBasePlane(this.scene);

		this.navToGameButton.userData.actionHandler = 'navToGameAction';
		this.navToHighscoreButton.userData.actionHandler = 'navToHighscoreAction';
		this.navToOptionsButton.userData.actionHandler = 'navToOptionsAction';

		this.intersectMeshs.push(this.navToGameButton);
		this.intersectMeshs.push(this.navToHighscoreButton);
		this.intersectMeshs.push(this.navToOptionsButton);
	}

	show() {
		this.selectedObject = null;
		
		this.updateTextures();
	}

	updateTextures() {
		let texts = this.mainView.config.texts;

		this.mainView.fontTexture.setTextureToObject(
			this.navToGameButton,
			{text: texts.navigationPlay, x: 0, y: 10, scale: 2, opacity: 0.2}
		);

		this.mainView.fontTexture.setTextureToObject(
			this.navToHighscoreButton,
			{text: texts.navigationHighscore, x: 0, y: 3, scale: 2, opacity: 0.2}
		);

		this.mainView.fontTexture.setTextureToObject(
			this.navToOptionsButton,
			{text: texts.navigationOptions, x: 0, y: -4, scale: 2, opacity: 0.2}
		);

		this.mainView.fontTexture.setTextureToObject(
			this.versionLabel,
			{text: this.mainView.config.version, x: 14, y: -16, scale: 1, opacity: 0.2}
		);
	}
}

export default MenuView;