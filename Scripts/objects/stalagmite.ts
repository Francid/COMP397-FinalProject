module objects {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    export class Stalagmites extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("stalagmite");
            
           this._reset(this._leftBounds - 100);
           this.name = "stalagmite";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the fire 
            // is outside the viewport         
            if(this.x >= value) {
                this._reset(this._leftBounds - 100);
            }
        }
        
        // reset the Sky offscreen
        protected _reset(value:number):void {  
            this._speed.x = Math.floor(Math.random() * 5 + 1) + 5;        
            this.x = value;
            this.y = 400; 
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the fire 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds + 100);
        }
    }
}