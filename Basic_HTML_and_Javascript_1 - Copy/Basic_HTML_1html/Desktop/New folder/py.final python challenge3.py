Name = input('Name')
print("Hello " + Name +
      "!we are going to find out how long have you been alive!")
Age = int(input('How old are you?'))
print('you are ' + str(Age) + ' years old.')
Months = Age * 12
#12 is the number of months in a year
Days =  Age * 365
#365 is the number of days in a year
print(Name + ' has been alive for about: ' +
      str(Months) + ' Months or' +str(Days) + 'days!')
