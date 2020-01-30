from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello world! Available routes are /paris, /london, and /newyork."

@app.route("/paris")
def paris_print():
    return """
                <h1> Paris, France </h1>
                <img src="http://www.emapsworld.com/images/france-capital-map.gif">
                """

@app.route("/london")
def lond_print():
    return """
                <h1> London, England </h1>
                <img src="https://media.istockphoto.com/vectors/map-vector-outlines-illustration-with-capital-location-london-in-gray-vector-id956024570">
                """

@app.route("/newyork")
def ny_print():
    return """
                <h1> New York, United States </h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/New_York_in_United_States.svg/1200px-New_York_in_United_States.svg.png">
                """


if  __name__ == '__main__':
    app.run()
    
