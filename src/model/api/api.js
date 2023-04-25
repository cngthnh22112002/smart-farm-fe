import data from '../data/data.js'

const BaseAPI = {
    all() {
        return this.querySet
    },

    has_property(prob) {
        if (!this.querySet || this.querySet.length === 0)
            return false
        if (!this.querySet[0].hasOwnProperty(prob))
            return false
        return true
    },

    get_by_id(id) {
        return this.querySet.find((ele) => ele.id === id)
    },

    filter(probs) {
        for (let key in probs) {
            if (!this.has_property(key))
                throw new Error(`${this.name} object do not have property "${key}"`)
        }

        const qs = this.querySet.filter(ele => {
            for (let key in probs)
                if (probs[key] !== ele[key])
                    return false
            return true
        })

        return qs
    },

    order_by(prob, reverse=false) {
        const datetimePattern = /(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2}):(\d{2})/
        const datePattern = /(\d{2})\/(\d{2})\/(\d{4})/

        if(!this.has_property(prob))
            throw new Error(`${this.name} object do not have property "${prob}"`)

        this.querySet.sort(function(a,b) {
            if(datetimePattern.test(a[prob])) {
                const [,day1,mon1,year1,hour1,min1,sec1] = datetimePattern.exec(a[prob])
                const t1 = new Date(year1,mon1-1,day1,hour1,min1,sec1)

                const [,day2,mon2,year2,hour2,min2,sec2] = datetimePattern.exec(b[prob])   
                const t2 = new Date(year2,mon2-1,day2,hour2,min2,sec2)
                
                return t1.getTime() - t2.getTime()

            } else if(datePattern.test(a[prob])) {
                const [,day1,mon1,year1] = datePattern.exec(a[prob])
                const t1 = new Date(year1,mon1-1,day1)

                const [,day2,mon2,year2] = datePattern.exec(b[prob])   
                const t2 = new Date(year2,mon2-1,day2)
                return t1.getTime() - t2.getTime()

            } else {
                return a[prob] - b[prob]
            }
        });

        if (reverse) this.querySet.reverse()
        return this.querySet
    },
}

const UserAPI = {
    name: 'User',
    querySet: data.user,
}
Object.setPrototypeOf(UserAPI, BaseAPI)

const api = {
    'UserAPI': UserAPI,
}

export {UserAPI}

export default api