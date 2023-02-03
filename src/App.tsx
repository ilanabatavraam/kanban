import React from 'react';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {FormAdd} from "./components/FormAdd";
import {TasksLine} from "./components/TasksLine";
import {Tasks} from "./components/Tasks";
import {taskNamesLine} from "./data/taskLines";

function App() {
  return (
    <>
      <Header />
        <Main title='Kanban main content'>
            <FormAdd />
            <Tasks title="tasks">
                <TasksLine data={taskNamesLine[0]} title="Open"/>
            </Tasks>
        </Main>
    </>
  );
}

export default App;
