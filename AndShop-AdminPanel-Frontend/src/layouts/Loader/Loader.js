import React, {useEffect, useState,Fragment} from 'react';
import MyComponent from 'react-fullpage-custom-loader'
import Loaderimg from "../../assets/images/loader.svg";
const Loader = () => {
  const [state,setState] = useState(false)
  useEffect(() => {
    setState(true )
    setTimeout(() => {
     setState(false )
    },3000)
},[])

    return (
      <Fragment>
        {state && (
          <div id="global-loader">
            <MyComponent
              wrapperBackgroundColor="#fff"
              customLoader={
                <img src={Loaderimg} className="loader-img" alt="Loader" />
              }
              startFadeOut={state.startFadeOut}
            />
          </div>
        )}
      </Fragment>
    ); 
};

export default Loader;
