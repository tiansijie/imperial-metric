var IM = require("./index.js");
var test = require("tape");

test("1 foot",  function(t) {
	t.equal(IM(1).from("foot").toInch(), 12, "equal 12 inches");
	t.equal(IM(1).from("foot").toFoot(), 1, "equal 1 foot");
	t.equal(IM(1).from("foot").toCm(), 30.48, "equal 30.48 cm");
	t.equal(IM(1).from("foot").toM(), 0.3048, "equal 0.3048 m");
	t.end();
});

test("1 inch", function(t) {
	t.equal(IM(1).from("inch").toInch(), 1, "equal 1 inch");
	t.equal(IM(1).from("inch").toFoot(), 1 / 12, "equal 1 / 12 foot");
	t.equal(IM(1).from("inch").toCm(), 2.54, "equal 2.54 cm");
	t.equal(IM(1).from("inch").toM(), 2.54 / 100, "equal 2.54 / 100 m");
	t.end();
});


test("1 cm", function(t) {
	t.equal(IM(1).from("cm").toInch(), 1 / 2.54, "equal 1 / 2.54 inch");
	t.equal(IM(1).from("cm").toFoot(), 1 / 30.48, "equal 1 / 30.48 foot");
	t.equal(IM(1).from("cm").toCm(), 1, "equal 1 cm");
	t.equal(IM(1).from("cm").toM(), 1 / 100, "equal 1 / 100 m");
	t.end();
});


test("1 m", function(t) {
	t.equal(IM(1).from("m").toInch(), (1 / 2.54) * 100, "equal (1 / 2.54) * 100 inch");
	t.equal(IM(1).from("m").toFoot(), (1 / 30.48) * 100, "equal (1 / 30.48) * 100 foot");
	t.equal(IM(1).from("m").toCm(), 0.01, "equal 0.01 cm");
	t.equal(IM(1).from("m").toM(), 1, "equal 1 m");
	t.end();
});
