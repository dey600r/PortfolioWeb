// REACT
import React from "react";
import { useParams } from "react-router-dom";

// COMPONENTS
import PanelTitle from "../shared/components/panel-title";
import PanelCard from "../shared/components/panel-card";
import Constants from "../core/constants";

function Details() {

  let { id } = useParams();

  const [dataDetails , setData]=React.useState()

// Fetch Function   
  fetch(Constants.var.baseData + 'detail-data.json').then(
    function(res){
    return res.json();
  }).then(function(data){
  // store Data in State Data Variable
    setData(data.data.find(x => x.id == id));
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )

  return (
    <React.Fragment>
      { dataDetails == null ? '' : 
        <div className="body body-details">
          <PanelTitle 
            title={dataDetails.title} 
            description={dataDetails.description}
            img={dataDetails.mainImage}
            url={dataDetails.urlRepository}/>
          {
            dataDetails.details.map(detail => (
              <PanelCard key={detail.id} data={detail}></PanelCard>
            ))
          }
        </div>
      }
    </React.Fragment>
  );
}

export default Details;