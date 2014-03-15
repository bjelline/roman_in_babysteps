
describe("arabic to roman numerals converter", function() {
  it ( 'should convert 0 to nothing', function(){
    expect(convert(0)).toBe('');
  });
  it ( 'should convert 1 to 9 => I to IX', function(){
    expect(convert(1)).toBe('I');
    expect(convert(2)).toBe('II');
    expect(convert(3)).toBe('III');
    expect(convert(4)).toBe('IV');
    expect(convert(5)).toBe('V');
    expect(convert(6)).toBe('VI');
    expect(convert(7)).toBe('VII');
    expect(convert(8)).toBe('VIII');
    expect(convert(9)).toBe('IX');
  });
  it ( 'should convert 10..90 (multiples of 10)', function(){
    expect(convert(10)).toBe('X');
    expect(convert(20)).toBe('XX');
    expect(convert(30)).toBe('XXX');
    expect(convert(40)).toBe('XD');
    expect(convert(50)).toBe('D');
    expect(convert(60)).toBe('DX');
    expect(convert(70)).toBe('DXX');
    expect(convert(80)).toBe('DXXX');
    expect(convert(90)).toBe('XC');
  });
  it ( 'should convert all numbers < 100', function(){
    expect(convert(42)).toBe('XDII');
    expect(convert(99)).toBe('XCIX');
  });
});



var zehnerstelle = function(zahl) {
  return Math.floor(zahl/10);
};

var convert_one_arabic_digit = function(arabic, ROMAN_DIGIT_ONE, ROMAN_DIGIT_FIVE, ROMAN_DIGIT_TEN) {
  var ROMAN_DIGIT_ZERO = "",
      roman;
  if( arabic >= 5 ) {
    if( arabic % 5 == 4 ) {
      return ROMAN_DIGIT_ONE + ROMAN_DIGIT_TEN;
    }
    roman = ROMAN_DIGIT_FIVE;
  } else {
    if( arabic % 5 == 4 ) {
      return ROMAN_DIGIT_ONE + ROMAN_DIGIT_FIVE;
    }
    roman = ROMAN_DIGIT_ZERO;
  }

  if( arabic % 5 == 1 ) {
    roman += ROMAN_DIGIT_ONE;
  }
  if( arabic % 5 == 2 ) {
    roman += ROMAN_DIGIT_ONE;
    roman += ROMAN_DIGIT_ONE;
  }
  if( arabic % 5 == 3 ) {
    roman += ROMAN_DIGIT_ONE;
    roman += ROMAN_DIGIT_ONE;
    roman += ROMAN_DIGIT_ONE;
  }

  return roman;
};

var convert = function(arabic) {
      ROMAN_DIGIT_ONE  = "I",
      ROMAN_DIGIT_FIVE = "V",
      ROMAN_DIGIT_TEN  = "X",
      roman = "";

   if( arabic >= 10 ) {
      roman += convert_one_arabic_digit(zehnerstelle(arabic), "X", "D", "C");
      arabic  = arabic % 10;
   }

   roman += convert_one_arabic_digit(arabic, "I", "V", "X");

   return roman;
}
