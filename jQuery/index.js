// 149. What is jQuery?
// jQuery is a lightweight JavaScript library that simplifies HTML DOM tree traversal, event handling, animation, and AJAX.
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


// 150. How to Incorporate jQuery into Websites
// You can add jQuery via CDN or by downloading it.
// CDN Method:
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
// Local File:
// <script src="js/jquery.min.js"></script>


// 151. How Minification Works to Reduce File Size
// Minification removes unnecessary characters from code (spaces, comments) without changing functionality.
// Example:
// // Original
// function hello() {
//   console.log("Hello World");
// }
// // Minified
// function hello(){console.log("Hello World")}


// 152. Selecting Elements with jQuery
// You can use CSS-style selectors to grab elements.
// $('#id')          // By ID
// $('.class')       // By class
// $('div')          // By tag


// 153. Manipulating Styles with jQuery
// Use .css() to get/set style properties.
// $('#box').css('color', 'red');          // Set color
// var color = $('#box').css('color');     // Get color
// //selecting different class or you can addclass of particular css to queryselecctor by addClass,hasClass function


// 154. Manipulating Text with jQuery
// Use .text() and .html() to manipulate content.
// $('#title').text('New Text');           // Plain text
// $('#title').html('<b>Bold Text</b>');   // HTML content


// 155. Manipulating Attributes with jQuery
// Use .attr() and .removeAttr().
// $('#link').attr('href', 'https://google.com');   // Set href
// $('#link').removeAttr('href');                   // Remove href


// 156. Adding Event Listeners with jQuery
// Use .on() or shorthand methods like .click().
// $('#btn').click(function() {
//   alert('Button clicked!');
// });


// 157. Adding and Removing Elements with jQuery
// Use .append(), .prepend(), .remove().
// $('#list').append('<li>Item</li>');  // Add item at end
// $('#list').prepend('<li>First</li>'); // Add item at start
// $('#list li:first').remove();       // Remove first item
// //after and before add element after and before
// //but append and prepend add that in between front or back that depends on prepend and append
// <h1><button>hello</button>there is heading</h1>  //like this


// 158. Website Animations with jQuery
// Use .hide(), .show(), .fadeIn(), .slideUp() etc.
// $('#box').fadeIn();     // Fade in
// $('#box').slideUp();    // Slide up and hide
// //also use multiple animations together
// $('#box').fadeIn().slideUp().animate({opacity : 0.5});



// //check jQuery language functions on it's documentation