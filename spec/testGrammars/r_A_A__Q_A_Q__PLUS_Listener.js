// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by r_A_A__Q_A_Q__PLUS_Parser.
function r_A_A__Q_A_Q__PLUS_Listener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

r_A_A__Q_A_Q__PLUS_Listener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
r_A_A__Q_A_Q__PLUS_Listener.prototype.constructor = r_A_A__Q_A_Q__PLUS_Listener;

// Enter a parse tree produced by r_A_A__Q_A_Q__PLUS_Parser#r.
r_A_A__Q_A_Q__PLUS_Listener.prototype.enterR = function(ctx) {
};

// Exit a parse tree produced by r_A_A__Q_A_Q__PLUS_Parser#r.
r_A_A__Q_A_Q__PLUS_Listener.prototype.exitR = function(ctx) {
};



exports.r_A_A__Q_A_Q__PLUS_Listener = r_A_A__Q_A_Q__PLUS_Listener;