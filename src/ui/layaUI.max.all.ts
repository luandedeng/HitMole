
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {
		public timeBar:Laya.ProgressBar;
		public scoreNums:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":193,"x":155,"name":"item0"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"x":21,"skin":"ui/score_2.png","name":"scoreImg"}}]},{"type":"Box","props":{"y":193,"x":343,"name":"item1"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":7,"x":19,"skin":"ui/score_2.png","name":"scoreImg"}}]},{"type":"Box","props":{"y":204,"x":540,"name":"item2"},"child":[{"type":"Image","props":{"y":-4,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":10,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"x":1,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":-1,"x":20,"skin":"ui/score_2.png","name":"scoreImg"}}]},{"type":"Box","props":{"y":288,"x":124,"name":"item3"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":4,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":8,"x":26,"skin":"ui/score_2.png","name":"scoreImg"}}]},{"type":"Box","props":{"y":288,"x":342,"name":"item4"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":7,"x":23,"skin":"ui/score_2.png","name":"scoreImg"}}]},{"type":"Box","props":{"y":287,"x":543,"name":"item5"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":7,"x":28,"skin":"ui/score_2.png","name":"scoreImg"}}]},{"type":"Box","props":{"y":384,"x":117,"name":"item6"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":7,"x":28,"skin":"ui/score_2.png","name":"scoreImg"}}]},{"type":"Box","props":{"y":389,"x":344,"name":"item7"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":7,"x":28,"skin":"ui/score_2.png","name":"scoreImg"}}]},{"type":"Box","props":{"y":388,"x":561,"name":"item8"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":7,"x":28,"skin":"ui/score_2.png","name":"scoreImg"}}]},{"type":"ProgressBar","props":{"y":10,"x":4,"var":"timeBar","skin":"ui/progress_time.png"}},{"type":"Box","props":{"y":49,"x":8,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);
        }
    }
}

module ui {
    export class GameOverUI extends View {
		public restartBtn:Laya.Button;
		public scoreNums:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"ui/overBg.png","sizeGrid":"17,15,21,17","height":400}},{"type":"Image","props":{"y":63,"x":58,"skin":"ui/total Score.png"}},{"type":"Button","props":{"y":295,"x":161,"var":"restartBtn","stateNum":2,"skin":"ui/btn_restart.png"}},{"type":"Box","props":{"y":172,"x":160,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameOverUI.uiView);
        }
    }
}

module ui {
    export class GameStartUI extends View {
		public startBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"ui/help.png"}},{"type":"Button","props":{"y":432,"x":309,"var":"startBtn","stateNum":2,"skin":"ui/btn_start.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameStartUI.uiView);
        }
    }
}

module ui {
    export class HammerUI extends View {
		public hit:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":64,"x":64,"width":98,"skin":"ui/hammer.png","rotation":20,"pivotY":53,"pivotX":63,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":63,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":67,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":67,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1}],"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-16,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HammerUI.uiView);
        }
    }
}
