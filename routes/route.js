exports.setRoutes = function(app){
  app.use('/', require('./routers/index'));
  app.use('/insert', require('./routers/insert'));
  app.use('/delete', require('./routers/delete'));
};