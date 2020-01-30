#Hong Wei Chen 
#SoftDev pd1
#K25 -- Rest APIs
#11-14-2019

from  flask import Flask, render_template
from urllib.request import urlopen,Request
import json

app=Flask(__name__)

@app.route('/')
def root():
    return "Go to /quotes, /superhero, or /met"

@app.route('/quotes')
def quotes():
    u = urlopen("http://quotes.rest/qod.json")
    get = u.read()
    info = json.loads(get)
    return render_template("quotes.html",
                                               title = info['contents']['quotes'][0]['title'],
                                               quote = info['contents']['quotes'][0]['quote'],
                                               author = info["contents"]["quotes"][0]['author'],
                                               img = info['contents']['quotes'][0]['background'],
                                               site = info["contents"]["quotes"][0]['permalink']
                                               )

@app.route("/superhero")

def super():
    req = Request("https://www.superheroapi.com/api/2503373653110667/69", headers={'User-Agent': 'Mozilla/5.0'})
    u = urlopen(req)
    get = u.read()
    info = json.loads(get)
    return render_template("super.html",
                                               name = info['name'],
                                               sid = info['id'],
                                               bio=info['biography']['full-name'],
                                               pob = info['biography']['place-of-birth'],
                                               gend = info['appearance']['gender'],
                                               race = info['appearance']['race'],
                                               height = info['appearance']['height'][1],
                                               weight = info['appearance']['weight'][1],
                                               relatives = info['connections']['relatives'],
                                               img = info['image']['url']
                                               )

@app.route('/met')
def met():
    u = urlopen("https://collectionapi.metmuseum.org/public/collection/v1/objects/436524")
    get = u.read()
    info = json.loads(get)
    return render_template("met.html",
                                               name = info['title'],
                                               itype = info['objectName'],
                                               dept = info['department'],
                                               artist = info['artistDisplayName'],
                                               artistbio  = info['artistDisplayBio'],
                                               objDate = info['objectDate'],
                                               medium = info['medium'],
                                               dimen = info['dimensions'],
                                               img = info['primaryImageSmall'],
                                               link = info['objectURL']
                                               )
                                               
    
if __name__ == "__main__":
    app.debug = True
    app.run()
