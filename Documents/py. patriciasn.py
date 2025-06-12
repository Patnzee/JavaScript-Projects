Python 3.12.5 (tags/v3.12.5:ff3bc82, Aug  6 2024, 20:45:27) [MSC v.1940 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> date = "03/13/2021"
>>> split_the_date =date.split ('/')
>>> print(split_the_date)
['03', '13', '2021']
>>> print (split_the_date[0])
03
>>> print(split_the_date[1])
13
>>> print(split_the_date[2])
2021
>>> print("month: " + split_the_date[0])
month: 03
>>> print("day: " + split_the_date[1])
day: 13
>>> print("year: " + split_the_date[2])
year: 2021
>>> Name = "JACK"
>>> Name.swapcace()
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    Name.swapcace()
AttributeError: 'str' object has no attribute 'swapcace'. Did you mean: 'swapcase'?
>>> Name .swapcase()
'jack'
>>> color_1 = ' red '
>>> color-2 = '        blue            '
SyntaxError: cannot assign to expression here. Maybe you meant '==' instead of '='?
>>> color_2 = '      blue              '
>>> print ('My favorite colors are '  + color_1 + 'and' + color _2)
SyntaxError: invalid syntax. Perhaps you forgot a comma?
>>> print ('My favorite colors are ' + color_1 + ' and ' +color_2)
My favorite colors are  red  and       blue              
>>> print ('let\'s fix the formstting...')
let's fix the formstting...
>>> print ('My favorite colors are ' + color_1 .srip() + ' and ' + color_2 .strip())
Traceback (most recent call last):
  File "<pyshell#29>", line 1, in <module>
    print ('My favorite colors are ' + color_1 .srip() + ' and ' + color_2 .strip())
AttributeError: 'str' object has no attribute 'srip'. Did you mean: 'strip'?
>>> print (' My favorite colors are ' + color_1 .strip() ' and + color_2 .strip())
...        
SyntaxError: unterminated string literal (detected at line 1)
>>> print (' My favorite colors are ' + color_1 . strip() + ' and ' + color_2 .strip())
...        
 My favorite colors are red and blue
