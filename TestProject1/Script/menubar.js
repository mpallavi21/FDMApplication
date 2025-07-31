//USEUNIT CommonPageObjects


function clickOnSystemAttachDocument()
{
  let HCMClient = Aliases.HCMClient;
  let frmHCMClientMain = HCMClient.ClientMainWindow;
  OCR.Recognize(frmHCMClientMain.mainMenu).BlockByText("Tools").Click();
  OCR.Recognize(HCMClient.DropDownForm.SubSmartControl).BlockByText("System").Click();
  frmHCMClientMain.panelLeftPanMain.tabControlLeftPanMain.tabPageOnlineView.panelOnlineView.panelTabControlOnlineView.tabControlOnlineView.tabConnected.Keys("[Right][Enter]");
}


function clickOnSystemDetachDocument()
{
  let HCMClient = Aliases.HCMClient;
  let frmHCMClientMain = HCMClient.ClientMainWindow;
  OCR.Recognize(frmHCMClientMain.mainMenu).BlockByText("Tools").Click();
  OCR.Recognize(HCMClient.DropDownForm.SubSmartControl).BlockByText("System").Click();
  frmHCMClientMain.panelLeftPanMain.tabControlLeftPanMain.tabPageOnlineView.panelOnlineView.panelTabControlOnlineView.tabControlOnlineView.tabConnected.Keys("[Right][Down][Enter]");
}


// =====================================================================
// Author:        Bharath
// Function:      navigateAndUpdateDTMLibrary
// Description:   Navigates through the Library menu, updates DTM Library,
//                handles confirmation dialogs, and exits gracefully.
// Created On:    31-Jul-2025
// Modified On:   31-Jul-2025
// =====================================================================

function navigateAndUpdateDTMLibrary() {
  let HCMClient = Aliases.HCMClient;
  Log.AppendFolder("navigateAndUpdateDTMLibrary");

  try {
    // Step 1: Click on 'Library' menu
    OCR.Recognize(HCMClient.ClientMainWindow.mainMenu).BlockByText("Library").Click();
    Log.Message("Clicked 'Library' menu");

    // Step 2: Select 'Manage DTM Library'
    OCR.Recognize(HCMClient.DropDownForm.SubSmartControl).BlockByText("Manage DTM Library").Click();
    Log.Message("Selected 'Manage DTM Library'");

    let manageDtmLibrary = HCMClient.ManageDtmLibrary;

    // Step 3: Click 'Update' button
    manageDtmLibrary.btnUpdate.Click();
    Log.Message("Clicked 'Update' button");

    // Step 4 & 5: Confirm dialog twice
    clickOnConfirmFDMButton();
    clickOnConfirmFDMButton();

    // Step 6: Cancel the dialog
    manageDtmLibrary.CancelBtn.Click();
    Log.Message("Clicked 'Cancel' button");
    
    manageDtmLibrary.CancelBtn.WaitProperty("Enabled",true,25000)
    manageDtmLibrary.CancelBtn.Click();
    
    // Step 7: Final confirm dialog
    clickOnConfirmFDMButton();

    Log.Checkpoint("DTM Library update workflow completed successfully.");

  } catch (error) {
    Log.Error("Error in navigateAndUpdateDTMLibrary: " + error.message);

  } finally {
    Log.PopLogFolder();
  }
 

}
