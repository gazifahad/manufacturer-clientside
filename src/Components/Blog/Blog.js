import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5 mx-auto p-12'>
            <article className="mb-10">
                <h3 className="text-primary text-2xl">How will you improve the performance of a React Application?</h3>
                <div className='my-10'>
                    <p><strong>Using Pure components: </strong> Pure components are the same as that of the normal components except the fact they take care of shouldComponentUpdate. The component is not re-rendered if the previous props and state data is the same as that of the next state or props.
                    </p>
                    <p><strong>React.memo for component memorization: </strong> Just like in the pure components, if the input props are the same, then the component rendering will be skipped thus increasing the speed and the efficiency of the component.
                    </p>
                    <p><strong>shouldComponentUpdate Life Cycle Event: </strong> The shouldcomponentupdate life cycle event is triggered before the re-rendering of the component.This event can be effectively utilized to decide when the component should be re-rendered.
                    </p>
                    <p><strong>Arrow Function: </strong>The usage of arrow functions is considered as standard practice while working with the classes. The usage of arrow functions helps in preserving the context of the execution.
                    </p>
                    <p><strong>Refrain from using Inline style attribute: </strong>The browser usually spends a huge amount of time in scripting and rendering with the inline style.The scripting consumes a lot of time as it has to map all the style rules that are passed to the actual CSS properties. This results in increased rendering time for the component.
                    </p>
                </div>
            </article>
            <article className="mb-10">
                <h3 className="text-primary text-2xl">What are the different ways to manage a state in a React application?</h3>
                <div className='my-10'>
                    <p>There are <strong>four main types of state</strong> to properly manage in React apps:
                        </p>                       
                            <div className='pl-12'>
                            <li><strong>Local state</strong> -  Local state is data we manage in one or another component.</li>
                            <li><strong>Global state</strong> - Global state is data we manage across multiple components.</li>
                            <li><strong>Server state</strong> - Data that comes from an external server that must be integrated with our UI state.</li>
                            <li><strong>URL state</strong> -  Data that exists on our URLs, including the pathname and query parameters.</li>
                            </div>                    
                 </div>
            </article>
            <article className="mb-10">
                <h3 className="text-primary text-2xl">How does prototypical inheritance work?</h3>
                <div className='my-10'>
                    <p>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object
                    </p>
                </div>
            </article>
            <article className="mb-10">
                <h3 className="text-primary text-2xl">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
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
                <h3 className="text-primary text-2xl">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <div className='my-10'>                   
                        <code>                           
                        <p>
                            const myArray = [...]; <br />
                            const searchName = "iPhone 12"; <br />
                            const result = myArray.filter(item =&gt;  item.name === searchName); <br />
                            console.log(result);                            
                        </p>                    
                        </code>
                </div>
            </article>
            <article className="mb-10">
                <h3 className="text-primary text-2xl">What is a unit test? Why should write unit tests?</h3>
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