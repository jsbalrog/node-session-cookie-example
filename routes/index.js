exports.index = function(req, res) {
	// Pass the title and the session to the view.
	res.render('index', { title: 'Index', session: JSON.stringify(req.session) });
};