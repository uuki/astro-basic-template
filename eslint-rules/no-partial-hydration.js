/**
 * ESLint rule: no-partial-hydration
 * Disallow client directives that create islands (partial hydration)
 * Only client:only is allowed for full client-side rendering
 */

export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow partial hydration client directives in Astro components',
      category: 'Best Practices',
      recommended: false,
    },
    messages: {
      noPartialHydration:
        'Client directive "{{directive}}" is not allowed. Use client:only for full client-side rendering.',
    },
    schema: [],
  },
  create(context) {
    const disallowedDirectives = ['client:load', 'client:idle', 'client:visible', 'client:media'];

    return {
      JSXAttribute(node) {
        // Check if this is a client directive
        if (node.name && node.name.type === 'JSXNamespacedName') {
          const namespace = node.name.namespace.name;
          const name = node.name.name.name;
          const fullDirective = `${namespace}:${name}`;

          if (disallowedDirectives.includes(fullDirective)) {
            context.report({
              node,
              messageId: 'noPartialHydration',
              data: {
                directive: fullDirective,
              },
            });
          }
        }
      },
    };
  },
};
