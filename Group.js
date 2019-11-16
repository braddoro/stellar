isc.defineClass("Group", "myWindow").addProperties({
	top: 25,
	left: 5,
	name: "Group",
	parent: this,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.groupDS = isc.myDataSource.create({
			dataURL: "Group.php",
			ID: "groupDS",
			fields:[
				{name: "groupID", primaryKey: true, type: "sequence", detail: true},
				{name: "groupName", width: "*", type: "text", validators: [{type: "lengthRange", max: 200}]},
				{name: "lastUpdateDate", detail: true}
			]
		});
		this.groupLG = isc.myListGrid.create({
			autoFetchData: true,
			dataSource: this.groupDS,
			ID: "groupLG",
			parent: this
		});
		this.SearchLayoutVL = isc.VLayout.create({
			members: [this.groupLG]
		});
		this.addMember(this.SearchLayoutVL);
	}
});
