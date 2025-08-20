//USEUNIT LibraryPages
//USEUNIT ClientLoginPage

// =====================================================================
// Author:        Bharath
// Function:      FDMGR4779()
// Description:   Test case to validate add DD User interfacee
// Created On:    23-June-2025
// Modified On:   
// =====================================================================
function FDMGR4779() {
  try {
    Log.AppendFolder("FDMGR4779 - Test case to validate add DD User interface")
    // Launch the FDM Client with credentials
    //launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);

    // Navigate and perform DD Package addition
    openManageDDPackagesSection();
    clickAddDDPackageButton();
    selectDDFileTypeFromDropdown("*.fm8");
    uploadDDPackageFile(Project.Path + "Stores\\Files", "0906");
    clickAddToLibraryButton();

    // Close relevant popups and exit
    clickAdd_DDPackagePopUpCloseButton();
    clickManage_DDPackagePopUpCloseButton();

    // Terminate the client gracefully
  //  TestedApps.HCMClient.Terminate();

    Log.Message("Test 'addDDPackageAndExit' completed successfully.");
  } catch (error) {
    Log.Error("Test 'addDDPackageAndExit' failed: " + error.message);
    // Optional: Consider taking a screenshot here
  } finally{
    Log.PopLogFolder()
  }
}


// =====================================================================
// Author:        Bharath
// Function:      FDMGR4798
// Description:   Testcase to validate generic DD/package functionality
// Created On:    23-June-2025
// Modified On:   
// =====================================================================
function FDMGR4798() {
  try {
    Log.AppendFolder("FDMGR4798 - Testcase to validate generic DD/package functionality")
   // launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    openManageDDPackagesSection();
    selectProtocol("HART")
    selectManufacturer("Rosemount (26)");
    selectDeviceType("3051 (2606)");
    findDDAndClickDeleteRow("3051 (2606)","9","6")
    clickManage_DDPackagePopUpCloseButton();
    TestedApps.HCMClient.Terminate();
    Log.Message("Test 'deleteSpecificDDPackageAndExit' executed successfully.");
  } catch (error) {
    Log.Error("Test 'deleteSpecificDDPackageAndExit' failed: " + error.message);
  } finally{
    Log.PopLogFolder()
  }
}

// =====================================================================
// Author:        Bharath
// Function:      FDMGR4723()
// Description:   Test case to validate add FDIX file User interfacee
// Created On:    23-June-2025
// Modified On:   
// =====================================================================
function FDMGR4723() {
  try {
    Log.AppendFolder("FDMGR4723 - Test case to validate add FDIX file User interfacee")
    // Launch the FDM Client with credentials
    launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);

    // Navigate and perform DD Package addition
    openManageDDPackagesSection();
    clickAddDDPackageButton();
    selectDDFileTypeFromDropdown("*.fdix");
    uploadDDPackageFile(Project.Path + "Stores\\Files", "abb.tzidc.02.02.00.hart");
    clickAddToLibraryButton();

    // Close relevant popups and exit
    clickAdd_DDPackagePopUpCloseButton();
    clickManage_DDPackagePopUpCloseButton();

    // Terminate the client gracefully
    TestedApps.HCMClient.Terminate();

    Log.Message("Test 'addFDIXPackageAndExit' completed successfully.");
  } catch (error) {
    Log.Error("Test 'addFDIXPackageAndExit' failed: " + error.message);
    // Optional: Consider taking a screenshot here
  } finally{
    Log.PopLogFolder()
  }
}


// =====================================================================
// Author:        Bharath
// Function:      FDMGR4790
// Description:   Testcase to validate generic FDI/package functionality
// Created On:    23-June-2025
// Modified On:   
// =====================================================================
function FDMGR4790() {
  try {
    Log.AppendFolder("FDMGR4790 - Testcase to validate generic FDI/package functionality")
  //  launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    openManageDDPackagesSection();
    selectProtocol("HART")
    selectManufacturer("Rosemount (26)");
    selectDeviceType("3051 (2606)");
    findDDAndClickDeleteRow("3051 (2606)","9","6")
    clickManage_DDPackagePopUpCloseButton();
    TestedApps.HCMClient.Terminate();
    Log.Message("Test 'deleteSpecificFDIPackageAndExit' executed successfully.");
  } catch (error) {
    Log.Error("Test 'deleteSpecificFDIPackageAndExit' failed: " + error.message);
  } finally{
    Log.PopLogFolder()
  }
}



