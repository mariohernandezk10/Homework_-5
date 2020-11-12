
setInterval(function() {
    $(".today").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1)




$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

// set to local storage
// local storage has a key and value
// the value = user inputs
// the key = time

$(".saveBtn").click(function () {
	let textValue = $(this).siblings(".description").val();
	let timeKey = $(this).parent().attr("id");
    localStorage.setItem(timeKey, textValue);
});

// console.log(div8);

let arrayTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];

let value = arrayTime.forEach(function () {});
console.log(value[i])






const text1 = div1.children[1];
const text2 = div2.children[1];
const text3 = div3.children[1];
const text4 = div4.children[1];
const text5 = div5.children[1];
const text6 = div6.children[1];
const text7 = div7.children[1];
const text8 = div8.children[1];
const text9 = div9.children[1];
