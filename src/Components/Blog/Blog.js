import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5 mx-auto p-12'>
            <article className="mb-10">
                <h3 className="text-primary text-2xl"><span className='text-red-900'>Q.</span> How will you improve the performance of a React Application?</h3>
                <div className='my-10'>
                    <p><strong>Using Multiple Chunk Files: </strong> Our application starts with a few components..we keep adding new features and dependencies in them,so unconciously we make a huge production,We can have two seperate files that will seperate our vendor or all the third party library code by taking advantage of commonchunkplugin,by splitting it our browser caches less frequently and parallel downloads resources so it reduces load time wait.
                    </p>
                    <p><strong>Dependency optimization: </strong> If we consider optimizing the size of our application bundle, we should check the dependencies to see how much code we're actually using. For example, we can use Moment.js, which contains localized files to support multiple languages. If we don't need to support multiple languages,  consider using the momentlocaleswebpackplugin to remove unused locales in our final bundle.
                        Another example is loadash. Assuming we use only  20 of the 100 or more methods, it is not optimal to include all the additional methods in the final package. Therefore, we can use the lodashwebpackplugin to remove unused features.
                    </p>
                    <p><strong>Use Throttling: </strong> throttling means delaying function execution. So instead of executing the event handler/function immediately, we`ll be adding a few milliseconds of delay when an event is triggered. This can be used when implementing infinite scrolling, for example. Rather than fetching the next result set as the user is scrolling, we can delay the XHR call.
                        Another good example of this is Ajaxbased instant search. we  don't want to hit the host with every keystroke, so it's best to limit it until the input field is idle for a few milliseconds.
                        Throttling can be done in a number of ways. we can limit by the number of events fired or by the running delay event handler.
                    </p>
                    <p><strong>using of Arrow Function: </strong>The use of arrow functions is considered as standard practice while we work with the classes. The usage of arrow functions helps in preserving the context of the execution.
                    </p>
                    <p><strong>Refrain from using Inline style attribute: </strong>The browser usually spends a huge amount of time in scripting and rendering with the inline style.The scripting consumes a lot of time as it has to map all the style rules that are passed to the actual CSS properties. This results in increased rendering time for the component.
                    </p>
                </div>
            </article>
            <article className="mb-10">
                <h3 className="text-primary text-2xl"><span className='text-red-900'>Q.</span>  What are the different ways to manage a state in a React application?</h3>
                <div className='my-10'>
                    <p>There are <strong>four main types of state</strong> to properly managed in React apps:
                    </p>
                    <div className='pl-12'>
                        <li><strong>Local state</strong> -  Local state is data that we manage in one or another component.</li>
                        <li><strong>Global state</strong> - Global state is data we manage across multiple /all the components where we need  it.</li>
                        <li><strong>Server state</strong> - Data that comes from an external server that must be integrated with our UI state.</li>
                        <li><strong>URL state</strong> -  Data that exists on our URLs, including the pathname and query parameters.</li>
                    </div>
                </div>
            </article>
            <article className="mb-10">
                <h3 className="text-primary text-2xl"> <span className='text-red-900'>Q.</span> How does prototypical inheritance work?</h3>
                <div className='my-10'>
                    <p>
                    Prototypical inheritance is a javascript feature  used to add methods and properties to objects. It is a method by which an object can inherit  properties and methods from another object.Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object
                    </p>
                </div>
            </article>
            <article className="mb-10">
                <h3 className="text-primary text-2xl"> <span className='text-red-900'>Q.</span> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                <div className='my-10'>
                    <p>There are some possible causes:</p>

                    <div className='pl-12'>
                        <li>We will lose control of the state across all components</li>
                        <li>If we update it directly, calling the setState() afterward may just replace the update we made.</li>
                        <li>When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                    </div>

                </div>
            </article>
            <article className="mb-10">
                <h3 className="text-primary text-2xl"> <span className='text-red-900'>Q.</span> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <div className='my-10'>
                    <code>
                        <p>
                            const myArray = [...]; <br />
                            const searchName = "desired name"; <br />
                            const result = myArray.filter(item =&gt;  item.name === searchName); <br />
                            console.log(result);
                        </p>
                    </code>
                </div>
            </article>
            <article className="mb-10">
                <h3 className="text-primary text-2xl"> <span className='text-red-900'>Q.</span> What is a unit test? Why should write unit tests?</h3>
                <div className='my-10'>
                    <p><strong>Unit testing</strong> is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.</p>
                    <p>
                        Developers write unit tests so they can repeatedly run them and check that no bugs have been introduced. If unit tests are slow, developers are more likely to skip running them on their own machines. One slow test won't make a significant difference; add one thousand more and we're surely stuck waiting for a while.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default Blog;