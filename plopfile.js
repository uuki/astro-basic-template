function camelize (str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setHelper('camelize', camelize);

  /**
   * example scaffolding structure
   */
  plop.setGenerator('component', {
    description: 'Create a new React component',
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
        message: 'Component name (PascalCase):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{componentName}}/{{componentName}}.astro',
        templateFile: 'plop-templates/component.astro.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{componentName}}/{{componentName}}.module.scss',
        templateFile: 'plop-templates/style.module.scss.hbs'
      }
    ]
  });
}
