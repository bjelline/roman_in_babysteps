
describe("arabic to roman numerals converter", function() {
  it ( 'should convert 1,2,3,5,6,7,8', function(){
    expect(convert(1)).toBe('I');
    expect(convert(2)).toBe('II');
    expect(convert(3)).toBe('III');
    expect(convert(5)).toBe('V');
    expect(convert(6)).toBe('VI');
    expect(convert(7)).toBe('VII');
    expect(convert(8)).toBe('VIII');
  });
});

var convert = function(arabic) {
  var ROMAN_DIGIT_ONE = "I";
  var roman = "";

  if( Math.floor(arabic/5) == 1 ) {
    roman += "V";
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
