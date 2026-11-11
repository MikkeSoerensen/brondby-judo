/* =========================================================
   PENSUM – alle teknikker.
   type:  'kast' eller 'gulv'
   grade: 'gul', 'orange', 'grøn', 'blå', 'brun' eller 'bonus'
   video: sti til mp4-fil i mappen video/ (fx 'video/1.Gul/ogoshi.mp4')
          Mangler filen, vises en pladsholder.
   youtube: (valgfri) YouTube-id, fx 'dQw4w9WgXcQ'. Bruges i stedet for video.
   k / t / ka: de tre punkter under teknikken.
   ========================================================= */

var PENSUM = [
    // 5. KYU - GULT BÆLTE (Minimumstid: 3 måneder)
    {type: 'kast', grade: 'gul', name: 'O-Soto-Gari', danish: 'Stor udvendig fejning', video: 'video/1.Gul/Osotogari.mp4', k: 'Åbning, balancebrydning (Kuzushi).', t: 'Placering (Tsukuri).', ka: 'Kasteudførelse (Kake).' },
    {type: 'kast', grade: 'gul', name: 'O-Goshi', danish: 'Stor hofte', video: 'video/1.Gul/Ogoshi.mp4', k: 'Åbning, balancebrydning (Kuzushi).', t: 'Placering (Tsukuri).', ka: 'Kasteudførelse (Kake).' },
    {type: 'kast', grade: 'gul', name: 'Uki-Goshi', danish: 'Flydende hofte', video: 'video/1.Gul/UkiGoshi.mp4', k: 'Åbning, balancebrydning (Kuzushi).', t: 'Placering (Tsukuri).', ka: 'Kasteudførelse (Kake).' },
    {type: 'kast', grade: 'gul', name: 'Seoi-Nage (Morote)', danish: 'Skulderkast (begge hænder)', video: 'video/1.Gul/Seoinagemorote.mp4', k: 'Åbning, balancebrydning (Kuzushi).', t: 'Placering (Tsukuri).', ka: 'Kasteudførelse (Kake).' },

    { type: 'gulv', grade: 'gul', name: 'Kesa-Gatame', danish: 'Skærf kontrol', video: 'video/1.Gul/KesaGatame.mp4', k: 'Kontrol af arm og nakke', t: 'Sæt dig tæt til uke', ka: 'Lås overkroppen fast' },

    // 4. KYU - ORANGE BÆLTE (Minimumstid: 5 måneder)
    { type: 'kast', grade: 'orange', name: 'Tai-Otoshi', danish: 'Krop lade falde', video: 'video/2.Orange/Taiotoshi.mp4', k: 'Balancebrydning fremad eller til siden.', t: 'Placer foden som barriere.', ka: 'Roter modstanderen over det udstrakte ben.' },
    { type: 'kast', grade: 'orange', name: 'Koshi-Guruma', danish: 'Hofte hjul', video: 'video/2.Orange/KoshiGuruma.mp4', k: 'Træk modstanderen fremad.', t: 'Armen omkring nakken.', ka: 'Roter over hoften.' },
    { type: 'kast', grade: 'orange', name: 'Ko-Uchi-Gari', danish: 'Lille indvendig fejning', video: 'video/2.Orange/KoUchiGari.mp4', k: 'Træk modstanderen ned på hælen.', t: 'Mej modstanderens hæl indefra.', ka: 'Skub overkroppen samtidig med mejet.' },
    { type: 'kast', grade: 'orange', name: 'O-Uchi-Gari', danish: 'Stor indvendig fejning', video: 'video/2.Orange/OUchiGari.mp4', k: 'Pres modstanderen bagud på hælene.', t: 'Træd ind mellem benene.', ka: 'Tegn en cirkel med foden og mej.' },

    //{ type: 'gulv', grade: 'orange', name: 'Kami-Shiho-Gatame', danish: 'Top fire punkts kontrol', video: 'video/kamishihogatame.mp4', k: 'Grib under bæltet', t: 'Bryst mod bryst', ka: 'Lås skuldrene med armene' },

    // 3. KYU - GRØNT BÆLTE (Minimumstid: 5 måneder)
    { type: 'kast', grade: 'grøn', name: 'Ippon-Seoi-Nage', danish: 'En arm skulderkast', video: 'video/3.Grøn/Ipponseoinage.mp4', k: 'Højt træk i armen.', t: 'Armen låses i modstanderens armhule.', ka: 'Kast over skulderen.' },
    { type: 'kast', grade: 'grøn', name: 'Harai-Goshi', danish: 'Fejende hofte', video: 'video/3.Grøn/HaraiGoshi.mp4', k: 'Diagonal balancebrydning.', t: 'Tæt kontakt med hoften.', ka: 'Fej ydersiden af modstanderens ben væk.' },
    { type: 'kast', grade: 'grøn', name: 'Sasae-Tsurikomi-Ashi', danish: 'Blokering løfte trække fod', video: 'video/3.Grøn/SasaeTsurikomiAshi.mp4', k: 'Løft og træk cirkulært.', t: 'Bloker modstanderens ankel.', ka: 'Drej modstanderen over blokeringen.' },
    { type: 'kast', grade: 'grøn', name: 'De-Ashi-Harai', danish: 'Fremadgående fodfejning', video: 'video/3.Grøn/DeAshiHarai.mp4', k: 'Timing når modstanderen træder frem.', t: 'Find det rette øjeblik før vægten lægges.', ka: 'Fej foden sidelæns.' },
    { type: 'kast', grade: 'grøn', name: 'Okuri-Ashi-Harai', danish: 'Glidende benfejning', video: 'video/3.Grøn/OkuriAshiHarai.mp4', k: 'Timing ved sidelæns bevægelse.', t: 'Fødderne føres sammen.', ka: 'Fej begge ben sidelæns.' },

    // 2. KYU - BLÅT BÆLTE (Minimumstid: 5 måneder)
    { type: 'kast', grade: 'blå', name: 'Seoi-Nage (Eri)', danish: 'Skulderkast (Revers)', video: 'video/4.Blå/EriSeoiNage.mp4', k: 'Træk i reversen.', t: 'Drej ind under modstanderen.', ka: 'Kast over ryggen/skulderen.' },
    { type: 'kast', grade: 'blå', name: 'Kata-Guruma', danish: 'Skulder hjul', video: 'video/4.Blå/Kataguruma.mp4', k: 'Træk modstanderen op på skuldrene.', t: 'Gå dybt ned under tyngdepunktet.', ka: 'Løft og rul modstanderen over skuldrene.' },
    { type: 'kast', grade: 'blå', name: 'Sukui-Nage', danish: 'Øse kast', video: 'video/4.Blå/Sukuinage.mp4', k: 'Grib omkring modstanderens ben.', t: 'Skovl benene op.', ka: 'Løft og kast bagud.' },
    { type: 'kast', grade: 'blå', name: 'Tsurikomi-Goshi', danish: 'Løfte trække hofte', video: 'video/4.Blå/TsuriKomiGoshi.mp4', k: 'Løft i reversen.', t: 'Gå dybt med hoften.', ka: 'Kast over ryggen.' },
    { type: 'kast', grade: 'blå', name: 'Uchi-Mata', danish: 'Inderlårs kast', video: 'video/4.Blå/UchiMata.mp4', k: 'Træk frem og ned.', t: 'Sving benet op mellem modstanderens lår.', ka: 'Kast med kraftig rotation.' },
    { type: 'kast', grade: 'blå', name: 'Tomoe-Nage', danish: 'Cirkel kast', video: 'video/4.Blå/TomoeNage.mp4', k: 'Brug modstanderens fremdrift.', t: 'Sæt dig ned med foden i lysken.', ka: 'Rul bagover og kast over hovedet.' },
    { type: 'kast', grade: 'blå', name: 'Yoko-Tomoe-Nage', danish: 'Sideliggende cirkel kast', video: 'video/4.Blå/YokoTomoeNage.mp4', k: 'Som Tomoe-Nage, men med vinkel.', t: 'Fald til siden.', ka: 'Kast i en sidelæns bue.' },

    // 1. KYU - BRUNT BÆLTE (Minimumstid: 8 måneder)
    { type: 'kast', grade: 'brun', name: 'Seoi-Otoshi', danish: 'Skulder lade falde', video: 'video/5.Brun/Seoiotoshi.mp4', k: 'Træk som i Seoi-Nage.', t: 'Gå helt ned på ét eller begge knæ.', ka: 'Træk modstanderen direkte over skulderen til gulvet.' },
    { type: 'kast', grade: 'brun', name: 'Sode-Tsurikomi-Goshi', danish: 'Ærme løfte trække hofte', video: 'video/5.Brun/SodeTsurikomiGoshi.mp4', k: 'Grib begge ærmer og løft.', t: 'Drej ind under modstanderen.', ka: 'Kast over hoften ved hjælp af ærmetræk.' },
    { type: 'kast', grade: 'brun', name: 'Hiza-Guruma', danish: 'Knæ hjul', video: 'video/5.Brun/HizaGuruma.mp4', k: 'Træk i en cirkel.', t: 'Placer foden på modstanderens knæ.', ka: 'Drej modstanderen over benet.' },
    { type: 'kast', grade: 'brun', name: 'Harai-Tsurikomi-Ashi', danish: 'Feje løfte trække fod', video: 'video/5.Brun/HaraiTsukomiAshi.mp4', k: 'Løft og træk bagud.', t: 'Fej foden i bevægelsesretningen.', ka: 'Koordineret fej og løft.' },
    { type: 'kast', grade: 'brun', name: 'Ura-Nage', danish: 'Rygside kast', video: 'video/5.Brun/UraNage.mp4', k: 'Kontrer modstanderens angreb.', t: 'Grib om livet bagfra.', ka: 'Løft og fald bagover med modstanderen.' },
    { type: 'kast', grade: 'brun', name: 'Hikikomi-Gaeshi', danish: 'Trække ned kontra', video: 'video/5.Brun/HikikomiGaeshi.mp4', k: 'Grib over ryggen.', t: 'Fald bagover og træk modstanderen med.', ka: 'Vip modstanderen rundt ved hjælp af benet.' },
    { type: 'kast', grade: 'brun', name: 'Soto-Makikomi', danish: 'Udvendig omvikling', video: 'video/5.Brun/SotoMakikomi.mp4', k: 'Lås modstanderens arm.', t: 'Kast din krop rundt om modstanderen.', ka: 'Rul sammen til gulvet.' },
    { type: 'kast', grade: 'brun', name: 'Tani-Otoshi', danish: 'Dal lade falde', video: 'video/5.Brun/TaniOtoshi.mp4', k: 'Udnyt modstanderens pres fremad.', t: 'Sæt dig ned bag modstanderens fødder.', ka: 'Træk modstanderen bagover.' },

    // Bonus teknikker (Kan vælges som ekstra teknik ved alle bælter)
    // BONUS KAST (Guld sektion)
    { type: 'kast', grade: 'bonus', name: 'Ashi-Guruma', danish: 'Ben hjul', video: 'video/6.Bonus/AshiGuruma.mp4', k: 'Træk i en cirkelbue.', t: 'Placer benet over modstanderens skinneben.', ka: 'Roter modstanderen over benet.' },
    { type: 'kast', grade: 'bonus', name: 'Daki-Wakare', danish: 'Omfavnelse og adskillelse', video: 'video/6.Bonus/DakiWakare.mp4', k: 'Udnyt modstanderens pres eller lave position.', t: 'Omfavn modstanderens krop.', ka: 'Kast dig bagover og rull modstanderen over.' },
    { type: 'kast', grade: 'bonus', name: 'Hane-Goshi-Gaeshi', danish: 'Kontra på indspringende hofte', video: 'video/6.Bonus/HaneGoshiGaeshi.mp4', k: 'Udnyt modstanderens ubalance under Hane-Goshi.', t: 'Placer hoften/benet til kontra.', ka: 'Mej modstanderens støtteben.' },
    { type: 'kast', grade: 'bonus', name: 'Hane-Makikomi', danish: 'Spring-indrulningskast', video: 'video/6.Bonus/HaneMakikomi.mp4', k: 'Stærkt træk fremad.', t: 'Indgang som Hane-Goshi.', ka: 'Rul med modstanderen til jorden.' },
    { type: 'kast', grade: 'bonus', name: 'Hane-Goshi', danish: 'Springende hofte', video: 'video/6.Bonus/HaneGoshi.mp4', k: 'Træk modstanderen fremad og op.', t: 'Drej ind med hoften og bøj det ene knæ.', ka: 'Spring modstanderens ben væk med ydersiden af låret.' },
    { type: 'kast', grade: 'bonus', name: 'Ko-Soto-Gari', danish: 'Lille udvendig fejning', video: 'video/6.Bonus/KoSotoGari.mp4', k: 'Pres modstanderen bagud og til siden.', t: 'Placer foden bag modstanderens hæl.', ka: 'Fej hælen væk i tæernes retning.' },
    { type: 'kast', grade: 'bonus', name: 'Harai-Goshi-Gaeshi', danish: 'Kontra på fejende hofte', video: 'video/6.Bonus/HaraiGoshiGaeshi.mp4', k: 'Modstå trækket i Harai-Goshi.', t: 'Skift vægtpunktet.', ka: 'Mej modstanderens standben bagfra.' },
    { type: 'kast', grade: 'bonus', name: 'Harai-Makikomi', danish: 'Fejende indrulning', video: 'video/6.Bonus/HaraiMakikomi.mp4', k: 'Diagonal balancebrydning.', t: 'Som Harai-Goshi, men tættere kontakt.', ka: 'Rul over modstanderen til jorden.' },
    { type: 'kast', grade: 'bonus', name: 'Kani-Basami', danish: 'Saks (NB: Ofte forbudt i kamp)', video: 'video/6.Bonus/KaniBasami.mp4', k: 'Hop sidelæns på modstanderen.', t: 'Placer benene som en saks om ben/krop.', ka: 'Klip benene væk og fald bagover.' },
    { type: 'kast', grade: 'bonus', name: 'Kawazu-Gake', danish: 'Ben-omviklingskast', video: 'video/6.Bonus/KawazuGake.mp4', k: 'Hægt benet omkring modstanderens ben.', t: 'Lås benet indefra.', ka: 'Fald baglæns med modstanderen.' },
    { type: 'kast', grade: 'bonus', name: 'Kibisu-Gaeshi', danish: 'Hæl-kontra', video: 'video/6.Bonus/KibisuGaeshi.mp4', k: 'Duk under modstanderens vægt.', t: 'Grib om modstanderens hæl.', ka: 'Skub modstanderen bagover.' },
    { type: 'kast', grade: 'bonus', name: 'Ko-Soto-Gake', danish: 'Lille udvendig krog', video: 'video/6.Bonus/KoSotoGake.mp4', k: 'Pres modstanderen bagud.', t: 'Hægt foden om modstanderens ankel.', ka: 'Pres modstanderen over dit ben.' },
    { type: 'kast', grade: 'bonus', name: 'Ko-Uchi-Gaeshi', danish: 'Lille indvendig kontra', video: 'video/6.Bonus/KoUchiHaeshi.mp4', k: 'Udnyt modstanderens Ko-Uchi-Gari forsøg.', t: 'Skift retning på mejet.', ka: 'Mej modstanderens angrebsben.' },
    { type: 'kast', grade: 'bonus', name: 'Ko-Uchi-Makikomi', danish: 'Lille indvendig indrulning', video: 'video/6.Bonus/KoUchiMakikomi.mp4', k: 'Dybt træk nedad.', t: 'Indgang som Ko-Uchi-Gari.', ka: 'Dyk fremad og rul med modstanderen.' },
    { type: 'kast', grade: 'bonus', name: 'Kuchiki-Taoshi', danish: 'En-hånds ben-nedtagning', video: 'video/6.Bonus/KuchikiTaoshi.mp4', k: 'Grib om modstanderens ben med én hånd.', t: 'Løft benet op.', ka: 'Skub modstanderen bagover.' },
    { type: 'kast', grade: 'bonus', name: 'Morote-Gari', danish: 'To-hånds ben-nedtagning', video: 'video/6.Bonus/MoroteGari.mp4', k: 'Dyk hurtigt under armene.', t: 'Grib om begge modstanderens knæhaser.', ka: 'Træk benene til dig og skub med skulderen.' },
    { type: 'kast', grade: 'bonus', name: 'Obi-Otoshi', danish: 'Bælte-styrt', video: 'video/6.Bonus/Obiotoshi.mp4', k: 'Grib fat i modstanderens bælte.', t: 'Gå tæt på modstanderen.', ka: 'Løft og lad modstanderen falde bagover.' },
    { type: 'kast', grade: 'bonus', name: 'Obi-Tori-Gaeshi', danish: 'Bælte-grib kontra', video: 'video/6.Bonus/ObiToriGaeshi.mp4', k: 'Grib fat i bæltet over ryggen.', t: 'Gå dybt under modstanderen.', ka: 'Kast modstanderen som et offerkast.' },
    { type: 'kast', grade: 'bonus', name: 'O-Guruma', danish: 'Stort hjul', video: 'video/6.Bonus/OGuruma.mp4', k: 'Stort cirkulært træk.', t: 'Placer benet vandret over modstanderens hofter.', ka: 'Roter modstanderen over benet.' },
    { type: 'kast', grade: 'bonus', name: 'O-Soto-Gaeshi', danish: 'Stor udvendig kontra', video: 'video/6.Bonus/OSotogaeshi.mp4', k: 'Kontrer modstanderens O-Soto-Gari.', t: 'Placer dit ben til mod-mejning.', ka: 'Mej modstanderens ben før hans eget lander.' },
    { type: 'kast', grade: 'bonus', name: 'O-Soto-Guruma', danish: 'Stort udvendigt hjul', video: 'video/6.Bonus/OSotoGuruma.mp4', k: 'Stærk balancebrydning bagud.', t: 'Bloker begge modstanderens ben med dit ben.', ka: 'Roter modstanderen over benet.' },
    { type: 'kast', grade: 'bonus', name: 'O-Soto-Makikomi', danish: 'Stor udvendig indrulning', video: 'video/6.Bonus/OsotoMakikomi.mp4', k: 'Træk armen tæt til din krop.', t: 'Som O-Soto-Gari, men læn dig frem.', ka: 'Rul sammen med modstanderen til jorden.' },
    { type: 'kast', grade: 'bonus', name: 'O-Soto-Otoshi', danish: 'Stort udvendigt styrt', video: 'video/6.Bonus/OSotoOtoshi.mp4', k: 'Pres modstanderen bagud.', t: 'Sæt foden tungt bag modstanderens hæl.', ka: 'Pres modstanderen direkte mod måtten.' },
    { type: 'kast', grade: 'bonus', name: 'O-Uchi-Gaeshi', danish: 'Stor indvendig kontra', video: 'video/6.Bonus/OUchiGaeshi.mp4', k: 'Udnyt modstanderens O-Uchi-Gari.', t: 'Kontroller overkroppen.', ka: 'Drej og mej modstanderens støtteben.' },
    { type: 'kast', grade: 'bonus', name: 'Sumi-Gaeshi', danish: 'Hjørne-modkast', video: '', k: 'Træk diagonalt fremad.', t: 'Placer vristen bag modstanderens lår.', ka: 'Rul bagover og vip modstanderen over dig.' },
    { type: 'kast', grade: 'bonus', name: 'Sumi-Otoshi', danish: 'Hjørne-styrt', video: '', k: 'Balancebrydning til det bagerste hjørne.', t: 'Brug kun armene (Te-waza).', ka: 'Skub modstanderen direkte i gulvet.' },
    { type: 'kast', grade: 'bonus', name: 'Taware-Gaeshi', danish: 'Halmballe-kontra', video: '', k: 'Duk under et angreb.', t: 'Grib om modstanderens liv/ben.', ka: 'Kast modstanderen bagover dig.' },
    { type: 'kast', grade: 'bonus', name: 'Tsubame-Gaeshi', danish: 'Svale-kontra', video: '', k: 'Timing mod et De-Ashi-Harai.', t: 'Træk foden hurtigt tilbage.', ka: 'Fej modstanderens fod i samme bevægelse.' },
    { type: 'kast', grade: 'bonus', name: 'Uchi-Makikomi', danish: 'Indvendig indrulning', video: '', k: 'Stærkt træk indad.', t: 'Drej som i Seoi-Nage.', ka: 'Lås armen og rul til jorden.' },
    { type: 'kast', grade: 'bonus', name: 'Uchi-Mata-Gaeshi', danish: 'Inderlårs kontra', video: '', k: 'Undvig modstanderens Uchi-Mata.', t: 'Skift din balance.', ka: 'Brug modstanderens momentum til at meje ham bagud.' },
    { type: 'kast', grade: 'bonus', name: 'Uchi-Mata-Makikomi', danish: 'Inderlårs indrulning', video: '', k: 'Dybt træk fremad.', t: 'Som Uchi-Mata, men tættere.', ka: 'Rul med modstanderen til jorden.' },
    { type: 'kast', grade: 'bonus', name: 'Uchi-Mata-Sukashi', danish: 'Inderlårs-undvigelse', video: '', k: 'Træk hoften væk fra Uchi-Mata angrebet.', t: 'Brug hænderne til at guide modstanderen.', ka: 'Modstanderen falder forbi dig pga. sit eget momentum.' },
    { type: 'kast', grade: 'bonus', name: 'Uki-Otoshi', danish: 'Svævende styrt', video: '', k: 'Træk modstanderen rent ud af balance.', t: 'Gå ned på det ene knæ.', ka: 'Træk modstanderen direkte i måtten uden kropskontakt.' },
    { type: 'kast', grade: 'bonus', name: 'Uki-Waza', danish: 'Svævende teknik', video: '', k: 'Træk modstanderen sidelæns fremad.', t: 'Kast dig på siden.', ka: 'Kast modstanderen over dig i en bue.' },
    { type: 'kast', grade: 'bonus', name: 'Ushiro-Goshi', danish: 'Baglæns hoftekast', video: '', k: 'Kontrer et hofteangreb.', t: 'Løft modstanderen bagfra om livet.', ka: 'Sæt modstanderen ned eller kast bagud.' },
    { type: 'kast', grade: 'bonus', name: 'Utsuri-Goshi', danish: 'Skifte-hoftekast', video: '', k: 'Kontrer et hoftekast.', t: 'Løft modstanderen og skift din egen hofteposition.', ka: 'Kast modsat vej af det oprindelige angreb.' },
    { type: 'kast', grade: 'bonus', name: 'Yama-Arashi', danish: 'Bjerg-storm', video: '', k: 'Kombineret træk i revers og ærme.', t: 'Indgang som Harai-Goshi.', ka: 'Kast modstanderen med stor kraft.' },
    { type: 'kast', grade: 'bonus', name: 'Yoko-Gake', danish: 'Sidelæns påhægtning', video: '', k: 'Træk modstanderen sidelæns.', t: 'Mej modstanderens hæl sidelæns.', ka: 'Fald selv med i kastet.' },
    { type: 'kast', grade: 'bonus', name: 'Yoko-Guruma', danish: 'Sidelæns hjul', video: '', k: 'Kontrering af et indspring.', t: 'Rul sidelæns under modstanderen.', ka: 'Kast i en hjulbevægelse henover dig.' },
    { type: 'kast', grade: 'bonus', name: 'Yoko-Otoshi', danish: 'Sidelæns lade falde', video: '', k: 'Træk modstanderen til siden.', t: 'Stræk dit ben helt ud sidelæns.', ka: 'Fald til siden og træk modstanderen over dit ben.' },
    { type: 'kast', grade: 'bonus', name: 'Yoko-Wakare', danish: 'Sidelæns adskillelse', video: '', k: 'Pres modstanderen fremad.', t: 'Kast dig på tværs foran modstanderen.', ka: 'Træk modstanderen henover dig.' }
];
