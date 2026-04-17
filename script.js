 function calculateBill(){
                let fromDate = new Date(document.getElementById("fromDate").value);
                let toDate = new Date(document.getElementById("toDate").value);

                let startUnit = Number(document.getElementById("startUnit").value);
                let endUnit = Number(document.getElementById("endUnit").value);

                // validation
                if(!fromDate || !toDate || startUnit < 0 || endUnit <= startUnit){
                    document.getElementById("result").innerHTML = "Enter valid details";
                    return;

                }
                // calculate days
                let days =(toDate -fromDate) / (1000*60*60*24);
                let units = endUnit - startUnit;

                let bill = 0 ;

                //slab calculation
                
                if(units<=50){
                    bill = units * 0.75;
                }
                else if(units<=150){
                    bill = (50 * 0.75) + (units-50) * 1;
                }
                else if(units<=250){
                    bill = (50*0.75) + (100*1) + (units-150) * 1.5;
                }
                else{
                    bill = (50*0.75) + (100*1)+(100*1.5)+(units-250)*2.5;
                }
                document.getElementById("result").innerHTML = "Days:" + days + "<br>" +
                "Unit Consumed: " + units +"<br>" +
                "Total Bill: ₹" + bill.toFixed(2);
                

            }