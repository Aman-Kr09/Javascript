// Here’s a **summary of DOM in JavaScript** along with **common functions and examples**:

// ---

// ## 🧠 What is the DOM?

// **DOM (Document Object Model)** is a tree-like structure that represents the content of an HTML page as objects that JavaScript can access and manipulate.

// Every HTML element becomes a **node** in the DOM (elements, attributes, text, etc.)

// ---

// ## 📌 Accessing Elements in the DOM

// ### 1. `document.getElementById(id)`

// Returns a single element by its ID.

// ```js
// let title = document.getElementById("main-title");
// ```

// ### 2. `document.getElementsByClassName(className)`

// Returns a live HTMLCollection of elements.

// ```js
// let items = document.getElementsByClassName("item");
// ```

// ### 3. `document.getElementsByTagName(tagName)`

// Returns all elements of a specific tag.

// ```js
// let paras = document.getElementsByTagName("p");
// ```

// ### 4. `document.querySelector(selector)`

// Returns the first element that matches the CSS selector.

// ```js
// let heading = document.querySelector(".heading");
// ```

// ### 5. `document.querySelectorAll(selector)`

// Returns all matching elements (NodeList).

// ```js
// let allLinks = document.querySelectorAll("a");
// ```

// ---

// ## 🔧 DOM Manipulation Functions

// ### 1. `.innerHTML` – Change or get HTML content

// ```js
// document.getElementById("demo").innerHTML = "Hello!";
// ```

// ### 2. `.textContent` – Only get/set plain text

// ```js
// element.textContent = "Just text!";
// ```

// ### 3. `.style` – Change CSS styles

// ```js
// element.style.color = "blue";
// ```

// ### 4. `.setAttribute(attr, value)` – Add/change attributes

// ```js
// img.setAttribute("src", "image.jpg");
// ```

// ### 5. `.classList.add() / remove() / toggle()`

// ```js
// div.classList.add("active");
// div.classList.remove("hidden");
// div.classList.toggle("open");
// ```

// ### 6. `.createElement()` – Create new element

// ```js
// let newDiv = document.createElement("div");
// ```

// ### 7. `.appendChild()` – Add a node to another

// ```js
// document.body.appendChild(newDiv);
// ```

// ### 8. `.remove()` – Remove an element

// ```js
// element.remove();
// ```

// ---

// ## 🖱️ Handling Events

// ```js
// button.addEventListener("click", function() {
//   alert("Button clicked!");
// });
// ```

// Other common events:

// * `"mouseover"`
// * `"keydown"`
// * `"submit"`

// ---

// ## ✅ Example: Add a new list item

// ```js
// let ul = document.getElementById("myList");
// let li = document.createElement("li");
// li.textContent = "New Item";
// ul.appendChild(li);
// ```

// ---

// ## 🔚 In Short:

// | Task              | Function                            |
// | ----------------- | ----------------------------------- |
// | Get Element by ID | `getElementById()`                  |
// | Change HTML       | `.innerHTML`                        |
// | Change Style      | `.style.color = "red"`              |
// | Handle Event      | `.addEventListener("click", func)`  |
// | Create Element    | `createElement()` + `appendChild()` |
