//get from local storage
// recall getItem "gets the key"
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
const div1 = $(document)[0].body.children[1].children[0];
const div2 = $(document)[0].body.children[1].children[1];
const div3 = $(document)[0].body.children[1].children[2];
const div4 = $(document)[0].body.children[1].children[3];
const div5 = $(document)[0].body.children[1].children[4];
const div6 = $(document)[0].body.children[1].children[5];
const div7 = $(document)[0].body.children[1].children[6];
const div8 = $(document)[0].body.children[1].children[7];
const div9 = $(document)[0].body.children[1].children[8];


const text1 = div1.children[1];
const text2 = div2.children[1];
const text3 = div3.children[1];
const text4 = div4.children[1];
const text5 = div5.children[1];
const text6 = div6.children[1];
const text7 = div7.children[1];
const text8 = div8.children[1];
const text9 = div9.children[1];


$(".saveBtn").click(function () {
	let textValue = $(this).siblings(".description").val();
	// console.log(textValue);
	let timeKey = $(this).parent().attr("id");
	// console.log(timeKey);
	localStorage.setItem(timeKey, textValue);
});


