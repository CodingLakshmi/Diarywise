var coll = document.getElementsByClassName("collapsible");
var i;
var fontSize;
var fontColor;
var fontFamily;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

function loadTheme() {
	var theme = localStorage.getItem('theme');
	applyChange(theme)
}
window.loadTheme = loadTheme;

function applyChange(classname, tagname) {
	if (tagname) {
		var elements = document.querySelectorAll(tagname);
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			if (element.className === classname) {
				element.className = '';
			} else {
				element.className = classname;
			}
		}
	} else {
		var element = document.body;
		if (element.className === classname) {
			element.className = '';
		} else {
			element.className = classname;
		}
		localStorage.setItem('theme', element.className);
	}
}

function applyStyle() {
	var elements = document.querySelectorAll('textarea');
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		element.className = `${fontSize} ${fontFamily} ${fontColor}`
	}
}

// Color Themes
function pinkColorTheme() {
	applyChange("pink-mode-background");
}
window.pinkColorTheme = pinkColorTheme;

function purpleColorTheme() {
	applyChange("purple-mode-background");
}
window.purpleColorTheme = purpleColorTheme;

function greenColorTheme() {
	applyChange("green-mode-background");
}
window.greenColorTheme = greenColorTheme;

function redColorTheme() {
	applyChange("red-mode-background");
}
window.redColorTheme = redColorTheme;

function blueColorTheme() {
	applyChange("blue-mode-background");
}
window.blueColorTheme = blueColorTheme;

function orangeColorTheme() {
	applyChange("orange-mode-background");
}
window.orangeColorTheme = orangeColorTheme;

function yellowColorTheme() {
	applyChange("yellow-mode-background");
}
window.yellowColorTheme = yellowColorTheme;

function brownColorTheme() {
	applyChange("brown-mode-background");
}
window.brownColorTheme = brownColorTheme;

function blackColorTheme() {
	applyChange("black-mode-background");
}
window.blackColorTheme = blackColorTheme;

// Color Background Themes
function pinkColorBackgroundTheme() {
	applyChange("pink-mode-background-image");
}
window.pinkColorBackgroundTheme = pinkColorBackgroundTheme

function purpleColorBackgroundTheme() {
	applyChange("purple-mode-background-image");
}
window.purpleColorBackgroundTheme = purpleColorBackgroundTheme;

function greenColorBackgroundTheme() {
	applyChange("green-mode-background-image");
}
window.greenColorBackgroundTheme = greenColorBackgroundTheme;

function redColorBackgroundTheme() {
	applyChange("red-mode-background-image");
}
window.redColorBackgroundTheme = redColorBackgroundTheme;

function blueColorBackgroundTheme() {
	applyChange("blue-mode-background-image");
}
window.blueColorBackgroundTheme = blueColorBackgroundTheme;

function orangeColorBackgroundTheme() {
	applyChange("orange-mode-background-image");
}
window.orangeColorBackgroundTheme = orangeColorBackgroundTheme;

function yellowColorBackgroundTheme() {
	applyChange("yellow-mode-background-image");
}
window.yellowColorBackgroundTheme = yellowColorBackgroundTheme;

function brownColorBackgroundTheme() {
	applyChange("brown-mode-background-image");
}
window.brownColorBackgroundTheme = brownColorBackgroundTheme;

function blackColorBackgroundTheme() {
	applyChange("black-mode-background-image");
}
window.blackColorBackgroundTheme = blackColorBackgroundTheme;

// Seasonal Color Themes
function winterColorTheme() {
	applyChange("Winter-mode-background");
}
window.winterColorTheme = winterColorTheme;

function autumnColorTheme() {
	applyChange("Autumn-mode-background");
}
window.autumnColorTheme = autumnColorTheme;

function rainbowColorTheme() {
	applyChange("Rainbow-mode-background");
}
window.rainbowColorTheme = rainbowColorTheme;

