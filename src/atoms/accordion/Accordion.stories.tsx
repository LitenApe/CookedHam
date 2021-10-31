import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import {
  Accordion as Component,
  AccordionHeader as Heading,
  AccordionPanel as Panel,
} from '.';

export default {
  title: 'Atom/Accordion',
  component: Component,
  parameters: {
    componentSubtitle: 'Sections with show/hide functionality',
    docs: {
      description: {
        component: `
    An accordion is a vertically stacked stacked
    heading and content which interact to either display or
    hide content from the user. The heading functions as a
    control which enables users to reveal or hide their
    associated section of content. Accordions are commonly
    used to reduce the need to scroll when presenting multiple
    sections on a single page.

    The Accordion element serves as the parent for the heading
    and panel, and is the component used to interact with
    the show or hide state of the underlying components.
        `,
      },
    },
  },
  argTypes: {
    open: {
      name: 'open',
      description: 'controls whether or not the accordion content is visible',
      type: 'boolean',
    },
    onClick: {
      name: 'onClick',
      description:
        'click handler for toggling whether or not the content should be visible',
      type: 'function',
    },
  },
} as Meta;

const Template: Story = ({ children, ...args }) => (
  <Component {...args}>{children}</Component>
);

export const Accordion = Template.bind({});
Accordion.args = {
  ...Accordion.args,
  open: true,
  onClick: action('toggle'),
  children: (
    <>
      <Heading>Accordion Heading</Heading>
      <Panel>
        <h4>What is Lorem Ipsum?</h4>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <h4>Why do we use it?</h4>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </Panel>
    </>
  ),
};

export const AccordionHeader = Template.bind({});
AccordionHeader.storyName = 'AccordionHeader';
AccordionHeader.parameters = {
  docs: {
    description: {
      story: `
    The AccordionHeader serves as the content sections
    heading in addition to enabling users to show or hide the
    associated content when interacted with. The heading, by itself
    is only a button, and should therefore be wrapped by an appropriate
    heading tag when used on a page.
      `,
    },
  },
};
AccordionHeader.args = {
  children: <Heading>Accordion Heading</Heading>,
};

export const AccordionPanel = Template.bind({});
AccordionPanel.storyName = 'AccordionPanel';
AccordionPanel.parameters = {
  docs: {
    description: {
      story: `
    The AccordionPanel is where the content lives and
    is simply a section element which serves as an container
    for whatever you want to render inside of it. The content's
    visibility is controlled by users interacting with the
    associated header.
      `,
    },
  },
};
AccordionPanel.args = {
  open: true,
  children: (
    <Panel>
      <h4>What is Lorem Ipsum?</h4>
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>

      <h4>Why do we use it?</h4>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </Panel>
  ),
};
