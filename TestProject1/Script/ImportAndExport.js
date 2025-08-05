//USEUNIT ImportAndExportPages
//USEUNIT GenericMethods

// =====================================================================
// Author:        Bharath
// Function:      ExportAndImportDeviceTags
// Description:   Performs export and import of Device Tags using static values.
// Created On:    01-Aug-2025
// Modified On:   01-Aug-2025
// =====================================================================

function ExportAndImportDeviceTags() {
  Log.AppendFolder("ExportAndImportDeviceTags");

  try {
    // === Export Section ===
    ClickItemImportAndExport();
    ClickExportDataButton();
    ClickItemInTabList("Device Tags");
    ClickNextIfEnabled();
    FilterDeviceTags();
    ClickNextIfEnabled();
    SelectAvailableDeviceTag("644");
    ClickNextIfEnabled();
    SelectFileFormat("xml");

    let filePath = GetFilePathFromTextbox();

    ClickNextIfEnabled();
    WaitForCompletion();
    ClickNextIfEnabled();
    ClickCancelButton(); // Finish Export
    CheckIfFileExists(filePath);

    // === Import Section ===
    ClickItemImportAndExport();
    ClickImportDataButton();
    ClickItemInTabList("Device Tags");
    ClickNextIfEnabled();
    SetSelectFilePath(filePath);
    ClickNextIfEnabled();
    WaitForCompletion();
    ClickNextIfEnabled();
    ClickCancelButton(); // Finish Import

  } catch (error) {
    Log.Error("ExportAndImportDeviceTags failed: " + error.message);

  } finally {
    Log.PopLogFolder();
  }
}



function ExportAndImportAuditTrail(){
  ClickItemImportAndExport();
    ClickExportDataButton();
    ClickItemInTabList("Audit Trail");
    ClickNextIfEnabled();
    FilterDeviceTags();
    ClickNextIfEnabled();
    ConfigureAuditTrailExport();
    ClickNextIfEnabled();
    SelectFileFormat("xml");

    let filePath = GetFilePathFromTextbox();
    ClickNextIfEnabled();
    WaitForCompletion();
    ClickNextIfEnabled();
    ClickCancelButton(); // Finish Export
    CheckIfFileExists(filePath);
    
    // === Import Section ===
    ClickItemImportAndExport();
    ClickImportDataButton();
    ClickItemInTabList("Audit Trail");
    ClickNextIfEnabled();
    SetSelectFilePath(filePath);
    ClickNextIfEnabled();
    WaitForCompletion();
    ClickNextIfEnabled();
    ClickCancelButton(); // Finish Import
}



