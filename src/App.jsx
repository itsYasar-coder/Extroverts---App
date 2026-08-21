import { useState } from 'react'
import Screen1Welcome from './components/Screen1Welcome'
import Screen2Consents from './components/Screen2Consents'
import SignupWizard from './components/SignupWizard'; 
import Screen5MainFeed from './components/Screen5MainFeed'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const goToStep = (step) => {
    setCurrentStep(step);
  }

  const renderScreen = () => {
    switch (currentStep) {
      case 1:
        return <Screen1Welcome onContinue={() => goToStep(2)} />;
      case 2:
        return <Screen2Consents onAccept={() => goToStep(3)} />;
      case 3:
        return <SignupWizard onComplete={() => goToStep(5)} />;
      case 5:
        return <Screen5MainFeed />;
      default:
        return <Screen1Welcome onContinue={() => goToStep(2)} />;
    }
  };

  return (
    <div className={`app-main-wrapper`}>
      {renderScreen()}
    </div>
  )
}

export default App;