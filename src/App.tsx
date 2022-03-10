import { useState } from "react";
import { UsersProvider } from "./UsersContext";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

import { GlobalStyle } from "./styles/global";

export function App() {
  const [search, setSearch] = useState("")
    
  return (
    <UsersProvider>
      <Header setSearch={setSearch}/>
      <Home search={search}/>
      <GlobalStyle />
    </UsersProvider>
  );
}

