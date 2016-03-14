
var ImperialMetric = function(val) {
	this.val = val;
}

/*
	"inch", "cm", "m", "foot"
*/
ImperialMetric.prototype.from = function(unit) {
	this.unit = unit;
	return this;
}


ImperialMetric.prototype.toInch = function() {
	switch(this.unit) {
		case "inch":
			return this.val;
		case "cm":
			return this.val * (1 / 2.54);
		case "m":
			return this.val * (1 / 2.54) * 100;
		case "foot":
			return this.val * 12;
	}
}

ImperialMetric.prototype.toFoot = function() {
	switch(this.unit) {
		case "inch":
			return this.val * (1 / 12);
		case "cm":
			return this.val * (1 / 30.48);
		case "m":
			return this.val * (1 / 30.48) * 100;
		case "foot":
			return this.val;
	}
}

ImperialMetric.prototype.toCm = function() {
	switch(this.unit) {
		case "inch":
			return this.val * 2.54;
		case "cm":
			return this.val;
		case "m":
			return this.val * (1 / 100);
		case "foot":
			return this.val * 30.48;
	}
}

ImperialMetric.prototype.toM = function() {
	switch(this.unit) {
		case "inch":
			return this.val * (2.54 / 100);
		case "cm":
			return this.val * (1 / 100);
		case "m":
			return this.val;
		case "foot":
			return this.val * (30.48 / 100);
	}
}

module.exports = function (value) {
	return new ImperialMetric(value);
}