function natureColorTheme() {
	applyChange("Nature-mode-background");
}
window.natureColorTheme = natureColorTheme;

function springColorTheme() {
	applyChange("Spring-mode-background");
}
window.springColorTheme = springColorTheme;

function nightColorTheme() {
	applyChange("night-mode-background");
}
window.nightColorTheme = nightColorTheme;

function earthColorTheme() {
	applyChange("Earth-mode-background");
}
window.earthColorTheme = earthColorTheme;

function spaceColorTheme() {
	applyChange("Space-mode-background");
}
window.spaceColorTheme = spaceColorTheme;

function retroColorTheme() {
	applyChange("Retro-mode-background");
}
window.retroColorTheme = retroColorTheme;

// Seasonal Background Themes 
function winterColorBackgroundTheme() {
	applyChange("Winter-mode-background-image");
}
window.winterColorBackgroundTheme = winterColorBackgroundTheme;

function autumnColorBackgroundTheme() {
	applyChange("Autumn-mode-background-image");
}
window.autumnColorBackgroundTheme = autumnColorBackgroundTheme;

function rainbowColorBackgroundTheme() {
	applyChange("Rainbow-mode-background-image");
}
window.rainbowColorBackgroundTheme = rainbowColorBackgroundTheme;

function springColorBackgroundTheme() {
	applyChange("Spring-mode-background-image");
}
window.springColorBackgroundTheme = springColorBackgroundTheme;

function natureColorBackgroundTheme() {
	applyChange("Nature-mode-background-image");
}
window.natureColorBackgroundTheme = natureColorBackgroundTheme;

function nightColorBackgroundTheme() {
	applyChange("Night-mode-background-image");
}
window.nightColorBackgroundTheme = nightColorBackgroundTheme;

function earthColorBackgroundTheme() {
	applyChange("Earth-mode-background-image");
}
window.earthColorBackgroundTheme = earthColorBackgroundTheme;

function spaceColorBackgroundTheme() {
	applyChange("Space-mode-background-image");
}
window.spaceColorBackgroundTheme = spaceColorBackgroundTheme;

function retroColorBackgroundTheme() {
	applyChange("Retro-mode-background-image");
}
window.retroColorBackgroundTheme = retroColorBackgroundTheme;

// Changing font family in Text area
function Helvetica() {
	fontFamily = 'Helvetica-font-family';
	applyStyle();
}
window.Helvetica = Helvetica;

function Futura() {
	fontFamily = 'Futura-font-family'
	applyStyle();
}
window.Futura = Futura;

function Calibri() {
	fontFamily = 'Calibri-font-family'
	applyStyle();
}
window.Calibri = Calibri;

function Garamond() {
	fontFamily = 'Garamond-font-family';
	applyStyle();
}
window.Garamond = Garamond;

function TimesNewRoman() {
	fontFamily = 'Times-New-Roman-font-family';
	applyStyle();
}
window.TimesNewRoman = TimesNewRoman;

function TradeSecrets() {
	fontFamily = 'Trade-Secrets-font-family';
	applyStyle();
}
window.TradeSecrets = TradeSecrets;

function Arial() {
	fontFamily = 'Arial-font-family';
	applyStyle();
}
window.Arial = Arial;

function Cambria() {
	fontFamily = 'Cambria-font-family';
	applyStyle();
}
window.Cambria = Cambria;

function Verdana() {
	fontFamily = 'Verdana-font-family';
	applyStyle();
}
window.Verdana = Verdana;

function Rockwell() {
	fontFamily = 'Rockwell-font-family';
	applyStyle();
}
window.Rockwell = Rockwell;

function FranklinGothic() {
	fontFamily = 'Franklin-Gothic-font-family'
	applyStyle();
}
window.FranklinGothic = FranklinGothic;

// Changing the font sizes in the textarea
function fiveSize() {
	fontSize = 'five-size';
	applyStyle();
}
window.fiveSize = fiveSize;

