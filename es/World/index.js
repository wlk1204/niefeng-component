import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".style_box__1Y07S{background-color:red}";
var styles = {"box":"style_box__1Y07S"};
styleInject(css_248z);

var World = function (props) {
    var name = props.name;
    console.log("hahaha...");
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.box }, "World, " + name)));
};

export default World;
