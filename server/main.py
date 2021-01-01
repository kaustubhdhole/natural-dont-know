import os
from flask import Flask, send_from_directory
import atexit

app = Flask(__name__, static_folder='../client/build')
from flask import request
from ndk_generator import NdkGenerator



def OnExitApp(ndk_generator):
    ndk_generator.close()
    print("Exit Application")



@app.route("/", defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

def get_dont_know_response(utterance: str):
    paraphrase = ndkGenerator.random_paraphrase(utterance)
    payload = '{"tokens": [{"text": ' + \
              f'"{paraphrase}"' + \
              '}],"props": []}'
    return payload

@app.route("/predict/semantics")
def generate():
    utterance = request.args.get('utterance')
    payload = get_dont_know_response(utterance)
    return payload

if __name__ == '__main__':
    ndkGenerator = NdkGenerator()
    atexit.register(OnExitApp, ndk_generator=ndkGenerator)
    app.run(debug=True, use_reloader=True, port=5002, threaded=True)