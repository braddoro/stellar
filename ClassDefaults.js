isc.defineClass("myWindow", "Window").addProperties({
	canDragReposition: true,
	canDragResize: true,
	defaultHeight: 300,
	defaultWidth: 500,
	dismissOnEscape: false,
	edgeMarginSize: 5,
	keepInParentRect: true,
	left: 25,
	showCorner: true,
	showMaximizeButton: true,
	showShadow: true,
	title: "",
	top: 25,
	resized: function(){
		console.log("Resized");
		console.log("Title.: " + this.title);
		console.log("Width.: " + this.width);
		console.log("Height: " + this.height);
		console.log("Left..: " + this.left);
		console.log("Top...: " + this.top);
		console.log("MarginB: " + this.layoutBottomMargin);
	},
	moved: function(){
		console.log("Moved");
		console.log("Title.: " + this.title);
		console.log("Width.: " + this.width);
		console.log("Height: " + this.height);
		console.log("Left..: " + this.left);
		console.log("Top...: " + this.top);
	}
});
isc.defineClass("myVLayout", "VLayout").addProperties({
	height: "100%"
});
isc.defineClass("myHLayout", "HLayout").addProperties({
	width: "100%"
});
isc.defineClass("myListGrid", "ListGrid").addProperties({
	alternateRecordStyles: true,
	autoFetchData: true,
	autoFitData: "both",
	canEdit: true,
	height: 375,
	leaveScrollbarGap: false,
	selectionStyle: "single",
	showFilterEditor: true,
	dataArrived: function(startRow, endRow){
		this.selectSingleRecord(startRow);
		this.recordClick(this, startRow, startRow);
	},
	rowContextClick: function(record, rowNum, colNum){
		this.parent.localContextMenu.showContextMenu();
		return false;
	},
	rowDoubleClick: function(record, recordNum, fieldNum, keyboardGenerated) {
		this.startEditing(recordNum);
	},
	doubleClick: function(){
		if(this.getTotalRows() === 0){
			this.startEditingNew();
		}
		return true;
	}
});
isc.defineClass("myDataSource", "DataSource").addProperties({
	cacheAllData: true,
	dataFormat: "json",
	dataProtocol:"postParams",
	// operationBindings:[{operationType:"fetch", dataProtocol:"postParams"}],
	transformRequest: function(dsRequest){
		var superClassArguments = this.Super("transformRequest", dsRequest);
		var newProperties = {operationType: dsRequest.operationType};
		return isc.addProperties({}, superClassArguments, newProperties);
	}
});
isc.defineClass("myLabel", "Label").addProperties({
	baseStyle: "headerItem",
	height: 1,
	margin: 2,
	valign: "top",
	width: 500
});
isc.defineClass("myMenu", "Menu").addProperties({
	showIcons: false,
	shadowDepth: 10,
	cellHeight: 16,
	width: 24
});
isc.defineClass("myIButton", "IButton").addProperties({
	autoFit: true
});
