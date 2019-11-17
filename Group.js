isc.defineClass("Group", "myWindow").addProperties({
	name: "Group",
	parent: this,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.groupLG = isc.myListGrid.create({
			dataSource: isc.Shared.groupDS,
			parent: this
		});
		this.localContextMenu = isc.myContextMenu.create({parent: this, callingListGrid: this.groupLG});
		this.SearchLayoutVL = isc.VLayout.create({
			members: [this.groupLG]
		});
		this.addMember(this.SearchLayoutVL);
	}
});
