function magic() {
    event.preventDefault();  // Prevent form submission (avoid page reload)
    let text1 = parseInt(document.querySelector('#bdy-day').value);
    let text2 = parseInt(document.querySelector('#bday-month').value);
    let text3 = parseInt(document.querySelector('#bdy-yr1').value);
    let text4 = (document.querySelector('#bdy-yr2').value);
    let txt4Num = parseInt(text4);
    let text5 = document.querySelector('#smsn');
    let textSms = document.querySelector('#text-sms');
    let letter1 = document.querySelector('#lt1');
    let letter2 = document.querySelector('#lt2');
    let letter3 = document.querySelector('#lt3');
    let letter4 = document.querySelector('#lt4');
    let letter5 = document.querySelector('#lt5');
    let letter6 = document.querySelector('#lt6');
    let letter7 = document.querySelector('#lt7');
    let letter8 = document.querySelector('#lt8');
    let letter9 = document.querySelector('#lt9');
    let letter10 = document.querySelector('#lt10');
    let letter11 = document.querySelector('#lt11');
    let letter12 = document.querySelector('#lt12');
    let letter13 = document.querySelector('#lt13');
    let letter14 = document.querySelector('#lt14');
    let letter15 = document.querySelector('#lt15');
    let letter16 = document.querySelector('#lt16');
    let txthght = document.querySelector('#txtCell');
    let borderResult = document.querySelector('#resborder');

    let row1 = document.querySelector('#r1');
    let row2 = document.querySelector('#r2');
    let row3 = document.querySelector('#r3');
    let row4 = document.querySelector('#r4');
    let col1 = document.querySelector('#c1');
    let col2 = document.querySelector('#c2');
    let col3 = document.querySelector('#c3');
    let col4 = document.querySelector('#c4');
    let dia1 = document.querySelector('#d1');
    let dia2 = document.querySelector('#d2');
    let corn4 = document.querySelector('#corner4');
    let mid1 = document.querySelector('#mid-1');
    let mid2 = document.querySelector('#mid-2');
    let cent4 = document.querySelector('#center4');
    let alternate1 = document.querySelector('#alt1');
    let alternate2 = document.querySelector('#alt2');
    let topleft = document.querySelector('#tleft');
    let topright = document.querySelector('#tright');
    let bottomleft = document.querySelector('#bleft');
    let bottomright = document.querySelector('#bright');
    let centralleft = document.querySelector('#cleft');
    let centralright = document.querySelector('#cright');

    if (text1 && text2 && text3 && text4) {
        let sum = text1 + text2 + text3 + txt4Num;
        textSms.style.visibility = 'visible';
        letter1.style.display = "block";
        letter2.style.display = "block";
        letter3.style.display = "block";
        letter4.style.display = "block";
        letter5.style.display = "block";
        letter6.style.display = "block";
        letter7.style.display = "block";
        letter8.style.display = "block";
        letter9.style.display = "block";
        letter10.style.display = "block";
        letter11.style.display = "block";
        letter12.style.display = "block";
        letter13.style.display = "block";
        letter14.style.display = "block";
        letter15.style.display = "block";
        letter16.style.display = "block";

        text5.style.fontWeight = 'bold';
        text5.style.color = 'rebeccapurple';
        text5.style.fontSize = "15px";
        text5.value = sum;
        txthght.style.visibility = 'visible';
        txthght.style.backgroundColor = "#FFF574";
        borderResult.style.visibility = 'visible';

        row1.style.visibility = 'visible';
        row2.style.visibility = 'visible';
        row3.style.visibility = 'visible';
        row4.style.visibility = 'visible';
        col1.style.visibility = 'visible';
        col2.style.visibility = 'visible';
        col3.style.visibility = 'visible';
        col4.style.visibility = 'visible';
        dia1.style.visibility = 'visible';
        dia2.style.visibility = 'visible';
        corn4.style.visibility = 'visible';
        mid1.style.visibility = 'visible';
        mid2.style.visibility = 'visible';
        cent4.style.visibility = 'visible';
        alternate1.style.visibility = 'visible';
        alternate2.style.visibility = 'visible';
        topleft.style.visibility = 'visible';
        topright.style.visibility = 'visible';
        bottomleft.style.visibility = 'visible';
        bottomright.style.visibility = 'visible';
        centralleft.style.visibility = 'visible';
        centralright.style.visibility = 'visible';
        document.querySelector('#b1').value = text1;
        document.querySelector('#b2').value = text2;
        document.querySelector('#b3').value = text3;
        document.querySelector('#b4').value = txt4Num;
        document.querySelector('#b5').value = txt4Num + 1;
        document.querySelector('#b6').value = text3 - 1;
        document.querySelector('#b7').value = text2 - 3;
        document.querySelector('#b8').value = text1 + 3;
        document.querySelector('#b9').value = text2 - 2;
        document.querySelector('#b10').value = text1 + 2;
        document.querySelector('#b11').value = txt4Num + 2;
        document.querySelector('#b12').value = text3 - 2;
        document.querySelector('#b13').value = text3 + 1;
        document.querySelector('#b14').value = txt4Num - 1;
        document.querySelector('#b15').value = text1 + 1;
        document.querySelector('#b16').value = text2 - 1;
        document.querySelector('#b1').style.fontWeight = 'bold';
        document.querySelector('#b2').style.fontWeight = 'bold';
        document.querySelector('#b3').style.fontWeight = 'bold';
        document.querySelector('#b4').style.fontWeight = 'bold';
        document.querySelector('#b5').style.fontWeight = 'bold';
        document.querySelector('#b6').style.fontWeight = 'bold';
        document.querySelector('#b7').style.fontWeight = 'bold';
        document.querySelector('#b8').style.fontWeight = 'bold';
        document.querySelector('#b9').style.fontWeight = 'bold';
        document.querySelector('#b10').style.fontWeight = 'bold';
        document.querySelector('#b11').style.fontWeight = 'bold';
        document.querySelector('#b12').style.fontWeight = 'bold';
        document.querySelector('#b13').style.fontWeight = 'bold';
        document.querySelector('#b14').style.fontWeight = 'bold';
        document.querySelector('#b15').style.fontWeight = 'bold';
        document.querySelector('#b16').style.fontWeight = 'bold';



        let span1 = document.querySelector('#sp1');
        span1.innerHTML = `&nbsp;&nbsp; ${text1} + ${text2} + ${text3} + ${txt4Num} = ${sum}`;
        span1.style.fontWeight = 'normal';
        span1.style.letterSpacing = '2px';

        let span2 = document.querySelector('#sp2');
        span2.innerHTML = `&nbsp;&nbsp; ${txt4Num + 1} + ${text3 - 1} + ${text2 - 3} + ${text1 + 3} = ${sum}`;
        span2.style.fontWeight = 'normal';
        span2.style.letterSpacing = '2px';

        let span3 = document.querySelector('#sp3');
        span3.innerHTML = `&nbsp;&nbsp; ${text2 - 2} + ${text1 + 2} + ${txt4Num + 2} + ${text3 - 2} = ${sum}`;
        span3.style.fontWeight = 'normal';
        span3.style.letterSpacing = '2px';

        let span4 = document.querySelector('#sp4');
        span4.innerHTML = `&nbsp;&nbsp; ${text3 + 1} + ${txt4Num - 1} + ${text1 + 1} + ${text2 - 1} = ${sum}`;
        span4.style.fontWeight = 'normal';
        span4.style.letterSpacing = '2px';

        let span5 = document.querySelector('#sp5');
        span5.innerHTML = `&nbsp;&nbsp; ${text1} + ${txt4Num + 1} + ${text2 - 2} + ${text3 + 1} = ${sum}`;
        span5.style.fontWeight = 'normal';
        span5.style.letterSpacing = '2px';

        let span6 = document.querySelector('#sp6');
        span6.innerHTML = `&nbsp;&nbsp; ${text2} + ${text3 - 1} + ${text1 + 2} + ${txt4Num - 1} = ${sum}`;
        span6.style.fontWeight = 'normal';
        span6.style.letterSpacing = '2px';

        let span7 = document.querySelector('#sp7');
        span7.innerHTML = `&nbsp;&nbsp; ${text3} + ${text2 - 3} + ${txt4Num + 2} + ${text1 + 1} = ${sum}`;
        span7.style.fontWeight = 'normal';
        span7.style.letterSpacing = '2px';

        let span8 = document.querySelector('#sp8');
        span8.innerHTML = `&nbsp;&nbsp; ${txt4Num} + ${text1 + 3} + ${text3 - 2} + ${text2 - 1} = ${sum}`;
        span8.style.fontWeight = 'normal';
        span8.style.letterSpacing = '2px';

        let span9 = document.querySelector('#sp9');
        span9.innerHTML = `&nbsp;&nbsp; ${text1} + ${text3 - 1} + ${txt4Num + 2} + ${text2 - 1} = ${sum}`;
        span9.style.fontWeight = 'normal';
        span9.style.letterSpacing = '2px';

        let span10 = document.querySelector('#sp10');
        span10.innerHTML = `&nbsp;&nbsp; ${txt4Num} + ${text2 - 3} + ${text1 + 2} + ${text3 + 1} = ${sum}`;
        span10.style.fontWeight = 'normal';
        span10.style.letterSpacing = '2px';

        let span11 = document.querySelector('#sp11');
        span11.innerHTML = `&nbsp;&nbsp; ${text1} + ${txt4Num} + ${text3 + 1} + ${text2 - 1} = ${sum}`;
        span11.style.fontWeight = 'normal';
        span11.style.letterSpacing = '2px';

        let span12 = document.querySelector('#sp12');
        span12.innerHTML = `&nbsp;&nbsp; ${text2} + ${text3} + ${txt4Num - 1} + ${text1 + 1} = ${sum}`;
        span12.style.fontWeight = 'normal';
        span12.style.letterSpacing = '2px';

        let span13 = document.querySelector('#sp13');
        span13.innerHTML = `&nbsp;&nbsp; ${txt4Num + 1} + ${text2 - 2} + ${text1 + 3} + ${text3 - 2} = ${sum}`;
        span13.style.fontWeight = 'normal';
        span13.style.letterSpacing = '2px';

        let span14 = document.querySelector('#sp14');
        span14.innerHTML = `&nbsp;&nbsp; ${text3 - 1} + ${text2 - 3} + ${text1 + 2} + ${txt4Num + 2} = ${sum}`;
        span14.style.fontWeight = 'normal';
        span14.style.letterSpacing = '2px';

        let span15 = document.querySelector('#sp15');
        span15.innerHTML = `&nbsp;&nbsp; ${text2} + ${txt4Num + 1} + ${text3 - 2} + ${text1 + 1} = ${sum}`;
        span15.style.fontWeight = 'normal';
        span15.style.letterSpacing = '2px';

        let span16 = document.querySelector('#sp16');
        span16.innerHTML = `&nbsp;&nbsp; ${text3} + ${text1 + 3} + ${text2 - 2} + ${txt4Num - 1} = ${sum}`;
        span16.style.fontWeight = 'normal';
        span16.style.letterSpacing = '2px';

        let span17 = document.querySelector('#sp17');
        span17.innerHTML = `&nbsp;&nbsp; ${text1} + ${text2} + ${txt4Num + 1} + ${text3 - 1} = ${sum}`;
        span17.style.fontWeight = 'normal';
        span17.style.letterSpacing = '2px';

        let span18 = document.querySelector('#sp18');
        span18.innerHTML = `&nbsp;&nbsp; ${text3} + ${txt4Num} + ${text2 - 3} + ${text1 + 3} = ${sum}`;
        span18.style.fontWeight = 'normal';
        span18.style.letterSpacing = '2px';

        let span19 = document.querySelector('#sp19');
        span19.innerHTML = `&nbsp;&nbsp; ${text2 - 2} + ${text1 + 2} + ${text3 + 1} + ${txt4Num - 1} = ${sum}`;
        span19.style.fontWeight = 'normal';
        span19.style.letterSpacing = '2px';

        let span20 = document.querySelector('#sp20');
        span20.innerHTML = `&nbsp;&nbsp; ${txt4Num + 2} + ${text3 - 2} + ${text1 + 1} + ${text2 - 1} = ${sum}`;
        span20.style.fontWeight = 'normal';
        span20.style.letterSpacing = '2px';

        let span21 = document.querySelector('#sp21');
        span21.innerHTML = `&nbsp;&nbsp; ${txt4Num + 1} + ${text3 - 1} + ${text2 - 2} + ${text1 + 2} = ${sum}`;
        span21.style.fontWeight = 'normal';
        span21.style.letterSpacing = '2px';

        let span22 = document.querySelector('#sp22');
        span22.innerHTML = `&nbsp;&nbsp; ${text2 - 3} + ${text1 + 3} + ${txt4Num + 2} + ${text3 - 2} = ${sum}`;
        span22.style.fontWeight = 'normal';
        span22.style.letterSpacing = '2px';


    }
    else {
        textSms.style.visibility = 'hidden';
        letter1.style.display = 'none';
        letter2.style.display = 'none';
        letter3.style.display = 'none';
        letter4.style.display = 'none';
        letter5.style.display = 'none';
        letter6.style.display = 'none';
        letter7.style.display = 'none';
        letter8.style.display = 'none';
        letter9.style.display = 'none';
        letter10.style.display = 'none';
        letter11.style.display = 'none';
        letter12.style.display = 'none';
        letter13.style.display = 'none';
        letter14.style.display = 'none';
        letter15.style.display = 'none';
        letter16.style.display = 'none';

        txthght.style.visibility = 'hidden';
        borderResult.style.visibility = 'hidden';

        row1.style.visibility = 'hidden';
        row2.style.visibility = 'hidden';
        row3.style.visibility = 'hidden';
        row4.style.visibility = 'hidden';
        col1.style.visibility = 'hidden';
        col2.style.visibility = 'hidden';
        col3.style.visibility = 'hidden';
        col4.style.visibility = 'hidden';
        dia1.style.visibility = 'hidden';
        dia2.style.visibility = 'hidden';
        corn4.style.visibility = 'hidden';
        mid1.style.visibility = 'hidden';
        mid2.style.visibility = 'hidden';
        cent4.style.visibility = 'hidden';
        alternate1.style.visibility = 'hidden';
        alternate2.style.visibility = 'hidden';
        topleft.style.visibility = 'hidden';
        topright.style.visibility = 'hidden';
        bottomleft.style.visibility = 'hidden';
        bottomright.style.visibility = 'hidden';
        centralleft.style.visibility = 'hidden';
        centralright.style.visibility = 'hidden';
    }
}

