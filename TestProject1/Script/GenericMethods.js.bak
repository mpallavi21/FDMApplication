
// =====================================================================
// Author:        Bharath
// Function:      handleFdmConfigurationPopup
// Description:   Validates FDM Configuration popup, prints its caption, and clicks OK
// Created On:    17-July-2025
// Modified On:   
// =====================================================================
function handleFdmConfigurationPopup() {
  Log.AppendFolder("handleFdmConfigurationPopup");

  try {
    let popup = Aliases.HCMClient.dlgFDMConfiguration;

    if (!popup.Exists) {
      Log.Message("⚠️ dlgFDMConfiguration popup not present.");
      return;
    }

    // Read and log the window caption
    let captionObject = popup.Window("Static", "*", 1);
    if (captionObject.Exists) {
      let captionText = aqString.Trim(captionObject.WndCaption);
      Log.Message("📝 Popup Caption: " + captionText);
    } else {
      Log.Warning("⚠️ Caption object not found.");
    }

    // Click the OK button
    let okButton = popup.btnOK;
    if (okButton.Exists && okButton.Enabled) {
      okButton.ClickButton();
      Log.Checkpoint("✅ OK button clicked on FDM Configuration popup.");
    }

  } catch (error) {
    Log.Error("❌ Failed to handle FDM Configuration popup: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Function:      selectComboBoxItemByName
// Description:   Selects an item in a combo box by name
// =====================================================================
function selectComboBoxItemByName(comboBoxObj, itemName) {
  if (comboBoxObj.Exists) {
    comboBoxObj.ClickItem(itemName);
    Log.Message("✅ Selected '" + itemName + "' in combo box.");
  } else {
    Log.Error("❌ Combo box not found for selecting: " + itemName);
  }
}