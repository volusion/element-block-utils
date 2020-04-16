(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('querystring')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'querystring'], factory) :
  (global = global || self, factory(global.blockUtils = {}, global.React, global.querystring));
}(this, function (exports, React, querystring) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
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

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var joinClasses = function joinClasses() {
    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }

    var validClasses = classes.filter(function (className) {
      return className ? className : '';
    });
    var whitespace = /\s+/g;
    return validClasses.join(' ').replace(whitespace, ' ').trim();
  };

  var MockClientUtils =
  /*#__PURE__*/
  function () {
    function MockClientUtils() {
      _classCallCheck(this, MockClientUtils);

      _defineProperty(this, "categories", {
        get: jest.fn()
      });

      _defineProperty(this, "contentPages", {
        getBySeoFriendlyName: jest.fn()
      });

      _defineProperty(this, "menus", {
        get: jest.fn()
      });

      _defineProperty(this, "products", {
        getByCategoryId: jest.fn(),
        getById: jest.fn(),
        getBySlug: jest.fn(),
        getRelatedById: jest.fn(),
        getRelatedBySlug: jest.fn(),
        getWithChildCategories: jest.fn(),
        search: jest.fn()
      });

      _defineProperty(this, "request", function () {
        return jest.fn();
      });

      _defineProperty(this, "storeInformation", {
        acceptsStripeAsPayment: false,
        launched: false,
        name: 'Volt Store',
        paymentAutoCapture: false,
        seo: {
          platformMetaTags: {}
        },
        socialNetworks: {},
        storeUrl: 'https://mock-example.myvolusion.com',
        tenant: 'MOCK_TENANT_ID',
        thirdPartyIntegrations: {},
        applePay: {},
        authorizeNet: {},
        paypal: {},
        favicon: '',
        logo: {
          imagePath: 'v1579715133/5d0bd834bd7d6e2d83cac6bc/fx3jlhu4lv3ispnumuap.png',
          uriBase: 'https://res.cloudinary.com/dyx4yhvoq/image/upload/'
        }
      });

      _defineProperty(this, "tenant", 'MOCK_TENANT_ID');
    }

    _createClass(MockClientUtils, [{
      key: "setStoreInfo",
      value: function setStoreInfo() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.storeInformation = _objectSpread2({}, this.storeInformation, {}, data);
      }
    }, {
      key: "reset",
      value: function reset() {
        delete this.storeInformation;
      }
    }]);

    return MockClientUtils;
  }();

  var mockUtils = {
    addAmpScript: jest.fn(),
    addLink: jest.fn(),
    addScipt: jest.fn(),
    canonicalUrl: jest.fn(function (queryParams) {
      var searchString = querystring.stringify(queryParams);
      var _window$location = window.location,
          origin = _window$location.origin,
          pathname = _window$location.pathname;
      var queryString = searchString ? '?' + searchString : '';
      return origin + pathname + queryString;
    }),
    client: new MockClientUtils(),
    events: {
      cart: {
        addToCart: 'cart.addToCart',
        itemAddedToCart: 'cart.itemAddedToCart',
        itemRemovedFromCart: 'cart.itemRemovedFromCart',
        openAccountPanel: 'cart.openAccountPanel',
        openCart: 'cart.openCart',
        updateCartCount: 'cart.updateCartCount'
      }
    },
    pubSub: {
      subscribe: jest.fn(),
      publish: jest.fn()
    },
    seo: {
      setTitle: jest.fn(),
      setDescription: jest.fn(),
      addExtraTag: jest.fn()
    },
    throwNotFound: jest.fn(),
    DEPRECATED_getLegacyButton: function DEPRECATED_getLegacyButton() {
      return function (_ref) {
        var className = _ref.className,
            _ref$buttonStyle = _ref.buttonStyle,
            buttonStyle = _ref$buttonStyle === void 0 ? 'primary' : _ref$buttonStyle,
            props = _objectWithoutProperties(_ref, ["className", "buttonStyle"]);

        return React.createElement("a", _extends({
          className: joinClasses(buttonStyle, className)
        }, props), props.children);
      };
    }
  };

  exports.joinClasses = joinClasses;
  exports.mockUtils = mockUtils;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
