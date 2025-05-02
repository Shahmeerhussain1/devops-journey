#!/bin/bash

<<disclaimer
I am going to take an input of user name from user

and then create a user

disclaimer

echo "==== Creating User ===="

#read -p "Enter a user name " inputUserName

#read -p "Enter a password " inputPass

sudo useradd -m $1

#echo -e "$inputPass\n$inputPass" | passwd "$inputUserName"

echo -e "$2\n$2" | passwd "$1" 

echo "user created successfully"

