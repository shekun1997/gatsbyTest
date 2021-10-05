import * as React from "react"

const Item = ({props}) => (
    <div
    style={{
      background: `blue`,
      width: `150px`,
      height: `150px`,
      textAlign: `center`,
      display: `inline-block`,
      margin: `25px`,
    }}>
      {console.log(props)}
    </div>
)

export default Item
