#Jesse "McCree" Chen, Hong Wei Chen
#SoftDev Period 1  
#K #17: No Trouble
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#Creates a table with appropriate fields if db file does not exist
command = "CREATE TABLE IF NOT EXISTS classData (courses TEXT, mark INTEGER, id INTEGER)"
c.execute(command)
#Reads through courses.csv and inserts the values into db file
csvfile = open('courses.csv', newline = '')
reader = csv.DictReader(csvfile)
for row in reader:
	command = "INSERT INTO classData VALUES(\"" + row['code'] + "\"," + row['mark'] + "," + row['id'] + ")"
	c.execute(command)


#Creates a table with appropriate fields if db file does not exist
command = "CREATE TABLE IF NOT EXISTS studentData (name TEXT, age INTEGER, id INTEGER)"
c.execute(command)
#Reads through students.csv and inserts the values into db file
csvfile = open('students.csv', newline='')
reader = csv.DictReader(csvfile)
for row in reader:
	print(row)
	command = "INSERT INTO studentData VALUES(\"" + row['name'] + "\"," + row['age'] + "," + row['id'] + ")"
	c.execute(command)


db.commit() #save changes
db.close()  #close database
