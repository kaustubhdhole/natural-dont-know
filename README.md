**Natural Don't Know: Saying No is An Art**

This repository contains code for calling the Natural Don't Know Response Service via front-end.

While  most  dialog  systems rely on static and unnatural responses like “I don’t  know”  or  “I’m  not  sure” for addressing unanswerable queries, our approach generates responses which are contextually superior than static responses.
With the help of dependency patterns and question paraphrases from the Quora question-pairs dataset, we create question-response pairs and use them to train a text-to-text transformer.

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