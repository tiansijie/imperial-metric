# ImperialMetric
A module that let you convert imperial to metric and metric to imperial easily

## Usage
```js
	var IM = require("imperial-metric");
	IM(1).from('inch').toCm(); // 2.54
	IM(1).from('m').toInch(); // 1 / 30.48
	IM(1).from('cm').toInch(); // 1 / 2.54
	IM(1).from('foot').toM(); // 0.3048
```

## Install
```
	npm install imperial-metric
```


### TODO
* add `mm`, `km` to the conversion
