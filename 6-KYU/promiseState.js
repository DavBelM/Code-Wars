async function getState(promise) {
  const microTask = Promise.resolve()
  let state = "pending"

  try {
    await Promise.race([
        Promise.resolve(promise).then(
            () => { state = "fulfilled" },
            () => { state = "rejected" }
        ),
        microTask
    ]);

    return state
  }
  catch (e) {
    return "rejected"
  }
}


const prom = new Promise ((resolve, reject) => {
    resolve('Hi bela')
})

async function test() {
    console.log(await getState(prom))
}

test()
