

// =====================================================================
// Author:        Bharath
// Function:      clickOnPlantAreaView
// Description:   Navigates to 'Plant Area View' via the 'View' menu and verifies the view is loaded.
// Created On:    23-June-2025
// Modified On:   
// =====================================================================
function clickOnPlantAreaView() {
  try {
    let HCMClient = Aliases.HCMClient;

    // Navigate to View > Plant Area View
    OCR.Recognize(HCMClient.ClientMainWindow.mainMenu).BlockByText("View").Click();
    OCR.Recognize(HCMClient.DropDownForm.SubSmartControl).BlockByText("Plant Area View").Click();
    Log.Message("Clicked 'View > Plant Area View'.");

    // Wait until the shell title matches the expected view
    HCMClient.PlantAreaViewWindow.WaitProperty("WndCaption", "Plant Area View", 20000)
    let shellWindow = HCMClient.PlantAreaViewWindow.Shell;
    shellWindow.WaitProperty("WPFControlText", "Plant Area View", 20000);
    aqObject.CheckProperty(shellWindow, "WPFControlText", cmpEqual, "Plant Area View");
    HCMClient.HwndSource_ProgressView.ProgressView.WaitProperty("Exists",false,20000)
    Log.Message("'Plant Area View' loaded successfully.");

    
  } catch (error) {
    Log.Error("Failed to navigate to 'Plant Area View': " + error.message);
  }
}

// =====================================================================
// Author:        Bharath
// Function:      closePlantAreaView
// Description:   Waits for the 'Plant Area View' window's controls to be enabled 
//                and simulates a click to close the view.
// Created On:    23-June-2025
// Modified On:   
// =====================================================================
function closePlantAreaView() {
  try {
    let HCMClient = Aliases.HCMClient;
    HCMClient.PlantAreaViewWindow.WaitProperty("Exists", true, 20000)

    let shellWindow = HCMClient.PlantAreaViewWindow.Shell;

    // Wait for the close control to be enabled
    if (shellWindow.WindowButtonCommands.WaitProperty("Enabled", true, 20000)) {
      shellWindow.WindowButtonCommands.Click(117, 27); // Coordinates for the 'X' button
      Log.Message("Closed 'Plant Area View' successfully.");
    } else {
      Log.Error("'WindowButtonCommands' not enabled within timeout.");
    }
  } catch (error) {
    Log.Error("Failed to close 'Plant Area View': " + error.message);
  }
}



// =====================================================================
// Author:        Bharath
// Function:      clickOnAlertMonitoringDashboard
// Description:   Navigates to the 'Alert Monitoring Dashboard' via the 'View' menu
//                and confirms that the 'Alert Monitor' window is loaded.
// Created On:    23-June-2025
// Modified On:   
// =====================================================================
function clickOnAlertMonitoringDashboard() {
  try {
    let HCMClient = Aliases.HCMClient;

    // Navigate: View > Alert Monitoring Dashboard
    OCR.Recognize(HCMClient.ClientMainWindow.mainMenu).BlockByText("View").Click();
    OCR.Recognize(HCMClient.DropDownForm.SubSmartControl).BlockByText("Alert Monitoring Dashboard").Click();
    Log.Message("Clicked 'View > Alert Monitoring Dashboard'.");

    // Wait for the Alert Monitor shell to appear
    HCMClient.AlertMonitorWindow.WaitProperty("Exists", true, 20000);
    let shell = HCMClient.AlertMonitorWindow.Shell;
    shell.WaitProperty("WPFControlText", "Alert Monitor", 20000);
    shell.Activate()
    shell.WaitProperty("WPFControlText", "Alert Monitor", 20000);
    aqObject.CheckProperty(shell, "WPFControlText", cmpEqual, "Alert Monitor");
    Log.Message("'Alert Monitor' view loaded successfully.");

    

  } catch (error) {
    Log.Error("Failed to open 'Alert Monitoring Dashboard': " + error.message);
  }
}


// =====================================================================
// Author:        Bharath
// Function:      closeAlertMonitorView
// Description:   Closes the 'Alert Monitor' view by interacting with its shell window.
// Created On:    23-June-2025
// Modified On:   
// =====================================================================
function closeAlertMonitorView() {
  try {
    Log.AppendFolder("closeAlertMonitorView - Closes the 'Alert Monitor' view by interacting with its shell window.")
    let HCMClient = Aliases.HCMClient;
    HCMClient.AlertMonitorWindow.WaitProperty("Exists", true, 20000);
    let shell = HCMClient.AlertMonitorWindow.Shell;
    if (shell.WindowButtonCommands.WaitProperty("Enabled", true, 20000)) {
      let x = shell.WindowButtonCommands.Width - 15; // Approximate X for the ❌ button
      let y = 10;                     // Approximate Y for the ❌ button
      shell.WindowButtonCommands.Click(x, y);
      Log.Message("'Alert Monitor' view closed successfully.");
    } else {
      Log.Warning("'Alert Monitor' window controls were not enabled in time.");
    }
  } catch (error) {
    Log.Error("Failed to close 'Alert Monitor' view: " + error.message);
  } finally {
    Log.PopLogFolder()
  }
}



function Test1()
{
  Aliases.HCMClient.AlertMonitorWindow.Shell.WindowButtonCommands.Click(154, 19);
}