Name= input('Please enter the name of the person who created this game:')
print('This game was made by the amazing ' + Name + ' ! ')
print('Welcome to my guessing game!')
print('In this program, you will try to guess a word that I chose.')
print('Good luck')

def start():
    Player_Name = input('what is the name of the Player?')
    print('Greetings, ' + Player_Name + ' ! it is time to guess!')
    Secret_Word = 'Pat'.lower()
    Guesses = ''
    Turns_Left = 8
    while Turns_Left > 0:
        Wrong_Answers = 0
        for letter in Pat_Word:
            if letter in Guesses:
                print(letter)
            else:
                print('_')
                Wrong_Answers += 1
        if Wrong_Answer == 0:
            Print('YOU WIN! You guessed my word: ' + Secret_Word + '!!!!!')
            break
        Guess = input('Guess a letter here: ').lower()
        Guesses += Guess
        if Guess not in Secret_Word:
            Turns_Left -= 1
            print('oops! This letter is not in my word. please try again.')
            print('You have'  + str(Turns_left) +  'more guesses left. you can do it')
            if Turns_Left == 0:
                  print('GAME OVER')

        def Play_Again():
            Again = input('Would you like to play again?').lower()
            if Again == 'No' .lower():
                quit()
            if Again == 'Yes'.lower():
                start()
            else:
                print('Please enter Yes or No. Thank you!')
                Play_Again()
            Play_again()
        start()
        
        
