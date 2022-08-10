import React, {createContext, useState, useContext} from "react";

export type InitialContext = {
    active: boolean,
    checked: boolean,
    HandlerOpen: () => void,
    HandlerSwitch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// Создание контекста

export const NewsContext = createContext<InitialContext>({
    active: false,
    checked: false,
    HandlerOpen:() => Function(),
    HandlerSwitch:() => Function()
});

// Вызов контекста

export const useNews = () => useContext(NewsContext);

// Провайдер

export const NewsProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {

  // Стейт для открытия свитчера в хедере и выключение бегущей строки

  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState(true);

  // Функция открытия

  const HandlerOpen = () => {
    setActive((active) => !active);
  }

  // Функция переключения свитчера

  const HandlerSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <NewsContext.Provider value={{active, checked, HandlerOpen, HandlerSwitch}}>
        { children }
    </NewsContext.Provider>
  );
};