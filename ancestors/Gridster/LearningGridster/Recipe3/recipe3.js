$(function(){ //DOM Ready

    var gridster = $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [100, 100],
        max_size_x:1,
        serialize_params: function($w, wgd) {
        return {
          col: wgd.col,
          row: wgd.row
        };
      }

    }).data('gridster');
   
    $('#check').bind('click',function() {
        console.log(gridster.serialize());
        return false;
    });
  
});