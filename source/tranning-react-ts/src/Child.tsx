import React from 'react'

export default function Child(props: any) {

    console.log(props);

    const { objName, callBack, lst } = props;

    // console.log(lst);
    


    return (
        <>
            {/* <div>{objName.name}, {objName.age}</div> */}
            <button onClick={callBack}>call back 123</button>
            {
                props.children
            }
        </>
    )
}

// export default memo(Child)
