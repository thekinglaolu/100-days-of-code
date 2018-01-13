/********************************
 Credit To NevehAllon For The Sample Code on CodePen
 https://codepen.io/CodePenUserName/pen/NwzNEM?editors=0010
 ********************************/

//Makes the grid by listening to the number values in input.
$(function(){
	function makeGrid() {
	  let row = $("#input_height").val();
	  let column = $("#input_width").val();

	  //takes values and uses them to make the apropriate grid
	  for (let i = 0; i < row; i++) {
	    $("#pixel_canvas").append("<tr></tr>");
	    for (let j = 0; j < column; j++) {
	      $("tr")
	        .last()
	        .append("<td></td>");
	    };
	  };
	};

	let myColor = $("#colorPicker").val(); //listens and pulls color value

	//listens for click and inserts color value to css
	let click = $("#pixel_canvas").on("click", "td", function() {
	  let myColor = $("#colorPicker").val();
	  $(this).css("background-color", myColor);
	});

	//listens to the submit button and calls makeGrid function
	let submit;
	submit = $("#sizePicker").submit(function() {
	  makeGrid();
	  return false;
	});

	//Resets the design canvas as it clears the grid
	let reset;
	reset = $("#reset_button").click(function(e){
	  e.preventDefault;
	  $("tr").remove();
	  $("td").remove();
	  $("#input_height").val(1);
	  $("#input_width").val(1);
	});

});