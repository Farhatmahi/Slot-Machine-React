import React from "react";

const SlotM = (props) => {
  //   let x = props.x
  //   let y =  props.y
  //   let z = props.z
  //Now we use object destructuring in line 9

  let { x, y, z } = props;

  if (x === y && y === z) {
    return (
      <>
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This is matching</h1>
        <hr />
      </>
    );
  } else {
    return (
      <>
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This isn't matching</h1>
        <hr />
      </>
    );
  }
};

export default SlotM;
