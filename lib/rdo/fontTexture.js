class FontTexture {
	constructor(font, camera) {
		this.camera = camera;
		this.font = font;
		this.fontBaseInfo = this.font.weight + ' ' + this.font.size + ' ' + this.font.family;
	}

	setTextureToObject(mesh, properties) {
		let text = typeof properties.text !== 'undefined' ? properties.text : '';
		let align = typeof properties.align !== 'undefined' ? properties.align : 'center';
		let opacity = typeof properties.opacity !== 'undefined' ? properties.opacity : 1;
		let scale = typeof properties.scale !== 'undefined' ? properties.scale : 1;
		let useAspectRatio = typeof properties.useAspectRatio !== 'undefined' ? properties.useAspectRatio : true;
		let x = typeof properties.x !== 'undefined' ? properties.x : 0;
		let y = typeof properties.y !== 'undefined' ? properties.y : 0;

		let texture = this.createTexture(text);
		let textLength = texture.image.width / 32;

		mesh.renderOrder = 99999;
		mesh.position.set(0, 0, 0);
		mesh.scale.set(scale, scale, 1);
		mesh.material.map = texture;
		mesh.material.depthTest = false;
		mesh.material.opacity = opacity;
		mesh.material.transparent = true;
		mesh.material.needsUpdate = true;

		if (align == 'left') {
			mesh.position.x += (textLength / 2) * scale;
		} else if (align == 'right') {
			mesh.position.x -= (textLength / 2) * scale;
		}

		if (useAspectRatio) {
			x *= this.camera.aspect;
		}

		mesh.position.x += x;
		mesh.position.y += y;

		mesh.scale.x *= textLength;
		mesh.scale.y *= 1;
	}

	createTexture(text) {
		let canvas = document.createElement('canvas');
		let context = canvas.getContext('2d');

		canvas.height = 32;
		canvas.width = text.length * 32;

		// adjust canvas width to text width
		canvas.width = this.getCanvasWidthByInput(context, text);


		// write text to canvas
		context.clearRect(0, 0, canvas.width, canvas.height);

		context.globalCompositeOperation = "source-over";
		context.fillStyle = "rgba(0, 0, 0, 1)";
		context.fillRect(0, 0, canvas.width, canvas.height);

		context.textBaseline = this.font.baseline;
		context.font = this.fontBaseInfo;
		context.globalCompositeOperation = "xor";
		context.fillText(text, this.font.left, this.font.top);

		context.drawImage(this.font.backgroundImg, 0, 0, canvas.width, canvas.height);


		let texture = new THREE.Texture(canvas);

		texture.minFilter = THREE.LinearFilter;
		texture.needsUpdate = true;

		return texture;
	}

	getCanvasWidthByInput(context, text) {
		context.font = this.fontBaseInfo;
		context.fillText(text, 0, 0);

		return context.measureText(text).width;
	}
}

export default FontTexture;