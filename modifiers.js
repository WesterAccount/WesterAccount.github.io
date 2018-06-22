var CARD_TYPES_MODIFIER =
{
    BLESS:  "bless",
    CURSE:  "curse",
    PLUS0:  "plus0",
    PLUS1:  "plus1",
    PLUS2:  "plus2",
    MINUS1: "minus1",
    NULL:   "null",
    DOUBLE: "double",
    LEAF: "leaf",
    WIND: "wind",
    DARK: "dark",
    HEAL: "heal",
    LIGHT: "light",
    POISON: "poison",
    MUDDLE: "muddle",
    WOUND: "wound",
};

var MODIFIER_CARDS =
    { BLESS:  { 'type': CARD_TYPES_MODIFIER.BLESS,  'shuffle': false, 'image': 'images/attack_mod_bless.jpg' }
    , CURSE:  { 'type': CARD_TYPES_MODIFIER.CURSE,  'shuffle': false, 'image': 'images/attack_mod_curse.jpg' }
    , PLUS0:  { 'type': CARD_TYPES_MODIFIER.PLUS0,  'shuffle': false, 'image': 'images/attack_mod_+0.jpg' }
    , PLUS1:  { 'type': CARD_TYPES_MODIFIER.PLUS1,  'shuffle': false, 'image': 'images/attack_mod_+1.jpg' }
    , PLUS2:  { 'type': CARD_TYPES_MODIFIER.PLUS2,  'shuffle': false, 'image': 'images/attack_mod_+2.jpg' }
    , MINUS1: { 'type': CARD_TYPES_MODIFIER.MINUS1, 'shuffle': false, 'image': 'images/attack_mod_-1.jpg' }
    , NULL:   { 'type': CARD_TYPES_MODIFIER.NULL,   'shuffle': true,  'image': 'images/attack_mod_null.jpg' }
    , DOUBLE: { 'type': CARD_TYPES_MODIFIER.DOUBLE, 'shuffle': true,  'image': 'images/attack_mod_2x.jpg' }
    , LEAF: { 'type': CARD_TYPES_MODIFIER.LEAF, 'shuffle': false,  'image': 'images/attack_mod_plus1leaf.jpg' }
    , WIND: { 'type': CARD_TYPES_MODIFIER.WIND, 'shuffle': false,  'image': 'images/attack_mod_plus1wind.jpg' }
    , DARK: { 'type': CARD_TYPES_MODIFIER.DARK, 'shuffle': false,  'image': 'images/attack_mod_plus1dark.jpg' }
    , HEAL: { 'type': CARD_TYPES_MODIFIER.HEAL, 'shuffle': false,  'image': 'images/attack_mod_heal1.jpg' }
    , LIGHT: { 'type': CARD_TYPES_MODIFIER.LIGHT, 'shuffle': false,  'image': 'images/attack_mod_plus1light.jpg' }
    , POISON: { 'type': CARD_TYPES_MODIFIER.POISON, 'shuffle': false,  'image': 'images/attack_mod_poison.jpg' }
    , MUDDLE: { 'type': CARD_TYPES_MODIFIER.MUDDLE, 'shuffle': false,  'image': 'images/attack_mod_muddle.jpg' }
    , WOUND: { 'type': CARD_TYPES_MODIFIER.WOUND, 'shuffle': false,  'image': 'images/attack_mod_wound.jpg' }
    };

var MODIFIER_DECK =
    [ MODIFIER_CARDS.PLUS0,
    , MODIFIER_CARDS.PLUS0,
    , MODIFIER_CARDS.PLUS1,
    , MODIFIER_CARDS.PLUS1,
    , MODIFIER_CARDS.PLUS1,
    , MODIFIER_CARDS.PLUS1,
    , MODIFIER_CARDS.PLUS1,
    , MODIFIER_CARDS.PLUS1,
    , MODIFIER_CARDS.PLUS1,
    , MODIFIER_CARDS.MINUS1,
    , MODIFIER_CARDS.PLUS2,
    , MODIFIER_CARDS.NULL,
    , MODIFIER_CARDS.DOUBLE,
    , MODIFIER_CARDS.LEAF,
    , MODIFIER_CARDS.WIND,
    , MODIFIER_CARDS.DARK,
    , MODIFIER_CARDS.HEAL,
    , MODIFIER_CARDS.HEAL,
    , MODIFIER_CARDS.HEAL,
    , MODIFIER_CARDS.HEAL,
    , MODIFIER_CARDS.MUDDLE,
    , MODIFIER_CARDS.POISON,
    , MODIFIER_CARDS.POISON,
    , MODIFIER_CARDS.LIGHT,
    , MODIFIER_CARDS.WOUND,
    ];
