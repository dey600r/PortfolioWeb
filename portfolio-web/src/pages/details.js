// REACT
import React from "react";
import { useParams } from "react-router-dom";

// COMPONENTS
import PanelTitle from "../shared/components/panel-title";
import PanelCard from "../shared/components/panel-card";
import Constants from "../core/constants";

function Details() {

  let params = useParams();

  const [dataParams , setParams] = React.useState(null);
  const [dataDetails , setData] = React.useState(null);

  const getDataDetail = () => {
    fetch(Constants.paths.baseData + Constants.var.projectsJson).then(res => {
      return res.json();
    }).then(data => {
      setData(data.projects
        .find(x => x.id == params[Constants.routesParam.idProject]).details
        .find(x => x.id == params[Constants.routesParam.idDetail]));
      setParams(params);
    }).catch(err => {
        console.log(err, 'ERROR: Loading data on details')
    })
  }

  React.useEffect(()=>{
    if(dataParams == null ||
      dataParams[Constants.routesParam.idProject] != params[Constants.routesParam.idProject] ||
      dataParams[Constants.routesParam.idDetail] != params[Constants.routesParam.idDetail]) {
      getDataDetail();
    }
  }, [params])

  return (
    <React.Fragment>
      { dataDetails == null ? '' : 
        <div className="body body-details">
          <PanelTitle 
            title={dataDetails.title} 
            description={dataDetails.description}
            img={dataDetails.secundaryImage}
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