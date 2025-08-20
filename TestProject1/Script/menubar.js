//USEUNIT CommonPageObjects
//USEUNIT ClientLoginPage
//USEUNIT GenericMethods
//USEUNIT OfflineViewPages
//USEUNIT NetworkTreeViewPage

function clickOnSystemAttachDocument()
{
  let HCMClient = Aliases.HCMClient;
  let frmHCMClientMain = HCMClient.ClientMainWindow;
  OCR.Recognize(frmHCMClientMain.mainMenu).BlockByText("Tools").Click();
  OCR.Recognize(HCMClient.DropDownForm.SubSmartControl).BlockByText("System Documents").Click();
  frmHCMClientMain.panelLeftPanMain.tabControlLeftPanMain.tabPageOnlineView.panelOnlineView.panelTabControlOnlineView.tabControlOnlineView.tabConnected.Keys("[Right][Enter]");
}


function clickOnSystemDetachDocument()
{
  let HCMClient = Aliases.HCMClient;
  let frmHCMClientMain = HCMClient.ClientMainWindow;
  let panel = frmHCMClientMain.panelLeftPanMain;
  let vlabel = panel.Panel.Label;
  vlabel.Click(7, 8);
  OCR.Recognize(frmHCMClientMain.mainMenu).BlockByText("Tools").Click();
  OCR.Recognize(HCMClient.DropDownForm.SubSmartControl).BlockByText("System",100)
  panel.tabControlLeftPanMain.tabPageOnlineView.panelOnlineView.panelTabControlOnlineView.tabControlOnlineView.tabConnected.treeView.Keys("[Right][Down][Enter]");
  frmHCMClientMain.Activate();
  vlabel.Click(10, 396);
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



  
// =====================================================================
// Author:        Bharath
// Function:      FDM_Help15778
// Description:   Opens the Help menu via OCR, validates the Help window, and closes it.
// Created On:    06-Aug-2025
// =====================================================================
function FDM_Help15778() {
  Log.AppendFolder("FDM_Help");

  try {
    let HCMClient = Aliases.HCMClient;

    // 📖 Click on Help menu using OCR
    OCR.Recognize(HCMClient.ClientMainWindow.mainMenu).BlockByText("Help").Click();
    Log.Message("Help menu clicked.");

    // 📂 Click on submenu item
    HCMClient.DropDownForm.SubSmartControl.Click(53, 22);
    Log.Message("Help submenu item clicked.");

    // ✅ Validate Help window is enabled
    aqObject.CheckProperty(HCMClient.wndHHParent, "Enabled", cmpEqual, true);
    Log.Message("Help window is enabled and visible.");

    // ❎ Close Help window
    HCMClient.wndHHParent.Close();
    Log.Message("Help window closed.");

  } catch (error) {
    Log.Error("Error in FDM_Help: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Author:        Bharath
// Function:      FDM_Help_DevicePage15779
// Description:   Opens Help from the device page and verifies the Help window.
// Created On:    06-Aug-2025
// =====================================================================
function FDM_Help_DevicePage15779() {
  Log.AppendFolder("FDM_Help_DevicePage15779");

  try {
    let HCMClient = Aliases.HCMClient;

    // 📌 Click on the target device
    clickOnDevice(Project.Variables.Device);
    Log.Message("Clicked on device: " + Project.Variables.Device);

    // 📖 Click on Help button from device page
    HCMClient.ClientMainWindow.MdiClient.panelFullTop.panelTitle.btnUserHelp.Click(9, 10);
    Log.Message("Device page Help button clicked.");

    // ✅ Validate Help window is enabled
    let wndHHParent = HCMClient.wndHHParent;
    aqObject.CheckProperty(wndHHParent, "Enabled", cmpEqual, true);
    Log.Message("Help window is enabled and visible.");

    // ❎ Close Help window
    wndHHParent.Close();
    Log.Message("Help window closed.");
    
    CloseWindow()
    clickOnConfirmFDMButton()

  } catch (error) {
    Log.Error("Error in FDM_Help_DevicePage15779: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

