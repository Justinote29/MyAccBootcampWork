
/Users/macbook % $cd Desktop
/Users/macbook/Desktop % $touch commands.md
/Users/macbook/Desktop % $mkdir soups
/Users/macbook/Desktop % $cd soups
/Users/macbook/Desktop/soups % $touch ChickenNoodle.html BakedPotato.css
/Users/macbook/Desktop/soups % $mkdir js
/Users/macbook/Desktop/soups % $ls
BakedPotato.css		ChickenNoodle.html	js
/Users/macbook/Desktop/soups % $cd js
/Users/macbook/Desktop/soups/js % $pwd
/Users/macbook/Desktop/soups/js
/Users/macbook/Desktop/soups/js % $cd ..
/Users/macbook/Desktop/soups % $touch CreamyTomoto.js
/Users/macbook/Desktop/soups % $rm CreamyTomoto.js
/Users/macbook/Desktop/soups % $ls
BakedPotato.css		ChickenNoodle.html	js
/Users/macbook/Desktop/soups % $touch CreamyTomato.js
/Users/macbook/Desktop/soups % $mv CreamyTomato.js /js
mv: fastcopy: open() failed (to): /js: Read-only file system
/Users/macbook/Desktop/soups % $mv CreamyTomato.js /js
mv: fastcopy: open() failed (to): /js: Read-only file system
/Users/macbook/Desktop/soups % $ls -la
total 0
drwxr-xr-x@  6 macbook  staff  192 Apr  4 10:09 .
drwx------@ 19 macbook  staff  608 Apr  4 10:09 ..
-rw-r--r--   1 macbook  staff    0 Apr  4 10:09 BakedPotato.css
-rw-r--r--   1 macbook  staff    0 Apr  4 10:09 ChickenNoodle.html
-rw-r--r--   1 macbook  staff    0 Apr  4 10:10 CreamyTomato.js
drwxr-xr-x   2 macbook  staff   64 Apr  4 10:09 js
/Users/macbook/Desktop/soups % $mv CreamyTomato.js js 
/Users/macbook/Desktop/soups % $ls
BakedPotato.css		ChickenNoodle.html	js
/Users/macbook/Desktop/soups % $cd js
/Users/macbook/Desktop/soups/js % $ls
CreamyTomato.js
/Users/macbook/Desktop/soups/js % $cd ..
/Users/macbook/Desktop/soups % $touch readme.txt
/Users/macbook/Desktop/soups % $rm readme.txt
/Users/macbook/Desktop/soups % $cd js
/Users/macbook/Desktop/soups/js % $mv CreamyTomato.js BroccoliCheddar.js
/Users/macbook/Desktop/soups/js % $ls
BroccoliCheddar.js

