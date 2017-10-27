'use strict';

var events        = require('events');

class PerfectBandwidth {
    constructor(){
      const discovery = require('device-discovery')({ type: 'ICMP', iface: 'eth0' })

    discovery.on('device', console.log)
        // => 192.168.0.20
        //    192.168.0.31
        //    ...

    discovery.on('done', () =>
        console.log('Done!'))
    }
}

PerfectBandwidth.prototype.__proto__ = events.EventEmitter.prototype;
module.exports = PerfectBandwidth;
