# Team Bread Getters: Yaru Luo & Hongwei Chen
# SoftDev1 pd1
# K#15
# 2019-10-02 

from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)

# these are the session vars
username = 'davidmholmes'
password = 'apcs'
app.secret_key = 'abc'

@app.route( '/') # login page if no user logged in
def hello_world():
    session.pop
    print( session)
    return render_template('login.html')

@app.route('/welcome') # checks if login successful
def login():
    print( request.args[ 'username'])
    print( request.args['password'])
    if request.args[ 'username'] != "davidmholmes":
        return redirect('/badun')
    if request.args[ 'password'] != "apcs": 
        return redirect('/badpw')
    else: # if login is successful
        # session is activated!
        session[ 'username'] = request.args[ 'username']
        session[ 'password'] = request.args[ 'password']
        return render_template('auth.html', un = session[ 'username'])

@app.route('/badun') # bad username
def error0():
    return render_template( 'error.html', error = "username  invalid")

@app.route('/badpw') # bad password
def error1():
    return render_template( 'error.html', error = "password  invalid")

if __name__ == "__main__":
    app.debug = True
    app.run()
