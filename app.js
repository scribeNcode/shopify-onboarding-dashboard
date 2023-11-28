// const checkBoxes = document.querySelectorAll(".svg-checkbox");
// const detailsOne = document.getElementById('details-one');
// const detailsTwo = document.getElementById('details-two');

// checkBoxes.forEach(checkBox => {
//     checkBox.addEventListener('click', () => {
//         // Toggle on click
//         checkBox.classList.toggle('checked');

//         // Do something based on the click state
//         if (checkBox.classList.contains('checked')) {
//             console.log(`${checkBox.id} is checked`);

//             // Additional function when checked
//             if (checkBox.id === 'customize-store-toggle-button') {
//                 toggleDetailsVisibility(detailsOne);
//             } else if (checkBox.id === 'first-product-toggle-button') {
//                 toggleDetailsVisibility(detailsTwo);
//             } else {
//                 console.log('not caught');
//             }
//         } else {
//             console.log(`${checkBox.id} is unchecked`);

//             // Additional function when unchecked
//             hideAllDetails();
//         }
//     });
// });

// function toggleDetailsVisibility(detailsElement) {
//     const detailsStyle = getComputedStyle(detailsElement);
//     if (detailsStyle.display === 'block') {
//         detailsElement.style.display = 'none';
//     } else {
//         detailsElement.style.display = 'block';
//     }
// }

// function hideAllDetails() {
//     detailsOne.style.display = 'none';
//     detailsTwo.style.display = 'none';
// }

























const checkBoxes = document.querySelectorAll(".svg-checkbox");
// console.log(checkBoxes)
const checkersDetails = document.querySelectorAll(".checkers-details");
// console.log(checkersDetails)



checkBoxes.forEach(checkBox=>{
    checkBox.addEventListener('click', ()=>{

        // toggle on click
        checkBox.classList.toggle('checked')

        //do something based on the click state
        if(checkBox.classList.contains('checked')){
            console.log(`${checkBox.id} is checked`)
            //toggle a new class to display more details
            
            // console.log(checkBox)

            //additional function when checked
            if(checkBox.id === 'customize-store-toggle-button'){
                let detailsOne = document.getElementById('details-one')
                let detailsOneStyle = getComputedStyle(detailsOne);

                if(detailsOneStyle.display === 'block'){
                    detailsOne.style.display = 'none'
                }else{
                    detailsOne.style.display = 'block';

                }
                
            }else if(checkBox.id === 'first-product-toggle-button'){
                let detailsTwo = document.getElementById('details-two');
                let detailsTwoStyle = getComputedStyle(detailsTwo);

                if(detailsTwoStyle.display === 'block'){
                    detailsTwo.style.display = 'none'
                }else {
                    detailsTwo.style.display = 'block';
                }
            }else{
                console.log('not catched')
            }
            
                
            
           



            // checkersDetails.forEach(checkersDetail=>{
            //     if(checkersDetail.classList.contains('checkers-details')){
                    
            //         console.log(`${checkersDetail.id} hidden`)
            //     }
            // })
        }else{
            console.log(`${checkBox.id} is unchecked`)

            //additional function when unchecked
            if(checkBox.id === 'customize-store-toggle-button'){
                let detailsOne = document.getElementById('details-one')
                let detailsOneStyle = getComputedStyle(detailsOne);

                if(detailsOneStyle.display === 'block'){
                    detailsOne.style.display = 'none'
                }else{
                    detailsOne.style.display = 'block';

                }
                
            }else if(checkBox.id === 'first-product-toggle-button'){
                let detailsTwo = document.getElementById('details-two');
                let detailsTwoStyle = getComputedStyle(detailsTwo);

                if(detailsTwoStyle.display === 'block'){
                    detailsTwo.style.display = 'none'
                }else {
                    detailsTwo.style.display = 'block';
                }
            }else{
                console.log('not catched')
            }
        }
    })
})















// const customizeStoreToggleButton = document.getElementById("customize-store-toggle-button");

// const customizeStoreFullDetails = document.querySelector('.checkers-details')



// let isCheckersDetailsOpen = true

// customizeStoreToggleButton.addEventListener('click', ()=>{
//     isCheckersDetailsOpen = !isCheckersDetailsOpen;
//     updateDetailsState()
// })


// function updateDetailsState(){
//     if(isCheckersDetailsOpen){
//         customizeStoreFullDetails.style.display = 'none';
//     }else{
//         customizeStoreFullDetails.style.display = 'block';  
//     }
// }


// const allStyles = {
//     display : "block",
// }

