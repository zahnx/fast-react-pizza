# Fast React Pizza 🍕

A simple pizza ordering app built during **Jonas Schmedtmann’s Advanced React course**, showcasing modern React features like **Redux Toolkit**, **React Router v6.14+**, and **Data Loaders/Actions**.

## Description

This project is a comprehensive single-page application (SPA) for ordering pizzas, developed as part of the **"The Ultimate React Course 2023"** by Jonas Schmedtmann. It demonstrates advanced routing patterns, state management using Redux Toolkit, and interaction with backend APIs through React Router’s new data APIs (loaders & actions).

## Tech Stack

- React (with Hooks)
- Redux Toolkit
- React Router v6 (Data APIs)
- Tailwind CSS
- Custom Hooks
- Vite

##  Routing Structure

The app uses nested routing and route-based data loading:

```jsx
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

## Live Demo

[Fast React Pizza Live Demo Link](https://fastpizza-zahn.netlify.app)

## Installation

```bash
git clone https://github.com/zahnx/fast-react-pizza.git
cd fast-react-pizza
npm install
npm run dev
```
