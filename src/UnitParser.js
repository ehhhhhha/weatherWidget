/**
 * A helper class to parse raw data into required format
 */
class UnitParser {

    /**
     * Parse temperature to integer string and append symbol to it
     * @param {number} temp degree of temperature 
     * @return {string} string representation of temperature
     */
    static parseTempUnit = (temp) => {
        const suffix = '°';
        return Math.round(temp) + suffix;
    }


    /**
     * Parse wind speed to string and append unit to it
     * @param {number} speed speed of wind 
     * @param {unit} unit required unit for speed
     * @return {string} string representation of wind speed
     */
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

    /**
     * Parse wind direction from degree to geographical orientation
     * @param {number} degree degree of wind from 0 to 360
     * @return {string} stirng representation of wind orientation
     */
    static parseDegreeToDirection = (degree) => {
        if (degree === null) return '';
        degree = parseInt(degree);
        if (degree === 0 || degree === 360) {
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