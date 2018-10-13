$("#app").click(function(){
	$("#image").show()
})

$("#dis").click(function(){
	$("#image").hide()
})

$("#both").click(function(){
	$("#image").toggle("slow")
})

$("#fadeClass").click(function(){
	$("image").toggleClass("fade")
})