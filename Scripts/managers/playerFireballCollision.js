var managers;
(function (managers) {
    var PlayerFireballCollision = (function () {
        function PlayerFireballCollision(playerFireball) {
            this._playerFireball = playerFireball;
        }
        PlayerFireballCollision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        PlayerFireballCollision.prototype.CheckPlayerFire = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfWidth = this._playerFireball.width * 0.5;
            var objectHalfWidth = object.width * 0.5;
            var minimumDistance = playerHalfWidth + objectHalfWidth;
            startPoint.x = this._playerFireball.x;
            startPoint.y = this._playerFireball.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            /* check if the distance between the player and
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                //Check which object it collides
                if (object.name === "dragonEnemy1") {
                    object.reset();
                    this._playerFireball.reset();
                    gameController.ScoreValue++;
                    console.log("collides with dragonEnemy1");
                }
                if (object.name === "dragonEnemy2") {
                    object.reset();
                    this._playerFireball.reset();
                    gameController.ScoreValue++;
                    console.log("Collides with dragonEnemy2");
                }
            } //End MinimumDistance check
        };
        return PlayerFireballCollision;
    }());
    managers.PlayerFireballCollision = PlayerFireballCollision;
})(managers || (managers = {}));
//# sourceMappingURL=playerFireballCollision.js.map