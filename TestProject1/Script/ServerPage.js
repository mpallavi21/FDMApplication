//USEUNIT GenericMethods

// =====================================================================
// Author:        Bharath
// Function:      launchFDMServer
// Description:   Launches the FDM Server application, logs in using credentials,
//                and waits for the main form to load.
// Created On:    --
// Modified On:   --
// =====================================================================

function launchFDMServer(Username,Password) {
  Log.AppendFolder("launchFDMServer - Launches the FDM Server using specified credentials");

  try {
    Log.Checkpoint("Launching FDM Server...");

    // Check if the ServerMgmtTool process is already running and terminate it
    if (Sys.WaitProcess("ServerMgmtTool", 5000).Exists) {
      Log.Message("HCMClient process found. Terminating...");
      Sys.Process("ServerMgmtTool").Terminate();
    }

    // Launch the ServerMgmtTool tested application
    Log.Message("Running TestedApps.ServerMgmtTool...");
    TestedApps.ServerMgmtTool.Run(1, true);

    // Wait for the login form to appear
    let loginForm = Aliases.ServerMgmtTool.LoginForm;
    loginForm.WaitProperty("Exists", true, 10000);

    // Enter the username
    let textBoxArea = loginForm.m_txtLoginName.TextBoxArea;
    textBoxArea.SetText(Username);

    // Enter the password
    textBoxArea = loginForm.m_txtPassword.TextBoxArea;
    textBoxArea.SetText(Password);

    // Click the Login button
    loginForm.m_btnLogin.Click();

    // Wait for the main form to appear after login
    Aliases.ServerMgmtTool.ServerManagerMainForm.WaitProperty("Exists", true, 30000);

    // Log success message
    Log.Message("FDM Server launched and main form loaded.");
  } catch (error) {
    Log.Error("❌ Failed to launch FDM Server: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Function:      addNetworkConfiguration
// Description:   Configures network settings using provided parameters
// =====================================================================
function addNetworkConfiguration(params) {
  Log.AppendFolder("addNetworkConfiguration - Fill Network Configuration");

  try {
    let mainForm = Aliases.ServerMgmtTool.ServerManagerMainForm;
    let mdiClient = mainForm.FindChild("Name", 'WinFormsObject("MdiClient", "")', 100, true);
    if (!mdiClient.Exists) throw new Error("MdiClient not found.");

    let addEditForm = mdiClient.FindChild("Name", 'WinFormsObject("AddEditForm")', 100, true);
    if (!addEditForm.Exists) throw new Error("AddEditForm not found.");

    let panAddEdit = addEditForm.FindChild("Name", '.WinFormsObject("m_panAddEdit")', 100, true);
    if (!panAddEdit.Exists) throw new Error("m_panAddEdit not found.");

    let gpNetworkConfig = panAddEdit.FindChild("Name", 'WinFormsObject("m_gpNetworkConfig")', 100, true);
    if (!gpNetworkConfig.Exists) throw new Error("m_gpNetworkConfig not found.");

    let grpRciConfig = gpNetworkConfig.FindChild("Name", 'WinFormsObject("m_grpRciConfiguration")', 100, true);
    let gpNetworkSpecific = gpNetworkConfig.FindChild("Name", 'WinFormsObject("m_gpNetworkSpecificParam")', 100, true);

    if (params.networkInterfaceName !== undefined) {
      let txtNetworkName = gpNetworkConfig.FindChild("Name", 'WinFormsObject("m_txtNetworkName")', 100, true);
      if (txtNetworkName.Exists) txtNetworkName.SetText(params.networkInterfaceName);
    }

    if (params.networkType !== undefined) {
      let cmbNetworkType = gpNetworkConfig.FindChild("Name", 'WinFormsObject("m_combNetworkType")', 100, true);
      selectComboBoxItemByNameServer(cmbNetworkType, params.networkType);
    }

    if (params.rciServerName !== undefined && grpRciConfig.Exists) {
      let txtServerName = grpRciConfig.FindChild("Name", 'WinFormsObject("m_txtServerName")', 100, true);
      if (txtServerName.Exists) txtServerName.SetText(params.rciServerName);
    }

    if (params.comPort !== undefined && gpNetworkSpecific.Exists) {
      let cmbComPort = gpNetworkSpecific.FindChild("Name", 'WinFormsObject("m_combComPort")', 100, true);
      selectComboBoxItemByNameServer(cmbComPort, params.comPort);
    }

    if (params.baudRate !== undefined && gpNetworkSpecific.Exists) {
      let cmbBaudRate = gpNetworkSpecific.FindChild("Name", 'WinFormsObject("m_combBaudRate")', 100, true);
      selectComboBoxItemByNameServer(cmbBaudRate, params.baudRate);
    }

    if (params.retryCount !== undefined && gpNetworkSpecific.Exists) {
      let txtRetryCount = gpNetworkSpecific.FindChild("Name", 'WinFormsObject("m_txtRetryCount")', 100, true);
      if (txtRetryCount.Exists) txtRetryCount.SetText(params.retryCount);
    }

    if (params.startPollAddress !== undefined && gpNetworkSpecific.Exists) {
      let txtStartPollAddr = gpNetworkSpecific.FindChild("Name", 'WinFormsObject("m_txtStartAddr")', 100, true);
      if (txtStartPollAddr.Exists) txtStartPollAddr.SetText(params.startPollAddress);
    }

    if (params.endPollAddress !== undefined && gpNetworkSpecific.Exists) {
      let txtEndPollAddr = gpNetworkSpecific.FindChild("Name", 'WinFormsObject("m_txtMuxEndAddr")', 100, true);
      if (txtEndPollAddr.Exists) txtEndPollAddr.SetText(params.endPollAddress);
    }

    Log.Checkpoint("✅ Network configuration applied for available fields.");
  } catch (error) {
    Log.Error("❌ Failed to configure network: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Function:      selectComboBoxItemByName
// Description:   Selects an item in a combo box by name
// =====================================================================
function selectComboBoxItemByNameServer(comboBoxObj, itemName) {
  if (comboBoxObj.Exists) {
    comboBoxObj.ClickItem(itemName);
    Log.Message("✅ Selected '" + itemName + "' in combo box.");
  } else {
    Log.Error("❌ Combo box not found for selecting: " + itemName);
  }
}

// =====================================================================
// Function:      clickOnAddNetworkOkButton
// Description:   Clicks the OK button using direct WinFormsObject hierarchy.
// =====================================================================
function clickOnAddNetworkOkButton() {
  Log.AppendFolder("clickOnAddNetworkOkButton - Confirm Add/Edit Network");

  try {
    let btnOk = Aliases.ServerMgmtTool.ServerManagerMainForm
      .WinFormsObject("MdiClient", "")
      .WinFormsObject("AddEditForm")
      .WinFormsObject("m_panAddEdit")
      .WinFormsObject("m_btnOK");

    if (btnOk.Exists && btnOk.Enabled) {
      btnOk.ClickButton();
      Log.Message("✅ OK button clicked to confirm network configuration.");
    } else {
      Log.Error("❌ OK button not found or is disabled.");
    }
  } catch (error) {
    Log.Error("❌ Error while clicking OK: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Function:      submitAuditTrailReason
// Description:   Enters an audit trail reason and clicks OK if enabled.
// =====================================================================
function submitAuditTrailReason(reasonText) {
  Log.AppendFolder("submitAuditTrailReason - Audit Trail Dialog");

  try {
    let auditDialog = Aliases.ServerMgmtTool.WinFormsObject("AuditTrailReasonBox");

    let reasonField = auditDialog.WinFormsObject("ReasonTextBox");
    let okButton = auditDialog.WinFormsObject("OKButton");

    if (reasonField.Exists) {
      reasonField.SetText(reasonText);
      Log.Message("📝 Entered audit reason: " + reasonText);
    } else {
      throw new Error("ReasonTextBox not found.");
    }

    if (okButton.Exists && okButton.Enabled) {
      okButton.ClickButton();
      Log.Message("✅ OK button clicked to submit reason.");
    } else {
      Log.Error("❌ OK button not found or not enabled.");
    }

  } catch (error) {
    Log.Error("❌ Error while submitting audit trail reason: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Function:      handleCustomMessageBox
// Description:   Prints message and clicks OK or YES button if present and labeled correctly
// =====================================================================
function handleCustomMessageBox() {
  Log.AppendFolder("handleCustomMessageBox - Custom Message Dialog");

  try {
    let dialog = Aliases.ServerMgmtTool.FindChild("Name", 'WinFormsObject("CustomMessageBox")', 100, true);
    if (!dialog.Exists) throw new Error("CustomMessageBox not found.");

    let messagePanel = dialog.FindChild("Name", 'WinFormsObject("m_panel4")', 100, true);
    if (!messagePanel.Exists) throw new Error("m_panel4 not found.");

    let messageText = messagePanel.FindChild("Name", 'WinFormsObject("m_txtboxMsg")', 100, true);
    if (messageText.Exists) {
      Log.Message("🗨️ Message shown: " + messageText.WndCaption);
    } else {
      Log.Warning("⚠️ Message text box not found.");
    }

    // Handle OK button under panel5
    let okPanel = messagePanel.FindChild("Name", 'WinFormsObject("m_panel5")', 100, true);
    let okButton = okPanel.Exists ? okPanel.FindChild("Name", 'WinFormsObject("m_button2")', 100, true) : null;

    // Handle YES button under panel6
    let yesPanel = messagePanel.FindChild("Name", 'WinFormsObject("m_panel6")', 100, true);
    let yesButton = yesPanel.Exists ? yesPanel.FindChild("Name", 'WinFormsObject("m_button3")', 100, true) : null;

    let clicked = false;

    // Check OK button
    if (okButton && okButton.Exists && okButton.Enabled) {
      let okText = aqString.ToLower(okButton.Text);
      if (okText === "ok") {
        okButton.ClickButton();
        Log.Message("✅ OK button clicked.");
        clicked = true;
      }
    }

    // Check YES button
    if (!clicked && yesButton && yesButton.Exists && yesButton.Enabled) {
      let yesText = aqString.ToLower(yesButton.Text);
      if (yesText === "yes") {
        yesButton.ClickButton();
        Log.Message("✅ YES button clicked.");
        clicked = true;
      }
    }

    if (!clicked) {
      Log.Warning("⚠️ No enabled button with expected caption (OK/YES) was clicked.");
    }
    return messageText.WndCaption
  } catch (error) {
    Log.Error("❌ Error handling CustomMessageBox: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}




// =====================================================================
// Function:      clickAddNewNetworkButton
// Description:   Locates and clicks the "Add New" button using FindChild.
// =====================================================================
function clickAddNewNetworkButton() {
  Log.AppendFolder("clickAddNewNetworkButton - Open Network Add Dialog");

  try {
    let mainForm = Aliases.ServerMgmtTool.ServerManagerMainForm;

    let mdiClient = mainForm.FindChild("Name", 'WinFormsObject("MdiClient")', 100, true);
    if (!mdiClient.Exists) throw new Error("MdiClient not found.");

    let displayForm = mdiClient.FindChild("Name", 'WinFormsObject("DisplayForm")', 100, true);
    if (!displayForm.Exists) throw new Error("DisplayForm not found.");

    let nwConfigPanel = displayForm.FindChild("Name", 'WinFormsObject("m_panNwConfigDisp")', 100, true);
    if (!nwConfigPanel.Exists) throw new Error("m_panNwConfigDisp not found.");

    let btnAddNew = nwConfigPanel.FindChild("Name", 'WinFormsObject("m_btnNew")', 100, true);
    if (btnAddNew.Exists && btnAddNew.Enabled) {
      btnAddNew.ClickButton();
      Log.Message("✅ 'Add New' button clicked.");
    } else {
      Log.Error("❌ 'Add New' button not found or not enabled.");
    }

  } catch (error) {
    Log.Error("❌ Error during 'Add New' button click: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Function:      clickNetworkListItemByName
// Description:   Searches network list by name and clicks matching item.
// =====================================================================
function clickNetworkListItemByName(networkName) {
  Log.AppendFolder("clickNetworkListItemByName - Select Matching Network");

  try {
    let mainForm = Aliases.ServerMgmtTool.ServerManagerMainForm;
    let mdiClient = mainForm.FindChild("Name", 'WinFormsObject("MdiClient")', 100, true);
    if (!mdiClient.Exists) throw new Error("MdiClient not found.");

    let displayForm = mdiClient.FindChild("Name", 'WinFormsObject("DisplayForm")', 100, true);
    if (!displayForm.Exists) throw new Error("DisplayForm not found.");

    let nwPanel = displayForm.FindChild("Name", 'WinFormsObject("m_panNwConfigDisp")', 100, true);
    if (!nwPanel.Exists) throw new Error("m_panNwConfigDisp not found.");

    let gpListSection = nwPanel.FindChild("Name", 'WinFormsObject("m_gpNwConfigDisp")', 100, true);
    if (!gpListSection.Exists) throw new Error("m_gpNwConfigDisp not found.");

    let listView = gpListSection.FindChild("Name", 'WinFormsObject("m_listView")', 100, true);
    if (!listView.Exists) throw new Error("m_listView not found.");

    let itemCount = listView.wItemCount;
    if (itemCount === 0) throw new Error("List view is empty.");

    let itemFound = false;

    for (let i = 0; i < itemCount; i++) {
      let currentName = listView.wItem(i, 0); // 0th column is Network Name
      if (currentName === networkName) {
        listView.ClickItem(i);
        Log.Message("✅ Clicked network item: " + networkName);
        itemFound = true;
        break;
      }
    }

    if (!itemFound) {
      Log.Warning("⚠️ Network name '" + networkName + "' not found in list.");
    }

  } catch (error) {
    Log.Error("❌ Failed to select network item: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Function:      clickDeleteNetworkButton
// Description:   Locates and clicks the "Delete" button using FindChild.
// =====================================================================
function clickDeleteNetworkButton() {
  Log.AppendFolder("clickDeleteNetworkButton - Trigger Network Deletion");

  try {
    let mainForm = Aliases.ServerMgmtTool.ServerManagerMainForm;

    let mdiClient = mainForm.FindChild("Name", 'WinFormsObject("MdiClient")', 100, true);
    if (!mdiClient.Exists) throw new Error("MdiClient not found.");

    let displayForm = mdiClient.FindChild("Name", 'WinFormsObject("DisplayForm")', 100, true);
    if (!displayForm.Exists) throw new Error("DisplayForm not found.");

    let nwPanel = displayForm.FindChild("Name", 'WinFormsObject("m_panNwConfigDisp")', 100, true);
    if (!nwPanel.Exists) throw new Error("m_panNwConfigDisp not found.");

    let btnDelete = nwPanel.FindChild("Name", 'WinFormsObject("m_btnDelete")', 100, true);
    if (btnDelete.Exists && btnDelete.Enabled) {
      btnDelete.ClickButton();
      Log.Message("✅ 'Delete' button clicked.");
    } else {
      Log.Error("❌ 'Delete' button not found or not enabled.");
    }

  } catch (error) {
    Log.Error("❌ Failed to click 'Delete' button: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}




// =====================================================================
// Function:      toggleServerStartStop
// Description:   Starts or stops the server and waits until state changes
// =====================================================================
function toggleServerStartStop(action, timeoutMs) {
  Log.AppendFolder("toggleServerStartStop - Server Control");

  try {
    let mainForm = Aliases.ServerMgmtTool.ServerManagerMainForm;
    let controlGroup = mainForm.FindChild("Name", 'WinFormsObject("m_gbGroupBox1")', 100, true);
    if (!controlGroup.Exists) throw new Error("Server Control panel not found.");

    let statusLabel = controlGroup.FindChild("Name", 'WinFormsObject("m_lblServerControl")', 100, true);
    let startStopBtn = controlGroup.FindChild("Name", 'WinFormsObject("m_btnStartStop")', 100, true);
    if (!statusLabel.Exists || !startStopBtn.Exists) throw new Error("Controls not found.");

    let statusText = aqString.Trim(statusLabel.WndCaption);
    let actionLower = aqString.ToLower(action);
    let timeout = timeoutMs || 20000; // default to 10 seconds

    if (actionLower === "stop") {
      if (statusText === "Server is currently STARTED") {
        startStopBtn.ClickButton();
        Log.Message("🛑 Clicked to STOP the server...");
        submitAuditTrailReason(actionLower)
        handleCustomMessageBox()
        let success = statusLabel.WaitProperty("WndCaption", "Server is currently STOPPED", timeout);
        if (success) {
          Log.Checkpoint("✅ Server successfully stopped.");
        } else {
          Log.Warning("⏳ Timeout waiting for server to stop.");
        }
      } else {
        Log.Message("✅ Server already stopped.");
      }

    } else if (actionLower === "start") {
      if (statusText === "Server is currently STOPPED") {
        startStopBtn.ClickButton();
        Log.Message("🚀 Clicked to START the server...");
        submitAuditTrailReason(actionLower)
        handleCustomMessageBox()
        let success = statusLabel.WaitProperty("WndCaption", "Server is currently STARTED", timeout);
        if (success) {
          Log.Checkpoint("✅ Server successfully started.");
        } else {
          Log.Warning("⏳ Timeout waiting for server to start.");
        }
      } else {
        Log.Message("✅ Server already running.");
      }

    } else {
      Log.Warning("⚠️ Invalid action: " + action);
    }
    
  } catch (error) {
    Log.Error("❌ Error in toggleServerStartStop: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}



function updateLicense(licensePath) {
  Log.AppendFolder("updateLicense");

  try {
    let mainForm = Aliases.ServerMgmtTool.ServerManagerMainForm;

    let mdiClient = mainForm.FindChild("Name", 'WinFormsObject("MdiClient")', 100, true);
    let licenseForm = mdiClient.FindChild("Name", 'WinFormsObject("LicenseForm")', 100, true);
    let panLicensingInfo = licenseForm.FindChild("Name", 'WinFormsObject("m_panLiceningInfo")', 100, true);
    let gpUpgradeLicense = panLicensingInfo.FindChild("Name", 'WinFormsObject("m_gpUpgradeLicense")', 100, true);
    let browseBtn = gpUpgradeLicense.FindChild("Name", 'WinFormsObject("m_btnBrowse")', 100, true);

    if (!browseBtn.Exists || !browseBtn.Enabled) throw new Error("Browse button not available.");
    browseBtn.ClickButton();

    // Message box check
    let dialog = Aliases.ServerMgmtTool.FindChild("Name", 'WinFormsObject("CustomMessageBox")', 100, true);
    if (dialog.Exists) {
      let panel4 = dialog.FindChild("Name", 'WinFormsObject("m_panel4")', 100, true);
      let msgText = panel4.FindChild("Name", 'WinFormsObject("m_txtboxMsg")', 100, true);

      if (msgText.Exists && aqString.ToLower(msgText.WndCaption).includes("stop")) {
        let panel5 = panel4.FindChild("Name", 'WinFormsObject("m_panel5")', 100, true);
        let okBtn = panel5.FindChild("Name", 'WinFormsObject("m_button2")', 100, true);
        if (okBtn.Exists && okBtn.Enabled) okBtn.ClickButton();

        toggleServerStartStop("stop");

        if (!browseBtn.Exists || !browseBtn.Enabled) throw new Error("Browse button not available after stop.");
        browseBtn.ClickButton();
      }
    }

    // License File Dialog
    let fileDialog = Aliases.ServerMgmtTool.Window("#32770", "Select a License File", 1);
    let comboEx = fileDialog.FindChild("WndClass", "ComboBoxEx32", 100, true);
    let comboBox = comboEx.FindChild("WndClass", "ComboBox", 100, true);
    let editBox = comboBox.FindChild("WndClass", "Edit", 100, true);
    if (!editBox.Exists) throw new Error("Edit box not found.");
    editBox.SetText(licensePath);

    let openBtn = fileDialog.FindChild("WndCaption", "&Open", 100, true);
    if (!openBtn.Exists || !openBtn.Enabled) throw new Error("Open button not found.");
    openBtn.ClickButton();

    submitAuditTrailReason("adding license");

    handleCustomMessageBox();
    handleCustomMessageBox();
    handleCustomMessageBox();

    Log.Checkpoint("✅ License upgrade completed.");
  } catch (error) {
    Log.Error("❌ updateLicense error: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

function test(){
  clickMainPanelButton("licensing")
}


// =====================================================================
// Function:      clickMainPanelButton
// Description:   Clicks specific button in FlowLayoutPanel based on param
// =====================================================================
function clickMainPanelButton(buttonType) {
  Log.AppendFolder("clickMainPanelButton - Trigger Feature by Param");

  try {
    let mainForm = Aliases.ServerMgmtTool.ServerManagerMainForm;
    let flowPanel = mainForm.FindChild("Name", 'WinFormsObject("FlowLayoutPanelForButtons")', 100, true);
    if (!flowPanel.Exists) throw new Error("FlowLayoutPanelForButtons not found.");

    let buttonMap = {
      network: 'WinFormsObject("m_btnNetworkConfig")',
      licensing: 'WinFormsObject("m_btnLicening")',
      imports: 'WinFormsObject("m_btnImportResx")',
      certificate: 'WinFormsObject("m_btnCertificate")'
    };

    let key = aqString.ToLower(buttonType);
    if (!buttonMap[key]) {
      Log.Warning("⚠️ Unknown buttonType: " + buttonType);
      return;
    }

    let button = flowPanel.FindChild("Name", buttonMap[key], 100, true);
    if (button.Exists && button.Enabled) {
      button.ClickButton();
      Log.Message("✅ Clicked button: " + buttonType);
    } else {
      Log.Error("❌ Button '" + buttonType + "' not found or not enabled.");
    }
    
    

  } catch (error) {
    Log.Error("❌ Error clicking panel button: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

