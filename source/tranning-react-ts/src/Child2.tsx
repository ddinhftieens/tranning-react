import React, { memo, useEffect } from 'react'

function Child2(props: any) {
    const { callBack } = props
    console.log(callBack);
    // useEffect(() => {
    //     const temp = setInterval(() => {
    //         console.log("111111111111111111111111");
    //     }, 1000)
    //     return () => {
    //         clearInterval(temp);
    //     }
    // }, [])
    return (
        <div>Child2</div>
    )
}

export default memo(Child2)
