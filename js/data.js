/* =========================================================
   INDHOLD – her rettes trænere og kalender.
   Alt andet indhold står direkte i index.html.
   ========================================================= */

/* ---------- Trænere ----------
   "photo" er midlertidigt hentet fra den nuværende hjemmeside.
   Når I har nye billeder: læg dem i mappen billeder/traenere/
   og skriv fx photo: "billeder/traenere/palle.jpg".
   Mangler et billede, vises trænerens initialer i stedet. */
var OLD = "https://broendbyjudoklub.dk/wordpress/wp-content/uploads/";

var COACHES = [
  {name: "Palle Bengtsson",                    grade: "3. dan",       photo: OLD + "Palle.jpg"},
  {name: "Svend Vohlert",                      grade: "2. dan",       photo: OLD + "Svend-V.jpg"},
  {name: "Svend E. Hansen",                    grade: "1. dan",       photo: OLD + "svend-e-hansen.jpg"},
  {name: "Jørgen Sørensen",                    grade: "1. dan",       photo: OLD + "J%C3%B8rgen.jpg"},
  {name: "Jan Rassing",                        grade: "1. kyu",       photo: OLD + "Jan.jpg"},
  {name: "Claus Hartmann Lund",                grade: "1. kyu",       photo: OLD + "CLaus.jpg"},
  {name: "Mikkel Schakmann Sørensen",          grade: "",             photo: OLD + "mikkel.jpg"},
  {name: "Michael Fernando Weiman Jørgensen",  grade: "",             photo: ""},
  {name: "Jacob Spang-Thomsen",                grade: "",             photo: OLD + "download.png"},
  {name: "Theis",                              grade: "",             photo: ""},
  {name: "Rami",                               grade: "Hjælpetræner", photo: ""}
];

/* ---------- Kalender ----------
   Kalenderen hentes direkte fra kalendersiden.dk, hver gang siden åbnes.
   Ændringer i kalenderen vises derfor automatisk – her skal intet rettes.
   Tomt felt viser en pladsholder. */
var CALENDAR_URL = "https://kalendersiden.dk/embed/0Ddl2XufZa_8~1jvw";
