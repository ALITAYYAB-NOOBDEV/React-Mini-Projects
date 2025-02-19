import { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './contexts/Theme'; // Corrected spelling
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
    const [theme, setTheme] = useState('light');
    const dark = () => setTheme('dark');
    const light = () => setTheme('light');

    useEffect(() => {
        document.querySelector('html').classList.remove('dark', 'light');
        document.querySelector('html').classList.add(theme);
    }, [theme]);

    return (
        <ThemeProvider value={{ theme, dark, light }}>  {/* Corrected spelling */}
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
