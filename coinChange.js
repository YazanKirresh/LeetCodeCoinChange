/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * We cannot use Dynamic programing
 * We can only use JaveScript
 * Attempt one for the solution
 */
function compareNumbers(a, b) {
  return a - b;
}

var coinChange = function(coins, amount) {
    console.log(coins)
    coins = coins.sort(compareNumbers);
    console.log(coins)
    let right = coins.length;
    let amountOfLoops = 0;
    let currentAmount = 0; 
    let fewestNumberOfCoins = 0;
    while (right > 0){
         console.log("Now checking if " + coins[right] + " should be added to the amount: " + currentAmount);
        if (coins[right] == amount){
            return 1;
        }else if (coins[right] > amount) {
            console.log("\n"+coins[right] + " is bigger than " + amount + ", moving to the right pointer to the left.\n");
            right--;
        }else if(currentAmount + coins[right] <= amount ){
            amountOfLoops--;
            let temCurrentAmount = currentAmount;
            currentAmount = currentAmount + coins[right];
            fewestNumberOfCoins++;
            console.log("Updated the currentAmount from " + temCurrentAmount + " to " + currentAmount);
             console.log("Added one to the fewestNumberOfCoins: " + fewestNumberOfCoins +"\n");
        }else {
            right--;
        }
        if (currentAmount == amount){
            console.log("Returned:" + fewestNumberOfCoins);
            return fewestNumberOfCoins;
        }
        amountOfLoops++;
    }
    if (currentAmount == amount){
        return fewestNumberOfCoins;
    }else{
        console.log("Amount of loops = " + amountOfLoops);
        console.log("The current right pointer = " + right);
        return -1;
    }
        
};


var coinsArray = [186,419,83,408];
var amount = 6249;

coinChange(coinsArray,amount);

