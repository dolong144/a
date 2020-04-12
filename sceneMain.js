class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	this.load.image("face","image/1.png");
    }
    create() {
        this.face = this.add.image(100,200,"face");
		this.face.alpha= .5;//mờ đục
		this.face.angle=45 //nghiêng phải 45'

    }
    update() {}
}