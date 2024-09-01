const dragBoxs = document.querySelectorAll('.dragBox')

    const list = document.querySelectorAll('.draggableSection li')

    // console.log(list);

    let leftLeftPos = 6
    
    list.forEach((itemPos) => {
        itemPos.style.left = `${leftLeftPos}rem`
        leftLeftPos ++
    })

    // console.log(dragBoxs);

    dragBoxs.forEach((item) => {
        item.addEventListener("touchmove", (e) => {
            e.preventDefault()

            let touch = e.touches[0]

            // console.log(touch.clientX);
            // console.log(touch.clientY);

            e.target.style.top = `${touch.clientY}px`
            e.target.style.left = `${touch.clientX}px`
            
        })
    })