function changeColor1() {
    let box1 = document.querySelector('#b1');
    let box2 = document.querySelector('#b2');
    let box3 = document.querySelector('#b3');
    let box4 = document.querySelector('#b4');
    let row1 = document.querySelector('#r1');
    row1.style.backgroundColor = "#FFF574";
    row1.style.fontWeight = "bold";
    box1.style.backgroundColor = "#FFF574";
    box2.style.backgroundColor = "#FFF574";
    box3.style.backgroundColor = "#FFF574";
    box4.style.backgroundColor = "#FFF574";
    box1.style.fontSize = "16px";
    box2.style.fontSize = "16px";
    box3.style.fontSize = "16px";
    box4.style.fontSize = "16px";
    box1.style.border = "none";
    box2.style.border = "none";
    box3.style.border = "none";
    box4.style.border = "none";
}

function getBackColor1() {
    let box1 = document.querySelector('#b1');
    let box2 = document.querySelector('#b2');
    let box3 = document.querySelector('#b3');
    let box4 = document.querySelector('#b4');
    let row1 = document.querySelector('#r1');
    row1.style.backgroundColor = "transparent";
    row1.style.fontWeight = "normal";
    box1.style.backgroundColor = "white";
    box2.style.backgroundColor = "white";
    box3.style.backgroundColor = "white";
    box4.style.backgroundColor = "white";
    box1.style.fontSize = "14px";
    box2.style.fontSize = "14px";
    box3.style.fontSize = "14px";
    box4.style.fontSize = "14px";
    box1.style.border = "none";
    box2.style.border = "none";
    box3.style.border = "none";
    box4.style.border = "none";
}
function changeColor2() {
    let box5 = document.querySelector('#b5');
    let box6 = document.querySelector('#b6');
    let box7 = document.querySelector('#b7');
    let box8 = document.querySelector('#b8');
    let row2 = document.querySelector('#r2');
    row2.style.backgroundColor = "#FFF574";
    row2.style.fontWeight = "bold";
    box5.style.backgroundColor = "#FFF574";
    box6.style.backgroundColor = "#FFF574";
    box7.style.backgroundColor = "#FFF574";
    box8.style.backgroundColor = "#FFF574";
    box5.style.fontSize = "16px";
    box6.style.fontSize = "16px";
    box7.style.fontSize = "16px";
    box8.style.fontSize = "16px";
    box5.style.border = "none";
    box6.style.border = "none";
    box7.style.border = "none";
    box8.style.border = "none";
}

