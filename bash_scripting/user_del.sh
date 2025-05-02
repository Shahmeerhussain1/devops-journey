#!/bin/bash
echo "Started deleting users"
sudo userdel $1
echo "1 deleted..."
sudo userdel $2
echo "2 deleted..."
sudo userdel $3
echo "3 deleted..."
echo "Completed"

