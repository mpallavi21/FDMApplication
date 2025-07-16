// =====================================================================
// Author:        Bharath
// Function:      closeRightPanBaseFramePage
// Description:   Closes the active page from the right panel.
// Created On:    24-06-2025
// Modified On:   
// =====================================================================
function closeRightPanBaseFramePage() {
  try {
    Log.AppendFolder("closeRightPanBaseFramePage - Closes the active page from the right panel.")
    let buttonClose = Aliases.HCMClient.ClientMainWindow.MdiClient.RightPanBaseFrame.panelBase.panelFullTop.panelTitle.buttonClose

    if (buttonClose.Exists && buttonClose.Enabled) {
      buttonClose.Click();
      Log.Message("Closed the page successfully.");
    } else {
      Log.Warning("Close button is not available or not enabled.");
    }
  } catch (error) {
    Log.Error("Failed to close the page: " + error.message);
  } finally{
    Log.PopLogFolder()
  }
}


// =====================================================================
// Author:        Bharath
// Function:      closeClientMainWindowPage
// Description:   Closes the active page from the right panel.
// Created On:    24-06-2025
// Modified On:   
// =====================================================================
function closeClientMainWindowPage() {
  try {
    Log.AppendFolder()
    let buttonClose = Aliases.HCMClient.ClientMainWindow.MdiClient.panelFullTop.panelTitle.buttonClose

    if (buttonClose.Exists && buttonClose.Enabled) {
      buttonClose.Click();
      Log.Message("Closed the page successfully.");
    } else {
      Log.Warning("Close button is not available or not enabled.");
    }
  } catch (error) {
    Log.Error("Failed to close the page: " + error.message);
  } finally {
    Log.PopLogFolder()
  }
}

// =====================================================================
// Author:        Bharath
// Function:      clickOnConfirmFDMYesButton
// Description:   Clicks the 'Yes' button on the FDM Diagnostic Model
//                Configuration dialog.
// Created On:    25-06-2025
// Modified On:   
// =====================================================================
function clickOnConfirmFDMYesButton() {
  try {
    Log.AppendFolder()
    let yesButton = Aliases.HCMClient.dlgFDMConfiguration.btnYes;

    if (yesButton.Exists && yesButton.Enabled) {
      yesButton.ClickButton();
      Log.Message("'Yes' button clicked successfully on FDM Diagnostic Model dialog.");
    } else {
      Log.Warning("'Yes' button not available or not enabled.");
    }
  } catch (error) {
    Log.Error("Failed to click 'Yes' button: " + error.message);
  } finally{
    Log.PopLogFolder()
  }
}

function test(){
  Aliases.HCMClient.dlgFDMDiagnosticModelConfiguration.btnYes.ClickButton();
}