# Hong Wei Chen, Grace Mao - Team Microsoft Excel
# Softdev pd9
# K10: Import/Export Bank
# 2020-03-04

#Our dataset is Steam Reviews on the game Team Fortress 2
#The dataset contains all reviews of the game Team Fortress 2 by users and
#shows community interaction with number of votes on review being 'helpful' or not, and being 'funny' as well as bunch of other information
#
#hyperlink: https://raw.githubusercontent.com/mulhod/steam_reviews/master/data/Team_Fortress_2.jsonlines
#
#We used loads from the library bson.json_util which is a module that allows the easy reading of json files
#We read the json file line by line, and load every line to convert so we are able to insert into the database



from pymongo import MongoClient
import json
from bson.json_util import loads

#connect to mongodb server
client = MongoClient(port=27017)
#new database
db=client.microsoftexcel
#new collection
reviews = db['reviews']

#read json file by line
file = open('data.json', 'r')
data = file.readlines()

#if collection is empty, add documents from json file
if reviews.count() == 0:
	for i in range(len(data)):
		reviews.insert_one(loads(data[i]))

#query by minimum of total number of hours played
def mhrQuery(h):
	for i in reviews.find( { 'total_game_hours' : { '$gte' : h } } ):
		print(i['date_posted'])
		print(i['username'])
		print(i['rating'])
		print(i['review'])
		print(i['review_url'])
		print('total game hours: %s' % (i['total_game_hours']))
		print('\n')


#query by the minimum times a review has been deemed 'helpful'
def helpfulQuery(n):
	for i in reviews.find( {'num_found_helpful' :  { '$gte' : n } } ):
		print(i['date_posted'])
		print(i['rating'])
		print(i['review'])
		print(i['review_url'])
		print('number found helpful: %s' % (i['num_found_helpful']))
		print('\n')

#query by year posted
#date posted in dataset is formatted in 'MM DD, YYYY, TIME OF DAY'
def yearQuery(y):
	for i in reviews.find({}):
		if y in i['date_posted']:
			print(i['date_posted'])
			print(i['rating'])
			print(i['review'])
			print(i['review_url'])
			print('\n')

#query by min total hours played and min ratio between times review has been deemed 'helpful' and 'unhelpful'
#p MUST BE value between 0.00 and 1.00
def mhrHelpfulQuery(h, r):
	for i in reviews.find( { 'total_game_hours' : { '$gte' : h }, 'found_helpful_percentage' : { '$gte': r } } ):
		print(i['date_posted'])
                print(i['username'])
                print(i['rating'])
                print(i['review'])
                print(i['review_url'])
		print('total game hours: %s found helpful percentage: %s' % (i['total_game_hours'], i['found_helpful_percentage']))
                print('\n')


#query by min number of times review was found helpful, and  min number of times review was found funny
def hfQuery(h, f):
	for i in reviews.find( {'num_found_helpful' : { '$gte' : h }, 'num_found_funny': { '$gte' : f } } ):
		print(i['date_posted'])
		print(i['username'])
		print(i['rating'])
		print(i['review'])
		print(i['review_url'])
		print('num found helpful: %s num found funny: %s' % (i['num_found_helpful'], i['num_found_funny']))
		print('\n')

#query by keyword, and num of help or num of funny
def kHFYQuery(k, h, f):
	for i in reviews.find( { '$or' : [ {'num_found_helpful': {'$gte':h}}, {'num_found_funny': {'$gte':f}} ] } ):
		if k in i['review']:
			print(i['date_posted'])
	                print(i['username'])
	                print(i['rating'])
	                print(i['review'])
	                print(i['review_url'])
			print('num found helpful: %s num found funny: %s' % (i['num_found_helpful'], i['num_found_funny']))
	                print('\n')


#=================TEST CASES====================
#mhrQuery(3000)
#helpfulQuery(3000)
#yearQuery('2015')
#mhrHelpfulQuery(3000, .82)
#hfQuery(50,10)
#kHFYQuery('fun', 500, 500)
