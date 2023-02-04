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
                <TasksLine color="rgb(229, 231, 235)" data={taskNamesLine[0]} title="Open"/>
                <TasksLine color="rgb(191, 219, 254)" data={taskNamesLine[1]} title="In progress"/>
                <TasksLine color="rgb(187, 231, 235)" data={taskNamesLine[2]} title="Done"/>
                <TasksLine color="rgb(252, 165, 164)" data={taskNamesLine[3]} title="Bin"/>
            </Tasks>
        </Main>
    </>
  );
}

export default App;
