/* =========================================================
   INDHOLD – her rettes trænere og galleri.
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

/* ---------- Galleri ----------
   Opbygning: år -> events -> billeder.
   "id" bliver til linket, fx #galleri-2025-fastelavn
   "photos" er enten et antal (viser pladsholdere) eller en liste:
     photos: [
       {src: "billeder/galleri/2025/fastelavn/01.jpg", alt: "Børneholdet klædt ud"},
       {src: "billeder/galleri/2025/fastelavn/02.jpg"}
     ]
   Fjern "example: true", når der er rigtige billeder. */
var GALLERY = {
  2026: [
    {id: "cphcup", name: "CPH Cup 2026", date: "2026", example: true, photos: 12}
  ],
  2025: [
    {id: "fastelavn", name: "Fastelavn 2025", date: "Februar 2025", example: true, photos: 9}
  ],
  2024: [],
  2023: [],
  2022: []
};

/* ---------- Kalender ----------
   Indsæt bestyrelsens delings-/embed-link mellem anførselstegnene.
   Tomt felt viser en pladsholder. */
var CALENDAR_URL = "";
