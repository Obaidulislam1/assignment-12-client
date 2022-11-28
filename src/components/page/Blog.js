import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mb-5'>blog page</h1>
            <div className="card card-compact w-4/5 bg-base-100 shadow-xl mx-auto p-6">
                <h1 className='text-center font-bold'>What are the different ways to manage a state in a react application?</h1>
                <p className='text-center'>Once you attempt to manage state across multiple components, things get a bit trickier.

                    You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

                    What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.

                    To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.</p>
            </div>
            <div className="card card-compact w-4/5 bg-base-100 shadow-xl mx-auto p-6">
                <h1 className='text-center font-bold'>How does prototypical inheritance work</h1>
                <p className='text-center'>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                Sharing amid objects makes for easy inheritance of structure behavior and state.

                JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
            </div>
            <div className="card card-compact w-4/5 bg-base-100 shadow-xl mx-auto p-6">
                <h1 className='text-center font-bold'>What is a unit test? Why should we write unit tests</h1>
                <p className='text-center'></p>
            </div>
            <div className="card card-compact w-4/5 bg-base-100 shadow-xl mx-auto p-6">
                <h1 className='text-center font-bold'>React vs Angle vs Vue?</h1>
                <p className='text-center'></p>
            </div>
        </div>
    );
};

export default Blog;