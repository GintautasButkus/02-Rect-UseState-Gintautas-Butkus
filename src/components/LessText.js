import React, { useState } from 'react'

export default function LessText({text, maxLength}) {
    const [status, setText] = useState(false);   

    return (

        <div>
              <p>
                  {status ?  text : text.substring(0, maxLength) }
                  <a href="#" onClick={() => setText(!status)}>{status ?   "read less" : "...read more"}</a>                 
              </p>
        </div>
  );
}

