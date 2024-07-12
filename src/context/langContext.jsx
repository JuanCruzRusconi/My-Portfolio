import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import englishMessages from '../lang/en-us.json';
import spanishMessages from '../lang/es-es.json';

const langContext = React.createContext();

const LangProvider = ({children}) => {

    const [ messages, stablishMessages ] = useState(englishMessages);

    const [ locale, stablishLocale ] = useState('en-us');

    const handleLanguaje = (lan) => {
        
        switch (lan) {
            case 'en-us':
                stablishMessages(englishMessages);
                stablishLocale('en-us');
                break;
            case 'es-es':
                stablishMessages(spanishMessages);
                stablishLocale('es-es');
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