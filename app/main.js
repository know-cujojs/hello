define({ // Wire spec

	root: { $ref: 'dom.first!body' },

	controller: {
		create: 'hello/app/controller',
		properties: {
			node: { $ref: 'dom.first!span', at: 'view' }
		},
		on: { view: { 'input': 'update' } }
	},

	view: {
		render: {
			template: { module: 'text!hello/app/template.html' },
			replace: { module: 'i18n!hello/app/strings.js' }
		},
		insert: { last: 'root' }
	},

	plugins: [
		{ module: 'wire/dom' },
		{ module: 'wire/dom/render' },
		{ module: 'wire/on' }
	]
});