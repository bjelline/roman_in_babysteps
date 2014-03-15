
describe("arabic to roman numerals converter", function() {
  it ( 'should convert 1,5,6 => I,V,IV', function(){
    expect(convert(1)).toBe('I');
    expect(convert(5)).toBe('V');
    expect(convert(6)).toBe('VI');
  });
});

var convert = function(arabic) {

  var roman = "";

  if( Math.floor(arabic/5) == 1 ) {
    roman += "V";
  }

  if( arabic % 5 == 1 ) {
    roman += "I";
  }

  return roman;
}
