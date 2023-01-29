import React from 'react';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {FormAdd} from "./components/FormAdd";
import {TasksLine} from "./components/TasksLine";

function App() {
  return (
    <>
      <Header />
        <Main title='Kanban main content'>
            <FormAdd />
            <TasksLine />
        </Main>
    </>
  );
}

export default App;
