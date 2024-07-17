import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import englishMessages from '../lang/en-us.json';
import spanishMessages from '../lang/es-es.json';

const langContext = React.createContext();

const LangProvider = ({children}) => {

    let defaultLocale;
    let defaultMessages;
    const lang = localStorage.getItem('lang');
    if(lang) {
        defaultLocale = lang;
        if(lang === 'en-us') defaultMessages = englishMessages;
        if(lang === 'es-es') defaultMessages = spanishMessages;
        else {
            defaultLocale = 'en-us';
            defaultMessages = englishMessages;
        }
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
                stablishMessages(englishMessages);
                stablishLocale('en-us');
        }
    };

        return (
            
            <langContext.Provider value={{handleLanguaje: handleLanguaje}}>
                <IntlProvider locale={locale} messages={messages}>
                    {children}
                </IntlProvider>
            </langContext.Provider>

        )
};

export {LangProvider, langContext};