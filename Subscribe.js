document.addEventListener('DOMContentLoaded',()=>{
  const subsButton = document.getElementById("Subscribe");
  const subsButton1 = document.getElementById("Subscribe-1");
  const subsButton2 = document.getElementById("Subscribe-2");
  const cancelButton = document.getElementById("close-btn");
  const dialog = document.getElementById("Subs-Dialog");
  


  // Update button opens a modal dialog
  subsButton.addEventListener("click", () => {
    dialog.showModal();
  });


  // Update button opens a modal dialog
  subsButton1.addEventListener("click", () => {
    dialog.showModal();
  });

  // Update button opens a modal dialog
  subsButton2.addEventListener("click", () => {
    dialog.showModal();
  });

  // Form cancel button closes the dialog box
  cancelButton.addEventListener("click", () => {
    dialog.close();
  })
});