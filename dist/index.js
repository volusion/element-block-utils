(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.blockUtils = {}));
}(this, function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      if (i % 2) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i]));
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function createFactory(blockFactory, styles, configSchema) {
    return function (_ref, utils, _ref2, globalStyles, blockConfig) {
      var React = _ref.React,
          ElementPropTypes = _ref.ElementPropTypes,
          Components = _ref.Components;
      var StyleSheet = _ref2.StyleSheet,
          css = _ref2.css;
      var classes = StyleSheet.create(styles(globalStyles, blockConfig));
      var generatedComponents = Object.keys(Components).reduce(function (componentList, name) {
        componentList[name] = Components[name].factory({
          React: React,
          ElementPropTypes: ElementPropTypes
        }, {
          StyleSheet: StyleSheet,
          css: css
        }, globalStyles).component;
        return componentList;
      }, {});
      var Block = blockFactory(React, generatedComponents);

      var block =
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(block, _React$Component);

        function block() {
          _classCallCheck(this, block);

          return _possibleConstructorReturn(this, _getPrototypeOf(block).apply(this, arguments));
        }

        _createClass(block, [{
          key: "render",
          value: function render() {
            var blockProps = _objectSpread2({}, this.props, {
              classes: classes
            }, utils, {
              StyleSheet: StyleSheet,
              css: css
            });

            return React.createElement(Block, blockProps);
          }
        }]);

        return block;
      }(React.Component);

      return {
        block: React.createFactory(block),
        config: configSchema(ElementPropTypes)
      };
    };
  }

  exports.createFactory = createFactory;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
