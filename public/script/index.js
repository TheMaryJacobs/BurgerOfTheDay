const createBtnEl = document.getElementById("create-btn");
const burgerBoxEl = document.getElementById("burger-name");
const burgerStorageEl = document.getElementById("burger-storage");
const devouredEl = document.getElementById("devoured");


//display previously entered burgers and devoured burgers
async function displayBurgers(){
    try{
        let allBurgersHtml = "";
        let allDevouredBurgersHtml = "";
    
        const {data: allBurgers} = await axios.get("/api/burgers")
        console.log(allBurgers)
        for(let i=0; i < allBurgers.length; i++){
            const {id, burger_name: burgerName, devoured} = allBurgers[i]
            console.log(devoured)
            if(devoured){
        //adds devoured burger to the right side of the page
                const devouredburgerHtml = `
                    <div class="burger ${id}">
                        ${id}: ${burgerName}
                    </div>`
                allDevouredBurgersHtml += devouredburgerHtml;            
            }else{
                const devouredburgerHtml = `
                    <div class="burger ${id}">
                        ${id}: ${burgerName}
                        <button id=${id} class="devour-btn">Devour!</button>
                    </div>`
                allBurgersHtml += devouredburgerHtml;
            }
        }
        //sets HTML of elements to array of burgers
        burgerStorageEl.innerHTML = allBurgersHtml;
        devouredEl.innerHTML = allDevouredBurgersHtml;
    }
    catch(err){
        console.log("Error retrieving burgers: ", err);
    }
    try{
        await startDevourBtns()
    }
    catch(err){
        console.log("Button Error ", err)
    }
}
displayBurgers();

async function createBurger(){
    await startBurgerBtn();
}
createBurger(); 

//adds event listeners to devour buttons
function startDevourBtns(){
    const devourBtnEls = document.querySelectorAll(".devour-btn")
    console.log(devourBtnEls)
    for(let i=0; i < devourBtnEls.length; i++){
        devourBtnEls[i].addEventListener("click", function(){
            const burgerId = event.target.id;
            devourBurger(burgerId)
        })
    }
}

// 
async function devourBurger(burgerId){
    await axios.put(`/api/burgers/${burgerId}`)
    await displayBurgers()
}

function startBurgerBtn(){
    createBtnEl.addEventListener("click", async function(){
        let burgerName = "";
        await event.preventDefault()
        try {
            burgerName = await getburgerName();
          } catch (error) {
            console.error(error);
          }
        
        try {
            const {data} = await axios.post('/api/burgers',{burgerName});
            // console.log(response);
            displayBurgers();
          } catch (error) {
            console.error(error);
          }
    })
}

function getBurgerName(){
    const burgerName = berderBoxEl.value;
    return burgerName;
}

