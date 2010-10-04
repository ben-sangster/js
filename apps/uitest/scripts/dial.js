var puts = require('sys').puts
  , timer = require('dmz/runtime/time')
  , ui = require('dmz/components/ui')
  , form
  , d1
  , d2
  , count
  ;

puts("Script: " + self.name);

form = ui.load("./scripts/DialForm.ui");
form.show();

d1 = form.lookup("dial");
d2 = form.lookup("dial_2");

d1.observe(self, "dialPressed", function () {
   puts("dial pressed.");
   puts("dial isDown:", d1.isDown());
});

d1.observe(self, "dialReleased", function () {
   puts("dial released.");
   puts("dial isDown:", d1.isDown());
});

d1.observe(self, "valueChanged", function (val) {
   puts("Value changed:", val, d1.value());
});

puts("d1.max:", d1.maximum());
d1.maximum(d1.maximum() * 2);
puts("d1.max2:", d1.maximum());
puts("d1.min:", d1.minimum());
d1.minimum(d1.minimum() + 1);
puts("d1.min2:", d1.minimum());
d1.notchesVisible(true);
puts("d1.nV:", d1.notchesVisible());
d1.value (d1.maximum() / 2);

d2.observe(self, "dialPressed", function () {
   puts("dial pressed.");
   puts("dial isDown:", d2.isDown());
});

d2.observe(self, "dialReleased", function () {
   puts("dial released.");
   puts("dial isDown:", d2.isDown());
});

d2.observe(self, "valueChanged", function (val) {
   puts("Value changed:", val, d2.value());
});

puts("d2.max:", d2.maximum());
d2.maximum(d2.maximum() * 2);
puts("d2.max2:", d2.maximum());
puts("d2.min:", d2.minimum());
d2.minimum(d2.minimum() + 1);
puts("d2.min2:", d2.minimum());
d2.wrapping(true);
puts("d2.wrapping:", d2.wrapping());

puts("Done.");