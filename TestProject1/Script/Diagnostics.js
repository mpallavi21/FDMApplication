//USEUNIT ClientLoginPage
//USEUNIT DiagnosticsPages
//USEUNIT CommonPageObjects



// =====================================================================
// Author:        Bharath
// Function:      FDMGR7504
// Description:   Testcase to Validate Daignostic model Tab in FDM View
// Created On:    24-06-2025
// Modified On:   
// =====================================================================
function FDMGR7504() {
  try {
    Log.AppendFolder("FDMGR7504 - Testcase to Validate Daignostic model Tab in FDM View")
   // launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);

    navigateToOfflineDiagnostics();

    //TestedApps.HCMClient.Terminate();
    Log.Message("Test 'FDMGR7504' executed successfully.");
  } catch (error) {
    Log.Error("Test 'FDMGR7504' encountered an error: " + error.message);
  } finally {
    Log.PopLogFolder()
  }
}



// =====================================================================
// Author:        Bharath
// Function:      FDMGR7505
// Description:   Testcase to Validate Create Diagnostic model
// Created On:    24-06-2025
// Modified On:   
// =====================================================================
function FDMGR7505() {
  try {
    Log.AppendFolder("FDMGR7505 - Testcase to Validate Create Diagnostic model")
  //  launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);

    navigateToOfflineDiagnostics();
    createDiagnosticModel("|HART");
    closeRightPanBaseFramePage();

   // TestedApps.HCMClient.Terminate();
    Log.Message("Test 'FDMGR7505' executed successfully.");
  } catch (error) {
    Log.Error("Test 'FDMGR7505' encountered an error: " + error.message);
  }
}
