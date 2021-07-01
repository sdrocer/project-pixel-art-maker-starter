// Select color input
let selected_color = document.getElementById('colorPicker');

// Select Grid size form
let sizePicker_form = document.querySelector('form');

// Select size input
let selected_height = document.getElementById('inputHeight');
let selected_width = document.getElementById('inputWidth');

// Select table element
let pixel_canvas = document.querySelector('table');

// Button for clearing the pixel_canvas
let clButton = document.querySelector('button');

clButton.addEventListener('click', function() {
    Array.from(pixel_canvas.getElementsByTagName("td")).forEach(cell=>{
        cell.style.backgroundColor="";
    })
})

// Lets the user continuously draw when mousedown

let drawOn = false;

pixel_canvas.addEventListener('mousedown', function(evt) {
    drawOn = true;
  });

pixel_canvas.addEventListener('mouseover', function(evt) {
	if (evt.target.nodeName === 'TD' && drawOn) {
		evt.target.style.backgroundColor = selected_color.value;
	}
});

pixel_canvas.addEventListener('mouseup', function(evt) {
    drawOn = false;
  });

// When size is submitted by the user, call makeGrid()
sizePicker_form.addEventListener('submit', function (evt) {
    evt.preventDefault(); 
    makeGrid(selected_height, selected_width); 
});
    
// Definition of the makeGrid function
function makeGrid(selected_height, selected_width){
    pixel_canvas.innerHTML='';

    for(let y = 0; y < selected_height.value; y++) {
        var myrow = pixel_canvas.insertRow();
        for(let x = 0; x < selected_width.value; x++) {
            var mycell = myrow.insertCell();
            mycell.addEventListener('mousedown', function(evt) {
                evt.target.style.backgroundColor = selected_color.value;
            });
        };
    };
};
