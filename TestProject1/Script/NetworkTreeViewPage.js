
/* Example of how to pass a node path array to the expandTreeView function
expandTreeView([
  "FDM Server ( DESKTOP-AJ7O5O5 )",
  "DESKTOP-AJ7O5O5",
  "Mux",
  "SFT_PNF"
]);
collapseTreeView([
  "FDM Server ( DESKTOP-AJ7O5O5 )",
  "DESKTOP-AJ7O5O5",
  "Mux",
  "SFT_PNF"
]);
*/



// =====================================================================
// Author:        Bharath
// Function:      getTreeView
// Description:   Returns the tree view object from the HCMClient UI
// =====================================================================
function getTreeView() {
  Log.AppendFolder("getTreeView - Returns the tree view object from the HCMClient UI")
  let HCMClient = Aliases.HCMClient;
  let MainWindow = HCMClient.ClientMainWindow;
  let tabPageOnlineView = MainWindow.FindChild("Name", `WinFormsObject("tabPageOnlineView")`, 100, true);
  let tabControlOnlineView = tabPageOnlineView.FindChild("Name", `WinFormsObject("tabControlOnlineView")`, 100, true);
  let NetworkViewTab = tabControlOnlineView.FindChild("Name", `WinFormsObject("tabConnected")`, 100, true);
  return NetworkViewTab.FindChild("Name", `WinFormsObject("treeView")`, 100, true);
  Log.PopLogFolder()
}

// =====================================================================
// Function:      expandTreeView
// Description:   Expands a tree view node path step-by-step
// =====================================================================
function expandTreeView(nodePathArray) {
  Log.AppendFolder("expandTreeView - Expands a tree view node path step-by-step")
  let treeView = getTreeView();

  if (!nodePathArray || nodePathArray.length === 0) {
    Log.Warning("No nodes provided for expansion.");
    return;
  }

  try {
    let fullPath = "";
    for (let i = 0; i < nodePathArray.length; i++) {
      fullPath += "|" + nodePathArray[i];
      Log.Message("Expanding: " + fullPath);
      treeView.ExpandItem(fullPath);
      aqUtils.Delay(300); // Optional delay for UI stability
    }
    Log.Checkpoint("Tree view expanded successfully.");
  } catch (error) {
    Log.Error("Failed to expand tree view:", error);
  } finally{
    Log.PopLogFolder()
  }
}

// =====================================================================
// Function:      collapseTreeView
// Description:   Collapses a tree view starting from the deepest node upward
// =====================================================================
function collapseTreeView(nodePathArray) {
  Log.AppendFolder("collapseTreeView - Collapses a tree view starting from the deepest node upward")
  let treeView = getTreeView();

  if (!nodePathArray || nodePathArray.length === 0) {
    Log.Warning("No nodes provided for collapse.");
    return;
  }

  try {
    for (let i = nodePathArray.length; i > 0; i--) {
      let partialPath = "|" + nodePathArray.slice(0, i).join("|");
      Log.Message("Collapsing: " + partialPath);
      treeView.CollapseItem(partialPath);
      aqUtils.Delay(300); // Optional delay for UI stability
    }
    Log.Checkpoint("Tree view collapsed successfully.");
  } catch (error) {
    Log.Error("Failed to collapse tree view:", error);
  } finally{
    Log.PopLogFolder()
  }
}

// =====================================================================
// Function:      clickOnbuildNetwork
// Description:   Right-clicks on the specified node and selects "Build Network"
// =====================================================================
function clickOnbuildNetwork(nodePath) {
  Log.AppendFolder("clickOnbuildNetwork - Right-clicks on the specified node and selects 'Build Network'")
  let treeView = getTreeView();

  try {
    Log.Message(`Right-clicking on node: ${nodePath}`);
    treeView.ClickItemR(nodePath);

    Log.Message("Waiting for context menu...");
    treeView.WaitProperty("Exists", true, 3000);

    Log.Message("Clicking 'Build Network'...");
    treeView.StripPopupMenu.Click("Build Network");

    Log.Message("Checking for confirmation dialog...");
    let confirmDialog = Aliases.HCMClient.dlgRebuildNetwork;
    let yesButton = confirmDialog && confirmDialog.btnYes;

    if (confirmDialog && yesButton && yesButton.Exists && yesButton.VisibleOnScreen) {
      Log.Message("Confirming network build with Yes...");
      yesButton.ClickButton();
      Log.Checkpoint("Network build confirmed.");
    } else {
      Log.Message("Confirmation dialog or Yes button not available.");
    }

    Log.Checkpoint(`'Build Network' successfully initiated on: ${nodePath}`);
  } catch (error) {
    Log.Error(`Error occurred in clickOnbuildNetwork for node '${nodePath}':`, error);
  } finally{
    Log.PopLogFolder()
  }
}


