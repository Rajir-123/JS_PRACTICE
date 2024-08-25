// Write a javascript program.

// Goal: Optimize the queue for better service in your shop.

// Advice: Donot search internet for a solution & waste your time. Think & derive on your own.

// Problem statement:
// 1. You have a pharmacy.
// 2. Each morning, when you open the shop, you see a big queue of online orders.
// 3. Your chemists(staff in shop) start processing the online orders.
// 4. As yo know, some medicines are very critical for customers as they cannot risk any delays in delivery.
// 5. How your javascript program can handle this so that your staff can efficiently process the orders, gain very good customer feedback and yield maximum profit.
//     - Types of online orders:
//         - "life critical", "one day delay is allowed", "i cannot wait for delay more than 30 hours"
//     - cost of processing above orders:
//         - "life critical" ==> 15 mins, profit: 20% of the total cost
//         - "one day delay is allowed" ==> 30 mins, profit: 10% of the total cost
//         - "i cannot wait for delay more than 30 hours" ==> 55 mins, profit: 5% of the total cost


// Hints:
// - no UI is required
// - write pseudocode first
// - figure out the input(s) & output(s)
// - use appropriate validations
// - use classes 
// - discuss as team & derive your own solution
// - Once completed the implementation, share your github/gitlab link


let ordersData = {
    "orders": [
        {
            "orderId": "1",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 100
        },
        {
            "orderId": "2",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 150
        },
        {
            "orderId": "3",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 200
        },
        {
            "orderId": "4",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 250
        },
        {
            "orderId": "5",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 300
        },
        {
            "orderId": "6",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 120
        },
        {
            "orderId": "7",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 130
        },
        {
            "orderId": "8",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 220
        },
        {
            "orderId": "9",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 170
        },
        {
            "orderId": "10",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 80
        },
        {
            "orderId": "11",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 180
        },
        {
            "orderId": "12",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 190
        },
        {
            "orderId": "13",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 140
        },
        {
            "orderId": "14",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 140
        },
        {
            "orderId": "15",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 210
        },
        {
            "orderId": "16",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 170
        },
        {
            "orderId": "17",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 160
        },
        {
            "orderId": "18",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 190
        },
        {
            "orderId": "19",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 200
        },
        {
            "orderId": "20",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 240
        },
        {
            "orderId": "21",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 150
        },
        {
            "orderId": "22",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 110
        },
        {
            "orderId": "23",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 220
        },
        {
            "orderId": "24",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 180
        },
        {
            "orderId": "25",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 130
        },
        {
            "orderId": "26",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 190
        },
        {
            "orderId": "27",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 230
        },
        {
            "orderId": "28",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 160
        },
        {
            "orderId": "29",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 180
        },
        {
            "orderId": "30",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 200
        },
        {
            "orderId": "31",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 150
        },
        {
            "orderId": "32",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 220
        },
        {
            "orderId": "33",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 210
        },
        {
            "orderId": "34",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 140
        },
        {
            "orderId": "35",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 160
        },
        {
            "orderId": "36",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 190
        },
        {
            "orderId": "37",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 120
        },
        {
            "orderId": "38",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 180
        },
        {
            "orderId": "39",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 170
        },
        {
            "orderId": "40",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 200
        },
        {
            "orderId": "41",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 230
        },
        {
            "orderId": "42",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 160
        },
        {
            "orderId": "43",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 150
        },
        {
            "orderId": "44",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 140
        },
        {
            "orderId": "45",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 180
        },
        {
            "orderId": "46",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 170
        },
        {
            "orderId": "47",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 160
        },
        {
            "orderId": "48",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 210
        },
        {
            "orderId": "49",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 130
        },
        {
            "orderId": "50",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 140
        },
        {
            "orderId": "51",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 170
        },
        {
            "orderId": "52",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 140
        },
        {
            "orderId": "53",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 160
        },
        {
            "orderId": "54",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 200
        },
        {
            "orderId": "55",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 170
        },
        {
            "orderId": "56",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 230
        },
        {
            "orderId": "57",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 160
        },
        {
            "orderId": "58",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 130
        },
        {
            "orderId": "59",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 190
        },
        {
            "orderId": "60",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 170
        },
        {
            "orderId": "61",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 200
        },
        {
            "orderId": "62",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 230
        },
        {
            "orderId": "63",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 160
        },
        {
            "orderId": "64",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 120
        },
        {
            "orderId": "65",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 180
        },
        {
            "orderId": "66",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 170
        },
        {
            "orderId": "67",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 130
        },
        {
            "orderId": "68",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 140
        },
        {
            "orderId": "69",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 200
        },
        {
            "orderId": "70",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 150
        },
        {
            "orderId": "71",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 180
        },
        {
            "orderId": "72",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 160
        },
        {
            "orderId": "73",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 200
        },
        {
            "orderId": "74",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 230
        },
        {
            "orderId": "75",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 160
        },
        {
            "orderId": "76",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 120
        },
        {
            "orderId": "77",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 150
        },
        {
            "orderId": "78",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 130
        },
        {
            "orderId": "79",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 180
        },
        {
            "orderId": "80",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 170
        },
        {
            "orderId": "81",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 190
        },
        {
            "orderId": "82",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 160
        },
        {
            "orderId": "83",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 140
        },
        {
            "orderId": "84",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 170
        },
        {
            "orderId": "85",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 180
        },
        {
            "orderId": "86",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 200
        },
        {
            "orderId": "87",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 190
        },
        {
            "orderId": "88",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 140
        },
        {
            "orderId": "89",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 220
        },
        {
            "orderId": "90",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 160
        },
        {
            "orderId": "91",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 200
        },
        {
            "orderId": "92",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 180
        },
        {
            "orderId": "93",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 140
        },
        {
            "orderId": "94",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 170
        },
        {
            "orderId": "95",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 210
        },
        {
            "orderId": "96",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 190
        },
        {
            "orderId": "97",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 160
        },
        {
            "orderId": "98",
            "type": "one day delay is allowed",
            "processingTime": 30,
            "totalCost": 140
        },
        {
            "orderId": "99",
            "type": "i cannot wait for delay more than 30 hours",
            "processingTime": 55,
            "totalCost": 210
        },
        {
            "orderId": "100",
            "type": "life critical",
            "processingTime": 15,
            "totalCost": 120
        }
    ]
}


