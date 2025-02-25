# POC 1
## Generate Angular application with provision of the technical stack
In this first poc, we asked an AI to generate an angular application with a well-defined technical stack.
## Used AI
![Bolt](/images/bolt.png "Bolt")

## Prompt used
Here is the prompt that was used :
### Text
>Je vais te donner une capture de l’écran de login de l’application que je souhaite que tu génères. 
Je souhaiterai que tu te bases sur cette capture pour réaliser les écrans et les composants que je vais te décrire. 
Tu attendras que je te fournisse la capture avant de commencer. 
Tu veilleras à ce que chaque composant soit définie dans son propre répertoire contenant 3 fichiers : 1 fichier typescript, 1 fichier html et un 1 fichier css.
Voila comment j’aimerai que tu procèdes :
Etape 1 : Génération du squelette de l’application
Etape 2 : Génération des composants réutilisables
Etape 3 : Génération des écrans
Je vais maintenant te décrire ce que j’attends pour la première étape. Tu vas générer une application respectant le stack technique que je vais t’indiquer. Tu veilleras à respecter exactement les versions des composants que je vais t’indiquer.
- Angular  
- Typescript
- Material UI
- Webpack
- Babel
- Axios
Tu m’indiqueras si d’autres librairies manquent ou te semblent mieux adaptées.
Je vais maintenant te décrire ce que j’attends pour la seconde étape. Je voudrais n’avoir à modifier que la feuille de style. Tu veilleras à ce que ces composants utilisent leur propre fichier. Voici la liste des composants à créer :
- Un composant Header
- Un composant Footer
Je vais maintenant te décrire ce que j’attends pour la troisième étape. Si le contenu de la page n’est pas décrit tu généreras une page vide affichant la couleur de fond.
L’application doit contenir les pages publiques suivantes : 
- Une page de login dont je vais te fournir la capture d’écran. Pour l’instant je voudrais que le login soit test et le mot de passe test.
- Une page contact 
- Une page legal mentions contenant un texte statique. Tu pourras utiliser un texte d’exemple de ton choix
L’application doit contenir les pages privées suivantes : 
- Une page lexicon qui doit être affichée après la connexion
- Une page customer
>
### App screenshots

![Screenshot](/images/screenshots/login.jpg "This is an app Screenshot")

## Generated Application
After executing the prompt, the AI generated an application that you can view from this link:

[Access to generated application source code here ](https://github.com/jpdacunha/fa-ia-poc/tree/main/sources/front-end/fa-poc-1)

## Result
unfortunately, the AI generated us a code that does not work with compilation errors, below is a screenshot of the result :
![Screenshot poc 1](/images/poc-1/Error.png "This is a screenshot of result of first poc")
