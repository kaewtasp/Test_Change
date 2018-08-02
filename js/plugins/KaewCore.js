/*:
* @plugindesc KaewCore System
*
* @author Kaew
*
* @help none

*/
// This is Kaew Core System
// Scene Custom
function LMbattle_Scene(){

this.initialize.apply(this, arguments);
}
LMbattle_Scene.prototype = Object.create(LMbattle_Scene.prototype);
LMbattle_Scene.prototype.constructor = LMbattle_Scene;
LMbattle_Scene.prototype.initialize = function(){

	LMbattle_Scene.prototype.initialize.call(this);
};
LMbattle_Scene.prototype.create = function(){
this.prototype.createWindowLayer();

};
(function(){

Game_Player.prototype.executeMove = function(direction) {
    this.moveStraight(direction);
    LMbattle_Scene.prototype.start;
    $gameMessage.add("Wow look good");
};

})();