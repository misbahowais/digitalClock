let hour, min, sec, interval;
        
        function startInterval () {
            interval = setInterval(startClock,1000);
        }

        function startClock() {
            let today = new Date();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            time = time.split(':');

            hour = changeValue(time[0]);
            min = changeValue(time[1]);
            sec = changeValue(time[2]);

            update(hour + ":" + min + ":" + sec);
        }
        function closeInterval() {
            clearInterval(interval);
            update('00:00:00');
        }

        function changeValue(val) {

            if (val < 10) {
                return ('0' + val);
            }
            return(val);
           
        }

        function update(val) {
            document.querySelector('.display').innerHTML = val;
        }
       