//USEUNIT ClientLoginPage
//USEUNIT ServerPage


// =====================================================================
// Author:        Bharath
// Function:      FDMGR3909
// Description:   Verify that login client is successful
// Created On:    2025-06-19
// Modified On:   None
// =====================================================================
function FDMGR3909() {
  try {
    Log.AppendFolder("FDMGR3909 - Verify that login client is successful")
    Log.Message("Launching FDM Client...");
    launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);

    Log.Message("Terminating HCMClient...");
 //   TestedApps.HCMClient.Terminate();

    Log.Checkpoint("FDMGR430 executed successfully.");
  } catch (error) {
    Log.Error("Error occurred in FDMGR430: ", error);
  } finally {
    Log.PopLogFolder()
  }
}

