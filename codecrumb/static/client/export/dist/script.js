"use strict";

var _slicedToArray = (function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      const $THIS_IS_CC_LOOP_PROTECT_VARIABLE0 = Date.now();
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        if (Date.now() - $THIS_IS_CC_LOOP_PROTECT_VARIABLE0 > 5000) {
          throw new RangeError(`Potential infinite loop prevented,
 if you want the loop to iterate a little longer, 
 use the custom panel in the settings panel to change the duration
note: these page might not be responsive if the duration is or more than 2000ms
`);
        }
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
  };
})();

var _extends =
  Object.assign ||
  function(target) {
    const $THIS_IS_CC_LOOP_PROTECT_VARIABLE2 = Date.now();
    for (var i = 1; i < arguments.length; i++) {
      if (Date.now() - $THIS_IS_CC_LOOP_PROTECT_VARIABLE2 > 5000) {
        throw new RangeError(`Potential infinite loop prevented,
 if you want the loop to iterate a little longer, 
 use the custom panel in the settings panel to change the duration
note: these page might not be responsive if the duration is or more than 2000ms
`);
      }
      var source = arguments[i];
      const $THIS_IS_CC_LOOP_PROTECT_VARIABLE1 = Date.now();
      for (var key in source) {
        if (Date.now() - $THIS_IS_CC_LOOP_PROTECT_VARIABLE1 > 5000) {
          throw new RangeError(`Potential infinite loop prevented,
 if you want the loop to iterate a little longer, 
 use the custom panel in the settings panel to change the duration
note: these page might not be responsive if the duration is or more than 2000ms
`);
        }
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    const $THIS_IS_CC_LOOP_PROTECT_VARIABLE3 = Date.now();
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      if (Date.now() - $THIS_IS_CC_LOOP_PROTECT_VARIABLE3 > 5000) {
        throw new RangeError(`Potential infinite loop prevented,
 if you want the loop to iterate a little longer, 
 use the custom panel in the settings panel to change the duration
note: these page might not be responsive if the duration is or more than 2000ms
`);
      }
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
var _Reactstrap = Reactstrap,
  Collapse = _Reactstrap.Collapse,
  Nav = _Reactstrap.Nav,
  NavbarBrand = _Reactstrap.NavbarBrand,
  NavbarToggler = _Reactstrap.NavbarToggler,
  NavItem = _Reactstrap.NavItem,
  NavLink = _Reactstrap.NavLink,
  Container = _Reactstrap.Container,
  Navbar = _Reactstrap.Navbar,
  ListGroup = _Reactstrap.ListGroup,
  ListGroupItem = _Reactstrap.ListGroupItem,
  Button = _Reactstrap.Button,
  ModalHeader = _Reactstrap.ModalHeader,
  ModalBody = _Reactstrap.ModalBody,
  Modal = _Reactstrap.Modal,
  FormGroup = _Reactstrap.FormGroup,
  Label = _Reactstrap.Label,
  Input = _Reactstrap.Input,
  Form = _Reactstrap.Form;
var _ReactTransitionGroup = ReactTransitionGroup,
  CSSTransition = _ReactTransitionGroup.CSSTransition,
  TransitionGroup = _ReactTransitionGroup.TransitionGroup;
var _ReactRedux = ReactRedux,
  Provider = _ReactRedux.Provider,
  useDispatch = _ReactRedux.useDispatch,
  useSelector = _ReactRedux.useSelector,
  connect = _ReactRedux.connect;
var _Redux = Redux,
  createStore = _Redux.createStore,
  combineReducers = _Redux.combineReducers,
  compose = _Redux.compose;
var _PropTypes = PropTypes,
  func = _PropTypes.func,
  object = _PropTypes.object;

// types

var initState = {
  items: [
    {
      id: uuid(),
      name: "Eba"
    },
    {
      id: uuid(),
      name: "Milk"
    },
    {
      id: uuid(),
      name: "Egg"
    },
    {
      id: uuid(),
      name: "Yam"
    }
  ]
};
var types = {
  GET_ITEMS: "GET_ITEMS",
  ADD_ITEM: "ADD_ITEM",
  DELETE_ITEM: "DELETE_ITEM"
};

// reducers
var itemReducer = function itemReducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initState;
  var action = arguments[1];

  switch (action.type) {
    case types.GET_ITEMS:
      return _extends({}, state);
    case types.ADD_ITEM:
      return _extends({}, state, {
        items: [action.payload].concat(_toConsumableArray(state.items))
      });

    case types.DELETE_ITEM:
      return _extends({}, state, {
        items: state.items.filter(function(item) {
          return item.id !== action.payload;
        })
      });
    default:
      return state;
  }
};

// actions
var getItems = function getItems() {
  return {
    type: "GET_ITEMS"
  };
};
var deleteItem = function deleteItem(id) {
  return {
    type: "DELETE_ITEM",
    payload: id
  };
};
var addItem = function addItem(item) {
  return {
    type: "ADD_ITEM",
    payload: item
  };
};

// store
var rootReducer = combineReducers({ items: itemReducer });
var store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

var ItemModal = function ItemModal() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    modal = _useState2[0],
    toggleModal = _useState2[1];

  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    name = _useState4[0],
    setName = _useState4[1];

  var dispatch = useDispatch();

  var toggle = function toggle() {
    toggleModal(!modal);
  };

  var handleName = function handleName(e) {
    setName(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var regex = new RegExp(/[a-zA-Z0-9]/, "gi");
    if (name.length && name.match(regex)) {
      toggle();

      var newItem = {
        id: uuid(),
        name: name
      };
      setName("");
      dispatch(addItem(newItem));
    }
  };
  return React.createElement(
    "div",
    null,
    React.createElement(
      Button,
      { color: "dark", style: { marginBottom: "2rem" }, onClick: toggle },
      "Add Item"
    ),
    React.createElement(
      Modal,
      { toggle: toggle, isOpen: modal },
      React.createElement(
        ModalHeader,
        { toggle: toggle },
        "Add to shopping list"
      ),
      React.createElement(
        ModalBody,
        null,
        React.createElement(
          Form,
          { onSubmit: handleSubmit },
          React.createElement(
            FormGroup,
            null,
            React.createElement(Input, {
              name: "name",
              id: "name",
              placeholder: "Add to shopping list item",
              onChange: handleName,
              value: name,
              autoFocus: true
            }),
            React.createElement(
              Button,
              {
                block: true,
                className: "btn btn-primary",
                style: { marginTop: "2rem" }
              },
              "Add Item"
            )
          )
        )
      )
    )
  );
};

var AppNavbar = function AppNavbar() {
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpen = _useState6[0],
    setOpen = _useState6[1];

  var toggle = function toggle() {
    setOpen(!isOpen);
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      Navbar,
      { color: "dark", dark: true, expand: "sm", className: "mb-5" },
      React.createElement(
        Container,
        null,
        React.createElement(NavbarBrand, { href: "#" }, "Shopping Brand"),
        React.createElement(NavbarToggler, { onClick: toggle }),
        React.createElement(
          Collapse,
          { isOpen: isOpen, navbar: true },
          React.createElement(
            Nav,
            { className: "ml-auto", navbar: true },
            React.createElement(
              NavItem,
              null,
              React.createElement(NavLink, null, "Home")
            ),
            React.createElement(
              NavItem,
              null,
              React.createElement(NavLink, null, "Github")
            ),
            React.createElement(
              NavItem,
              null,
              React.createElement(NavLink, null, "Resource")
            )
          )
        )
      )
    )
  );
};

var ShoppingList = function ShoppingList(props) {
  useEffect(function() {
    props.getItems();
  });

  var items = props.item.items;

  return React.createElement(
    "div",
    null,
    React.createElement(
      ListGroup,
      null,
      React.createElement(
        TransitionGroup,
        { className: "shopping-list" },
        items.map(function(_ref) {
          var id = _ref.id,
            name = _ref.name;
          return React.createElement(
            CSSTransition,
            { key: id, classNames: "fade", timeout: 500 },
            React.createElement(
              ListGroupItem,
              null,
              React.createElement(
                Button,
                {
                  className: "remove-btn",
                  size: "sm",
                  color: "danger",
                  onClick: function onClick() {
                    props.deleteItem(id);
                  }
                },
                "\xD7"
              ),
              name
            )
          );
        })
      )
    )
  );
};

ShoppingList.propTypes = {
  getItems: func.isRequired,
  deleteItem: func.isRequired,
  item: object.isRequired
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    item: state.items
  };
};
var List = connect(
  mapStateToProps,
  { getItems: getItems, deleteItem: deleteItem }
)(ShoppingList);
var App = function App() {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(AppNavbar, null),
    React.createElement(
      Container,
      null,
      React.createElement(ItemModal, null),
      React.createElement(List, null)
    )
  );
};

ReactDOM.render(
  React.createElement(
    Provider,
    { store: store },
    React.createElement(App, null)
  ),
  document.querySelector("#root")
);
