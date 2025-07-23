
//USEUNIT SettingsPage
//USEUNIT ClientLoginPage


// =====================================================================
// Author:        Bharath
// Function:      FDMGR4044
// Description:   Verify that user can select FDM settings
// Created On:    2025-06-19
// Modified On:   None
// =====================================================================
function FDMGR4044()
{
 try {
   Log.AppendFolder("FDMGR4044 - Verify that user can select FDM settings")
 // launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
  openFDMToolBarSettings();
  closeFDMSettings();
 // TestedApps.HCMClient.Terminate();
  Log.Message("FDMGR4044 completed successfully.");
 } catch (error) {
    Log.Error(`FDMGR4044 encountered an error: ${error.message}`);
 } finally{
   Log.PopLogFolder()
 }
}