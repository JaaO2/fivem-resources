fx_version 'cerulean'
game 'gta5'

name "config"
description "config"
author "Life Story Developers"
version "1.0.0"

loadscreen 'html/index.html'
loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'

file 'html/index.html'

shared_scripts {
	'shared/*.js'
}

client_scripts {
	'client/*.js'
}

server_scripts {
	'server/*.js'
}
