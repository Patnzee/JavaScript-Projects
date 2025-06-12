import time
counter = 0
print(counter)
time .sleep(.5)
counter = counter + 1
print(counter)
counter = counter + 2
print(counter)
time .sleep(.5)
counter = counter + 3
print(counter)
time .sleep(.5)
counter = counter - 6
print(counter)

import time
for counter in range(10, 0, -1):
    print(counter)
    time .sleep(.5)
    
import time
counter = 1
while counter < 11:
    print (counter)
    time .sleep(.5)
    counter = counter + 1
    time .sleep(0.5)
