let axios=require("axios")
let weather = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=05f957b5bdeb24e8f8749297a22c24d4'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({temp: result.data.main })
    }
    //msg: data, status: true
    //temp: result.data.main
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let sortedTempBycity = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        tempByCity = []

        for (i = 0; i < cities.length; i++) {

            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=4ffa3da18f82b1bc7c0d81d77b095647`)
            console.log(resp.data.main.temp)

            obj.temp = resp.data.main.temp
            tempByCity.push(obj)
        }

        let sorted = tempByCity.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.sortedTempBycity=sortedTempBycity



module.exports.weather=weather