import torch
from transformers import T5ForConditionalGeneration, T5Tokenizer

def set_seed(seed):
  torch.manual_seed(seed)
  if torch.cuda.is_available():
    torch.cuda.manual_seed_all(seed)

class NdkGenerator():

    model = None
    tokenizer = None
    device = None
    set_seed(42)

    def __init__(self):
        print("Starting to load the NDK model.")
        self.model = T5ForConditionalGeneration.from_pretrained('ashish-shrivastava/dont-know-response')
        self.tokenizer = T5Tokenizer.from_pretrained('ashish-shrivastava/dont-know-response')
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        print("device ", self.device)
        self.model = self.model.to(self.device)
        print("NDK model and tokenizer loaded.")

    def generate(self, sentence):
        # sentence = "What are the ingredients required to bake a perfect cake?"
        # sentence = "What is the best possible approach to learn aeronautical engineering?"
        # sentence = "Do apples taste better than oranges in general?"


        text =  "paraphrase: " + sentence + " </s>"


        max_len = 256

        encoding = self.tokenizer.encode_plus(text,pad_to_max_length=True, return_tensors="pt")
        input_ids, attention_masks = encoding["input_ids"].to(self.device), encoding["attention_mask"].to(self.device)


        # set top_k = 50 and set top_p = 0.95 and num_return_sequences = 3
        beam_outputs = self.model.generate(
            input_ids=input_ids, attention_mask=attention_masks,
            do_sample=True,
            max_length=256,
            top_k=120,
            top_p=0.98,
            early_stopping=True,
            num_return_sequences=10
        )


        print ("\nOriginal Question ::")
        print (sentence)
        print ("\n")
        print ("Paraphrased Questions :: ")
        final_outputs =[]
        for beam_output in beam_outputs:
            sent = self.tokenizer.decode(beam_output, skip_special_tokens=True,clean_up_tokenization_spaces=True)
            if sent.lower() != sentence.lower() and sent not in final_outputs:
                final_outputs.append(sent)

        for i, final_output in enumerate(final_outputs):
            print("{}: {}".format(i, final_output))
        return final_outputs

    def random_paraphrase(self, utterance: str):
        paraphrases = self.generate(utterance)
        #return random.choice(paraphrases)
        return paraphrases[0]

    def close(self):
        print(f"Freeing up memory from NDK model.")
        self.model = None
        self.tokenizer = None