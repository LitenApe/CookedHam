# Kitchen

Kitchen is a "one stop shop" for _cooking_ utensils used to create delishes web applications. Additionally, we provide you with all the spices and condiments needed to flavour food, bringing it up to Michelin star levels of deliciousness. All jokes aside though. Kitchen is a styleless component library which can be forked and expanded to speed up the development process of a component library. Component libraries are slowly becoming a necessity for professional work. It speeds up development speed, reduces overall bugs and provides consistency between applications. Additionally, it helps developers create good markup and in our case here, also assist in providing accessible elements for most users out there.

The project is still in alpha, and currently serves as a playground where I try to optimize the code to what I believe to be a maintainable codebase. A codebase which can be understood and worked on by people of all skill levels. All the components are written without JSX at the moment, which is intentional on my part. On one side, it as to test out how much easier or worse it is to work with React without JSX. On the other hand, it made it easier to work with polymophic components in the initial phase of the project.

Another important thing of note is that the project is yet to be configured for **production**. At it's current state, the project only works as an development sandbox. This is because I am still unsure on how I want the component to be used. Should they all be individual packages? Should it be one large library which is added and upgraded as a whole? With all things, how the library is bundled and distributed will affect how easy it is to take it in use within professional codebases.

## Project Structure

The project is structured following the **atomic design system** to slowly build up fully functional and usable components. While it does not following the mindset of atomic design systems completely, it makes use of its principles to slowly build up the components complexity, effectively reducing the amount of logic needed in one single component. The components are supported by **utils** which lives on the outside and attempts to make the code more readable whenever applicable. It also helps to reduce **id** and **key** collisions with **hooks** such as **useId**.

Each component directory consist of at least three files, the component itself, a story for documentation and development of said component and tests for the component. All complementary components and logic which is needed for the **main** component to function is separated into a directory named **bones** to keep the root tidy. Bones are component specific functionality which is tailored for one particular use case. It makes no attempt at generalising it's problem, which means that other components which might have some similar use-case but not exactly similar while have their own version tailored towards their own use-case.

Below you will find an illustration of how the project will be structured as it grows.

Kitchen/  
├─ atoms/  
│ ├─ component/  
│ │ ├─ bones  
│ │ ├─ Component  
│ │ ├─ Component Story  
│ │ ├─ Component Test  
│ │ ├─ index  
├─ molecules/  
├─ organisms/  
├─ utils/  
│ ├─ hooks/  
│ ├─ functions/  
│ ├─ types/

## Roadmap

As mentioned in the introduction, the project is still in alpha, which means that there are still a few things that needs to be done before the project be used distributed and used. Below you will find the tasks which needs to be finished before the components are usable in no particular order.

### Early alpha

- [x] Individual form components
  - [x] Input
  - [x] Checkbox
  - [x] Radio
  - [x] Radio Group
  - [x] Select
  - [x] Label
  - [x] Fieldset
  - [x] Legend
  - [x] Field
  - [x] Button
- [x] Layout components
  - [x] Accordion
  - [x] Backdrop
  - [x] Alert
- [x] Utility components
  - [x] DangerousHTML
  - [x] Descendants
  - [x] ErrorBoundary
  - [x] BaseInput

### Alpha

- [x] FormFields
  - [x] InputField
  - [x] CheckboxField
  - [x] RadioField
  - [x] SelectField
- [x] Layout components
  - [x] AccordionGroup
- [x] Utility components
  - [x] BaseField
- [ ] Other tasks
  - [ ] Add tests for form fields

### Beta

- [ ] Individual form components
  - [ ] Combobox
- [ ] FormFields
  - [ ] ComboboxField
- [ ] Layout components
  - [ ] Dialog
  - [ ] VisiblyHidden
- [ ] Utility components
  - [ ] Dropzone
- [ ] Other tasks
  - [ ] Rewrite codebase to use JSX
  - [ ] Add documentation to components
  - [ ] Mono or _Monolith_ code distribution
  - [ ] Github Actions for tagging
  - [ ] Github Actions for releases
  - [ ] Github Actions for publishing

## Questions

Create an issue with your questions and I'll try to answer it to the best of my ability. I don't take request for missing components as the project is still in its infant periode where the essentials still need to be developed.

## Available Scripts

The project was created through the use of **Create React App** and **Storybook** initialization commands. All the generated configuration should be untouched with some few exceptions to solve some build issues in the beginning related to **Storybook** and **TypeScript** which I encountered.

### start

start can be used to start storybook which serves as a place for documentation and for component development.

```bash
npm run start
```

### test

test executes all tests and enters watch mode. Please read the **Jest** documentation for more information regarding running tests and options. Tests are ran in watch mode by default, necessary flags will therefore be required to disable watch mode if it is an undesirable feature.

```bash
npm run test

// without watch mode
npm run test -- watchAll=false
```

### build-storybook

build-storybook builds storybook, as the name implies, which gives you distribution files if you want to host the documentation page somewhere.

```bash
npm run build-storybook
```

### lint

```bash
npm run lint
```

### format

```bash
npm run format
```

#### Don't Touch, Cant Touch

The scripts listed under is defined in the **package.json** file, however, they serve no purpose at the moment. Build does nothing, as it has no target file to build from and eject should only be used if you know what you are doing. Eject exposes the build configuration, however, it is not possible to reverse the operation.

##### build

```bash
npm run build
```

##### eject

```bash
npm run eject
```
