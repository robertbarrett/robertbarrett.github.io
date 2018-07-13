function printEmail() {
	var em1 = "outlook.com"
	var em2 = "rbarrett"
	var str = em2 + '@' + em1
	document.write(str.link('mailto://' + str));
}
function printPhone() {
	var ph1 = "265"
	var ph2 = "613"
	var ph3 = "3841"
	var str = '(' + ph2 + ')' + ph1 + '-' + ph3
	document.write(str.link('tel://' + str));
}
