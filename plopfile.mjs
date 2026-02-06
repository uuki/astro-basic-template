function camelize (str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

function pascalize (str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

function kebabize (str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setHelper('camelize', camelize);
  plop.setHelper('pascalize', pascalize);
  plop.setHelper('kebabize', kebabize);

  /**
   * scaffolding structure
   */
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'list',
        name: 'componentType',
        message: 'Select component type:',
        choices: ['layouts', 'objects', 'ui']
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name (Auto-converted to kebab-case):',
        filter: kebabize
      }
    ],
    actions: function (data) {
      const actions = [
        {
          type: 'add',
          path: 'src/components/{{kebabize componentType}}/{{kebabize componentName}}.astro',
          templateFile: 'plop-templates/component.astro.hbs'
        }
      ];

      const styleActions = {
        layouts: {
          path: 'src/styles/5_layouts/_{{kebabize componentName}}.scss',
          templateFile: 'plop-templates/style.scss.hbs'
        },
        objects: {
          path: 'src/styles/6_objects/_{{kebabize componentName}}.scss',
          templateFile: 'plop-templates/style.scss.hbs'
        },
        ui: {
          path: 'src/styles/7_ui/_{{kebabize componentName}}.scss',
          templateFile: 'plop-templates/style.scss.hbs'
        }
      };

      const styleAction = styleActions[data.componentType];
      if (styleAction) {
        actions.push({
          type: 'add',
          path: styleAction.path,
          templateFile: styleAction.templateFile
        });
      }

      return actions;
    }
  });
}
