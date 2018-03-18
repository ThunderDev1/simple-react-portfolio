import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route exact path='/experience' component={ Experience } />
    <Route exact path='/skills' component={ Skills } />
    <Route exact path='/contact' component={ Contact } />
</Layout>;
