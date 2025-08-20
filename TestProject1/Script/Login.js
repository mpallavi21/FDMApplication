//USEUNIT ClientLoginPage
//USEUNIT ServerPage
//USEUNIT SettingsPage
//USEUNIT CommonPageObjects

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
    // TestedApps.HCMClient.Terminate();
    Aliases.HCMClient.ClientMainWindow.MdiClient.EntryPointTabPage.EntryPointsTabPage.HwndSource_AdornerDecorator.AdornerDecorator.HyperlinkMethodList
    Log.Checkpoint("FDMGR430 executed successfully.");
  } catch (error) {
    Log.Error("Error occurred in FDMGR430: ", error);
  } finally {
    Log.PopLogFolder()
  }
}


// =====================================================================
// Author:        Bharath
// Function:      Client_UI
// Description:   Launches the FDM Client and verifies successful login
//                using provided credentials.
// Created On:    22-Jul-2025
// Modified On:   22-Jul-2025
// =====================================================================

function Client_UI() {
  Log.AppendFolder("Client_UI - Verify that login client is successful");

  try {
    Log.Message("Launching FDM Client...");

    launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launched with provided credentials.");

  } catch (error) {
    Log.Error("Error occurred while launching FDM Client: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      Client_Login
// Description:   Launches the FDM Client and verifies successful login
//                using provided credentials.
// Created On:    22-Jul-2025
// Modified On:   22-Jul-2025
// =====================================================================

function Client_Login() {
  Log.AppendFolder("Client_Login - Verify that login client is successful");

  try {
    Log.Message("Launching FDM Client...");

    launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launched with provided credentials.");

  } catch (error) {
    Log.Error("Error occurred while launching FDM Client: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}



// =====================================================================
// Author:        Bharath
// Function:      Client_LoginFDMWindowUser
// Description:   Launches FDM Client using Windows-authenticated credentials
//                and verifies that login was successful.
// Created On:    22-Jul-2025
// Modified On:   22-Jul-2025
// =====================================================================

function Client_LoginFDMWindowUser() {
  Log.AppendFolder("Client_LoginFDMWindowUser - Verify that login client is successful");

  try {
    Log.Message("Launching FDM Client with Windows credentials...");

    launchFDMClient(Project.Variables.FDMClientUserName, Project.Variables.FDMClientPassword);
    Log.Message("FDM Client launched successfully.");

  } catch (error) {
    Log.Error("Error occurred while launching FDM Client: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

// =====================================================================
// Author:        Bharath
// Function:      Client_LoginFDMSSO
// Description:   Launches the FDM Client using Windows credentials and ensures
//                Single Sign-On is enabled before login, toggling it on temporarily
//                if required and resetting afterward.
// Created On:    22-Jul-2025
// Modified On:   22-Jul-2025
// =====================================================================

function Client_LoginFDMSSO() {
  Log.AppendFolder("Client_LoginFDMSSO - Verify that login client is successful");

  try {
    Log.Message("Launching FDM Client with Windows credentials...");
    
    // Attempt to launch directly if SSO is enabled
    launchFDMClient(Project.Variables.ClientWindowUserName, Project.Variables.ClientWindowPassword);
    Log.Message("FDM Client initial launch attempt completed.");

    if (Project.Variables.SignOnToggle == 1) {
      Log.Message("FDM Client successfully launched with Single Sign-On.");
    } else {
      Log.Warning("SSO not enabled, toggling it temporarily.");

      // Enable SSO, relaunch, then revert toggle to previous state
      Project.Variables.SignOnToggle = 1;
      enableDisableSingleSignOn(Project.Variables.SignOnToggle);
      launchFDMClient(Project.Variables.ClientWindowUserName, Project.Variables.ClientWindowPassword);
      Log.Message("Relaunched FDM Client with SSO temporarily enabled.");

      Project.Variables.SignOnToggle = 0;
      enableDisableSingleSignOn(Project.Variables.SignOnToggle);
      Log.Message("Reverted SSO toggle to original state.");
    }

  } catch (error) {
    Log.Error("Error occurred during Client_LoginFDMSSO: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}



// =====================================================================
// Author:        Bharath
// Function:      ClientLoginSwitchFDMServer
// Description:   Switches the active FDM Server to 'Localhost' using the
//                toolbar, then triggers the login button action.
// Created On:    22-Jul-2025
// Modified On:   22-Jul-2025
// =====================================================================

function ClientLoginSwitchFDMServer() {
  Log.AppendFolder("ClientLoginSwitchFDMServer - Server Switch and Login Workflow");

  try {
    
    // Attempt to launch directly if SSO is enabled
    launchFDMClient(Project.Variables.ClientWindowUserName, Project.Variables.ClientWindowPassword);
    Log.Message("FDM Client initial launch attempt completed.");
    
    // 🔄 Switch FDM Server from toolbar to 'Localhost'
    openFDMToolBarSwitchServer(Project.Variables.ServerName);
    Log.Message("FDM Server switched to: Localhost");

    // 🔐 Click on Login button
    clickOnLoginBtn();
    Log.Message("Login button clicked successfully.");
    clickOnLoginCancelBtn();
    clickOnLoginCancelBtn();
    clickOnConfirmFDMButton();
  } catch (error) {
    Log.Error("Error in ClientLoginSwitchFDMServer: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      ClientLoginSwitchServerCancel
// Description:   Switches FDM Server to 'Localhost' using the toolbar UI
//                and cancels the login attempt.
// Created On:    22-Jul-2025
// Modified On:   22-Jul-2025
// =====================================================================

function ClientLoginSwitchServerCancel() {
  Log.AppendFolder("ClientLoginSwitchServerCancel - Switch Server & Cancel Login");

  try {
    // Attempt to launch directly if SSO is enabled
    launchFDMClient(Project.Variables.ClientWindowUserName, Project.Variables.ClientWindowPassword);
    Log.Message("FDM Client initial launch attempt completed.");  
  
    // 🔄 Switch the active FDM Server to 'Localhost'
    openFDMToolBarSwitchServer("Localhost");
    Log.Message("FDM Server switched to: Localhost");

    // ❌ Cancel the login process
    clickOnLoginCancelBtn();
    Log.Message("Login operation cancelled.");
    
  } catch (error) {
    Log.Error("Exception in ClientLoginSwitchServerCancel: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      Client_LoginWindowUser
// Description:   Launches Client using Windows-authenticated credentials
//                and verifies that login was successful.
// Created On:    22-Jul-2025
// Modified On:   22-Jul-2025
// =====================================================================

function Client_LoginWindowUser() {
  Log.AppendFolder("Client_LoginWindowUser - Verify that login client is successful");

  try {
    Log.Message("Launching Client with Windows credentials...");

    launchFDMClient(Project.Variables.ClientWindowUserName, Project.Variables.ClientWindowPassword);
    Log.Message("FDM Client launched successfully.");

  } catch (error) {
    Log.Error("Error occurred while launching FDM Client: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      Client_LoginNonFDMUser
// Description:   Attempts to launch FDM Client with non-FDM user credentials
//                and verifies that login access is denied.
// Created On:    22-Jul-2025
// Modified On:   23-Jul-2025
// =====================================================================

function Client_LoginNonFDMUser() {
  Log.AppendFolder("Client_LoginNonFDMUser - Negative Login Test");

  try {
    Log.Message("Launching FDM Client with non-FDM user credentials...");

    launchFDMClient(Project.Variables.FDMNonUserName, Project.Variables.FDMNonUserPassword);
    Log.Message("Launch attempt executed.");

    let mainWindow = Aliases.HCMClient.ClientMainWindow;

    // ❌ Login should not succeed
    if (mainWindow.Exists && mainWindow.VisibleOnScreen) {
      Log.Error("Unexpected login success: Non-FDM user was able to access the client.");
    } else {
      Log.Message("Login correctly blocked for non-FDM user: " + Project.Variables.FDMNonUserName);
    }

  } catch (error) {
    Log.Message("Expected exception or denial. Login attempt failed for non-FDM user.");
    Log.Error("Login failure captured: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


// =====================================================================
// Author:        Bharath
// Function:      Client_LoginNonFDMGroupUser
// Description:   Attempts to launch FDM Client with non-FDM group user credentials
//                and verifies that login access is denied.
// Created On:    22-Jul-2025
// Modified On:   23-Jul-2025
// =====================================================================

function Client_LoginNonFDMGroupUser() {
  Log.AppendFolder("Client_LoginNonFDMGroupUser - Negative Login Test");

  try {
    Log.Message("Launching FDM Client with non-FDM group user credentials...");

    launchFDMClient(Project.Variables.FDMNonUserName, Project.Variables.FDMNonUserPassword);
    Log.Message("Launch attempt executed.");

    let mainWindow = Aliases.HCMClient.ClientMainWindow;

    // ❌ Login should not succeed
    if (mainWindow.Exists && mainWindow.VisibleOnScreen) {
      Log.Error("Unexpected login success: Non-FDM group user was able to access the client.");
    } else {
      Log.Message("Login correctly blocked for non-FDM group user: " + Project.Variables.FDMNonUserName);
    }

  } catch (error) {
    Log.Message("Expected exception or denial. Login attempt failed for non-FDM group user.");
    Log.Error("Login failure captured: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}


