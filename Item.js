isc.defineClass("Item", "myWindow").addProperties({
	left: 5,
	top: 25,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.itemDS = isc.myDataSource.create({
			dataURL: "Item.php",
			fields:[
				{name: "itemID", primaryKey: true, type: "sequence", detail: true},
				{name: "groupID", width: 150, type: "integer", optionDataSource: isc.myGroup.data, displayField: "groupName", valueField: "groupID"},
				{name: "itemOrder", width: 80, type: "integer", editorType: "spinner"},
				{name: "itemName", width: "20%", type: "text", validators: [{type: "lengthRange", max: 200}]},
				{name: "itemShortDescription", width: "25%", type: "text", validators: [{type: "lengthRange", max: 500}]},
				{name: "itemLongDescription", width: "33%", type: "text", validators: [{type: "lengthRange", max: 4000}]},
				{name: "lastUpdateDate", detail: true}
			]
		});
		this.itemAttributeDS = isc.myDataSource.create({
			autoFetchData: true,
			dataURL: "ItemAttribute.php",
			fields:[
				{name: "itemAttributeID", primaryKey: true, type: "sequence", detail: true},
				{name: "itemID", width: 150, type: "integer", detail: true},
				{name: "attributeID", width: 150, type: "integer", optionDataSource: isc.myAttribute.data, displayField: "attributeName", valueField: "attributeID"},
				{name: "attributeValue", width: "20%", type: "text", validators: [{type: "lengthRange", max: 200}]},
				{name: "lastUpdateDate", detail: true}
			]
		});
		this.itemLG = isc.myListGrid.create({
			dataSource: this.itemDS,
			height: "66%",
			parent: this,
			rowClick: function(record, recordNum, fieldNum, keyboardGenerated){
				this.parent.itemAttributeLG.invalidateCache();
				this.parent.itemAttributeLG.fetchData({itemID: record.itemID});
				// var title2 = record.class + ' :: ' + record.itemName;
				// if(record.reference > ""){
				// 	title2 += ' :: ' + record.reference;
				// }
				// var note = "No items to show.";
				// if(record.notes > ""){
				// 	note = record.notes;
				// }
				// this.parent.NoteDF.setValue("detail", note);
			},
			startEditingNew: function(newValues, suppressFocus){
				var groupID;
				if(this.anySelected()){
					data = this.getSelectedRecord();
					groupID = data.groupID;
				}
				var rowDefaults = {groupID: groupID};
				var newCriteria = isc.addProperties({}, newValues, rowDefaults);
				return this.Super("startEditingNew", [newCriteria, suppressFocus]);
			},
			rowContextClick: function(record, rowNum, colNum){
				this.parent.itemCM.showContextMenu();
				return false;
			}
		});
		this.itemCM = isc.myContextMenu.create({callingListGrid: this.itemLG, parent: this});

		this.itemAttributeLG = isc.myListGrid.create({
			dataSource: this.itemAttributeDS,
			height: "33%",
			parent: this,
			showFilterEditor: false,
			startEditingNew: function(newValues, suppressFocus){
				var itemID;
				if(this.parent.itemLG.anySelected()){
					itemID = this.parent.itemLG.getSelectedRecord().itemID;
				}
				var rowDefaults = {itemID: itemID};
				var newCriteria = isc.addProperties({}, newValues, rowDefaults);
				return this.Super("startEditingNew", [newCriteria, suppressFocus]);
			},
			rowContextClick: function(record, rowNum, colNum){
				this.parent.itemAttributeCM.showContextMenu();
				return false;
			},
			rowDoubleClick: function(record, recordNum, fieldNum, keyboardGenerated) {
				console.log("rowDoubleClick:");
				this.startEditing(recordNum);
			}
		});
		this.itemAttributeCM = isc.myContextMenu.create({callingListGrid: this.itemAttributeLG, parent: this});
		this.itemVL = isc.myVLayout.create({members: [this.itemLG, this.itemAttributeLG]});
		this.addMember(this.itemVL);
	}
});
