import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Raiting } from './Raiting';

export default {
    title: 'Raiting stories',
    component: Raiting,
} as ComponentMeta<typeof Raiting>;

const Template: ComponentStory<typeof Raiting> = (args) => <Raiting {...args} />;

export const FirstStory = Template.bind({});

export const EmptyRaiting: ComponentStory<typeof Raiting> = () => <Raiting value={0} onClick={a => a}/>;
export const Raiting1 = () => <Raiting value={1} onClick={a => a}/>
export const Raiting2 = () => <Raiting value={2} onClick={a => a}/>
export const Raiting3 = () => <Raiting value={3} onClick={a => a}/>
export const Raiting4 = () => <Raiting value={4} onClick={a => a}/>
export const Raiting5 = () => <Raiting value={5} onClick={a => a}/>



