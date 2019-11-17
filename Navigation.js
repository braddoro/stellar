isc.defineClass("Navigation", "Menu").addProperties({
	initWidget: function(initData){
		this.MainMenu = isc.myMenu.create({
			title: "Menu",
			items: [
				{title: "Chapter", click: "isc.Chapter.create({title: \"Chapters\"})"},
				{title: "Class", click: "isc.Class.create({title: \"Classes\"})"},
				{title: "Division", click: "isc.Division.create({title: \"Divisions\"})"},
				{title: "Group", click: "isc.Group.create({title: \"Groups\"})"},
				{title: "Item", click: "isc.Item.create({title: \"Items\", width: \"90%\", height: \"90%\"})"},
				{title: "Attribute", click: "isc.Attribute.create({title: \"Attributes\"})"},
				{isSeparator: true},
				{title: "Scratch Pad", click: "isc.ShowInfo.create({title: \"Scratch Pad\", info: \"\", width: \"33%\", top: 100, left: 100, canEdit: true, autoCenter: false})"}
			]
		});
		this.menuBar = isc.MenuBar.create({
			height: 20,
			width: 50,
			menus: [this.MainMenu]
		});
	}
});
