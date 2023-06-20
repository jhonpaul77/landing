"use strict";
exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 7826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Drawer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "rc-drawer"
var external_rc_drawer_ = __webpack_require__(5307);
var external_rc_drawer_default = /*#__PURE__*/__webpack_require__.n(external_rc_drawer_);
;// CONCATENATED MODULE: ./src/common/components/Drawer/motion.js
const maskMotion = {
  motionAppear: true,
  motionName: 'mask-motion',
  onAppearEnd: console.warn
};
const motion = placement => ({
  motionAppear: true,
  motionName: `panel-motion-${placement}`
});
const motionProps = {
  maskMotion,
  motion
};
/* harmony default export */ const Drawer_motion = (motionProps);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/common/components/Drawer/index.js
const _excluded = ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Drawer = _ref => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  // Add all classs to an array
  const addAllClasses = ['reusecore__drawer']; // const addAllClasses = ['rc-drawer-content-wrapper'];
  // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((external_rc_drawer_default()), _objectSpread(_objectSpread(_objectSpread({
      open: open,
      onClose: toggleHandler,
      className: addAllClasses.join(' ')
    }, props), Drawer_motion), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "reusecore-drawer__close",
        onClick: toggleHandler,
        style: closeButtonStyle,
        role: "button",
        tabIndex: "0",
        children: closeButton
      }), children]
    })), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "reusecore-drawer__handler",
      style: {
        display: 'inline-block'
      },
      onClick: toggleHandler,
      role: "button",
      tabIndex: "0",
      children: drawerHandler
    })]
  });
};

Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ const components_Drawer = (Drawer);

/***/ }),

/***/ 5543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_HamburgMenu)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(5834);
;// CONCATENATED MODULE: ./src/common/components/HamburgMenu/hamburgMenu.style.js


const HamburgMenuWrapper = external_styled_components_default().button.withConfig({
  displayName: "hamburgMenustyle__HamburgMenuWrapper",
  componentId: "sc-1dtmex1-0"
})(["border:0;background:transparent;width:44px;height:30px;cursor:pointer;", " ", " ", " ", " ", " ", " ", " > span{display:block;width:100%;height:2px;margin:4px 0;float:right;background-color:", ";transition:all 0.3s ease;&:first-child{margin-top:0;}&:last-child{width:calc(100% - 10px);margin-bottom:0;}}&:focus,&:hover{outline:none;> span{&:last-child{width:100%;}}}&:focus,&.active{> span{&:first-child{transform:rotate(45deg);transform-origin:8px 50%;}&:nth-child(2){display:none;}&:last-child{width:100%;transform:rotate(-45deg);transform-origin:9px 50%;}}}"], external_styled_system_.width, external_styled_system_.height, external_styled_system_.color, external_styled_system_.space, external_styled_system_.border, external_styled_system_.boxShadow, external_styled_system_.borderRadius, props => props.barColor ? props.barColor : '#10ac84');
HamburgMenuWrapper.displayName = 'HamburgMenuWrapper';
/* harmony default export */ const hamburgMenu_style = (HamburgMenuWrapper);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/common/components/HamburgMenu/index.js
const _excluded = ["className", "wrapperStyle", "barColor"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const HamburgMenu = _ref => {
  let {
    className,
    wrapperStyle,
    barColor
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  // Add all classs to an array
  const addAllClasses = ['hamburgMenu__bar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(hamburgMenu_style, _objectSpread(_objectSpread(_objectSpread({
    className: addAllClasses.join(' ')
  }, wrapperStyle), {}, {
    barColor: barColor,
    "aria-label": "hamburgMenu"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
  }));
};

/* harmony default export */ const components_HamburgMenu = (HamburgMenu);

/***/ }),

/***/ 3526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6503);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["src", "alt"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('img').withConfig({
  displayName: "Image__ImageWrapper",
  componentId: "sc-3r3t1e-0"
})({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_2__/* .base */ .u, (0,_base__WEBPACK_IMPORTED_MODULE_2__/* .themed */ .H)('Image'));

const Image = _ref => {
  let {
    src,
    alt
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ImageWrapper, _objectSpread({
    src: src,
    alt: alt
  }, props));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ 3386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6503);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('a').withConfig({
  displayName: "Link__LinkWrapper",
  componentId: "sc-7st65b-0"
})({
  textDecoration: 'none',
  alignItems: 'center'
}, _base__WEBPACK_IMPORTED_MODULE_2__/* .base */ .u, (0,_base__WEBPACK_IMPORTED_MODULE_2__/* .themed */ .H)('Link'));

const Link = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(LinkWrapper, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-flex'
};

/***/ }),

/***/ 5564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(5834);
;// CONCATENATED MODULE: ./src/common/components/Navbar/navbar.style.js


