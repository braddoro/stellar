isc.defineClass("Class", "myWindow").addProperties({
	// name: "Class",
	// parent: this,
	left: 20,
	top: 30,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.classLG = isc.myListGrid.create({
			dataSource: isc.myClass.data,
			initialSort: [{property: "className", direction: "ascending"}],
			parent: this
		});
		this.localContextMenu = isc.myContextMenu.create({parent: this, callingListGrid: this.classLG});
		this.classVL = isc.myVLayout.create({
			members: [this.classLG]
		});
		this.addMember(this.classVL);
	}
});
