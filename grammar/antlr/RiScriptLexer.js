// Generated from grammar/RiScriptLexer.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002#\u00f5\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002O\n\u0002\f\u0002\u000e\u0002R\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u0003]\n\u0003\f\u0003\u000e\u0003`\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0005\u0017\u0091\n\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0007\u001a\u009e\n\u001a\f\u001a",
    "\u000e\u001a\u00a1\u000b\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u00a5",
    "\n\u001a\f\u001a\u000e\u001a\u00a8\u000b\u001a\u0003\u001b\u0007\u001b",
    "\u00ab\n\u001b\f\u001b\u000e\u001b\u00ae\u000b\u001b\u0003\u001b\u0003",
    "\u001b\u0007\u001b\u00b2\n\u001b\f\u001b\u000e\u001b\u00b5\u000b\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u00bb\n",
    "\u001c\u0006\u001c\u00bd\n\u001c\r\u001c\u000e\u001c\u00be\u0003\u001d",
    "\u0003\u001d\u0006\u001d\u00c3\n\u001d\r\u001d\u000e\u001d\u00c4\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0007\u001e\u00ca\n\u001e\f\u001e\u000e",
    "\u001e\u00cd\u000b\u001e\u0003\u001e\u0006\u001e\u00d0\n\u001e\r\u001e",
    "\u000e\u001e\u00d1\u0003\u001e\u0007\u001e\u00d5\n\u001e\f\u001e\u000e",
    "\u001e\u00d8\u000b\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003 ",
    "\u0006 \u00de\n \r \u000e \u00df\u0003!\u0003!\u0007!\u00e4\n!\f!\u000e",
    "!\u00e7\u000b!\u0003\"\u0003\"\u0007\"\u00eb\n\"\f\"\u000e\"\u00ee\u000b",
    "\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003P\u0002%\u0004\u0003",
    "\u0006\u0004\b\u0005\n\u0006\f\u0007\u000e\b\u0010\t\u0012\n\u0014\u000b",
    "\u0016\f\u0018\r\u001a\u000e\u001c\u000f\u001e\u0010 \u0011\"\u0012",
    "$\u0013&\u0014(\u0015*\u0016,\u0017.\u00180\u00192\u001a4\u001b6\u001c",
    "8\u001d:\u001e<\u001f> @!B\u0002D\u0002F\"H#\u0004\u0002\u0003\f\u0005",
    "\u0002\f\f\u000f\u000f\u202a\u202b\u0004\u0002\u000b\u000b\"\"\u0006",
    "\u0002%%2;C\\c|\u0003\u00022;\b\u0002##&&,,>>@@``\n\u0002\u000b\f\"",
    "#&&*,01>@]`}\u007f\u0005\u0002C\\aac|\u0007\u0002//2;C\\aac|\u0006\u0002",
    "2;C\\aac|\u0003\u0002++\u0002\u0101\u0002\u0004\u0003\u0002\u0002\u0002",
    "\u0002\u0006\u0003\u0002\u0002\u0002\u0002\b\u0003\u0002\u0002\u0002",
    "\u0002\n\u0003\u0002\u0002\u0002\u0002\f\u0003\u0002\u0002\u0002\u0002",
    "\u000e\u0003\u0002\u0002\u0002\u0002\u0010\u0003\u0002\u0002\u0002\u0002",
    "\u0012\u0003\u0002\u0002\u0002\u0002\u0014\u0003\u0002\u0002\u0002\u0002",
    "\u0016\u0003\u0002\u0002\u0002\u0002\u0018\u0003\u0002\u0002\u0002\u0002",
    "\u001a\u0003\u0002\u0002\u0002\u0002\u001c\u0003\u0002\u0002\u0002\u0002",
    "\u001e\u0003\u0002\u0002\u0002\u0002 \u0003\u0002\u0002\u0002\u0002",
    "\"\u0003\u0002\u0002\u0002\u0002$\u0003\u0002\u0002\u0002\u0002&\u0003",
    "\u0002\u0002\u0002\u0002(\u0003\u0002\u0002\u0002\u0002*\u0003\u0002",
    "\u0002\u0002\u0002,\u0003\u0002\u0002\u0002\u0002.\u0003\u0002\u0002",
    "\u0002\u00020\u0003\u0002\u0002\u0002\u00022\u0003\u0002\u0002\u0002",
    "\u00024\u0003\u0002\u0002\u0002\u00026\u0003\u0002\u0002\u0002\u0002",
    "8\u0003\u0002\u0002\u0002\u0002:\u0003\u0002\u0002\u0002\u0002<\u0003",
    "\u0002\u0002\u0002\u0002>\u0003\u0002\u0002\u0002\u0002@\u0003\u0002",
    "\u0002\u0002\u0003F\u0003\u0002\u0002\u0002\u0003H\u0003\u0002\u0002",
    "\u0002\u0004J\u0003\u0002\u0002\u0002\u0006X\u0003\u0002\u0002\u0002",
    "\bc\u0003\u0002\u0002\u0002\ne\u0003\u0002\u0002\u0002\fg\u0003\u0002",
    "\u0002\u0002\u000el\u0003\u0002\u0002\u0002\u0010n\u0003\u0002\u0002",
    "\u0002\u0012p\u0003\u0002\u0002\u0002\u0014r\u0003\u0002\u0002\u0002",
    "\u0016t\u0003\u0002\u0002\u0002\u0018v\u0003\u0002\u0002\u0002\u001a",
    "x\u0003\u0002\u0002\u0002\u001cz\u0003\u0002\u0002\u0002\u001e|\u0003",
    "\u0002\u0002\u0002 ~\u0003\u0002\u0002\u0002\"\u0080\u0003\u0002\u0002",
    "\u0002$\u0082\u0003\u0002\u0002\u0002&\u0084\u0003\u0002\u0002\u0002",
    "(\u0086\u0003\u0002\u0002\u0002*\u0088\u0003\u0002\u0002\u0002,\u008d",
    "\u0003\u0002\u0002\u0002.\u0090\u0003\u0002\u0002\u00020\u0094\u0003",
    "\u0002\u0002\u00022\u0099\u0003\u0002\u0002\u00024\u009f\u0003\u0002",
    "\u0002\u00026\u00ac\u0003\u0002\u0002\u00028\u00bc\u0003\u0002\u0002",
    "\u0002:\u00c0\u0003\u0002\u0002\u0002<\u00cb\u0003\u0002\u0002\u0002",
    ">\u00d9\u0003\u0002\u0002\u0002@\u00dd\u0003\u0002\u0002\u0002B\u00e1",
    "\u0003\u0002\u0002\u0002D\u00e8\u0003\u0002\u0002\u0002F\u00ef\u0003",
    "\u0002\u0002\u0002H\u00f1\u0003\u0002\u0002\u0002JK\u00071\u0002\u0002",
    "KL\u0007,\u0002\u0002LP\u0003\u0002\u0002\u0002MO\u000b\u0002\u0002",
    "\u0002NM\u0003\u0002\u0002\u0002OR\u0003\u0002\u0002\u0002PQ\u0003\u0002",
    "\u0002\u0002PN\u0003\u0002\u0002\u0002QS\u0003\u0002\u0002\u0002RP\u0003",
    "\u0002\u0002\u0002ST\u0007,\u0002\u0002TU\u00071\u0002\u0002UV\u0003",
    "\u0002\u0002\u0002VW\b\u0002\u0002\u0002W\u0005\u0003\u0002\u0002\u0002",
    "XY\u00071\u0002\u0002YZ\u00071\u0002\u0002Z^\u0003\u0002\u0002\u0002",
    "[]\n\u0002\u0002\u0002\\[\u0003\u0002\u0002\u0002]`\u0003\u0002\u0002",
    "\u0002^\\\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_a\u0003",
    "\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002ab\b\u0003\u0002\u0002b",
    "\u0007\u0003\u0002\u0002\u0002cd\u0007@\u0002\u0002d\t\u0003\u0002\u0002",
    "\u0002ef\u0007>\u0002\u0002f\u000b\u0003\u0002\u0002\u0002gh\u0006\u0006",
    "\u0002\u0002hi\u0007*\u0002\u0002ij\u0003\u0002\u0002\u0002jk\b\u0006",
    "\u0003\u0002k\r\u0003\u0002\u0002\u0002lm\u0007*\u0002\u0002m\u000f",
    "\u0003\u0002\u0002\u0002no\u0007+\u0002\u0002o\u0011\u0003\u0002\u0002",
    "\u0002pq\u0007]\u0002\u0002q\u0013\u0003\u0002\u0002\u0002rs\u0007_",
    "\u0002\u0002s\u0015\u0003\u0002\u0002\u0002tu\u0007}\u0002\u0002u\u0017",
    "\u0003\u0002\u0002\u0002vw\u0007\u007f\u0002\u0002w\u0019\u0003\u0002",
    "\u0002\u0002xy\u00070\u0002\u0002y\u001b\u0003\u0002\u0002\u0002z{\t",
    "\u0003\u0002\u0002{\u001d\u0003\u0002\u0002\u0002|}\u00071\u0002\u0002",
    "}\u001f\u0003\u0002\u0002\u0002~\u007f\u0007#\u0002\u0002\u007f!\u0003",
    "\u0002\u0002\u0002\u0080\u0081\u0007,\u0002\u0002\u0081#\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0007`\u0002\u0002\u0083%\u0003\u0002\u0002",
    "\u0002\u0084\u0085\u0007&\u0002\u0002\u0085\'\u0003\u0002\u0002\u0002",
    "\u0086\u0087\u0007.\u0002\u0002\u0087)\u0003\u0002\u0002\u0002\u0088",
    "\u0089\u0007^\u0002\u0002\u0089\u008a\u0005.\u0017\u0002\u008a\u008b",
    "\u0003\u0002\u0002\u0002\u008b\u008c\b\u0015\u0002\u0002\u008c+\u0003",
    "\u0002\u0002\u0002\u008d\u008e\u0007^\u0002\u0002\u008e-\u0003\u0002",
    "\u0002\u0002\u008f\u0091\u0007\u000f\u0002\u0002\u0090\u008f\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0007\f\u0002\u0002\u0093/\u0003\u0002\u0002",
    "\u0002\u0094\u0095\u0007&\u0002\u0002\u0095\u0096\u0007&\u0002\u0002",
    "\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0098\u0005D\"\u0002\u0098",
    "1\u0003\u0002\u0002\u0002\u0099\u009a\u0007&\u0002\u0002\u009a\u009b",
    "\u0005D\"\u0002\u009b3\u0003\u0002\u0002\u0002\u009c\u009e\u0005\u001c",
    "\u000e\u0002\u009d\u009c\u0003\u0002\u0002\u0002\u009e\u00a1\u0003\u0002",
    "\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002",
    "\u0002\u0002\u00a0\u00a2\u0003\u0002\u0002\u0002\u00a1\u009f\u0003\u0002",
    "\u0002\u0002\u00a2\u00a6\u0007~\u0002\u0002\u00a3\u00a5\u0005\u001c",
    "\u000e\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a8\u0003\u0002",
    "\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002",
    "\u0002\u0002\u00a75\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002",
    "\u0002\u0002\u00a9\u00ab\u0005\u001c\u000e\u0002\u00aa\u00a9\u0003\u0002",
    "\u0002\u0002\u00ab\u00ae\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00af\u0003\u0002",
    "\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00af\u00b3\u0007?",
    "\u0002\u0002\u00b0\u00b2\u0005\u001c\u000e\u0002\u00b1\u00b0\u0003\u0002",
    "\u0002\u0002\u00b2\u00b5\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b47\u0003\u0002",
    "\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b6\u00b7\u00070",
    "\u0002\u0002\u00b7\u00ba\u0005B!\u0002\u00b8\u00b9\u0007*\u0002\u0002",
    "\u00b9\u00bb\u0007+\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002",
    "\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00bd\u0003\u0002\u0002\u0002",
    "\u00bc\u00b6\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002",
    "\u00be\u00bc\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002",
    "\u00bf9\u0003\u0002\u0002\u0002\u00c0\u00c2\u0007(\u0002\u0002\u00c1",
    "\u00c3\t\u0004\u0002\u0002\u00c2\u00c1\u0003\u0002\u0002\u0002\u00c3",
    "\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c4",
    "\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6",
    "\u00c7\u0007=\u0002\u0002\u00c7;\u0003\u0002\u0002\u0002\u00c8\u00ca",
    "\u0005\u001c\u000e\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cd",
    "\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00cc",
    "\u0003\u0002\u0002\u0002\u00cc\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cb",
    "\u0003\u0002\u0002\u0002\u00ce\u00d0\t\u0005\u0002\u0002\u00cf\u00ce",
    "\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00cf",
    "\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d6",
    "\u0003\u0002\u0002\u0002\u00d3\u00d5\u0005\u001c\u000e\u0002\u00d4\u00d3",
    "\u0003\u0002\u0002\u0002\u00d5\u00d8\u0003\u0002\u0002\u0002\u00d6\u00d4",
    "\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7=",
    "\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d9\u00da",
    "\t\u0006\u0002\u0002\u00da\u00db\u0007?\u0002\u0002\u00db?\u0003\u0002",
    "\u0002\u0002\u00dc\u00de\n\u0007\u0002\u0002\u00dd\u00dc\u0003\u0002",
    "\u0002\u0002\u00de\u00df\u0003\u0002\u0002\u0002\u00df\u00dd\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0A\u0003\u0002",
    "\u0002\u0002\u00e1\u00e5\t\b\u0002\u0002\u00e2\u00e4\t\t\u0002\u0002",
    "\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e4\u00e7\u0003\u0002\u0002\u0002",
    "\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002",
    "\u00e6C\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002",
    "\u00e8\u00ec\t\n\u0002\u0002\u00e9\u00eb\t\t\u0002\u0002\u00ea\u00e9",
    "\u0003\u0002\u0002\u0002\u00eb\u00ee\u0003\u0002\u0002\u0002\u00ec\u00ea",
    "\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00edE",
    "\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef\u00f0",
    "\n\u000b\u0002\u0002\u00f0G\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007",
    "+\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3\u00f4\b$\u0004",
    "\u0002\u00f4I\u0003\u0002\u0002\u0002\u0014\u0002\u0003P^\u0090\u009f",
    "\u00a6\u00ac\u00b3\u00ba\u00be\u00c4\u00cb\u00d1\u00d6\u00df\u00e5\u00ec",
    "\u0005\u0002\u0003\u0002\u0007\u0003\u0002\u0006\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function RiScriptLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

