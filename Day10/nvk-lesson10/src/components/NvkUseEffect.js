import React, { useEffect, useState } from 'react'

function NvkUseEffect() {
    //STATE
    const [NvkCount, setNvkCount] = useState(0);




    //

    useEffect(() => {
        console.log("Day la useEffect mot tham so ");
    });
    //
    //
    //
    const NvkArr = [10, 20, 30, 40];
    const [NvkArray, setNvkArray] = useState(NvkArr);
    useEffect(() => {
        console.log("Day la useEffect 2 tham so,tham so thu hai la mang doi so  phu thuoc Nvkarray");
    }, [NvkArray]);
    /*-    -*/
    useEffect(() => {
        console.log("Day la useEffect 2 tham so,tham so thu hai la mang rong[] ");
    }, [NvkCount]);
    //
    const NvkHandleAddList = () => {
        setNvkArray([
            ...NvkArray,
            parseInt(Math.random() * 100),
        ])
    }

    return (
        <div className='alert alert-info'>
            <h2>Demo useEffect</h2>
            <h3>Count: {NvkCount}</h3>
            <button onClick={() => setNvkCount(NvkCount + 2)}>Click here</button>

            <div>
                <h3>Array: {NvkArray.toString()}</h3>
                <button onClick={NvkHandleAddList} >them</button>
            </div>
        </div>
    )
}

export default NvkUseEffect