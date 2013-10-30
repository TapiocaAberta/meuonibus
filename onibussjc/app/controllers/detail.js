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
		
		// $.lblHorarios.text = "Horários"
		var horarios = model.get("horarios");
		$.semana.text = "Dias de Semana: " + horarios.semana;
		$.sabado.text = "Sábados: " + horarios.sabado;
		$.domingo.text = "Domingos: " + horarios.domingo;
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