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
isc.myChapter = {
	data: isc.myDataSource.create({
		dataURL: "Chapter.php",
		fields:[
			{name: "chapterID", primaryKey: true, type: "sequence", detail: true},
			{name: "chapterOrder", width: "100", type: "text"},
			{name: "chapterName", width: "*", type: "text", validators: [{type: "lengthRange", max: 200}]},
			{name: "lastUpdateDate", detail: true}
		]
	})
};
isc.myClass = {
	data: isc.myDataSource.create({
		dataURL: "Class.php",
		fields:[
			{name: "classID", primaryKey: true, type: "sequence", detail: true},
			{name: "chapterID", width: 150, type: "integer", title: "Chapter", optionDataSource: isc.myChapter.data, displayField: "chapterName", valueField: "chapterID"},
			{name: "classOrder", width: "100", type: "text"},
			{name: "className", width: "*", type: "text", validators: [{type: "lengthRange", max: 200}]},
			{name: "lastUpdateDate", detail: true}
		]
	})
};
isc.myDivision = {
	data: isc.myDataSource.create({
		dataURL: "Division.php",
		fields:[
			{name: "divisionID", primaryKey: true, type: "sequence", detail: true},
			{name: "classID", width: 150, type: "integer", title: "Class", optionDataSource: isc.myClass.classDS, displayField: "className", valueField: "classID"},
			{name: "divisionOrder", width: "100", type: "text"},
			{name: "divisionName", width: "*", type: "text", validators: [{type: "lengthRange", max: 200}]},
			{name: "lastUpdateDate", detail: true}
		]
	})
};
isc.myGroup = {
	data: isc.myDataSource.create({
		dataURL: "Group.php",
		fields:[
			{name: "groupID", primaryKey: true, type: "sequence", detail: true},
			{name: "divisionID", width: 150, type: "integer", title: "Division", optionDataSource: isc.myDivision.divisionDS, displayField: "divisionName", valueField: "divisionID"},
			{name: "groupOrder", width: "100", type: "text"},
			{name: "groupName", width: "*", type: "text", validators: [{type: "lengthRange", max: 200}]},
			{name: "lastUpdateDate", detail: true}
		]
	})
};
isc.myAttribute = {
	data: isc.myDataSource.create({
		dataURL: "Attribute.php",
		fields:[
			{name: "attributeID", primaryKey: true, type: "sequence", detail: true},
			{name: "attributeName", width: "20%", type: "text", validators: [{type: "lengthRange", max: 200}]},
			{name: "lastUpdateDate", detail: true}
		]
	})
};
