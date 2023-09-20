
// Get the canvas element and its context
var canvas = document.getElementById('drawing-board');
var context = canvas.getContext('2d');

// Set initial drawing color and line width
var color = '#000000';
var lineWidth = 5;

// Flag to track drawing state
var isDrawing = false;

// Function to start drawing
function startDrawing(event) {
    isDrawing = true;

    // Get the coordinates of the mouse pointer
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;

    // Begin a new drawing path
    context.beginPath();

    // Set the starting point of the path
    context.moveTo(x, y);
}

// Function to continue drawing
function continueDrawing(event) {
    if (isDrawing) {
        // Get the coordinates of the mouse pointer
        var x = event.pageX - canvas.offsetLeft;
        var y = event.pageY - canvas.offsetTop;

        // Draw a line to the current mouse position
        context.lineTo(x, y);

        // Set the line color and width
        context.strokeStyle = color;
        context.lineWidth = lineWidth;

        // Stroke the path to display the line
        context.stroke();
    }
}

// Function to stop drawing
function stopDrawing() {
    isDrawing = false;
}

// Function to clear the drawing board
function clearDrawingBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to set the selected color
function setSelectedColor(selectedColor) {
    // Remove the "selected" class from all color options
    var colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(function (option) {
        option.classList.remove('selected');
    });

    // Add the "selected" class to the clicked color option
    selectedColor.classList.add('selected');

    // Get the background color of the selected color option
    color = selectedColor.style.backgroundColor;
}

// Event listeners for drawing actions
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', continueDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

// Event listener for clear button
var clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', clearDrawingBoard);

// Event listener for color options
var colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach(function (option) {
    option.addEventListener('click', function () {
        setSelectedColor(this);
    });
});