var HoneyMakerBee = function() {
    Bee.call(this);
    this.job = 'make honey';
    this.age = 10;
    this.honeyPot = 0;
};
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
    this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
    this.honeyPot--;
}