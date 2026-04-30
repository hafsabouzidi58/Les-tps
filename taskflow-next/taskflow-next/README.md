
TP 1 :



Q1 : React utilise react-router-dom pour le routing.
     Next.js utilise la structure des dossiers pour créer les routes.

Q2 : un seul fichier app/login/page.tsx , en react router 3 éléments  

Q3 : En React, on utilise useParams() pour récupérer l’id côté client. En Next.js, l’id est récupéré    avec params passé en prop par le serveur.

Q5 : Environ 10 à 15 lignes

Q6 : non , car La requête est faite par le serveur Next.js, pas par le navigateur.

Q7 : Parce que Login utilise : useState , onChange , onSubmit ( Ce sont des interactions utilisateur.)

Q8 : en next.js on utilise useRouter()

Q9 : Pas de projets , pas de contenu html

Q10 : oui , Les projets sont visibles 

Q11 : On plaçait le Header dans App.tsx

Q12 : on crée app/dashboard/layout.tsx

Q13 : non , Server Component s’exécute côté serveur

Q14 : on crée Un petit composant client , On l’importe dans Dashboard.

Q15 :  Les URLs internes sont cachées , Les API sensibles sont protégées , Moins d’exposition aux attaques.









TP 2 :


Q1 : il fallait mettre à jour le state avec setProjects ou refaire un fetch pour afficher le nouveau projet. 

Q3 : parce que le Dashboard est un Server Component et ne supporte pas les événements comme onClick. 

Q4 : on voit une liste de projets au format JSON. Cela correspond à la réponse de l’API Route avec la méthode GET.

Q5 : Une API Route expose une API accessible publiquement via HTTP, tandis qu’une Server Action est une fonction serveur utilisée directement dans un formulaire et non accessible depuis l’extérieur.

Q6 : Dans Next.js, il y a moins de useState qu’en React SPA, car on utilise useActionState qui gère automatiquement l’état du formulaire. 

Q7 : Oui, le cookie session est visible dans l’onglet Application des outils développeur. Cependant, il est impossible de le lire avec document.cookie car il est défini avec l’option HttpOnly.

Q8 : Avec le middleware, la page Dashboard ne se charge même pas si l’utilisateur n’est pas authentifié. Contrairement à React SPA, il n’y a pas de flash de contenu.

Q9 : car Next.js le détecte automatiquement à cet emplacement pour intercepter les requêtes.

Q10 : En React SPA, on utilisait un Context ou un hook comme useAuth pour gérer l’utilisateur. En Next.js, on lit directement le cookie côté serveur avec cookies().

Q11 : Pour un formulaire de création de projet, on utilise une Server Action car elle est simple et intégrée à l’interface. Pour une application mobile, on utilise une API Route car elle est accessible via HTTP.

Q12 : L’utilisation des cookies HttpOnly et du middleware améliore la sécurité car les cookies ne sont pas accessibles via JavaScript et les routes sont protégées avant même le rendu.

Q13 : Oui, les API Routes fonctionnent toujours sans json-server car Next.js agit comme un serveur backend et lit directement les données depuis le fichier db.json.

Q14 : Non, un script XSS ne peut pas voler un cookie HttpOnly car il est inaccessible via document.cookie, ce qui protège contre ce type d’attaque.
