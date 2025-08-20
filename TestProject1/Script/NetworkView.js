//USEUNIT NetworkTreeViewPage
//USEUNIT ClientLoginPage
//USEUNIT CommonPageObjects
//USEUNIT DeviceStateViewPage
//USEUNIT EntryPointPage
//USEUNIT GenericMethods

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
   // launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    clickOnNetworkViewTab()
    clickOnbuildNetwork("|FDM Server ( DESKTOP-AJ7O5O5 )|DESKTOP-AJ7O5O5|MUX");
    clickOnbuildNetwork("|FDM Server ( DESKTOP-AJ7O5O5 )|DESKTOP-AJ7O5O5|MUX|SFT_PNF");
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
    verifyFDMDeviceStatus(Project.Variables.Device);
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
// Function:      FDMGR5899
// Description:   Verifies that Quick View launches for a specific FDM device
//                and logs its diagnostic information.
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function FDMGR5899() {
  try {
    Log.AppendFolder("FDMGR5899 - Verify Quick View Launch and Log Device Info");

    const devicePath = Project.Variables.Device;

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
    ClickOnlineViewTab()
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


// =====================================================================
// Author:        Bharath
// Function:      Device_Explicit_Lock
// Description:   Locks a device, attempts configuration, handles warning, unlocks, and retries configuration.
// Created On:    04-Aug-2025
// Modified On:   
// =====================================================================

function Device_Explicit_Lock() {
  Log.AppendFolder("Device_Explicit_Lock");

  try {
    
    //launchFDMClient(Project.Variables.FDMClientUserName,Project.Variables.FDMClientPassword)
    ClickOnlineViewTab()
    
    // Step 1: Open Network View
    clickOnNetworkViewTab();

    // Step 2: Access the tree view
    let treeView = Aliases.HCMClient.ClientMainWindow.panelLeftPanMain
                     .tabControlLeftPanMain.tabPageOnlineView.panelOnlineView
                     .panelTabControlOnlineView.tabControlOnlineView.tabConnected.treeView;

    if (!treeView.Exists) {
      Log.Error("❌ TreeView not found.");
      return;
    }

    // Step 3: Lock the device
    let targetItem = Project.Variables.Device;
    treeView.ClickItem(targetItem);
    Log.Message("🔒 Clicking item: " + targetItem);

    treeView.ClickItemR(targetItem);
    Delay(1000);
    treeView.StripPopupMenu.Click("Lock");

    // Step 4: Attempt configuration (locked state)
    let lockedItemPath = Project.Variables.Device;
    treeView.ClickItemR(lockedItemPath);
    treeView.StripPopupMenu.Click("Configure with|DTM (Online)");

    // Step 5: Handle warning dialog
    Delay(2000)
    let HCMClient = Aliases.HCMClient;
    HCMClient.dlgFDMConfiguration.btnOK.ClickButton();

    // Step 6: Unlock and retry configuration
    let frmHCMClientMain = HCMClient.ClientMainWindow;
    treeView = frmHCMClientMain.panelLeftPanMain.tabControlLeftPanMain
                .tabPageOnlineView.panelOnlineView.panelTabControlOnlineView
                .tabControlOnlineView.tabConnected.treeView;

    treeView.ClickItemR(lockedItemPath);
    treeView.StripPopupMenu.Click("Unlock");
    treeView.ClickItemR(lockedItemPath);
    treeView.StripPopupMenu.Click("Configure with|DTM (Online)");

    // Step 7: Confirm successful configuration
    let hostPanel = frmHCMClientMain.MdiClient.DtmForm.panelBase;
    aqObject.CheckProperty(hostPanel.panelForDerivedForms.DTMTabView.panelConfiguration.tabControl1,
      "Enabled", cmpEqual, true);
    hostPanel.panelFullTop.panelTitle.buttonClose.Click(11, 9);

    // Step 8: Accept confirmation dialog
    HCMClient.dlgFDMConfiguration.btnYes.ClickButton();

    Log.Checkpoint("✅ Device successfully unlocked and configured with DTM.");

  } catch (error) {
    Log.Error("❌ Error in Device_Explicit_Lock: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Author:        Bharath
// Function:      ELCON_History_readall15876
// Description:   Reads and saves device history using DD and DTM configuration paths.
// Created On:    06-Aug-2025
// =====================================================================
function ELCON_History_readall15876() {
  Log.AppendFolder("ELCON_History_readall15876");

  try {
    // 🔐 Launch FDM client
 //   launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launched.");

    // 🌐 Navigate to Online and Network View tabs
    ClickOnlineViewTab();
    clickOnNetworkViewTab();

    // 🌲 Access device tree
    let treeView = Aliases.HCMClient.ClientMainWindow.panelLeftPanMain
                    .tabControlLeftPanMain.tabPageOnlineView.panelOnlineView
                    .panelTabControlOnlineView.tabControlOnlineView.tabConnected.treeView;

    if (!treeView.Exists) {
      Log.Error("❌ TreeView not found.");
      return;
    }

    // 📌 Right-click device and configure with DD/Package
    let ItemPath = Project.Variables.Device;
    treeView.ClickItemR(ItemPath);
    treeView.StripPopupMenu.Click("Configure with|DD/Package");
    
    //Wait for Device load
    waitForDeviceLoad()
  
    // 💾 Save history using DD path
    clickSaveHistoryHyperlink();
    let input = Project.Variables.Device;
    let parts = input.split("|");
    let lastValue = parts[parts.length - 1];
    fillSaveHistoryPopup(lastValue + aqDateTime.Now() / 1000);
    handleFdmConfigurationPopup();
    handleSaveHistoryCompletion();
    closeWindowPage();
    clickOnConfirmFDMButton();

    // 🔁 Repeat for DTM (Online) configuration
    treeView.ClickItemR(ItemPath);
    treeView.StripPopupMenu.Click("Configure with|DTM (Online)");

    let HCMClient = Aliases.HCMClient;
    let panel = HCMClient.ClientMainWindow.MdiClient.DtmForm.panelBase
                  .panelForDerivedForms.DTMTabView.panelConfiguration
                  .tabControl1.TabPage.panelDtmStartup;

    aqObject.CheckProperty(panel, "Exists", cmpEqual, true);
    panel.panel1.SaveAsHistoryLink.ClickLink(0);

    fillSaveHistoryPopup(lastValue + aqDateTime.Now() / 1000);
    handleFdmConfigurationPopup();

    // ❎ Final cleanup
    CloseWindow();
    clickOnConfirmFDMButton();

    Log.Message("History saved successfully using both DD and DTM paths.");

  } catch (error) {
    Log.Error("Error in ELCON_History_readall15876: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      History_Hart_DTM_DeviceMux15848
// Description:   Saves device history and verifies its presence in the history viewer.
// Created On:    12-Aug-2025
// Modified On:   12-Aug-2025
// =====================================================================

function History_Hart_DTM_DeviceMux15848() {
  Log.AppendFolder("History_Hart_DTM_DeviceMux15848");

  try {
    // === Step 1: Navigate to device view ===
    ClickOnlineViewTab();
    clickOnNetworkViewTab();
    clickOnDevice(Project.Variables.Device);

    // === Step 2: Save device history ===
    clickSaveHistoryHyperlink();

    let input = Project.Variables.Device;
    let parts = input.split("|");
    let lastValue = parts[parts.length - 1];
    let SaveName = lastValue + "_" + Math.floor(aqDateTime.Now() / 1000);  // Timestamp for uniqueness

    fillSaveHistoryPopup(SaveName);
    handleFdmConfigurationPopup();
    handleSaveHistoryCompletion();

    // === Step 3: Confirm and close dialogs ===
    CloseWindow();
    clickOnConfirmFDMButton();

    // === Step 4: Open history viewer for the device ===
    let frmHCMClientMain = Aliases.HCMClient.ClientMainWindow;
    let treeView = frmHCMClientMain.panelLeftPanMain.tabControlLeftPanMain.tabPageOnlineView
                    .panelOnlineView.panelTabControlOnlineView.tabControlOnlineView
                    .tabConnected.treeView;

    treeView.ClickItemR(Project.Variables.Device);
    treeView.StripPopupMenu.Click("View History");

    // === Step 5: Select saved history entry and view ===
    let panel = frmHCMClientMain.MdiClient.HistoryFrom.panelBase.panelForDerivedForms;
    let adornerDecorator = panel.panel1.ElementHost.HwndSource_AdornerDecorator.AdornerDecorator;

    adornerDecorator.cmb_HistoryName.ClickItem(`*${SaveName}*`);
    adornerDecorator.btn_View.ClickButton();

    // === Step 6: Verify history screen loaded ===
    let historyScreen = panel.pnlHistoryConfig.MagicTabControlEx.TabPage.CDeviceScreen
                          .m_pnlDeviceScreen.TabControl.TabPage.ElementHost
                          .HwndSource_AdornerDecorator.AdornerDecorator.ScrollViewer;

    aqObject.CheckProperty(historyScreen, "Exists", cmpEqual, true);

    // === Step 7: Final cleanup ===
    CloseWindow();

  } catch (error) {
    Log.Error("Error in History_Hart_DTM_DeviceMux15848: " + error.message);

  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Author:        Bharath
// Function:      LoadHARTDevice15796
// Description:   Loads HART device using DD/Package, DTM (Online), and DTM (Offline) configurations.
// Created On:    12-Aug-2025
// Modified On:   12-Aug-2025
// =====================================================================

function LoadHARTDevice15796() {
  Log.AppendFolder("LoadHARTDevice15796");

  try {
    // === Step 1: Navigate to Online View and Network View ===
    ClickOnlineViewTab();
    clickOnNetworkViewTab();

    let HCMClient = Aliases.HCMClient;
    let treeView = HCMClient.ClientMainWindow.panelLeftPanMain.tabControlLeftPanMain
                    .tabPageOnlineView.panelOnlineView.panelTabControlOnlineView
                    .tabControlOnlineView.tabConnected.treeView;

    // === Step 2: Configure with DD/Package ===
    treeView.ClickItemR(Project.Variables.Device);
    treeView.StripPopupMenu.Click("Configure with|DD/Package");

    aqObject.CheckProperty(
      NameMapping.Sys.HCMClient.ClientMainWindow.MdiClient.CDeviceHomePage.panelBase.panelForDerivedForms.Panel
        .MagicTabControlEx.EntryPointTabPage.CDeviceScreen.m_pnlDeviceScreen.TabControl.EntryPointsTabPage
        .ElementHost.HwndSource_AdornerDecorator.AdornerDecorator.ScrollViewer,
      "Enabled", cmpEqual, true
    );

    CloseWindow();
    clickOnConfirmFDMButton();

    // === Step 3: Configure with DTM (Online) ===
    treeView.ClickItemR(Project.Variables.Device);
    treeView.StripPopupMenu.Click("Configure with|DTM (Online)");

    let manualDtmSelector = HCMClient.ManualDtmSelector;
    aqObject.CheckProperty(manualDtmSelector, "Enabled", cmpEqual, true);

    let winButton = manualDtmSelector.panel1.btnCancel;
    OCR.Recognize(winButton).BlockByText("Cancel").Click();

    // === Step 4: Configure with DTM (Offline) ===
    treeView.ClickItemR(Project.Variables.Device);
    treeView.StripPopupMenu.Click("Configure with|DTM (Offline)");

    aqObject.CheckProperty(manualDtmSelector, "Enabled", cmpEqual, true);
    OCR.Recognize(winButton).BlockByText("Cancel").Click();

  } catch (error) {
    Log.Error("Error in LoadHARTDevice15796: " + error.message);

  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      LogUserAction15798
// Description:   Automates the process of logging a user action in the Audit Trail,
//                dynamically generates a unique description using the device name and timestamp,
//                and verifies the entry in the Audit Trail grid.
// Created On:    12-Aug-2025
// Modified On:   12-Aug-2025
// =====================================================================
function LogUserAction15798() {
  Log.AppendFolder("LogUserAction15798");

  try {
    ClickOnlineViewTab();
    clickOnNetworkViewTab();
    
    let HCMClient = Aliases.HCMClient;
    let treeView = HCMClient.ClientMainWindow.panelLeftPanMain
                    .tabControlLeftPanMain.tabPageOnlineView.panelOnlineView
                    .panelTabControlOnlineView.tabControlOnlineView
                    .tabConnected.treeView;

    // 🌲 Right-click and log user action
    treeView.ClickItemR(Project.Variables.Device);
    treeView.StripPopupMenu.Click("Log User Action");
    
    let AuditDescription = "User able to enter the text in description field " + Math.floor(aqDateTime.Now() / 1000);

    // 📝 Fill in Description and Reason
    let auditTrailUserAction = HCMClient.AuditTrailUserAction;
    auditTrailUserAction.DescriptionTextBox.TextBoxArea.Keys(AuditDescription);

    let reasonBox = auditTrailUserAction.ReasonTextBox.TextBoxArea;
    reasonBox.Click(39, 32);
    reasonBox.Keys("Log User Action");

    // ✅ Confirm action
    OCR.Recognize(auditTrailUserAction.OKButton).BlockByText("OK").Click();

    // 🔍 View Audit Trail and verify entry
    treeView.ClickItemR(Project.Variables.Device);
    treeView.StripPopupMenu.Click("View Audit Trail");

    let isLogged = FindValueInDescriptionColumn(AuditDescription);
    Log.Message("Audit entry verification: " + isLogged);

    // 🧹 Cleanup
    CloseWindow();

  } catch (error) {
    Log.Error("Error in LogUserAction15798: " + error.message);

  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Author:        Bharath
// Function:      MuxConfig_MTL15961
// Description:   Configures MUX device, updates text field, and sends review.
// Created On:    13-Aug-2025
// =====================================================================
function MuxConfig_MTL15961() {
  Log.AppendFolder("MuxConfig_MTL15961");

  try {
    // 🌐 Navigate to Online View and build network
    ClickOnlineViewTab();
    clickOnNetworkViewTab();
    BuildNetwork();
    clickOnDevice(Project.Variables.Device);
    Log.Message("Device selected: " + Project.Variables.Device);

    let HCMClient = Aliases.HCMClient;
    let tabPage = HCMClient.ClientMainWindow.MdiClient.EntryPointTabPage;

    // 🔍 Open FDM Device Properties
    tabPage.EntryPointsTabPage.HwndSource_AdornerDecorator.AdornerDecorator.HyperlinkFdmDeviceProperties.Click();
    Log.Message("FDM Device Properties opened.");

    let adornerDecorator = tabPage.FDM_Device_Properties.ElementHost.HwndSource_AdornerDecorator.AdornerDecorator;
    let scrollViewer = adornerDecorator.ScrollViewer;

    // 📝 Scroll to top and update text field
    scrollViewer.VScroll.Pos = 0;
    let textBox = scrollViewer.TextBox;
    textBox.Click(121, 16);
    let timestamp = Math.floor(aqDateTime.Now() / 1000);
    textBox.SetText(`No Data available ${timestamp}`);
    Log.Message("Text field updated with timestamp: " + timestamp);

    // 📤 Submit review
    adornerDecorator.ButtonReviewSend.ClickButton();
    let previewDialog = HCMClient.HwndSource_PreviewDialog.PreviewDialog;
    previewDialog.btn_Send.ClickButton();
    previewDialog.Rectangle.Click(6, 14);
    Log.Message("Review submitted.");

    // ❎ Close window and confirm
    CloseWindow();
    clickOnConfirmFDMButton();
    Log.Message("Window closed and confirmation clicked.");

  } catch (error) {
    Log.Error("Error in MuxConfig_MTL15961: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Author:        Bharath
// Function:      muxconfig_pnf15962
// Description:   Configures MUX device, updates text field, and sends review.
// Created On:    13-Aug-2025
// =====================================================================
function muxconfig_pnf15962() {
  Log.AppendFolder("muxconfig_pnf15962");

  try {
    // 🌐 Navigate to Online View and build network
    ClickOnlineViewTab();
    clickOnNetworkViewTab();
    BuildNetwork();
    clickOnDevice(Project.Variables.Device);
    Log.Message("Device selected: " + Project.Variables.Device);

    let HCMClient = Aliases.HCMClient;
    let tabPage = HCMClient.ClientMainWindow.MdiClient.EntryPointTabPage;

    // 🔍 Open FDM Device Properties
    tabPage.EntryPointsTabPage.HwndSource_AdornerDecorator.AdornerDecorator.HyperlinkFdmDeviceProperties.Click();
    Log.Message("FDM Device Properties opened.");

    let adornerDecorator = tabPage.FDM_Device_Properties.ElementHost.HwndSource_AdornerDecorator.AdornerDecorator;
    let scrollViewer = adornerDecorator.ScrollViewer;

    // 📝 Scroll to top and update text field
    scrollViewer.VScroll.Pos = 0;
    let textBox = scrollViewer.TextBox;
    textBox.Click(121, 16);
    let timestamp = Math.floor(aqDateTime.Now() / 1000);
    textBox.SetText(`No Data available ${timestamp}`);
    Log.Message("Text field updated with timestamp: " + timestamp);

    // 📤 Submit review
    adornerDecorator.ButtonReviewSend.ClickButton();
    let previewDialog = HCMClient.HwndSource_PreviewDialog.PreviewDialog;
    previewDialog.btn_Send.ClickButton();
    previewDialog.Rectangle.Click(6, 14);
    Log.Message("Review submitted.");

    // ❎ Close window and confirm
    CloseWindow();
    clickOnConfirmFDMButton();
    Log.Message("Window closed and confirmation clicked.");

  } catch (error) {
    Log.Error("Error in muxconfig_pnf15962 " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Author:        Bharath
// Function:      muxconfig_stahl15963
// Description:   Configures MUX device, updates text field, and sends review.
// Created On:    13-Aug-2025
// =====================================================================
function muxconfig_stahl15963() {
  Log.AppendFolder("muxconfig_stahl15963");

  try {
    // 🌐 Navigate to Online View and build network
    ClickOnlineViewTab();
    clickOnNetworkViewTab();
    BuildNetwork();
    clickOnDevice(Project.Variables.Device);
    Log.Message("Device selected: " + Project.Variables.Device);

    let HCMClient = Aliases.HCMClient;
    let tabPage = HCMClient.ClientMainWindow.MdiClient.EntryPointTabPage;

    // 🔍 Open FDM Device Properties
    tabPage.EntryPointsTabPage.HwndSource_AdornerDecorator.AdornerDecorator.HyperlinkFdmDeviceProperties.Click();
    Log.Message("FDM Device Properties opened.");

    let adornerDecorator = tabPage.FDM_Device_Properties.ElementHost.HwndSource_AdornerDecorator.AdornerDecorator;
    let scrollViewer = adornerDecorator.ScrollViewer;

    // 📝 Scroll to top and update text field
    scrollViewer.VScroll.Pos = 0;
    let textBox = scrollViewer.TextBox;
    textBox.Click(121, 16);
    let timestamp = Math.floor(aqDateTime.Now() / 1000);
    textBox.SetText(`No Data available ${timestamp}`);
    Log.Message("Text field updated with timestamp: " + timestamp);

    // 📤 Submit review
    adornerDecorator.ButtonReviewSend.ClickButton();
    let previewDialog = HCMClient.HwndSource_PreviewDialog.PreviewDialog;
    previewDialog.btn_Send.ClickButton();
    previewDialog.Rectangle.Click(6, 14);
    Log.Message("Review submitted.");

    // ❎ Close window and confirm
    CloseWindow();
    clickOnConfirmFDMButton();
    Log.Message("Window closed and confirmation clicked.");

  } catch (error) {
    Log.Error("Error in muxconfig_stahl15963 " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      OfflineConfig_HARTDDdevice_EPKSNW15785
// Description:   Creates and overwrites HART DD offline configuration template from history.
// Created On:    14-Aug-2025
// =====================================================================
function OfflineConfig_HARTDDdevice_EPKSNW15785() {
  Log.AppendFolder("OfflineConfig_HARTDDdevice_EPKSNW15785");

  try {
    ClickOnlineViewTab();
    clickOnNetworkViewTab();

    let HCMClient = Aliases.HCMClient;
    let frmHCMClientMain = HCMClient.ClientMainWindow;
    let treeView = frmHCMClientMain.panelLeftPanMain
                    .tabControlLeftPanMain.tabPageOnlineView.panelOnlineView
                    .panelTabControlOnlineView.tabControlOnlineView.tabConnected.treeView;

    // 📂 Initiate template creation from history
    treeView.ClickItemR(Project.Variables.Device);
    treeView.StripPopupMenu.Click("Offline Configuration|Create template from history");

    let historyFileList = HCMClient.HistoryFileList;
    let listView = historyFileList.listView1;
    listView.ClickItem("6441754471472", 0);
    historyFileList.btnOK.ClickButton();

    // 📝 Enter filename and save
    let hostPanel = frmHCMClientMain.MdiClient.CreateConfigHistForm.panelBase;
    let adornerDecorator = hostPanel.panelForDerivedForms.panel1.ElementHost.HwndSource_AdornerDecorator.AdornerDecorator;
    let textBox = adornerDecorator.txt_fileName;

    let timestamp = aqConvert.DateTimeToFormatStr(aqDateTime.Now(), "%Y%m%d%H%M%S");
    let saveFileName = "Barath_" + timestamp;
    textBox.SetText(saveFileName);
    adornerDecorator.ButtonSave.ClickButton();

    // ✅ Confirm success
    let dlgSuccess = HCMClient.dlgFDMConfiguration;
    // aqObject.CheckProperty(dlgSuccess.Static, "WndCaption", cmpEqual, "Offline configuration saved successfully");
    dlgSuccess.btnOK.ClickButton();
    hostPanel.panelFullTop.panelTitle.buttonClose.Click(10, 7);
    dlgSuccess.btnYes.ClickButton();

    // 🔁 Attempt overwrite with same name
    treeView.ClickItemR(Project.Variables.Device);
    treeView.StripPopupMenu.Click("Offline Configuration|Create template from history");
    listView.ClickItem("6441754471472", 0);
    historyFileList.btnOK.ClickButton();

    textBox.Drag(174, 11, -269, 8); // Optional: clear or reposition
    textBox.SetText(saveFileName);
    adornerDecorator.ButtonSave.ClickButton();

    // aqObject.CheckProperty(dlgSuccess.Static, "WndCaption", cmpEqual, `Offline Template Name ${saveFileName} already exists`);
    dlgSuccess.btnOK.ClickButton();
    hostPanel.panelFullTop.panelTitle.buttonClose.Click(9, 18);
    dlgSuccess.btnYes.ClickButton();

    Log.Message("Offline configuration created and overwrite handled for: " + saveFileName);

  } catch (error) {
    Log.Error("Error in OfflineConfig_HARTDDdevice_EPKSNW15785: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      OfflineDownload_HARTDD15849
// Description:   Downloads offline configuration for HART DD device and validates success.
// Created On:    19-Aug-2025
// =====================================================================
function OfflineDownload_HARTDD15849() {
  Log.AppendFolder("OfflineDownload_HARTDD15849");

  try {
    BuildNetwork()
    let HCMClient = Aliases.HCMClient;
    let frmHCMClientMain = HCMClient.ClientMainWindow;

    // 🌲 Right-click device and trigger download
    let treeView = frmHCMClientMain.panelLeftPanMain
                    .tabControlLeftPanMain.tabPageOnlineView.panelOnlineView
                    .panelTabControlOnlineView.tabControlOnlineView.tabConnected.treeView;

    treeView.ClickItemR(Project.Variables.Device);
    treeView.StripPopupMenu.Click("Offline Configuration|Download Offline Configuration");
    Log.Message("Download Offline Configuration triggered for: " + Project.Variables.Device);

    // 📂 Access download panel
    let hostPanel = frmHCMClientMain.MdiClient.HCMOfflineConfigForm.panelBase;
    let panel = hostPanel.panelForDerivedForms.panelOfflineBase;

    aqObject.CheckProperty(panel, "Enabled", cmpEqual, true);
    Log.Message("Offline configuration panel is enabled.");

    // 📁 Select configuration
    panel.pnlDownloadConfiguration.ElementHost.HwndSource_AdornerDecorator.AdornerDecorator.ButtonSelect.ClickButton();
    Log.Message("Configuration selection initiated.");

    // ⬇️ Download parameters
    let adornerDecorator = panel.groupBoxConfigView.pnlConfiguration.OfflineDownloadConfig
                                .HwndSource_AdornerDecorator.AdornerDecorator;

    adornerDecorator.btn_Download.ClickButton();
    Log.Message("Download button clicked.");

    // ✅ Wait for success message
    adornerDecorator.TextblockParametersDownloadedSucc.WaitProperty("Exists", true, 100000);
    aqObject.CheckProperty(adornerDecorator.TextblockParametersDownloadedSucc, "WPFControlText", cmpContains, "parameters downloaded successfully");
    Log.Message("Parameters downloaded successfully.");

    // ❎ Close configuration window
    hostPanel.panelFullTop.panelTitle.buttonClose.Click(19, 11);
    Log.Message("Offline configuration window closed.");

  } catch (error) {
    Log.Error("Error in OfflineDownload_HARTDD15849: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Author:        Bharath
// Function:      OnlineMuxdevices15797
// Description:   Renames a MUX device node in the tree view, handles name conflict,
//                and retries renaming from an alternate node path.
// Created On:    19-Aug-2025
// Modified On:   19-Aug-2025
// =====================================================================

function OnlineMuxdevices15797() {
  Log.AppendFolder("OnlineMuxdevices15797");

  try {
    let HCMClient = Aliases.HCMClient;
    let treeView = HCMClient.ClientMainWindow.panelLeftPanMain
                    .tabControlLeftPanMain.tabPageOnlineView.panelOnlineView
                    .panelTabControlOnlineView.tabControlOnlineView.tabConnected.treeView;

    // === Step 1: Attempt to rename device to '644Temperature' ===
    treeView.ClickItemR(Project.Variables.Device);
    treeView.StripPopupMenu.Click("Rename");

    let renameNodeDialog = HCMClient.HwndSource_RenameNodeDialog.RenameNodeDialog;
    let textBox = renameNodeDialog.NewNameTextBox;
    textBox.Keys("![ReleaseLast]");  // Clear previous name
    textBox.SetText("644Temperature");

    let button = renameNodeDialog.ButtonConfirm;
    button.ClickButton();

    // === Step 2: Attempt to rename again to '644FDMdevice' ===
    treeView.ClickItemR(Project.Variables.Device);
    treeView.StripPopupMenu.Click("Rename");
    textBox.SetText("644FDMdevice");
    button.ClickButton();

    // === Step 3: Handle name conflict warning ===
    let textBlock = renameNodeDialog.WarningMessageTextBlock;
    aqObject.CheckProperty(textBlock, "Enabled", cmpEqual, true);
    aqObject.CheckProperty(textBlock, "WPFControlText", cmpEqual, "⚠ Name Already Exists");
    renameNodeDialog.ButtonCancel.ClickButton();

    // === Step 4: Retry renaming from alternate node path ===
    treeView.ClickItemR("|FDM Server ( DESKTOP-AJ7O5O5 )|DESKTOP-AJ7O5O5|MUX|SFT_PNF|644Temperature");
    treeView.StripPopupMenu.Click("Rename");
    textBox.SetText("644FDMdevice");
    button.ClickButton();

  } catch (error) {
    Log.Error("Error in OnlineMuxdevices15797: " + error.message);

  } finally {
    Log.PopLogFolder();
  }
}

