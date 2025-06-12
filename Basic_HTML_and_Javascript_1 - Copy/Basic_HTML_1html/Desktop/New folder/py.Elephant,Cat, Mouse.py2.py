def start():
    print('This is my Elephant, Cat, Mouse Game!')
    Player_One = 'Thabo'
    Player_Two = 'Lindo'

    def choices(Player_One_Choice, Player_Two_Choice):
        if Player_One_Choice == 'elephant' and Player_Two_Choice == 'mouse':
            return 'Mouse scares Elephant! ' + Player_Two + ' wins!'
        elif Player_One_Choice == 'mouse' and Player_Two_Choice == 'elephant':
            return 'Mouse scares Elephant! ' + Player_One + ' wins!'
        elif Player_One_Choice == 'cat' and Player_Two_Choice == 'mouse':
            return 'Cat scares Mouse! ' + Player_One + ' wins!'
        elif Player_One_Choice == 'mouse' and Player_Two_Choice == 'cat':
            return 'Cat scares Mouse! ' + Player_Two + ' wins!'
        elif Player_One_Choice == 'elephant' and Player_Two_Choice == 'cat':
            return 'Elephant scares Cat! ' + Player_One + ' wins!'
        elif Player_One_Choice == 'cat' and Player_Two_Choice == 'elephant':
            return 'Elephant scares Cat! ' + Player_Two + ' wins!'
        elif Player_One_Choice == Player_Two_Choice:
            return 'Thabo and Lindo tied!'
        else:
            return 'Please type Elephant, Cat, or Mouse!'

    Player_One_Choice = input('Does ' + Player_One + ' choose Elephant, Cat, or Mouse? ').lower()
    Player_Two_Choice = input('Does ' + Player_Two + ' choose Elephant, Cat, or Mouse? ').lower()
    print(choices(Player_One_Choice, Player_Two_Choice))

    def Play_Again():
        Again = input('Would you like to play the game again? (Yes/No) ').lower()
        if Again == 'no':
            quit()
        elif Again == 'yes':
            start()
        else:
            print('Please enter Yes or No. Thank you!')
            Play_Again()

    Play_Again()

start()
