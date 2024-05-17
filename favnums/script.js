let num = 4;
let URL = "http://numbersapi.com";

// 1.
async function first(){
	let info = await $.getJSON(`${URL}/${num}?json`);
	console.log(info);
}
first();

let favNumbers = [7, 11, 22];
async function second(){
	let info = $.getJSON(`${URL}/${num}?json`);
	console.log(info);
}
second();

async function third(){
	let info = await Promise.all(Array.from({ length: 10 }, () => $.getJSON(`${URL}/${num}?json`)));
	info.forEach(dat => {$('body').append(`<p>${dat.text}</p>`)});
}
