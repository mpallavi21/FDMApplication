//USEUNIT ServerPage

// =====================================================================
// Author:        Bharath
// Function:      FDMGR
// Description:   Verify that login Server is successful
// Created On:    2025-06-19
// Modified On:   None
// =====================================================================
function FDMGR() {
  try {
    Log.AppendFolder("FDMGR3909 - Verify that login server is successful")
    Log.Message("Launching FDM server...");
    launchFDMServer(Project.Variables.FDMServerUserName, Project.Variables.FDMServerPassword);

    Log.Message("Terminating HCMClient...");
 //   TestedApps.ServerMgmtTool.Terminate();

    Log.Checkpoint("FDMGR executed successfully.");
  } catch (error) {
    Log.Error("Error occurred in FDMGR ", error.message);
  } finally {
    Log.PopLogFolder()
  }
  
}


function FDMGR4302(){
  try{
  Log.AppendFolder("FDMGR4302 - AddNetwork (Verify that the network configuration is successful for different types of networks")
 // launchFDMServer(Project.Variables.FDMServerUserName, Project.Variables.FDMServerPassword);
  clickAddNewNetworkButton()
  addNetworkConfiguration({
  networkInterfaceName: "MUX1",
  networkType: "RS-485 HART Multiplexer",
  rciServerName: "LOCALHOST",
  comPort: "COM3",
  baudRate: "9600",
});
  clickOnAddNetworkOkButton()
  submitAuditTrailReason("Add")
  handleCustomMessageBox()
   } catch (error) {
    Log.Error("Error occurred in FDMGR ", error.message);
  } finally {
    Log.PopLogFolder()
  }
}

function DeleteNetwork(){
  clickNetworkListItemByName("MUX1")
  clickDeleteNetworkButton()
  handleCustomMessageBox()
  submitAuditTrailReason("Delete")
  
}


function FDMGR4303(){
  try{
  Log.AppendFolder("FDMGR4303 - Update to New licence")
  clickMainPanelButton("licensing")
  updateLicense("\\C:\\Users\\Admin\\Desktop\\FDMR540_Base_License_with_all_features.xml")
  Log.Checkpoint("FDMGR4303 executed successfully.");
  } catch (error) {
    Log.Error("Error occurred in FDMGR ", error.message);
  } finally {
    Log.PopLogFolder()
  }
}