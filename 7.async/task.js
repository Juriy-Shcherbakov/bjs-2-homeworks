class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];  //свойство для хранения коллекции звонков ( {"time":time,  callback, "id": id})
        this.timerId = null; //для хранения id  
    }
    
    addClock(time, callback, id) {

        if (id === undefined) {
            throw new Error('id не введен');  
        } else if (this.alarmCollection.some(idFind => idFind.id === id)) {
            return  console.error("такой id уже внесен");
        }
        
        this.alarmCollection.push({
            time,
            callback,
            id,
        });
    }

    removeClock(id) {
        const idToDelete = this.alarmCollection.indexOf(idFind => idFind.id === id);  
        if (idToDelete) {
            this.alarmCollection.splice(idToDelete, 1);  
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {

        const dateNow = new Date();
        const hoursNow = ("0" + dateNow.getHours()).slice(-2);
        const minutesNow = ("0" + dateNow.getMinutes()).slice(-2);
        return hoursNow + ":" + minutesNow;
    }


    checkClock(alarm) {  

        if (alarm.time === this.getCurrentFormattedTime()) {  
            alarm.callback();
        }
    }

    start() {

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => this.checkClock(alarm))
            }, 1000);
        }
    }

    stop() {

        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;    
        }
    }


    printAlarms() {
        this.alarmCollection.forEach(alarm => console.log (`Будильник ${alarm.time}.`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}

    
function testCase() {
    let phoneAlarm = new AlarmClock();
    phoneAlarm.addClock("07:00", () => console.log("Будильник 1"), 1);
    phoneAlarm.addClock("07:01", () => { 
    console.log("Будильник 2");
        phoneAlarm.removeClock(2)
    }, 2);
    phoneAlarm.addClock("07:02", () => {
        console.log("Будильник 3");
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);
phoneAlarm.printAlarms()
phoneAlarm.start();
}

testCase();