//USEUNIT ClientLoginPage
//USEUNIT GenericMethods
//USEUNIT OfflineViewPages
//USEUNIT NetworkTreeViewPage
//USEUNIT DeviceStateViewPage

// =====================================================================
// Author:        Bharath
// Function:      Deivce_ICONS_Create_DD_Offlineconfig15865
// Description:   Launches FDM client, navigates to Offline Configurations, and creates DD config
// Created On:    05-Aug-2025
// =====================================================================

function Deivce_ICONS_Create_DD_Offlineconfig15865() {
  // 🔐 Launches the FDM client using predefined credentials
  //launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);

  // 🌐 Navigates to the Offline View section
  goToOfflineView();

  // 🗂 Clicks on the Offline tab to access available configurations
  ClickOfflineTab();

  // ⚙️ Opens the DD Offline Configuration screen
  OpenDDOfflineConfigurations();

  // 🛠 Creates a DD Offline Configuration using fixed input values
  createDDOfflineConfiguration("HART", "Rosemount_38", "644 Temperature(9752)", "9", "1");
  
  EnterOfflineDeviceConfigurationDetails() 
}


// =====================================================================
// Author:        Bharath
// Function:      DeviceIcons_Create_DisplayFilter
// Description:   Launches the FDM client, navigates to Offline View, and creates Display Filter configuration.
// Created On:    05-Aug-2025
// =====================================================================
function DeviceIcons_Create_DisplayFilter15871() {
  Log.AppendFolder("DeviceIcons_Create_DisplayFilter");

  try {
    // 🔐 Launches the FDM client using predefined credentials
   // launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launched successfully.");

    // 🌐 Navigates to the Offline View section
    goToOfflineView();
    Log.Message("Navigated to Offline View.");
  
    OCR.Recognize(Aliases.HCMClient.ClientMainWindow.panelLeftPanMain.tabControlLeftPanMain.tabPageOfflineView.panelOfflineView.tabControlOfflineView).BlockByText("DisplayFil...").Click();

    // 🧩 Creates Display Filter configuration
    CreateDisplayFilterConfiguration();
    Log.Message("Display Filter configuration created.");

  } catch (error) {
    Log.Error("Error in DeviceIcons_Create_DisplayFilter: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      DeviceICONS_Create_DTM_OfflineConfig15875
// Description:   Launches FDM client, navigates to Offline View, and creates a DTM offline config
// Created On:    05-Aug-2025
// =====================================================================
function DeviceICONS_Create_DTM_OfflineConfig15875() {
  Log.AppendFolder("DeviceICONS_Create_DTM_OfflineConfig15875");

  try {
    // 🔐 Authenticate and launch FDM client
   // launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launched with provided credentials.");

    // 🌐 Navigate to Offline View
    goToOfflineView();
    Log.Message("Navigated to Offline View successfully.");

    // 🗂 Open Offline tab
    ClickOfflineTab();
    Log.Message("Offline tab clicked.");

    // ⚙️ Create Offline DTM Configuration
    CreateOfflineDTMConfig();
    Log.Message("Offline DTM configuration created.");

    // 🧹 Clean up the window
    let HCMClient = Aliases.HCMClient;
    HCMClient.ClientMainWindow.MdiClient.DtmForm.panelBase.panelFullTop.panelTitle.buttonClose.Click(7, 7);
    Log.Message("Window closed post configuration.");

    // ✅ Confirm operations twice if required
    let btnYes = HCMClient.dlgFDMConfiguration.btnYes;
    if(btnYes.Exists){
      btnYes.ClickButton();
    btnYes.ClickButton();
    Log.Message("Confirmation buttons clicked.");
    }
    

  } catch (error) {
    Log.Error("Error in DeviceICONS_Create_DTM_OfflineConfig15875: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
  
}


// =====================================================================
// Author:        Bharath
// Function:      DeviceIcons_DD_OfflineView15878
// Description:   Launches FDM client, builds network, navigates to Offline View, and selects DD configuration.
// Created On:    05-Aug-2025
// =====================================================================
function DeviceIcons_DD_OfflineView15878() {
  Log.AppendFolder("DeviceIcons_DD_OfflineView15878");

  try {
    // 🔐 Launches the FDM client using predefined credentials
  //  launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launched successfully.");
  
    // 🌐 Navigates to Network View and builds network hierarchy
    clickOnNetworkViewTab();
    let input = Project.Variables.Device;
    clickOnbuildNetwork(input.split("|").slice(0, -2).join("|"));
    clickOnbuildNetwork(input.split("|").slice(0, -1).join("|"));
    Log.Message("Network hierarchy built for device: " + input);

    // 📂 Navigates to Offline View
    goToOfflineView();
    Log.Message("Navigated to Offline View.");

    // 🗂 Clicks on the Offline tab
    ClickOfflineTab();
    Log.Message("Offline tab clicked.");

    // ⚙️ Opens DD Offline Configurations
    OpenDDOfflineConfigurations();
    Log.Message("DD Offline Configurations opened.");

    // 🎯 Selects the specific DD configuration node
    let treeView = Aliases.HCMClient.ClientMainWindow.panelLeftPanMain
                    .tabControlLeftPanMain.tabPageOfflineView.panelOfflineView
                    .tabControlOfflineView.tabPageOfflineTemplates.treeView;

    let targetNode = `|DD Offline Configurations|HART|Rosemount(38)|644 Temperature(9752)|9|${Project.Variables.OfflineDDSaveFileName}`;
    treeView.ClickItem(targetNode);
    Log.Message("Clicked DD configuration node: " + targetNode);

  } catch (error) {
    Log.Error("Error in DeviceIcons_DD_OfflineView15878: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      Device_ICONS_DTM_OfflineConfig15881
// Description:   Launches FDM client, builds network, navigates to Offline View, and selects DTM configuration.
// Created On:    06-Aug-2025
// =====================================================================
function Device_ICONS_DTM_OfflineConfig15881() {
  Log.AppendFolder("Device_ICONS_DTM_OfflineConfig15881");

  try {
    // 🔐 Launches the FDM client using predefined credentials
   // launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launched successfully.");

    // 🌐 Navigates to Network View and builds network hierarchy
    clickOnNetworkViewTab();
    let input = Project.Variables.Device;
    clickOnbuildNetwork(input.split("|").slice(0, -2).join("|"));
    clickOnbuildNetwork(input.split("|").slice(0, -1).join("|"));
    Log.Message("Network hierarchy built for device: " + input);

    // 📂 Navigates to Offline View
    goToOfflineView();
    Log.Message("Navigated to Offline View.");

    // 🗂 Clicks on the Offline tab
    ClickOfflineTab();
    Log.Message("Offline tab clicked.");

    // 🎯 Selects the specific DTM configuration node
    let treeView = Aliases.HCMClient.ClientMainWindow.panelLeftPanMain
                    .tabControlLeftPanMain.tabPageOfflineView.panelOfflineView
                    .tabControlOfflineView.tabPageOfflineTemplates.treeView;

    let targetNode = `|DTM Offline Configurations|ROSEMOUNT|644 V07.01 Ver [1.4.124.3]|${Project.Variables.OfflineDTMSavedFileName}`;
    treeView.ClickItem(targetNode);
    Log.Message("Clicked DTM configuration node: " + targetNode);

  } catch (error) {
    Log.Error("Error in Device_ICONS_DTM_OfflineConfig: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

function DeviceIconsLibraryView15885(){
  // 🔐 Launches the FDM client using predefined credentials
   // launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launched successfully.");

    // 📂 Navigates to Offline View
    goToOfflineView();
    Log.Message("Navigated to Offline View.");
    
    OpenDeviceLibrary()
    Regions.tabControlOfflineViewDD_DTM.Check(Regions.CreateRegionInfo(Aliases.HCMClient.ClientMainWindow.panelLeftPanMain.tabControlLeftPanMain.tabPageOfflineView.panelOfflineView.tabControlOfflineView, 26, 24, 100, 52, false), false, false, 2946, 144);
}

// =====================================================================
// Author:        Bharath
// Function:      OfflineCreateConfiguration_1_15840
// Description:   Creates a DD Offline Configuration using fixed input values and validates save.
// Created On:    14-Aug-2025
// =====================================================================
function OfflineCreateConfiguration_1_15840() {
  Log.AppendFolder("OfflineCreateConfiguration_1_15840");

  try {
    // 🌐 Navigate to Offline View and open configuration screen
    goToOfflineView();
    ClickOfflineTab();
    OpenDDOfflineConfigurations();
    Log.Message("DD Offline Configuration screen opened.");

    // 🛠 Create configuration using fixed values
    createDDOfflineConfiguration("HART", "Rosemount_38", "644 Temperature*", "9", "2");
    Log.Message("DD Offline Configuration initiated.");

    let HCMClient = Aliases.HCMClient;
    let hostPanel = HCMClient.ClientMainWindow.MdiClient.HCMOfflineConfigForm.panelBase;
    let panel = hostPanel.panelForDerivedForms.panelOfflineBase;
    let panel2 = panel.groupBoxConfigView.pnlConfiguration;

    // 📝 Interact with device screen textbox
    let textBox = panel2.Panel.MagicTabControlEx.TabPage.CDeviceScreen.m_pnlDeviceScreen
                   .ElementHost.HwndSource_AdornerDecorator.AdornerDecorator.TextBox;
    textBox.Click(108, 15);
    HCMClient.HwndSource_PopupRoot.PopupRoot.ComboBoxItem.Click(75, 21);
    Log.Message("Device screen selection completed.");

    // 💾 Preview and save configuration
    panel2.ActionControlView.HwndSource_AdornerDecorator.AdornerDecorator.ButtonPreviewSave.ClickButton();
    let adornerDecorator = panel.OfflineReviewDialogElementHost.ehReviewDialog.HwndSource_AdornerDecorator.AdornerDecorator;
    adornerDecorator.Rectangle3.Click(13, 22);

    // ✅ Validate save confirmation
    aqObject.CheckProperty(adornerDecorator.TextblockConfigurationSavedSuccessfully2, "WPFControlText", cmpEqual, "Configuration Saved successfully");
    Log.Message("Configuration saved successfully.");

    adornerDecorator.Rectangle4.Click(12, 6);

    // 🔽 Collapse template section and close
    panel.panel1.groupBoxTemplate.pnlCollapse.lblCollapse.Click(1032, 14);
    hostPanel.panelFullTop.panelTitle.buttonClose.Click(13, 15);
    Log.Message("Configuration window closed.");

  } catch (error) {
    Log.Error("Error in OfflineCreateConfiguration_1_15840: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}




// =====================================================================
// Author:        Bharath
// Function:      OfflineCreateConfiguration_2_15849
// Description:   Creates a DTM Offline Configuration for ROSEMOUNT 644 device.
// Created On:    19-Aug-2025
// =====================================================================
function OfflineCreateConfiguration_2_15849() {
  Log.AppendFolder("OfflineCreateConfiguration_2_15849");

  try {
    // 🔐 Launches the FDM client using predefined credentials
    // launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launch assumed successful.");

    // 🌐 Navigate to Online View and build network hierarchy
    ClickOnlineViewTab();
    clickOnNetworkViewTab();

    let input = Project.Variables.Device;
    clickOnbuildNetwork(input.split("|").slice(0, -2).join("|"));
    clickOnbuildNetwork(input.split("|").slice(0, -1).join("|"));
    Log.Message("Network hierarchy built for device: " + input);

    // 📂 Navigate to Offline View
    goToOfflineView();
    Log.Message("Navigated to Offline View.");

    // 🗂 Click Offline tab
    ClickOfflineTab();
    Log.Message("Offline tab clicked.");

    // ⚙️ Create DTM Offline Configuration
    let HCMClient = Aliases.HCMClient;
    let frmHCMClientMain = HCMClient.ClientMainWindow;
    let treeView = frmHCMClientMain.panelLeftPanMain
                    .tabControlLeftPanMain.tabPageOfflineView.panelOfflineView
                    .tabControlOfflineView.tabPageOfflineTemplates.treeView;

    treeView.ClickItemR("|DTM Offline Configurations");
    treeView.StripPopupMenu.Click("Create Configuration");
    Log.Message("Initiated DTM Offline Configuration creation.");

    let hostPanel = frmHCMClientMain.MdiClient.DtmForm.panelBase;
    let DTMTabView = hostPanel.panelForDerivedForms.DTMTabView;
    let groupBox = DTMTabView.panelOfflineConfig.groupBoxTemplate;

    groupBox.cboVendor.ClickItem("ROSEMOUNT (38)");
    groupBox.cboDevType.ClickItem("644 V07.01 Ver [1.4.124.3] ");
    groupBox.buttonOfflineCreate.ClickButton();
    Log.Message("Device type selected and configuration triggered.");

    // ✅ Validate configuration panel loaded
    aqObject.CheckProperty(DTMTabView.panelConfiguration.tabControl1.TabPage.panelDtmStartup, "Enabled", cmpEqual, true);
    Log.Message("DTM Startup panel verified.");

    // ❎ Close configuration window
    hostPanel.panelFullTop.panelTitle.buttonClose.Click(6, 5);
    Log.Message("Configuration window closed.");

    // ✅ Confirm overwrite/save prompts
    let btnYes = HCMClient.dlgFDMConfiguration.btnYes;
    btnYes.ClickButton();
    btnYes.ClickButton();
    Log.Message("Confirmation dialogs handled.");

    // ❌ Cancel Save File dialog via OCR
    OCR.Recognize(HCMClient.SaveFileDlg.buttonCancel).BlockByText("Cancel").Click();
    Log.Message("Save File dialog cancelled via OCR.");

  } catch (error) {
    Log.Error("Error in OfflineCreateConfiguration_2_15849: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      OptionForCreatingDisplayFilter15819
// Description:   Launches the FDM client, navigates to Offline View, and creates Display Filter configuration.
// Created On:    05-Aug-2025
// =====================================================================
function OptionForCreatingDisplayFilter15819() {
  Log.AppendFolder("OptionForCreatingDisplayFilter15819");

  try {
    // 🔐 Launches the FDM client using predefined credentials
   // launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launched successfully.");
    
    // 🌐 Navigates to the Offline View section
    goToOfflineView();
    Log.Message("Navigated to Offline View.");
    
    OCR.Recognize(Aliases.HCMClient.ClientMainWindow.panelLeftPanMain.tabControlLeftPanMain.tabPageOfflineView.panelOfflineView.tabControlOfflineView).BlockByText("DisplayF*").Click();

    // 🧩 Creates Display Filter configuration
    CreateDisplayFilterConfiguration();
    Log.Message("Display Filter configuration created.");

  } catch (error) {
    Log.Error("Error in DeviceIcons_Create_DisplayFilter: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}
