def start():
    print('This is my rock paper scissors game!')
    Player_one = 'Jack'
    Player_Two = 'Erik'
def choices(player_one_choice , Player_Two_choice):
    if Player_one_choice == 'Rock' and Player_Two_Choice == 'Paper':
        return('Paper covers Rock!' + Player_Two + ' Wins!')
    elif Player_One_choice == 'Paper' and Player_Two_choice == 'Rock':
        return('Paper covers Rock!' + Player_One + 'Wins!')
    elif Player_One_choice == 'Scissors!' and Player_Two_choice == 'Paper':
        return('Scissors cuts Paper!' + Player_One + 'Wins!')
    elif Player_One_choice == 'Rock' and Player_Two_choice == 'Scissors':
        return('Rock smashes Scissors!' + Player_One + 'Wins!')
    elif Player_One_choice == 'Paper' and Player_Two_choice == 'Scissors':
        return('Scissors cut Paper!' + Player_Two + 'Wins!')
    elif Player_One_Choice == 'Scissors' and Player_Two_choice == 'Rock':
        return('Rock smashes Scissors!' + Player_Two + 'Wins')
    elif Player_One_Choice == Player_Two_Choice:
        return('Jack and Erik tied!')
    else:
        return('please type Rock,Paper or Scissors!')
Player_One_choose = input('Does' + Player_One +
                          'choose Rock,Paper or Scissors?').lower()
Player_Two_choose = input('Does' + Player_Two +
                          'choose Rock , Paper or Scissors?').lower()
print(choices(Player_One_Choose, Player_Two_choose))

def Play_Again():
    Again = input('Would you like to play the game again?').lower()
    if Again == 'No'.lower():
        quit()
    if Again == 'Yes'.lower():
        start()
    else:
        print('please enter Yes or No. Thank you!')
        Play_Again()
    Play_Again()
start()

    
