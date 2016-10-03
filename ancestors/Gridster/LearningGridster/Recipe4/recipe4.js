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
      },
	  draggable: {
          start: function(event, ui){ 
            // your events here
            console.log('started');
          },
          stop: function(event, ui){ 
            // your events here
            console.log('stopped');
          },
          drag: function(event, ui){ 
            // your events here
            console.log('dragging');
          }
        }

    }).data('gridster');
   
    $('#check').bind('click',function() {
        console.log(gridster.serialize());
        return false;
    });
  
});