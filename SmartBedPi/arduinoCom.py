#!/usr/bin/env python

import serial, time
import logging

debug = True
onMac = False

logging.basicConfig(filename='arduinoCom.log', filemode='w', format='%(levelname)s: %(message)s', level=logging.INFO)

try:
    if onMac:
        # Setting up serial connection
        serialport = serial.Serial("/dev/cu.usbmodem142401", 9600, timeout=1)
    else:
        # Setting up serial connection
        serialport = serial.Serial("/dev/ttyACM0", 9600, timeout=1)
except:
    logging.error("Arduino likely not connected")

data = ""
discard = 5  # Number of initial data points to discard (when system is starting up)

# Serial port read loop
while True:
    try:
        command = serialport.readline()
        if command != "":
            if debug:
                logging.debug("Command: " + str(command.rstrip()))
            splitCommand = command.split()
            if len(splitCommand) > 0:
                # Selecting just the data from the arduino command
                if splitCommand[0] == "reportSensorData" and discard <= 0:
                    logging.info("Sensor Data has been read")
                    data = splitCommand[1]
                    if debug:
                        logging.debug("Data: " + data)
                # Discarding boot up data to allow sensors to properly adjust
                elif discard > 0:
                    logging.info("Discarding initial boot data")
                    discard -= 1;
        else:
            logging.error("Read empty data from serial port")

    except NameError as e:
        logging.error("Serial connection does not exist")
        while True:
            try:
                if onMac:
                    # Setting up serial connection
                    serialport = serial.Serial("/dev/cu.usbmodem142401", 9600, timeout=1)
                else:
                    # Setting up serial connection
                    serialport = serial.Serial("/dev/ttyACM0", 9600, timeout=1)
                logging.info("Serial connection made!")
                break;
            except:
                logging.error("Serial connection failed, retrying in 3 seconds")
                time.sleep(3)

    # If data is available, write to file
    if data != "":
        dataFile = open("data.txt", 'w+')
        timestamp = str(time.time()) + ""
        while len(timestamp) < 15:
            timestamp += "0"
        dataFile.write(timestamp + " " + data)
        dataFile.close()
        logging.info("Sensor Data has been writen to file")