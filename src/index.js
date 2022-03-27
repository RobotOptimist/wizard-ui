import { render } from 'react-dom';
import './index.css';
import App from './App';
import CreateWizard from "./routes/create-wizard";
import WizardDetails from "./routes/wizard-details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root')
render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/wizard-details" element={<WizardDetails />} />
    <Route path="/create-wizard" element={<CreateWizard />} />
  </Routes> 
</BrowserRouter>,
rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
