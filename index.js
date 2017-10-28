'use strict';

var events        = require('events');
var bytes         = require('bytes');

class PerfectBandwidth {
    constructor(defaultBandwidth = 80000){
      var network = require('network');
      var devicesFound = 1;
      var self = this;
      network.get_active_interface(function(err, obj) {
        if (err != null) {
          self.emit('perfectBandwidth', defaultBandwidth)
        } else {
          const discovery = require('device-discovery')({ type: 'ICMP', iface: obj.name })

          discovery.on('device', function(){
            devicesFound += 1
          })

          discovery.on('done', function() {
            let speedTest = require('speedtest-net');
            let test = speedTest({maxTime: 15000});

            test.on('data', data => {
              let bytesPerSeconds = bytes(data.speeds.upload+'MB');
              let shareBandwidth = bytesPerSeconds/devicesFound;
              self.emit('perfectBandwidth', shareBandwidth/4)
            });

            test.on('error', err => {
              self.emit('perfectBandwidth', defaultBandwidth)
            });
          })
        }
      })
    }
}

PerfectBandwidth.prototype.__proto__ = events.EventEmitter.prototype;
module.exports = PerfectBandwidth;
