# POC 3
## Generate Angular application without provision of the technical stack
In this second poc, we asked an AI to generate an angular application without a defining technical stack.
We asked to create:
* A login page from the login screenshot.
* A contact page from the contact screenshot, accessible from the footer link.
* A customer search page from the customer search screenshot that must be displayed after login.
## Prompt used
Here is the prompt that was used : [Prompt 2](https://github.com/jpdacunha/fa-ia-poc/blob/main/prompts/Prompt-poc-3.txt)
## Generated Application
After executing the prompt, the AI generated an application that you can view from this link:

[Access to generated application source code here ](https://github.com/jpdacunha/fa-ia-poc/tree/main/sources/front-end/fa-poc-3)

## Result
The AI generated the requested components as demonstrated here:
![Screenshot poc 3](/images/poc-3/generated-app.JPG "generated code")
But when we launch the application, we see a standard home page like this :
![Screenshot poc 3](/images/poc-3/preview.JPG "generated code")
We notice that the AI has not done the routing between the pages and with the right components, and when we ask it to add the right routing, we get an error:
![Screenshot poc 3](/images/poc-3/bolt-view.JPG "generated code")
You can see all [error log here](https://github.com/jpdacunha/fa-ia-poc/blob/main/logs/poc-3/error.txt) 
