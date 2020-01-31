function onNavBtn() {
    var asideNode = document.getElementById("aside");

    asideNode.className === "sect-cont open" 
        ? asideNode.className = "sect-cont close"
        : asideNode.className = "sect-cont open";
}

// Settings form input field onchange handler
function onChangeVal(node) {
    var label = node.nextElementSibling;
    
    node.value 
        ? label.setAttribute("class", "label-active")
        : label.removeAttribute("class");
}