function getBackColor2() {
    let box5 = document.querySelector('#b5');
    let box6 = document.querySelector('#b6');
    let box7 = document.querySelector('#b7');
    let box8 = document.querySelector('#b8');
    let row2 = document.querySelector('#r2');
    row2.style.backgroundColor = "transparent";
    row2.style.fontWeight = "normal";
    box5.style.backgroundColor = "white";
    box6.style.backgroundColor = "white";
    box7.style.backgroundColor = "white";
    box8.style.backgroundColor = "white";
    box5.style.fontSize = "14px";
    box6.style.fontSize = "14px";
    box7.style.fontSize = "14px";
    box8.style.fontSize = "14px";
    box5.style.border = "none";
    box6.style.border = "none";
    box7.style.border = "none";
    box8.style.border = "none";
}
function changeColor3() {
    let box9 = document.querySelector('#b9');
    let box10 = document.querySelector('#b10');
    let box11 = document.querySelector('#b11');
    let box12 = document.querySelector('#b12');
    let row3 = document.querySelector('#r3');
    row3.style.backgroundColor = "#FFF574";
    row3.style.fontWeight = "bold";
    box9.style.backgroundColor = "#FFF574";
    box10.style.backgroundColor = "#FFF574";
    box11.style.backgroundColor = "#FFF574";
    box12.style.backgroundColor = "#FFF574";
    box9.style.fontSize = "16px";
    box10.style.fontSize = "16px";
    box11.style.fontSize = "16px";
    box12.style.fontSize = "16px";
    box9.style.border = "none";
    box10.style.border = "none";
    box11.style.border = "none";
    box12.style.border = "none";
}

