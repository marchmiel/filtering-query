// Generated from FilterQuery.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts-browser/atn/ATN";
import { ATNDeserializer } from "antlr4ts-browser/atn/ATNDeserializer";
import { CharStream } from "antlr4ts-browser/CharStream";
import { Lexer } from "antlr4ts-browser/Lexer";
import { LexerATNSimulator } from "antlr4ts-browser/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts-browser/Decorators";
import { Override } from "antlr4ts-browser/Decorators";
import { RuleContext } from "antlr4ts-browser/RuleContext";
import { Vocabulary } from "antlr4ts-browser/Vocabulary";
import { VocabularyImpl } from "antlr4ts-browser/VocabularyImpl";

import * as Utils from "antlr4ts-browser/misc/Utils";


export class FilterQueryLexer extends Lexer {
	public static readonly LPAR = 1;
	public static readonly RPAR = 2;
	public static readonly COMMA = 3;
	public static readonly OR = 4;
	public static readonly AND = 5;
	public static readonly NOT = 6;
	public static readonly EQ = 7;
	public static readonly NE = 8;
	public static readonly GT = 9;
	public static readonly GE = 10;
	public static readonly LT = 11;
	public static readonly LE = 12;
	public static readonly APPROX = 13;
	public static readonly ATTRIBUTE_NAME = 14;
	public static readonly NUMBER = 15;
	public static readonly STRING = 16;
	public static readonly TRUE = 17;
	public static readonly FALSE = 18;
	public static readonly SPACE = 19;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"LPAR", "RPAR", "COMMA", "OR", "AND", "NOT", "EQ", "NE", "GT", "GE", "LT", 
		"LE", "APPROX", "ATTRIBUTE_NAME", "NUMBER", "STRING_CONTENT", "STRING", 
		"TRUE", "FALSE", "SPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "','", "'or'", "'and'", "'not'", "'='", "'!='", 
		"'>'", "'>='", "'<'", "'<='", "'~='", undefined, undefined, undefined, 
		"'true'", "'false'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LPAR", "RPAR", "COMMA", "OR", "AND", "NOT", "EQ", "NE", "GT", 
		"GE", "LT", "LE", "APPROX", "ATTRIBUTE_NAME", "NUMBER", "STRING", "TRUE", 
		"FALSE", "SPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FilterQueryLexer._LITERAL_NAMES, FilterQueryLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FilterQueryLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(FilterQueryLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "FilterQuery.g4"; }

	// @Override
	public get ruleNames(): string[] { return FilterQueryLexer.ruleNames; }

