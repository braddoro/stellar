isc.defineClass("Group", "myWindow").addProperties({
	// name: "Group",
	// parent: this,
	left: 280,
	top: 70,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.groupLG = isc.myListGrid.create({
			dataSource: isc.myGroup.data,
			sortByMappedValue: true,
			initialSort: [{property: "groupName", direction: "ascending"}],
			parent: this
		});
		this.localContextMenu = isc.myContextMenu.create({parent: this, callingListGrid: this.groupLG});
		this.groupVL = isc.myVLayout.create({
			members: [this.groupLG]
		});
		this.addMember(this.groupVL);
	}
});
