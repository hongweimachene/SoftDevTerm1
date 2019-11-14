#Hong Wei Chen 
#SoftDev pd1
#K24 -- NASA Rest API
#11-13-2019

from  flask import Flask, render_template
from urllib.request import urlopen
import json

app=Flask(__name__)

@app.route('/')
def root():
    u = urlopen("https://api.nasa.gov/planetary/apod?api_key=lFg13tNTsOAhZNLKfChfeMCg77wAg3H1FAQkkXXt")
    get = u.read()
    info = json.loads(get)
    return render_template("api.html",
                                               img = info['url'],
                                               cap = info['explanation']
                                               )

if __name__ == "__main__":
    app.debug = True
    app.run()