function getBackColor3() {
    let box9 = document.querySelector('#b9');
    let box10 = document.querySelector('#b10');
    let box11 = document.querySelector('#b11');
    let box12 = document.querySelector('#b12');
    let row3 = document.querySelector('#r3');
    row3.style.backgroundColor = "transparent";
    row3.style.fontWeight = "normal";
    box9.style.backgroundColor = "white";
    box10.style.backgroundColor = "white";
    box11.style.backgroundColor = "white";
    box12.style.backgroundColor = "white";
    box9.style.fontSize = "14px";
    box10.style.fontSize = "14px";
    box11.style.fontSize = "14px";
    box12.style.fontSize = "14px";
    box9.style.border = "none";
    box10.style.border = "none";
    box11.style.border = "none";
    box12.style.border = "none";
}
function changeColor4() {
    let box13 = document.querySelector('#b13');
    let box14 = document.querySelector('#b14');
    let box15 = document.querySelector('#b15');
    let box16 = document.querySelector('#b16');
    let row4 = document.querySelector('#r4');
    row4.style.backgroundColor = "#FFF574";
    row4.style.fontWeight = "bold";
    box13.style.backgroundColor = "#FFF574";
    box14.style.backgroundColor = "#FFF574";
    box15.style.backgroundColor = "#FFF574";
    box16.style.backgroundColor = "#FFF574";
    box13.style.fontSize = "16px";
    box14.style.fontSize = "16px";
    box15.style.fontSize = "16px";
    box16.style.fontSize = "16px";
    box13.style.border = "none";
    box14.style.border = "none";
    box15.style.border = "none";
    box16.style.border = "none";
}

function getBackColor4() {
    let box13 = document.querySelector('#b13');
    let box14 = document.querySelector('#b14');
    let box15 = document.querySelector('#b15');
    let box16 = document.querySelector('#b16');
    let row4 = document.querySelector('#r4');
    row4.style.backgroundColor = "transparent";
    row4.style.fontWeight = "normal";
    box13.style.backgroundColor = "white";
    box14.style.backgroundColor = "white";
    box15.style.backgroundColor = "white";
    box16.style.backgroundColor = "white";
    box13.style.fontSize = "14px";
    box14.style.fontSize = "14px";
    box15.style.fontSize = "14px";
    box16.style.fontSize = "14px";
    box13.style.border = "none";
    box14.style.border = "none";
    box15.style.border = "none";
    box16.style.border = "none";
}
function changeColor5() {
    let box1 = document.querySelector('#b1');
    let box5 = document.querySelector('#b5');
    let box9 = document.querySelector('#b9');
    let box13 = document.querySelector('#b13');
    let row5 = document.querySelector('#c1');
    row5.style.backgroundColor = "#FFF574";
    row5.style.fontWeight = "bold";
    box1.style.backgroundColor = "#FFF574";
    box5.style.backgroundColor = "#FFF574";
    box9.style.backgroundColor = "#FFF574";
    box13.style.backgroundColor = "#FFF574";
    box1.style.fontSize = "16px";
    box5.style.fontSize = "16px";
    box9.style.fontSize = "16px";
    box13.style.fontSize = "16px";
    box1.style.border = "none";
    box5.style.border = "none";
    box9.style.border = "none";
    box13.style.border = "none";
}

function getBackColor5() {
    let box1 = document.querySelector('#b1');
    let box5 = document.querySelector('#b5');
    let box9 = document.querySelector('#b9');
    let box13 = document.querySelector('#b13');
    let row5 = document.querySelector('#c1');
    row5.style.backgroundColor = "transparent";
    row5.style.fontWeight = "normal";
    box1.style.backgroundColor = "white";
    box5.style.backgroundColor = "white";
    box9.style.backgroundColor = "white";
    box13.style.backgroundColor = "white";
    box1.style.fontSize = "14px";
    box5.style.fontSize = "14px";
    box9.style.fontSize = "14px";
    box13.style.fontSize = "14px";
    box1.style.border = "none";
    box5.style.border = "none";
    box9.style.border = "none";
    box13.style.border = "none";
}
function changeColor6() {
    let box2 = document.querySelector('#b2');
    let box6 = document.querySelector('#b6');
    let box10 = document.querySelector('#b10');
    let box14 = document.querySelector('#b14');
    let row6 = document.querySelector('#c2');
    row6.style.backgroundColor = "#FFF574";
    row6.style.fontWeight = "bold";
    box2.style.backgroundColor = "#FFF574";
    box6.style.backgroundColor = "#FFF574";
    box10.style.backgroundColor = "#FFF574";
    box14.style.backgroundColor = "#FFF574";
    box2.style.fontSize = "16px";
    box6.style.fontSize = "16px";
    box10.style.fontSize = "16px";
    box14.style.fontSize = "16px";
    box2.style.border = "none";
    box6.style.border = "none";
    box10.style.border = "none";
    box14.style.border = "none";
}

function getBackColor6() {
    let box2 = document.querySelector('#b2');
    let box6 = document.querySelector('#b6');
    let box10 = document.querySelector('#b10');
    let box14 = document.querySelector('#b14');
    let row6 = document.querySelector('#c2');
    row6.style.backgroundColor = "transparent";
    row6.style.fontWeight = "normal";
    box2.style.backgroundColor = "white";
    box6.style.backgroundColor = "white";
    box10.style.backgroundColor = "white";
    box14.style.backgroundColor = "white";
    box2.style.fontSize = "14px";
    box6.style.fontSize = "14px";
    box10.style.fontSize = "14px";
    box14.style.fontSize = "14px";
    box2.style.border = "none";
    box6.style.border = "none";
    box10.style.border = "none";
    box14.style.border = "none";
}
function changeColor7() {
    let box3 = document.querySelector('#b3');
    let box7 = document.querySelector('#b7');
    let box11 = document.querySelector('#b11');
    let box15 = document.querySelector('#b15');
    let row7 = document.querySelector('#c3');
    row7.style.backgroundColor = "#FFF574";
    row7.style.fontWeight = "bold";
    box3.style.backgroundColor = "#FFF574";
    box7.style.backgroundColor = "#FFF574";
    box11.style.backgroundColor = "#FFF574";
    box15.style.backgroundColor = "#FFF574";
    box3.style.fontSize = "16px";
    box7.style.fontSize = "16px";
    box11.style.fontSize = "16px";
    box15.style.fontSize = "16px";
    box3.style.border = "none";
    box7.style.border = "none";
    box11.style.border = "none";
    box15.style.border = "none";
}

