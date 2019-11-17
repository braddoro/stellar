isc.defineClass("Chapter", "myWindow").addProperties({
	left: 20,
	top: 30,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.chapterLG = isc.myListGrid.create({
			dataSource: isc.myChapter.data,
			initialSort: [{property: "chapterName", direction: "ascending"}],
			parent: this
		});
		this.localContextMenu = isc.myContextMenu.create({parent: this, callingListGrid: this.chapterLG});
		this.chapterVL = isc.myVLayout.create({
			members: [this.chapterLG]
		});
		this.addMember(this.chapterVL);
	}
});
