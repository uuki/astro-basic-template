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

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setHelper('camelize', camelize);
  plop.setHelper('pascalize', pascalize);

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
        message: 'Component name (Auto-converted to PascalCase):',
        filter: pascalize
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{pascalize componentName}}/{{pascalize componentName}}.astro',
        templateFile: 'plop-templates/component.astro.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{pascalize componentName}}/{{pascalize componentName}}.module.scss',
        templateFile: 'plop-templates/style.module.scss.hbs'
      }
    ]
  });
}
