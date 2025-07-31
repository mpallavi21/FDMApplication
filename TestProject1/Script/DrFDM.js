//USEUNIT DrFDMPages
//USEUNIT ClientLoginPage
//USEUNIT ServerPage

// =====================================================================
// Author:        Bharath
// Function:      DrFDMOnFDMClient
// Description:   Launches the FDM Client, verifies form collection,
//                and then gracefully terminates the application.
// Created On:    30-Jul-2025
// Modified On:   30-Jul-2025
// =====================================================================

function DrFDMOnFDMClient() {
  Log.AppendFolder("DrFDMOnFDMClient - Execution Started");

  try {
    Log.Message("Launching FDM Client...");
    launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);

    Log.Message("Proceeding to collect and finalize form...");
    checkCollectAndProceedToFinalForm();

    Log.Message("Initiating termination of HCMClient...");
    terminateFMDClient();

    Log.Message("FDM workflow completed successfully.");
  } catch (error) {
    Log.Error("Error during FDM Client workflow: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      DrFDMOnFDMServer
// Description:   Launches the FDM Server, verifies form collection,
//                and then gracefully terminates the application.
// Created On:    30-Jul-2025
// Modified On:   30-Jul-2025
// =====================================================================

function DrFDMOnFDMServer() {
  Log.AppendFolder("DrFDMOnFDMServer - Execution Started");

  try {
    Log.Message("Launching FDM Server...");
    launchFDMServer(Project.Variables.FDMServerUserName, Project.Variables.FDMServerPassword);

    Log.Message("Proceeding to collect and finalize form...");
    checkCollectAndProceedToFinalForm();

    Log.Message("Initiating termination of HCMClient...");
    TerminateServerMgmtTool();

    Log.Message("FDM workflow completed successfully.");
  } catch (error) {
    Log.Error("Error during FDM Client workflow: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Author:        Bharath
// Function:      startDRFDM
// Description:   Starts DR FDM services, executes workflow, and terminates app.
// Created On:    30-Jul-2025
// Modified On:   30-Jul-2025
// =====================================================================

function startDRFDM() {
  Log.AppendFolder("startDRFDM - Full DR FDM Cycle");

  try {
    // Step 1: Start services and workflow
    startServices();
    Log.Message("Services started and workflow triggered.");

    // Step 2: Terminate DR FDM
    terminateDRFDM();
    Log.Message("DR FDM terminated successfully.");

  } catch (error) {
    Log.Error("Error in startDRFDM: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Author:        Bharath
// Function:      stopDRFDM
// Description:   stops DR FDM services, executes workflow, and terminates app.
// Created On:    30-Jul-2025
// Modified On:   30-Jul-2025
// =====================================================================

function stopDRFDM() {
  Log.AppendFolder("stopDRFDM - Full DR FDM Cycle");

  try {
    // Step 1: stop services and workflow
    stopServices();
    Log.Message("Services stoped and workflow triggered.");

    // Step 2: Terminate DR FDM
    terminateDRFDM();
    Log.Message("DR FDM terminated successfully.");

  } catch (error) {
    Log.Error("Error in stopDRFDM: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

