var moment = require('moment');
var self = {
	setLocale: function(lang){
		moment.locale(lang)
	},
	lorem: function(count,startWithLorem){
		//- new sentece after N words
		var colonEvery = 10

		//175 words
		var words = ['consectetur', 'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero', 'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut', 'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia', 'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros', 'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa', 'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus', 'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus', 'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam', 'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in', 'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque', 'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis', 'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada', 'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam', 'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat', 'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante', 'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae', 'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl', 'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu', 'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra', 'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae', 'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu', 'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis', 'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis', 'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam', 'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi', 'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus', 'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus', 'elementum', 'tempor', 'risus', 'cras', 'colus', 'miga' ]
		
		result = "";
		
		var result = startWithLorem ? 'Lorem ipsum dolor sit amet. ' : '';
		var maxWords = (words.length - 1)
		
		for (var i = 0; i < count; i++) {
			var nextWord = words[Math.floor((Math.random()*maxWords))]
			if (i == 0){
				result+= self.capitalize(nextWord)
			}else{

				if(! parseInt(i % colonEvery) && (count - i > colonEvery)){
					result += '. ' + self.capitalize(nextWord)
				} else {	
					result += ' ' + nextWord
					if(i == count - 1) result += '.'
				}
			}
		}
		return result;
	},

	capitalize: function(string){
		return string.charAt(0).toUpperCase() + string.slice(1)
	},

	num: function (max,min,decimalPlaces){
		var max = max || 999
		var min = min || 0
		var decimalPlaces = decimalPlaces || false
		var realMax = max + (min*-1)
		if(decimalPlaces){
			return ((Math.random() * realMax) + min).toFixed(decimalPlaces)
		}else{
			return Math.round(Math.random() * realMax) + min
		}
	},

	date: {
		relative: function(){
			return moment().subtract(self.num(1440,0),'minutes').fromNow()
		},
		format: function(format){
			return moment().subtract(self.num(365,0),'days').format(format)
		}

	}

	
}
module.exports = self;
