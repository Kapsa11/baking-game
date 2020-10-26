function showTab(name) {
    const tabs = document.getElementsByClassName("tab");
    let tab;
    const buttons = document.getElementsByClassName("sidebarButton");
    let button;

    for (let i = 0; i < tabs.length; i++) {
        button = buttons.item(i);
        tab = tabs.item(i);

        if (button.id === (name + "Btn")){
            button.style.backgroundColor = " #F2AA4C";
            button.style.color = "#101820";
        }
        else {
            button.style.backgroundColor = "#101820";
            button.style.color = " #F2AA4C";
        }

        if (tab.id === name) {
            tab.style.display = "block";
            }
        else {
            tab.style.display = "none";
        }
    }
}



