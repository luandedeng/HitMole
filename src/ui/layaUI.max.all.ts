
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {
		public normal:Laya.Image;
		public hit:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":193,"x":155},"child":[{"type":"Image","props":{"x":4,"var":"normal","skin":"ui/mouse_normal_1.png"}},{"type":"Image","props":{"y":15,"x":7,"var":"hit","skin":"ui/mouse_hit_1.png"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-01.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);

        }

    }
}
