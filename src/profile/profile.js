import React from 'react'
import PropTypes from 'prop-types';
export default function profile(props) {
  const profileStyle = {
       
    width: "300px",
    height: "300px",
    'borderRadius':'50%',
    resizeMode: 'contain',
alignSelf: 'center',
color:"red",
  };

  const backgroundimgStyle={backgroundColor:'#250861'};
  
  const containerStyle={backgroundColor:'#dcdcdc',width:'100%',height:'100%',
  position: 'absolute',left:'0','overflow':'hidden'};

const titleStyle={
  fontFamily: 'cursive',color:'	#696969',  border: '1px solid #250861'
};


const spanStyle={
  fontFamily: 'cursive',color:'	#696969'
};
const linkStyle = {
  margin: "50%",
  textDecoration: "none",
  color: '#250861',  border: '1px solid #250861'
};
  return (
    <div>
          
          
           <div className='backgroundimg' style={backgroundimgStyle}><img src={props.image} alt="me" style={profileStyle}/></div>
        <div className='container' style={containerStyle}><h2 style={titleStyle}>fullname:</h2><span style={spanStyle}>{props.fullname}</span>
    <h2 style={titleStyle}>profession:</h2><span style={spanStyle}>{props.profession}</span>
    <h2 style={titleStyle}>Bio:</h2><span style={spanStyle}>{props.bio}</span><br></br>
    <a href="/" onClick={props.handlename} style={linkStyle}>
     Clickme
   </a>
 
    
    
   </div>
    </div>
  )
}
profile.defaultProps = {
    fullname: "emna",
    profession:"student",
    bio:"lorem"

   };


   profile.propTypes = {
    fullname: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };