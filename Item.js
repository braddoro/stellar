isc.defineClass("Item", "myWindow").addProperties({
	name: "Item",
	parent: this,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.itemDS = isc.myDataSource.create({
			dataURL: "Item.php",
			fields:[
				{name: "itemID", primaryKey: true, type: "sequence", detail: true}, {name: "groupID", width: 150, type: "integer", optionDataSource: isc.Shared.groupDS, displayField: "groupName", valueField: "groupID"},
				{name: "itemName", width: "20%", type: "text", validators: [{type: "lengthRange", max: 200}]},
				{name: "itemShortDescription", width: "25%", type: "text", validators: [{type: "lengthRange", max: 500}]},
				{name: "itemLongDescription", width: "33%", type: "text", validators: [{type: "lengthRange", max: 4000}]},
				{name: "lastUpdateDate", detail: true}
			]
		});
		this.itemLG = isc.myListGrid.create({
			dataSource: this.itemDS,
			parent: this,
			startEditingNew: function(newValues, suppressFocus){
				var groupID;
				if(this.anySelected()){
					data = this.getSelectedRecord();
					groupID = data.groupID;
				}
				var rowDefaults = {groupID: groupID};
				var newCriteria = isc.addProperties({}, newValues, rowDefaults);
				return this.Super("startEditingNew", [newCriteria, suppressFocus]);
			}
		});
		this.localContextMenu = isc.myContextMenu.create({callingListGrid: this.itemLG, parent: this});
		this.itemLayoutVL = isc.VLayout.create({members: [this.itemLG]});
		this.addMember(this.itemLayoutVL);
	}
});