function getBackColor7() {
    let box3 = document.querySelector('#b3');
    let box7 = document.querySelector('#b7');
    let box11 = document.querySelector('#b11');
    let box15 = document.querySelector('#b15');
    let row7 = document.querySelector('#c3');
    row7.style.backgroundColor = "transparent";
    row7.style.fontWeight = "normal";
    box3.style.backgroundColor = "white";
    box7.style.backgroundColor = "white";
    box11.style.backgroundColor = "white";
    box15.style.backgroundColor = "white";
    box3.style.fontSize = "14px";
    box7.style.fontSize = "14px";
    box11.style.fontSize = "14px";
    box15.style.fontSize = "14px";
    box3.style.border = "none";
    box7.style.border = "none";
    box11.style.border = "none";
    box15.style.border = "none";
}
function changeColor8() {
    let box4 = document.querySelector('#b4');
    let box8 = document.querySelector('#b8');
    let box12 = document.querySelector('#b12');
    let box16 = document.querySelector('#b16');
    let row8 = document.querySelector('#c4');
    row8.style.backgroundColor = "#FFF574";
    row8.style.fontWeight = "bold";
    box4.style.backgroundColor = "#FFF574";
    box8.style.backgroundColor = "#FFF574";
    box12.style.backgroundColor = "#FFF574";
    box16.style.backgroundColor = "#FFF574";
    box4.style.fontSize = "16px";
    box8.style.fontSize = "16px";
    box12.style.fontSize = "16px";
    box16.style.fontSize = "16px";
    box4.style.border = "none";
    box8.style.border = "none";
    box12.style.border = "none";
    box16.style.border = "none";
}

function getBackColor8() {
    let box4 = document.querySelector('#b4');
    let box8 = document.querySelector('#b8');
    let box12 = document.querySelector('#b12');
    let box16 = document.querySelector('#b16');
    let row8 = document.querySelector('#c4');
    row8.style.backgroundColor = "transparent";
    row8.style.fontWeight = "normal";
    box4.style.backgroundColor = "white";
    box8.style.backgroundColor = "white";
    box12.style.backgroundColor = "white";
    box16.style.backgroundColor = "white";
    box4.style.fontSize = "14px";
    box8.style.fontSize = "14px";
    box12.style.fontSize = "14px";
    box16.style.fontSize = "14px";
    box4.style.border = "none";
    box8.style.border = "none";
    box12.style.border = "none";
    box16.style.border = "none";
}
function changeColor9() {
    let box1 = document.querySelector('#b1');
    let box6 = document.querySelector('#b6');
    let box11 = document.querySelector('#b11');
    let box16 = document.querySelector('#b16');
    let row9 = document.querySelector('#d1');
    row9.style.backgroundColor = "#FFF574";
    row9.style.fontWeight = "bold";
    box1.style.backgroundColor = "#FFF574";
    box6.style.backgroundColor = "#FFF574";
    box11.style.backgroundColor = "#FFF574";
    box16.style.backgroundColor = "#FFF574";
    box1.style.fontSize = "16px";
    box6.style.fontSize = "16px";
    box11.style.fontSize = "16px";
    box16.style.fontSize = "16px";
    box1.style.border = "none";
    box6.style.border = "none";
    box11.style.border = "none";
    box16.style.border = "none";
}
function getBackColor9() {
    let box1 = document.querySelector('#b1');
    let box6 = document.querySelector('#b6');
    let box11 = document.querySelector('#b11');
    let box16 = document.querySelector('#b16');
    let row9 = document.querySelector('#d1');
    row9.style.backgroundColor = "transparent";
    row9.style.fontWeight = "normal";
    box1.style.backgroundColor = "white";
    box6.style.backgroundColor = "white";
    box11.style.backgroundColor = "white";
    box16.style.backgroundColor = "white";
    box1.style.fontSize = "14px";
    box6.style.fontSize = "14px";
    box11.style.fontSize = "14px";
    box16.style.fontSize = "14px";
    box1.style.border = "none";
    box6.style.border = "none";
    box11.style.border = "none";
    box16.style.border = "none";
}
function changeColor10() {
    let box4 = document.querySelector('#b4');
    let box7 = document.querySelector('#b7');
    let box10 = document.querySelector('#b10');
    let box13 = document.querySelector('#b13');
    let row10 = document.querySelector('#d2');
    row10.style.backgroundColor = "#FFF574";
    row10.style.fontWeight = "bold";
    box4.style.backgroundColor = "#FFF574";
    box7.style.backgroundColor = "#FFF574";
    box10.style.backgroundColor = "#FFF574";
    box13.style.backgroundColor = "#FFF574";
    box4.style.fontSize = "16px";
    box7.style.fontSize = "16px";
    box10.style.fontSize = "16px";
    box13.style.fontSize = "16px";
    box4.style.border = "none";
    box7.style.border = "none";
    box10.style.border = "none";
    box13.style.border = "none";
}

function getBackColor10() {
    let box4 = document.querySelector('#b4');
    let box7 = document.querySelector('#b7');
    let box10 = document.querySelector('#b10');
    let box13 = document.querySelector('#b13');
    let row10 = document.querySelector('#d2');
    row10.style.backgroundColor = "transparent";
    row10.style.fontWeight = "normal";
    box4.style.backgroundColor = "white";
    box7.style.backgroundColor = "white";
    box10.style.backgroundColor = "white";
    box13.style.backgroundColor = "white";
    box4.style.fontSize = "14px";
    box7.style.fontSize = "14px";
    box10.style.fontSize = "14px";
    box13.style.fontSize = "14px";
    box4.style.border = "none";
    box7.style.border = "none";
    box10.style.border = "none";
    box13.style.border = "none";
}
function changeColor11() {
    let box1 = document.querySelector('#b1');
    let box4 = document.querySelector('#b4');
    let box13 = document.querySelector('#b13');
    let box16 = document.querySelector('#b16');
    let row11 = document.querySelector('#corner4');
    row11.style.backgroundColor = "#FFF574";
    row11.style.fontWeight = "bold";
    box1.style.backgroundColor = "#FFF574";
    box4.style.backgroundColor = "#FFF574";
    box13.style.backgroundColor = "#FFF574";
    box16.style.backgroundColor = "#FFF574";
    box1.style.fontSize = "16px";
    box4.style.fontSize = "16px";
    box13.style.fontSize = "16px";
    box16.style.fontSize = "16px";
    box1.style.border = "none";
    box4.style.border = "none";
    box13.style.border = "none";
    box16.style.border = "none";
}