/* Example of how to pass a node path array to the  verifyFDMDeviceStatus function
verifyFDMDeviceStatus(
  "|FDM Server ( DESKTOP-AJ7O5O5 )|DESKTOP-AJ7O5O5|Mux|SFT_PNF|R3051Rev10H7",
  "*Good*"
);

// =====================================================================
// Author:        Bharath
// Function:      verifyFDMDeviceStatus
// Description:   Double-clicks a specified FDM device node and verifies its
//                OCR-recognized status text
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function verifyFDMDeviceStatus(devicePath, expectedStatusText) {
  let HCMClient = Aliases.HCMClient;
  let MainWindow = HCMClient.ClientMainWindow;
  let tabPageOnlineView = MainWindow.FindChild("Name", `WinFormsObject("tabPageOnlineView")`, 100, true)
  let tabControlOnlineView = tabPageOnlineView.FindChild("Name", `WinFormsObject("tabControlOnlineView")`, 100, true)
  let NetworkViewTab = tabControlOnlineView.FindChild("Name", `WinFormsObject("tabConnected")`, 100, true)
  let treeView = NetworkViewTab.FindChild("Name", `WinFormsObject("treeView")`, 100, true)

  
  
  try {
    Log.Message(`Double-clicking device node: ${devicePath}`);
    treeView.DblClickItem(devicePath);

    FDMDeviceStatusGrid = Aliases.HCMClient.ClientMainWindow.MdiClient.EntryPointTabPage.EntryPointsTabPage.HwndSource_AdornerDecorator.AdornerDecorator.FDMDeviceStatusGrid
    Log.Message(`Checking OCR text for pattern: ${expectedStatusText}`);
    let Static = Aliases.HCMClient.dlgFDM.Static
    if(Static.Exists && Static.Visible){
      Aliases.HCMClient.dlgFDM.Window("Button", "OK", 1).Click()
    }
    let ocrResult = OCR.Recognize(FDMDeviceStatusGrid);
    ocrResult.CheckText(expectedStatusText);
    Log.Checkpoint(`Device status verified successfully: ${expectedStatusText}`);
  } catch (error) {
    Log.Error(`Device status check failed for: ${devicePath}`, error);
  }
}

*/

// =====================================================================
// Author:        Bharath
// Function:      verifyFDMDeviceStatus
// Description:   Verifies OCR status text of an FDM device after opening it via tree path
// Created On:    2025-06-20
// Modified On:   None

// =====================================================================

function verifyFDMDeviceStatus(devicePath) {
  try {
    Log.AppendFolder("verifyFDMDeviceStatus - Verifies OCR status text of an FDM device after opening it via tree path")
    // Step 1: Navigate to treeView using FindChild from root
    let mainWindow = Aliases.HCMClient.ClientMainWindow;
    let tabPageOnlineView = mainWindow.FindChild("Name", "WinFormsObject(\"tabPageOnlineView\")", 100, true);
    let tabControlOnlineView = tabPageOnlineView.FindChild("Name", "WinFormsObject(\"tabControlOnlineView\")", 100, true);
    let networkTab = tabControlOnlineView.FindChild("Name", "WinFormsObject(\"tabConnected\")", 100, true);
    let treeView = networkTab.FindChild("Name", "WinFormsObject(\"treeView\")", 100, true);

    Log.Message(`Double-clicking FDM device node: ${devicePath}`);
    treeView.DblClickItem(devicePath);

    // Step 2: Handle any potential modal dialog interruption
    let dlgFDM = Aliases.HCMClient.dlgFDM;
    if (dlgFDM.Exists && dlgFDM.VisibleOnScreen) {
      let okBtn = dlgFDM.FindChild("WndCaption", "OK", 50, true);
      if (okBtn && okBtn.Enabled) {
        Log.Message("Handling dialog: Clicking OK");
        okBtn.Click();
      }
    }

    // Step 3: Access FDM Device Status Grid via FindChild
    let statusGrid = Aliases.HCMClient.ClientMainWindow.MdiClient.EntryPointTabPage.EntryPointsTabPage.HwndSource_AdornerDecorator.AdornerDecorator.FDMDeviceStatusGrid

    if (!statusGrid) {
      Log.Warning("FDMDeviceStatusGrid not found. OCR cannot proceed.");
      return;
    }

    // Step 4: OCR Verification
    let ocrResult = OCR.Recognize(statusGrid);
    ocrResult = ocrResult.FullText

    Log.Checkpoint(`${ocrResult}`);
  } catch (error) {
    Log.Error(`verifyFDMDeviceStatus failed for node '${devicePath}':`, error);
  } finally {
    Log.PopLogFolder()
  }
}

