import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import englishMessages from '../lang/en-us.json';
import spanishMessages from '../lang/es-es.json';

const langContext = React.createContext();

const LangProvider = ({children}) => {

    let defaultLocale = "es-es";
    let defaultMessages = spanishMessages;
    
    const lang = localStorage.getItem('lang');
    if(lang) {
        defaultLocale = lang;
        if(lang === 'en-us') defaultMessages = englishMessages;
        else defaultMessages = spanishMessages;
    };

    const [ messages, stablishMessages ] = useState(defaultMessages);

    const [ locale, stablishLocale ] = useState(defaultLocale);

    const handleLanguaje = (lan) => {
        
        switch (lan) {
            case 'en-us':
                stablishMessages(englishMessages);
                stablishLocale('en-us');
                localStorage.setItem('lang', 'en-us');
                break;
            case 'es-es':
                stablishMessages(spanishMessages);
                stablishLocale('es-es');
                localStorage.setItem('lang', 'es-es');
                break;
            default:
                stablishMessages(spanishMessages);
                stablishLocale('es-es');
        }
    };

        return (
            
            <langContext.Provider value={{handleLanguaje: handleLanguaje, locale}}>
                <IntlProvider locale={locale} messages={messages}>
                    {children}
                </IntlProvider>
            </langContext.Provider>

        )
};

export {LangProvider, langContext};