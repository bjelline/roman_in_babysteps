
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
  it ( 'shoulL convert 10..90 (multiples of 10)', function(){
    expect(convert(10)).toBe('X');
    expect(convert(20)).toBe('XX');
    expect(convert(30)).toBe('XXX');
    expect(convert(40)).toBe('XL');
    expect(convert(50)).toBe('L');
    expect(convert(60)).toBe('LX');
    expect(convert(70)).toBe('LXX');
    expect(convert(80)).toBe('LXXX');
    expect(convert(90)).toBe('XC');
  });
  it ( 'shoulL convert all numbers < 100', function(){
    expect(convert(42)).toBe('XLII');
    expect(convert(99)).toBe('XCIX');
  });
  it ( 'should convert 100..900 (multiples of 100)', function(){
    expect(convert(100)).toBe('C');
    expect(convert(400)).toBe('CD');
    expect(convert(900)).toBe('CM');
  });
  it ( 'should convert all numbers < 1000', function(){
    expect(convert(342)).toBe('CCCXLII');
    expect(convert(999)).toBe('CMXCIX');
  });
  it ( 'should convert all numbers < 4000', function(){
    expect(convert(2342)).toBe('MMCCCXLII');  // Expected false to be 'MMCCCXLII'.
    expect(convert(3999)).toBe('MMMCMXCIX');  // Expected false to be 'MMMCMXCIX'.
  });
  it ( 'should not convert numbers >= 4000', function(){
    expect(convert(4000)).toBe(false);  
  });
});



var integer_division = function(zahl, divisor) {
  return Math.floor(zahl/divisor);
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
   var roman = "";

   if( arabic >= 4000 ) {
     return false;
   }

   if( arabic >= 1000 ) {
      roman += convert_one_arabic_digit(integer_division(arabic,1000), "M", "", "");
      arabic  = arabic % 1000;
   }

   if( arabic >= 100 ) {
      roman += convert_one_arabic_digit(integer_division(arabic,100), "C", "D", "M");
      arabic  = arabic % 100;
   }

   if( arabic >= 10 ) {
      roman += convert_one_arabic_digit(integer_division(arabic,10), "X", "L", "C");
      arabic  = arabic % 10;
   }

   roman += convert_one_arabic_digit(arabic, "I", "V", "X");

   return roman;
}
