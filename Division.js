isc.defineClass("Division", "myWindow").addProperties({
	top: 25,
	left: 5,
	name: "Division",
	parent: this,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.divisionDS = isc.myDataSource.create({
			dataURL: "Division.php",
			ID: "divisionDS",
			fields:[
				{name: "divisionID", primaryKey: true, type: "sequence", detail: true},
				{name: "divisionName", width: "*", type: "text", validators: [{type: "lengthRange", max: 200}]},
				{name: "lastUpdateDate", detail: true}
			]
		});
		this.divisionLG = isc.myListGrid.create({
			autoFetchData: true,
			dataSource: this.divisionDS,
			ID: "divisionLG",
			parent: this
		});
		this.SearchLayoutVL = isc.VLayout.create({
			members: [this.divisionLG]
		});
		this.addMember(this.SearchLayoutVL);
	}
});
