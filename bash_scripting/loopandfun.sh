#!/bin/bash


callNumber(){
	echo "$1"
}

for((num=1; num<=10 ; num++))
do
	callNumber "$num"
done
