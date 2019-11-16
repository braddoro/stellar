isc.defineClass("Class", "myWindow").addProperties({
	top: 25,
	left: 5,
	name: "Class",
	parent: this,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.classDS = isc.myDataSource.create({
			dataURL: "Class.php",
			ID: "classDS",
			fields:[
				{name: "classID", primaryKey: true, type: "sequence", detail: true},
				{name: "className", width: "*", type: "text", validators: [{type: "lengthRange", max: 200}]},
				{name: "lastUpdateDate", detail: true}
			]
		});
		this.classLG = isc.myListGrid.create({
			autoFetchData: true,
			dataSource: this.classDS,
			ID: "classLG",
			parent: this
		});
		this.SearchLayoutVL = isc.VLayout.create({
			members: [this.classLG]
		});
		this.addMember(this.SearchLayoutVL);
	}
});
