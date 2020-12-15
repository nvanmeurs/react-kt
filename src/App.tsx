import {
  ApplicationStateCounter
} from './application-state/ApplicationStateCounter';
import { ComponentStateCounter } from './component-state/ComponentStateCounter';
import { BasicGreeting } from './components/BasicGreeting';
import { JSX } from './jsx/JSX';
import { Greeting } from './props/Greeting';

export const App = () => (
  <div className="App">
    <h3>JSX example</h3>
    <JSX />
    <hr />
    <h3>Component example</h3>
    <BasicGreeting />
    <hr />
    <h3>Props example</h3>
    <Greeting name="Metapipes" />
    <Greeting language="es" name="Metapipes" />
    <Greeting language="es" color="red" name="Metapipes" />
    <hr />
    <h3>Component state example</h3>
    <ComponentStateCounter />
    <ComponentStateCounter />
    <hr />
    <h3>Application state example</h3>
    <ApplicationStateCounter />
    <ApplicationStateCounter />
  </div>
);
