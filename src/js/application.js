/** @jsx h */
// ^^^ Tells Babel to call h() for each node

const CARDS = "Emrakul Kozilek Ulamog".split(" ");

// JSX Partial
function listItems(items) {
  return items.map( p => <li> {p} </li> );
}

// JSX
let vdom = (
  <div id="list">
    <p>Eldrazi Titans:</p>
    <ul>{ listItems(CARDS) }</ul>
    <small>See console for JSON representation of the virtual DOM.</small>
  </div>
);

// JSON representation of the DOM - the Virtual DOM
let json = JSON.stringify(vdom, null, "  ");
console.log(json);

document.body.appendChild(
  render(vdom)
);

// JSX render methods
function render(vnode) {
  if (typeof vnode === 'string') { return document.createTextNode(vnode); }
  let n = document.createElement(vnode.nodeName);
  Object.keys(vnode.attributes || {}).forEach( k => n.setAttribute(k, vnode.attributes[k]) );
  (vnode.children || []).forEach( c => n.appendChild(render(c)) );
  return n;
}

function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}
