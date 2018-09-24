export default class Lexer {
	constructor(descriptions) {
		this.pos = 0;
		this.buf = null;
		this.buflen = 0;
		
		// Operator table, mapping operator -> token name
		for (let name in descriptions) {
			this[name] = descriptions;
		}
		
		
		this.syntaxTree = {};
	}
	
	
	_skipnontokens() {
		while (this.pos < this.buflen) {
			let c = this.buf.charAt(this.pos);
			if (c === ' ' || c === '\t' || c === '\r' || c === '\n') {
				this.pos++;
			} else {
				break;
			}
		}
	}
	
	// Initialize the Lexer's buffer. This resets the lexer's internal
	// state and subsequent tokens will be returned starting with the
	// beginning of the new buffer.
	input(buf) {
		this.pos = 0;
		this.buf = buf;
		this.buflen = buf.length;
	}
	
	
	// Get the next token from the current buffer. A token is an object with
	// the following properties:
	// - name: name of the pattern that this token matched (taken from rules).
	// - value: actual string value of the token.
	// - pos: offset in the current buffer where the token starts.
	//
	// If there are no more tokens in the buffer, returns null. In case of
	// an error throws Error.
	token() {
		this._skipnontokens();
		if (this.pos >= this.buflen) {
			return null;
		}
		
		// The char at this.pos is part of a real token. Figure out which.
		let c = this.buf.charAt(this.pos);
		
		// '/' is treated specially, because it starts a comment if followed by
		// another '/'. If not followed by another '/', it's the DIVIDE
		// operator.
		if (c === '/') {
			let next_c = this.buf.charAt(this.pos + 1);
			if (next_c === '/') {
				return this._process_comment();
			} else {
				return {name: 'DIVIDE', value: '/', pos: this.pos++};
			}
		} else {
			// Look it up in the table of operators
			let op = this.operators[c];
			if (op !== undefined) {
				return {name: op, value: c, pos: this.pos++};
			} else {
				// Not an operator - so it's the beginning of another token.
				if (Lexer._isalpha(c)) {
					return this._process_identifier();
				} else if (Lexer._isdigit(c)) {
					return this._process_number();
				} else if (c === '"') {
					return this._process_quote();
				} else {
					throw Error('Token error at ' + this.pos);
				}
			}
		}
	}
	
	static _isnewline(c) {
		return c === '\r' || c === '\n';
	}
	
	static _isdigit(c) {
		return c >= '0' && c <= '9';
	}
	
	static _isalpha(c) {
		return (c >= 'a' && c <= 'z') ||
			(c >= 'A' && c <= 'Z') ||
			c === '_' || c === '$';
	}
	
	static _isalphanum(c) {
		return (c >= 'a' && c <= 'z') ||
			(c >= 'A' && c <= 'Z') ||
			(c >= '0' && c <= '9') ||
			c === '_' || c === '$';
	}
	
	static _process_number() {
		let endpos = this.pos + 1;
		while (endpos < this.buflen &&
		Lexer._isdigit(this.buf.charAt(endpos))) {
			endpos++;
		}
		
		let tok = {
			name: 'NUMBER',
			value: this.buf.substring(this.pos, endpos),
			pos: this.pos
		};
		this.pos = endpos;
		return tok;
	}
	
	
	_process_comment() {
		let endpos = this.pos + 2;
		// Skip until the end of the line
		let c = this.buf.charAt(this.pos + 2);
		while (endpos < this.buflen &&
		!Lexer._isnewline(this.buf.charAt(endpos))) {
			endpos++;
		}
		
		let tok = {
			name: 'COMMENT',
			value: this.buf.substring(this.pos, endpos),
			pos: this.pos
		};
		this.pos = endpos + 1;
		return tok;
	}
	
	_process_identifier() {
		let endpos = this.pos + 1;
		while (endpos < this.buflen &&
		Lexer._isalphanum(this.buf.charAt(endpos))) {
			endpos++;
		}
		
		let tok = {
			name: 'IDENTIFIER',
			value: this.buf.substring(this.pos, endpos),
			pos: this.pos
		};
		this.pos = endpos;
		return tok;
	}
	
	_process_quote() {
		// this.pos points at the opening quote. Find the ending quote.
		let end_index = this.buf.indexOf('"', this.pos + 1);
		
		if (end_index === -1) {
			throw Error('Unterminated quote at ' + this.pos);
		} else {
			let tok = {
				name: 'QUOTE',
				value: this.buf.substring(this.pos, end_index + 1),
				pos: this.pos
			};
			this.pos = end_index + 1;
			return tok;
		}
	}
	
}


new Lexer({
	name: 'Unify',
	operators: {
		'+': 'PLUS',
		'-': 'MINUS',
		'*': 'MULTIPLY',
		'.': 'PERIOD',
		'\\': 'BACKSLASH',
		':': 'COLON',
		'%': 'PERCENT',
		'|': 'PIPE',
		'!': 'EXCLAMATION',
		'?': 'QUESTION',
		'#': 'POUND',
		'&': 'AMPERSAND',
		';': 'SEMI',
		',': 'COMMA',
		'(': 'L_PAREN',
		')': 'R_PAREN',
		'<': 'L_ANG',
		'>': 'R_ANG',
		'{': 'L_BRACE',
		'}': 'R_BRACE',
		'[': 'L_BRACKET',
		']': 'R_BRACKET',
		'=': 'EQUALS'
	},
	keywords: [
		"if",
		"else",
		"while",
		"when",
		"whatIf",
		"switch",
		"case",
		"throw",
		"new",
		"elif",
		"class",
		"trait",
		"interface",
		"implements",
		"get",
		"set",
		"this",
		"supper",
		"parent",
		"instanceOf"
	],
	
});