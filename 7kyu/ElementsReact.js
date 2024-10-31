// My solution
let React = require("react");

const greetingElement = createElement('Hello World'); 
const fruitsListElement = createUnorderedList(['apples', 'oranges', 'bananas']);

function createElement(content, tag = 'div', props = {}) {
  return React.createElement(tag, props, content);
}

function createUnorderedList(list) { 
  // Create a React unordered list using the map method and key prop to give a unique identifier.
  const listItems = list.map((item, index) => 
    React.createElement('li', { key: index }, item)
  );
  
  // Return the unordered list element
  return React.createElement('ul', null, ...listItems);
}