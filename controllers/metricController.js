
const express  = require("express")
const client = require("prom-client")


const register = new client.Registry()

register.setDefaultLabels({
    app:"node js-monitoring"
})

client.collectDefaultMetrics({register})

const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10] 
});


exports.seeMetrics = async (req, res) => {

     res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
}

