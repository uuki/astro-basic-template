/**
 * ESLint rule: no-astro-script
 * Disallow <script> tags in Astro components to prevent chunk generation
 */

export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow <script> tags in Astro components',
      category: 'Best Practices',
      recommended: false,
    },
    messages: {
      noScript: '<script> tags are not allowed in Astro components for CMS integration',
    },
    schema: [],
  },
  create(context) {
    return {
      JSXElement(node) {
        // Check if this is a <script> tag
        if (node.openingElement && node.openingElement.name && node.openingElement.name.name === 'script') {
          context.report({
            node,
            messageId: 'noScript',
          });
        }
      },
    };
  },
};
