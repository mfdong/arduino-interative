# arduino-interative
Artist-in-Residence project files, as described here: https://www.madisondong.com/interactive-art

Arduino code is based on this example: https://create.arduino.cc/projecthub/FunguyPro/how-to-use-an-hc-sr04-ultrasonic-sensor-with-arduino-8d646f.
We modified it for scale, units, and ensured that a lack of objects in the sensor's view wouldn't read at zero, because otherwise, the videos would just stop playing. Therefore, we changed all 0 distances to 0.5.

main.js converts Arduino input into OSC messages for MadMapper.

See Bomani's Arduino OSC Example here: https://github.com/bomanimc/arduino-osc-example
