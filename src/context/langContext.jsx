import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import englishMessages from '../lang/en-us.json';
import spanishMessages from '../lang/es-es.json';

const langContext = React.createContext();

const messagesMap = {
    "en-us": englishMessages,
    "es-es": spanishMessages,
};

const LangProvider = ({ children }) => {

    const savedLang = localStorage.getItem("lang") || "es-es";

    const [ locale, setLocale ] = useState(savedLang);
    const [ messages, setMessages ] = useState(messagesMap[savedLang]);

    const handleLanguaje = (lan) => {
        setLocale(lan);
        setMessages(messagesMap[lan]);
        localStorage.setItem("lang", lan);
    };

        return (
            
            <langContext.Provider value={{ handleLanguaje: handleLanguaje, locale }}>
                <IntlProvider locale={locale} messages={messages}>
                    {children}
                </IntlProvider>
            </langContext.Provider>

        )
};

export {LangProvider, langContext};