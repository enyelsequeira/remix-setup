const __create = Object.create;
const __defProp = Object.defineProperty;
const __getOwnPropDesc = Object.getOwnPropertyDescriptor;
const __getOwnPropNames = Object.getOwnPropertyNames;
const __getProtoOf = Object.getPrototypeOf;
const __hasOwnProp = Object.prototype.hasOwnProperty;
const __markAsModule = (target) => __defProp(target, '__esModule', { value: true });
const __esm = (fn, res) =>
  function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res;
  };
const __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
const __reExport = (target, module, copyDefault, desc) => {
  if ((module && typeof module === 'object') || typeof module === 'function') {
    for (const key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== 'default'))
        __defProp(target, key, {
          get: () => module[key],
          enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable,
        });
  }
  return target;
};
const __toESM = (module, isNodeMode) => {
  return __reExport(
    __markAsModule(
      __defProp(
        module != null ? __create(__getProtoOf(module)) : {},
        'default',
        !isNodeMode && module && module.__esModule
          ? { get: () => module.default, enumerable: true }
          : { value: module, enumerable: true }
      )
    ),
    module
  );
};

// node_modules/object-assign/index.js
const require_object_assign = __commonJS({
  'node_modules/object-assign/index.js': function (exports, module) {
    init_react();
    const { getOwnPropertySymbols } = Object;
    const { hasOwnProperty } = Object.prototype;
    const propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        const test1 = new String('abc');
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
          return false;
        }
        const test2 = {};
        for (let i = 0; i < 10; i++) {
          test2[`_${String.fromCharCode(i)}`] = i;
        }
        const order2 = Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        });
        if (order2.join('') !== '0123456789') {
          return false;
        }
        const test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
          test3[letter] = letter;
        });
        if (Object.keys({ ...test3 }).join('') !== 'abcdefghijklmnopqrst') {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative()
      ? Object.assign
      : function (target, source) {
          let from;
          const to = toObject(target);
          let symbols;
          for (let s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);
            for (const key in from) {
              if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
              }
            }
            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from);
              for (let i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                  to[symbols[i]] = from[symbols[i]];
                }
              }
            }
          }
          return to;
        };
  },
});

