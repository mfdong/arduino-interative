const OSC = require('osc-js');

// Require the serialport node module
const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');

// Open the port
const port = new SerialPort("/dev/cu.usbmodem143301", {
    baudRate: 115200,
});

const parser = port.pipe(new ReadLine({ delimiter: '\r\n' }))

// Configure options with the correct IP address and port for your Madmapper
const options = {
    type: 'udp4',
    open: {
        host: '192.168.1.5',
        port: 8010,
    },
    send: {
        host: '25.20.200.67',
        port: 8010,
    }
}

// This is the OSC address to the playback speed parameter for your video in MadMapper. You can get this by right-clicking on the OSC parameter in MadMapper and clicking 'Copy OSC Address'.
const oscPlaybackSpeedAddress = '/medias/bridgetRunTest1.mov/play_speed';

const osc = new OSC({ plugin: new OSC.DatagramPlugin(options)});
osc.open();


// input from Arduino
parser.on('data', (data) => {
   console.log(data); // This should be the new serial data

   var nextValue = parseFloat(data);

   const message = new OSC.Message(oscPlaybackSpeedAddress, nextValue);

    osc.send(message)
});
