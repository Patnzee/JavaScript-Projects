
# Using and and or logical operations
number_one = int(input("Pick a number between 1 and 10: "))
number_two = int(input("Pick a second number between 1 and 10: "))
number_three = int(input("Pick a third number between 1 and 10: "))

if number_one % 2 == 0 and number_two % 2 == 0 and number_three % 2 == 0:
    print("All numbers are even!")
elif number_one % 2 == 0 or number_two % 2 == 0 or number_three % 2 == 0:
    print("At least one of your numbers is even.")
else:
    print("All of your numbers are odd!")

# Using a while loop
secret_number = 14
guess = int(input("Guess a number from 1 to 50: "))

while guess != secret_number:
    guess = int(input("Please try again. Guess a number from 1 to 50: "))

print("Great job! You guessed the secret number!")

# Using a loop to iterate through a list
vegetables = ['cabbage', 'carrot', 'pumpkin', 'onion', 'tomato']
for vegetable in vegetables:
    print(vegetable)

# Using a loop to iterate through a tuple
fruit_tuple = ('strawberry', 'lemon', 'orange', 'mango', 'apple')
for fruit in fruit_tuple:
    print(fruit)

# Defining a function and printing a string variable
def my_function():
    my_variable = input("Type anything here! ")
    return "You typed: " + my_variable

# Calling the function and printing the result
print(my_function())
