// import React from 'react';

// class HelloComponent extends React.Component {
//     render() {
//         return <h1>Hello World!</h1>;
//     }
// }

// export default HelloComponent;

// ----------------------------------
// import React, { Component } from 'react';

// class HelloComponent extends Component {
//     render() {
//         return <h1>Hello World!</h1>;
//     }
// }

// export default HelloComponent;

// ----------------------------------
// import React, { Component } from 'react';

// class HelloComponent extends Component {
//     render() {
//         // JSX expressions must have one parent element.
//         // Only One JSX Element can returned
//         return (
//             <div>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </div>
//         );
//     }
// }

// export default HelloComponent;

// ---------------------------------- Fragments
// import React, { Component } from 'react';

// class HelloComponent extends Component {
//     render() {
//         // JSX expressions must have one parent element.
//         // Only One JSX Element can returned
//         return (
//             <>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </>
//         );
//     }
// }

// export default HelloComponent;

// ---------------------------------- Function Syntax

// function HelloComponent() {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Function Declaration Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = function () {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Function Expression Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = () => {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Multiline Arrow Function Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = () => (
//     <>
//         <h1>Hello World!</h1>
//         <h1>Singleline Arrow Function Syntax!</h1>
//     </>
// );

// export default HelloComponent;

// Class Syntax - Stateful Component / Container Component
// Function Syntax - Stateless Component / Presentational Component

// ----------------------------------------- Using Global CSS

const HelloComponent = () => (
    <div className="container">
        <h1 className="red">Hello World!</h1>
        <h1 className="text-primary">Hello World Again!</h1>
        <h1 className="text-success">
            Activity Icon
            <span className="bi bi-activity"></span>
        </h1>
    </div>
);

export default HelloComponent;