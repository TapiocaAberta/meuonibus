Alloy.Globals.setupWindow($.win);

var favorites = Alloy.Collections.favoritesCollection

var args = arguments[0] || {};
var model = args.model;

function setBusProperties()
{
	if(model) 
	{
		$.nome.text = model.get("nome");
		$.numero.text = model.get("numero"),
		$.sentido.text = model.get("sentido");
		
		var horarios = model.get("horarios");
		$.semana.text = horarios.semana;
		$.sabado.text = horarios.sabado;
		$.domingo.text = horarios.domingo;
	}
}

function addFavorite()
{
	favorites.add(model);
	favorites.trigger('change');
}

function removeFavorite()
{
	favorites.remove(model);
	favorites.trigger('change');
}

setBusProperties();