function getBackColor11() {
    let box1 = document.querySelector('#b1');
    let box4 = document.querySelector('#b4');
    let box13 = document.querySelector('#b13');
    let box16 = document.querySelector('#b16');
    let row11 = document.querySelector('#corner4');
    row11.style.backgroundColor = "transparent";
    row11.style.fontWeight = "normal";
    box1.style.backgroundColor = "white";
    box4.style.backgroundColor = "white";
    box13.style.backgroundColor = "white";
    box16.style.backgroundColor = "white";
    box1.style.fontSize = "14px";
    box4.style.fontSize = "14px";
    box13.style.fontSize = "14px";
    box16.style.fontSize = "14px";
    box1.style.border = "none";
    box4.style.border = "none";
    box13.style.border = "none";
    box16.style.border = "none";
}
function changeColor12() {
    let box6 = document.querySelector('#b6');
    let box7 = document.querySelector('#b7');
    let box10 = document.querySelector('#b10');
    let box11 = document.querySelector('#b11');
    let row12 = document.querySelector('#center4');
    row12.style.backgroundColor = "#FFF574";
    row12.style.fontWeight = "bold";
    box6.style.backgroundColor = "#FFF574";
    box7.style.backgroundColor = "#FFF574";
    box10.style.backgroundColor = "#FFF574";
    box11.style.backgroundColor = "#FFF574";
    box6.style.fontSize = "16px";
    box7.style.fontSize = "16px";
    box10.style.fontSize = "16px";
    box11.style.fontSize = "16px";
    box6.style.border = "none";
    box7.style.border = "none";
    box10.style.border = "none";
    box11.style.border = "none";
}

function getBackColor12() {
    let box6 = document.querySelector('#b6');
    let box7 = document.querySelector('#b7');
    let box10 = document.querySelector('#b10');
    let box11 = document.querySelector('#b11');
    let row12 = document.querySelector('#center4');
    row12.style.backgroundColor = "transparent";
    row12.style.fontWeight = "normal";
    box6.style.backgroundColor = "white";
    box7.style.backgroundColor = "white";
    box10.style.backgroundColor = "white";
    box11.style.backgroundColor = "white";
    box6.style.fontSize = "14px";
    box7.style.fontSize = "14px";
    box10.style.fontSize = "14px";
    box11.style.fontSize = "14px";
    box6.style.border = "none";
    box7.style.border = "none";
    box10.style.border = "none";
    box11.style.border = "none";
}
function changeColor13() {
    let box2 = document.querySelector('#b2');
    let box3 = document.querySelector('#b3');
    let box14 = document.querySelector('#b14');
    let box15 = document.querySelector('#b15');
    let row13 = document.querySelector('#mid-1');
    row13.style.backgroundColor = "#FFF574";
    row13.style.fontWeight = "bold";
    box2.style.backgroundColor = "#FFF574";
    box3.style.backgroundColor = "#FFF574";
    box14.style.backgroundColor = "#FFF574";
    box15.style.backgroundColor = "#FFF574";
    box2.style.fontSize = "16px";
    box3.style.fontSize = "16px";
    box14.style.fontSize = "16px";
    box15.style.fontSize = "16px";
    box2.style.border = "none";
    box3.style.border = "none";
    box14.style.border = "none";
    box15.style.border = "none";
}

function getBackColor13() {
    let box2 = document.querySelector('#b2');
    let box3 = document.querySelector('#b3');
    let box14 = document.querySelector('#b14');
    let box15 = document.querySelector('#b15');
    let row13 = document.querySelector('#mid-1');
    row13.style.backgroundColor = "transparent";
    row13.style.fontWeight = "normal";
    box2.style.backgroundColor = "white";
    box3.style.backgroundColor = "white";
    box14.style.backgroundColor = "white";
    box15.style.backgroundColor = "white";
    box2.style.fontSize = "14px";
    box3.style.fontSize = "14px";
    box14.style.fontSize = "14px";
    box15.style.fontSize = "14px";
    box2.style.border = "none";
    box3.style.border = "none";
    box14.style.border = "none";
    box15.style.border = "none";
}
function changeColor14() {
    let box5 = document.querySelector('#b5');
    let box9 = document.querySelector('#b9');
    let box8 = document.querySelector('#b8');
    let box12 = document.querySelector('#b12');
    let row14 = document.querySelector('#mid-2');
    row14.style.backgroundColor = "#FFF574";
    row14.style.fontWeight = "bold";
    box5.style.backgroundColor = "#FFF574";
    box9.style.backgroundColor = "#FFF574";
    box8.style.backgroundColor = "#FFF574";
    box12.style.backgroundColor = "#FFF574";
    box5.style.fontSize = "16px";
    box9.style.fontSize = "16px";
    box8.style.fontSize = "16px";
    box12.style.fontSize = "16px";
    box5.style.border = "none";
    box9.style.border = "none";
    box8.style.border = "none";
    box12.style.border = "none";
}

function getBackColor14() {
    let box5 = document.querySelector('#b5');
    let box9 = document.querySelector('#b9');
    let box8 = document.querySelector('#b8');
    let box12 = document.querySelector('#b12');
    let row14 = document.querySelector('#mid-2');
    row14.style.backgroundColor = "transparent";
    row14.style.fontWeight = "normal";
    box5.style.backgroundColor = "white";
    box9.style.backgroundColor = "white";
    box8.style.backgroundColor = "white";
    box12.style.backgroundColor = "white";
    box5.style.fontSize = "14px";
    box9.style.fontSize = "14px";
    box8.style.fontSize = "14px";
    box12.style.fontSize = "14px";
    box5.style.border = "none";
    box9.style.border = "none";
    box8.style.border = "none";
    box12.style.border = "none";
}
function changeColor15() {
    let box2 = document.querySelector('#b2');
    let box5 = document.querySelector('#b5');
    let box12 = document.querySelector('#b12');
    let box15 = document.querySelector('#b15');
    let row15 = document.querySelector('#alt1');
    row15.style.backgroundColor = "#FFF574";
    row15.style.fontWeight = "bold";
    box2.style.backgroundColor = "#FFF574";
    box5.style.backgroundColor = "#FFF574";
    box12.style.backgroundColor = "#FFF574";
    box15.style.backgroundColor = "#FFF574";
    box2.style.fontSize = "16px";
    box5.style.fontSize = "16px";
    box12.style.fontSize = "16px";
    box15.style.fontSize = "16px";
    box2.style.border = "none";
    box5.style.border = "none";
    box12.style.border = "none";
    box15.style.border = "none";
}

