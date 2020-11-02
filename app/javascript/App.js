import React, {useState, useEffect} from 'react';

import Alphanum from './components/Alphanum'
import Asso from './components/Asso'
import Annuaire from './components/Annuaire'
import Drop2 from './components/Drop2'

import 'antd/dist/antd.css'


import './App.css';

function App() {
  const tab = [
    {Baseline: "",
Email: "s.marthelot@19-hz.com",
Fondateur1: "Stephan Marthelot",
Fondateur2: "Sophea Sok",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "19Hz",
Nombredecollaborateurs: "",
Pitch: "Nous proposons des solutions novatrices pour accompagner les entreprises à intégrer la dimension design au coeur de leur innovation.",
Secteur: "Education",
Siteweb: "",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "",
Email: "edouard@allum.ee",
Fondateur1: "Edouard Ferrari",
Fondateur2: "Patrick Hennion",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Allumee",
Nombredecollaborateurs: "",
Pitch: "Chez Allumee nous voulons émerveiller le public en créant des spectacles innovants et créatifs en s’appuyant sur les nouvelles technologies et notamment les drones. Nous proposons des solutions faciles à utiliser pour nos clients, à fin d'accélérer l'émergence des spectacles de drones en France et en Europe. Chaque drone est un point lumineux et va se positionner suivant un scénario. Cet ensemble de drones permet d'afficher des formes simples, tel que des textes ou des logos, des formes complexes (modèle 3D) ou des formes animées.",
Secteur: "",
Siteweb: "http://www.allum.ee/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Nous veillons sur ceux qui veillent sur vous",
Email: "contact@aum.bio",
Fondateur1: "Marc Riedel",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Aum Biosync",
Nombredecollaborateurs: "",
Pitch: "Etre performant 24h/7j n’est pas à la portée de tous. AUM Biosync se base sur une connaissance fine des rythmes biologiques pour construire une horlogerie numérique personnalisée des moments de performances optimales ou de vulnérabilités des professionnels « always-on », et leur permet d’exprimer tout leur potentiel, au bon moment.",
Secteur: "Santé",
Siteweb: "https://aum.bio/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Les places en crèches, maintenant !",
  Email: "nicolas@babily.fr",
  Fondateur1: "Nicolas Lorut",
  Fondateur2: "",
  Fondateur3: "",
  Fondateur4: "",
  Logo: "",
  Nom: "Babily",
  Nombredecollaborateurs: "",
  Pitch: "Babily offre une accessibilité inédite aux disponibilités en crèches en temps réel, via sa web app, et par tout canal pratique.",
  Secteur: "E-commerce",
  Siteweb: "www.babily.fr",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Découvrez des stratégies digitales d'experts Sales, Marketing & Social Media chaque semaine",
  Email: "",
  Fondateur1: "Paul de Castelbajac",
  Fondateur2: "Victor Linder",
  Fondateur3: "",
  Fondateur4: "",
  Logo: "",
  Nom: "Behind The Skills",
  Nombredecollaborateurs: "",
  Pitch: "Behind the Skills te fait découvrir chaque semaine des “hacks”, trucs et astuces d’experts Sales et Marketing pour que tu puisses monter en compétence, efficacement. On va partir de problématiques d’experts pour te livrer un peu de leur recette magique afin que tu puisses exploiter leur solutions et générer un réel impact sur ton business avec des actions concrètes.",
  Secteur: "Media",
  Siteweb: "https://www.linkedin.com/company/behind-the-skills/",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "La solution pour les personnes à mobilité réduite",
Email: "julien@benur.net",
Fondateur1: "Joseph Mignozzi",
Fondateur2: "Steven Denton",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Benur",
Nombreeollaborateurs: "",
Pitch: "Benur est une nouvelle solution de mobilité pour toutes les personnes à mobilité réduite. C’est un nouveau concept de tricycle à assistance électrique, permettant à tous de gagner en autonomie, en liberté, en mobilité.",
Secteur: "Transport & Mobilité",
Siteweb: "https://www.projet-benur.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Votre logiciel de soins pharmaceutiques",
  Email: "contact@bimedoc.com",
  Fondateur1: "Pierre Renaudin",
  Fondateur2: "Thomas Dauvet",
  Fondateur3: "Thomas Emery",
  Fondateur4: "Ron Danenberg",
  Logo: "",
  Nom: "Bimedoc",
  Nombredecollaborateurs: "",
  Pitch: "Bimedoc est une application web d’aide à la réalisation des activités d’accompagnement pharmaceutique et d’optimisation thérapeutique en pharmacie d’officine et en établissement de santé incluant un algorithme d’aide à la décision.",
  Secteur: "Santé",
  Siteweb: "https://www.bimedoc.com/",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "La conteuse avec la voix des proches",
  Email: "hello@mybookinou.com",
  Fondateur1: "Vincent Gunther",
  Fondateur2: "Guillaume Chanteloube",
  Fondateur3: "",
  Fondateur4: "",
  Logo: "",
  Nom: "Bookinou",
  Nombredecollaborateurs: "",
  Pitch: "La conteuse Bookinou aide les parents à donner le goût de la lecture aux enfants en remplaçant les écrans par des livres ! Grâce à Bookinou, les enfants peuvent écouter leurs histoires préférées, enregistrées par ses proches.",
  Secteur: "E-commerce",
  Siteweb: "www.mybookinou.com",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "iYu Care for you",
  Email: "contact@capsix-robotics.com",
  Fondateur1: "Carole Eyssautier",
  Fondateur2: "François Eyssautier",
  Fondateur3: "Stéphane Rollet",
  Fondateur4: "",
  Logo: "",
  Nom: "Capsix Robotics",
  Nombredecollaborateurs: "",
  Pitch:"Capsix est une startup Lyonnaise qui a développé iYU Pro®, une solution de détente musculaire permettant au collaborateur d’accéder à un état de lâcher-prise corporel et mental. Toujours disponible, autonome, personnalisée et facilement accessible, iYU Pro® est basée sur des protocoles définis par des professionnels pour une pause régénérante et bienfaisante.",
  Secteur: "Santé",
  Siteweb: "https://capsix-robotics.com/",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
}, {

  Baseline: "Booster de bonheur",
  Email: "hello@carot.fr",
  Fondateur1: "Colini Casini",
  Fondateur2: "Pierre-Yves Coeurdevey",
  Fondateur3: "",
  Fondateur4: "",
  Logo: "",
  Nom: "Carot",
  Nombredecollaborateurs: "",
  Pitch: "Nous concevons des repas frais pour sportifs que nous distribuons dans des Corners connectés 100% autonomes implantés à l’interieur des structures sportives ou des entreprises. Nous livrons également nos repas sur les spot outdoor où en entreprise après une séance de sport collective. Enfin, nous proposons un service traiteur innovant.",
  Secteur: "Alimentation",
  Siteweb: "https://carot.fr/",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "La première plateforme qui te permet de changer de box chaque mois. ",
  Email: "contact@chooseyourbox.co",
  Fondateur1: "Pauline Lupion",
  Fondateur2: "Michaël Abramczuk",
  Fondateur3: "",
  Fondateur4: "",
  Logo: "",
  Nom: "Choose Your Box",
  Nombredecollaborateurs: "",
  Pitch: "Choose Your Box est la première plateforme d’abonnement qui te permet de changer de box d’un mois à l’autre en 1 clic. Chaque mois, tu as jusqu’au 27 inclus pour faire ton choix parmi le catalogue qui recense déjà plus d’une cinquantaine de box dans de nombreuses catégories : beauté, vin, mode, lifestyle, sport ou épicerie, il y en a pour tous les goûts.",
  Secteur: "E-commerce",
  Siteweb: "www.chooseyourbox.co",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Ultimate Stress Measurement",
  Email: "contact@codesna.com",
  Fondateur1: "Marc Latouche",
  Fondateur2: "Vasile Zoicas",
  Fondateur3: "François Le Faucheur",
  Fondateur4: "",
  Logo: "",
  Nom: "Codesna",
  Nombredecollaborateurs: "",
  Pitch: "Codesna a développé des solutions innovantes et brevetées permettant d’évaluer de manière scientifique une présence de stress chronique. L’objectif est d’aider les personnes à évaluer et gérer un stress chronique dans une approche de prévention et de réduire les risques et les coûts des pathologies qui sont associées.",
  Secteur: "Santé",
  Siteweb: "https://www.codesna.com/fr/",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
}, {
  Baseline: "Editeur logiciel et cabinet de conseil spécialisé dans le pilotage de l'activité viticole",
Email: "contact@daliasoft.com",
Fondateur1: "Sabrina Sallouh",
Fondateur2: "Chams ",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Daliasoft",
Nombredecollaborateurs: "",
Pitch: "Vignerons, négociants et coopératives, exploitez avec simplicité toute la richesse de vos données. Une solution de Business Intelligence clé en main qui vous donne de la visibilité sur le déroulement de votre activité et vous permet d’améliorer votre prise de décision",
Secteur: "Alimentation",
Siteweb: "http://www.daliasoft.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Animez les données de vos restaurants",
Email: "contact@dvore.fr",
Fondateur1: "Richard Barone",
Fondateur2: "Colin Saboul",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Dvore",
Nombredecollaborateurs: "",
Pitch: "Solution Saas de pilotage décisionnel pour améliorer la rentabilité des groupes de restaurants. Automatisation de tableaux de reporting intelligents en temps réel ; algorithme de prévision des ventes ; animation réseaux par challenges des points de vente.",
Secteur: "Alimentation",
Siteweb: "https://www.dvore.fr/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "",
Email: "contact@energiency.com",
Fondateur1: "Arnaud Legrand",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Energiency",
Nombredecollaborateurs: "",
Pitch: "Energiency automatise l'analyse énergétique grâce à une technologie basée sur l'intelligence artificielle et dédiée aux industries.",
Secteur: "Transition écologique",
Siteweb: "https://www.energiency.com/fr/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "",
Email: "info@enertiv.com",
Fondateur1: "Connell McGill",
Fondateur2: "Pavel Khodorkovskiy",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Enertiv",
Nombredecollaborateurs: "",
Pitch: "Nous transformons les données du bâtiment en actif pour les portefeuilles immobiliers commerciaux",
Secteur: "Transformation digitale",
Siteweb: "http://www.enertiv.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "L'outil de financement pour les professionnels de l'automobile",
  Email: "bonjour@finnocar.com",
  Fondateur1: "Yassine Tazi",
  Fondateur2: "",
  Fondateur3: "",
  Fondateur4: "",
  Logo: "",
  Nom: "Finnocar",
  Nombredecollaborateurs: "",
  Pitch: "FinnoCar transforme la relation client des points de vente et sites web automobiles en offrant à leurs clients une expérience de financement digitale et instantanée. Pour la première fois, les acheteurs peuvent effectuer leur demande de financement et toutes les démarches nécessaires en ligne. FinnoCar permet aux clients des vendeurs automobiles d’accéder instantanément aux offres de plusieurs banques pour trouver les meilleures offres du marché.",
  Secteur: "Transformation digitale",
  Siteweb: "https://www.finnocar.com/",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "",
  Email: "production@franceplay.net",
  Fondateur1: "Marc Bechet",
  Fondateur2: "",
  Fondateur3: "",
  Fondateur4: "",
  Logo: "",
  Nom: "FrancePlay",
  Nombredecollaborateurs: "",
  Pitch: "FrancePlay.Tv est la plateforme TV du tourisme 100% vidéo, 100% collaborative et 100 % France !",
  Secteur: "Media",
  Siteweb: "https://franceplay.tv/",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Gérez l'hétérogénéité des compétences de vos apprenants en cours de français langue étrangère.",
Email: "hello@frello.fr",
Fondateur1: "Théo Dumarski",
Fondateur2: "Louis Rapilly",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Frello",
Nombredecollaborateurs: "",
Pitch: "Frello veut permettre aux professeurs de français qui donnent des cours à des étrangers de s’adapter aux difficultés, au niveau de départ et à la façon d’apprendre de chaque apprenant.",
Secteur: "Education",
Siteweb: "https://www.frello.fr/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Ton orientation pas comme les autres",
Email: "charly@hello-charly.com",
Fondateur1: "Fatma Chouaieb",
Fondateur2: "Laurent Deambrogio",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Hello Charly",
Nombredecollaborateurs: "",
Pitch: "Hello Charly conçoit et développe des chatbots vocationnels 100% digitaux pour que chacun puisse trouver sa voie de façon inspirante et personnalisée.",
Secteur: "Education",
Siteweb: "https://hello-charly.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Nous sommes convaincus que votre projet mérite de voir le jour",
Email: "",
Fondateur1: "Boris Laval",
Fondateur2: "Cassandra Martins-Almeida",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "ID Value",
Nombredecollaborateurs: "",
Pitch: "Plateforme de mise en relation entre porteur de projet et public cible",
Secteur: "Transformation digitale",
Siteweb: "",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Decentralized cloud computing",
Email: "contact@iex.ec",
Fondateur1: "Gilles Fedak",
Fondateur2: "Haiwu He",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "iExec",
Nombredecollaborateurs: "",
Pitch: "iExec crée un réseau de fournisseurs qui forment une infrastructure Cloud virtuel. Vous pouvez accéder à cette infrastructure décentralisée soit en exécutant vos applications, soit en louant vos ressources et donc en faisant partie des fournisseurs.",
Secteur: "Transformation digitale",
Siteweb: "https://iex.ec/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Learn French with the news",
Email: "contact@ilini.com",
Fondateur1: "Benjamin Rey",
Fondateur2: "Adeline Salomé",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Ilini",
Nombredecollaborateurs: "",
Pitch: "Ilini permet aux étrangers d’apprendre le français de manière naturelle en regardant des vidéos interactives tirées des médias.",
Secteur: "Education",
Siteweb: "www.ilini.com",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "",
Email: "matt@inokufu.com",
Fondateur1: "Matthieu Sonnati",
Fondateur2: "Benjamin Parmentier",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Inokufu",
Nombredecollaborateurs: "4",
Pitch: "Inokufu est une entreprise Edtech spécialisée dans le traitement des données dans le secteur de la formation professionnelle et de l'enseignement supérieur. Nous fournissons à nos clients, organismes de formations ou éditeurs EdTech, des informations en temps réel sur les évolutions de leur marché et des services de recommendation de contenu éducatif de qualité.",
Secteur: "Education",
Siteweb: "https://www.inokufu.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Navigations d'exception",
Email: "contact@ishua.fr",
Fondateur1: "Julien Boisson",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Ishua",
Nombredecollaborateurs: "",
Pitch: "Ishua, c’est un “Sailing club” qui propose des croisières en voiliers et de la formation à la navigation, sur des voiliers modernes et confortables, vers des destinations de rêve. Et qui consacre 30% de son activité à des projets écologiques et vertueux.",
Secteur: "Transport & Mobilité",
Siteweb: "www.ishua.eu",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Solutions RH pour une affectation géo optimisée",
Email: "",
Fondateur1: "Alban Castaing",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Jeekan",
Nombredecollaborateurs: "",
Pitch: "Jeekan est une startup de l'économie sociale et solidaire. Nous aidons les DRH à réduire, voire éviter,  les déplacements liés au travail de leurs collaborateurs grâce à notre plateforme d'analyse et d'optimisation des trajets. Notre mission est de faciliter le quotidien des collaborateurs en réduisant les mobilités liées au travail.",
Secteur: "RH",
Siteweb: "https://www.jeekan.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "",
Email: "hello@jenji.io",
Fondateur1: "Pierre Queinnec",
Fondateur2: "Nicolas André",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Jenji",
Nombredecollaborateurs: "",
Pitch: "Jenji est la première solution pan-européenne qui automatise la gestion des dépenses professionnelles grâce à l'Intelligence Artificielle. Elle permet aux entreprises de gérer en temps réel les frais professionnels de leurs collaborateurs.",
Secteur: "Transformation digitale",
Siteweb: "https://jenji.io/fr/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "LAfricaMobile est leader dans la fourniture de solutions web et mobiles innovantes en Afrique.",
  Email: "contact@lafricamobile.com",
  Fondateur1: "Malick Diouf",
  Fondateur2: "",
  Fondateur3: "",
  Fondateur4: "",
  Logo: "",
  Nom: "LAfricaMobile",
  Nombredecollaborateurs: "",
  Pitch: "Fort de son expertise en développement et en connectique opérateur, LAfricaMobile accompagne ses clients, particulièrement les média et les éditeurs, à proposer ou monétiser leurs services mobiles en Afrique et à destination de la diaspora africaine dans le monde entier.",
  Secteur: "Transformation digitale",
  Siteweb: "https://lafricamobile.com/",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "La bonne occasion d'acheter sa voiture entre particuliers",
Email: "vincent@lepiston.fr",
Fondateur1: "Vincent Dreyfus",
Fondateur2: "Constantin Eliard",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Le Piston",
Nombredecollaborateurs: "",
Pitch: "Notre proposition de valeur est de gérer, sécuriser et accélérer la vente de voitures d’occasion entre particuliers et pour le compte d’entreprises, le tout au meilleur prix et en offrant une expérience client irréprochable.",
Secteur: "Transport & Mobilité",
Siteweb: "https://lepiston.fr/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "La prévention santé devient connectée",
Email: "contact@life-xtend.fr",
Fondateur1: "Hervé Touré",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Lifextend",
Nombredecollaborateurs: "",
Pitch: "Lifextend est une solution de prévention santé visant à «optimiser sa santé et son bien-être» grâce à une analyse à 360 degrés des risques santé selon différents thèmes: environnement, stress, alimentation, ascendance.",
Secteur: "Santé",
Siteweb: "https://life-xtend.fr/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Des services e-santé innovants pour vos usagers et vos collaborateurs",
Email: "contact@lilismart.com",
Fondateur1: "Vincent Thery",
Fondateur2: "Aymeric Garnier",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Lili Smart",
Nombredecollaborateurs: "",
Pitch: "Editeur de logiciels pour la santé, Lili smart conçoit des services innovants pour la prévention, l’assistance et l’accompagnement autour du malade et du senior.",
Secteur: "Santé",
Siteweb: "https://www.lilismart.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Choisissez une approche non médicamenteuse et ludique !",
Email: "hello@lumeen.com",
Fondateur1: "Corentin Metgy",
Fondateur2: "Robin Metgy",
Fondateur3: "Frédéric Cambon",
Fondateur4: "",
Logo: "",
Nom: "Lumeen",
Nombredecollaborateurs: "",
Pitch: "Grâce à une solution de réalité virtuelle adaptée, Lumeen permet aux soignants du grand âge d’organiser des séances de thérapies non médicamenteuses ludiques et motivantes.",
Secteur: "Santé",
Siteweb: "https://lumeen.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "",
Email: "hugo.b@lx-group.com.au",
Fondateur1: "Hugo Blanc",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "LX Group",
Nombredecollaborateurs: "",
Pitch: "At LX, we partner with ambitious leaders to create intelligent product ecosystems for a better world. Every day, an accelerating rate of technology change, re-writes everyone’s playbook. In the race to lead, it’s be first or be disrupted. Inventing the future is the best way to be ready for it. Our award winning team and unique IOT Cores platform will help you make transformational ideas real – at scale.",
Secteur: "IoT",
Siteweb: "https://lx-group.com.au/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "L'innovation pour prévenir les risques de troubles musculo-squelettiques",
Email: "contact@matvisio.com",
Fondateur1: "William Houx-Plantier",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Matvisio",
Nombredecollaborateurs: "",
Pitch: "La solution MATVISIO® prévient et réduit les Troubles Musculo-Squelettiques en observant, identifiant et visualisant en temps réel les « postures professionnelles à risques ». Une fois le diagnostic posé, des solutions pragmatiques et opérationnelles sont proposées.",
Secteur: "Santé",
Siteweb: "http://www.matvisio.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "La visite virtuelle comme nouvel outil de travail",
Email: "contact@meilleurevisite.com",
Fondateur1: "Guillaume de Sousa",
Fondateur2: "Thomas Servan",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Meilleure Visite",
Nombredecollaborateurs: "",
Pitch: "Nous permettons aux professionnels de l’immobilier de faire de la photo à 360° le nouveau média de l’immobilier et un véritable outil métier, pas un simple outil de communication.",
Secteur: "Immobilier",
Siteweb: "https://decouvrir.meilleurevisite.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "",
Email: "info@miuros.com",
Fondateur1: "Benoit Gagnon",
Fondateur2: "Ricardo de Aldama",
Fondateur3: "Daniele Alfarone",
Fondateur4: "",
Logo: "",
Nom: "Miuros",
Nombredecollaborateurs: "",
Pitch: "Miuros enables customer service leaders to optimize their operations with the power of AI. Assist your agents so they can increase their efficiency and first reply times. New actionable Insights will help you deliver better customer service so you can improve what actually matters to drive down churn: the overall customer Experience.",
Secteur: "Transformation digitale",
Siteweb: "https://miuros.com/",
},
{
  Baseline: "Le print lyonnais mettant en lumière les créateurs et artistes français !",
Email: "contactmoodmagazine.lyon@gmail.com",
Fondateur1: "Andréa Canovas ",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Mood Magazine",
Nombredecollaborateurs: "",
Pitch: "Mood est un nouveau magazine lyonnais, favorisant la promotion des créateurs et artistes français.  Il est trimestriel et on peut le choper un peu partout dans la ville, dans des concepts store, des ateliers d’artistes, cafés, ou encore lieux émergents. ",
Secteur: "Media",
Siteweb: "https://www.moodmagazine.fr/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Vos embouts d'écouteurs imprimés en 3D",
Email: "contact@myfit-solutions.com",
Fondateur1: "Xavier Deshayes",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "MyFit Solutions",
Nombredecollaborateurs: "",
Pitch: "MyFit Solutions est une startup lyonnaise fondée en 2018 spécialisée dans le développement et la commercialisation d’embouts sur-mesure pour écouteurs de musique. Une oreille, comme une empreinte digitale, est unique. Aussi, chaque embout proposé par MyFit Solutions est défini à partir de 15 points de mesure pris sur chaque oreille. Les embouts sur-mesure, en épousant ainsi parfaitement la forme des oreilles, offrent un maintien absolu.",
Secteur: "E-commerce",
Siteweb: "https://myfit-solutions.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Des données intelligentes au service de vos objectifs.",
Email: "contact@namr.com",
Fondateur1: "Grégory Labrousse",
Fondateur2: "Emmanuel Bacry",
Fondateur3: "Pierre Lescure",
Fondateur4: "Lila Tretikov",
Logo: "",
Nom: "nam.R",
Nombredecollaborateurs: "",
Pitch: "Nous produisons des données actionnables pour simplifier l’utilisation massive des données externes dans les opérations courantes des entreprises.",
Secteur: "Transformation digitale",
Siteweb: "https://namr.com/fr/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Play the city",
Email: "hello@neopolisgame.com",
Fondateur1: "Ben Kaltenbaek",
Fondateur2: "Lucas Odion",
Fondateur3: "Roland Lamidieu",
Fondateur4: "",
Logo: "",
Nom: "Neopolis",
Nombredecollaborateurs: "",
Pitch: "Neopolis développe un reality game mobile où les joueurs achètent les bâtiments du monde réel en explorant leur ville. Une rencontre entre Monopoly et Pokemon Go. Notre mission est de transformer le monde en un plateau de jeu géant.",
Secteur: "Gaming",
Siteweb: "www.neopolisgame.com",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Contextualising Health",
Email: "contact@newclin.com",
Fondateur1: "Pascal Deschaseaux",
Fondateur2: "Dominique Notelet",
Fondateur3: "Bruno Virieux",
Fondateur4: "",
Logo: "",
Nom: "Newclin",
Nombredecollaborateurs: "",
Pitch: "NewClin transforme l’accès aux services de santé via des solutions innovantes basées sur le langage, les technologies et les données. C’est notamment à l’appui des compétences en intelligence artificielle du Laboratoire Hubert Curien (UJM, CNRS) et le soutien de PULSALYS qu’est développée la solution GoClin®.",
Secteur: "Santé",
Siteweb: "https://www.newclin.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "",
Email: "",
Fondateur1: "Oscar Tellez",
Fondateur2: "Geovanny Osorio",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "NOMAd",
Nombredecollaborateurs: "",
Pitch: "Nomad, c'est une plateforme web destiné à l'écosystème de personnes à mobilité réduite qui permet à la fois :↵- aux Établissements Sociaux et Medico-Sociaux de réduire le coût transport et améliorer la qualité des services aux personnes↵- aux transporteurs de mieux gérer et optimiser la flotte↵- aux personnes à mobilité réduite de ne pas passer trop de temps dans le transport ou d'attendre longtemps l'arrivée du véhicule.",
Secteur: "Transport & Mobilité",
Siteweb: "https://nomad.disp-lab.fr/web/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Marque de soins pour hommes noirs et métis",
Email: "contact@oju-wa.com",
Fondateur1: "Mamadou Cissé",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Oju Wa",
Nombredecollaborateurs: "",
Pitch: "Marque Française de cosmétique pour hommes à la peau noire et métissée, Oju-Wa allie traditions de soin dans un univers contemporain et moderne, fortement influencé par les cultures urbaines.",
Secteur: "E-commerce",
Siteweb: "https://www.oju-wa.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Le digital pour une mobilité inclusive",
Email: "jeremy@okeenea.com",
Fondateur1: "Sylvain Denonin",
Fondateur2: "Damien Brosseau",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Okeenea Digital",
Nombredecollaborateurs: "",
Pitch: "Spinoff du groupe leader en accessibilité éponyme, Okeenea Digital est un fournisseur de services à la mobilité via notamment l’édition d’applications. Okeenea Digital propose des solutions digitales innovantes pour une mobilité inclusive pour toutes les personnes en situation de handicap. C‘est son approche centrée sur l‘usage, la capitalisation sur les 25 ans d‘expérience du groupe et sa capacité à imaginer des dispositifs fiables et scalables qui font la différence.",
Secteur: "Transport & Mobilité",
Siteweb: "http://www.okeenea-digital.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Ensemble, évitons le gaspillage",
Email: "",
Fondateur1: "Jean Moreau",
Fondateur2: "Baptiste Corval",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Phenix",
Nombredecollaborateurs: "",
Pitch: "Un tiers de ce que l’on produit est produit… pour rien. Mais ce n’est pas une fatalité : chez Phenix, nous sommes convaincus que tout déchet peut trouver une seconde vie, pour peu qu’on ait un brin d’imagination.",
Secteur: "Alimentation",
Siteweb: "https://wearephenix.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Réussisez le concours de vos rêves",
Email: "contact@prepacademy.fr",
Fondateur1: "Xavier Deshayes",
Fondateur2: "Clément Vignal",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Prepacademy",
Nombredecollaborateurs: "",
Pitch: "PrepAcademy est un organisme de formation reconnu par l'Etat et spécialisé dans la formation et la préparation aux concours à distance. Nous préparons à 15 formations dont trois en partenariat avec Dunod (éditeur du groupe Hachette). Depuis leur espace, nos élèves bénéficient de tout le contenu pour réviser et d'un accompagnement personnalisé à distance (tutorat, programme de révisions...). En 2 ans, nous avons accompagné plus de 1000 élèves.",
Secteur: "Education",
Siteweb: "www.prepacademy.fr",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Tous des coureurs",
Email: "",
Fondateur1: "Cécile Chaymol",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Runited",
Nombredecollaborateurs: "",
Pitch: "RUNited est la premier réseau social dédié à tous les runners. Chez RUNited on pense que chaque coureur est riche de son expérience et qu'il peut être un ressource pour tous les autres : motivation, conseils, générateur d'envie, etc. C'est pourquoi, pour chaque contribution, il gagne des points : des RUNits. Ces points lui permettent d'accéder à des offres proposées par nos partenaires. Ce sont des produits textile, nutrition, services de coaching, abonnements,... Tout le monde est gagnant !",
Secteur: "Sport",
Siteweb: "",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Le service français d'envoi de (super) gros fichiers.",
Email: "",
Fondateur1: "Romaric Gouedard-Comte",
Fondateur2: "Rémi Gouedard-Comte",
Fondateur3: "Olivier Gouedard-Comte",
Fondateur4: "",
Logo: "",
Nom: "Smash",
Nombredecollaborateurs: "",
Pitch: "Smash, service de transfert de fichiers innovant pour les entreprises de toute taille qui apporte : gain de temps pour les collaborateurs, sécurité/confidentialité pour les DSI et un nouveau canal de communication pour les Directions Générales et Directions de la Communication.",
Secteur: "Transformation digitale",
Siteweb: "https://fromsmash.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Développer l’engagement de vos collaborateurs",
  Email: "contact@speakup-pulsesurvey.com",
  Fondateur1: "Florian Cordel",
  Fondateur2: "Valentin Kiselak",
  Fondateur3: "",
  Fondateur4: "",
  Logo: "",
  Nom: "SpeakUP by HPI",
  Nombredecollaborateurs: "",
  Pitch: "SpeakUP c’est le premier outil RH dédié à la conduite de l’engagement et à la satisfaction de vos collaborateurs. Véritable baromètre social, l’application vous accompagne au quotidien dans vos démarches Qualité de Vie au Travail (QVT).",
  Secteur: "RH",
  Siteweb: "https://speakup-pulsesurvey.com/",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "ERP de l'industrie 4.0",
Email: "service.clients@synktory.fr",
Fondateur1: "Michel Grosjean",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Synktory",
Nombredecollaborateurs: "",
Pitch: "La société de service informatique externalisée Synktory est une filiale de la société SD Services. Synktory est spécialisé dans le conseil organisationnel, technique et l’intégration de briques logicielles dans le domaine de l'industrie. Synktory a pour cible les PMI et ETI industrielles. Parmi ses clients, notre société compte des entreprises telles que SD Services, son client originel dans le domaine de l'aménagement de véhicules utilitaires sur mesure. SAIRC dans la fabrication et l'affûtage d’outils coupants, MECAL dans la production de métaux, Interscience dans la fabrication de produits d'analyses microbiologiques. Nous assurons aussi un service d'hébergement tel l'ERP de la société Yves Ollivier spécialisé dans l'aménagement de l'espace de travail, ou encore le décisionnel de la société AMETIS qui opère dans l’impression.",
Secteur: "Transformation digitale",
Siteweb: "https://synktory.com/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Le media culturel et événementiel, 100% vidéo, 100% authentique.",
Email: "contact@teazit.fr",
Fondateur1: "Emilien Colombain",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Teazit",
Nombredecollaborateurs: "",
Pitch: "Permettre aux organisateurs d’événements de produire et de diffuser en quelques clics un contenu live pour gagner en trafic et en visibilité.",
Secteur: "Media",
Siteweb: "www.teazit.fr",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "",
Email: "",
Fondateur1: "Martin Hennessey",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "The Writer",
Nombredecollaborateurs: "",
Pitch: "",
Secteur: "Transformation digitale",
Siteweb: "",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "La donnée au service de l’investissement immobilier.",
Email: "hello@trackstone.io",
Fondateur1: "Seb de Lavison",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Trackstone",
Nombredecollaborateurs: "",
Pitch: "Le premier outil d’intelligence immobilière et de « stock picking » pour les professionnels du secteur.",
Secteur: "Immobilier",
Siteweb: "https://trackstone.io/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
Baseline: "Agence de design sonore à Lyon",
Email: "contact@tshoko.fr",
Fondateur1: "Hugo Frering",
Fondateur2: "Maxime Meregnani",
Fondateur3: "Raphaël Jarsaillon",
Fondateur4: "",
Logo: "",
Nom: "Tshoko",
Nombredecollaborateurs: "",
Pitch: "L’ambiance d’un établissement doit être maitrisée afin de mettre sa clientèle et ses collaborateurs dans les meilleures dispositions. La musique fait partie de cette équation, Tshoko vous aide à la résoudre simplement.",
Secteur: "Musique",
Siteweb: "www.tshoko.com",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Maitriser et optimiser votre réseau de transport de voyageurs",
  Email: "contact@ubitransport.com",
  Fondateur1: "Jean-Paul Medioni",
  Fondateur2: "",
  Fondateur3: "",
  Fondateur4: "",
  Logo: "",
  Nom: "Ubitransport",
  Nombredecollaborateurs: "",
  Pitch: "Leader des Systèmes de Transport Intelligents numériques, Ubitransport propose aux collectivités et opérateurs de gérer leurs réseaux de transport public à partir d’un Smartphone et du Cloud.↵↵Économiquement adaptées à toutes tailles de territoires, les solutions sont en temps réel et livrées clé en main : aide à l’exploitation, billettiques et information voyageurs pour les filières du scolaire, urbain, interurbain et à la demande. Elles permettent de maîtriser, sécuriser et optimiser les réseaux.↵↵Lauréate du Technology Fast 50 et du Grand Prix des Entreprises de Croissance, Ubitransport équipe plus de 120 réseaux en France métropolitaine, Outre-mer et Canada et ambitionne de devenir un acteur global, digital et inclusif de la mobilité.",
  Secteur: "Transport & Mobilité",
  Siteweb: "https://www.ubitransport.com/",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Plus de données, moins de carbone",
Email: "hello@vizcab.io",
Fondateur1: "Guillaume Lafont",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Vizcab",
Nombredeollaborateurs: "",
Pitch: "Vizcab est la seule solution du marché permettant aux promoteurs et constructeurs de maitriser dès l’amont les ambitions énergie-carbone de leurs projets immobiliers.",
Secteur: "Transition écologique",
Siteweb: "https://vizcab.io/accueil",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Détection des futurs biens immobiliers à vendre",
  Email: "",
  Fondateur1: "Florian Fenech",
  Fondateur2: "Frédérick Frezzato",
  Fondateur3: "",
  Fondateur4: "",
  Logo: "",
  Nom: "Volpi Immobilier",
  Nombredecollaborateurs: "",
  Pitch: "Volpi Immobilier permet aux agents immobiliers de rentrer en contact avec un propriétaire en amont de son projet de vente et avant ses concurrents grâce à une intelligence artificielle.",
  Secteur: "Immobilier",
  Siteweb: "https://www.volpi-immobilier.fr/",
  log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Nous aidons les entreprises à construire et valoriser leurs engagements contre le réchauffement climatique ",
Email: "antonin@wecount.io",
Fondateur1: "Antonin Guy",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Wecount",
Nombredecollaborateurs: "",
Pitch: "De nombreuses entreprises souhaitent réduire leur impact CO2 et engager leurs collaborateurs, partenaires et clients dans une transition Bas Carbone. Mais elles ne disposent pas des outils et de l’expertise nécessaires pour construire et mettre en oeuvre une Stratégie Bas Carbone robuste. Notre ambition est de démocratiser la réalisation de Stratégies Bas Carbone par les entreprises en proposant une  solution simple d’utilisation et clé en main.",
Secteur: "Transition écologique",
Siteweb: "https://www.wecount.io/",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Apprendre. Pratiquer. Jouer.",
Email: "contact@wiplaymusic.com",
Fondateur1: "Eric Magny",
Fondateur2: "Guillaume Cambon",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Wiplay",
Nombredecollaborateurs: "",
Pitch: "Un nouvel univers d’apprentissage de la musique, disponible partout : à domicile et dans des lieux partenaires. Laissez-vous guider et apprenez dans le plaisir avec Wiplay music.",
Secteur: "Musique",
Siteweb: "www.wiplaymusic.com",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"
},
{
  Baseline: "Who you think running the show?",
Email: "",
Fondateur1: "Léo Devaux",
Fondateur2: "",
Fondateur3: "",
Fondateur4: "",
Logo: "",
Nom: "Views",
Nombredecollaborateurs: "",
Pitch: "Music and lifestyle magazine.",
Secteur: "Media",
Siteweb: "",
log: "https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg"

}
  ]
  const [alphaNum, setAlphaNum] = useState("A")
  const [previousLetter, setPreviousLetter] = useState("A")
  const [previousAsso, setPreviousAsso] = useState("Allumee")
  const [clickAsso, setclickAsso] = useState(tab[1])
  const [data, setData] = useState([])
  const [scroll, setScroll] = useState(false)
  const [selectCategory, setSelectCategory] = useState('Tous les secteurs')
  const tableau = ["#","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  useEffect(() => {
    document.querySelector(`#alpha-num${previousLetter}`).classList.add("alpha-num-active")
    document.querySelector(`#annnuaire${previousLetter}`).classList.add('annuaire-active')
    // document.querySelector(`.${previousAsso}`).classList.add("asso-active")

  }, [])


  // const handleData = donnee => {
  //   setData(donnee)

  // }

  const selectCat = (value) => {
    setSelectCategory(value)
  }

  const selectAlpha = (alpha) => {

    if(alpha === "#"){
      setScroll(false)
      console.log(alpha)
      document.querySelector(`#alpha-num${previousLetter}`).classList.remove("alpha-num-active")
      document.querySelector(`#annnuaire${previousLetter}`).classList.remove("annuaire-active")
      setPreviousLetter("all")
      document.querySelector(`#alpha-numall`).classList.add("alpha-num-active")
      document.querySelector(`#annnuaireall`).classList.add("annuaire-active")
      document.querySelector(`#annnuaireall`).scrollIntoView(false, {behavior: "smooth"});

    } else {
      setScroll(false)
      document.querySelector(`#annnuaire${previousLetter}`).classList.remove("annuaire-active")
      document.querySelector(`#alpha-num${previousLetter}`).classList.remove("alpha-num-active")
      setAlphaNum(alpha)
      const letter = alpha.replace("\"", "")
      setPreviousLetter(letter)
      document.querySelector(`#alpha-num${letter}`).classList.add("alpha-num-active")
      document.querySelector(`#annnuaire${letter}`).classList.add('annuaire-active')
      document.querySelector(`#annnuaire${letter}`).scrollIntoView({behavior: "smooth"} );
    }
    }

    const assoChoix = (asso) => {
      const select = asso.Nom.replace(/ /g, "")
      const previous = document.querySelector(`.${previousAsso}`)      
      if(previous !== null){
        previous.classList.remove("asso-active")
      }
      document.querySelector(`.${select}`).classList.add("asso-active")
      setPreviousAsso(asso.Nom.replace(/ /g, ""))
      setTimeout(() => {
        setclickAsso(asso)
      },250)
      console.log(select)
      selectAlpha(asso.Nom[0])
    }



    return (
      <div className="global">
        <div className="ddcenter">
          <Drop2 selectedCat={selectCat}/>
        </div>
      <div className="block">
      <div className="block-1">
        <div className="annuaire-alphanum">
        <Alphanum selectAlplha={selectAlpha}/>
        <Annuaire tab={tab} assoChoix={assoChoix} scroll={scroll} selectCategory={selectCategory} tableau={tableau}/>
        </div>
        <Asso clickAsso={clickAsso}/>
      </div>
      </div>

      </div>
  );
}

export default App;


//       <div>
//     {JSON.stringify(alphaNum)}

//   <CsvParse
//   keys={keys}
//   onDataUploaded={handleData}
//   render={onChange => <input type="file" onChange={onChange} />}
// />
// </div>
