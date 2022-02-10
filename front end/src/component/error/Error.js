import React from 'react';
import './Error.css';

function Error(props) {

  var f = document.getElementById('error');
  document.addEventListener('click', function(ev){
    f.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    f.style.transform += 'translateX('+(ev.clientX-25)+'px)';
},false);

    return (
        <div>
          <h1 id='error'>404: Page Not Found 😞</h1>  
        </div>
    );
}

export default Error;