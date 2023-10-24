import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='max-w-4xl mx-auto px-5 py-10 text-justify'>
                <h1 className='font-bold text-5xl pb-4'>When should you use context API?</h1>

                <p className='px-4'> Use the Context API in React when you need to share state or data among multiple components, manage global configurations, handle authentication/user data, manage themes, support localization, simplify routing and navigation, reduce prop drilling, deal with complex component compositions, or facilitate testing. However, avoid overusing it for simple state management within a component. Consider alternative state management solutions for more complex applications.</p>

                <h1 className='font-bold text-5xl pb-4'>What is a custom hook?</h1>

                <p className='px-4'>A custom hook in React is a JavaScript function that encapsulates and shares reusable logic across components, improving code organization and reusability. They are named with a "use" prefix and can handle various tasks like state management, side effects, and more.</p>

                <h1 className='font-bold text-5xl pb-4'>What is useRef?</h1>

                <p className='px-4'>`useRef` is a React Hook that's used to create references to DOM elements or to store mutable values without causing re-renders when the reference or value changes.</p>

                <h1 className='font-bold text-5xl pb-4'>What is useMemo?</h1>

                <p className='px-4'>`useMemo` is a React Hook that memoizes the result of a function or a computation, preventing unnecessary recalculations and improving performance. It's typically used to optimize expensive calculations or computations in functional components.</p>

            </div>


        </div>
    );
};

export default Blog;