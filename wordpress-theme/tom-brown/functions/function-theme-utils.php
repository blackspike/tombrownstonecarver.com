<?php

if (!defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

/**
 * Add a link to the WP Toolbar
 */

function bs_toolbar_link($wp_admin_bar)
{
  $args = array(
    'id' => 'bs_site_link',
    'title' => 'View Live Site',
    'href' => 'https://www.tombrownstonecarver.com/',
    'meta' => array(
      'target' => '_blank',
      'class' => 'bs-site-link',
      'title' => 'View Live Site'
    )
  );
  $wp_admin_bar->add_node($args);
}
add_action('admin_bar_menu', 'bs_toolbar_link', 999);


/**
 * Add colour theme to admin
 */

add_action('admin_head', 'bs_custom_header_colour');

function bs_custom_header_colour()
{
  echo '<style>
    #wpadminbar {
      background-color: #D2891B;
    }
  </style>';
}


/*
* Add Menus
*/

function register_custom_menus()
{
  register_nav_menus(
    array(
      'primary_menu' => ('Primary Menu'),
      'handheld_menu' => ('Handheld Menu'),
      'footer_menu' => ('Footer Menu'),
    )
  );
}
add_action('init', 'register_custom_menus');
