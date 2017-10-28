var PerfectBandwidth = require('../index.js')

var pb  =   new PerfectBandwidth();
pb.on('perfectBandwidth', function(debitMaximum) {
  console.log("Maximum debit", ((debitMaximum|0)/1024)|0, "Kb/s")
});