function getBackColor15() {
    let box2 = document.querySelector('#b2');
    let box5 = document.querySelector('#b5');
    let box12 = document.querySelector('#b12');
    let box15 = document.querySelector('#b15');
    let row15 = document.querySelector('#alt1');
    row15.style.backgroundColor = "transparent";
    row15.style.fontWeight = "normal";
    box2.style.backgroundColor = "white";
    box5.style.backgroundColor = "white";
    box12.style.backgroundColor = "white";
    box15.style.backgroundColor = "white";
    box2.style.fontSize = "14px";
    box5.style.fontSize = "14px";
    box12.style.fontSize = "14px";
    box15.style.fontSize = "14px";
    box2.style.border = "none";
    box5.style.border = "none";
    box12.style.border = "none";
    box15.style.border = "none";
}
function changeColor16() {
    let box3 = document.querySelector('#b3');
    let box8 = document.querySelector('#b8');
    let box9 = document.querySelector('#b9');
    let box14 = document.querySelector('#b14');
    let row16 = document.querySelector('#alt2');
    row16.style.backgroundColor = "#FFF574";
    row16.style.fontWeight = "bold";
    box3.style.backgroundColor = "#FFF574";
    box8.style.backgroundColor = "#FFF574";
    box9.style.backgroundColor = "#FFF574";
    box14.style.backgroundColor = "#FFF574";
    box3.style.fontSize = "16px";
    box8.style.fontSize = "16px";
    box9.style.fontSize = "16px";
    box14.style.fontSize = "16px";
    box3.style.border = "none";
    box8.style.border = "none";
    box9.style.border = "none";
    box14.style.border = "none";
}

function getBackColor16() {
    let box3 = document.querySelector('#b3');
    let box8 = document.querySelector('#b8');
    let box9 = document.querySelector('#b9');
    let box14 = document.querySelector('#b14');
    let row16 = document.querySelector('#alt2');
    row16.style.backgroundColor = "transparent";
    row16.style.fontWeight = "normal";
    box3.style.backgroundColor = "white";
    box8.style.backgroundColor = "white";
    box9.style.backgroundColor = "white";
    box14.style.backgroundColor = "white";
    box3.style.fontSize = "14px";
    box8.style.fontSize = "14px";
    box9.style.fontSize = "14px";
    box14.style.fontSize = "14px";
    box3.style.border = "none";
    box8.style.border = "none";
    box9.style.border = "none";
    box14.style.border = "none";
}
function changeColor17() {
    let box1 = document.querySelector('#b1');
    let box2 = document.querySelector('#b2');
    let box5 = document.querySelector('#b5');
    let box6 = document.querySelector('#b6');
    let row17 = document.querySelector('#tleft');
    row17.style.backgroundColor = "#FFF574";
    row17.style.fontWeight = "bold";
    box1.style.backgroundColor = "#FFF574";
    box2.style.backgroundColor = "#FFF574";
    box5.style.backgroundColor = "#FFF574";
    box6.style.backgroundColor = "#FFF574";
    box1.style.fontSize = "16px";
    box2.style.fontSize = "16px";
    box5.style.fontSize = "16px";
    box6.style.fontSize = "16px";
    box1.style.border = "none";
    box2.style.border = "none";
    box5.style.border = "none";
    box6.style.border = "none";
}

function getBackColor17() {
    let box1 = document.querySelector('#b1');
    let box2 = document.querySelector('#b2');
    let box5 = document.querySelector('#b5');
    let box6 = document.querySelector('#b6');
    let row17 = document.querySelector('#tleft');
    row17.style.backgroundColor = "transparent";
    row17.style.fontWeight = "normal";
    box1.style.backgroundColor = "white";
    box2.style.backgroundColor = "white";
    box5.style.backgroundColor = "white";
    box6.style.backgroundColor = "white";
    box1.style.fontSize = "14px";
    box2.style.fontSize = "14px";
    box5.style.fontSize = "14px";
    box6.style.fontSize = "14px";
    box1.style.border = "none";
    box2.style.border = "none";
    box5.style.border = "none";
    box6.style.border = "none";
}
function changeColor18() {
    let box3 = document.querySelector('#b3');
    let box4 = document.querySelector('#b4');
    let box7 = document.querySelector('#b7');
    let box8 = document.querySelector('#b8');
    let row18 = document.querySelector('#tright');
    row18.style.backgroundColor = "#FFF574";
    row18.style.fontWeight = "bold";
    box3.style.backgroundColor = "#FFF574";
    box4.style.backgroundColor = "#FFF574";
    box7.style.backgroundColor = "#FFF574";
    box8.style.backgroundColor = "#FFF574";
    box3.style.fontSize = "16px";
    box4.style.fontSize = "16px";
    box7.style.fontSize = "16px";
    box8.style.fontSize = "16px";
    box3.style.border = "none";
    box4.style.border = "none";
    box7.style.border = "none";
    box8.style.border = "none";
}

function getBackColor18() {
    let box3 = document.querySelector('#b3');
    let box4 = document.querySelector('#b4');
    let box7 = document.querySelector('#b7');
    let box8 = document.querySelector('#b8');
    let row18 = document.querySelector('#tright');
    row18.style.backgroundColor = "transparent";
    row18.style.fontWeight = "normal";
    box3.style.backgroundColor = "white";
    box4.style.backgroundColor = "white";
    box7.style.backgroundColor = "white";
    box8.style.backgroundColor = "white";
    box3.style.fontSize = "14px";
    box4.style.fontSize = "14px";
    box7.style.fontSize = "14px";
    box8.style.fontSize = "14px";
    box3.style.border = "none";
    box4.style.border = "none";
    box7.style.border = "none";
    box8.style.border = "none";
}
function changeColor19() {
    let box9 = document.querySelector('#b9');
    let box10 = document.querySelector('#b10');
    let box13 = document.querySelector('#b13');
    let box14 = document.querySelector('#b14');
    let row19 = document.querySelector('#bleft');
    row19.style.backgroundColor = "#FFF574";
    row19.style.fontWeight = "bold";
    box9.style.backgroundColor = "#FFF574";
    box10.style.backgroundColor = "#FFF574";
    box13.style.backgroundColor = "#FFF574";
    box14.style.backgroundColor = "#FFF574";
    box9.style.fontSize = "16px";
    box10.style.fontSize = "16px";
    box13.style.fontSize = "16px";
    box14.style.fontSize = "16px";
    box9.style.border = "none";
    box10.style.border = "none";
    box13.style.border = "none";
    box14.style.border = "none";
}

