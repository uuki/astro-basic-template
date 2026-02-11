# Guideline

## Component Directory Structure

In this project, components are classified into 4 layers based on responsibility and level of abstraction.

### ui (Foundational UI – smallest units)

This directory contains components that do not express a role on their own, but are decomposed into abstract and highly reusable units.

- Primitive visual elements (buttons, input fields, icons, etc.)
- No specific context or responsibility
- Foundational building blocks with maximum reusability

### objects (Semantic UI – role and composition)

This directory is intended to give meaning and roles to the UI by composing one or more minimal units.

- Components formed by combining elements from the `ui` directory
- UI units with specific purposes, such as cards, list items, and navigation elements
- Focused solely on UI responsibilities, without business logic or functional behavior

### layouts (Structural UI – layout and skeleton)

This directory is intended only for defining placement and sizing, without concern for individual visual designs or their internal composition.

- Defines page and section skeletons
- Grid systems, layout patterns, and placement rules
- Does not affect the visual appearance of child elements; responsible only for structure and positioning
- Handles responsive layout behavior and spacing control

### features (Functional UI – behavior)

This directory is intended for components that define behavior. It does not focus on site or application-wide structure, but is limited to feature-specific structures.

- Components with specific functionality or business logic
- Includes state management, data fetching, and event handling
- Encapsulated by feature and capable of operating independently
- Feature-focused structure, independent of the overall site architecture

## Design Principles

- **Single Responsibility Principle**: Clearly separate the responsibilities of each directory to avoid mixed concerns
- **Layered Abstraction**: Gradually increase specificity through layers  
  (ui → objects → layouts) + features
- **Dependency Direction**: UI layers must not depend on components within the same layer  
  - Example: If there are an icon (UI), a button (UI), and an icon button (UI), the icon button should treat the icon as an asset rather than as a component, and be implemented as a distinct component
- **Reusability**: Lower layers are more generic and reusable, while higher layers are more dependent on specific contexts

## Notes

These design principles prioritize reducing unclear dependencies and preventing deadlocks in large-scale projects with hundreds or more components.

Depending on the project size, relaxing some dependency constraints may be a more appropriate choice in terms of development cost and implementation efficiency. Please adapt these guidelines flexibly according to the needs of your project.
