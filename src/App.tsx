import { Route, Switch } from 'react-router-dom';
import Main from '@/components/Main';


export default function App() {
  return (
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
  );
}