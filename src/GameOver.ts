class GameOver extends ui.GameOverUI {
	constructor() {
		super()

		this.restartBtn.on(Laya.Event.CLICK, this, this.restartGame)
	}

	restartGame(): void {
		this.removeSelf()
		GameMain.gameView.removeSelf()
		Laya.stage.addChild(GameMain.gameStart)
	}

	setScoreUI(score: number): void {
		let data: any = {}
		let temp: number = score
		for (let i: number = 9; i >= 0; i--) {
			data['item' + i] = { index: Math.floor(temp % 10) }
			temp = temp / 10
		}
		this.scoreNums.dataSource = data
	}
}
