define('netpromo-homepage/tests/acceptance/blog-test', ['exports', 'qunit', 'netpromo-homepage/tests/helpers/module-for-acceptance', 'netpromo-homepage/tests/pages/blog'], function (exports, _qunit, _netpromoHomepageTestsHelpersModuleForAcceptance, _netpromoHomepageTestsPagesBlog) {

  (0, _netpromoHomepageTestsHelpersModuleForAcceptance['default'])('Acceptance | blog');

  (0, _qunit.test)('visiting blog page', function (assert) {
    var page = _netpromoHomepageTestsPagesBlog['default'].visit();

    andThen(function () {
      assert.equal(page.blogTitle, "NPS is helping large corporations increase customer retention");
      assert.equal(page.blogBody.length > 0, true);
      assert.equal(page.blogAuthor, 'By: Lin He');
      assert.equal(page.blogAuthorBio, "Lin is an entrepreneur, experienced web developer, husband, parent of two daughters, loves programing, basketball and coffee.");
      assert.equal(page.blogDate, "Mon Jul 18 2016");
    });
  });
});
define('netpromo-homepage/tests/acceptance/blog-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance/blog-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/blog-test.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/acceptance/blogs-test', ['exports', 'qunit', 'netpromo-homepage/tests/helpers/module-for-acceptance', 'netpromo-homepage/tests/pages/blogs', 'netpromo-homepage/resource-data/blogs'], function (exports, _qunit, _netpromoHomepageTestsHelpersModuleForAcceptance, _netpromoHomepageTestsPagesBlogs, _netpromoHomepageResourceDataBlogs) {

  (0, _netpromoHomepageTestsHelpersModuleForAcceptance['default'])('Acceptance | blogs');

  (0, _qunit.test)('visiting blogs page', function (assert) {
    var page = _netpromoHomepageTestsPagesBlogs['default'].visit();
    var blogs = _netpromoHomepageResourceDataBlogs['default'].data;
    var blog1 = blogs[0].attributes;

    andThen(function () {
      assert.equal(page.blogSize, blogs.length);
      assert.equal(page.firstBlogTitle, blog1.title);
      assert.equal(page.firstBlogSummary, blog1.summary);
      assert.equal(page.firstBlogAuthor, 'By: Lin He');
      assert.equal(page.firstBlogDate, new Date(blog1.created_at).toDateString());
    });
  });
});
define('netpromo-homepage/tests/acceptance/blogs-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance/blogs-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/blogs-test.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/adapters/blog.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters/blog.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/blog.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/blogs/blog/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - blogs/blog/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'blogs/blog/route.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/blogs/index/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - blogs/index/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'blogs/index/route.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/blogs/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - blogs/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'blogs/route.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/components/full-div/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/full-div/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/full-div/component.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/components/hello-bar/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/hello-bar/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/hello-bar/component.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/components/sm-footer/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/sm-footer/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sm-footer/component.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/helpers/date-format.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/date-format.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/date-format.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('netpromo-homepage/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'netpromo-homepage/tests/helpers/start-app', 'netpromo-homepage/tests/helpers/destroy-app'], function (exports, _qunit, _netpromoHomepageTestsHelpersStartApp, _netpromoHomepageTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _netpromoHomepageTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _netpromoHomepageTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('netpromo-homepage/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/helpers/relationship-helpers', ['exports', 'ember-qunit', 'ember'], function (exports, _emberQunit, _ember) {
  exports.testForHasMany = testForHasMany;
  exports.testForBelongsTo = testForBelongsTo;

  function testForHasMany(name, many) {
    (0, _emberQunit.test)('should have many ' + many, function (assert) {
      var Model = this.store().modelFor(name);
      var relationship = _ember['default'].get(Model, 'relationshipsByName').get(many);

      assert.equal(relationship.key, many, 'has relationship with ' + many);
      assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
    });
  }

  function testForBelongsTo(name, belongsTo) {
    (0, _emberQunit.test)('should belong to ' + belongsTo, function (assert) {
      var Model = this.store().modelFor(name);
      var relationship = _ember['default'].get(Model, 'relationshipsByName').get(belongsTo);

      assert.equal(relationship.key, belongsTo, 'has relationship with ' + belongsTo);
      assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
    });
  }
});
define('netpromo-homepage/tests/helpers/relationship-helpers.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/relationship-helpers.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/relationship-helpers.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/helpers/resolver', ['exports', 'netpromo-homepage/resolver', 'netpromo-homepage/config/environment'], function (exports, _netpromoHomepageResolver, _netpromoHomepageConfigEnvironment) {

  var resolver = _netpromoHomepageResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _netpromoHomepageConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _netpromoHomepageConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('netpromo-homepage/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/helpers/start-app', ['exports', 'ember', 'netpromo-homepage/app', 'netpromo-homepage/config/environment'], function (exports, _ember, _netpromoHomepageApp, _netpromoHomepageConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _netpromoHomepageConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _netpromoHomepageApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('netpromo-homepage/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/index/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - index/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/route.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/initializers/date-attribute.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - initializers/date-attribute.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/date-attribute.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/integration/components/full-div/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('full-div', 'Integration | Component | full div', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.6',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.6',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'full-div', [], [], 0, null, ['loc', [null, [2, 4], [4, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('netpromo-homepage/tests/integration/components/full-div/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/full-div/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/full-div/component-test.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/integration/components/hello-bar/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('hello-bar', 'Integration | Component | hello bar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.6',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'hello-bar', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.6',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.6',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'hello-bar', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('netpromo-homepage/tests/integration/components/hello-bar/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/hello-bar/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/hello-bar/component-test.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/integration/components/sm-footer/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  // import hbs from 'htmlbars-inline-precompile';

  (0, _emberQunit.moduleForComponent)('sm-footer', 'Integration | Component | sm footer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(0); //...
  });
});
define('netpromo-homepage/tests/integration/components/sm-footer/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/sm-footer/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sm-footer/component-test.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/legal/privacy/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - legal/privacy/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'legal/privacy/route.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/legal/terms/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - legal/terms/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'legal/terms/route.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/mirage/config.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mirage/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/mirage/factories/author.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mirage/factories/author.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/author.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/mirage/factories/blog.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mirage/factories/blog.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/blog.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/mirage/jsonapi-helpers.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mirage/jsonapi-helpers.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/jsonapi-helpers.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/mirage/scenarios/default.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mirage/scenarios/default.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/mixins/after-render.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/after-render.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/after-render.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/models/author.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/author.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/author.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/models/blog.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/blog.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/blog.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/page-object', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  exports.attribute = _emberCliPageObject.attribute;
  exports.clickOnText = _emberCliPageObject.clickOnText;
  exports.clickable = _emberCliPageObject.clickable;
  exports.collection = _emberCliPageObject.collection;
  exports.contains = _emberCliPageObject.contains;
  exports.count = _emberCliPageObject.count;
  exports.create = _emberCliPageObject.create;
  exports.fillable = _emberCliPageObject.fillable;
  exports.selectable = _emberCliPageObject.fillable;
  exports.hasClass = _emberCliPageObject.hasClass;
  exports.is = _emberCliPageObject.is;
  exports.isHidden = _emberCliPageObject.isHidden;
  exports.isVisible = _emberCliPageObject.isVisible;
  exports.notHasClass = _emberCliPageObject.notHasClass;
  exports.property = _emberCliPageObject.property;
  exports.text = _emberCliPageObject.text;
  exports.triggerable = _emberCliPageObject.triggerable;
  exports.value = _emberCliPageObject.value;
  exports.visitable = _emberCliPageObject.visitable;
  Object.defineProperty(exports, 'buildSelector', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.buildSelector;
    }
  });
  Object.defineProperty(exports, 'findElementWithAssert', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.findElementWithAssert;
    }
  });
  Object.defineProperty(exports, 'findElement', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.findElement;
    }
  });
  Object.defineProperty(exports, 'getContext', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.getContext;
    }
  });
  exports['default'] = {
    attribute: _emberCliPageObject.attribute,
    clickOnText: _emberCliPageObject.clickOnText,
    clickable: _emberCliPageObject.clickable,
    collection: _emberCliPageObject.collection,
    contains: _emberCliPageObject.contains,
    count: _emberCliPageObject.count,
    create: _emberCliPageObject.create,
    fillable: _emberCliPageObject.fillable,
    hasClass: _emberCliPageObject.hasClass,
    is: _emberCliPageObject.is,
    isHidden: _emberCliPageObject.isHidden,
    isVisible: _emberCliPageObject.isVisible,
    notHasClass: _emberCliPageObject.notHasClass,
    property: _emberCliPageObject.property,
    selectable: _emberCliPageObject.fillable,
    text: _emberCliPageObject.text,
    triggerable: _emberCliPageObject.triggerable,
    value: _emberCliPageObject.value,
    visitable: _emberCliPageObject.visitable
  };
});
define("netpromo-homepage/tests/page-objects/blog", ["exports", "netpromo-homepage/tests/page-object"], function (exports, _netpromoHomepageTestsPageObject) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var BlogPage = (function (_PageObject) {
    _inherits(BlogPage, _PageObject);

    function BlogPage() {
      _classCallCheck(this, BlogPage);

      _get(Object.getPrototypeOf(BlogPage.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(BlogPage, [{
      key: "assertBlogTitle",
      value: function assertBlogTitle() {
        return this.assertHasText("[data-test-target='post-title']", "Welcome to Smiley");
      }
    }, {
      key: "assertBlogBody",
      value: function assertBlogBody() {
        return this.assertHasText("[data-test-target='post-body']", "blah blah");
      }
    }, {
      key: "assertBlogAuthor",
      value: function assertBlogAuthor() {
        return this.assertHasText("[data-test-target='post-author']", "Joe Doe");
      }
    }, {
      key: "assertBlogAuthorBio",
      value: function assertBlogAuthorBio() {
        return this.assertHasText("[data-test-target='post-author-bio']", "blah");
      }
    }, {
      key: "assertBlogDate",
      value: function assertBlogDate() {
        return this.assertHasText("[data-test-target='post-date']", "Mar 30th, 2016");
      }
    }]);

    return BlogPage;
  })(_netpromoHomepageTestsPageObject["default"]);

  exports["default"] = BlogPage;
});
define('netpromo-homepage/tests/page-objects/blog.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - page-objects/blog.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'page-objects/blog.js should pass jshint.');
  });
});
define("netpromo-homepage/tests/page-objects/blogs", ["exports", "netpromo-homepage/tests/page-object"], function (exports, _netpromoHomepageTestsPageObject) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var BlogsPage = (function (_PageObject) {
    _inherits(BlogsPage, _PageObject);

    function BlogsPage() {
      _classCallCheck(this, BlogsPage);

      _get(Object.getPrototypeOf(BlogsPage.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(BlogsPage, [{
      key: "assertBlogsSize",
      value: function assertBlogsSize() {
        return this.assertEqualLength("[data-test-target='posts-post']", 2);
      }
    }, {
      key: "assertFirstBlogTitle",
      value: function assertFirstBlogTitle() {
        return this.assertHasText("[data-test-target='post-title']", "Welcome to Smiley");
      }
    }, {
      key: "assertFirstBlogSummary",
      value: function assertFirstBlogSummary() {
        return this.assertHasText("[data-test-target='post-summary']", "Smiley Summary");
      }
    }, {
      key: "assertFirstBlogAuthor",
      value: function assertFirstBlogAuthor() {
        return this.assertHasText("[data-test-target='post-author']", "Joe Doe");
      }
    }, {
      key: "assertFirstBlogDate",
      value: function assertFirstBlogDate() {
        return this.assertHasText("[data-test-target='post-date']", "Mar 30th, 2016");
      }
    }]);

    return BlogsPage;
  })(_netpromoHomepageTestsPageObject["default"]);

  exports["default"] = BlogsPage;
});
define('netpromo-homepage/tests/page-objects/blogs.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - page-objects/blogs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'page-objects/blogs.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/pages/blog', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  exports['default'] = (0, _emberCliPageObject.create)({
    visit: (0, _emberCliPageObject.visitable)('/blog/2016/07/18/nps-helps-large-corporations'),
    blogTitle: (0, _emberCliPageObject.text)("[data-test-target='post-title']"),
    blogBody: (0, _emberCliPageObject.text)("[data-test-target='post-body']"),
    blogAuthor: (0, _emberCliPageObject.text)("[data-test-target='post-author']"),
    blogAuthorBio: (0, _emberCliPageObject.text)("[data-test-target='post-author-bio']"),
    blogDate: (0, _emberCliPageObject.text)("[data-test-target='post-date']")
  });
});
define('netpromo-homepage/tests/pages/blog.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pages/blog.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/blog.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/pages/blogs', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  exports['default'] = (0, _emberCliPageObject.create)({
    visit: (0, _emberCliPageObject.visitable)('/blog'),
    blogSize: (0, _emberCliPageObject.count)("[data-test-target='posts-post']"),
    firstBlogTitle: (0, _emberCliPageObject.text)("[data-test-target='post-title']:first"),
    firstBlogSummary: (0, _emberCliPageObject.text)("[data-test-target='post-summary']:first"),
    firstBlogAuthor: (0, _emberCliPageObject.text)("[data-test-target='post-author']:first"),
    firstBlogDate: (0, _emberCliPageObject.text)("[data-test-target='post-date']:first")
  });
});
define('netpromo-homepage/tests/pages/blogs.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pages/blogs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/blogs.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/resource-data/blogs.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resource-data/blogs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resource-data/blogs.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/test-helper', ['exports', 'netpromo-homepage/tests/helpers/resolver', 'ember-qunit'], function (exports, _netpromoHomepageTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_netpromoHomepageTestsHelpersResolver['default']);
});
define('netpromo-homepage/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/unit/blogs/index/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:blogs/index', 'Unit | Route | blogs/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('netpromo-homepage/tests/unit/blogs/index/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/blogs/index/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/blogs/index/route-test.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/unit/blogs/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:blogs', 'Unit | Route | blogs', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('netpromo-homepage/tests/unit/blogs/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/blogs/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/blogs/route-test.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/unit/helpers/date-format-test', ['exports', 'netpromo-homepage/helpers/date-format', 'qunit'], function (exports, _netpromoHomepageHelpersDateFormat, _qunit) {

  (0, _qunit.module)('Unit | Helper | date format');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var date = new Date("Tue Jul 19 2016 22:59:56 GMT-0700 (PDT)");
    var result = (0, _netpromoHomepageHelpersDateFormat.dateFormat)([date]);
    assert.equal(result, "Tue Jul 19 2016");
  });
});
define('netpromo-homepage/tests/unit/helpers/date-format-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers/date-format-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/date-format-test.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/unit/index/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('netpromo-homepage/tests/unit/index/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/index/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/route-test.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/unit/legal/privacy/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:legal/privacy', 'Unit | Route | legal/privacy', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('netpromo-homepage/tests/unit/legal/privacy/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/legal/privacy/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/legal/privacy/route-test.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/unit/legal/terms/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:legal/terms', 'Unit | Route | legal/terms', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('netpromo-homepage/tests/unit/legal/terms/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/legal/terms/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/legal/terms/route-test.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/unit/models/author-test', ['exports', 'ember-qunit', 'netpromo-homepage/tests/helpers/relationship-helpers'], function (exports, _emberQunit, _netpromoHomepageTestsHelpersRelationshipHelpers) {

  (0, _emberQunit.moduleForModel)('author', 'Unit | Model | author', {
    needs: ["model:blog"]
  });

  (0, _netpromoHomepageTestsHelpersRelationshipHelpers.testForHasMany)('author', 'blogs');
});
define('netpromo-homepage/tests/unit/models/author-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/author-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/author-test.js should pass jshint.');
  });
});
define('netpromo-homepage/tests/unit/models/blog-test', ['exports', 'ember', 'ember-qunit', 'netpromo-homepage/tests/helpers/relationship-helpers'], function (exports, _ember, _emberQunit, _netpromoHomepageTestsHelpersRelationshipHelpers) {

  (0, _emberQunit.moduleForModel)('blog', 'Unit | Model | blog', {
    needs: ["model:author"]
  });

  (0, _netpromoHomepageTestsHelpersRelationshipHelpers.testForBelongsTo)('blog', 'author');

  (0, _emberQunit.test)('it exists', function (assert) {
    var store = this.store();
    var author = null;

    _ember['default'].run(function () {
      author = store.createRecord("author", {
        name: "hi"
      });
    });

    var model = this.subject({
      author: author
    });

    assert.equal(model.get('authorName'), "hi");
  });
});
define('netpromo-homepage/tests/unit/models/blog-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/blog-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/blog-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('netpromo-homepage/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map