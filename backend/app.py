from flask import Flask, render_template, jsonify

DEBUG = True

app = Flask(__name__,
            static_folder="../frontend/dist/static",
            template_folder ="../frontend/dist")

app.config.from_object(__name__)

@app.route('/', defaults={'path':''})
@app.route('/<path:path>')
def index(path):
  return render_template("index.html")

@app.route('/v1/tasks',methods=['GET'])
def task_list():
  response = {
    'tasks': [
      { 'name': "TODO4", 'status': "done" },
      { 'name': "TODO5", 'status': "doing" },
      { 'name': "TODO6", 'status': "todo" }
    ]
  }
  return jsonify(response)

if __name__ == '__main__':
    app.run()