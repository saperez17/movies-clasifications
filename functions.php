function holamundo_shortcode( $atts , $content = null ) {
return '<h1>'.$content.'</h1>';
}

//attach it to the wordpress system
add_shortcode( 'holamundo', 'holamundo_shortcode' );