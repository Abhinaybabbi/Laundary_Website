import React from 'react'
  
const Progress_bar = ({bgcolor,progress,text,height}) => {
     
    const Parentdiv = {
        
        height: height,
        width: '600px',
        backgroundColor: 'whitesmoke',
        borderRadius: 8,
        margin: 20
      }
      
      const Childdiv = {
        
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:8,
        textAlign: 'right',
        margin: 2
      }
      
      const progresstext = {
        padding: 20,
        color: 'black',
        fontWeight: 500,
        margin:20
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${text}`}</span>
      </div>
    </div>
    )
}
  
export default Progress_bar;