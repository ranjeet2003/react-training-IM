/* eslint-disable */

import React from 'react';

// import ComponentOne from '../2_multi-components/ComponentOne';
// import ComponentTwo from '../2_multi-components/ComponentTwo';

// import ComponentOne from '../3_inline-css/ComponentOne';
// import ComponentTwo from '../3_inline-css/ComponentTwo';

// import ComponentOne from '../4_external-css/comp-one/ComponentOne';
// import ComponentTwo from '../4_external-css/comp-two/ComponentTwo';

// import ComponentOne from '../5_css-modules/comp-one/ComponentOne';
// import ComponentTwo from '../5_css-modules/comp-two/ComponentTwo';
// import ComponentWithState from '../6_comp-state/ComponentWithState';
// import ComponentWithProps from '../componentWithProps/ComponentWithProps';
// import Counter from '../Counter/Counter';
// import ListRoot from '../TableComponent/TableComponent';
// import Calculator from '../Calculator/Calculator'
import CRUD from '../crud/CRUD';
// var data = {
//     id: 1,
//     name: "Manish",
//     address: {
//         city: "Pune"
//     }
// };

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <ComponentOne />
            <ComponentTwo /> */}

            {/* <ComponentWithState /> */}

            {/* <ComponentWithProps
                id={1}
                name={"Manish"}
                address={{ city: "Pune" }}
                display={() => { alert("From Root"); }} /> */}

            {/* <ComponentWithProps
                id={data.id}
                name={data.name}
                address={data.address}
                display={() => { alert("From Root"); }} /> */}

            {/* <ComponentWithProps
                {...data}
                display={() => { alert("From Root"); }} /> */}
            {/* <Counter /> */}
            {/* <ListRoot /> */}
            {/* <Calculator /> */}
            <CRUD />
        </div>
    );
};

export default RootComponent;