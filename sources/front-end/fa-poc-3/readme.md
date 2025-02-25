# POC 3
## Generate Angular application without provision of the technical stack
In this second poc, we asked an AI to generate an angular application without a defining technical stack.
We asked to create:
* A login page from the login screenshot.
* A contact page from the contact screenshot, accessible from the footer link.
* A customer search page from the customer search screenshot that must be displayed after login.
## Used AI
![Bolt](/images/bolt.png "Bolt")
## Prompt used
Here is the prompt that was used : 
### Text
>Je vais te donner une capture de l’écran de login de l’application angular que je souhaite que tu génères. Je souhaiterai que tu te bases sur cette capture pour réaliser les écrans et les composants que je vais te décrire. Tu veilleras à ce que chaque composant soit définie dans son propre répertoire contenant 3 fichiers : 1 fichier typescript, 1 fichier html et un 1 fichier css.
Je veux que tu respectes au maximum l’apparence de la capture, les mêmes couleurs et le même design.
Je veux que tu crée un composant Header, un composant Footer et un composant login.
L’application doit contenir les pages publiques suivantes : 
Une page de login depuis la capture d'écran de login, je voudrais que le login soit test et le mot de passe test.
Une page de contact depuis la capture d’écran de contact, accessible depuis le lien du footer.
Une page recherche client depuis la capture d’écran de recherche client qui doit être affichée après la connexion.
>
### App screenshots

![Screenshot](/images/screenshots/login.png "This is an app Screenshot")

![Screenshot](/images/screenshots/recherche.png "This is an app Screenshot")

![Screenshot](/images/screenshots/contact.png "This is an app Screenshot")

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

You can see all [error log here](https://github.com/jpdacunha/fa-ia-poc/blob/main/logs/poc-3/error.log) 
