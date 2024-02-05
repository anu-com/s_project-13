var arr = [
    {dp:"https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvcnRyYXRlfGVufDB8fDB8fHww", img:"https://cdn.shopify.com/s/files/1/0193/6253/products/18883552577_2000x.png?v=1639443297"},
    {dp:"https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1526511253005-9a4a8cde2956?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1441123694162-e54a981ceba5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1494354145959-25cb82edf23d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1517805686688-47dd930554b2?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvcnRyYXRlfGVufDB8fDB8fHww", img:"https://cdn.shopify.com/s/files/1/0193/6253/products/18883552577_2000x.png?v=1639443297"},
    {dp:"https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1526511253005-9a4a8cde2956?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1441123694162-e54a981ceba5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1494354145959-25cb82edf23d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1517805686688-47dd930554b2?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var clutter = ""
arr.forEach(function (elem,idx){
    clutter += `<div class="story">
    <img id ="${idx}" src="${elem.dp}" alt="">

</div>`
})
document.querySelector("#storiyia").innerHTML = clutter


var grow = 0;
document.querySelector("#storiyia").addEventListener("click",function(dets) {
    // console.log(arr[dets.target.id].img)
    document.querySelector("#full-scr").style.display= "block"
    document.querySelector("#full-scr").style.backgroundImage = `url(${arr[dets.target.id].img})`

    setTimeout( function() {
        document.querySelector("#full-scr").style.display= "none"

    },3000)

    if(grow<100) {
        setInterval(function() {
            document.querySelector("#growth").style.width = `${grow++}%`
            
        },30)
    }else {
        grow = 0;
    }

})

