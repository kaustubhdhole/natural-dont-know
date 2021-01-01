**Natural Don't Know: Saying No is An Art**

Contains code for the following paper:

> Ashish Shrivastava, Kaustubh D. Dhole, Abhinav Bhatt, Sharvani Raghunath, 2020 _[Saying No is An Art: Contextualized Fallback Responses for Unanswerable Dialogue Queries](https://arxiv.org/pdf/2012.01873.pdf)_

![Alt text](dontknow.png?raw=true "Title")

This repository contains code for calling the Natural Don't Know Response Service using a HuggingFace model as well as a front-end interface.

![Alt text](examples.png?raw=true "Title")

#### Using the model directly for inference
You can use our [model deployed at HuggingFace](https://huggingface.co/ashish-shrivastava/dont-know-response) directly.

OR 
#### Call the service locally
```bash
pip3 install -r requirements.txt
```
```python
from ndk_generator import NdkGenerator
ndkGenerator = NdkGenerator()
question = "What is the effect of demonetization of 500 and 1000 rupees notes?"
ndkResponse = ndkGenerator.random_paraphrase(question)
```

OR 
#### Deploying a stand-alone web service

In order to install this project, run the following: 
```bash
sh install.sh
```
This will install the front-end as well as server side dependencies.


In order to start running the project and see it in action, run the below script: 
```bash
sh run.sh
```
This would start the development server

http://127.0.0.1:5000/ 

![Alt text](front-end.png?raw=true "Title")

The front-end code has been taken from [James Gung's VerbNet Parser repository](https://github.com/jgung/verbnet-parser).