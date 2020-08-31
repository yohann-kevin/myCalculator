let btnPage1 = document.getElementById('btnPage1');
let btnPage2 = document.getElementById('btnPage2');

let pageOne = document.getElementById('page1');
let pageTwo = document.getElementById('page2');

export function test() {
    console.log('plop');
}

export function views() {
    page1();
    btnPage1.addEventListener("click", page1);
    btnPage2.addEventListener("click", page2);
}

function page1() {
    openPage(pageOne, btnPage1);
}

function page2() {
    openPage(pageTwo, btnPage2);
}

function openPage(pageName, link) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // tablinks = document.getElementsByClassName("tablink");
    // for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].style.color = "";
    // }

    pageName.style.display = "block";
    // link.style.color = "white";
}