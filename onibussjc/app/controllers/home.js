var favoritesCollection = Alloy.Collections.favoritesCollection;

function updateFavoritesView()
{
	favoritesCollection.fetch();

	var view = $.favoritesBus;
	this.resetView(view);

	//for(var i in )
}

function resetView(view)
{
	for (var d in view.children) 
	{
		if (view.children.hasOwnProperty(d)) 
		{
			view.remove(view.children[d]);
		}
	}
}

favoritesCollection.fetch();