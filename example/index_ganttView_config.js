/*
**	jquery.ganttView display config
**	
**	
*/

// On page load completion
$(function () {
	$("#ganttChart").ganttView({ 
		data: ganttData,
		slideWidth: 900,
		behavior: {
			onClick: function (data) { 
				var msg = "You clicked on an event: { start: " + data.start.toString("M/d/yyyy") + ", end: " + data.end.toString("M/d/yyyy") + " }";
				$("#eventMessage").text(msg);
			},
			onResize: function (data) { 
				var msg = "You resized an event: { start: " + data.start.toString("M/d/yyyy") + ", end: " + data.end.toString("M/d/yyyy") + " }";
				$("#eventMessage").text(msg);
			},
			onDrag: function (data) { 
				var msg = "You dragged an event: { start: " + data.start.toString("M/d/yyyy") + ", end: " + data.end.toString("M/d/yyyy") + " }";
				$("#eventMessage").text(msg);
			}
		}
	});
	
	//$("#ganttChart").ganttView("setSlideWidth", 600);
});
