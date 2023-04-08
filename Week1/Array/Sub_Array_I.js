const subArray = arr => {
    let tc=0,sumArray=[]
	for (let i = 0; i < arr.length; i++) {
		const start = arr[i]
		for (let j = 0; j < arr.length; j++) {
			const end = arr[j]
            let sum =0
			for (let k = start; k < end; k++) {
				// console.log(`${k} `)
                process.stdout.write(`${k}`)
                sum+=k
			}
            tc++
            sumArray.push(sum)
		}
	}
    console.log(`Total Sub Array : ${tc}`)
   let SumArray=sumArray.filter(e=>e)
    console.log(`The max Value from this array is ${Math.max(...SumArray)}`)
    console.log(`The min Value from this array is ${Math.min(...SumArray)}`)

}
subArray([1,3,4,5,6])