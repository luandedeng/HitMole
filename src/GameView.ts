class GameView extends ui.GameUI {
	// private mole: Mole
	private moles: Array<Mole>
	private moleNum: number = 9

	constructor() {
		super()
		this.moles = new Array<Mole>()

		for (let i = 0; i < this.moleNum; i++) {
			let box: Laya.Box = this.getChildByName('item' + i) as Laya.Box
			let mole: Mole = new Mole(
				box.getChildByName('normal') as Laya.Image,
				box.getChildByName('hit') as Laya.Image,
				21
			)
			this.moles.push(mole)
		}
		// this.mole = new Mole(this.normal, this.hit, 21)
		Laya.timer.loop(1000, this, this.onLoop)
	}

	onLoop(): void {
		// this.mole.show()
		let index: number = Math.floor(Math.random() * this.moleNum)
		this.moles[index].show()
	}
}
