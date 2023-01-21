<?php

/**
 * ACF
 */

 if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Site Settings',
		'menu_title'	=> 'Site Settings',
		'menu_slug' 	=> 'site-settings',
		'capability'	=> 'edit_posts',
        'icon_url' => 'dashicons-admin-generic',
        'show_in_graphql' => true,
        'position' => 2
	));

}
