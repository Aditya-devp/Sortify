async function selection(){
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        if(hasPressedStop==true){
            return;
        }
        let min_index = i;
        
        ele[i].style.background = 'lightgreen';
        for(let j = i+1; j < ele.length; j++){
            if(hasPressedStop==true){
                return;
            }
           
            ele[j].style.background = 'cyan';

            await delayTime(delay);
            if(hasPressedStop==true){
                return;
            }
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index !== i){
                   
                    ele[min_index].style.background = '#e43f5a';
                }
                min_index = j;
            } 
            else{
               
                ele[j].style.background = '#e43f5a';
            }   
        }
        await delayTime(delay);
        if(hasPressedStop==true){
            return;
        }
        swap(ele[min_index], ele[i]);
        
        ele[min_index].style.background = '#e43f5a';
        
        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await selection();
    if(hasPressedStop==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});