import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const UserInput = (props) => {
   return  (
       <div className="card">
            <div class="card-body mx-4 mt-4">
                <div className='md-form'>
                        <input 
                            className='form-control'
                            type='text'
                            onChange={props.onChangeInput}
                            defaultValue={props.oldValue}/>
                    </div>
                </div>
    </div>
        )
}

export default UserInput