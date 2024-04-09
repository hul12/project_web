1)	Le fichier package-lock.json agit comme une référence au fichier package.json en fixant les versions des dépendances, et il répertorie également toutes les dépendances transitives nécessaires à l'application, y compris les dépendances de dépendances.

2)	Le format de versionnement utilisé sur NPM, composé de trois chiffres, est connu sous le nom de Semantic Versioning (Semver).

3)	Une DevDependency est une dépendance ajoutée au projet qui ne sera pas incluse lors de la construction de l'application, contrairement aux dépendances classiques.

4)	Une closure est une fonction qui se souvient de l'environnement dans lequel elle a été créée, tandis qu'une IIFE (Immediately Invoked Function Expression) est une fonction qui est immédiatement appelée à sa définition. Les IIFE étaient utilisées pour créer des scopes privés avant l'avènement des ES Modules.

5)	L'importation avec import * permet d'importer tous les éléments exportés d'un fichier, tandis que l'importation avec import {method} permet d'importer uniquement les éléments spécifiés entre les accolades, s'ils ont été exportés dans le fichier cible.

6)	Comparativement aux classes ES6, les classes Java peuvent utiliser l'overloading, c'est-à-dire avoir plusieurs méthodes avec le même nom mais des signatures différentes. Les classes ES6 n'ont pas de concept d'encapsulation tel que la définition "private" pour les méthodes et les attributs.

7)	La portée d'une variable var est limitée à la fonction dans laquelle elle est définie ou au scope global si elle est définie en dehors d'une fonction. En revanche, une variable let est définie dans le bloc dans lequel elle est déclarée, comme un if, while, ou for, ou dans le scope du module si elle n'est pas dans une structure.

8)	L'utilisation de .bind(this) sur des déclarations de fonctions de callback lie la fonction à un contexte spécifique, généralement l'objet dans lequel elle est définie. Cela permet d'accéder aux attributs de cet objet. Si .bind(this) est omis, "this" fera référence au scope au-dessus, généralement le scope global. Cette technique n'est pas nécessaire avec les fonctions fléchées car elles capturent automatiquement le contexte dans lequel elles sont définies.

9)	Le symbole "@" dans "@Babel" indique à NPM que les packages recherchés font partie du scope Babel dans la base de données de NPM, évitant ainsi les conflits de nommage entre différents packages.

10)	Les promesses permettent d'effectuer des tâches de manière asynchrone sans recourir à des rappels, ce qui peut rendre le code plus lisible. La méthode .then() permet d'exécuter une opération après la résolution de la promesse, et les promesses peuvent être enchaînées les unes après les autres, remplaçant ainsi les enchevêtrements de rappels.

11)	Les mots-clés async et await sont apparus dans la spécification ECMAScript 8 (ES8).

12)	La programmation orientée composant facilite la maintenance en compartimentant l'application en composants réutilisables. Cela permet d'isoler les changements et les problèmes, ce qui facilite également les évolutions car les composants peuvent être réutilisés.

13)	La programmation fonctionnelle consiste à construire un programme en appliquant et en composant des fonctions entre elles. Par exemple, la bibliothèque stream permet de composer des opérations sur des listes.

14)	La fonction map() permet de parcourir une liste et de remplacer chaque valeur par une nouvelle en fonction d'une condition donnée.

15)	La fonction filter() parcourt une liste et conserve uniquement les valeurs qui satisfont une condition donnée.

16)	La fonction reduce() prend une variable pour stocker le résultat de chaque itération et une variable à itérer. Elle effectue une opération à chaque itération.

17)	Contrairement à .then(), qui permet au programme de continuer à s'exécuter en attendant une réponse, await dans une fonction async bloque l'exécution de la fonction jusqu'à ce qu'une réponse soit obtenue.

18)	Le caractère "_" dans un fichier Sass indique qu'il s'agit d'un fichier partiel, qui ne sera pas immédiatement transformé en CSS mais qui contient des éléments référencés dans d'autres fichiers Sass.
