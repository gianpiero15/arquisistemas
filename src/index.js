import app from './app';

app.listen(app.get('port'));

console.log('server running in port',app.get('port'));