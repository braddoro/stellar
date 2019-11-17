isc.defineClass("myContextMenu", "myMenu").addProperties({
	parent: this,
	callingListGrid: null,
	data: [
		{title: "Add",
			click: function(target, item, menu, colNum){
				if(menu.callingListGrid.canEdit){
					menu.callingListGrid.startEditingNew();
				}
			}
		},
		{title: "Edit",
			click: function(target, item, menu, colNum){
				var record = menu.callingListGrid.getSelectedRecord();
				var row = menu.callingListGrid.getRowNum(record);
				menu.callingListGrid.rowDoubleClick(record, row);
			}
		},
		{title: "Refresh",
			click: function(target, item, menu, colNum){
				menu.callingListGrid.invalidateCache();
			}
		},
		{title: "Copy Row",
			click: function(target, item, menu, colNum){
				var record;
				var text = "";
				if(menu.callingListGrid.anySelected()){
					record = menu.callingListGrid.getSelectedRecord();
					isc.say(copyValues(record));
				}
			}
		},
		{title: "Delete",
			click: function(target, item, menu, colNum){
				var record;
				if(menu.callingListGrid.anySelected() && menu.callingListGrid.canEdit){
					record = menu.callingListGrid.getSelectedRecord();
					menu.callingListGrid.removeData(record);
				}
			}
		}
	]
});
