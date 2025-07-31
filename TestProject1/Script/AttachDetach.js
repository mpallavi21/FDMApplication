//USEUNIT AttachDetachPages
//USEUNIT menubar

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


// =====================================================================
// Author:        Bharath
// Function:      AttachDetachSystemDocument
// Description:   Automates the process of attaching and detaching a system-level
//                document via menu navigation, file upload, and confirmation steps.
// Created On:    21-Jul-2025
// Modified On:   21-Jul-2025
// =====================================================================

function AttachDetachSystemDocument() {
  Log.AppendFolder("AttachDetachSystemDocument - System-Level Document Flow");

  try {
    // Step 1: Navigate via menu and select system document
    clickOnSystemAttachDocument()
    Log.Message("Navigated to system document attachment workflow.");

    // Step 2: Upload document
    uploadPackageFile(Project.Path + "Stores\\Files", "0906.fm8");
    Log.Message("Uploaded system document: 0906.fm8");

    // Step 3: Confirm attachment
    clickOnConfirmFDMButton();
    Log.Message("Confirmed attachment in FDM dialog.");
    
    
    // Step 4: Detach system document
    DetachSystemDocument();
    Log.Message("Initiated detachment of system document.");

  } catch (error) {
    Log.Error("Exception occurred in AttachDetachSystemDocument: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}



// =====================================================================
// Author:        Bharath
// Function:      AttachDetachDeviceDocumentation
// Description:   Attaches a document to a device via context menu flow,
//                confirms the action, then initiates detachment and confirms.
// Created On:    21-Jul-2025
// Modified On:   21-Jul-2025
// =====================================================================

function AttachDetachDeviceDocumentation() {
  Log.AppendFolder("AttachDetachDeviceDocumentation - Document Attach/Detach Flow");

  try {
    // Step 1: Attach document
    clickOnDeviceAttachDocument();

    // Step 2: Upload package file
    uploadPackageFile(Project.Path + "Stores\\Files", "0906.fm8");
    Log.Message("Uploaded document: 0906.fm8");

    // Step 3: Confirm attachment
    clickOnConfirmFDMButton();
    Log.Message("Confirmed attachment in FDM dialog.");

    // Step 4: Detach document
    clickOnDeviceDetachDocument();

    // Step 5: Handle resource dialog for detachment.
    Delay(1000)
    DetachDocumentFromResourceDlg();

    // Step 6: Confirm detachment
    clickOnConfirmFDMButton();
    Log.Message("Confirmed detachment in FDM dialog.");

  } catch (e) {
    Log.Error("Exception occurred during attach/detach process: " + e.message);
  } finally {
    Log.PopLogFolder();
  }
}