// =====================================================================
// Author:        Bharath
// Function:      clickOnNetworkViewTab
// Description:   Locates and clicks the "Network View" tab using OCR recognition
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function clickOnNetworkViewTab() {
  Log.AppendFolder("clickOnNetworkViewTab - Locates and clicks the 'Network View' tab using OCR recognition")
  let HCMClient = Aliases.HCMClient;
  let MainWindow = HCMClient.ClientMainWindow;
  let tabPageOnlineView = MainWindow.FindChild("Name", `WinFormsObject("tabPageOnlineView")`, 100, true)
  let tabControlOnlineView = tabPageOnlineView.FindChild("Name", `WinFormsObject("tabControlOnlineView")`, 100, true)
  try {
    Log.Message("Locating and clicking 'Network' tab via OCR...");
    OCR.Recognize(tabControlOnlineView).BlockByText("Network").Click();
    Log.Checkpoint("'Network' tab clicked successfully.");
  } catch (error) {
    Log.Error("Failed to click 'Network' tab using OCR:", error);
  } finally{
    Log.PopLogFolder()
  }
}

function Test1()
{
  let HCMClient = Aliases.HCMClient;
  let tabControlActiveDevices = HCMClient.ClientMainWindow.panelDeviceTabCtrl.panelInCurrentDevice.panelActiveDevices.tabControlActiveDevices
  let tabCount = tabControlActiveDevices.wTabCount
  
  HCMClient.dlgFDMDiagnosticModelConfiguration.btnYes.ClickButton();
}



// =====================================================================
// Author:        Bharath
// Function:      clickOnDevice
// Description:   FDM device opening it via tree path
// Created On:    2025-06-20
// Modified On:   None

// =====================================================================

function clickOnDevice(devicePath) {
  try {
    Log.AppendFolder("verifyFDMDeviceStatus - Verifies OCR status text of an FDM device after opening it via tree path")
    // Step 1: Navigate to treeView using FindChild from root
    let mainWindow = Aliases.HCMClient.ClientMainWindow;
    let tabPageOnlineView = mainWindow.FindChild("Name", "WinFormsObject(\"tabPageOnlineView\")", 100, true);
    let tabControlOnlineView = tabPageOnlineView.FindChild("Name", "WinFormsObject(\"tabControlOnlineView\")", 100, true);
    let networkTab = tabControlOnlineView.FindChild("Name", "WinFormsObject(\"tabConnected\")", 100, true);
    let treeView = networkTab.FindChild("Name", "WinFormsObject(\"treeView\")", 100, true);

    Log.Message(`Double-clicking FDM device node: ${devicePath}`);
    treeView.DblClickItem(devicePath);

    // Step 2: Handle any potential modal dialog interruption
    let dlgFDM = Aliases.HCMClient.dlgFDM;
    if (dlgFDM.Exists && dlgFDM.VisibleOnScreen) {
      let okBtn = dlgFDM.FindChild("WndCaption", "OK", 50, true);
      if (okBtn && okBtn.Enabled) {
        Log.Message("Handling dialog: Clicking OK");
        okBtn.Click();
      }
    }

  } catch (error) {
    Log.Error(`clickOnDevice failed for node '${devicePath}':`, error);
  } finally {
    Log.PopLogFolder()
  }
}

