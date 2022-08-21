// REACT
import React from "react";

// COMPONENTS
import Constants from "../../core/constants";

function Footer() {
  
  const [dataFooter, setDataFooter] = React.useState();

  const getData = () => {
    fetch(Constants.paths.baseData + Constants.var.footerJson).then(res => {
      return res.json();
    }).then(data => {
      setDataFooter(data.footer);
    }).catch(err => {
        console.log(err, ' ERROR: Loading data on footer');
    })
  } 

  React.useEffect(()=>{
    if(dataFooter == null) {
      getData();
    }
  }, [])

  return (
    <React.Fragment>
      { dataFooter == null ? '' : <div className="footer">
        <p>{dataFooter.copyright}</p>
      </div>}
    </React.Fragment>
  );
}

export default Footer;