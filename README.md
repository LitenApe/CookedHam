# Kitchen

Kitchen will become my location for everything i need in a project. From React components to utility functions and custom hooks. This is the place to find whatever I might need to "cook" my applications. The project will be created as a styleless component library which also holds whichever hooks and functions I think will be beneficial. The reason why it is styleless is so that whomever stumbles upon this project can easily fork it and customize it to their preference, without having to figure out how styling related things are connected. It is, in other words, a clean canvas ready to be used.

All the components has been written without the use of JSX, which is intentional. I wanted to improve my understanding of the top level API provided by React, which is why some of the choices might be questionable for most of you. In other words, this project serves as my sandbox where I test certain design patterns and such, which has resulted in some components being rewritten multiple times to serve as a source for discussion with friends and collegues.

The project is currently only configured to work as a development and testing ground. If you actually want to build the components and use them, then there is one simple task that needs to be done. You have two options to reach the goal of using the project as an actual component library. One is to create an index file, which imports every single component to serve as the entry point. The other is to add a bundler or eject create-react-app and configure it to crawl through the repository and build everything it finds.

## Project Structure

The project is structured with an **atomic design system** in mind, which means that components are structured based on it's intended purpose and size. Everything that is not a component lives in the **utils** directory, which is then divided into hooks or functions. Global type definitions live at the **utils** root for now, however, it should be moved into its own directory sometime in the future.

Each component directory consist of at least three files, the component itself, a story for documentation and development of said component and tests for the component. If the component need its logic split up for abstraction purposes, then those files should live inside of a directory named **bones** in the component directory which use them. This will ensure that each component is isolated as much as possible from the outside, and the **bones** only have to take the components use-case into consideration, which helps in keeping complexity to a minimum.

Below you will find an illustration of how the project will be structured as it grows.

Kitchen/  
├─ atoms/  
│ ├─ component/  
│ │ ├─ Component  
│ │ ├─ Component Story  
│ │ ├─ Component Test  
├─ molecules/  
├─ organisms/  
├─ utils/  
│ ├─ hooks/  
│ ├─ functions/  
│ ├─ types/

## Available Scripts

The project was created through the use of **Create React App** and **Storybook** initialization commands. All the generated configuration should be untouched with some few exceptions to make solve some build issues in the beginning related **to Storybook** and **TypeScript**

### start

start can be used to start storybook which serves as a place for documentation and for component development.

```bash
npm run start
```

### test

test executes all tests and enters watch mode. Please read the **Jest** documentation for more information regarding running tests and options.

```bash
npm run test
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

## Questions

Create an issue with your questions and I'll try to answer it to the best of my ability. I don't take request for missing components, as the project is not intended as a one stop shop for everyone, hence the no styling.
