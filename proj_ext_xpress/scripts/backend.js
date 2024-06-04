async function  a(){
  
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: press_btn
  })

}
const press_btn= () => {
  console.log("oi")
  const bt_expandir = document.getElementById("topnavi-whydeepl-flyout-button")
  bt_expandir.click()
  console.log("passei aqui")
}
const btn_1 = document.getElementById("1");


btn_1.addEventListener('click',a)
