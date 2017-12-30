
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":193,"x":155,"name":"item0"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-01.png"}}]},{"type":"Box","props":{"y":193,"x":343,"name":"item1"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-02.png"}}]},{"type":"Box","props":{"y":204,"x":540,"name":"item2"},"child":[{"type":"Image","props":{"y":-4,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":10,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"x":1,"skin":"ui/mask-03.png"}}]},{"type":"Box","props":{"y":288,"x":124,"name":"item3"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":4,"skin":"ui/mask-04.png"}}]},{"type":"Box","props":{"y":288,"x":342,"name":"item4"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-05.png"}}]},{"type":"Box","props":{"y":287,"x":543,"name":"item5"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-06.png"}}]},{"type":"Box","props":{"y":384,"x":117,"name":"item6"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-07.png"}}]},{"type":"Box","props":{"y":389,"x":344,"name":"item7"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-08.png"}}]},{"type":"Box","props":{"y":388,"x":561,"name":"item8"},"child":[{"type":"Image","props":{"x":4,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"x":7,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-09.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);

        }

    }
}
