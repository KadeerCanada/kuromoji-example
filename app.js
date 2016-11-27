var kuromoji = require('kuromoji');


var sampleSentence = 'ももち、これから翻訳をお願いします。'

var sentenceTokenizer = function(sentence){
	var builder = kuromoji.builder({
	  dicPath: 'node_modules/kuromoji/dict'
	});
	// build a tokenizer
	builder.build(function(err, tokenizer) {
		// 辞書がないとエラー
		if(err) { throw err; }
		// tokenizer
		var tokens = tokenizer.tokenize(sampleSentence);
		console.dir(tokens);
		return tokens;
		
	});
}

var sentenceTokenizerAsync = function(sentence){
		return new Promise(function(resolve,reject){
			sentenceTokenizer(sentence);
			
}
var tokenObj = sentenceTokenizer(sampleSentence);
return tokenObj;
