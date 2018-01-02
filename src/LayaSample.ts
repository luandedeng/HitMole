// 程序入口
class GameMain {
	constructor() {
		Laya.init(800, 600)
		Laya.stage.bgColor = '#ffcccc'
		let resArray: Array<any> = [
			{
				url: 'res/atlas/ui.atlas',
				type: Laya.Loader.ATLAS
			},
			{
				url: 'ui/back.png',
				type: Laya.Loader.IMAGE
			}
		]

		Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded))
	}

	onLoaded(): void {
		let view: GameView = new GameView()
		Laya.stage.addChild(view)
	}
}

new GameMain()
