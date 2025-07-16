//USEUNIT QuickViewPages


// =====================================================================
// Author:        Bharath
// Function:      FDMGR5899
// Description:   Verifies that Quick View launches for a specific FDM device
//                and logs its diagnostic information.
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function FDMGR5899() {
  try {
    Log.AppendFolder("FDMGR5899 - Verify Quick View Launch and Log Device Info");

    const devicePath = "|FDM Server ( DESKTOP-AJ7O5O5 )|DESKTOP-AJ7O5O5|MUX|SFT_PNF|644";

    // Step 1: Verify Quick View launches for the device
    verifyQuickViewLaunch(devicePath);

    // Step 2: Log diagnostic/device information
    logFDMDeviceInformation();

    Log.Checkpoint("✅ FDMGR5899 passed: Quick View verified and device info logged.");
  } catch (error) {
    Log.Error("❌ FDMGR5899 failed during Quick View verification or logging:", error);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      FDMGR5900
// Description:   Verifies that Quick View launches for a specific FDM device
//                and checks the device status using FDMDeviceStatus()
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================

function FDMGR5900() {
  try {
    Log.AppendFolder("FDMGR5900 - Verify Quick View and Device Status");

    const devicePath = "|FDM Server ( DESKTOP-AJ7O5O5 )|DESKTOP-AJ7O5O5|MUX|SFT_PNF|644";

    // Step 1: Launch and verify Quick View
    verifyQuickViewLaunch(devicePath);

    // Step 2: Check the device status
    FDMDeviceStatus();

    Log.Checkpoint("✅ FDMGR5900 passed: Quick View launched and device status verified.");
  } catch (error) {
    Log.Error("❌ FDMGR5900 failed during Quick View or device status check:", error);
  } finally {
    Log.PopLogFolder();
  }
}
