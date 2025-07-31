function clickOnSystemAttachDocument()
{
  let HCMClient = Aliases.HCMClient;
  let frmHCMClientMain = HCMClient.ClientMainWindow;
  OCR.Recognize(frmHCMClientMain.mainMenu).BlockByText("Tools").Click();
  OCR.Recognize(HCMClient.DropDownForm.SubSmartControl).BlockByText("System").Click();
  frmHCMClientMain.panelLeftPanMain.tabControlLeftPanMain.tabPageOnlineView.panelOnlineView.panelTabControlOnlineView.tabControlOnlineView.tabConnected.Keys("[Right][Enter]");
}


function clickOnSystemDetachDocument()
{
  let HCMClient = Aliases.HCMClient;
  let frmHCMClientMain = HCMClient.ClientMainWindow;
  OCR.Recognize(frmHCMClientMain.mainMenu).BlockByText("Tools").Click();
  OCR.Recognize(HCMClient.DropDownForm.SubSmartControl).BlockByText("System").Click();
  frmHCMClientMain.panelLeftPanMain.tabControlLeftPanMain.tabPageOnlineView.panelOnlineView.panelTabControlOnlineView.tabControlOnlineView.tabConnected.Keys("[Right][Down][Enter]");
}