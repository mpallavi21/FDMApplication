//USEUNIT AttachDetachPages

// =====================================================================
// Author:        Bharath
// Function:      AttachDetachApp
// Description:   Automates attaching an application package and then detaching it
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function AttachDetachApp() {
  try {
    Log.AppendFolder("AttachDetachApp - Attach and Detach Application Package");

    // Step 1: Click on the "Attach Application" button
    clickOnAttachApplication();

    // Step 2: Upload the application package file
    const packagePath = "C:\\Program Files (x86)\\Honeywell\\FDM\\ClientMachine\\Bin";
    const packageName = "HCMClient";
    uploadAppAttachPackageFile(packagePath, packageName);

    // Step 3: Detach the application
    DetachApplication();

    Log.Checkpoint("✅ AttachDetachApp passed: Application attached and detached successfully.");
  } catch (error) {
    Log.Error("❌ AttachDetachApp failed during attach/detach process:", error.message);
  } finally {
    Log.PopLogFolder();
  }
}
