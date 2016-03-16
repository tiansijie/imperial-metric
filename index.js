
var ImperialMetric = function(val) {
	this.val = val;
	this.map = {
		inch: {
			belong: "imperial",
			toMain: 1,
			toOthers: (2.54 / 100)
		},
		foot: {
			belong: "imperial",
			toMain: 12,
			toOthers: (2.54 / 100)
		},
		m: {
			belong: "metric",
			toMain: 1,
			toOthers: (1 / 2.54) * 100
		},
		cm: {
			belong: "metric",
			toMain: 1 / 100,
			toOthers: (1 / 2.54) * 100
		},
		mm: {
			belong: "metric",
			toMain: 1 / 1000,
			toOthers: (1 / 2.54) * 100
		},
		km: {
			belong: "metric",
			toMain: 1000,
			toOthers: (1 / 2.54) * 100
		}
	}
}

/*
	"inch", "cm", "m", "foot"
*/
ImperialMetric.prototype.from = function(unit) {
	this.unit = this.map[unit];
	return this;
}

ImperialMetric.prototype.to = function(goal) {
	this.goal = this.map[goal];
	if (this.unit.belong !== this.goal.belong) {
		return this.val * this.unit.toMain * this.unit.toOthers / this.goal.toMain;
	}
	else {
		return this.val * this.unit.toMain / this.goal.toMain;
	}
}

module.exports = function (value) {
	return new ImperialMetric(value);
}
