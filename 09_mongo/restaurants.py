# Hong Wei Chen, Biraj Chowdhury
# SoftDev pd9
# K09: Yummy Mongo Py
# 2020-02-28

from pymongo import MongoClient
import json
from bson.json_util import loads
from pprint import pprint

#connect to mongodb server
client = MongoClient(port=27017)
#new database
db=client.restaurants
#new collection
restaurants = db['restaurants']

#read json file by line
file = open('primer-dataset.json', 'r')
data = file.readlines()

#if collection is empty, add documents from json file
if restaurants.count() == 0:
	for i in range(len(data)):
		restaurants.insert_one(loads(data[i]))

#query by borough, prints all restaurants in given borough
def boroughQuery(borough):
	for i in restaurants.find( { 'borough' : borough } ):
		pprint(i)

#query by zipcode, prints all restaurants with given zipcode
def zipcodeQuery(zipcode):
	for i in restaurants.find( { 'address.zipcode' : zipcode } ):
		pprint(i)

#query by zipcode and grade
def zgQuery(zipcode,grade):
	for i in restaurants.find( { 'address.zipcode' : zipcode, 'grades.grade': grade }):
		pprint(i)

#query by zipcode and score below specified threshold
def zscoreQuery(zipcode,threshold):
	for i in restaurants.find( { 'address.zipcode' : zipcode, 'grades.score' : { '$lt' : threshold }}):
		pprint(i)

#query by borough, cuisine, and score above or equal to threshold
def bcgQuery(borough,cuisine,score):
	for i in restaurants.find( {'borough' : borough, 'cuisine' : cuisine, 'grades.score': { '$gte' : score  }}):
		pprint(i)

print('=======TEST QUERIES========')
#boroughQuery('Queens')
#zipcodeQuery('10282')
#zgQuery('10282', 'A')
#zscoreQuery('10282', 13)
#bcgQuery('Queens', 'Chinese', 50)