function getBackColor19() {
    let box9 = document.querySelector('#b9');
    let box10 = document.querySelector('#b10');
    let box13 = document.querySelector('#b13');
    let box14 = document.querySelector('#b14');
    let row19 = document.querySelector('#bleft');
    row19.style.backgroundColor = "transparent";
    row19.style.fontWeight = "normal";
    box9.style.backgroundColor = "white";
    box10.style.backgroundColor = "white";
    box13.style.backgroundColor = "white";
    box14.style.backgroundColor = "white";
    box9.style.fontSize = "14px";
    box10.style.fontSize = "14px";
    box13.style.fontSize = "14px";
    box14.style.fontSize = "14px";
    box9.style.border = "none";
    box10.style.border = "none";
    box13.style.border = "none";
    box14.style.border = "none";
}
function changeColor20() {
    let box11 = document.querySelector('#b11');
    let box12 = document.querySelector('#b12');
    let box15 = document.querySelector('#b15');
    let box16 = document.querySelector('#b16');
    let row20 = document.querySelector('#bright');
    row20.style.backgroundColor = "#FFF574";
    row20.style.fontWeight = "bold";
    box11.style.backgroundColor = "#FFF574";
    box12.style.backgroundColor = "#FFF574";
    box15.style.backgroundColor = "#FFF574";
    box16.style.backgroundColor = "#FFF574";
    box11.style.fontSize = "16px";
    box12.style.fontSize = "16px";
    box15.style.fontSize = "16px";
    box16.style.fontSize = "16px";
    box11.style.border = "none";
    box12.style.border = "none";
    box15.style.border = "none";
    box16.style.border = "none";
}

function getBackColor20() {
    let box11 = document.querySelector('#b11');
    let box12 = document.querySelector('#b12');
    let box15 = document.querySelector('#b15');
    let box16 = document.querySelector('#b16');
    let row20 = document.querySelector('#bright');
    row20.style.backgroundColor = "transparent";
    row20.style.fontWeight = "normal";
    box11.style.backgroundColor = "white";
    box12.style.backgroundColor = "white";
    box15.style.backgroundColor = "white";
    box16.style.backgroundColor = "white";
    box11.style.fontSize = "14px";
    box12.style.fontSize = "14px";
    box15.style.fontSize = "14px";
    box16.style.fontSize = "14px";
    box11.style.border = "none";
    box12.style.border = "none";
    box15.style.border = "none";
    box16.style.border = "none";
}
function changeColor21() {
    let box5 = document.querySelector('#b5');
    let box6 = document.querySelector('#b6');
    let box9 = document.querySelector('#b9');
    let box10 = document.querySelector('#b10');
    let row21 = document.querySelector('#cleft');
    row21.style.backgroundColor = "#FFF574";
    row21.style.fontWeight = "bold";
    box5.style.backgroundColor = "#FFF574";
    box6.style.backgroundColor = "#FFF574";
    box9.style.backgroundColor = "#FFF574";
    box10.style.backgroundColor = "#FFF574";
    box5.style.fontSize = "16px";
    box6.style.fontSize = "16px";
    box9.style.fontSize = "16px";
    box10.style.fontSize = "16px";
    box5.style.border = "none";
    box6.style.border = "none";
    box9.style.border = "none";
    box10.style.border = "none";
}

function getBackColor21() {
    let box5 = document.querySelector('#b5');
    let box6 = document.querySelector('#b6');
    let box9 = document.querySelector('#b9');
    let box10 = document.querySelector('#b10');
    let row21 = document.querySelector('#cleft');
    row21.style.backgroundColor = "transparent";
    row21.style.fontWeight = "normal";
    box5.style.backgroundColor = "white";
    box6.style.backgroundColor = "white";
    box9.style.backgroundColor = "white";
    box10.style.backgroundColor = "white";
    box5.style.fontSize = "14px";
    box6.style.fontSize = "14px";
    box9.style.fontSize = "14px";
    box10.style.fontSize = "14px";
    box5.style.border = "none";
    box6.style.border = "none";
    box9.style.border = "none";
    box10.style.border = "none";
}
function changeColor22() {
    let box7 = document.querySelector('#b7');
    let box8 = document.querySelector('#b8');
    let box11 = document.querySelector('#b11');
    let box12 = document.querySelector('#b12');
    let row22 = document.querySelector('#cright');
    row22.style.backgroundColor = "#FFF574";
    row22.style.fontWeight = "bold";
    box7.style.backgroundColor = "#FFF574";
    box8.style.backgroundColor = "#FFF574";
    box11.style.backgroundColor = "#FFF574";
    box12.style.backgroundColor = "#FFF574";
    box7.style.fontSize = "16px";
    box8.style.fontSize = "16px";
    box11.style.fontSize = "16px";
    box12.style.fontSize = "16px";
    box7.style.border = "none";
    box8.style.border = "none";
    box11.style.border = "none";
    box12.style.border = "none";
}

function getBackColor22() {
    let box7 = document.querySelector('#b7');
    let box8 = document.querySelector('#b8');
    let box11 = document.querySelector('#b11');
    let box12 = document.querySelector('#b12');
    let row22 = document.querySelector('#cright');
    row22.style.backgroundColor = "transparent";
    row22.style.fontWeight = "normal";
    box7.style.backgroundColor = "white";
    box8.style.backgroundColor = "white";
    box11.style.backgroundColor = "white";
    box12.style.backgroundColor = "white";
    box7.style.fontSize = "14px";
    box8.style.fontSize = "14px";
    box11.style.fontSize = "14px";
    box12.style.fontSize = "14px";
    box7.style.border = "none";
    box8.style.border = "none";
    box11.style.border = "none";
    box12.style.border = "none";
}