RiScriptLexer.prototype = Object.create(antlr4.Lexer.prototype);
RiScriptLexer.prototype.constructor = RiScriptLexer;

Object.defineProperty(RiScriptLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

RiScriptLexer.EOF = antlr4.Token.EOF;
RiScriptLexer.LCOMM = 1;
RiScriptLexer.BCOMM = 2;
RiScriptLexer.GT = 3;
RiScriptLexer.LT = 4;
RiScriptLexer.MDS = 5;
RiScriptLexer.LP = 6;
RiScriptLexer.RP = 7;
RiScriptLexer.LB = 8;
RiScriptLexer.RB = 9;
RiScriptLexer.LCB = 10;
RiScriptLexer.RCB = 11;
RiScriptLexer.DOT = 12;
RiScriptLexer.WS = 13;
RiScriptLexer.FS = 14;
RiScriptLexer.EXC = 15;
RiScriptLexer.AST = 16;
RiScriptLexer.HAT = 17;
RiScriptLexer.DOL = 18;
RiScriptLexer.COM = 19;
RiScriptLexer.CONT = 20;
RiScriptLexer.BS = 21;
RiScriptLexer.NL = 22;
RiScriptLexer.DYN = 23;
RiScriptLexer.SYM = 24;
RiScriptLexer.OR = 25;
RiScriptLexer.EQ = 26;
RiScriptLexer.TF = 27;
RiScriptLexer.ENT = 28;
RiScriptLexer.INT = 29;
RiScriptLexer.OP = 30;
RiScriptLexer.CHR = 31;
RiScriptLexer.MDT = 32;
RiScriptLexer.MDE = 33;

RiScriptLexer.MD = 1;

RiScriptLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

RiScriptLexer.prototype.modeNames = [ "DEFAULT_MODE", "MD" ];

RiScriptLexer.prototype.literalNames = [ null, null, null, "'>'", "'<'", 
                                         null, "'('", null, "'['", "']'", 
                                         "'{'", "'}'", "'.'", null, "'/'", 
                                         "'!'", "'*'", "'^'", "'$'", "','", 
                                         null, "'\\'" ];

RiScriptLexer.prototype.symbolicNames = [ null, "LCOMM", "BCOMM", "GT", 
                                          "LT", "MDS", "LP", "RP", "LB", 
                                          "RB", "LCB", "RCB", "DOT", "WS", 
                                          "FS", "EXC", "AST", "HAT", "DOL", 
                                          "COM", "CONT", "BS", "NL", "DYN", 
                                          "SYM", "OR", "EQ", "TF", "ENT", 
                                          "INT", "OP", "CHR", "MDT", "MDE" ];

RiScriptLexer.prototype.ruleNames = [ "LCOMM", "BCOMM", "GT", "LT", "MDS", 
                                      "LP", "RP", "LB", "RB", "LCB", "RCB", 
                                      "DOT", "WS", "FS", "EXC", "AST", "HAT", 
                                      "DOL", "COM", "CONT", "BS", "NL", 
                                      "DYN", "SYM", "OR", "EQ", "TF", "ENT", 
                                      "INT", "OP", "CHR", "IDENT", "NIDENT", 
                                      "MDT", "MDE" ];

RiScriptLexer.prototype.grammarFileName = "RiScriptLexer.g4";

RiScriptLexer.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch (ruleIndex) {
		case 4:
			return this.MDS_sempred(localctx, predIndex);
    	default:
    		throw "No registered predicate for:" + ruleIndex;
    }
};

RiScriptLexer.prototype.MDS_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this._input.LA(-1)=="]".charCodeAt(0);
		default:
			throw "No predicate with index:" + predIndex;
	}
};



exports.RiScriptLexer = RiScriptLexer;

