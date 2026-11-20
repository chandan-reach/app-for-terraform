
from flask import Flask, request, jsonify

app = Flask(__name__)

# Home route
@app.route("/")
def helloworld():
    return jsonify({
        "message": "Flask Backend is running!",
        "status": "success"
    })


# Receive data from Express frontend
@app.route('/process', methods=['POST'])
def process():

    # Check whether request contains JSON
    if not request.is_json:
        return jsonify({
            "error": "Request must contain JSON data"
        }), 400

    data = request.get_json()

    # Validate required fields
    name = data.get('name')

    if not name:
        return jsonify({
            "error": "Name is required"
        }), 400

    email = data.get('email', '')
    department = data.get('department', '')

    # Process received data
    return jsonify({
        "message": f"Hello {name}! Data received successfully.",
        "email": email,
        "department": department,
        "status": "success"
    }), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
