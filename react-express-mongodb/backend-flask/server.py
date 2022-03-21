# example from https://dev.to/kouul/frmp-stack-5g9
from flask import Flask, redirect, url_for
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
import json

# set your Flask app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#mongodb://mongo:27017
mongoClient = MongoClient('mongodb://127.0.0.1:27017')

# set DB name here
db = mongoClient.get_database('instagram_testers_db')
names_col = db.get_collection('names_col')

# some steps here for adding values to mongo db collection
@app.route('/addname/<name>/')
def addname(name):
    names_col.insert_one({"name": name.lower()})
    return redirect(url_for('getnames'))

@app.route('/getnames/')
def getnames():
    names_json = []
    if names_col.find({}):
        for name in names_col.find({}).sort("name"):
            names_json.append({"name": name['name'], "id": str(name['_id'])})
    return json.dumps(names_json)

if __name__ == "__main__":
    # defaults to 5000 for debug, we want 3000 for the callback url though
    app.run(host='0.0.0.0', port=3000, debug=True)