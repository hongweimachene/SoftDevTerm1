from  flask import Flask, render_template
from urllib.request import urlopen,Request
import json

app=Flask(__name__)

@app.route('/')
def root():
    u = urlopen("https://uselessfacts.jsph.pl/random.json?language=en")
    get = u.read()
    info = json.loads(get)
    return render_template("api.html", text = info['text'])
if __name__ == '__main__':
    app.debug = True
    app.run()
