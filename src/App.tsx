import { Route, Switch } from 'react-router-dom';
import Main from '@/components/Main';
import GlobalStyleProvider from '@styles/GlobalStyleProvider';

export default function App() {
  return (
    <GlobalStyleProvider>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </GlobalStyleProvider>
  );
}
