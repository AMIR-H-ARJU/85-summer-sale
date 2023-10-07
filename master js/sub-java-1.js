
// alert("Everything will be okey");



document.getElementById('almighty').addEventListener('click', function () {

    const theNume = 199;
    const thePar = parseFloat(theNume);

    const textid = document.getElementById('insh');
    const textInner = textid.innerText;
    const textidflo = parseFloat(textInner);
   
    const nexttextid = document.getElementById('increase');
    const nextInner = nexttextid.innerText;
    const nexttxtflo = parseFloat(nextInner);

    const btnfrends = document.getElementById('bta');
    const btnfr = document.getElementById('btb');

    const afterCalculation = nexttxtflo + textidflo;

    // validation



    const afterSet = document.getElementById('increase');
    const afterinner = afterSet.innerText;
    afterSet.innerText = afterCalculation;

    if(nexttxtflo => 1){
        btnfr.removeAttribute('disabled');
    }else{
        btnfr.addAttribute('disabled')
    }




                                // vai ei ta ektu poiren//

// vai aikhne mul kaj hoite hobe ei html er moddher div gulate click porle seikhan kar total price wla id r man change hbe iddition hobe.
// but sei sathe jokn total price ta 0 theke beshi hobe ba 1 hobe tokhn "make purchase " nutton on hobr onno they 'disabled' thakbe ///
// ar sei APPLy button ta jokhn total price ta 200 hobe tokhn active hobe ba ATTribute 'disabled' ta remove hobe. but ei prothom condition jeta chalu asae ei condition thik kaj kore but ei niceher j ei cnoodition apply button er jonno jeta seta kaj kore na kore na bolte seta w uporer condition er moto man 1 holei chalu ba attribute remove hoye jaitese er karon ta ki naki vul kothay  ase ektu deikhen//


// Vai ai j aita ei condition ta kaj kore na age pore kono vaebi kaj kore na syntax tyoe error kina bujhtesi na //
// ar ekhne to mone hoy final calculation er pore condition deyay kono problem howar kotha na /
// ar eita kaj na korar karon ta ektu deikhen vai ar code edit kre diyen jodi hoy. thanks in advance//ar arekta jinish vai ei page ta prothom bar load neyar somoy ok thaeke then button ta active howar por ar reload dilew page button gula first tikme er moto inactive hooy na eta ki prblem hoitese kono naki ata emon  e natural mane eta page e dhukar age  first time only inactive thakbe mane//
// amar kase lage jeno attribute add hoy na 'disabled' ta naki eta emon e ?/
// but remove to hoitse 'disabled' //
      

    // if (nexttxtflo => thePar) {

    //     btnfrends.removeAttribute('disabled')
    // }else{
    //     btnfrends.addAttribute('disabled');
    
    // }


});







// document.getElementById('a').addEventListener('click', function () {
//     const textid = document.getElementById('b');
//     const textInner = textid.innerText;
//     const textidflo = parseFloat(textInner);

//     const nexttextid = document.getElementById('increase');
//     const nextInner = nexttextid.innerText;
//     const nexttxtflo = parseFloat(nextInner);


//     const btnfrends = document.getElementById('bta');
//     const btnfr = document.getElementById('btb');
//     const numericvl = 199;


//     const afterCalculation = nexttxtflo + textidflo;


//     // validation0
//     if (nexttxtflo => 1) {
//         btnfr.removeAttribute('disabled');
//     } else {
//         btnfr.addAttribute('disabled')

//     }

//     const afterSet = document.getElementById('increase');
//     const afterinner = afterSet.innerText;
//     afterSet.innerText = afterCalculation;

// });


// document.getElementById('c').addEventListener('click', function () {
//     const textid = document.getElementById('d');
//     const textInner = textid.innerText;
//     const textidflo = parseFloat(textInner);

//     const nexttextid = document.getElementById('increase');
//     const nextInner = nexttextid.innerText;
//     const nexttxtflo = parseFloat(nextInner);

//     const btnfrends = document.getElementById('bta');
//     const btnfr = document.getElementById('btb');
//     const numericvl = 199;


//     const afterCalculation = nexttxtflo + textidflo;



//     // validation0
//     if (nexttxtflo => 1) {
//         btnfr.removeAttribute('disabled');
//     } else {
//         btnfr.addAttribute('disabled')

//     }
//     // validation2




//     const afterSet = document.getElementById('increase');
//     const afterinner = afterSet.innerText;
//     afterSet.innerText = afterCalculation;

// });


// document.getElementById('e').addEventListener('click', function () {
//     const textid = document.getElementById('f');
//     const textInner = textid.innerText;
//     const textidflo = parseFloat(textInner);

//     const nexttextid = document.getElementById('increase');
//     const nextInner = nexttextid.innerText;
//     const nexttxtflo = parseFloat(nextInner);

//     const btnfrends = document.getElementById('bta');
//     const btnfr = document.getElementById('btb');
//     const numericvl = 199;


//     const afterCalculation = nexttxtflo + textidflo;

//     // validation0
//     if (nexttxtflo => 1) {
//         btnfr.removeAttribute('disabled');
//     } else {
//         btnfr.addAttribute('disabled')

//     }


//     const afterSet = document.getElementById('increase');
//     const afterinner = afterSet.innerText;
//     afterSet.innerText = afterCalculation;

// });



// document.getElementById('g').addEventListener('click', function () {
//     const textid = document.getElementById('h');
//     const textInner = textid.innerText;
//     const textidflo = parseFloat(textInner);

//     const nexttextid = document.getElementById('increase');
//     const nextInner = nexttextid.innerText;
//     const nexttxtflo = parseFloat(nextInner);



//     const btnfrends = document.getElementById('bta');
//     const btnfr = document.getElementById('btb');
//     const numericvl = 199;

//     const afterCalculation = nexttxtflo + textidflo;

//     // validation0
//     if (nexttxtflo => 1) {
//         btnfr.removeAttribute('disabled');
//     } else {
//         btnfr.addAttribute('disabled')

//     }
//     // validation2


//     const afterSet = document.getElementById('increase');
//     const afterinner = afterSet.innerText;
//     afterSet.innerText = afterCalculation;

// });



// document.getElementById('i').addEventListener('click', function () {
//     const textid = document.getElementById('j');
//     const textInner = textid.innerText;
//     const textidflo = parseFloat(textInner);

//     const nexttextid = document.getElementById('increase');
//     const nextInner = nexttextid.innerText;
//     const nexttxtflo = parseFloat(nextInner);



//     const btnfrends = document.getElementById('bta');
//     const btnfr = document.getElementById('btb');
//     const numericvl = 199;

//     const afterCalculation = nexttxtflo + textidflo;

//     // validation0

//     if (nexttxtflo => 1) {
//         btnfr.removeAttribute('disabled')

//     } else {
//         btnfr.addAttribute('disabled');
//     }

//     // validation2

//     const afterSet = document.getElementById('increase');
//     const afterinner = afterSet.innerText;


//     afterSet.innerText = afterCalculation;

// });



