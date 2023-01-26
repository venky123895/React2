const title=React.createElement('h1',{style:{textAlign:'center',color:'white',fontSize:'50px'}},'The Evolution of Airbnbs Frontend');
const tag=React.createElement('p',{style:{textAlign:'center',color:'white',fontSize:'1.3rem'}},'@spikebrehm');
const root=ReactDOM.createRoot(document.getElementById('root'));
const imageTag=React.createElement(
    "img",
    {src: "https://play-lh.googleusercontent.com/1zfN_BL13q20v0wvBzMWiZ_sL_t4KcCJBeAMRpOZeT3p34quM-4-pO-VcLj8PJNXPA0",style:{height:'100px'},className:'image'},
    null
  );
root.render([title,tag,imageTag])