// =====================================================================
// Author:        Bharath
// Function:      AddDD()
// Description:  Add the DD file
// Created On:    23-June-2025
// Modified On:   
// =====================================================================
function AddDD() {
  try {
    Log.AppendFolder("FDMGR4779 - Test case to validate add DD User interface")
    // Launch the FDM Client with credentials
    //launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);

    // Navigate and perform DD Package addition
    openManageDDPackagesSection();
    clickAddDDPackageButton();
    selectDDFileTypeFromDropdown("*.fm8");
    uploadDDPackageFile(Project.Path + "Stores\\Files", "0906");
    clickAddToLibraryButton();

    // Close relevant popups and exit
    clickAdd_DDPackagePopUpCloseButton();
    clickManage_DDPackagePopUpCloseButton();

    // Terminate the client gracefully
  //  TestedApps.HCMClient.Terminate();

    Log.Message("Test 'addDDPackageAndExit' completed successfully.");
  } catch (error) {
    Log.Error("Test 'addDDPackageAndExit' failed: " + error.message);
    // Optional: Consider taking a screenshot here
  } finally{
    Log.PopLogFolder()
  }
}

// =====================================================================
// Author:        Bharath
// Function:      DeleteDD
// Description:   Deletes a DD package for the device "3051 (2606)" under HART protocol
//                by navigating the DD management section, selecting filters, deleting the entry,
//                and terminating the client application.
// Created On:    22-Jul-2025
// Modified On:   22-Jul-2025
// =====================================================================

function DeleteDD() {
  Log.AppendFolder("DeleteDD - Device Description Package Deletion");

  try {
    // Navigate to DD package section
    openManageDDPackagesSection();
    Log.Message("Opened Manage DD Packages section.");

    // Select filters for deletion
    selectProtocol("HART");
    Log.Message("Protocol selected: HART");

    selectManufacturer("Rosemount (26)");
    Log.Message("Manufacturer selected: Rosemount (26)");

    selectDeviceType("3051 (2606)");
    Log.Message("Device type selected: 3051 (2606)");

    // Delete the target DD package using revision numbers
    findDDAndClickDeleteRow("3051 (2606)", "9", "6");
    Log.Message("Requested DD deletion for 3051 (2606), Rev 9.6.");

    // Close DD Package popup and terminate the client
    clickManage_DDPackagePopUpCloseButton();
    Log.Message("Closed DD Package popup.");

//    TestedApps.HCMClient.Terminate();
//    Log.Message("HCM Client terminated.");

  } catch (error) {
    Log.Error("Exception in DeleteDD: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}



// =====================================================================
// Author:        Bharath
// Function:      UpdateDTMLibrary
// Description:   Navigates through the Library menu, updates DTM Library,
//                handles confirmation dialogs, and exits gracefully.
// Created On:    31-Jul-2025
// Modified On:   31-Jul-2025
// =====================================================================

function UpdateDTMLibrary() {
  let HCMClient = Aliases.HCMClient;
  Log.AppendFolder("navigateAndUpdateDTMLibrary");

  try {
    // Step 1: Click on 'Library' menu
    OCR.Recognize(HCMClient.ClientMainWindow.mainMenu).BlockByText("Library").Click();
    Log.Message("Clicked 'Library' menu");

    // Step 2: Select 'Manage DTM Library'
    OCR.Recognize(HCMClient.DropDownForm.SubSmartControl).BlockByText("Manage DTM Library").Click();
    Log.Message("Selected 'Manage DTM Library'");

    let manageDtmLibrary = HCMClient.ManageDtmLibrary;

    // Step 3: Click 'Update' button
    manageDtmLibrary.btnUpdate.Click();
    Log.Message("Clicked 'Update' button");

    // Step 4 & 5: Confirm dialog twice
    clickOnConfirmFDMButton();
    clickOnConfirmFDMButton();

    // Step 6: Cancel the dialog
    manageDtmLibrary.CancelBtn.Click();
    Log.Message("Clicked 'Cancel' button");
    
    manageDtmLibrary.CancelBtn.WaitProperty("Enabled",true,25000)
    manageDtmLibrary.CancelBtn.Click();
    
    // Step 7: Final confirm dialog
    clickOnConfirmFDMButton();

    Log.Checkpoint("DTM Library update workflow completed successfully.");

  } catch (error) {
    Log.Error("Error in navigateAndUpdateDTMLibrary: " + error.message);

  } finally {
    Log.PopLogFolder();
  }
 

}