## Natural Don't Know: Saying No is An Art

Contains code for the following paper:

> _[Saying No is An Art: Contextualized Fallback Responses for Unanswerable Dialogue Queries](https://aclanthology.org/2021.acl-short.13.pdf)_ Ashish Shrivastava, Kaustubh D. Dhole, Abhinav Bhatt, Sharvani Raghunath, 2021

<p align="center">
<img src="https://github.com/kaustubhdhole/natural-dont-know/blob/main/dontknow.png" width="150" height="90">
</p>

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

#### Citations

* [Saying No is An Art: Contextualized Fallback Responses for Unanswerable Dialogue Queries](https://aclanthology.org/2021.acl-short.13/)
```bibtext
@inproceedings{shrivastava-etal-2021-saying,
    title = "{S}aying {N}o is {A}n {A}rt: {C}ontextualized {F}allback {R}esponses for {U}nanswerable {D}ialogue {Q}ueries",
    author = "Shrivastava, Ashish  and
      Dhole, Kaustubh  and
      Bhatt, Abhinav  and
      Raghunath, Sharvani",
    booktitle = "Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 2: Short Papers)",
    month = aug,
    year = "2021",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2021.acl-short.13",
    doi = "10.18653/v1/2021.acl-short.13",
    pages = "87--92",
    abstract = "Despite end-to-end neural systems making significant progress in the last decade for task-oriented as well as chit-chat based dialogue systems, most dialogue systems rely on hybrid approaches which use a combination of rule-based, retrieval and generative approaches for generating a set of ranked responses. Such dialogue systems need to rely on a fallback mechanism to respond to out-of-domain or novel user queries which are not answerable within the scope of the dialogue system. While, dialogue systems today rely on static and unnatural responses like {``}I don{'}t know the answer to that question{''} or {``}I{'}m not sure about that{''}, we design a neural approach which generates responses which are contextually aware with the user query as well as say no to the user. Such customized responses provide paraphrasing ability and contextualization as well as improve the interaction with the user and reduce dialogue monotonicity. Our simple approach makes use of rules over dependency parses and a text-to-text transformer fine-tuned on synthetic data of question-response pairs generating highly relevant, grammatical as well as diverse questions. We perform automatic and manual evaluations to demonstrate the efficacy of the system.",
}
```
