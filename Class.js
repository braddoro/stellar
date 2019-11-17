isc.defineClass("Class", "myWindow").addProperties({
	name: "Class",
	parent: this,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.classDS = isc.myDataSource.create({
			dataURL: "Class.php",
			fields:[
				{name: "classID", primaryKey: true, type: "sequence", detail: true},
				{name: "className", width: "*", type: "text", validators: [{type: "lengthRange", max: 200}]},
				{name: "lastUpdateDate", detail: true}
			]
		});
		this.classLG = isc.myListGrid.create({
			dataSource: this.classDS,
			parent: this
		});
		this.localContextMenu = isc.myContextMenu.create({parent: this, callingListGrid: this.classLG});
		this.SearchLayoutVL = isc.VLayout.create({
			members: [this.classLG]
		});
		this.addMember(this.SearchLayoutVL);
	}
});
