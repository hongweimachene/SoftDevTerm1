#Calvin Chu, Hong Wei Chen
#SoftDev1 pd9
#K11: Ay Mon Go Git It From Yer Flask
#2020-03-09

from flask import Flask, render_template, request, redirect, url_for
from pymongo import MongoClient
from bson.json_util import loads
import pprint, numbers

client = MongoClient()
db = client.ShortCircuit
collection = db.pokemon

collection.drop()
f = open("pokedex.json","r")
response = f.read()
data = loads(response)
f.close()
for post in data['pokemon']:
    collection.insert_one(post)

def getID(id):
    out = []
    for x in (collection.find({"id" : id})):
        out.append(x)
    return out
def getNum(num):
    out = []
    for x in (collection.find({"num" : num})):
        out.append(x)
    return out
def getName(name):
    out = []
    for x in (collection.find({"name" : name})):
        out.append(x)
    return out
def getImg(img):
    out = []
    for x in (collection.find({"img" : img})):
        out.append(x)
    return out
def getType(t):
    out = []
    for x in (collection.find({"type" : {"$in" : [t]}})):
        out.append(x)
    return out
def getTypes(t1, t2):
    out = []
    for x in (collection.find({"$and" : [{"type" : {"$in" : [t1]}}, {"type" : {"$in" : [t2]}} ]})):
        out.append(x)
    return out
def getMaxHeight(h):
    out = []
    h = float(h)
    while (h > 0):
        i = "{:0.2f}".format(h) + " m"
        for x in (collection.find({"height" : i})):
            out.append(x)
        h -= .01
    return out
def getMaxWeight(w):
    out = []
    w = float(w)
    while (w > 0):
        i = "{:0.1f}".format(w) + " kg"
        for x in (collection.find({"weight" : i})):
            out.append(x)
        w -= .1
    return out
def getCandy(c):
    out = []
    for x in (collection.find({"candy" : c})):
        out.append(x)
    return out
def getCandyCount(c):
    out = []
    for x in (collection.find({"candy_count" : c})):
        out.append(x)
    return out
def getMaxEgg(e):
    out = []
    if (isinstance(e, numbers.Number)):
        while (e > 0):
            i = str(int(e)) + " km"
            for x in (collection.find({"egg" : i})):
                out.append(x)
            e -= 1
        return out
    else:
        for x in (collection.find({"egg" : e})):
            out.append(x)
        return out
def getMaxSpawnChance(c):
    out = []
    for x in (collection.find({"spawn_chance" : {"$lte" : c}})):
        out.append(x)
    return out
def getMaxAvgSpawns(s):
    out = []
    for x in (collection.find({"avg_spawns" : {"$lte" : s}})):
        out.append(x)
    return out
def getSpawnTime(t):
    out = []
    for x in (collection.find({"spawn_time" : t})):
        out.append(x)
    return out
def getMultipliers(m):
    out = []
    for x in (collection.find({"multipliers" : {"$in" : [m]}})):
        out.append(x)
    return out
def getWeakness(w):
    out = []
    for x in (collection.find({"weaknesses" : {"$in" : [w]}})):
        out.append(x)
    return out
def getNextEvNum(n):
    out = []
    for x in (collection.find({"next_evolution.num" : n})):
        out.append(x)
    return out
def getNextEvName(n):
    out = []
    for x in (collection.find({"next_evolution.name" : n})):
        out.append(x)
    return out
def getPrevEvNum(n):
    out = []
    for x in (collection.find({"prev_evolution.num" : n})):
        out.append(x)
    return out
def getPrevEvName(n):
    out = []
    for x in (collection.find({"prev_evolution.name" : n})):
        out.append(x)
    return out

#getID(1)
#getNum("001")
#getName("Cloyster")
#getImg("http://www.serebii.net/pokemongo/pokemon/003.png")
#getType("Fire")
#getTypes("Fire", "Flying")
#getMaxHeight(.2)
#getMaxWeight(.2)
#getCandy("Charmander Candy")
#getCandyCount(25)
#getMaxEgg(2)
#getMaxEgg("Not in Eggs")
#getMaxSpawnChance(.008)
#getMaxAvgSpawns(2.3)
#getSpawnTime("07:00")
#getMultipliers(1.2)
#getWeakness("Water")
#getNextEvNum("005")
#getNextEvName("Blastoise")
#getPrevEvNum("007")
#getPrevEvName("Caterpie")

app = Flask(__name__)

@app.route("/")
def root():
    if (len(request.args) == 0 or len(request.args['input']) == 0):
        return render_template('app.html')
    else:
        if (request.args['search'] == 'id'):
            print("HHERE")
            return render_template('app.html', i = getID(int(request.args['input'])))
        elif (request.args['search'] == 'num'):
            return render_template('app.html', i = getNum(request.args['input']))
        elif (request.args['search'] == 'name'):
            return render_template('app.html', i = getName(request.args['input']))
        elif (request.args['search'] == 'img'):
            return render_template('app.html', i = getImg(request.args['input']))
        elif (request.args['search'] == 'type'):
            return render_template('app.html', i = getType(request.args['input']))
        elif (request.args['search'] == 'types'):
            t = request.args['input'].split(",")
            return render_template('app.html', i = getTypes(t[0], t[1]))
        elif (request.args['search'] == 'mh'):
            return render_template('app.html', i = getMaxHeight(float(request.args['input'])))
        elif (request.args['search'] == 'mw'):
            return render_template('app.html', i = getMaxWeight(float(request.args['input'])))
        elif (request.args['search'] == 'candy'):
            return render_template('app.html', i = getCandy(request.args['input']))
        elif (request.args['search'] == 'cc'):
            return render_template('app.html', i = getCandyCount(int(request.args['input'])))
        elif (request.args['search'] == 'egg'):
            try:
                i = int(request.args['input'])
                return render_template('app.html', i = getMaxEgg(i))
            except ValueError:
                return render_template('app.html', i = getMaxEgg(request.args['input']))
        elif (request.args['search'] == 'msc'):
            return render_template('app.html', i = getMaxSpawnChance(float(request.args['input'])))
        elif (request.args['search'] == 'mas'):
            return render_template('app.html', i = getMaxAvgSpawns(float(request.args['input'])))
        elif (request.args['search'] == 'st'):
            return render_template('app.html', i = getSpawnTime(request.args['input']))
        elif (request.args['search'] == 'mult'):
            return render_template('app.html', i = getMultipliers(float(request.args['input'])))
        elif (request.args['search'] == 'weak'):
            return render_template('app.html', i = getWeakness(request.args['input']))
        elif (request.args['search'] == 'neNum'):
            return render_template('app.html', i = getNextEvNum(request.args['input']))
        elif (request.args['search'] == 'peNum'):
            return render_template('app.html', i = getPrevEvNum(request.args['input']))
        elif (request.args['search'] == 'neName'):
            return render_template('app.html', i = getNextEvName(request.args['input']))
        elif (request.args['search'] == 'peName'):
            return render_template('app.html', i = getPrevEvName(request.args['input']))





if __name__ == "__main__":
    app.debug = True
    app.run()
