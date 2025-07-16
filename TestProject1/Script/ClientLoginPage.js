
let HCMClient = Aliases.HCMClient
let ClientLogin = HCMClient.ClientLogin
let UserNameTextBox = ClientLogin.UserNameTextBox
let PasswordTextBox = ClientLogin.PasswordTextBox

function EnterClientUserName(UserName){
  UserNameTextBox.TextBoxArea.SetFocus()
  UserNameTextBox.TextBoxArea.SetText(UserName)
}

function EnterClientPassword(Password){
  PasswordTextBox.TextBoxArea.SetFocus()
  PasswordTextBox.TextBoxArea.SetText(Password)
}

// =====================================================================
// Author:        Bharath
// Function:      launchFDMClient
// Description:   Launches the FDM Client using specified credentials,
//                selects server and domain, and navigates to the main window.
// Created On:    2025-06-20
// Modified On:   None
// =====================================================================
function launchFDMClient(Username,Password) {
  Log.AppendFolder("launchFDMClient - Launches the FDM Client using specified credentials")
  Log.Checkpoint("Launching FDM Client...");

  // Terminate HCMClient if already running
  if (Sys.WaitProcess("HCMClient", 5000).Exists) {
    Log.Message("HCMClient process found. Terminating...");
    Sys.Process("HCMClient").Terminate();
  }

  // Launch the HCMClient tested application
  Log.Message("Running TestedApps.HCMClient...");
  TestedApps.HCMClient.Run(1, true);

  // Select server from dropdown
  Log.Message("Setting server...");
  let server = Aliases.HCMClient.ClientLogin.FdmServerNameField
  let ServerDDbox = server.TextFieldArea
  ServerDDbox.SetText("LocalHost");
  Log.Message("Server set to: " + "LocalHost");

  // Click 'OK' to proceed to credentials
  Log.Message("Clicking initial login button...");
  let LoginBtn = HCMClient.FindChild("WinFormsControlName", "btnOK", 50, true);
  LoginBtn.Click();

  // Set Username
  EnterClientUserName(Username);

  // Set Password
  EnterClientPassword(Password)

  // Select Domain
  Log.Message("Selecting domain...");
  HCMClient.ClientLogin.DomainTextBox.Click();
  Log.Message("Domain selected via keyboard input.");

  // Final Login
  Log.Message("Clicking final login button...");
  let FDMLoginBtn = HCMClient.FindChild("WinFormsControlName", "btnOK", 50, true);
  FDMLoginBtn.Click();

  // Wait for main application window
  Log.Message("Waiting for main application window...");
  let mainWindow = HCMClient.FindChild("WinFormsControlName", "frmHCMClientMain", 50, true);
  mainWindow.WaitProperty("Exists", true, 50000);
  Log.Checkpoint("FDM Client launched and main window detected.");
  aqUtils.Delay(1000);
  Log.PopLogFolder()
}


function terminateFMD(){
  TestedApps.HCMClient.Terminate()
}