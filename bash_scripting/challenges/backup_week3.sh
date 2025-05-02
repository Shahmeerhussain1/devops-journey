#!/bin/bash

<<info

this script will backup user_week3.sh file in backups folder ~/devopsLearning/backups

info

filename=backup-$(date '+%y-%m-%d-%H-%M').zip

testing=$(ls -l ~/devopsLearning/backups/ | awk '{print $9}' | wc | awk '{print $2}')

deleteFile(){
	filename2=$(ls -l ~/devopsLearning/backups/ | grep backup | awk '{print $9}' | head -n 1 )
#	echo $filename
        rm ~/devopsLearning/backups/$filename2
}
echo $testing
if [ $testing -gt 2 ] ; then
	deleteFile
	zip -r ~/devopsLearning/backups/$filename $1
else
	echo $filename
        zip -r ~/devopsLearning/backups/$filename $1 
fi
