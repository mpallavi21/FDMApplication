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
    closeWindowPage()
    clickOnConfirmFDMButton()
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
// Function:      FDMGR5956_5957
// Description:   validate FDM device property option in entry point screen
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function FDMGR5956_5957() {
  try {
    Log.AppendFolder("FDMGR5956_5957 - validate FDM device property option in entry point screen")
      //  launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    clickOnDevice(`${Project.Variables.Device}`);
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






// =====================================================================
// Author:        Bharath
// Function:      FDMGR5899
// Description:   Verifies that Quick View launches for a specific FDM device
//                and logs its diagnostic information.
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function FDMGR5899() {
  try {
    Log.AppendFolder("FDMGR5899 - Verify Quick View Launch and Log Device Info");

    const devicePath = "|FDM Server ( DESKTOP-AJ7O5O5 )|DESKTOP-AJ7O5O5|MUX|SFT_PNF|644";

    // Step 1: Verify Quick View launches for the device
    verifyQuickViewLaunch(devicePath);

    // Step 2: Log diagnostic/device information
    logFDMDeviceInformation();

    Log.Checkpoint("✅ FDMGR5899 passed: Quick View verified and device info logged.");
  } catch (error) {
    Log.Error("❌ FDMGR5899 failed during Quick View verification or logging:", error);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      FDMGR5900
// Description:   Verifies that Quick View launches for a specific FDM device
//                and checks the device status using FDMDeviceStatus()
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function FDMGR5900() {
  try {
    Log.AppendFolder("FDMGR5900 - Verify Quick View and Device Status");
    
    // Step 1: Launch and verify Quick View
    verifyQuickViewLaunch(Project.Variables.Device);

    // Step 2: Check the device status
    FDMDeviceStatus();

    Log.Checkpoint("✅ FDMGR5900 passed: Quick View launched and device status verified.");
  } catch (error) {
    Log.Error("❌ FDMGR5900 failed during Quick View or device status check:", error);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      FDMGR4904
// Description:   Verify all created history for the device in "View history"
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function FDMGR4904() {
  try {
    Log.AppendFolder(`FDMGR5900 - Verify all created history for the device in "View history"`);
    
    //Launch and verify History
    LaunchViewHistory(Project.Variables.Device);
    
    Log.Checkpoint("✅ FDMGR5900 passed: View History launched");
  } catch (error) {
    Log.Error("❌ FDMGR5900 failed during View History:- ", error);
  } finally {
    Log.PopLogFolder();
  }
}



// =====================================================================
// Author:        Bharath
// Function:      AuditTrail
// Description:   Triggers audit trail view for a selected tooltip,
//                applies 'All' filters and clicks the 'View' button.
// Created On:    21-Jul-2025
// Modified On:   21-Jul-2025
// =====================================================================

function AuditTrail() {
  Log.AppendFolder("ViewAuditTrailForDevice - Audit Trail Flow");

  try {
    let treeView = Aliases.HCMClient.ClientMainWindow.panelLeftPanMain
      .tabControlLeftPanMain.tabPageOnlineView.panelOnlineView
      .panelTabControlOnlineView.tabControlOnlineView.tabConnected.treeView;

    if (!treeView.Exists) {
      Log.Error("TreeView not found.");
      return;
    }

    let targetItem = Project.Variables.Device;

    treeView.ClickItem(targetItem);
    Log.Message("Clicked item: " + targetItem);

    treeView.ClickItemR(targetItem);
    Log.Message("Right-clicked item for context menu.");
    Delay(1000)
  
    treeView.StripPopupMenu.Click("View Audit Trail")

    // Apply filters in Audit Trail view
    let groupBox = Aliases.HCMClient.ClientMainWindow.MdiClient.AuditTrailView.panelBase
      .panelForDerivedForms.panel4.panel2.groupBox1;
    
    Delay(1000)
    if (groupBox.Exists) {
      groupBox.ViewButton.Click(25, 13);
      Log.Message("Applied filters and clicked View in Audit Trail.");
    } else {
      Log.Error("Audit Trail group box not found.");
    }
    
    CloseWindow()

  } catch (e) {
    Log.Error("Exception in ViewAuditTrailForDevice: " + e.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      BuildNetwork
// Description:   Executes the Build Network operation on the Mux node
//                as part of test cases FDMGR3890 and FDMGR3891
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function BuildNetwork() {
  try {
    Log.AppendFolder(" BuildNetwork - Executes the Build Network operation on the Mux node as part of test cases BuildNetwork_HW Mux")
    clickOnNetworkViewTab()
    input = Project.Variables.Device
    clickOnbuildNetwork(input.split("|").slice(0, -2).join("|"));
    clickOnbuildNetwork(input.split("|").slice(0, -1).join("|"));
    Log.Checkpoint("FDMGR3890_FDMGR3891 executed successfully.");
  } catch (error) {
    Log.Error("Error occurred in FDMGR3890_FDMGR3891:", error);
  } finally {
    Log.PopLogFolder()
  }
}
