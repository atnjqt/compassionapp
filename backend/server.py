from flask import Flask, jsonify, request
from flask_cors import cross_origin
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__)
client = MongoClient('mongo', 27017)
db = client.db

@app.route('/', methods=['GET'])
@cross_origin()
def root():
	db.hits.insert_one({ 'time': datetime.utcnow() })
	message = 'This page has been visited {} times.'.format(db.hits.count_documents({}))
	return jsonify({ 'message': message })

@app.route('/get_faces', methods=['GET'])
@cross_origin()
def get_faces():
    source_url = request.args.get('source')
    message = 'Think about Azure in Python instead of React! see: {}'.format(source_url)
    return jsonify({ 'message': message })

# Add your backend API functions here... such as, add an Instagram username, access token, later add photos, etc...
@app.route('/instagram/', methods=['GET','POST'])
@cross_origin()
def instagram_user():
    ig_username = request.args.get('ig_username')
    db.instagram.insert_one({ 'instagram_username': ''.format(ig_username) })
    message = 'Inserted IG username {} into db...'.format(db.instagram.find({ 'instagram_username': ''.format(ig_username) }))
    return jsonify({ 'message': message })

if __name__ == '__main__':
	# only used locally
	app.run(host='0.0.0.0', port=8080, debug=True)