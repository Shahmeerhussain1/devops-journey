#!/bin/bash

read -p "Enter a username" username
count=$(cat /etc/passwd | grep "$username" | wc | awk '{print $1}')
echo $count
if [ $count == 0 ];
then
       	echo "user does not exists"
else
	echo "user exists"

fi

