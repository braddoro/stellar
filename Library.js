function copyValues(stringIn){
	var stringOut = "";
	for(var key in stringIn) {
		if (stringIn.hasOwnProperty) {
			let value = stringIn[key];
			if (typeof value !== "undefined" && typeof key !== "undefined") {
				stringOut += key + ": " + value + " - " + typeof(value) + "<br/>";
			}
		}
	}
	return stringOut;
}
function checkPerms(stringIn){
	var retval = false;
	for(var key in isc.userPages){
		if(isc.userPages.hasOwnProperty(key)){
			if(isc.userPages[key] == stringIn){
				return true;
			}
		}
	}
	return retval;
}
