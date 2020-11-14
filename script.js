setInterval(function() {
    $(".today").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1);

let hourNow = moment().hour();



$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


$(".saveBtn").click(function () {
	let textValue = $(this).siblings(".description").val();
	let timeKey = $(this).parent().attr("id");
    localStorage.setItem(timeKey, textValue);
});




let arrayTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(hourNow);



for (let i = 0; i < arrayTime.length; i++) {
	if (hourNow < arrayTime[i]) {
		$("#" + arrayTime[i])
			.removeClass("present")
            .addClass("future");
            
	} else if (hourNow > arrayTime[i]) {
		$("#" + arrayTime[i])
			.removeClass("present")
			.addClass("past");
	}
}




