
class UnitParser {
    static parseTempUnit = (temp) => {
        const suffix = '°';
        return Math.round(temp) + suffix;
    }

    static parseWindUnit = (speed, unit) => {
        let suffix;
        if (unit === 'metric') {
            speed = Math.round(speed * 3600 / 1000);
            suffix = 'km/h';
        } else {
            suffix = 'mi/h';
        }
        return speed + suffix;
    }

    static parseDegreeToDirection = (degree) => {
        degree = parseInt(degree);
        if (degree === 0) {
            return 'N';
        } else if (degree < 90) {
            return 'NE';
        } else if (degree === 90) {
            return 'E';
        } else if (degree < 180) {
            return 'SE';
        } else if (degree === 180) {
            return 'S';
        } else if (degree < 270) {
            return 'SW';
        } else if (degree === 270) {
            return 'S';
        } else if (degree < 360) {
            return 'NW';
        }

    }

}
export default UnitParser;