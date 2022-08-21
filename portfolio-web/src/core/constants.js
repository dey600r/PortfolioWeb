const Constants = {
  routesParam: {
    idProject: 'idProject',
    idDetail: 'idDetail'
  },
  routes: {
    root: '/',
    home: '/home',
    details: '/details/:idProject/:idDetail'
  },
  paths: {
    base: '/PortfolioWeb/',
    baseImages: '/PortfolioWeb/images/',
    baseData: '/PortfolioWeb/data/'
  },
  var: {
    headerJson: 'header-data.json',
    footerJson: 'footer-data.json',
    projectsJson: 'projects-data.json'
  }
};

export default Constants;