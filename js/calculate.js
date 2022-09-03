let display_section = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button")); // this access the individual arrays in the class 'button'

buttons.map((button) => {
  button.addEventListener("click", (el) => {
    // el is element ... it could be anything
    doCalculate(el); // doCalculate is just a function created
  });
});

function doCalculate(e) {
  // e could be anything
  // console.log(e.target);  to target the specific elements

  if(display_section.innerText == '0') { // this says that if it is 0 then when you click a new number , the 0 disappears and takes up the new number
      display_section.innerText = '';
  }

  switch (
    e.target.innerText // this targets the innertext of the elements  i.e the numbers
  ) {
    case 'AC':
      display_section.innerText = "0"; // this is means that once AC is clicked the value on display must be zero. no matter the number that was clicked prior to clicking AC
      break;

    case 'DEL' :
        // the if statement says that only delete the values from the back one by one if the display is not showing error
        if(display_section.innerText != 'Error') {
            display_section.innerText = display_section.innerText.slice(0, -1) // this indicates that the numbers should be deleted one by one from the back
        }
        // this says that if the display section has no value or is = to nothing , display 0
       if ( display_section.innerText == ''){
            display_section.innerText = '0';
        }
        break;

    case '=' :
        // this says try to evaluate the equation but if JS can't then return error
        try {
            display_section.innerText = eval(display_section.innerText) // eval() is a js function that calculates whatever is in the brackets
        } catch {
            display_section.innerText = 'Error';
        } 
        break;

    default:
        // the if statement says that if the display is not showing error then carry on with the function
        if (display_section.innerText != 'Error') {
            display_section.innerText += e.target.innerText // this adds the e.target.innerText to the display_section.innertext which is currently set to 0 . i.e without the + in between the 2 declarations, multiple numbers cannot be typed at the same time e.g 100 0r 02354
        }
        break;
  }
}
