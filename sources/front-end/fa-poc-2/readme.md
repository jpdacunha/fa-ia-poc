# POC 2
## Generate Angular application without provision of the technical stack
In this second poc, we asked an AI to generate an angular application without a defining technical stack.
We asked to create an authentication page from the screenshot provided, and a home page that will be displayed after authentication with a welcome message
## Prompt used
Here is the prompt that was used : [Prompt 2](https://github.com/jpdacunha/fa-ia-poc/blob/main/prompts/Prompt-poc-2.txt)
## Generated Application
After executing the prompt, the AI generated an application that you can view from this link:

[Access to generated application source code here ](https://github.com/jpdacunha/fa-ia-poc/tree/main/sources/front-end/fa-poc-2)

## Result
Unlike the first scenario, the AI generated an application with a login page and a second home page as requested.
![Screenshot poc 2](/images/poc-2/login.JPG "Login page")
![Screenshot poc 2](/images/poc-2/home.JPG "Home page")

## To go further
In the second step, we asked the AI ​​to use the Material UI component library, and there, we noticed a regeneration in the source code, the new generated code did not compile and we had the following error:
![Screenshot poc 2](/images/poc-2/Error.JPG "Error compilation")