const NavbarStyle = external_styled_components_default().nav.withConfig({
  displayName: "navbarstyle__NavbarStyle",
  componentId: "sc-14etb6p-0"
})(["display:flex;align-items:center;min-height:56px;padding:10px 16px;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_.display, external_styled_system_.alignItems, external_styled_system_.justifyContent, external_styled_system_.flexDirection, external_styled_system_.flexWrap, external_styled_system_.width, external_styled_system_.height, external_styled_system_.color, external_styled_system_.space, external_styled_system_.boxShadow, external_styled_system_.borderRadius);
NavbarStyle.displayName = 'NavbarStyle';
/* harmony default export */ const navbar_style = (NavbarStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/common/components/Navbar/index.js
const _excluded = ["className", "children", "navbarStyle"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Navbar = _ref => {
  let {
    className,
    children,
    navbarStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  // Add all classs to an array
  const addAllClasses = ['reusecore__navbar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(navbar_style, _objectSpread(_objectSpread({
    className: addAllClasses.join(' ')
  }, props), {}, {
    children: children
  }));
};

/** Navbar default proptype */
Navbar.defaultProps = {};
/* harmony default export */ const components_Navbar = (Navbar);

/***/ }),

/***/ 4420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6578);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2217);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(490);
/* harmony import */ var _NextImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9100);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["className", "menuItems", "drawerClose"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const RenderLinkWithIcon = ({
  menu
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "icon-login",
    children: [menu.icon ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_NextImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      className: "icon",
      src: menu.icon,
      alt: menu.label
    }) : "", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
      className: menu.icon ? "icon-label" : "no-icon-label",
      href: menu.path,
      children: menu.label
    })]
  });
};

const ScrollSpyMenu = _ref => {
  let {
    className,
    menuItems,
    drawerClose
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_3__/* .DrawerContext */ .r); // empty array for scrollspy items

  const scrollItems = []; // convert menu path to scrollspy items

  menuItems.forEach(item => {
    scrollItems.push(item.path.slice(1));
  }); // Add all classs to an array

  const addAllClasses = ["scrollspy__menu"]; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Close drawer when click on menu item


  const toggleDrawer = () => {
    dispatch({
      type: "TOGGLE"
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((react_scrollspy__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({
    items: scrollItems,
    className: addAllClasses.join(" "),
    drawerClose: drawerClose
  }, props), {}, {
    children: menuItems.map((menu, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
      children: menu.staticLink ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(RenderLinkWithIcon, {
        menu: menu
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: drawerClose ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: menu.path,
          offset: menu.offset,
          onClick: toggleDrawer,
          children: menu.label
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: menu.path,
          offset: menu.offset,
          children: menu.label
        })
      })
    }, `menu-item-${index}`))
  }));
};

ScrollSpyMenu.defaultProps = {
  componentTag: "ul",
  currentClassName: "is-current"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollSpyMenu);

/***/ }),

/***/ 6945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ UI_Container)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/common/components/UI/Container/style.js

const ContainerWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__ContainerWrapper",
  componentId: "sc-vgjqnl-0"
})(["margin-left:auto;margin-right:auto;", ";", ";@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1220px){max-width:", ";width:100%;}@media (min-width:1400px){max-width:", ";width:100%;}@media (max-width:768px){", ";}"], props => props.fullWidth && (0,external_styled_components_.css)(["width:100%;max-width:none !important;"]), props => props.noGutter && (0,external_styled_components_.css)(["padding-left:0;padding-right:0;"]) || (0,external_styled_components_.css)(["padding-left:30px;padding-right:30px;"]), props => props.width || '1170px', props => props.width || '1360px', props => props.mobileGutter && (0,external_styled_components_.css)(["padding-left:30px;padding-right:30px;"]));
/* harmony default export */ const style = (ContainerWrapper);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/common/components/UI/Container/index.js




const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width
}) => {
  // Add all classs to an array
  const addAllClasses = ['container']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(style, {
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    width: width,
    mobileGutter: mobileGutter,
    children: children
  });
};

/* harmony default export */ const UI_Container = (Container);

/***/ }),

/***/ 420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9397);
/* harmony import */ var common_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3386);
/* harmony import */ var common_components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3526);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["logoWrapperStyle", "logoStyle", "titleStyle", "withAnchor", "anchorProps", "logoSrc", "title"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Logo = _ref => {
  let {
    logoWrapperStyle,
    logoStyle,
    titleStyle,
    withAnchor,
    anchorProps,
    logoSrc,
    title
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(common_components_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread(_objectSpread(_objectSpread({}, props), logoWrapperStyle), {}, {
    children: withAnchor ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", _objectSpread(_objectSpread({}, anchorProps), {}, {
      children: logoSrc ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(common_components_Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread({
        src: logoSrc.src,
        alt: title
      }, logoStyle)) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(common_components_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, _objectSpread({
        content: title
      }, titleStyle))
    })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: logoSrc ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(common_components_Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread({
        src: logoSrc.src,
        alt: title
      }, logoStyle)) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(common_components_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, _objectSpread({
        content: title
      }, titleStyle))
    })
  }));
};

Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  },
  title: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ 490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ DrawerProvider),
/* harmony export */   "r": () => (/* binding */ DrawerContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(DrawerContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  });
};

/***/ })

};
;