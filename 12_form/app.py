from flask import Flask, render_template, request
import cgi

app = Flask(__name__)

@app.route("/")

def form():
    print(request.args)
    return render_template('form.html')

@app.route("/auth")

def authorize():
    return render_template('auth.html', username = request.args["username"], method = request.method)

if __name__ == "__main__":
    app.debug=True
    app.run()
