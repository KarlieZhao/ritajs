const expect = require('chai').expect;
const RiTa = require('../src/rita_api');

describe('RiTa.Core', () => {

  it('Should correctly call stem', () => {

    eq(RiTa.stem("cakes"), "cake");

    eq(RiTa.stem("run"), "run");
    eq(RiTa.stem("runs"), "run");
    eq(RiTa.stem("running"), "running");

    eq(RiTa.stem("take"), "take");
    eq(RiTa.stem("takes"), "take");
    eq(RiTa.stem("taking"), "taking");

    eq(RiTa.stem("hide"), "hide");
    eq(RiTa.stem("hides"), "hide");
    eq(RiTa.stem("hiding"), "hiding");

    eq(RiTa.stem("become"), "become");
    eq(RiTa.stem("becomes"), "become");
    eq(RiTa.stem("becoming"), "becoming");

    eq(RiTa.stem("gases"), "gas");
    eq(RiTa.stem("buses"), "bus");
    eq(RiTa.stem("happiness"), "happiness");
    eq(RiTa.stem("terrible"), "terrible");

    let test = "Stemming is funnier than a bummer";
    let result = "Stemming is funnier than a bummer";
    // TODO: RiTa.stem(pling) JS decapitalizes input whereas the java version does not
    eq(RiTa.stem(test), result);
  });

  it('Should call randomOrdering', () => {
    expect(RiTa.randomOrdering(1)).eql([0]);
    expect(RiTa.randomOrdering(2)).to.have.members([0, 1])
    expect(RiTa.randomOrdering(['a'])).eql(['a']);
    expect(RiTa.randomOrdering(['a', 'b'])).to.have.members(['a', 'b']);
  });

  it('Should correctly call isQuestion', () => {
    ok(RiTa.isQuestion("what"));
    ok(RiTa.isQuestion("what"));
    ok(RiTa.isQuestion("what is this"));
    ok(RiTa.isQuestion("what is this?"));
    ok(RiTa.isQuestion("Does it?"));
    ok(RiTa.isQuestion("Would you believe it?"));
    ok(RiTa.isQuestion("Have you been?"));
    ok(RiTa.isQuestion("Is this yours?"));
    ok(RiTa.isQuestion("Are you done?"));
    ok(RiTa.isQuestion("what is this? , where is that?"));
    ok(!RiTa.isQuestion("That is not a toy This is an apple"));
    ok(!RiTa.isQuestion("string"));
    ok(!RiTa.isQuestion("?"));
    ok(!RiTa.isQuestion(""));
  });

  it('Should correctly call isAbbreviation', () => {

    ok(RiTa.isAbbreviation("Dr."));
    ok(RiTa.isAbbreviation("dr."));
    //T in java

    ok(!RiTa.isAbbreviation("DR."));
    // F in Processing.lowercase is true but uppercase is false
    ok(!RiTa.isAbbreviation("Dr. "));
    //space
    ok(!RiTa.isAbbreviation(" Dr."));
    //space
    ok(!RiTa.isAbbreviation("  Dr."));
    //double space
    ok(!RiTa.isAbbreviation("Dr.  "));
    //double space
    ok(!RiTa.isAbbreviation("   Dr."));
    //tab space
    ok(!RiTa.isAbbreviation("Dr.    "));
    //tab space
    ok(!RiTa.isAbbreviation("Dr"));
    ok(!RiTa.isAbbreviation("Doctor"));
    ok(!RiTa.isAbbreviation("Doctor."));

    ok(RiTa.isAbbreviation("Prof."));
    ok(RiTa.isAbbreviation("prof."));
    //T in java
    ok(!RiTa.isAbbreviation("PRFO."));
    //  F in Processing. lowercase is true but uppercase is false
    ok(!RiTa.isAbbreviation("PrFo."));
    //  F in Processing. lowercase is true but uppercase is false
    ok(!RiTa.isAbbreviation("Professor"));
    ok(!RiTa.isAbbreviation("professor"));
    ok(!RiTa.isAbbreviation("PROFESSOR"));
    ok(!RiTa.isAbbreviation("Professor."));

    ok(!RiTa.isAbbreviation("@#$%^&*()"));

    ok(!RiTa.isAbbreviation(""));
    ok(!RiTa.isAbbreviation(null));
    ok(!RiTa.isAbbreviation(undefined));
    ok(!RiTa.isAbbreviation(1));
  });

  it('Should correctly call isPunctuation', () => {

    ok(!RiTa.isPunctuation("What the"));
    ok(!RiTa.isPunctuation("What ! the"));
    ok(!RiTa.isPunctuation(".#\"\\!@i$%&}<>"));

    ok(RiTa.isPunctuation("!"));
    ok(RiTa.isPunctuation("?"));
    ok(RiTa.isPunctuation("?!"));
    ok(RiTa.isPunctuation("."));
    ok(RiTa.isPunctuation(".."));
    ok(RiTa.isPunctuation("..."));
    ok(RiTa.isPunctuation("...."));
    ok(RiTa.isPunctuation("%..."));

    ok(!RiTa.isPunctuation("! "));
    //space
    ok(!RiTa.isPunctuation(" !"));
    //space
    ok(!RiTa.isPunctuation("!  "));
    //double space
    ok(!RiTa.isPunctuation("  !"));
    //double space
    ok(!RiTa.isPunctuation("!  "));
    //tab space
    ok(!RiTa.isPunctuation("   !"));

    let punct;

    punct = '$%&^,';
    for (let i = 0; i < punct.length; i++) {
      ok(RiTa.isPunctuation(punct[i]));
    }

    punct = ",;:!?)([].#\"\\!@$%&}<>|+=-_\\/*{^";
    for (let i = 0; i < punct.length; i++) {
      ok(RiTa.isPunctuation(punct[i]), punct[i]);
    }

    // TODO: also test multiple characters strings here ****
    punct = "\"��������`'";
    for (let i = 0; i < punct.length; i++) {
      ok(RiTa.isPunctuation(punct[i]), punct[i]);
    }

    punct = "\"��������`',;:!?)([].#\"\\!@$%&}<>|+=-_\\/*{^";
    for (let i = 0; i < punct.length; i++) {
      ok(RiTa.isPunctuation(punct[i]), punct[i]);
    }

    // TODO: and here...
    let nopunct = 'Helloasdfnals  FgG   \t kjdhfakjsdhf askjdfh aaf98762348576';
    for (let i = 0; i < nopunct.length; i++) {
      ok(!RiTa.isPunctuation(nopunct[i]), nopunct[i]);
    }

    ok(!RiTa.isPunctuation(""));
  });

  let pluralSingularPairs = [
    "dazes", "daze",
    "hives", "hive",
    "dives", "dive",
    "octopuses", "octopus",
    "wildlife", "wildlife",
    "media", "medium",
    "millennia", "millennium",
    "consortia", "consortium",
    "concerti", "concerto",
    "septa", "septum",
    "termini", "terminus",
    "larvas", "larva",
    "vertebras", "vertebra",
    "hooves", "hoof",
    "thieves", "thief",
    "rabbis", "rabbi",
    "flu", "flu",
    "safaris", "safari",
    "sheaves", "sheaf",
    "uses", "use",
    "pinches", "pinch",
    "hankies", "hanky",
    "spoofs", "spoof",
    "proofs", "proof",
    "roofs", "roof",
    "disbeliefs", "disbelief",
    "beliefs", "belief",
    "indices", "index",
    "accomplices", "accomplice",
    "catharses", 'catharsis',
    "prognoses", 'prognosis',
    'whizzes', 'whiz',
    'selves', 'self',
    'bookshelves', 'bookshelf',
    'wheezes', 'wheeze',
    'diagnoses', 'diagnosis',
    'minutiae', 'minutia',
    'blondes', 'blonde',
    'eyes', 'eye',
    'swine', 'swine',
    'cognoscenti', 'cognoscenti',
    'bonsai', 'bonsai',
    'taxis', 'taxi',
    'chiefs', 'chief',
    'monarchs', 'monarch',
    'lochs', 'loch',
    'stomachs', 'stomach',
    'Chinese', 'Chinese',
    'people', 'person',
    'humans', 'human',
    'germans', 'german',
    'romans', 'roman',
    'memoranda', 'memorandum',
    'data', 'datum',
    'appendices', 'appendix',
    'theses', 'thesis',
    'alumni', 'alumnus',
    'solos', 'solo',
    'music', 'music',
    'oxen', 'ox',
    'solos', 'solo',
    'music', 'music',
    'money', 'money',
    'beef', 'beef',
    'tobacco', 'tobacco',
    'cargo', 'cargo',
    'golf', 'golf',
    'grief', 'grief',
    'cakes', 'cake',
    'tomatoes', 'tomato',
    'photos', 'photo',
    'smallpox', 'smallpox',
    'toes', 'toe',
    'series', 'series',
    'oxen', 'ox',
    'men', 'man',
    'mice', 'mouse',
    'lice', 'louse',
    'children', 'child',
    'gases', 'gas',
    'buses', 'bus',
    'happiness', 'happiness',
    'crises', 'crisis',
    'theses', 'thesis',
    'apotheses', 'apothesis',
    'stimuli', 'stimulus',
    'alumni', 'alumnus',
    'corpora', 'corpus',
    'dogs', 'dog',
    'feet', 'foot',
    'teeth', 'tooth',
    'kisses', 'kiss',
    'deer', 'deer',
    'sheep', 'sheep',
    'shrimp', 'shrimp',
    'men', 'man',
    'women', 'woman',
    'congressmen', 'congressman',
    'aldermen', 'alderman',
    'freshmen', 'freshman',
    'firemen', 'fireman',
    'grandchildren', 'grandchild',
    'menus', 'menu',
    'gurus', 'guru',
    'hardness', 'hardness',
    'shortness', 'shortness',
    'dreariness', 'dreariness',
    'unwillingness', 'unwillingness',
    'fish', 'fish',
    'ooze', 'ooze',
    'enterprises', 'enterprise',
    'treatises', 'treatise',
    'houses', 'house',
    'chemises', 'chemise',
    'aquatics', 'aquatics',
    'mechanics', 'mechanics',
    'quarters', 'quarter',
    'motifs', 'motif',
    'alumni', 'alumnus',
    "turf", "turf",
    "macaroni", "macaroni",
    "spaghetti", "spaghetti",
    "potpourri", "potpourri",
    "electrolysis", "electrolysis",
    "eyes", "eye",
    "teeth", "tooth",
    "cakes", "cake",
    "kisses", "kiss",
    "lice", "louse",
    "series", "series",
    "crises", "crisis",
    "theses", "thesis",
    "apotheses", "apothesis",
    "stimuli", "stimulus",
    "alumni", "alumnus",
    "corpora", "corpus",
    "menus", "menu",
    "hardness", "hardness",
    "shortness", "shortness",
    "dreariness", "dreariness",
    "unwillingness", "unwillingness",
    "moose", "moose",
    "toes", "toe",
    "tobacco", "tobacco",
    "cargo", "cargo",
    "golf", "golf",
    "grief", "grief",
    "taxis", "taxi",
    "bonsai", "bonsai",
    "lives", "life",
    "additives", "additive",
    'epochs', 'epoch',
    'ranchs', 'ranch',
    'alcoves', 'alcove',
    'goddesses', 'goddess',
    'tresses', 'tress',
    'murderesses', 'murderess',
  ];

  it('Should correctly handle number (singular/plural)', () => {
    let res1, res2, dbug = 0;

    for (let i = 0; i < pluralSingularPairs.length; i += 2) {

      dbug && console.log(pluralSingularPairs[i] + '/' + pluralSingularPairs[i + 1]);

      res1 = RiTa.singularize(pluralSingularPairs[i], { dbug: dbug });
      res2 = RiTa.pluralize(pluralSingularPairs[i + 1], { dbug: dbug });
      res3 = RiTa.pluralizer.isPlural(pluralSingularPairs[i], { dbug: dbug });

      eq(res1, pluralSingularPairs[i + 1], 'FAIL: singularize(' + pluralSingularPairs[i]
        + ') was ' + res1 + ', but expected ' + pluralSingularPairs[i + 1] + '\n        '
        + 'pluralize(' + pluralSingularPairs[i + 1] + ') was ' + res2 + '\n\n');

      // pluralize
      eq(res2, pluralSingularPairs[i], 'FAIL: pluralize(' + pluralSingularPairs[i + 1]
        + ') was ' + res2 + ', but expected ' + pluralSingularPairs[i] + '\n        '
        + 'singularize(' + pluralSingularPairs[i] + ') was ' + res1 + '\n\n');

      ok(res3, 'FAIL: isPlural(' + pluralSingularPairs[i] + ') was false\n\n');
    }
  });

  function ok(res, m) { expect(res).eq(true, m); return 1; }
  function eq(a, b, m) { expect(a).eq(b, m); return 1; }
});
