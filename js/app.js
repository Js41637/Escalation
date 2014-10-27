/* Main Angular Module for Escelation Plugin
 * 
 * Sets up main angular module called 'tf2' that hooks into the
 * various controllers and directives to run the site
 */
angular.module('tf2', [
	'ui.bootstrap',
	'TF2.controllers.main',
	'TF2.directives.lazyload',
	'TF2.directives.iteminfo'
	])

// Not much here