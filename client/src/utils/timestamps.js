export const timestampToStr = (timestamp) => {
        let hours = Math.floor(timestamp / 3600);
        timestamp = timestamp - (hours * 3600);
        let minutes = Math.floor(timestamp / 60);
        timestamp = timestamp - (minutes * 60);
        let seconds = Math.floor(timestamp);
        let times = [minutes, seconds];
        let str = [];

        if (hours === 0) {
            if (minutes === 0 && seconds === 0) {
                return '0:00'
            }

            for (let i = 0; i < times.length; i++) {
                if (times[i] > 0) {
                    if (times[i] < 10) {
                        str.push(`0${times[i]}`);
                    } else {
                        str.push(`${times[i]}`);
                    }
                }

                if (times[i] === 0 && times[i] === minutes) {
                    str.push('0');
                }
            }

            return str.join(':');
        } else {
            return `${hours >= 10 ? hours : '0' + hours}:${minutes>= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`;
        }
}