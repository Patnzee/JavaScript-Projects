Name = input('please enter the name of he person who created this game:')
print('this game was made by the amazing ' + Name + ' ! ')
print('welcome to my guessing game!')
print('in this game, you will try to guess a word that i chose.')
print('Good luck!')

def start():
    Player_Name = input('What is the name of the player?')
    print('Greetings, ' + Player_Name + '! it is time to guess1!')
    Secret_Word = 'Ostrich' .lower()
    Guesses = ''
    Turns_Left = 11
    while Turns_Left > 0:
        Wrong_Answer = 0
        for Letter in Secret_word:
            if  Letter in Guesses:
                print(Letter)

            else:
                print('_')
                Wrong_Answers += 1

        if Wrong_Answers == 0:
            print('YOU WIN! you Guessed my word: ' + Secret_Word + ' !!!!!' )
            Gues = input('Guess a letter here:'). lower()
            Guesses += Guess
        if Guess not in Secret_Word:
            Turns_Left -= 1
            print('Oops! This letter is not in my word. please try again.')
            print('you have' + str(Turns_Left) + ' more guesses left. yu can do it')
            if Turns_Left == 0:
                print('GAME OVER')

    def Play_Again():
        Again = input('Would you like to play again?').lower()
        if Again == 'No'.lower():
            quit()
        if Again == 'Yes'.lower():
            start()
        else:
            print('please enter Yes or No. Thank you!')
            Play_Again()
            
        Play_Again

    start()
        
           
