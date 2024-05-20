import AppNavigation from './src/navigation/AppNavigation'
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <AppNavigation />
  );
}


registerRootComponent(App);