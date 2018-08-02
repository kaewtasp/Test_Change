function Test_Window(){
this.initilize.apply(this,arguments);
}
Test_Window.prototype = Object.create(Window_Base.prototype);
Test_Window.prototype.constructor = Test_Window;

Test_Window.prototype.initilize = function(x,y)
{
	var width = this.setWidth();
	var height = this.setHeight();
	Window_Base.prototype.initialize.call(this,x,y,width,height);
	this.refresh();
}
Test_Window.prototype.setWidth = function(){
 	return 240;
}
Test_Window.prototype.setHeight = function(){
	return this.fittingHeight(1);
}
Test_Window.prototype.refresh = function(){
	 var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
    //this.drawCurrencyValue(this.value(), this.currencyUnit(), x, 0, width);
	this.drawText('test', 0, 0, 200 - this.textWidth('00'), 'center');
}
Test_Window.prototype.open = function() {
    this.refresh();
    Window_Base.prototype.open.call(this);
};
Test_Window.prototype.value = function() {
    return $gameParty.gold();
};

Test_Window.prototype.currencyUnit = function() {
    return TextManager.currencyUnit;
};
//-------------------------------------------------------------------------------------
Window_Gold2.prototype = Object.create(Window_Base.prototype);
function Window_Gold2() {
    this.initialize.apply(this, arguments);
}
Window_Gold2.prototype.constructor = Window_Gold2;

Window_Gold2.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_Gold2.prototype.windowWidth = function() {
    return 240;
};

Window_Gold2.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};

Window_Gold2.prototype.refresh = function() {
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
    this.drawCurrencyValue(this.value(), this.currencyUnit(), x, 0, width);
};

Window_Gold2.prototype.value = function() {
    return $gameParty.gold();
};

Window_Gold2.prototype.currencyUnit = function() {
    return TextManager.currencyUnit;
};

Window_Gold2.prototype.open = function() {
    this.refresh();
    Window_Base.prototype.open.call(this);
};

/*Test_Window.prototype.open = function() {
    this.refresh();
    Window_Base.prototype.open.call(this);
};*/