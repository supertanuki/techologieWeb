---
episode_number: 103
title: "Plug, baby, plug : les impacts du data center"
people: Cécile Diguet
description: "À l'occasion du sommet Choose France, le 13 mai 2024, Emmanuel Macron avec sa phrase « plug, baby, plug », invitait des entreprises comme Microsoft et Amazon à implanter des data centers en France pour profiter d'une énergie bas-carbone. Mais sait-on ce qu'est vraiment un datacenter, ses conséquences environnementales, ses futurs impacts… sur notre futur. Pour répondre à nos questions sur les centres de données, nous avons Cécile Diguet, experte en architecture, design urbain et l'impact des datacenters sur son territoire, coautrice avec Fanny Lopez du livre Sous le feu numérique, Spatialités et énergies des data centers, paru en 2023 aux éditions MétisPresses, coautrice d'un rapport pour l'Ademe : Prospective d'évolution des consommations des centres de données en France de 2024 à 2060."
date: 2026-02-17
image: /img/episodes/103-cecile-diguet.jpg
audio_link: https://soundcloud.com/techologie/103-plug-baby-plug-datacenter
audio_size_in_megabyte: 37
transcribed: true
---

## En savoir plus

- [Prospective d'évolution des consommations des data centers à court, moyen et long terme de 2024 à 2060](https://librairie.ademe.fr/energies/8910-10774-prospective-d-evolution-des-consommations-des-data-centers-a-court-moyen-et-long-terme-de-2024-a-2060.html#/44-type_de_produit-format_electronique)
- [Sous le feu numérique, Spatialités et énergies des data centers](https://www.metispresses.ch/fr/sous-le-feu-numerique)

## Transcription

### Extrait

<div class="quote-highlight">

Ce qu'on a essayé de faire et de modéliser, c'est donc des politiques publiques qui seraient différentes selon les scénarios. Sur la génération frugale par exemple, l'idée c'est qu'il y ait des outils d'interdiction, d'incitation et de régulation qui soient mis en place. Donc on est sur le scénario qui est le plus incitatif, on va dire le plus fort, avec des réglementations sur les usages les plus toxiques du secteur numérique, tout ce qui est autour de la captation de l'attention sur les réseaux sociaux, tout ce qui est push sur l'utilisation de liaisons systématiquement et sans consentement, ce qu'on voit de plus en plus dans les moteurs de recherche maintenant.

</div>

### Introduction

Richard : À l'occasion du sommet Choose France, le 13 mai 2024, Emmanuel Macron avec sa phrase "plug baby plug" invitait des entreprises comme Microsoft et Amazon à implanter des data centers en France pour profiter d'une énergie bas carbone. Mais c'est en ce qui est vraiment un data center, ses conséquences environnementales, ses futurs impacts sur notre propre futur. Pour répondre à nos questions, on a avec nous Cécile Diguet. Cécile, tu es experte en architecture, design urbain et l'impact des data centers sur leur territoire. Tu es co-autrice avec Fanny Lopez du livre "Sous le feu numérique, spatialité et énergie des data centers" paru en 2023 aux éditions MetissPress et tu es co-autrice d'un rapport récent pour l'ADEME dont on va parler durant cet échange, c'est "Prospective d'évolution des consommations des centres de données en France de 2024 à 2060".

Avant de lancer notre discussion, je voudrais revenir à quelques petites choses, vues et lues ces derniers jours. Ça va te faire rire peut-être Cécile.

Avec l'IAG, avec l'intelligence artificielle générative, ou la classe intellectuelle semble-t-il s'installer d'après ce que je peux voir. En tout cas, je suis tombé sur un avis publié sur l'App Store avec comme début de message "Bien sûr, voici une suggestion d'avis pour l'App Store". La personne qui a publié ça ne s'est pas relue et a copié/collé tel quel.

Autre exemple, vu sur LinkedIn, une personne qui a publié sans relire une infographie contenant une phrase incompréhensible, publiant ainsi sans vérification ce qu'on appelle aujourd'hui un "slop", un contenu généré par les IAG de mauvaise qualité. Et quand quelqu'un lui a fait la remarque en commentaire, l'auteur de cette publication a sorti que l'image, c'était juste pour faire joli. Voilà, voilà.

Autre chose qui m'a interpellé, c'est le logiciel Notepad++, qui a été victime d'un piratage de son module de mise à jour. Donc le logiciel Notepad++, moi je l'ai beaucoup utilisé dans les années 2000 pour développer. C'était très archaïque, mais voilà, en tout cas le logiciel a été piraté. Le piratage est sûrement dû à ce qui s'est passé en 2019, à ce que Don Ho, le développeur de Notepad++, s'était attiré les foudres de certains nationalistes chinois qui avaient notamment spammé son dépôt Github. Il réagissait à la publication d'une des versions du logiciel de Notepad++, qui a été baptisée Free Uyghur, libérer les Uyghurs. Le média en ligne Next, qui relais cette réaction du développeur à l'époque : "les gens me diront encore une fois de ne pas mélanger la politique avec les logiciels et les affaires. Parler de politique est exactement ce que les éditeurs et les logiciels commerciaux essaient généralement d'éviter". Big up à ce développeur, franchement. La sécurité de Notepad++ a été corrigée depuis.

### À nous, Cécile, peux-tu nous parler de ton parcours et ce qui t'a amener à t'intéresser à la question des centres de données ?

Bien sûr. J'ai une formation d'urbaniste, donc à la base, je m'intéresse au fonctionnement des espaces en lien avec des usages sociaux, et évidemment, depuis un certain temps, avec toutes les dimensions des crises climatiques et écologiques, et en fait, à partir de 2015, dans ces eaux-là, en tant qu'urbanistes, on était beaucoup un peu matraqués, même par la notion de Smart City, qui a régulièrement des concepts qui sont assez forts, on va dire, dans le monde de l'urbanisme, et qu'on voit arriver, alors au départ, on ne sait pas trop par quel canot, et puis après, la Smart City, on a compris que derrière, c'était une stratégie de notamment IBM et Cisco, pour se réinventer un nouveau modèle d'affaires.

Et en fait, ce qu'on se disait, nous, certains d'urbanistes, et notamment avec Fanny Lopez, qui est la historienne de l'architecture et des techniques, c'est que derrière cette ville digitale, cette ville numérique, Smart City, il y avait forcément des infrastructures qui étaient très invisibilisées par les acteurs économiques pour réussir à continuer en quelque sorte à nous faire croire à une immatérialité du numérique.

Donc on s'est dit, tiens, allons voir tout ça d'un peu plus près. Et à partir de 2016-2017, on a, grâce à l'ADEME, à la Caisse des Dépôts notamment, réussi à avoir des fonds pour lancer une étude, et des terrains d'études surtout qu'on a réalisés aux États-Unis, notamment en Oregon, New York, Californie, et puis en Europe, beaucoup l'Île-de-France, mais aussi Barcelone, Stockholm, Amsterdam, pour voir plus précisément quels étaient les impacts des data centers sur les territoires, sur les ressources. Donc voilà, ça c'était le début de mon intérêt et de mes recherches sur les centres de données numériques.

### Il y a aujourd'hui, début de 2026, 352 centres de données actifs identifiés en France, je dis bien identifiés, il y en a peut-être beaucoup plus. Qu'est-ce qu'un data center ? Ça se mesure comment un data center ? C'est en taille, en mètres carrés, en consommation en mégawatt-heure ?

Alors, c'est intéressant de commencer par justement la question des données sur les centres de données, puisque avec Hubblo et puis Lorraine de Montenay, on a travaillé sur cette étude pour l'ADEME, sur cette prospective de consommation des data centers, et une des premières choses qu'on a voulu faire, c'était une base de données pour effectivement identifier le nombre de data centers en France.

Précédemment, je travaillais à l'Institut Paris Région, donc sur la région Ile-de-France, on avait commencé à constituer une base de données aussi assez robuste. Mais ce qu'il faut savoir c'est que, premièrement, les data centers ne font partie d'aucune catégorie qui nous faciliteraient le travail d'identification. C'est-à-dire qu'on pourrait imaginer que, par exemple, c'est une catégorie dans les plans locaux d'urbanisme ou que c'est une catégorie dans les codifications économiques, par exemple les codes NAF quand on crée son entreprise, on pourrait se dire : "Bon, on va les trouver là." Ou alors dans la fiscalité. Mais dans aucune de ces bases de données, on peut identifier simplement des data centers. Donc résultat, il y a tout un travail, on va dire, très artisanal qui est de croiser les infos, les bases de données, la presse, les annonces des opérateurs pour identifier des data centers, premièrement, déjà leur existence, et ça, ça prend beaucoup de temps.

La deuxième chose, ensuite, c'est quelles caractéristiques, effectivement, on réussit à identifier. La question des surfaces, c'est un sujet parce qu'en fait, dans les surfaces, on a à la fois la surface de plancher globale, mais ce qui est intéressant de savoir, c'est la surface IT, donc qui est dédiée aux serveurs, les salles de serveurs, et le reste des surfaces qui sont, en général, principalement les équipements électriques de secours, et en fait, c'est aussi une partie très importante.

La question des puissances, effectivement, là, on en vient à la question des données sur les consommations électriques. En fait, on peut régulièrement avoir une donnée sur la puissance raccordée, c'est-à-dire la puissance électrique qui est mise à disposition, mais c'est beaucoup plus dur d'avoir une idée sur les consommations réelles.

Sur l'eau, on n'en parle pas parce que c'est encore plus compliqué d'avoir les données, même si c'est pas forcément un sujet aussi, à ce stade, aussi tendu en France que dans d'autres pays.

Voilà, donc c'est vrai qu'on a réalisé un travail très exhaustif et assez complexe, et on aurait aimé que, notamment dans le cadre de l'EED, Energy Efficiency Directive, qui est une directive de l'Union Européenne, grâce à cette directive, on aurait pu récolter des données plus précises, puisque les data centers doivent transférer un certain nombre de données sur leur consommation environnementale à l'ADEME qui les transmet ensuite à l'Union Européenne pour avoir une image plus globale. Mais on va dire que ça a pris beaucoup de retard, et donc résultat, on n'a pas pu intégrer ça dans notre étude.

### Parlons maintenant de la composition du data center. On pense souvent au serveur, le système de refroidissement, le générateur de secours qui est souvent au fuel. Est-ce que tu peux nous en dire là-dessus, c'est quoi un data center ?

Un data center, si vous voulez les reconnaître dans la rue ou dans les territoires, ça ressemble beaucoup à un entrepôt logistique, sauf qu'il n'y a pas de camion. Donc il faut regarder sur le toit, déjà aussi, si sur le toit vous voyez beaucoup d'équipements techniques, si sur les côtés vous voyez des générateurs de secours dans des grosses boîtes fermées, voilà, c'est très possiblement un data center, d'autant plus s'il est entouré de clôtures métalliques assez hautes, bardées de caméras de vidéosurveillance et de différents sas de sécurité, voilà.

Ça, c'est la tête d'un data center classique depuis l'extérieur. Après, évidemment, il y a des variations puisque certains sont installés en plein cœur de ville, en plein Paris, boulevard Voltaire, il y a un data center dans un ancien grand magasin, par exemple.

Mais on va dire qu'aujourd'hui, ce qui se développe, c'est beaucoup plus des data centers dans des territoires périurbains voire ruraux et qui sont très, on va dire, sur un mode très défensif en termes d'architecture.

Ensuite, quand on rentre, quand on réussit à rentrer dans un data center, parce qu'évidemment, c'est très sécurisé, on va d'abord avoir justement des postes de sécurité qui vont vous orienter et le cœur du data center, celui qui est le plus protégé, ce sont les salles serveurs.

Ce sont des salles dans lesquelles on a des serveurs informatiques, donc soit classiques, soit dédiés à l'IA maintenant de plus en plus. Il y en a toujours beaucoup de serveurs classiques. Donc, on a des allées, en fait, des allées où on a des serveurs qui tournent.

Et ces allées, c'est là où ça chauffe et donc c'est pour ça qu'on a besoin d'équipements de refroidissement qui peuvent être de différents types et qui sont aussi assez prégnants dans l'infrastructure.

On a toute une partie d'infrastructures électriques, de stabilisateurs et de transformateurs qui sont dans le bâtiment. Et puis, il y a évidemment des bureaux et des espaces de logistique dans le data center.

Mais en gros, le cœur du data center, ce sont les salles de serveurs où en général, soit les entreprises amènent leurs serveurs si on est dans un data center de colocation, par exemple. Soit si c'est OVH, un hébergeur, il y a déjà des serveurs et les entreprises mettent leurs données dessus, mais tout en virtuel.

On peut aussi avoir des data centers d'entreprise comme les grosses entreprises type EDF, BNP Paribas, etc. qui ont leurs propres serveurs. Et enfin, on a évidemment les très très grands data centers de cloud qui là, pareil, ont déjà leurs propres serveurs.

### Quelle est la différence entre les serveurs classiques et les serveurs dédiés à l'IA ?

C'est vrai qu'on parle beaucoup d'IA de façon assez globalisante aujourd'hui. Il y avait déjà de l'IA dans plein de procédés précédemment. Mais ce qui se passe aujourd'hui avec l'IA générative en particulier, c'est qu'on utilise des processeurs différents qu'on appelle les GPU, les Graphic Processor Unit, à la place des CPU, qui sont des processeurs plus classiques.

Ces GPU consomment en moyenne 10 fois plus d'électricité que les CPU. Et ça, c'est ce que tout le monde a un peu découvert ces dernières années, c'est que l'IA consomme beaucoup plus d'électricité et beaucoup plus intensif énergétiquement que le numérique dans sa version sans IA.

Du coup, ce que ça veut dire, c'est que dans les data centers, on a aujourd'hui des serveurs qui vont être en partie dédiés à l'IA, qui doivent développer des systèmes de refroidissement différents.

Et aujourd'hui, ce qui est sur beaucoup, c'est ce qu'on appelle le direct liquid cooling. En fait, ça va être des sorts de serpentins d'eau glacée qui passent directement derrière les processeurs pour les refroidier au plus près.

Et ça, en fait, c'est intéressant de voir que quand on discute avec les opérateurs, ça fonctionne si on va jusqu'à 10% de la surface du data center qui est dédié à l'IA. Mais si on veut un data center 100% IA ou 80% ou 70%, il faut carrément transformer beaucoup plus profondément l'organisation du data center et de son système de refroidissement. C'est cet équilibre-là qui peut faire changer les choses.

Et deuxième point, il y a évidemment la question de la concentration d'une demande énergétique de plus en plus forte sur certains secteurs des territoires, sur certains réseaux on va dire électriques qui peuvent être aussi fragilisés. D'accord, on y reviendra.

### Quelles sont les conséquences environnementales d'un centre de données ? Moi je pense à la consommation d'énergie évidemment, la consommation d'eau maintenant pour le refroidissement, l'artificialisation des sols pour la construction du centre de données, le cas échéant parce que parfois ça s'installe dans un hangar qui a déjà été utilisé.

Effectivement, tout ce que tu as mentionné est très pertinent. Il y a un autre impact auquel on pense moins, c'est la question de la qualité de l'air et aussi l'ambiance sonore. La qualité de l'air pourquoi ? Parce qu'en fait, s'il y a une coupure électrique, les data centers vont basculer sur des générateurs de secours au fioul, malgré les filtres qui sont polluants, puisque ce sont des énergies fossiles qui sont brûlées.

Aujourd'hui, les data centers testent une heure par mois en général ces installations, donc même hors coupure, on a quand même des dégagements d'air pollué.

Et l'inquiétude notamment en Ile-de-France, c'est que si on est sur des secteurs où on a une concentration de data centers, qu'on a une coupure électrique, ils vont tous se mettre sur leurs générateurs au fioul et on risque d'avoir des épisodes de pollution très localisées qui vont fragiliser la santé de certaines populations.

Ce qui, malgré le fait qu'aujourd'hui le réseau électrique français soit stable et assez fiable, le vieux qui évidemment prévoit des événements climatiques de plus en plus intenses, il y a quand même régulièrement des coupures notamment en Bretagne, mais il pourrait y avoir des coupures plus fréquentes dans toute la France parce qu'on a plus de tempêtes, plus d'événements extrêmes et du coup des data centers qui doivent basculer plus souvent, plus longtemps sur des générateurs qui sont polluants.

Alors aujourd'hui beaucoup disent "nous on va passer au HVO" donc c'est en fait des huiles végétales hydrogénées. Bon c'est pas encore fait, donc tant que c'est pas fait on va pas non plus, voilà, qui sont censées être moins polluants pour l'air.

Et juste le deuxième sujet, donc l'ambiance sonore, c'est qu'en fait les data centers qui sont dans des territoires plus calmes en quelque sorte à la campagne ou en périurbain, plus ils se développent, plus il y a de serveurs en fait, plus il y a un fond sonore, un ronronnement  important. C'est ce qui est arrivé à Marcoussis, les habitants à un moment se sont plains du bruit généré par le data center Data 4 qui est un gros campus qui en fait forcément à force de se développer, il y a une sorte d'effet de masse sonore qui n'est pas forcément perçue au début par personne d'ailleurs, et qui au fur et à mesure devient génante.

Et il y a évidemment des data centers qui répondent à cette demande en faisant des installations, des aménagements, mais disons que c'est un sujet, c'est un sujet qui peut être notamment dans un environnement assez calme, tout d'un coup d'avoir ces équipements là, ça vient complètement rompre une forme de sérénité on va dire.

### Résultats de l'étude prospective de l'ADEME

Richard : Tu es co-autrice d'une étude pour l'ADEME, prospectif d'évolution des consommations des centres de données en France de 2024 à 2060, on peut citer aussi les co-auteurs avec le groupe Manclic, Lorraine de Montenay, Benoit Petit, Éric Fourboul qui est paru en janvier 2026, qui dit en gros :

<div class="quote-highlight">

Si rien n'est fait, la consommation électrique des centres de données pourrait être multiplié par 3,7 en France d'ici 2035 et même fois 4,4 si on tient compte de leur consommation importée.

</div>

### Avant de parler des résultats de cette étude, quelles sont les évolutions du numérique qui influencent la consommation, en tout cas l'évolution de la consommation des centres de données ?

Alors, dans ce travail justement, ce qu'on a cherché à faire c'était évaluer à la fois côté technologique, c'est-à-dire évolution des technologies, ce qui allait impacter les organisations, donc par exemple le déploiement très important de liages génératifs, qui est quand même assez dimensionnant, comparé à ce qui est blockchain ou crypto-monnaie qui sont finalement assez durs à prévoir et qui ne passent pas tant exploser que ça.

On a regardé la question des usages, donc les usages de la société et des entreprises, on a toujours beaucoup d'entreprises qui sont dans un processus de virtualisation, c'est-à-dire de délégation de leur système informatique à des opérateurs de cloud. On a plus beaucoup de marge de manoeuvre sur la numérisation de la société parce qu'on est déjà très très équipé, et en France en tous les cas c'est assez dominant.

Mais on a regardé en fait tous ces paramètres pour se dire qu'est-ce qui peut faire évoluer ce qu'on a appelé les workloads, c'est-à-dire vraiment le nombre de process informatiques qui sont faits au sein des data centers, et ça nous a permis de faire un scénario qui est un scénario tendancielle.

Alors on a croisé évidemment le nombre de data centers, cette base de données qui est un peu notre matière réelle, c'est-à-dire notre matière terrain, qui donne des informations aussi sur l'état actuel des consommations électriques, etc.

Ensuite on a eu tout ce travail d'identification des tendances qui allaient forger le futur en terme d'usage et de technologie, et de business aussi. J'oubliais ce troisième paramètre important, c'est-à-dire derrière évidemment il y a un marché d'entreprise qui développe des logiciels, des services, des outils, etc., qui vient rencontrer ou qui vient pousser beaucoup quand même sur les usages, et ces paramètres-là on les a, comme je le disais, intégrés dans un scénario tendancielle, c'est-à-dire si on ne fait rien, si on n'a pas des politiques publiques qui viennent influer sur les trajectoires de consommation, d'usage, etc., influer sur les usages, ben effectivement on a une multiplication par 3,3 d'ici 2035 des consommations électriques, si on parle que des data centers qui sont en France, et on va peut-être en parler après, mais ensuite on a imaginé d'autres scénarios où on aurait des politiques publiques qui viennent agir sur ces usages-là de façon différente.

### Les questions vite faits

Richard : Cécile, je te propose une petite séquence inédite dans ce podcast, les questions vite faits.

- Richard : Envoyer des data center en orbite dans l'espace est une bonne idée, oui, non, tu ne te prononces pas ?
- Cécile : Si je me prononce, c'est une très mauvaise idée, au-delà de...
- Ok merci, c'est tout, merci.
- (rires)
- Ben oui, c'est les questions vite faits, et c'est les réponses surtout vite faits, si tu veux tu développeras par la suite, on finit la séquence.
- Ok
- Le data center est-il un artefact du capitalisme, oui ou non ?
- Oui.
- Est-il justifié qu'un data center soit labellisé projet national d'intérêt majeur ? Non / Non, mais vraiment non.
- Je ne serai pas aussi tranchée, peut-être, ça dépend.
- Le data center c'est de gauche ou de droite ?
- C'est un peu plus de droite quand même.

Ok, c'est déjà terminé pour la petite séquence vite fait, et les réponses vite fait de Cécile, merci d'avoir inauguré cette petite séquence Cécile. Je te propose qu'on revienne à quelque chose de plus sérieux.

### Tu veux peut-être développer les data center en orbite dans l'espace, rapidement ?

Rapidement, c'est qu'en fait, le secteur numérique vit sur des promesses perpétuelles, des promesses qui permettent d'imaginer des croissances économiques qui continuent et donc de valoriser les boîtes au niveau financier. Il y aura toujours une promesse qui finit très souvent par arriver dans l'espace, parce que c'est le dernier territoire qui reste et qui semble infini.

Donc déjà, il y a ce côté-là qui est poudre aux yeux, parce que techniquement, c'est hyper complexe d'envoyer des data center dans l'espace. Et par ailleurs, l'espace est déjà extrêmement occupé à différentes orbites pour les satellites divers et variés, avec beaucoup de déchets déjà dans l'espace.

Donc, est-ce qu'on a envie en gros de pourrir l'espace comme on est en train d'abîmer la planète ? Certains n'en y voient aucun problème, moi j'y vois un problème.

Et en plus, au-delà de juste, en quelque sorte, parler à un environnement autre, il y a la question de dégrader les infrastructures existantes et qui sont utiles, notamment pour le GPS, qui sont déjà dans l'espace.

### Dans l'étude prospective d'évolution des consommations des centres de données en France de 2024 à 2060, vous dites que vous n'évaluez pas les besoins en ressources ni d'électricité nécessaires à la fabrication des serveurs. Dans ce contexte, quels sont les principaux résultats que vous avez obtenus ?

En fait, la façon dont tu formules la question me permet, en quelque sorte, d'expliquer que, déjà, élaborer un modèle de prospective qui est venu requestionner des modèles, notamment le modèle Masané, des modèles précédents, qui étaient des modèles intéressants mais très théoriques, c'était déjà très complexe. Donc, effectivement, c'était assez difficile de rajouter la question des consommations électriques ou largement environnementales de la phase fabrication du matériel.

Ce qui ne veut pas dire que c'est une phase qui n'est pas importante, puisqu'elle est effectivement très très impactante, notamment sur des territoires d'extraction. En fait, tous les chiffres sont dans le rapport. Moi, je ne vais pas obligatoirement revenir précisément sur les chiffres, parce que souvent, on assomme des gens de chiffres et il n'en reste pas grand-chose.

Simplement, pour donner quelques ordres de grandeur. Aujourd'hui, en France, on consomme à peu près 415 TWh par an et les data centers, nous, on a évalué leur consommation aujourd'hui à 8 TWh. Ça donne un ordre de grandeur.

Et ce sont des ordres de grandeur qui peuvent très très fortement évoluer selon les scénarios. Donc, pour les scénarios les plus consommateurs, ça peut aller jusqu'à 33-35 TWh par an. Donc, on voit bien qu'on est sur un facteur très important de croissance.

Globalement, on n'est pas les seuls à lui dire qu'on est sur une tendance de croissance des usages numériques et des consommations d'électricité qui sont très très importants.

Alors, du coup, on est en contre-point total de questions de sobriété, sobriété énergétique, qui sont nécessaires pour respecter les accords de Paris et rester en dessous d'augmentation de température vivable sur cette planète.

Est-ce qu'on va continuer à empiler des études pour dire que ça ne va pas et qu'on va un peu dans le mur en termes de consommation d'usages numériques et du coût d'électricité ? Ou est-ce qu'on va en fait prendre en main le sujet et avoir des politiques publiques qui s'y adaptent ?

Ça, c'est moi qui dit ça, ce n'est pas l'étude, mais c'est simplement que nos conclusions, elles sont claires, elles sont convergentes avec d'autres acteurs.

Il y a un vrai sujet de démocratie technique, c'est-à-dire parlons de ce sujet-là beaucoup publiquement, parlons-le dans des instances de démocratie participative. Mettons-le sur l'agenda politique, parce qu'en fait, aujourd'hui, c'est considéré comme une fatalité. C'est presque une fatalité et c'est aussi le revers de la médaille de l'attractivité économique du pays.

Tout ce sujet-là reste dans une sorte de non-dit un peu généralisé, ou en tous les cas, de beaucoup d'études et beaucoup de données qui sortent, sans avoir vraiment de prise en compte côté politique et public. Moi, c'est déjà ça, je trouvais ça important de le dire.

Je vous donne un autre ordre de grandeur. Aujourd'hui, les projets Data Center qui sont à l'étude en Ile-de-France, ça représente une puissance électrique raccordée de 7 gigawatts. Pour info, un réacteur nucléaire, c'est à peu près 1 gigawatt cette puissance. Donc on imagine qu'aujourd'hui, il y aurait 7 réacteurs nucléaires en plus qui seraient dédiés à des projets en Ile-de-France. On sait qu'ils ne vont pas tous se faire, mais probablement au moins la moitié.

Du coup, on voit qu'en fait, tous les efforts qui ont été faits par les ménages, notamment pour consommer moins, tout ce qu'on fait comme travail sur la rénovation énergétique du bâti, par exemple, pour consommer moins, va être complètement contrecarré par des d'usages numériques qui sont en explosion totale.

### Le problème, de ce que je vois, c'est qu'on parle des data centers, mais on ne questionne jamais pourquoi faire. Pourquoi ça va être utilisé ? Est-ce que c'est pour faire des calculs pour l'intérêt général ou est-ce que c'est juste pour diffuser des vidéos ou générer maintenant des choses futiles avec l'IA ? Le problème, c'est qu'on ne questionne jamais ça et les territoires ou les élus vont mettre en avant l'attractivité du territoire sans vraiment dire ce que ça va faire, ce que le data center fera en sens sein. Quoi qu'il arrive, c'est une boîte noire et personne ne sait vraiment ce qu'il fait.

Tout à fait. Il y a toujours l'argument de la souveraineté numérique qui est mis en avant et honnêtement, c'est un vrai sujet. Moi, ce n'est pas du tout un sujet que je minimise et je trouve qu'il est très important, notamment au vu de la puissance des informations actuellement à l'œuvre sur Internet, par la puissance existante des big tech qui possèdent énormément de données, notamment des entreprises françaises et pas que des administrations.

Résultat, le sujet souveraineté est important mais il est souvent brandi sans vraiment se dire ce que ça implique derrière. Ça implique effectivement de savoir qui sont les propriétaires et les investisseurs derrière les projets data center ou derrière les data center existants, quelles sont les données qui sont traitées.

Effectivement, à partir du moment où c'est de la colocation, impossible de savoir puisqu'il y a le secret des affaires. Donc, c'est vrai que quand on accueille un data center sur un territoire, soit c'est un data center qui est pour une entreprise et là c'est très clair, soit c'est un data center, par exemple, la ville de Paris a développé un data center avec l'APHP, les Hôpitaux de Paris, un data center commun pour leurs usages. Voilà, on voit très bien ce qui se passe.

En revanche, sur le cloud et la colocation, aucune visibilité. Donc, on ne sait pas d'ailleurs, résultat, qui sont les utilisateurs, est-ce qu'ils sont français ou pas. On ne sait pas quelles sont les valeurs ajoutées, on va dire, par exemple, sociales, environnementales de tout ça.

C'est-à-dire qu'en fait, une partie des données, c'est forcément plutôt de la pub ou, effectivement, des vidéos ultra bien définies sur des choses diverses et variées. Et donc, en fait, on ne se pose pas, enfin, tu as complètement raison, c'est-à-dire, on ne se pose pas, on ne se pose jamais la question du pourquoi. On se dit juste : "Bon, si, quand même, ils vont payer des taxes, donc ça va être des nouvelles ressources pour les collectivités locales. On sait que ça ne crée pas beaucoup d'emploi, mais quand même, il faut réaliser que c'est une infrastructure stratégique pour nos usages, etc."

Donc, le sujet, il est assez complexe, mais pour moi, il n'est surtout pas assez discuté, pas assez profondément, ça ne va pas assez loin. Et c'est aussi ce qu'on a essayé de travailler dans le rapport, c'est-à-dire la question de la scénarisation, c'est aussi ça qu'elle vient mettre en avant, c'est se dire, quel est le numérique qu'on veut ? Quels sont les data centers qu'on veut ?

Bien sûr, ça semble être très difficile dans un contexte de très haute technicité de développer des clouds locaux, etc. On sait que la France a essayé, on sait qu'il y a la question du label, SecNumCloud, voilà, mais que tout ça est très difficile. Ça n'empêche pas de continuer à se poser la question et ça n'empêche pas, par exemple, pour des acteurs publics de développer des petits data centers, comme le font les universités d'ailleurs souvent, qui sont des data centers pour le coup vraiment souverains.

###  Dans l'étude, vous avez modélisé les tendances selon cinq scénarios, dont les quatre scénarios qui ont déjà été travaillés par l'ADEME, les scénarios de transition 2050 : génération frugale, coopération territoriale, technologie verte, pari-réparateur. Tu veux nous en dire quelques mots, sur ces différents scénarios ?

Oui, alors peut-être pour dire qu'en fait, il y a deux scénarios qui ont des impacts moins forts, c'est les scénarios, comme on pourrait s'y attendre, génération frugale et coopération territoriale, et deux autres qui sont plus consommateurs, qui sont pari-technologiques et technologie verte, pari-réparateur et technologie verte, pardon.

En gros, ce qu'il faut voir d'abord, c'est que ce travail de scénarisation, le secteur numérique, dialogue avec d'autres prospectives que mène l'ADEME sur le secteur de la construction, sur le secteur des énergies, etc., l'impact carbone du numérique pourrait entre guillemets être compensé par d'autres secteurs. Bon, ça, c'est le côté théorique.

Ensuite, nous, ce qu'on a essayé de faire et de modéliser, c'est des politiques publiques qui seraient différentes selon les scénarios.

Sur la génération frugale, par exemple, l'idée c'est qu'il y ait des outils d'interdiction, d'incitation et de régulation qui soient mis en place. Donc, on est sur le scénario qui est le plus incitatif, on va dire le plus fort, avec des réglementations sur les usages les plus toxiques du secteur numérique, tout ce qui est autour de la captation de l'attention sur les réseaux sociaux, tout ce qui est push sur l'utilisation de l'IA systématiquement et sans consentement, ce qu'on voit de plus en plus dans les moteurs de recherche maintenant, ce qui est tout autour de la publicité invasive.

<div class="quote-highlight">

L'idée, c'est aussi de réglementer ces débordements et puis de se poser beaucoup plus la question de la stratégie d'implantation des data centers, c'est-à-dire limiter leur croissance et surtout limiter leurs impacts ou ne pas les installer là où on a des territoires qui ont des très fortes vulnérabilités environnementales sur la question de l'eau, sur la question des îlots de chaleur urbains, sur la question de la qualité de l'air par exemple.

</div>

L'idée, c'est aussi dans ce scénario-là, par exemple, d'orienter les usages de l'IA plutôt vers des usages à haute valeur ajoutée sociale et environnementale, c'est-à-dire que oui, pour la recherche, mais pas forcément pour la pub, par exemple.

Moi, je suis urbaniste, donc je veux vous dire, dans ce scénario-là, on fait des villes qui sont beaucoup plus adaptées et sécures pour les enfants, ce qui fait que les enfants ont plus d'espace pour jouer dehors, pour se retrouver dehors et potentiellement peuvent passer moins de temps sur les écrans.

Donc la façon dont on va penser les villes et les lieux de lien social, les lieux où on peut se retrouver, faire des choses ensemble, ça diminue peut-être le temps aussi passé devant les écrans. Je ne vous fais pas tout le détail, mais en tous les cas, on a pensé à la façon dont tout ça allait se concrétiser aussi au niveau géographique, le lien avec les questions de souveraineté, parce qu'en fait, il faut aussi se dire que plus on va réduire nos usages numériquement, on va être en quelque sorte dépendant d'autres pays qui pourraient avoir des visées impérialistes.

### Les autres scénarios

Sur le scénario coopération territoriale, on est dans un scénario qui est plus sur les outils de régulation et d'incitation. On n'est pas vraiment dans ce de l'interdiction, mais toujours dans une visée assez frugale, on va dire.

Le troisième scénario qui est le scénario technologie verte, c'est l'idée d'avoir des politiques publiques mises avant tout sur l'innovation pour développer des énergies les moins carbonées possibles et que du coup, même s'il y a une croissance du numérique, c'est quand même compensé en quelque sorte par des énergies les moins carbonées possibles.

Et le pari-réparateur, on a suivi les scénarios de l'ADEME, c'est quand même celui qui est le plus technosolutionniste. Donc c'est l'idée que les technologies vont nous permettre de régler des problèmes climatiques et que finalement, il faut réguler de façon très légère le milieu technologique et le secteur numérique et surtout l'orienter, l'inciter vers l'innovation en lien avec des outils de lutte contre le changement climatique.

Donc en gros, vous pouvez trouver tout le détail et la façon dont ensuite on l'a modélisé dans le rapport.

### Sachant que le scénario technosolutionniste commence à être pas mal déconstruit, notamment par différentes publications, on ne va pas rentrer dans le détail. En parlant de technologie verte, etc., souvent ce qui est mis en avant, c'est la récupération de la chaleur, la chaleur fatale des serveurs pour chauffer des logements, des bureaux, des piscines. Comme les serveurs chauffent, ça peut être récupéré pour autre chose. Est-ce qu'il y a un vrai potentiel de récupération et d'atténuation justement que les datacenters puissent avoir un bénéfice pour les questions énergétiques et de chauffage notamment ?

Alors plusieurs éléments sur cette question. Premièrement, oui il y a un potentiel théorique puisque les serveurs rejettent de la chaleur, on pourrait la récupérer beaucoup plus. Aujourd'hui on a que des projets très anecdotiques qui existent, il y en a 3 ou 4 en France en réalité, qui fonctionnent.

Par exemple le datacenter d'Equinix à Saint-Denis qui chauffe les locaux de la piscine Olympique et quelques milliers de logements. Souvent on a des datacenters qui chauffent leurs propres bureaux de façon plus directe.

Le sujet aujourd'hui, c'est comment on raccorde les datacenters à des réseaux de chaleur urbain. Ce sont des réseaux existants ou en développement qui sont gérés par d'autres acteurs, les gestionnaires de leurs réseaux. Et le dialogue est parfois complexe, on n'est pas exactement sur les mêmes temps de retour sur investissement par exemple.

Les datacenters n'ont pas obligatoirement toujours envie de s'engager contractuellement pour livrer de la chaleur, parce que ce n'est pas leur business en fait. Donc tout ça et un potentiel très théorique mais qui dans la réalité se développe assez peu.

En revanche, c'est un peu un token comme on dit, c'est-à-dire une justification qui revient souvent : on va développer des datacenters mais on va récupérer la chaleur. Donc c'est comme si tout d'un coup on avait une solution magique qui annihile tous les impacts négatifs des datacenters.

C'est pour ça qu'il faut faire attention parce que d'une part souvent c'est qu'une petite proportion de la chaleur qui est réutilisée, c'est que quelques pourcents. C'est très rare qu'une grosse partie de cette chaleur soit réutilisée.

D'autre part, en été on n'a pas les mêmes besoins. Il peut toujours y avoir un peu d'eau chaude sanitaire mais on n'a pas besoin de chauffage. Et en plus, vu que les températures augmentent, ça va être de moins en moins le cas. Donc attention aussi à ne pas développer des systèmes technologiques complexes pour des usages qui vont vite changer.

Troisième chose, les réseaux de chaleur urbains, on les trouve dans les secteurs les plus urbanisés et les plus denses. Du coup, dès qu'on est dans des secteurs ruraux, périphériques, les récupérations de chaleur c'est quasi impossible.

D'une part c'est quasi impossible parce que c'est tellement grand, on n'a même pas besoin d'autant de chaleur probablement sur le secteur. Et d'autre part, les réseaux sont trop loin, il n'y a pas assez de densité, il n'y a personne.

Donc très compliqué de trouver même une industrie ou une entreprise qui serait intéressée par cette chaleur. Il faudrait qu'elle soit juste à côté et qu'elle ait un usage hyper spécifique comme par exemple faire sécher du bois ou un autre usage industriel. Et ça c'est un coup de chance.

Donc la question de la chaleur pour moi, elle est intéressante, il faut se la poser là où on a des réseaux de chaleur urbains oui, mais ce n'est pas une baguette magique et surtout ça ne vient pas du tout réduire les consommations électriques, ça vient juste utiliser une petite partie de ces consommations qui continueront à croître.

### Les hyperscalers et le statut de projet d'intérêt national majeur

Richard : revenons-en à l'article 15 du projet de loi simplification de la vie économique qui a été adopté le 17 juin 2025, qui autorise le gouvernement à octroyer au projet de construction de très gros data centers, les hyperscalers, on peut peut-être revenir sur la définition des hyperscalers, un statut de projet d'intérêt national majeur permettant notamment de s'éviter de lourdes démarches sur les impacts environnementaux, notamment en ayant des dérogations sur les espèces protégées par exemple.

### Est-ce que c'est trop tard pour réduire la prolifération de ces gros data centers ? Quelles sont les propositions pour réguler l'implantation de data centers ?

D'abord, pour hyperscalers, c'est effectivement des très gros data centers qui ont des puissances raccordées qui font 60, 80, 100, 120 MW. Aujourd'hui, il y a des annonces notamment de data centers dédiées à l'IA qui sont dans ces ordres de grandeur.

Et c'est beaucoup pour cette raison-là qu'on a intégré les data centers à la catégorie « projet d'intérêt national majeur » dans lequel on peut trouver d'autres types d'industries.

<div class="quote-highlight">

Pour moi, le sujet c'est qu'est-ce qu'on définit comme intérêt national majeur ? Il y a une vraie justification à, comme je disais tout à l'heure, développer des infrastructures souveraines. Mais quand on a des investisseurs qui sont émiratis, qui viennent faire un data center dédié à l'IA en Seine-et-Marne, moi je me pose la question de vraiment à quel point c'est souverain. Je ne suis pas très sûre que ce soit souverain.

</div>

Donc voilà, moi j'aimerais bien qu'il y ait un débat sérieux sur cette question d'intérêt national majeur et que ce soit discuté à différentes échelles, y compris localement. Et aujourd'hui, c'est pas vraiment vers quoi on s'oriente. On a des définitions d'intérêt national majeur qui sont plutôt déterminées par l'État et les préfectures, et c'est pas fait sur des critères qui sont très objectivement partagés à ce stade.

Donc pour moi le sujet est avant tout là. Ça aussi c'est une boîte noire. Les critères, c'est pas connu. C'est censé être défini dans des décrets d'application de la loi. Mais bon, on sait que les décrets d'application de la loi, ils peuvent mettre longtemps à sortir. Il n'est pas sorti encore.

Et juste pour finir là-dessus, moi j'ai beaucoup travaillé sur la question de la planification urbaine et énergétique, enfin territoriales on va dire, des data centers. Donc il y a quand même tout un sujet sur ne pas être que sur une logique de site clé en main opportuniste, mais se dire vraiment, selon les types de data centers, si on doit les accueillir ou est-ce qu'ils vont créer le moins de problèmes et de nuisances possibles tout en fonctionnant bien, c'est-à-dire en ayant un certain nombre d'aménités on va dire en termes d'électricité, de connectivité et tout ça qui les satisfassent.

Mais bon, aujourd'hui on n'est pas vraiment sur cette dimension-là, même si à Marseille et en Ile-de-France, avec le schéma directeur de la région, on a quelques mentions du sujet des data centers mais ça reste assez timide.

### Dans le programme de Désescalade Numérique dont on a parlé dans les précédents épisodes, on avait vu qu'au niveau local, on a de moins en moins de marge de manoeuvre pour lutter contre l'implantation des gros data centers. Est-ce que c'est peine perdue ? Quels seraient les leviers au niveau local ? C'est des mobilisations citoyennes ? Les élus, est-ce qu'ils peuvent faire quelque chose maintenant, les élus dans les territoires ?

Alors oui, il y a un premier sujet qui est la formation au sujet des data centers. Donc là, il y a beaucoup d'élus qui ne connaissent pas très bien le sujet et on les comprend, donc il faut qu'il y ait plus de formations.

Le CNFPT, c'est la fonction publique territoriale, pourrait développer plus de formations sur ces sujets à destination des élus. Aujourd'hui, il y a France Urbaine qui est aussi une association de grandes villes françaises qui commence à travailler sur le sujet mais on voit qu'en fait la formation, elle est lente mais il faut la poursuivre.

Et la formation, c'est les élus mais c'est aussi évidemment les citoyens et citoyennes, tout le monde, toutes les personnes concernées, pour pouvoir dialoguer de façon plus égalitaire avec ces acteurs-là.

Ensuite, les outils. Si on a un data center qui arrive et qui respecte le plan local d'urbanisme et qui dépose un permis, il n'y a pas de raison de le refuser en fait, on ne peut pas, c'est illégal.

Donc du coup, il y a la question de "est-ce qu'on va modifier le PLU pour éviter ces installations-là ?" Le problème, c'est qu'il n'y a pas de catégorie data center donc on risque aussi d'empêcher d'autres industries, d'autres activités économiques de s'installer. Donc du coup, il y a la question de se dire "est-ce qu'il faut une catégorie data center ou est-ce qu'en fait, ça n'arrivera pas ?"

Il y a une grosse question sur quelle économie les territoires peuvent développer de façon souveraine aussi pour eux. C'est-à-dire, et ne pas devenir des territoires servant. Souvent, ce sont des territoires qui étaient déjà et qui continuent à l'être autrement en fait.

Donc oui, il y a un sujet là-dessus. Oui, les associations se mobilisent souvent, France Nature Environnement par exemple, et c'est bien parce qu'en fait, ça fait aussi remonter les sujets. Récemment, il y a eu un débat de la commission nationale du débat public sur la question de l'électricité data center. Donc ça commence à monter plus.

Mais c'est vrai qu'il n'y a pas beaucoup d'outils aujourd'hui pour orienter, réguler, demander en fait des adaptations de projets au data center. Certains le font de bonne foi, sont dans des dialogues constructifs. D'autres sont dans l'opacité totale.

### Tu disais, le principal frein, c'est qu'on ne peut pas aujourd'hui catégoriser les data centers comme industrie. Est-ce que la consommation d'énergie pourrait pas être justement un critère, ou ce critère pourrait être attaqué en justice ?

Aujourd'hui, ce que moi je dis, c'est que dans un plan local d'urbanisme, vous avez des catégories qui sont plutôt liées aux résidentielles, à l'industrie, aux entrepôts, aux bureaux, aux équipements publics. Et que si par exemple vous vous dites, moi je veux pas avoir des entrepôts qui ont des emprises au sol enormes, sur des parcelles enormes, et donc je vais mettre un règlement qui dit ça.

Alors peut-être que ça marche, mais peut-être que la commune va perdre d'autres activités économiques qui ne pourraient pas respecter cette règle. Voilà, c'est juste ça. C'est-à-dire que ça pourrait leur porter préjudice autrement.

La question de la consommation électrique, en fait, c'est pas non plus vraiment quelque chose sur lequel on peut agir à ce stade aujourd'hui.

Les data centers, quand ils sont au-dessus d'une puissance de 40 mégawatts, vont demander à RTE une étude pour être accordée. RTE doit traiter, à ce stade, chaque client de façon égale et ne peut pas leur dire, non, en fait le territoire ne veut pas parce qu'en fait il veut garder son énergie pour une usine ou je sais pas quoi autre chose.

C'est là où il y a des difficultés aussi parfois entre les territoires et les acteurs énergétiques parce qu'en fait souvent RTE Enedis est au courant avant les territoires eux-mêmes de certains projets et ça génère pas mal de tensions.

Mais en tous les cas, on pourrait imaginer que par exemple dans le cas des les PCAET, plans climat, air énergie des territoires, les territoires puissent récupérer les données des projets en influant la question des consommations électriques qu'on peut prévoir et de dire, non, en fait, cet usage-là, ça peut être un data center, ça peut être une autre industrie électro-intensive, je ne peux pas l'accueillir parce qu'en fait je ne vais pas atteindre mes objectifs climatiques si j'ai cette entreprise sur mon territoire. On pourrait imaginer ça.

### Revenons au scénario génération frugale de votre étude, je dis votre parce que vous êtes plusieurs, on s'entend toujours. Quels sont les leviers pour réduire notre besoin en développement de data center ? Est-ce que tu vois d'autres leviers pour vraiment réduire notre dépendance à ces data center, à cette implantation accélérée ?

Déjà, les implantations se sont aussi accélérées parce qu'on a eu un affichage public, notamment dans les médias, de la volonté d'accueillir les data center donc déjà c'est assez dur de lutter contre un niveau présidentiel qui annonce la volonté d'attirer des data center. Si on voulait qu'il y en ait moins, on afficherait moins cette volonté de les attirer, première chose.

<div class="quote-highlight">

Ensuite, je remets sur la table la question du débat public, en ce moment il y a quand même beaucoup de réflexion sur l'addiction aux réseaux sociaux, l'interdiction des réseaux sociaux aux adolescents, la question de la santé mentale, notamment des jeunes femmes qui se font super bashé sur les réseaux, etc.

</div>

C'est-à-dire qu'on ne met pas vraiment ça en rapport, ces usages-là, ces usages on va dire en plus toxiques, avec la question de l'infrastructure, avec la question du changement d'usage, etc. Sans parler évidemment des impacts du matériel, etc.

Donc si on pouvait avoir une sorte de grand débat national beaucoup plus important sur cette question-là, déjà ça permettrait de sensibiliser. Parce qu'en fait on peut pas tout remettre comme d'habitude sur les individus en leur disant "rangez vos mails" et "allez moins sur les écrans". En fait c'est pas juste, on est tellement incité à ça, la société elle est tellement numérisée, y compris côté administration publique.

C'est-à-dire dans cette génération frugale, c'est pour ça qu'on parle de guichet humain. C'est aussi intéressant de revenir à 18 ans, on sait bien qu'on est tous et toutes hyper énervés quand on se retrouve face à des bots ou des réponses automatisées qui nous répondent pas à nos problèmes. Et qu'en fait on n'est pas en capacité d'être traités humainement. Et en fait ça c'est un vrai sujet.

### On arrive à la fin de notre échange, est-ce que tu veux nous partager les projets sur lesquels tu travailles ou tes futurs projets pour finir ?

Je suis actuellement basée à Buenos Aires en Argentine. Mes prochaines recherches vont plutôt se concentrer sur les hubs de data center qui sont en développement au Chili, dans la région de Santiago, au Brésil côté São Paulo, en Uruguay. Et regarder aussi ce qui se profile ici en Patagonie en Argentine, notamment avec les dernières annonces de OpenAI qui souhaitent installer des data centers dans cette région. Moi aujourd'hui j'ai tourné ma focale là où je suis, c'est-à-dire sur le sud de l'Amérique du Sud.