function tenSize() {
	fontSize = 'ten-size';
	applyStyle();
}
window.tenSize = tenSize;

function twelveSize() {
	fontSize = 'twelve-size';
	applyStyle();
}
window.twelveSize = twelveSize;

function fourteenSize() {
	fontSize = 'fourteen-size';
	applyStyle();
}
window.fourteenSize = fourteenSize;

function sixteenSize() {
	fontSize = 'sixteen-size';
	applyStyle();
}
window.sixteenSize = sixteenSize;

function eighteenSize() {
	fontSize = 'eighteen-size';
	applyStyle();
}
window.eighteenSize = eighteenSize;

function twentySize() {
	fontSize = 'twenty-size';
	applyStyle();
}
window.twentySize = twentySize;

function twentyfiveSize() {
	fontSize = 'twenty-five-size';
	applyStyle();
}
window.twentyfiveSize = twentyfiveSize;

function thirtySize() {
	fontSize = 'thirty-size'
	applyStyle();
}
window.thirtySize = thirtySize;

function fourtySize() {
	fontSize = 'fourty-size'
	applyStyle();
}
window.fourtySize = fourtySize;

// Changing the font colors in the textarea
function blackColor() {
	fontColor = 'black-color';
	applyStyle();
}
window.blackColor = blackColor;

function whiteColor() {
	fontColor = 'white-color';
	applyStyle();
}
window.whiteColor = whiteColor;

function greyColor() {
	fontColor = 'grey-color';
	applyStyle();
}
window.greyColor = greyColor;

function blueColor() {
	fontColor = 'blue-color';
	applyStyle();
}
window.blueColor = blueColor;

function redColor() {
	fontColor = 'red-color';
	applyStyle();
}
window.redColor = redColor;

function purpleColor() {
	fontColor = 'purple-color';
	applyStyle();
}
window.purpleColor = purpleColor;

function pinkColor() {
	fontColor = 'pink-color';
	applyStyle();
}
window.pinkColor = pinkColor;

function greenColor() {
	fontColor = 'green-color';
	applyStyle();
}
window.greenColor = greenColor;

var selDiv = "";

document.addEventListener("DOMContentLoaded", init, false);

function init() {
	// document.querySelector('#files').addEventListener('change', handleFileSelect, false);
	selDiv = document.querySelector("#selectedFiles");
}

function handleFileSelect(e) {

	if (!e.target.files || !window.FileReader) return;

	selDiv.innerHTML = "";

	var files = e.target.files;
	var filesArr = Array.prototype.slice.call(files);
	filesArr.forEach(function (f) {
		var f = files[i];
		if (!f.type.match("image.*")) {
			return;
		}

		var reader = new FileReader();
		reader.onload = function (e) {
			var html = "<img src=\"" + e.target.result + "\">" + f.name + "<br clear=\"left\"/>";
			selDiv.innerHTML += html;
		}
		reader.readAsDataURL(f);
	});

}

async function save(be) {
	// debugger;
	var parent = be.parentElement;
	var textarea = parent.querySelector("textarea");
	var id = textarea.getAttribute('data-id');
	var fileinput = parent.querySelector(".filesInput")
		.files[0];
	var fileReader = new FileReader();
	var fileName = fileinput.name;
	fileReader.onload = function (ev) {
		debugger;
		var fileContents = ev.target.result;
		fetch('/~/DiaryCreatorGroupProject/account/entries', {
				method: 'PATCH',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({
					contents: textarea.value,
					id,
					style: textarea.className,
					file: fileContents,
					fileName
				})
			})
			.then(async resp => {
				const json = await resp.json();
			})
	};

	fileReader.readAsText(fileinput, 'base64')
}

window.save = save;


// Logging out Function
async function logout() {
	const resp = await fetch('/~/DiaryCreatorGroupProject/logout', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' }
	})
	const ans = await resp.json();

	/* This is used to show the answer in the code block. 
	   Delete it when copied over to your code */
}