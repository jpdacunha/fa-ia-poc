# POC 2
## Generate Angular application without provision of the technical stack
In this second poc, we asked an AI to generate an angular application without a defining technical stack.
We asked to create an authentication page from the screenshot provided, and a home page that will be displayed after authentication with a welcome message
## Prompt used
Here is the prompt that was used : 
### Text
>Je vais te donner une capture de l’écran de login de l’application angular que je souhaite que tu génères. 
Je souhaiterai que tu te bases sur cette capture pour réaliser les écrans et les composants que je vais te décrire. 
Tu veilleras à ce que chaque composant soit définie dans son propre répertoire contenant 3 fichiers : 1 fichier typescript, 1 fichier html et un 1 fichier css.
Je veux que tu respectes au maximum l’apparence de la capture, les même couleurs et le même design.
Je veux que tu crée un composant Header, un composant Footer et un composant login.
L’application doit contenir les pages publiques suivantes :
- Une page de login dont je vais te fournir la capture d’écran. Pour l’instant je voudrais que le login soit test et le mot de passe test.
- Une page accueil qui doit être affichée après la connexion, tu doit mettre juste un message de bienvenue dans cette page d’accueil.
>
### App screenshots

![Screenshot](/images/screenshots/login.png "This is an app Screenshot")


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
