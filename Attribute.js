isc.defineClass("Attribute", "myWindow").addProperties({
	left: 20,
	top: 30,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.attributeLG = isc.myListGrid.create({
			dataSource: isc.myAttribute.data,
			initialSort: [{property: "attributeName", direction: "ascending"}],
			parent: this
		});
		this.localContextMenu = isc.myContextMenu.create({parent: this, callingListGrid: this.attributeLG});
		this.attributeVL = isc.myVLayout.create({
			members: [this.attributeLG]
		});
		this.addMember(this.attributeVL);
	}
});
