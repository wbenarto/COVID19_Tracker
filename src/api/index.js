import axios from 'axios';

const url='https://covid.mathdro.id/api';

export const fetchData = async () => {
    
    try{
        const { data : { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate

        }

        return modifiedData;
        console.log()
    } catch {

    }
}