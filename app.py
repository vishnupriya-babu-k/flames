from flask import Flask, render_template, request
app = Flask(__name__)

# Function to calculate the FLAMES result
def flames_game(n1, n2):
    # Remove common letters
    n1 = n1.lower().replace(" ", "")
    n2 = n2.lower().replace(" ", "")
    
    original_n1, original_n2 = n1, n2
    temp_n1, temp_n2 = list(n1), list(n2)
    
    # Remove common letters
    for letter in n1:
        if letter in temp_n2:
            temp_n1.remove(letter)
            temp_n2.remove(letter)
    
    # Calculate remaining letters
    count = len(temp_n1) + len(temp_n2)
    
    # FLAMES calculation
    flames = list("FLAMES")
    index = 0
    
    while len(flames) > 1:
        index = (index + count - 1) % len(flames)
        flames.pop(index)
    
    # Determine the result
    results = {
        "F": "Friends",
        "L": "Lovers",
        "A": "Affection",
        "M": "Marriage",
        "E": "Enemies",
        "S": "Siblings"
    }
    
    return {
        "result": results[flames[0]],
        "name1": original_n1.capitalize(),
        "name2": original_n2.capitalize()
    }

@app.route("/", methods=["GET", "POST"])
def index():
    result = None
    if request.method == "POST":
        name1 = request.form["name1"]
        name2 = request.form["name2"]
        result = flames_game(name1, name2)
    return render_template("index.html", result=result)


@app.route('/')
def home():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
