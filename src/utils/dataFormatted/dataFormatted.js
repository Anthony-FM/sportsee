export class userData{
    constructor(data){
        this.id = data.id;

        this.firstName = data.userInfos.firstName;
        this.lastName = data.userInfos.lastName;
        this.age = data.userInfos.age;

        this.score = (data.todayScore || data.score)*100

        this.calories = data.keyData.calorieCount;
        this.proteines = data.keyData.proteinCount;
        this.glucides = data.keyData.carbohydrateCount;
        this.lipides = data.keyData.lipidCount;

    }
}

export class userActivity{
    constructor(data){
        this.id = data.userId;

        this.sessions = data.sessions.map((session, index) => ({
            day: index + 1,
            kg: session.kilogram,
            calories: session.calories

        }))        

    }
}

export class userSessionAverage{
    constructor(data){
        this.id = data.userId;
        this.dayLetter = this.DayLetter()

        this.sessions = data.sessions.map((session) => ({
            day: this.dayLetter[session.day],
            sessionLength: session.sessionLength
        }))
    }

    DayLetter(){
        const dayLetter = {
            1: "L",
            2: "M",
            3: "M",
            4: "J",
            5: "V",
            6: "S",
            7: "D"
          }
        
          return dayLetter
    }
}

export class userPerformance{
    constructor(data){
        this.id = data.userId;

        this.arrayKindOfPerf = this.KindOfPerformance()
        this.dataPerformance = data.data.map((valueByKind) => ({
            kind: this.arrayKindOfPerf[valueByKind.kind-1],
            value: valueByKind.value
        }))
    }

    KindOfPerformance(){
        const performanceFormat = [
            'Cardio',
            'Energie',
            'Endurance',
            'Strength',
            'Speed',
            'Intensity'
        ]

        return performanceFormat
    }
}

