$(function(){ //DOM Ready

    var gridster = $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [100, 100],
        serialize_params: function($w, wgd) {
        return {
          col: wgd.col,
          row: wgd.row
        };
      }
    }).data('gridster');
   
    // add
    $('#add').bind('click',function() {
        /*
        creating a new list-item element and adding 'new_widget' as 
        its class. We also define this widget will have a "sizex" and 
        "sizey" of 1
        Lastly we define the column and row we would like our widget 
        to be positioned
        */
        gridster.add_widget("<li class='new_widget'></li>", 1, 1, 5, 2);
        return false;
    });

    // resize
    $('#resize').bind('click',function() {
        /*
        We use a selector to indicate wich widget we would like to 
        resize. We then say this widget will have a "sizex" and a 
        "sizey" of 2.
        */
        gridster.resize_widget($('.new_widget'), 2, 2);
        return false;
    });  
  
    // remove
    $('#remove').bind('click',function() {
        /*
        We use a selector to indicate wich widget we would like to 
        remove. 
        */
        gridster.remove_widget($('.new_widget'));
    });
    
    // check
    $('#check').bind('click',function() {
        console.log(gridster.serialize());
        return false;
    });
    
    // disable
    $('#disable').bind('click',function() {
        gridster.disable();
    });
  
    // enable
    $('#enable').bind('click',function() {
        gridster.enable();
    });
  
});