	// @Override
	// @ts-ignore
	public get serializedATN(): string { return FilterQueryLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return FilterQueryLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return FilterQueryLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x15\x8E\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x07\x0FQ\n\x0F\f\x0F\x0E\x0FT\v\x0F\x03\x10" +
		"\x05\x10W\n\x10\x03\x10\x06\x10Z\n\x10\r\x10\x0E\x10[\x03\x10\x05\x10" +
		"_\n\x10\x03\x10\x07\x10b\n\x10\f\x10\x0E\x10e\v\x10\x03\x10\x03\x10\x06" +
		"\x10i\n\x10\r\x10\x0E\x10j\x05\x10m\n\x10\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x07\x11t\n\x11\f\x11\x0E\x11w\v\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x15\x06\x15\x89\n\x15\r\x15\x0E\x15\x8A\x03" +
		"\x15\x03\x15\x02\x02\x02\x16\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
		"\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x02#\x02\x12%" +
		"\x02\x13\'\x02\x14)\x02\x15\x03\x02\b\x05\x02C\\aac|\x07\x02002;C\\aa" +
		"c|\x04\x02--//\x03\x022;\x06\x02\f\f\x0E\x0F$$^^\x04\x02\v\v\"\"\x02\x97" +
		"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
		"\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02" +
		"\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02" +
		"\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02" +
		"\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02" +
		"#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
		"\x02\x02\x02\x03+\x03\x02\x02\x02\x05-\x03\x02\x02\x02\x07/\x03\x02\x02" +
		"\x02\t1\x03\x02\x02\x02\v4\x03\x02\x02\x02\r8\x03\x02\x02\x02\x0F<\x03" +
		"\x02\x02\x02\x11>\x03\x02\x02\x02\x13A\x03\x02\x02\x02\x15C\x03\x02\x02" +
		"\x02\x17F\x03\x02\x02\x02\x19H\x03\x02\x02\x02\x1BK\x03\x02\x02\x02\x1D" +
		"N\x03\x02\x02\x02\x1Fl\x03\x02\x02\x02!u\x03\x02\x02\x02#x\x03\x02\x02" +
		"\x02%|\x03\x02\x02\x02\'\x81\x03\x02\x02\x02)\x88\x03\x02\x02\x02+,\x07" +
		"*\x02\x02,\x04\x03\x02\x02\x02-.\x07+\x02\x02.\x06\x03\x02\x02\x02/0\x07" +
		".\x02\x020\b\x03\x02\x02\x0212\x07q\x02\x0223\x07t\x02\x023\n\x03\x02" +
		"\x02\x0245\x07c\x02\x0256\x07p\x02\x0267\x07f\x02\x027\f\x03\x02\x02\x02" +
		"89\x07p\x02\x029:\x07q\x02\x02:;\x07v\x02\x02;\x0E\x03\x02\x02\x02<=\x07" +
		"?\x02\x02=\x10\x03\x02\x02\x02>?\x07#\x02\x02?@\x07?\x02\x02@\x12\x03" +
		"\x02\x02\x02AB\x07@\x02\x02B\x14\x03\x02\x02\x02CD\x07@\x02\x02DE\x07" +
		"?\x02\x02E\x16\x03\x02\x02\x02FG\x07>\x02\x02G\x18\x03\x02\x02\x02HI\x07" +
		">\x02\x02IJ\x07?\x02\x02J\x1A\x03\x02\x02\x02KL\x07\x80\x02\x02LM\x07" +
		"?\x02\x02M\x1C\x03\x02\x02\x02NR\t\x02\x02\x02OQ\t\x03\x02\x02PO\x03\x02" +
		"\x02\x02QT\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02S\x1E\x03" +
		"\x02\x02\x02TR\x03\x02\x02\x02UW\t\x04\x02\x02VU\x03\x02\x02\x02VW\x03" +
		"\x02\x02\x02WY\x03\x02\x02\x02XZ\t\x05\x02\x02YX\x03\x02\x02\x02Z[\x03" +
		"\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\m\x03\x02\x02\x02]" +
		"_\t\x04\x02\x02^]\x03\x02\x02\x02^_\x03\x02\x02\x02_c\x03\x02\x02\x02" +
		"`b\t\x05\x02\x02a`\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02\x02" +
		"cd\x03\x02\x02\x02df\x03\x02\x02\x02ec\x03\x02\x02\x02fh\x070\x02\x02" +
		"gi\t\x05\x02\x02hg\x03\x02\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02" +
		"jk\x03\x02\x02\x02km\x03\x02\x02\x02lV\x03\x02\x02\x02l^\x03\x02\x02\x02" +
		"m \x03\x02\x02\x02nt\n\x06\x02\x02op\x07^\x02\x02pt\x07$\x02\x02qr\x07" +
		"^\x02\x02rt\x07^\x02\x02sn\x03\x02\x02\x02so\x03\x02\x02\x02sq\x03\x02" +
		"\x02\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02v\"\x03" +
		"\x02\x02\x02wu\x03\x02\x02\x02xy\x07$\x02\x02yz\x05!\x11\x02z{\x07$\x02" +
		"\x02{$\x03\x02\x02\x02|}\x07v\x02\x02}~\x07t\x02\x02~\x7F\x07w\x02\x02" +
		"\x7F\x80\x07g\x02\x02\x80&\x03\x02\x02\x02\x81\x82\x07h\x02\x02\x82\x83" +
		"\x07c\x02\x02\x83\x84\x07n\x02\x02\x84\x85\x07u\x02\x02\x85\x86\x07g\x02" +
		"\x02\x86(\x03\x02\x02\x02\x87\x89\t\x07\x02\x02\x88\x87\x03\x02\x02\x02" +
		"\x89\x8A\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02" +
		"\x8B\x8C\x03\x02\x02\x02\x8C\x8D\b\x15\x02\x02\x8D*\x03\x02\x02\x02\r" +
		"\x02RV[^cjlsu\x8A\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FilterQueryLexer.__ATN) {
			FilterQueryLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FilterQueryLexer._serializedATN));
		}

		return FilterQueryLexer.__ATN;
	}

}

