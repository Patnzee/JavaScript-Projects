def start():
    print('This is my rock paper scissors game!')
    Player_One = 'Jack'
    player_Two = 'Erik'
def Choices(Player_One_Choice, Player_Two_Choie):
    if Player_0ne_Choice == 'Rock' and Player_Two == 'Paper':
        return('Paper covers Rock!' + Player_One + 'Wins!')
    elif Player_One_choice == 'Paper' and Player_Two_choice == 'Rock':
        return('Paper covers Rock!' + Player_One + 'Wins!')
    elif Player_One_choice == 'Scissors' and player_Two_choice == 'Paper':
        return('Scissors cuts Paper! ' + Player_One + 'wins!')
    elif Player_One_Choice == 'Rock' and Player_Two_Choice == 'Scissors':
        return('Rock smashes Scissors! ' + Player_One + 'wins!')
    elif Player_One_Choice == 'Paper'  and Player_Two_Choice == 'Scissors':
        return('Scissors cuts paper!' + Player_Two + 'wins!')
    elif Player_One_Choice == 'Scissors' and Player_Two_Choice == 'Rock':
        return('Rocks Smashes scissors! ' + Player_Two + 'wins!')
    elif Player_one_Choice == Player_Two_Choice:
        return('Jack and Erik tied!')
    else:
        return('please type Rock , paper , Scissors!')
    Player_One_Choose = input('Does ' + Player_One +
                              ' choose Rock, Paper, or Scissors?').lower()
    Player_Two_Choose = input('Does' + Player_Two +
                              'choose Rock, Paper or Scissors?').lower()
    print(Choises (Player_One_Chose, Player_Two_choose))
    def play_Again():
        Again = input('Would you like to ply the game again? ' ).lower()
        if Again == 'No' .lower():
            quit()
        if Again == 'Yes' .lower():
            start()
        else:
            print('please enter Yes or No. Thank you')
            Play_again()
        Play_Again
        start()
