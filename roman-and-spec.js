require('jasmine-matchers');

it ( 'should convert 1 => ', function(){

  expect( convert(1).toBe('I') );
  
});

var convert = function(arabic) {
  return "I";
}
