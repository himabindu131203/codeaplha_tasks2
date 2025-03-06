from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        subject1 = float(request.form['subject1'])
        subject2 = float(request.form['subject2'])
        subject3 = float(request.form['subject3'])
        subject4 = float(request.form['subject4'])
        subject5 = float(request.form['subject5'])

        # Calculate the average grade
        average = (subject1 + subject2 + subject3 + subject4 + subject5) / 5
        return render_template('index.html', average=round(average, 2))
    
    return render_template('index.html', average=None)

if __name__ == '__main__':
    app.run(debug=True)
