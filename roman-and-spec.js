
describe("arabic to roman numerals converter", function() {
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

var convert = function(arabic) {
  var ROMAN_DIGIT_ONE  = "I",
      ROMAN_DIGIT_FIVE = "V",
      ROMAN_DIGIT_TEN  = "X",
      roman = "";


  if( Math.floor(arabic/5) == 1 ) {
    roman = "V";
    if( arabic % 5 == 4 ) {
      return ROMAN_DIGIT_ONE + ROMAN_DIGIT_TEN;
    }
  } else {
    roman = "";
    if( arabic % 5 == 4 ) {
      return ROMAN_DIGIT_ONE + ROMAN_DIGIT_FIVE;
    }
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
