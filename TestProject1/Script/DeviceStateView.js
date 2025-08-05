//USEUNIT ClientLoginPage
//USEUNIT DeviceStateViewPage
//USEUNIT CommonPageObjects



// =====================================================================
// Author:        Bharath
// Function:      DeviceStateView
// Description:   Launches FDM Client, opens Device State View tab, expands nodes, and initiates Calibration Status change.
// Created On:    04-Aug-2025
// Modified On:   
// =====================================================================

function DeviceStateView_components() {
  Log.AppendFolder("DeviceStateView");

  try {
    Log.Message("Launching FDM Client...");
    launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Checkpoint("FDM Client launched.");

    Log.Message("Navigating to 'Device State View' tab...");
    if (!ClickDeviceStateViewTab()) throw new Error("Failed to click Device State View tab.");

    Log.Message("Expanding device status nodes...");
    if (!ExpandDeviceStatusNodes()) throw new Error("Failed to expand one or more tree nodes.");

    Log.Message("Triggering Calibration Status change...");
    ClickCalibrationStatusChange();

  } catch (error) {
    Log.Error("Error in DeviceStateView: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}