// node_modules/react/cjs/react.development.js
const require_react_development = __commonJS({
  'node_modules/react/cjs/react.development.js': function (exports) {
    init_react();
    if (true) {
      (function () {
        const _assign = require_object_assign();
        const ReactVersion = '17.0.2';
        let REACT_ELEMENT_TYPE = 60103;
        let REACT_PORTAL_TYPE = 60106;
        exports.Fragment = 60107;
        exports.StrictMode = 60108;
        exports.Profiler = 60114;
        let REACT_PROVIDER_TYPE = 60109;
        let REACT_CONTEXT_TYPE = 60110;
        let REACT_FORWARD_REF_TYPE = 60112;
        exports.Suspense = 60113;
        let REACT_SUSPENSE_LIST_TYPE = 60120;
        let REACT_MEMO_TYPE = 60115;
        let REACT_LAZY_TYPE = 60116;
        let REACT_BLOCK_TYPE = 60121;
        let REACT_SERVER_BLOCK_TYPE = 60122;
        let REACT_FUNDAMENTAL_TYPE = 60117;
        let REACT_SCOPE_TYPE = 60119;
        let REACT_OPAQUE_ID_TYPE = 60128;
        let REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        let REACT_OFFSCREEN_TYPE = 60130;
        let REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === 'function' && Symbol.for) {
          const symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor('react.element');
          REACT_PORTAL_TYPE = symbolFor('react.portal');
          exports.Fragment = symbolFor('react.fragment');
          exports.StrictMode = symbolFor('react.strict_mode');
          exports.Profiler = symbolFor('react.profiler');
          REACT_PROVIDER_TYPE = symbolFor('react.provider');
          REACT_CONTEXT_TYPE = symbolFor('react.context');
          REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
          exports.Suspense = symbolFor('react.suspense');
          REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
          REACT_MEMO_TYPE = symbolFor('react.memo');
          REACT_LAZY_TYPE = symbolFor('react.lazy');
          REACT_BLOCK_TYPE = symbolFor('react.block');
          REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
          REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
          REACT_SCOPE_TYPE = symbolFor('react.scope');
          REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
          REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
          REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
        }
        const MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        const FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== 'object') {
            return null;
          }
          const maybeIterator =
            (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
            maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === 'function') {
            return maybeIterator;
          }
          return null;
        }
        const ReactCurrentDispatcher = {
          current: null,
        };
        const ReactCurrentBatchConfig = {
          transition: 0,
        };
        const ReactCurrentOwner = {
          current: null,
        };
        const ReactDebugCurrentFrame = {};
        let currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function () {
            let stack = '';
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            const impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || '';
            }
            return stack;
          };
        }
        const IsSomeRendererActing = {
          current: false,
        };
        const ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
          IsSomeRendererActing,
          assign: _assign,
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
        }
        function warn(format) {
          {
            for (
              var _len = arguments.length,
                args = new Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              args[_key - 1] = arguments[_key];
            }
            printWarning('warn', format, args);
          }
        }
        function error(format) {
          {
            for (
              var _len2 = arguments.length,
                args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                _key2 = 1;
              _key2 < _len2;
              _key2++
            ) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning('error', format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            const ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            const stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== '') {
              format += '%s';
              args = args.concat([stack]);
            }
            const argsWithFormat = args.map(function (item) {
              return `${item}`;
            });
            argsWithFormat.unshift(`Warning: ${format}`);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        const didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            const _constructor = publicInstance.constructor;
            const componentName =
              (_constructor && (_constructor.displayName || _constructor.name)) ||
              'ReactClass';
            const warningKey = `${componentName}.${callerName}`;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error(
              "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
              callerName,
              componentName
            );
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        const ReactNoopUpdateQueue = {
          isMounted(publicInstance) {
            return false;
          },
          enqueueForceUpdate(publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate');
          },
          enqueueReplaceState(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, 'replaceState');
          },
          enqueueSetState(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, 'setState');
          },
        };
        const emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function (partialState, callback) {
          if (
            !(
              typeof partialState === 'object' ||
              typeof partialState === 'function' ||
              partialState == null
            )
          ) {
            {
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            }
          }
          this.updater.enqueueSetState(this, partialState, callback, 'setState');
        };
        Component.prototype.forceUpdate = function (callback) {
          this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
        };
        {
          const deprecatedAPIs = {
            isMounted: [
              'isMounted',
              'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
            ],
            replaceState: [
              'replaceState',
              'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
            ],
          };
          const defineDeprecationWarning = function (methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get() {
                warn(
                  '%s(...) is deprecated in plain JavaScript React classes. %s',
                  info[0],
                  info[1]
                );
                return void 0;
              },
            });
          };
          for (const fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {}
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
        pureComponentPrototype.constructor = PureComponent;
        _assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          const refObject = {
            current: null,
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          const functionName = innerType.displayName || innerType.name || '';
          return (
            outerType.displayName ||
            (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName)
          );
        }
        function getContextName(type) {
          return type.displayName || 'Context';
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === 'number') {
              error(
                'Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.'
              );
            }
          }
          if (typeof type === 'function') {
            return type.displayName || type.name || null;
          }
          if (typeof type === 'string') {
            return type;
          }
          switch (type) {
            case exports.Fragment:
              return 'Fragment';
            case REACT_PORTAL_TYPE:
              return 'Portal';
            case exports.Profiler:
              return 'Profiler';
            case exports.StrictMode:
              return 'StrictMode';
            case exports.Suspense:
              return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
              return 'SuspenseList';
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return `${getContextName(context)}.Consumer`;
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return `${getContextName(provider._context)}.Provider`;
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                const lazyComponent = type;
                const payload = lazyComponent._payload;
                const init = lazyComponent._init;
                try {
                  return getComponentName(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        const { hasOwnProperty } = Object.prototype;
        const RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true,
        };
        let specialPropKeyWarningShown;
        let specialPropRefWarningShown;
        let didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, 'ref')) {
              const getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, 'key')) {
              const getter = Object.getOwnPropertyDescriptor(config, 'key').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          const warnAboutAccessingKey = function () {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error(
                  '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                  displayName
                );
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true,
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          const warnAboutAccessingRef = function () {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error(
                  '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                  displayName
                );
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true,
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (
              typeof config.ref === 'string' &&
              ReactCurrentOwner.current &&
              config.__self &&
              ReactCurrentOwner.current.stateNode !== config.__self
            ) {
              const componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  componentName,
                  config.ref
                );
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        const ReactElement = function (type, key, ref, self, source, owner, props) {
          const element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner,
          };
          {
            element._store = {};
            Object.defineProperty(element._store, 'validated', {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false,
            });
            Object.defineProperty(element, '_self', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self,
            });
            Object.defineProperty(element, '_source', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source,
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          let propName;
          const props = {};
          let key = null;
          let ref = null;
          let self = null;
          let source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              key = `${config.key}`;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (
                hasOwnProperty.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                props[propName] = config[propName];
              }
            }
          }
          const childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            const childArray = Array(childrenLength);
            for (let i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            const { defaultProps } = type;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              const displayName =
                typeof type === 'function'
                  ? type.displayName || type.name || 'Unknown'
                  : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(
            type,
            key,
            ref,
            self,
            source,
            ReactCurrentOwner.current,
            props
          );
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          const newElement = ReactElement(
            oldElement.type,
            newKey,
            oldElement.ref,
            oldElement._self,
            oldElement._source,
            oldElement._owner,
            oldElement.props
          );
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            {
              throw Error(
                `React.cloneElement(...): The argument must be a React element, but you passed ${element}.`
              );
            }
          }
          let propName;
          const props = _assign({}, element.props);
          let { key } = element;
          let { ref } = element;
          const self = element._self;
          const source = element._source;
          let owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              key = `${config.key}`;
            }
            let defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (
                hasOwnProperty.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          const childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            const childArray = Array(childrenLength);
            for (let i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return (
            typeof object === 'object' &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }
        const SEPARATOR = '.';
        const SUBSEPARATOR = ':';
        function escape(key) {
          const escapeRegex = /[=:]/g;
          const escaperLookup = {
            '=': '=0',
            ':': '=2',
          };
          const escapedString = key.replace(escapeRegex, function (match) {
            return escaperLookup[match];
          });
          return `$${escapedString}`;
        }
        let didWarnAboutMaps = false;
        const userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, '$&/');
        }
        function getElementKey(element, index) {
          if (typeof element === 'object' && element !== null && element.key != null) {
            return escape(`${element.key}`);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          const type = typeof children;
          if (type === 'undefined' || type === 'boolean') {
            children = null;
          }
          let invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case 'string':
              case 'number':
                invokeCallback = true;
                break;
              case 'object':
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            const _child = children;
            let mappedChild = callback(_child);
            const childKey =
              nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (Array.isArray(mappedChild)) {
              let escapedChildKey = '';
              if (childKey != null) {
                escapedChildKey = `${escapeUserProvidedKey(childKey)}/`;
              }
              mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  escapedPrefix +
                    (mappedChild.key && (!_child || _child.key !== mappedChild.key)
                      ? `${escapeUserProvidedKey(`${mappedChild.key}`)}/`
                      : '') +
                    childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          let child;
          let nextName;
          let subtreeCount = 0;
          const nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (let i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(
                child,
                array,
                escapedPrefix,
                nextName,
                callback
              );
            }
          } else {
            const iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === 'function') {
              const iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn(
                      'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
                    );
                  }
                  didWarnAboutMaps = true;
                }
              }
              const iterator = iteratorFn.call(iterableChildren);
              let step;
              let ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(
                  child,
                  array,
                  escapedPrefix,
                  nextName,
                  callback
                );
              }
            } else if (type === 'object') {
              const childrenString = `${children}`;
              {
                {
                  throw Error(
                    `Objects are not valid as a React child (found: ${
                      childrenString === '[object Object]'
                        ? `object with keys {${Object.keys(children).join(', ')}}`
                        : childrenString
                    }). If you meant to render a collection of children, use an array instead.`
                  );
                }
              }
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          const result = [];
          let count = 0;
          mapIntoArray(children, result, '', '', function (child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          let n = 0;
          mapChildren(children, function () {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function () {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        }
        function toArray(children) {
          return (
            mapChildren(children, function (child) {
              return child;
            }) || []
          );
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            {
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              );
            }
          }
          return children;
        }
        function createContext(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === void 0) {
            calculateChangedBits = null;
          } else {
            {
              if (
                calculateChangedBits !== null &&
                typeof calculateChangedBits !== 'function'
              ) {
                error(
                  'createContext: Expected the optional second argument to be a function. Instead received: %s',
                  calculateChangedBits
                );
              }
            }
          }
          const context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context,
          };
          let hasWarnedAboutUsingNestedContextConsumers = false;
          let hasWarnedAboutUsingConsumerProvider = false;
          let hasWarnedAboutDisplayNameOnConsumer = false;
          {
            const Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits,
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error(
                      'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                    );
                  }
                  return context.Provider;
                },
                set(_Provider) {
                  context.Provider = _Provider;
                },
              },
              _currentValue: {
                get() {
                  return context._currentValue;
                },
                set(_currentValue) {
                  context._currentValue = _currentValue;
                },
              },
              _currentValue2: {
                get() {
                  return context._currentValue2;
                },
                set(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                },
              },
              _threadCount: {
                get() {
                  return context._threadCount;
                },
                set(_threadCount) {
                  context._threadCount = _threadCount;
                },
              },
              Consumer: {
                get() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error(
                      'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                    );
                  }
                  return context.Consumer;
                },
              },
              displayName: {
                get() {
                  return context.displayName;
                },
                set(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn(
                      "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                      displayName
                    );
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                },
              },
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        const Uninitialized = -1;
        const Pending = 0;
        const Resolved = 1;
        const Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            const ctor = payload._result;
            const thenable = ctor();
            const pending = payload;
            pending._status = Pending;
            pending._result = thenable;
            thenable.then(
              function (moduleObject) {
                if (payload._status === Pending) {
                  const defaultExport = moduleObject.default;
                  {
                    if (defaultExport === void 0) {
                      error(
                        "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
                        moduleObject
                      );
                    }
                  }
                  const resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = defaultExport;
                }
              },
              function (error2) {
                if (payload._status === Pending) {
                  const rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              }
            );
          }
          if (payload._status === Resolved) {
            return payload._result;
          }
          throw payload._result;
        }
        function lazy(ctor) {
          const payload = {
            _status: -1,
            _result: ctor,
          };
          const lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer,
          };
          {
            let defaultProps;
            let propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get() {
                  return defaultProps;
                },
                set(newDefaultProps) {
                  error(
                    'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                  );
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, 'defaultProps', {
                    enumerable: true,
                  });
                },
              },
              propTypes: {
                configurable: true,
                get() {
                  return propTypes;
                },
                set(newPropTypes) {
                  error(
                    'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                  );
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, 'propTypes', {
                    enumerable: true,
                  });
                },
              },
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error(
                'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
              );
            } else if (typeof render !== 'function') {
              error(
                'forwardRef requires a render function but was given %s.',
                render === null ? 'null' : typeof render
              );
            } else if (render.length !== 0 && render.length !== 2) {
              error(
                'forwardRef render functions accept exactly two parameters: props and ref. %s',
                render.length === 1
                  ? 'Did you forget to use the ref parameter?'
                  : 'Any additional parameter will be undefined.'
              );
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error(
                  'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
                );
              }
            }
          }
          const elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render,
          };
          {
            let ownName;
            Object.defineProperty(elementType, 'displayName', {
              enumerable: false,
              configurable: true,
              get() {
                return ownName;
              },
              set(name) {
                ownName = name;
                if (render.displayName == null) {
                  render.displayName = name;
                }
              },
            });
          }
          return elementType;
        }
        const enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === 'string' || typeof type === 'function') {
            return true;
          }
          if (
            type === exports.Fragment ||
            type === exports.Profiler ||
            type === REACT_DEBUG_TRACING_MODE_TYPE ||
            type === exports.StrictMode ||
            type === exports.Suspense ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            type === REACT_LEGACY_HIDDEN_TYPE ||
            enableScopeAPI
          ) {
            return true;
          }
          if (typeof type === 'object' && type !== null) {
            if (
              type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE ||
              type[0] === REACT_SERVER_BLOCK_TYPE
            ) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error(
                'memo: The first argument must be a component. Instead received: %s',
                type === null ? 'null' : typeof type
              );
            }
          }
          const elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare,
          };
          {
            let ownName;
            Object.defineProperty(elementType, 'displayName', {
              enumerable: false,
              configurable: true,
              get() {
                return ownName;
              },
              set(name) {
                ownName = name;
                if (type.displayName == null) {
                  type.displayName = name;
                }
              },
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          const dispatcher = ReactCurrentDispatcher.current;
          if (!(dispatcher !== null)) {
            {
              throw Error(
                'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
              );
            }
          }
          return dispatcher;
        }
        function useContext(Context, unstable_observedBits) {
          const dispatcher = resolveDispatcher();
          {
            if (unstable_observedBits !== void 0) {
              error(
                'useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s',
                unstable_observedBits,
                typeof unstable_observedBits === 'number' && Array.isArray(arguments[2])
                  ? '\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks'
                  : ''
              );
            }
            if (Context._context !== void 0) {
              const realContext = Context._context;
              if (realContext.Consumer === Context) {
                error(
                  'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
                );
              } else if (realContext.Provider === Context) {
                error(
                  'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
                );
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }
        function useState(initialState) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            const dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        let disabledDepth = 0;
        let prevLog;
        let prevInfo;
        let prevWarn;
        let prevError;
        let prevGroup;
        let prevGroupCollapsed;
        let prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              const props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true,
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props,
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              const props = {
                configurable: true,
                enumerable: true,
                writable: true,
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog,
                }),
                info: _assign({}, props, {
                  value: prevInfo,
                }),
                warn: _assign({}, props, {
                  value: prevWarn,
                }),
                error: _assign({}, props, {
                  value: prevError,
                }),
                group: _assign({}, props, {
                  value: prevGroup,
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed,
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd,
                }),
              });
            }
            if (disabledDepth < 0) {
              error(
                'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
              );
            }
          }
        }
        const ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        let prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                const match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = (match && match[1]) || '';
              }
            }
            return `\n${prefix}${name}`;
          }
        }
        let reentry = false;
        let componentFrameCache;
        {
          const PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return '';
          }
          {
            const frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          let control;
          reentry = true;
          const previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          let previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              const Fake = function () {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, 'props', {
                set() {
                  throw Error();
                },
              });
              if (typeof Reflect === 'object' && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === 'string') {
              const sampleLines = sample.stack.split('\n');
              const controlLines = control.stack.split('\n');
              let s = sampleLines.length - 1;
              let c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        const _frame = `\n${sampleLines[s].replace(' at new ', ' at ')}`;
                        {
                          if (typeof fn === 'function') {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          const name = fn ? fn.displayName || fn.name : '';
          const syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
          {
            if (typeof fn === 'function') {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          const { prototype } = Component2;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return '';
          }
          if (typeof type === 'function') {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === 'string') {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case exports.Suspense:
              return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame('SuspenseList');
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                const lazyComponent = type;
                const payload = lazyComponent._payload;
                const init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(
                    init(payload),
                    source,
                    ownerFn
                  );
                } catch (x) {}
              }
            }
          }
          return '';
        }
        const loggedTypeFailures = {};
        const ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              const owner = element._owner;
              const stack = describeUnknownElementTypeFrameInDEV(
                element.type,
                element._source,
                owner ? owner.type : null
              );
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            const has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (const typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                let error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== 'function') {
                    const err = Error(
                      `${
                        componentName || 'React class'
                      }: ${location} type \`${typeSpecName}\` is invalid; it must be a function, usually from the \`prop-types\` package, but received \`${typeof typeSpecs[
                        typeSpecName
                      ]}\`.This often happens because of typos such as \`PropTypes.function\` instead of \`PropTypes.func\`.`
                    );
                    err.name = 'Invariant Violation';
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](
                    values,
                    typeSpecName,
                    componentName,
                    location,
                    null,
                    'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                  );
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error(
                    '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                    componentName || 'React class',
                    location,
                    typeSpecName,
                    typeof error$1
                  );
                  setCurrentlyValidatingElement(null);
                }
                if (
                  error$1 instanceof Error &&
                  !(error$1.message in loggedTypeFailures)
                ) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error('Failed %s type: %s', location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              const owner = element._owner;
              const stack = describeUnknownElementTypeFrameInDEV(
                element.type,
                element._source,
                owner ? owner.type : null
              );
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        let propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            const name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
              return `\n\nCheck the render method of \`${name}\`.`;
            }
          }
          return '';
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            const fileName = source.fileName.replace(/^.*[\\\/]/, '');
            const { lineNumber } = source;
            return `\n\nCheck your code at ${fileName}:${lineNumber}.`;
          }
          return '';
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return '';
        }
        const ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          let info = getDeclarationErrorAddendum();
          if (!info) {
            const parentName =
              typeof parentType === 'string'
                ? parentType
                : parentType.displayName || parentType.name;
            if (parentName) {
              info = `\n\nCheck the top-level render call using <${parentName}>.`;
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          const currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          let childOwner = '';
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = ` It was passed a child from ${getComponentName(
              element._owner.type
            )}.`;
          }
          {
            setCurrentlyValidatingElement$1(element);
            error(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              currentComponentErrorInfo,
              childOwner
            );
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== 'object') {
            return;
          }
          if (Array.isArray(node)) {
            for (let i = 0; i < node.length; i++) {
              const child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            const iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') {
              if (iteratorFn !== node.entries) {
                const iterator = iteratorFn.call(node);
                let step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            const { type } = element;
            if (type === null || type === void 0 || typeof type === 'string') {
              return;
            }
            let propTypes;
            if (typeof type === 'function') {
              propTypes = type.propTypes;
            } else if (
              typeof type === 'object' &&
              (type.$$typeof === REACT_FORWARD_REF_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE)
            ) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              const name = getComponentName(type);
              checkPropTypes(propTypes, element.props, 'prop', name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              const _name = getComponentName(type);
              error(
                'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                _name || 'Unknown'
              );
            }
            if (
              typeof type.getDefaultProps === 'function' &&
              !type.getDefaultProps.isReactClassApproved
            ) {
              error(
                'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
              );
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            const keys = Object.keys(fragment.props);
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error(
                  'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                  key
                );
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error('Invalid attribute `ref` supplied to `React.Fragment`.');
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          const validType = isValidElementType(type);
          if (!validType) {
            let info = '';
            if (
              type === void 0 ||
              (typeof type === 'object' &&
                type !== null &&
                Object.keys(type).length === 0)
            ) {
              info +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            const sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            let typeString;
            if (type === null) {
              typeString = 'null';
            } else if (Array.isArray(type)) {
              typeString = 'array';
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = `<${getComponentName(type.type) || 'Unknown'} />`;
              info = ' Did you accidentally export a JSX literal instead of a component?';
            } else {
              typeString = typeof type;
            }
            {
              error(
                'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                typeString,
                info
              );
            }
          }
          const element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (let i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === exports.Fragment) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        let didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          const validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn(
                'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
              );
            }
            Object.defineProperty(validatedFactory, 'type', {
              enumerable: false,
              get() {
                warn(
                  'Factory.type is deprecated. Access the class directly before passing it to createFactory.'
                );
                Object.defineProperty(this, 'type', {
                  value: type,
                });
                return type;
              },
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          const newElement = cloneElement.apply(this, arguments);
          for (let i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        {
          try {
            const frozenObject = Object.freeze({});
            /* @__PURE__ */ new Map([[frozenObject, null]]);
            /* @__PURE__ */ new Set([frozenObject]);
          } catch (e) {}
        }
        const createElement$1 = createElementWithValidation;
        const cloneElement$1 = cloneElementWithValidation;
        const createFactory = createFactoryWithValidation;
        const Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild,
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.PureComponent = PureComponent;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useEffect = useEffect;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.version = ReactVersion;
      })();
    }
  },
});

// node_modules/react/index.js
const require_react = __commonJS({
  'node_modules/react/index.js': function (exports, module) {
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  },
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
let React;
var init_react = __esm({
  'node_modules/@remix-run/dev/compiler/shims/react.ts': function () {
    React = __toESM(require_react());
  },
});

export {
  __esm,
  __commonJS,
  __toESM,
  require_object_assign,
  require_react,
  React,
  init_react,
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// # sourceMappingURL=/build/_shared/chunk-P2FTGPOX.js.map
