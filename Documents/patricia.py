Python 3.10.11 (tags/v3.10.11:7d4cc5a, Apr  5 2023, 00:38:17) [MSC v.1929 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> J=50
>>>  print(J)
...  
SyntaxError: unexpected indent
>>> print(j)
Traceback (most recent call last):
  File "<pyshell#2>", line 1, in <module>
    print(j)
NameError: name 'j' is not defined. Did you mean: 'J'?
>>> print(J)
50
>>> Print
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    Print
NameError: name 'Print' is not defined. Did you mean: 'print'?
>>> print(''Hello there'')
SyntaxError: invalid syntax. Perhaps you forgot a comma?
>>> Print('Hello there')
Traceback (most recent call last):
  File "<pyshell#6>", line 1, in <module>
    Print('Hello there')
NameError: name 'Print' is not defined. Did you mean: 'print'?
>>> 
>>> 1+1
2
>>> K=5
>>> print(J+K)
55
>>> 2-1
1
>>> print(J-K)
45
>>> 4*5
20
print(J*K)
250
100/5
20.0
print(J/K)
10.0
