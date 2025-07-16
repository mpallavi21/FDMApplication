//USEUNIT NetworkTreeViewPage
//USEUNIT ClientLoginPage
//USEUNIT CommonPageObjects

// =====================================================================
// Author:        Bharath
// Function:      FDMGR3890_FDMGR3891
// Description:   Executes the Build Network operation on the Mux node
//                as part of test cases FDMGR3890 and FDMGR3891
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function FDMGR3890_FDMGR3891() {
  try {
    Log.AppendFolder(" FDMGR3890_FDMGR3891 - Executes the Build Network operation on the Mux node as part of test cases FDMGR3890 and FDMGR3891")
    clickOnNetworkViewTab()
    clickOnbuildNetwork("|FDM Server ( DESKTOP-AJ7O5O5 )|DESKTOP-AJ7O5O5|Mux");
    clickOnbuildNetwork("|FDM Server ( DESKTOP-AJ7O5O5 )|DESKTOP-AJ7O5O5|Mux|SFT_PNF");
    Log.Checkpoint("FDMGR3890_FDMGR3891 executed successfully.");
  } catch (error) {
    Log.Error("Error occurred in FDMGR3890_FDMGR3891:", error);
  } finally {
    Log.PopLogFolder()
  }
}


// =====================================================================
// Author:        Bharath
// Function:      FDMGR6060_6061
// Description:   Verifies the FDM device R3051Rev10H7 under Mux shows
//                the expected OCR status text "*Good*"
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function FDMGR6060_6061() {
  try {
    Log.AppendFolder("FDMGR6060_6061 - Verifies the FDM device under Mux shows")
      //  launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    verifyFDMDeviceStatus("|FDM Server ( DESKTOP-AJ7O5O5 )|DESKTOP-AJ7O5O5|Mux|SFT_PNF|644");
    closeClientMainWindowPage()
    clickOnConfirmFDMYesButton()
    // TestedApps.HCMClient.Terminate();
    Log.Checkpoint("FDMGR6060_6061 passed: Device status verified.");
  } catch (error) {
    Log.Error("FDMGR6060_6061 failed during device status verification:", error);
  } finally{
    Log.PopLogFolder()
  }
}

// =====================================================================
// Author:        Bharath
// Function:      FDMGR5956
// Description:   validate FDM device property option in entry point screen
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function FDMGR5956() {
  try {
    Log.AppendFolder("FDMGR5956 - validate FDM device property option in entry point screen")
      //  launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    clickOnDevice("|FDM Server ( DESKTOP-AJ7O5O5 )|DESKTOP-AJ7O5O5|Mux|SFT_PNF|644");
    let adornerDecorator = Aliases.HCMClient.ClientMainWindow.MdiClient.EntryPointTabPage.EntryPointsTabPage.HwndSource_AdornerDecorator.AdornerDecorator;
    aqObject.CheckProperty(adornerDecorator.HyperlinkFdmDeviceProperties, "WPFControlText", cmpEqual, "FDM Device properties");
    // TestedApps.HCMClient.Terminate();
    Log.Checkpoint("FDMGR6060_6061 passed: Device status verified.");
  } catch (error) {
    Log.Error("FDMGR6060_6061 failed during device status verification:", error);
  } finally{
    Log.PopLogFolder()
  }
}
