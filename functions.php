function holamundo_shortcode( $atts , $content = null, $tag) {
return '<h1>'.ucfirst(substr($tag,0,3)).' '.ucfirst(substr($tag,4,-1)).'</h1>';
}

//attach it to the wordpress system
add_shortcode( 'holamundo', 'holamundo_shortcode' );