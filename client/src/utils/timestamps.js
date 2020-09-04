export const timestampToStr = (timestamp) => {
        let hours = Math.floor(timestamp / 3600);
        let minutes = Math.floor((timestamp - (hours * 3600)) / 60);
        let seconds = Math.floor((timestamp - ((hours * 3600) + (minutes * 60))));
        let times = [hours, minutes, seconds];
        let str = [];

        for (let i = 0; i < times.length; i++) {
            if (times[i] > 0) {
                if (times[i] < 10) {
                    str.push(`0${times[i]}`);
                } else {
                    str.push(`${times[i]}`);
                }
            }
        }

        return str.join(':');
}