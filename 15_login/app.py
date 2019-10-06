# Team Bread Getters: Yaru Luo & Hongwei Chen
# SoftDev1 pd1
# K#15 - Do I Know You?
# 2019-10-02

from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)

# these are the hardcoded vars
validUn = 'davidmholmes'
validPw = 'apcs'
app.secret_key = 'abc'
# isLoggedIn = False

@app.route( '/') 
def home():
    if 'username' in session: # if loggedIn = True
        return redirect( '/welcome')
    #session.pop( 'username')
    #session.pop( 'password')
    return render_template( 'login.html')

@app.route( '/auth') # to login or not to login, that is the question
def authenticate():
    if request.args[ 'username'] != validUn:
         return redirect('/unError')
    if request.args[ 'password'] != validPw: 
        return redirect('/pwError')
    else: # both un & pw are valid
        session[ 'username'] = request.args[ 'username']
        return redirect( '/welcome')

@app.route( '/welcome') # in session, already logged in)
def welcome():# if login is successful
        # session is activated
    return render_template('welcome.html', un = session[ 'username'])

@app.route( '/unError') # in session, already logged in)
def unError():
    return render_template( 'error.html', error = "username  invalid")

@app.route( '/pwError') # in session, already logged in)
def pwError():
    return render_template( 'error.html', error = "password  invalid")

@app.route( '/logout')
def logout():
    session.pop( 'username')
    return redirect( '/')

if __name__ == "__main__":
    app.debug = True
    app.run()
