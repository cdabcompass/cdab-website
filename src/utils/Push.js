import React from 'react'
import Button from '@material-ui/core/Button';


function But(props) {
  return (
    <div> <Button style = {{color : '#fff' , background : '#0095E6'}}  variant="contained" size='large' disableElevation>{props.name}</Button></div>
  )
}

export default But
