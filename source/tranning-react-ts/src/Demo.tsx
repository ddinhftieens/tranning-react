import { error } from 'console';
import React from 'react'
import Child from './Child';
import Child2 from './Child2';

export default function Demo() {
  const name = "<h1>나르시아 펩타이드 더블 이펙트 앰플 50ml</h1>"
  const isRed: boolean = false;


  const objName = {
    name: "Nguyen Van A",
    age: 20,
    image: "fe03476f-8bc0-4d2b-89ca-0b442b350cf7.png"
  }

  const formatName = (objName: any) => {
    return <h1>Hello , {objName.name}, {objName.age}</h1>
  }

  const lst = [
    { name: "Nguyen Van A", age: 20 },
    { name: "Nguyen Van B", age: 21 },
    { name: "Nguyen Van C", age: 22 },
    { name: "Nguyen Van D", age: 23 },
    { name: "Nguyen Van E", age: 24 }
  ]

  const generateUrlImage = (fleSeq: string) => {
    return `${process.env.REACT_APP_API_URL}/public/getImage?atchFleSeqNm=${fleSeq}`;
  }

  const callBack = () => {
    console.log("12345678");

  }

  return (
    // <div className='text-center'>{name}</div>
    // <div className='text-center' dangerouslySetInnerHTML={{__html: name}}></div>
    // <div className={`${isRed ? 'color-red' : 'color-green'} text-center`} >Hello, {name}</div>
    // <div>
    //   {
    //     formatName(objName)
    //   }
    // </div>
    // <div className='text-center'>
    //   {
    //     // isRed && <h1>Hello, Nguyen Van A</h1>
    //     isRed ? <h1>{objName.name}</h1> : <h2>{objName.age}</h2>
    //   }
    // </div>

    // <div className='text-center'>
    //   {
    //     lst.map((e, index) => {
    //       return <h1 className={`${index % 2 == 0 ? 'color-green' : 'color-red'}`} key={index}> {index}, {e.name}, {e.age}</h1>
    //     })
    //   }
    //   <h1>Total list: {lst.length}</h1>
    // </div>

    // <div className='text-center'>
    //   {/* <img src={objName.image} /> */}
    //   <img src={generateUrlImage(objName.image + " adfad")} onError={(event: any) => {
    //     event.target.src = require("./assets/images/img1.png")
    //   }} />
    // </div>

    // <div className='text-center'>
    //   <img src={require("./assets/images/img1.png") error} />
    // </div>

    // <>
    //   <h1>Hello, Nguyen Van A</h1>
    //   <h2>Hello, Nguyen Van B</h2>
    // </>
    <div className='text-center'>
      <Child objName={objName} callBack={callBack} lst={lst}>
        <Child2 />
        <h1>Hello, Nguyen Van A</h1>
      </Child>
    </div>

  )
}
