var _ = require('lodash');

// _.partial allows you to decorate a function


function describe(clazz, animal) {
	console.log('A ' + animal + ' is a ' + clazz);
}

var describeMammal = _.partial(describe,'mammal');

var describeFish = _.partial(describe,'fish');

describeMammal('dog');

describeFish('trout');

