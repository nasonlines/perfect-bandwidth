'use strict';

var events        = require('events');

class PerfectBandwidth {
    constructor(){
      let speedTest = require('speedtest-net');
      let test = speedTest({maxTime: 5000});

      test.on('data', data => {
        console.dir(data);
      });

      test.on('error', err => {
        console.error(err);
      });
      /*var network = require('network');
      network.get_active_interface(function(err, obj) {
        const discovery = require('device-discovery')({ type: 'ICMP', iface: obj.name })

        discovery.on('device', console.log)

        discovery.on('done', function() {
          let speedTest = require('speedtest-net');
          let test = speedTest({maxTime: 5000});

          test.on('data', data => {
            console.dir(data);
          });

          test.on('error', err => {
            console.error(err);
          });
        })
      })*/
    }
}

PerfectBandwidth.prototype.__proto__ = events.EventEmitter.prototype;
module.exports = PerfectBandwidth;
