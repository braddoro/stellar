isc.defineClass("Navigation", "Menu").addProperties({
	initWidget: function(initData){
		this.MainMenu = isc.myMenu.create({
			title: "Menu",
			items: [
//				{title: "Items", click: "isc.Items.create({width: \"95%\", height: \"95%\"})"},
//				{isSeparator: true},
				{title: "Class", click: "isc.Class.create({title: \"Classes\", width: 200, height: 300})"},
				{title: "Division", click: "isc.Division.create({title: \"Divisions\", width: 200, height: 300})"},
				{title: "Group", click: "isc.Group.create({title: \"Groups\", width: 200, height: 300})"}
			]
		});
		this.menuBar = isc.MenuBar.create({
			height: 20,
			width: 50,
			menus: [this.MainMenu]
		});
	}
});
