//USEUNIT ClientLoginPage
//USEUNIT GenericMethods
//USEUNIT OfflineViewPages


// =====================================================================
// Author:        Bharath
// Function:      Deivce_ICONS_Create_DD_Offlineconfig15865
// Description:   Launches FDM client, navigates to Offline Configurations, and creates DD config
// Created On:    05-Aug-2025
// =====================================================================

function Deivce_ICONS_Create_DD_Offlineconfig15865() {
  // 🔐 Launches the FDM client using predefined credentials
  launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);

  // 🌐 Navigates to the Offline View section
  goToOfflineView();

  // 🗂 Clicks on the Offline tab to access available configurations
  ClickOfflineTab();

  // ⚙️ Opens the DD Offline Configuration screen
  OpenDDOfflineConfigurations();

  // 🛠 Creates a DD Offline Configuration using fixed input values
  createDDOfflineConfiguration("HART", "3S_24708", "MP100/MP300 Series", "2", "1");
  
  EnterOfflineDeviceConfigurationDetails() 
}


// =====================================================================
// Author:        Bharath
// Function:      DeviceIcons_Create_DisplayFilter
// Description:   Launches the FDM client, navigates to Offline View, and creates Display Filter configuration.
// Created On:    05-Aug-2025
// =====================================================================
function DeviceIcons_Create_DisplayFilter15871() {
  Log.AppendFolder("DeviceIcons_Create_DisplayFilter");

  try {
    // 🔐 Launches the FDM client using predefined credentials
    launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launched successfully.");

    // 🌐 Navigates to the Offline View section
    goToOfflineView();
    Log.Message("Navigated to Offline View.");

    // 🧩 Creates Display Filter configuration
    CreateDisplayFilterConfiguration();
    Log.Message("Display Filter configuration created.");

  } catch (error) {
    Log.Error("Error in DeviceIcons_Create_DisplayFilter: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      DeviceICONS_Create_DTM_OfflineConfig15875
// Description:   Launches FDM client, navigates to Offline View, and creates a DTM offline config
// Created On:    05-Aug-2025
// =====================================================================
function DeviceICONS_Create_DTM_OfflineConfig15875() {
  Log.AppendFolder("DeviceICONS_Create_DTM_OfflineConfig15875");

  try {
    // 🔐 Authenticate and launch FDM client
    launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launched with provided credentials.");

    // 🌐 Navigate to Offline View
    goToOfflineView();
    Log.Message("Navigated to Offline View successfully.");

    // 🗂 Open Offline tab
    ClickOfflineTab();
    Log.Message("Offline tab clicked.");

    // ⚙️ Create Offline DTM Configuration
    CreateOfflineDTMConfig();
    Log.Message("Offline DTM configuration created.");

    // 🧹 Clean up the window
    closeWindowPage();
    Log.Message("Window closed post configuration.");

    // ✅ Confirm operations twice if required
    clickOnConfirmFDMButton();
    clickOnConfirmFDMButton();
    Log.Message("Confirmation buttons clicked.");

  } catch (error) {
    Log.Error("Error in DeviceICONS_Create_DTM_OfflineConfig15875: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}
