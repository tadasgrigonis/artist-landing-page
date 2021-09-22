let addPictures = function(pavadinimas) {
    let projectImages = document.getElementById('project-images');
    let firstImage = document.createElement("IMG");
    let secondImage = document.createElement("IMG");
    let thirdImage = document.createElement("IMG");
    firstImage.src = pavadinimas.firstImg;
    secondImage.src = pavadinimas.secondImg;
    thirdImage.src = pavadinimas.thirdImg;
    firstImage.classList = "pb-3";
    secondImage.classList = "pb-3";
    thirdImage.classList = "pb-3";
    projectImages.append(firstImage, secondImage, thirdImage);
};

let addTitle = function(pavadinimas) {
    let projectTitle = document.getElementById('project-title');
    let formattedTitle = document.createElement("h2");
    formattedTitle.innerHTML = pavadinimas.h2Title;
    formattedTitle.classList = "text-uppercase";
    projectTitle.append(formattedTitle);
};

let addText = function(pavadinimas) {
    let projectText = document.getElementById('project-title');
    let formattedText = document.createElement("p");
    formattedText.innerHTML = pavadinimas.aboutText;
    projectText.append(formattedText);
};

let addNav = function() {
    let projectNav = document.getElementById('project-nav');
    let navBack = document.createElement("a");
    navBack.innerHTML = 'Back to PAVEIKSLAI';
    navBack.href = 'index.html';
    let navPrevNext = document.createElement("a");
    navPrevNext.innerHTML = 'prev / next';
    navPrevNext.href = '#';
    projectNav.classList = "col-lg-12 justify-content-between mb-3";
    projectNav.append(navBack, navPrevNext);
};

let showPainting = function(theTitle) {
    addPictures(theTitle);
    addTitle(theTitle);
    addText(theTitle);
    addNav();
};

let dreamer = {
    firstImg: `pics/little_dreamer_and_a_dog.jpg`,
    secondImg: `pics/little_dreamer_and_a_dog_1.jpg`,
    thirdImg: `pics/little_dreamer_and_a_dog_2.jpg`,
    h2Title: `litlle.dreamer.and.a.dog. <span>700 EUR<span>`,
    aboutText: `Prieš tris metus nutapiau pirmąjį Mažojo Svajotojo paveikslą. Tuo metu gyvenau pajūryje dideliuose gyvenimo pokyčiuose ir tą dieną galvojau apie savo ateities vaiką. Taip gimė L I T T L E. D R E A M E R. Su daug įdėtos širdies, jau esamos meilės jam, tikėjimo ir vilties. Šiandien, kai ant rankų supuoju savo mažylį, noriu kasdien jam kartoti tuos pačius žodžius, kuriuos tąkart sukūriau, kaip mantrą:</p><p>Mažasis svajotojau,</p>   
    <p>Aš piešiu tau pasaulį. Su banguotu reljefu ir daug spalvų. Apvalų, bet stabilų. Linksmą ir margą. Šitame pasaulyje gyvensi tik tu ir tavo svajonės. Bet nebijok - tau niekada nebus vieniša ir liūdna.</p><p>Žinai, kodėl?</p><p>Nes svajonės - jei jas myli - yra tavo draugai. Jei skiri joms savo laiką ir dėmesį - jauti pilnatvę širdį. Ir joje niekada nebebūna tuščia.</p><p>Piešiu tau pasaulį, kad galėtum jame nurimti ir pasislėpti, kai bus baisu. Nes čia gyvens gražiausi ir tyriausi jausmai, tavo vidinė stiprybė ir laisvė, pasiruošę priimti tave visokį.</p><p>Kai kažko ilgėsiesi, atsistok ir, žiūrėdamas į tolį, giliai kvėpuok. Siųsk savo meilę ir švelnų rūpestį tam žmogui ir... paleisk.</p><p>Piešiau tau šį pasaulį, kad kasnakt prieš užmigdamas savo lovelėj, mažom akutėm „pasiklystum” jame ir nurimtum. Augtum ir svajotum. Sapnuotum gražiausius sapnus.</p><p>„Mažasis princas” turėjo lapę ir rožę. Tu turėsi viską - kuo tikėsi. Aš tau apie tai kaskart priminsiu.</p>        
    <p>Akrilas ant drobės. 120x100 cm.`,
}; 

let lola = {
    firstImg: `pics/lola.jpg`,
    secondImg: `pics/lola1.jpg`,
    thirdImg: `pics/lola2.jpg`,
    h2Title: `lola. <span>800 EUR<span>`,
    aboutText: `<p>Norėčiau būti ta, kuri drąsiai sakytų, ką galvoja.</p><p>Norėčiau išeiti, kuomet nebegalėčiau klausytis.</p><p>Norėčiau būti silpna ir stipri vienu metu.</p><p>Norėčiau nebebijoti.</p><p>Norėčiau mylėti iki paskutinio atokvėpio.</p><p>Norėčiau garsiai girdėti savo širdį.</p><p>Norėčiau būti geriausia sau.</p><p>Norėčiau įkvėpti kitus.</p><p>Norėčiau niekada nenuleisti akių.</p><p>Norėčiau, kad manęs niekad nepamirštų.</p><p>Norėčiau būti ji. Norėčiau būti Lola.</p>
    <p>Akrilas ant d2robės. 120x100 cm.`,
};

let unicorn = {
    projectID: `unicorn`,
    firstImg: `pics/Unicorn.jpg`,
    secondImg: `pics/Unicorn2.jpg`,
    thirdImg: `pics/Unicorn3.jpg`,
    h2Title: `unicorn. <span>650 EUR<span>`,
    aboutText: `150x120 cm. Akrilas ant drobės`,
};

let mother = {
    projectID: `mother`,
    firstImg: `pics/mother.jpg`,
    secondImg: `pics/mother_2.jpg`,
    thirdImg: `pics/mother_3.jpg`,
    h2Title: `mother. <span>650 EUR<span>`,
    aboutText: `120x120 cm. Akrilas ant drobės`,
};

let sisters = {
    projectID: `sisters`,
    firstImg: `pics/sistersII.jpg`,
    secondImg: `pics/sisters_2.jpg`,
    thirdImg: `pics/sisters_3.jpg`,
    h2Title: `sisters. <span>70 EUR<span>`,
    aboutText: `40x40 cm. Akrilas, akvarelė ant drobės`,
};

let fly = {
    projectID: `fly`,
    firstImg: `pics/fly.jpg`,
    secondImg: `pics/fly_2.jpg`,
    thirdImg: `pics/fly_3.jpg`,
    h2Title: `if.life.gives.you.wings.-fly. <span>700 EUR<span>`,
    aboutText: `110x130 cm. Akrilas ant drobės`,
};


document.getElementById('dreamer').addEventListener("click", showPainting.bind(this, dreamer));
document.getElementById('lola').addEventListener("click", showPainting.bind(this, lola));
document.getElementById('unicorn').addEventListener("click", showPainting.bind(this, unicorn));
document.getElementById('mother').addEventListener("click", showPainting.bind(this, mother));
document.getElementById('sisters').addEventListener("click", showPainting.bind(this, sisters));
document.getElementById('fly').addEventListener("click", showPainting.bind(this, fly));

