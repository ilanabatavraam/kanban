import React from 'react';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {FormAdd} from "./components/FormAdd";

function App() {
  return (
    <>
      <Header />
        <Main title='Kanban main content'>
            <FormAdd />
        </Main>
    </>
  );
}

export default App;
