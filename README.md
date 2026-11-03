# Brøndby Judo Klub – ny hjemmeside

Forslag til ny hjemmeside. Ren HTML, CSS og JavaScript. Ingen installation og ingen byggetrin.

## Kør siden i VS Code

1. Pak zip-filen ud og åbn mappen `site` i VS Code (File → Open Folder).
2. Installer udvidelsen **Live Server** (af Ritwick Dey) fra Extensions.
3. Højreklik på `index.html` → **Open with Live Server**.
4. Siden åbner i browseren og opdaterer sig selv, når du gemmer en fil.

Du kan også bare dobbeltklikke på `index.html`. Det virker, men Live Server er bedst, mens du retter.

### Se mobilvisningen
Tryk F12 i Chrome eller Edge og klik på telefon-ikonet (Toggle device toolbar).

## Filer

| Fil | Indhold |
|---|---|
| `index.html` | Al tekst: træningstider, Judo4All, priser, kontakt. Logoet står også her |
| `js/data.js` | Trænere og kalender-link. **Her rettes det meste.** |
| `js/app.js` | Sidens logik (menu, trænere, kalender). Skal normalt ikke rettes |
| `css/style.css` | Farver og layout. Klubbens sort, rød og gul står øverst under `:root` |
| `billeder/traenere/` | Nye trænerbilleder |

## Typiske rettelser

**Ny træner eller nyt billede:** tilføj en linje i `COACHES` i `js/data.js`.

**Logo:** læg logoet i `billeder/logo.png` og erstat de tre forekomster af
`https://broendbyjudoklub.dk/wordpress/wp-content/uploads/BJKlogo.jpg` i `index.html` med `billeder/logo.png`.

**Kalender:** sæt bestyrelsens embed-link i `CALENDAR_URL` i `js/data.js`.

## Vise siden for bestyrelsen

Siden er bare filer, så den kan lægges på en gratis statisk webhost (fx Netlify, Vercel eller GitHub Pages).
Så får bestyrelsen et almindeligt link, de kan åbne på telefon eller computer uden at installere noget.

## Bemærk

- Logo og trænerbilleder hentes midlertidigt fra den nuværende hjemmeside. Hvis den lukkes, vises "BJK" og initialer, indtil filerne ligger i `billeder/`.