class Type {
    constructor(ordersData) {
        this.ordersData = ordersData;
        this.lifeCriticalData = [];
        this.oneDayDelayData = [];
        this.lastProcessedData = [];
    }

    basedOnType() {

        for (const x in this.ordersData) {
            let orders = this.ordersData[x];
            for (const y of orders) {
                if (y.type == "life critical") {
                    this.lifeCriticalData.push(y);
                } else if (y.type == "one day delay is allowed") {
                    this.oneDayDelayData.push(y);
                } else {
                    this.lastProcessedData.push(y);
                }
            }
        }
    }
}

class ProfitForLcd extends Type {
    constructor(ordersData) {
        super(ordersData);
        // this.basedOnType();
    }
    addedProfitForlcd() {
        this.basedOnType();
        let lifeCriticalProfitData = [];
        for (const lcd of this.lifeCriticalData) {
            if (lcd.totalCost) {
                let profit = lcd.totalCost * (20 / 100)
                lcd['profit'] = profit;
                lifeCriticalProfitData.push(lcd)
            }
        }
        console.log(lifeCriticalProfitData);
    }
}

class ProfitForOdd extends Type {
    constructor(ordersData) {
        super(ordersData);
        // this.basedOnType();
    }
    addedProfitForodd() {
        this.basedOnType();
        let oneDayDelayProfitData = [];
        for (const odd of this.oneDayDelayData) {
            if (odd.totalCost) {
                let profit = odd.totalCost * (10 / 100)
                odd['profit'] = profit;
                oneDayDelayProfitData.push(odd)
            }
        }
        console.log(oneDayDelayProfitData);
    }
}

class ProfitForLpd extends Type {
    constructor(ordersData) {
        super(ordersData);
        // this.basedOnType();
    }
    addedProfitForlpd() {
        this.basedOnType();
        let lastProcessedProfitData = [];
        for (const lpd of this.lastProcessedData) {
            if (lpd.totalCost) {
                let profit = lpd.totalCost * (5 / 100)
                lpd['profit'] = profit;
                lastProcessedProfitData.push(lpd)
            }
        }
        console.log(lastProcessedProfitData);
    }
}

const obj = new ProfitForLcd(ordersData);
obj.addedProfitForlcd();
const obj1 = new ProfitForOdd(ordersData);
obj1.addedProfitForodd();
const obj2 = new ProfitForLpd(ordersData);
obj2.addedProfitForlpd();








