'use strict';

var events        = require('events');

class PerfectBandwidth {
    constructor(){
      var network = require('network');
      network.get_active_interface(function(err, obj) {
        const discovery = require('device-discovery')({ type: 'ICMP', iface: obj.name })

        discovery.on('device', console.log)

        discovery.on('done', () =>
            console.log('Done!'))
      })
    }
}

PerfectBandwidth.prototype.__proto__ = events.EventEmitter.prototype;
module.exports = PerfectBandwidth;
