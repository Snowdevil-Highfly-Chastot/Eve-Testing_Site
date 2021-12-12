class EveAPI {

    esiBaseUrl: string = "https://esi.evetech.net/latest"


    constructor() {
        return;
    }

    
    async fetchHistory(region_id: string, type_id: number) {
        const endpoint = `/markets/${region_id}/history/`
        const query = (type_id) ? `?datasource=tranquility&type_id=${type_id}` : "?datasource=tranquility";
        const url = this.esiBaseUrl + endpoint + query;
        const response = await fetch(url);
        const data: Array<HistoryItem> = await response.json();
        console.log(data)
        return data;
    }
}

class HistoryItem {
    average: number;
    date: string;
    highest: number;
    lowest: number;
    order_count: number;
    volume: number;
}

export default EveAPI;