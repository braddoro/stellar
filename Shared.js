isc.Clients = {
	yesNoDS: isc.DataSource.create({
		clientOnly: true,
		fields: [
			{name: "valueLOV", type: "sequence", primaryKey: true},
			{name: "displayLOV", type: "text"}
		],
		testData:[
			{valueLOV: "Y", displayLOV: "Yes"},
			{valueLOV: "N", displayLOV: "No"}
		]
	})
};
isc.Shared = {
	groupDS: isc.myDataSource.create({
		dataURL: "Group.php",
		fields:[
			{name: "groupID", primaryKey: true, type: "sequence", detail: true},
			{name: "groupName", width: "*", type: "text", validators: [{type: "lengthRange", max: 200}]},
			{name: "lastUpdateDate", detail: true}
		]
	})
};
