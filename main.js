let button = null;
let color = null;

let bgc = null;
let show_block = null;

let pin = null;

let generate_css = null;

let bg, fnts, fntw, fntc, fntn, brds, brdt, brdc, brdr, pdngh, pdngv, bgh, fntch = null;

const colors = {
    black: "#222222",
    white: "#ffffff",
    blue: "#5bc0d5",
    green: "#5cb85c",
    yellow: "#ed9c28",
    red: "#d9534f",
}

function handleUpdate() {

    let _ = this;

    let child = _.parentNode;
    let parent = child.parentNode;
    let valueToChange = parent.querySelector(".titleGold");

    let change_type = _.id;
    let value = _.value;

    if (change_type === "background") {
        button.style.setProperty('--btn_maker__backgroundColor', value);
        valueToChange.innerHTML = value;
        bg.innerHTML = value + ';';
    } else if (change_type === "fontSize") {
        button.style.setProperty('--btn_maker__fontSize', value + 'px');
        valueToChange.innerHTML = value + 'px';
        fnts.innerHTML = value + 'px;';
    } else if (change_type === "fontWeight") {
        button.style.setProperty('--btn_maker__fontWeight', value);
        valueToChange.innerHTML = value;
        fntw.innerHTML = value + ';';
    } else if (change_type === "fontColor") {
        button.style.setProperty('--btn_maker__fontColor', value);
        valueToChange.innerHTML = value;
        fntc.innerHTML = value + ';';
    } else if (change_type === "fontName") {
        button.style.setProperty('--btn_maker__fontFamily', value);
        valueToChange.innerHTML = value;
        fntn.innerHTML = value + ';';
    } else if (change_type === "borderType") {
        button.style.setProperty('--btn_maker__borderType', value);
        valueToChange.innerHTML = value;
        brdt.innerHTML = value + ';';
    } else if (change_type === "borderColor") {
        button.style.setProperty('--btn_maker__borderColor', value);
        valueToChange.innerHTML = value;
        brdc.innerHTML = value + ';';
    } else if (change_type === "borderSize") {
        button.style.setProperty('--btn_maker__borderSize', value + 'px');
        valueToChange.innerHTML = value + 'px';
        brds.innerHTML = value + 'px ';
    } else if (change_type === "borderRadius") {
        button.style.setProperty('--btn_maker__borderRadius', value + 'px');
        valueToChange.innerHTML = value + 'px';
        brdr.innerHTML = value + 'px;';
    } else if (change_type === "horizontalPadding") {
        button.style.setProperty('--btn_maker__horizontalPadding', value + 'px');
        valueToChange.innerHTML = value + 'px';
        pdngh.innerHTML = value + 'px ';
    } else if (change_type === "verticalPadding") {
        button.style.setProperty('--btn_maker__verticalPadding', value + 'px');
        valueToChange.innerHTML = value + 'px';
        pdngv.innerHTML = value + 'px;';
    } else if (change_type === "backgroundColorHover") {
        button.style.setProperty('--btn_maker__backgroundColorHover', value);
        valueToChange.innerHTML = value;
        bgh.innerHTML = value + ';';
    } else if (change_type === "fontColorHover") {
        button.style.setProperty('--btn_maker__fontColorHover', value);
        valueToChange.innerHTML = value;
        fntch.innerHTML = value + ';';
    } else {
        console.log("ERROR");
    }
}

function copyFunction() {
    const copyText = document.getElementById("generate_css").textContent;
    const textArea = document.createElement("textarea");
    textArea.textContent = copyText;
    show_block.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    alert("copied...");
}

document.addEventListener("DOMContentLoaded", function () {

    pin = document.querySelectorAll(".pin");
    bgc = document.querySelectorAll(".bgc");
    button = document.querySelector(".button");
    show_block = document.querySelector(".show_block");
    generate_css = document.getElementById("generate_css");
    bg = document.querySelector(".bg");
    fnts = document.querySelector(".fnts");
    fntw = document.querySelector(".fntw");
    fntc = document.querySelector(".fntc");
    fntn = document.querySelector(".fntn");
    brds = document.querySelector(".brds");
    brdt = document.querySelector(".brdt");
    brdc = document.querySelector(".brdc");
    brdr = document.querySelector(".brdr");
    pdngh = document.querySelector(".pdngh");
    pdngv = document.querySelector(".pdngv");
    bgh = document.querySelector(".bgh");
    fntch = document.querySelector(".fntch");

    pin = [...pin];
    bgc = [...bgc];

    [].forEach.call(pin, function (el) {
        if (el.type === "color") {
            el.addEventListener("change", handleUpdate);
        } else if (el.type === "range") {
            el.addEventListener("input", handleUpdate);
        } else {
            el.addEventListener("change", handleUpdate);
        }
    });

    [].forEach.call(bgc, function (el) {
        el.addEventListener("click", function () {
            let block_clicked = el.id;
            let bgcolor = colors[block_clicked];
            show_block.style.backgroundColor = bgcolor;
        })
    });

    generate_css.addEventListener("click", copyFunction);

});