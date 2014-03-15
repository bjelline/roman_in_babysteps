
describe("arabic to roman numerals converter", function() {
  it ( 'should convert 0 to nothing', function(){
    expect(convert(0)).toBe('');
  });
  it ( 'should convert 1 to 8', function(){
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
});



var convert_one_arabic_digit = function(arabic, ROMAN_DIGIT_ONE, ROMAN_DIGIT_FIVE, ROMAN_DIGIT_TEN) {
});

var convert = function(arabic) {
  var ROMAN_DIGIT_ZERO = "",
      ROMAN_DIGIT_ONE  = "I",
      ROMAN_DIGIT_FIVE = "V",
      ROMAN_DIGIT_TEN  = "X",
      roman = "";


  if( Math.floor(arabic/5) == 1 ) {
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
}
