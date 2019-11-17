isc.defineClass("Navigation", "Menu").addProperties({
	initWidget: function(initData){
		this.MainMenu = isc.myMenu.create({
			title: "Menu",
			items: [
				{title: "Class", click: "isc.Class.create({title: \"Classes\"})"},
				{title: "Division", click: "isc.Division.create({title: \"Divisions\"})"},
				{title: "Group", click: "isc.Group.create({title: \"Groups\"})"},
				{isSeparator: true},
				{title: "Item", click: "isc.Item.create({title: \"Items\", width: \"90%\", height: 300})"}
			]
		});
		this.menuBar = isc.MenuBar.create({
			height: 20,
			width: 50,
			menus: [this.MainMenu]
		});
	}
});
