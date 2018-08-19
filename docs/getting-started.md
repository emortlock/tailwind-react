### About

Tailwind React provides ready built components that make use of the [Tailwind CSS](https://tailwindcss.com/) framework.

From https://tailwindcss.com/docs/what-is-tailwind:

> Creating a framework for building custom UIs means you can't provide abstractions at the usual level of buttons, forms, cards, navbars, etc.
> Instead, Tailwind provides highly composable, low-level utility classes that make it easy to build complex user interfaces.

Tailwind React leverages these utility classes to provide base level components that are common across various projects, whilst still offering the ability to customise the output to match your project's style.

### Installation

To install the npm package run the following within your project.

```bash
npm install tailwind-react
```

### Usage

Once installed you can import the components and use them as you would any other.

```jsx static
import React from 'react'
import { Button } from 'tailwind-react'

const MyButton = () => <Button fill>Submit</Button>
```

Which when output on the page would give you the following.

```jsx
<Button fill>Submit</Button>
```
