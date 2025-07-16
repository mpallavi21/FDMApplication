let HCMClient = Aliases.HCMClient;
let mainMenu = HCMClient.ClientMainWindow.mainMenu

// =====================================================================
// Author:        Bharath
// Function:      openFDMToolBarSettings
// Description:   Opens the FDM toolbar Settings menu using OCR clicks
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function openFDMToolBarSettings() {
  Log.AppendFolder("openFDMToolBarSettings - Opens the FDM toolbar Settings menu using OCR clicks")

  try {
    OCR.Recognize(mainMenu).BlockByText("FDM").Click();
    Log.Message("Clicked on 'FDM' menu item.");
    OCR.Recognize(HCMClient.DropDownForm.SubSmartControl).BlockByText("Settings").Click();
    Log.Message("Clicked on 'Settings' option.");
  } catch (error) {
    Log.Error("Failed to open FDM toolbar settings.", error);
  } finally{
    Log.PopLogFolder()
  }
}

// =====================================================================
// Author:        Bharath
// Function:      closeFDMSettings
// Description:   Closes the FDM Settings form
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function closeFDMSettings() {
  Log.AppendFolder("closeFDMSettings - Closes the FDM Settings form")
  try {
    HCMClient.SettingsForm.Close();
    Log.Message("Settings Form closed successfully.");
  } catch (error) {
    Log.Error("Failed to close FDM Settings.", error);
  } finally {
    Log.PopLogFolder()
  }
}

// =====================================================================
// Author:        Bharath
// Function:      cancelFDMSettings
// Description:   Clicks the Cancel button in the FDM Settings form
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function cancelFDMSettings() {
  
  Log.AppendFolder("cancelFDMSettings - Clicks the Cancel button in the FDM Settings form")

  try {
    let HCMClient = Aliases.HCMClient;
    let CancelButton = HCMClient.SettingsForm.FindChild("Name", `WinFormsObject("buttonCancel")`, 50, true);

    if (CancelButton && CancelButton.Visible) {
      CancelButton.Click();
      Log.Message("Cancel button clicked successfully.");
    } else {
      Log.Warning("Cancel button is not visible or could not be found.");
    }
  } catch (error) {
    Log.Error("Error occurred while attempting to click Cancel button.", error);
  } finally {
    Log.PopLogFolder()
  }
}


// =====================================================================
// Author:        Bharath
// Function:      okFDMSettings
// Description:   Clicks the OK button in the FDM Settings form
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function okFDMSettings() {
  
  Log.AppendFolder("okFDMSettings - Clicks the OK button in the FDM Settings form")

  try {
    let HCMClient = Aliases.HCMClient;
    let ApplyButton = HCMClient.SettingsForm.FindChild("Name", `WinFormsObject("buttonOK")`, 50, true);

    if (ApplyButton && ApplyButton.Visible) {
      ApplyButton.Click();
      Log.Message("OK button clicked successfully.");
    } else {
      Log.Error("OK button is not visible or could not be found.");
    }
  } catch (error) {
    Log.Error("Error occurred while attempting to click the OK button.", error);
  } finally{
    Log.PopLogFolder()
  }
}

// =====================================================================
// Author:        Bharath
// Function:      applyFDMSettings
// Description:   Attempts to click the Apply button in the FDM Settings form
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function applyFDMSettings() {
  Log.AppendFolder("applyFDMSettings - Attempts to click the Apply button in the FDM Settings form")

  try {
    let HCMClient = Aliases.HCMClient;
    let ApplyButton = HCMClient.SettingsForm.FindChild("Name", `WinFormsObject("buttonApply")`, 50, true);

    if (ApplyButton && ApplyButton.Visible) {
      ApplyButton.Click();
      Log.Message("Apply button clicked successfully.");
    } else {
      Log.Error("Apply button is not visible or could not be found.");
    }
  } catch (error) {
    Log.Error("Error occurred while attempting to click the Apply button.", error);
  } finally{
    Log.PopLogFolder()
  }
}
