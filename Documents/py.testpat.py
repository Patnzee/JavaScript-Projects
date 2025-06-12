age1 = 17
age2 = 20
age3 = 10

name1 = "Siyolise"
name2 = "Antony"
name3 = "Lethu"

if age1 + age2 + age3 > 50:
    print("the combined ages of " + name1 + "," + name2 + " and " + name3 + ", are greater than 70.")
elif age1 + age2 + age3 < 50:
    print("The combined ages of " + name1 + ", " + name2 + " and " + name3 + ", are less than 50.")
else:
    print("The cpmbined ages of " + name1 + "," + name2 + " and" + name3 + ", are equal to 50.")
if age3 > age2:
    print(name3 + " is older than " + name2 + ".")
elif age3 < age2:
    print(name2 + " is older than " + name3 +".")
else:
    print(name2 + " is the same age as " + name3 + ".")
if age1 < age3:
    print(name1 + " is younger than " + name3 + ".")
elif age1 > age3:
    print(name3 + " is younger than " + name1 + ".")
else:
    print(name3 + " is the same age as " + name + ".")
