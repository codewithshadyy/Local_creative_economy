
const cluster  = require("cluster")
const os=require("os")
const app = require("./app")
const PORT = process.env.PORT
const NUM_CPUS = os.cpus().length

if(cluster.isPrimary){
    console.log(`Primaty process started [PID :${process.pid}]`)
    console.log(`detected ${NUM_CPUS} cores \n`)
    console.log(`spawning ${NUM_CPUS} workers`)

for(let i =0; i<=NUM_CPUS; i++){
    cluster.fork()

}

    cluster.on("exit", (worker, code, signal)=>{

    console.error(` Worker [PID: ${worker.process.pid}] died (signal: ${signal}, code: ${code})`)
    console.log(` Restarting a new worker...`)
    cluster.fork()

    })

    cluster.on("online", (worker)=>{
         console.log(`Worker [PID: ${worker.process.pid}] is online`)
    })


}else{
    app.listen(PORT, ()=>{
        console.log(`Worker [PID: ${process.pid}] listening on port ${PORT}`)
    })
}