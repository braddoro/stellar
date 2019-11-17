isc.defineClass("Division", "myWindow").addProperties({
	name: "Division",
	parent: this,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.divisionDS = isc.myDataSource.create({
			dataURL: "Division.php",
			fields:[
				{name: "divisionID", primaryKey: true, type: "sequence", detail: true},
				{name: "divisionName", width: "*", type: "text", validators: [{type: "lengthRange", max: 200}]},
				{name: "lastUpdateDate", detail: true}
			]
		});
		this.divisionLG = isc.myListGrid.create({
			dataSource: this.divisionDS,
			parent: this
		});
		this.localContextMenu = isc.myContextMenu.create({parent: this, callingListGrid: this.divisionLG});
		this.SearchLayoutVL = isc.VLayout.create({
			members: [this.divisionLG]
		});
		this.addMember(this.SearchLayoutVL);
	}
});
