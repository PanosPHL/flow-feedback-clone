export const timestampToStr = (timestamp) => {
        let minutes = Math.floor(timestamp / 60);
        let seconds = Math.floor((timestamp - (minutes * 60)));
        let times = [minutes, seconds];
        let str = [];

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
}