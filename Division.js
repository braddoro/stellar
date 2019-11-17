isc.defineClass("Division", "myWindow").addProperties({
	// name: "Division",
	// parent: this,
	left: 150,
	top: 50,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.divisionLG = isc.myListGrid.create({
			dataSource: isc.myDivision.data,
			initialSort: [{property: "divisionName", direction: "ascending"}],
			parent: this
		});
		this.localContextMenu = isc.myContextMenu.create({parent: this, callingListGrid: this.divisionLG});
		this.divisionVL = isc.myVLayout.create({
			members: [this.divisionLG]
		});
		this.addMember(this.divisionVL);
	}
});
