import './App.css';
// the hook
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className='App'>
      <h1>{t('Welcome to React')}</h1>{' '}
    </div>
  );
}

export default App;
