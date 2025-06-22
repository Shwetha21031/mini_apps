
import ErrorElement from "./layouts/ErrorElement/ErrorElement";
import Rootlayout from "./layouts/RootLayout/Rootlayout";
import Home from "./pages/Home/Home";
import Timer from "./features/timer/Timer";
import TodoList from "./features/todoList/TodoList";
import Modal from "./features/modal/Modal";
import Accordion from "./features/accordion/Accordion";
import {createBrowserRouter} from 'react-router-dom'
import PageNotFound from "./layouts/PageNotFound/PageNotFound";

const Routers = [
    {
        path: "/",
        element: <Rootlayout />,
        errorElement: <ErrorElement />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'todo',
                element: <TodoList />
            },
            {
                path: 'modal',
                element: <Modal />
            },
            {
                path: 'timer',
                element: <Timer />
            },
            {
                path: 'accordion',
                element: <Accordion />
            }
        ]
    },
    {
        path: '/error',
        element: <ErrorElement />
    },
    {
        path: "*",
        element: <PageNotFound />
    }
]

export const router = createBrowserRouter(Routers)