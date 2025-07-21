



// =====================================================================
// Author:        Bharath
// Function:      navigateToOfflineDiagnostics
// Description:   Opens the 'Offline' tab and selects the '*Diag*' view from the sub-tab.
// Created On:    24-06-2025
// Modified On:   
// =====================================================================
function navigateToOfflineDiagnostics() {
  try {
    Log.AppendFolder("navigateToOfflineDiagnostics - Opens the 'Offline' tab and selects the '*Diag*' view from the sub-tab.")
    let tabControl = Aliases.HCMClient.ClientMainWindow.panelLeftPanMain.tabControlLeftPanMain;

    OCR.Recognize(tabControl).BlockByText("Offline", spNearestToCenter).Click();
    OCR.Recognize(tabControl.tabPageOfflineView.panelOfflineView.tabControlOfflineView)
      .BlockByText("*Diag*")
      .Click();

    Log.Message("Navigated to Offline Diagnostics tab successfully.");
  } catch (error) {
    Log.Error("Failed to navigate to Offline Diagnostics: " + error.message);
  } finally{
    Log.PopLogFolder()
  }
}


// =====================================================================
// Author:        Bharath
// Function:      createDiagnosticModel
// Description:   Right-clicks the specified node in the Fault Model tree 
//                and selects 'Create Diagnostic Model' from the context menu.
// Created On:    24-06-2025
// Modified On:   
// =====================================================================
function createDiagnosticModel(treePath) {
  try {
    Log.AppendFolder("createDiagnosticModel - Right-clicks the specified node in the Fault Model tree \n and selects 'Create Diagnostic Model' from the context menu.")
    let treeView = Aliases.HCMClient.ClientMainWindow.panelLeftPanMain
      .tabControlLeftPanMain.tabPageOfflineView.panelOfflineView
      .tabControlOfflineView.tabPageFaultModel.treeView;

    treeView.ClickItemR(treePath);
    Log.Message("Right-clicked on node: '" + treePath + "'");

    treeView.StripPopupMenu.Click(" Create Diagnostic Model");
    Log.Message("Selected 'Create Diagnostic Model' from the context menu.");
    let dlgFDMDiagnosticModelConfiguration = Aliases.HCMClient.dlgFDMConfiguration;
    if (dlgFDMDiagnosticModelConfiguration.btnOK.Exists) {
      dlgFDMDiagnosticModelConfiguration.btnOK.ClickButton();
      Log.Message("Clicked 'OK' on Diagnostic Model Configuration dialog.");
    }
    let labelDeviceTitle = Aliases.HCMClient.ClientMainWindow.MdiClient.RightPanBaseFrame.panelBase.panelFullTop.panelTitle.labelDeviceTitle
    labelDeviceTitle.WaitWFCObject("Diagnostic Model","WndCaption",5000)
  } catch (error) {
    Log.Error("Failed to create diagnostic model from '" + treePath + "': " + error.message);
  } finally {
    Log.PopLogFolder()
  }
}

function test(){
  ConfigureDiagnosticModel("Rosemount_38","Maintenance Required")
}

// =====================================================================
// Author:        Bharath
// Function:      ConfigureDiagnosticModel
// Description:   Selects manufacturer and diagnostic status, adds to summary,
//                saves configuration, and confirms dialogs.
// Created On:    18-Jul-2025
// Modified On:   18-Jul-2025
// =====================================================================

function ConfigureDiagnosticModel(manufacturer, diagnosticStatus) {
  Log.AppendFolder("ConfigureDiagnosticModel - Diagnostic Configuration Flow");

  try {
    let HCMClient = Aliases.HCMClient;
    let adornerDecorator = HCMClient.ClientMainWindow.MdiClient.RightPanBaseFrame.panelBase.panelForDerivedForms.ElementHost.HwndSource_AdornerDecorator.AdornerDecorator;

    // Select manufacturer from combo box
    let comboBox = adornerDecorator.ComboboxManufacturer;
    if (comboBox.Exists) {
      comboBox.Click(195, 16);
      comboBox.ClickItem(manufacturer);
      Log.Message("Selected manufacturer: " + manufacturer);
    } else {
      Log.Error("Manufacturer combo box not found.");
      return;
    }

    // Check the checkbox
    let checkBox = adornerDecorator.ListBox.CheckBox;
    if (checkBox.Exists) {
      checkBox.ClickButton(cbChecked);
      Log.Message("Checked the checkbox.");
    } else {
      Log.Error("Checkbox not found.");
      return;
    }

    // Select diagnostic status from data grid combo
    let dataGrid = adornerDecorator.ParamBits;
    if (dataGrid.Exists) {
      dataGrid.ClickCell(0, 0);
      dataGrid.ClickCell(0, 0);
      dataGrid.combo1.ClickItem(diagnosticStatus);
      Log.Message("Selected diagnostic status: " + diagnosticStatus);
    } else {
      Log.Error("Data grid not found.");
      return;
    }

    // Click Add to Summary and Save
    if (adornerDecorator.ButtonAddToSummary.Exists) {
      adornerDecorator.ButtonAddToSummary.ClickButton();
      Log.Message("Clicked 'Add to Summary'.");
    }

    if (adornerDecorator.ButtonSave.Exists) {
      adornerDecorator.ButtonSave.ClickButton();
      Log.Message("Clicked 'Save'.");
    }

    // Handle confirmation dialogs
    let dlgDiagnosticModel = HCMClient.dlgFDMConfiguration;
    if (dlgDiagnosticModel.btnYes.Exists) {
      dlgDiagnosticModel.btnYes.ClickButton();
      Log.Message("Confirmed 'Yes' on dialog.");
    }

    if (dlgDiagnosticModel.btnOK.Exists) {
      dlgDiagnosticModel.btnOK.ClickButton();
      Log.Message("Confirmed 'OK' on dialog.");
    }

  } catch (e) {
    Log.Error("Exception occurred: " + e.message);
  } finally {
    Log.PopLogFolder();
  }
}
